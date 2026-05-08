import fs from 'fs';
import path from 'path';

const folders = ['mugs', 'vases', 'chai', 'process', 'about', 'background'];
const assetsDir = path.resolve(process.cwd(), 'assets');

console.log('Generating image manifests...');

folders.forEach(folder => {
  const dirPath = path.join(assetsDir, folder);
  
  // Ensure directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
  
  // Read all files and filter for images
  const files = fs.readdirSync(dirPath)
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    
  const manifestPath = path.join(dirPath, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(files, null, 2));
  console.log(`Wrote ${files.length} items to ${folder}/manifest.json`);
});

console.log('Manifest generation complete.');
