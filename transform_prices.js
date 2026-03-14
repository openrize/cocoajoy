const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'js', 'data.js');
let content = fs.readFileSync(dataFilePath, 'utf8');

// Use regex to find and replace prices
// The pattern looks for 'price: 28.99,' and similar
const updatedContent = content.replace(/price:\s*(\d+(\.\d+)?)/g, (match, p1) => {
    const originalPrice = parseFloat(p1);
    const newPrice = (originalPrice * 1.8).toFixed(2);
    console.log(`Updating price: ${originalPrice} -> ${newPrice}`);
    return `price: ${newPrice}`;
});

fs.writeFileSync(dataFilePath, updatedContent, 'utf8');
console.log('Price transformation complete.');
