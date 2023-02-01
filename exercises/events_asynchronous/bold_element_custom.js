"use strict";

// function makeBold(element, callback) {
//   element.style = 'font-weight: bold';

//   if (callback && typeof callback === 'function') {
//     callback(element);
//   }
// }

// let sectionElement = document.querySelector('section');
// makeBold(sectionElement, function(elem) {
//   elem.classList.add('highlight');
// });

// console.log(sectionElement.classList.contains('highlight')); // => true
// console.log(sectionElement.style.fontWeight);                // => 'bold'


// Further Exploration

const sectionElement = document.querySelector('section');

function makeBold(element) {
  element.style.fontWeight = 'bold';
  const event = new CustomEvent('bolded');

  element.dispatchEvent(event);
}

sectionElement.addEventListener('bolded', (event) => {
  alert(event.target.tagName);
  event.target.classList.add('highlight');
});

makeBold(sectionElement);

console.log(sectionElement.classList.contains('highlight')); // => true
console.log(sectionElement.style.fontWeight);                // => 'bold'
