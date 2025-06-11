const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

async function fetchContributionGrid(username) {
  const res = await fetch(`https://github.com/users/${username}/contributions`);
  const html = await res.text();
  const dom = new JSDOM(html);
  const weeks = [...dom.window.document.querySelectorAll('g > g')];

  const grid = [];

  weeks.forEach((week, x) => {
    const days = week.querySelectorAll('rect');
    days.forEach((day, y) => {
      grid.push({
        x,
        y,
        date: day.getAttribute('data-date'),
        level: parseInt(day.getAttribute('data-level') || '0')
      });
    });
  });

  return grid;
}

module.exports = fetchContributionGrid;
