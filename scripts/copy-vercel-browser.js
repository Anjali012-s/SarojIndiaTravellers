const fs = require('fs');
const path = require('path');

const src = path.join('dist', 'saroj-india-travellers', 'browser');
const dest = 'browser';

if (!fs.existsSync(src)) {
  console.error(`Angular output not found at ${src}`);
  process.exit(1);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log(`Copied ${src} -> ${dest}`);
