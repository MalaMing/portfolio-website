import fs from 'fs';

const tokens = JSON.parse(fs.readFileSync('./tokens/token.json', 'utf8'));

function resolveReferences(obj, allTokens) {
  if (typeof obj === 'string' && obj.startsWith('{') && obj.endsWith('}')) {
    const path = obj.slice(1, -1).split('.');
    let value = allTokens;
    
    for (const key of path) {
      value = value[key];
      if (!value) break;
    }
    
    if (value && value.value) {
      return resolveReferences(value.value, allTokens);
    }
    return obj;
  }
  
  if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = resolveReferences(value, allTokens);
    }
    return result;
  }
  
  return obj;
}

const resolvedTokens = resolveReferences(tokens, tokens);

function objectToCssVars(obj, prefix = '') {
  let css = '';
  
  for (const [key, value] of Object.entries(obj)) {
    const cleanKey = key.replace(/^global-token-value/, '').replace(/^components/, ''); // Clean up here
    const cssKey = prefix ? `${prefix}-${cleanKey}` : cleanKey;

    if (value && typeof value === 'object' && value.value) {
      css += `  --${cssKey}: ${value.value};\n`;
    } else if (value && typeof value === 'object' && !value.value) {
      css += objectToCssVars(value, cssKey);
    }
  }
  return css;
}

const cssContent = `:root {
${objectToCssVars(resolvedTokens)}}\n`;

fs.writeFileSync('./tokens/token.css', cssContent);

console.log('✅ Design tokens generated successfully!');
console.log('📁 Generated: ./tokens/token.css');