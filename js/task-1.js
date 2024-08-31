'use strict';

const allCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Element: ${item.querySelectorAll('li').length}`);
});
