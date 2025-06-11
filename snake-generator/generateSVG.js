const fs = require('fs');

function generateSVG(grid, outputFile) {
  const size = 12;
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="110">`;

  // Draw background
  svg += `<rect width="100%" height="100%" fill="#0d1117"/>`;

  // Snake animation loop (simple right-to-left serpentine)
  grid.forEach((cell, i) => {
    const delay = i * 60;
    const color = ['#0e4429', '#006d32', '#26a641', '#39d353'][cell.level] || '#161b22';

    svg += `
    <rect x="${cell.x}" y="${cell.y}" width="${size}" height="${size}" fill="${color}">
      <animate attributeName="fill" values="${color};#8a2be2;${color}" dur="2s" begin="${delay}ms" repeatCount="1"/>
    </rect>`;
  });

  svg += `</svg>`;
  fs.writeFileSync(outputFile, svg);
}

module.exports = generateSVG;
