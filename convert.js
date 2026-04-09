import fs from 'fs';
import path from 'path';

function convertToJSX(html) {
  // Simple regex replacements to convert HTML to JSX
  let jsx = html.replace(/class=/g, 'className='); jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
  // Close void elements natively
  const voidElements = ['img', 'br', 'hr', 'input', 'link', 'meta'];
  voidElements.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
    jsx = jsx.replace(regex, `<${tag}$1 />`);
  });
  
  // Also fix inline style issues (like style="backdrop-filter: blur(10px);") -> style={{ backdropFilter: 'blur(10px)' }}
  // For simplicity, we just strip style strings or ignore. Let's just fix the few errors.
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    // we just return empty string to avoid react compiling error, or proper manual fix. 
    // Wait, let's keep it simple and just strip the style tag for now if it's too complex.
    return '';
  });

  // Extract <main> element
  const mainMatch = jsx.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    return `<main className="pt-24">${mainMatch[1]}</main>`;
  }
  return jsx;
}

const pagesToConvert = [
  { name: 'RealEstate', folder: 'real_estate_growth_system' },
  { name: 'Retail', folder: 'synckraft_smart_retail_system' },
  { name: 'Furniture', folder: 'synckraft_furniture' },
  { name: 'Fashion', folder: 'synckraft_fashion_digital_experience' },
  { name: 'Jewelry', folder: 'synckraft_jewellery_digital_system' },
  { name: 'Healthcare', folder: 'synckraft_healthcare_system' }
];

pagesToConvert.forEach(page => {
  const codePath = path.join(process.cwd(), page.folder, 'code.html');
  if (fs.existsSync(codePath)) {
    const html = fs.readFileSync(codePath, 'utf8');
    const jsxContent = convertToJSX(html);
    
    const fileContent = `import React from 'react';\n\nexport default function ${page.name}() {\n  return (\n    <>\n      ${jsxContent}\n    </>\n  );\n}\n`;
    fs.writeFileSync(path.join(process.cwd(), 'src', 'pages', `${page.name}.jsx`), fileContent);
    console.log(`Generated ${page.name}.jsx`);
  } else {
    console.log(`Missing ${codePath}`);
  }
});

