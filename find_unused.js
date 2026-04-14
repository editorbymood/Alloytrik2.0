const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const srcDir = path.join(__dirname, 'src');
const allFiles = getFiles(srcDir);
const unusedFiles = [];

allFiles.forEach(target => {
  const basename = path.basename(target, path.extname(target));
  if (['main', 'App', 'index', 'Home'].includes(basename)) return;

  let isUsed = false;
  for (const file of allFiles) {
    if (target === file) continue;
    const content = fs.readFileSync(file, 'utf8');
    // Simple heuristic: check if the basename is imported/used in the file
    // Also check with /basename to avoid false positives with similar words
    if (content.includes(basename) || content.includes(`/${basename}`) || content.includes(`'./${basename}'`)) {
      isUsed = true;
      break;
    }
  }

  if (!isUsed) {
    unusedFiles.push(target);
  }
});

console.log("Potentially unused:")
unusedFiles.forEach(f => console.log(f));
