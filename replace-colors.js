const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = {
  '#0A192F': '#0B1120', // Background
  '#0D1E36': '#111827', // Cards
  '#1A3A5C': '#1E293B', // Light Slate Accent
  '#2B9ED4': '#00E5FF', // Electric Cyan
  '#162E52': '#0F172A', // Hover dark
  '#051024': '#020617', // Gradient deep
  '#0A2240': '#09090B', // Gradient black
  '#F0F7FC': '#E0F2FE', // Very light blue to sky
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const [oldColor, newColor] of Object.entries(replacements)) {
        // Replace case-insensitively just in case
        const regex = new RegExp(oldColor, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, newColor);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Color overhaul complete.');
