const fetchGrid = require('./fetchGraph');
const generateSVG = require('./generateSVG');
const path = require('path');
const fs = require('fs');

(async () => {
  const username = 'Pranam2002';
  const grid = await fetchGrid(username);

  const dist = path.join(__dirname, '../dist');
  fs.mkdirSync(dist, { recursive: true });

  generateSVG(grid, path.join(dist, 'github-snake.svg'));
})();
