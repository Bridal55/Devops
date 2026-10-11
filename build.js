
const fs = require('node:fs');

fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('calculator.js', 'dist/calculator.js');

console.log('Build completed successfully!');
