const fs = require('fs');

function generateSVG(grid, outputFile) {
  const cellSize = 14;
  const cols = Math.max(...grid.map(c => c.x)) + 1;
  const rows = 7;
  const width = cols * cellSize;
  const height = rows * cellSize;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`;
  svg += `<rect width="100%" height="100%" fill="#0d1117"/>`;

  // Snake animation effect
  const sorted = grid.sort((a, b) => a.y === b.y ? a.x - b.x : a.y - b.y);

  sorted.forEach((cell, i) => {
    const delay = i * 40;
    const color = ['#0e4429', '#006d32', '#26a641', '#39d353'][cell.level] || '#161b22';

    svg += `
    <rect x="${cell.x * cellSize}" y="${cell.y * cellSize}" width="${cellSize}" height="${cellSize}" fill="${color}">
      <animate attributeName="fill" values="${color};#8a2be2;${color}" dur="1s" begin="${delay}ms" repeatCount="1"/>
    </rect>`;
  });

  svg += `</svg>`;

  fs.writeFileSync(outputFile, svg);
}

module.exports = generateSVG;
