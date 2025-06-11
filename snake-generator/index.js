const fetchGrid = require('./fetchGraph');
const generateSVG = require('./generateSVG');
const path = require('path');

(async () => {
  const username = 'Pranam2002';
  const grid = await fetchGrid(username);
  generateSVG(grid, path.join(__dirname, '../dist/github-snake.svg'));
})();
