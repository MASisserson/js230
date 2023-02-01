"use strict";

const highlight = function addHighlight(element) {
  element.classList.add('highlight');
}

const offAll = function toggleHighlightOffForAll(element = document.body) {
  element.classList.remove('highlight');

  Array.from(element.children).forEach(child => {
    offAll(child);
  });
}

const getTarget = function extractTargetFromHREF(link) {
  return link.match(/[#].*$/);
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('ul').addEventListener('click', event => {
    if (event.target.tagName === 'A') {
      event.stopPropagation();
      offAll();
      highlight(document.querySelector(getTarget(event.target.href)));
    }
  });

  document.addEventListener('click', event => {
    offAll();
    if (event.target.tagName === 'ARTICLE') {
      highlight(event.target);      
    } else if (event.target.parentElement.tagName === 'ARTICLE') {
      highlight(event.target.parentElement);
    } else {
      highlight(document.querySelector('main'));
    }
  });
});
