const fs = require('fs');
const path = require('path');

const DATA_FILE = 'js/data.js';
const content = fs.readFileSync(DATA_FILE, 'utf8');

// The marker for the start of the array
const startMarker = 'const PRODUCTS = [';
const endMarker = '];';

const startIndex = content.indexOf(startMarker);
const endIndex = content.lastIndexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error('Markers not found');
    process.exit(1);
}

const productsText = content.substring(startIndex + startMarker.length, endIndex);

// Split by the pattern that marks the start of a product object
// We want to remove the first 12 products.
// Our integrated products start with id: 13, 14...
// The placeholder products have id: 1, 2...

// We can identify them by their category if needed, but ID is reliable for the first 12.
// Alternatively, we can just filter out based on ID < 13.

// Regular expression to match each product block
// Since they are formatted with { id: N, ... }, we can use that to split or find.
const productBlocks = productsText.split(/},?\s*\{/);
// This split might be tricky due to nested objects (features etc).
// Let's use a more robust way: regex match entire objects.
// Actually, since they follow a predictable indentation and pattern for ID:

const updatedProducts = [];
let nextId = 1;

// Regex to find all product objects
// This regex matches { followed by id: \d+ ... until the matching } at the same level.
// However, simple matching for id: \d+ and replacing it is easier if we just remove the first 12 blocks.

// Let's try splitting by '  {' at the start of a line.
const blocks = productsText.split(/\n\s*\{/);
// blocks[0] might be empty if it starts with \n {

const filteredBlocks = [];
for (let block of blocks) {
    if (!block.trim()) continue;
    
    const idMatch = block.match(/id:\s*(\d+)/);
    if (idMatch) {
        const id = parseInt(idMatch[1]);
        if (id >= 13) {
            // Keep this block but update ID
            const newBlock = block.replace(/id:\s*\d+/, `id: ${nextId++}`);
            filteredBlocks.push('  {' + newBlock);
        }
    }
}

const newProductsText = filteredBlocks.join(',\n');
const newContent = content.substring(0, startIndex + startMarker.length) + '\n' + newProductsText + '\n' + content.substring(endIndex);

fs.writeFileSync(DATA_FILE, newContent);
console.log(`Removed first 12 products and re-indexed ${filteredBlocks.length} products.`);
