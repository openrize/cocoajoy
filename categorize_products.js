const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'js', 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');

// Simple regex to extract the PRODUCTS array
const productRegex = /const PRODUCTS = (\[[\s\S]*?\]);/;
const match = content.match(productRegex);

if (!match) {
    console.error("Could not find PRODUCTS array in data.js");
    process.exit(1);
}

let products;
try {
    // We can't easily JSON.parse because it's JS, not JSON (contains unquoted keys, etc.)
    // But for a simple script, we can eval the array part safely since we know the content
    products = eval(match[1]);
} catch (e) {
    console.error("Error parsing PRODUCTS array:", e);
    process.exit(1);
}

function categorize(name, desc) {
    const text = (name + " " + desc).toLowerCase();
    
    if (text.includes('chocolate') || text.includes('choco') || text.includes('truffle') || text.includes('candy')) {
        return "Premium Chocolates";
    }
    if (text.includes('energy') || text.includes('stamina') || text.includes('libido') || text.includes('endurance') || text.includes('vitality') || text.includes('performance')) {
        return "Energy & Vitality";
    }
    if (text.includes('supplement') || text.includes('herbal') || text.includes('maca') || text.includes('ginseng') || text.includes('health') || text.includes('wellness') || text.includes('dietary')) {
        return "Wellness & Health";
    }
    if (text.includes('box') || text.includes('gift') || text.includes('pouch') || text.includes('bottle')) {
        return "Gift Sets";
    }
    return "Others";
}

products.forEach(p => {
    p.category = categorize(p.name, p.description || "");
});

// Format the array back to a string
const updatedProductsString = JSON.stringify(products, null, 2);
// Replacing double quotes on keys with no quotes for consistency with the original file
const formattedProducts = updatedProductsString.replace(/"([^"]+)":/g, '$1:');

const updatedContent = content.replace(productRegex, `const PRODUCTS = ${formattedProducts};`);

fs.writeFileSync(dataPath, updatedContent);
console.log(`Successfully categorized ${products.length} products.`);
