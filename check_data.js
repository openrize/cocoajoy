const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'js', 'data.js');
const content = fs.readFileSync(dataPath, 'utf8');

// Simple regex to extract the PRODUCTS array
const productRegex = /const PRODUCTS = (\[[\s\S]*?\]);/;
const match = content.match(productRegex);

if (!match) {
    console.error("Could not find PRODUCTS array");
    process.exit(1);
}

const PRODUCTS = eval(match[1]);

console.log(`Total products: ${PRODUCTS.length}`);

PRODUCTS.forEach((p, i) => {
    if (!p) {
        console.error(`Product at index ${i} is null or undefined`);
        return;
    }
    if (typeof p.name !== 'string' || p.name.trim() === '') {
        console.error(`Product at index ${i} (ID: ${p.id}) has invalid name: ${p.name}`);
    }
    if (typeof p.price !== 'number') {
        console.error(`Product at index ${i} (ID: ${p.id}) has invalid price: ${p.price} (${typeof p.price})`);
    }
    if (typeof p.id !== 'number') {
        console.error(`Product at index ${i} has invalid ID: ${p.id}`);
    }
});
console.log("Validation complete.");
