const fs = require('fs');
const path = require('path');

// Cartella della build (indicata in package.json)
const dist = process.argv[2];

// Pagine interne del sito
const routes = ['about', 'releases', 'events', 'mixtape-archive', 'moreismoreismore'];

const indexPath = path.join(dist, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');

for (const route of routes) {
  // Ogni pagina dichiara il proprio indirizzo
  const pageHtml = html.replaceAll(
    'https://neanchepersogno.com/"',
    `https://neanchepersogno.com/${route}"`
  );
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), pageHtml);
  console.log('Creato ' + route + '/index.html');
}