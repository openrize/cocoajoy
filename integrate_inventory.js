const fs = require('fs');
const path = require('path');

const PLEASURENEST_DIR = path.join('..', 'PleasureNest');
const DATA_FILE = path.join('js', 'data.js');

function parsePrice(priceStr) {
    if (!priceStr) return 0;
    const match = priceStr.match(/\$(\d+(\.\d+)?)/);
    if (match) {
        return parseFloat(match[1]);
    }
    return 0;
}

function parseCSV(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    if (lines.length < 2) return [];
    
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    
    const dataIndex = headers.indexOf('data');
    const priceIndex = headers.indexOf('price');
    const imageIndex = headers.indexOf('image');
    
    if (dataIndex === -1 || priceIndex === -1 || imageIndex === -1) {
        return [];
    }
    
    const results = [];
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        
        const row = [];
        let current = '';
        let inQuotes = false;
        const line = lines[i];
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"') {
                if (inQuotes && line[j+1] === '"') {
                    current += '"';
                    j++;
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                row.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        row.push(current);
        
        const name = row[dataIndex] || 'Premium Product';
        const rawPrice = row[priceIndex];
        const image = row[imageIndex] || 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=800';
        
        const price = parsePrice(rawPrice);
        if (price > 0) {
            results.push({
                name: name.trim(),
                price: parseFloat((price * 1.8).toFixed(2)),
                image: image.trim(),
                category: 'Premium Lifestyle'
            });
        }
    }
    return results;
}

function integrate() {
    console.log('Reading existing data...');
    let dataContent = fs.readFileSync(DATA_FILE, 'utf8');
    
    const startMarker = 'const PRODUCTS = [';
    const endMarker = '];';
    
    const startIndex = dataContent.indexOf(startMarker);
    const endIndex = dataContent.indexOf(endMarker, startIndex + startMarker.length);
    
    if (startIndex === -1 || endIndex === -1) {
        console.error('Could not find PRODUCTS array in data.js');
        return;
    }

    // Build set of existing product names to avoid duplicates
    const productArrayContent = dataContent.substring(startIndex + startMarker.length, endIndex);
    const existingNames = new Set();
    const nameRegex = /name:\s*"([^"]+)"/g;
    let match;
    while ((match = nameRegex.exec(productArrayContent)) !== null) {
        existingNames.add(match[1].replace(/\\"/g, '"'));
    }

    // Find max ID
    const idRegex = /id:\s*(\d+)/g;
    let maxId = 0;
    while ((match = idRegex.exec(productArrayContent)) !== null) {
        maxId = Math.max(maxId, parseInt(match[1]));
    }
    
    console.log(`Current products count: ${existingNames.size}. Max ID: ${maxId}`);

    console.log('Finding CSV files in PleasureNest...');
    const csvFiles = fs.readdirSync(PLEASURENEST_DIR)
        .filter(file => file.endsWith('.csv'));
    
    let newProducts = [];
    csvFiles.forEach(file => {
        const filePath = path.join(PLEASURENEST_DIR, file);
        console.log(`Processing ${file}...`);
        newProducts = newProducts.concat(parseCSV(filePath));
    });

    const uniqueNewProducts = [];
    newProducts.forEach(p => {
        if (!existingNames.has(p.name)) {
            existingNames.add(p.name);
            uniqueNewProducts.push(p);
        }
    });

    console.log(`Found ${uniqueNewProducts.length} new unique products.`);

    if (uniqueNewProducts.length === 0) {
        console.log('No new products to add.');
        return;
    }

    let nextId = maxId + 1;
    const newProductsString = uniqueNewProducts.map(p => {
        return `  {
    id: ${nextId++},
    name: "${p.name.replace(/"/g, '\\"')}",
    price: ${p.price},
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "${p.category}",
    image: "${p.image}",
    emoji: "💎",
    isNew: true
  }`;
    }).join(',\n');

    const updatedArray = productArrayContent.trim();
    const separator = updatedArray.length > 0 && !updatedArray.endsWith(',') ? ',\n' : '\n';
    
    const updatedContent = dataContent.substring(0, startIndex + startMarker.length) + 
                           '\n' + updatedArray + separator + newProductsString + '\n' + 
                           dataContent.substring(endIndex);

    fs.writeFileSync(DATA_FILE, updatedContent);
    console.log(`Successfully integrated ${uniqueNewProducts.length} new products into js/data.js`);
}

integrate();
