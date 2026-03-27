const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      filelist = walkSync(filePath, filelist);
    } else if (filePath.endsWith('.jsx')) {
      filelist.push(filePath);
    }
  });
  return filelist;
};

const componentsDir = path.join(__dirname, 'src', 'components');
const pagesDir = path.join(__dirname, 'src', 'pages');

const files = [...walkSync(componentsDir), ...walkSync(pagesDir)];

let updatedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Enhance Transitions
  content = content.replace(/transition=\{\{([^}]+)\}\}/g, (match, inner) => {
    // Skip if it's an infinite loop animation (e.g. background icons, hero pulsing)
    if (inner.includes('Infinity') || inner.includes('repeat')) {
      return match;
    }

    let newInner = inner.trim();

    // Fix or apply easing
    if (!newInner.includes('ease:')) {
       // Only append comma if newInner is not empty
       newInner = newInner.length > 0 ? `${newInner}, ease: [0.22, 1, 0.36, 1]` : `ease: [0.22, 1, 0.36, 1]`;
    } else {
       // Replace existing ease strings like ease: "easeOut"
       newInner = newInner.replace(/ease:\s*['"][^'"]+['"]/g, `ease: [0.22, 1, 0.36, 1]`);
    }

    // Optimize duration for bezier curves (they need slightly more time to look luxurious)
    if (newInner.includes('duration:')) {
       newInner = newInner.replace(/duration:\s*([0-9.]+)/, (m, d) => {
           let dur = parseFloat(d);
           // Boost short durations specifically for fade up layouts
           if (dur >= 0.3 && dur <= 0.6) {
               return `duration: ${0.8}`;
           }
           return m;
       });
    } else {
       newInner += `, duration: 0.8`;
    }

    return `transition={{ ${newInner} }}`;
  });

  // Make the spatial distance of fades slightly more noticeable and elegant
  content = content.replace(/y:\s*30\b/g, `y: 40`)
                   .replace(/y:\s*20\b/g, `y: 30`)
                   .replace(/x:\s*-30\b/g, `x: -40`);

  if (content !== original) {
    fs.writeFileSync(file, content);
    updatedFiles++;
  }
});

console.log(`Updated ${updatedFiles} files for globally perfect smoothness.`);
