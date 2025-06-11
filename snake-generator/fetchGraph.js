const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

async function fetchContributionGrid(username) {
  const url = `https://github.com/users/${username}/contributions`;
  const res = await fetch(url);
  const html = await res.text();
  const dom = new JSDOM(html);
  const rects = dom.window.document.querySelectorAll('rect');

  const grid = Array.from(rects).map(rect => ({
    x: parseInt(rect.getAttribute('x')),
    y: parseInt(rect.getAttribute('y')),
    level: parseInt(rect.getAttribute('data-level')),
    date: rect.getAttribute('data-date')
  }));

  return grid;
}

module.exports = fetchContributionGrid;
