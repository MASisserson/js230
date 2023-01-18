"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const textField = document.querySelector('.text-field');
  const content = document.querySelector('.content');
  let cursorInterval;
  let focused = false;

  textField.addEventListener('click', event => {
    event.stopPropagation();
    if (!focused) {
      focused = true;
      textField.classList.add('focused');
  
      cursorInterval = setInterval(() => {
        textField.classList.toggle('cursor');
      }, 500);
    }
  });

  document.addEventListener('keydown', event => {
    if (textField.classList.contains('focused')) {
      if (/^[\w\W]?$/i.test(event.key)) {
        content.textContent += event.key;
      } else if (event.key === 'Backspace') {
        let text = content.textContent;
        content.textContent = text.slice(0, text.length - 1);
      }
    }
  });

  document.addEventListener('click', () => {
    clearInterval(cursorInterval);
    textField.classList.remove('focused');
    textField.classList.remove('cursor');
    focused = false;
  });
});

