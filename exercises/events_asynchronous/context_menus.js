"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const sub = document.querySelector('#sub');

  main.addEventListener('contextmenu', event => {
    event.preventDefault();
    alert('main');
  });

  sub.addEventListener('contextmenu', event => {
    event.preventDefault();
    event.stopPropagation();
    alert('sub');
  })
});
