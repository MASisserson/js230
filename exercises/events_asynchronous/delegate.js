"use strict";

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main')

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

// const isMatch = function isMatch(element, selector) {
//   console.log(`Checking for match between element ${element.tagName} and selector ${selector}`);
//   return Array.from(element.parentElement.querySelectorAll(selector)).some(ele => {
//     return ele === element;
//   });
// };

// const delegateEvent = function delegateEvent(element, selector, eventType, callback) {
//   let listenerAdded = undefined;
  
//   console.log(`delegateEvent was passed the element ${element.tagName}`);
//   if (!element) {
//     console.log('Was no element');
//     return;
//   } else if (isMatch(element, selector)) {
//     console.log('Was a match');
//     console.log(`Adding event listener to element ${element.tagName}`)
//     element.addEventListener(eventType, callback);
//     listenerAdded = true;
//   }

//   Array.from(element.children).forEach(child => {
//     console.log(`looking at child ${child.tagName}`);
//     let childAdded = delegateEvent(child, selector, eventType, callback);
//     if (childAdded) {
//       listenerAdded = true;
//     }
//   });

//   return listenerAdded;
// };

function delegateEvent(parentElement, selector, eventType, callback) {
  if (parentElement && parentElement instanceof HTMLElement) {
    return !parentElement.addEventListener(eventType, event => {
      const children = Array.from(parentElement.querySelectorAll(selector));
      if (children.includes(event.target)) {
        callback(event);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // let result = delegateEvent(element1, 'p', 'click', callback);
  // console.log(result);
  
  // let result = delegateEvent(element2, 'p', 'click', callback);
  // console.log(result);
  
  // let result = delegateEvent(element2, 'h1', 'click', callback);
  // console.log(result);
  
  // let result = delegateEvent(element3, 'h1', 'click', callback);
  // console.log(result);
  
  let result = delegateEvent(element3, 'aside p', 'click', callback); // ?
  console.log(result);
  
  // let result = delegateEvent(element2, 'p', 'click', callback);
  // console.log(result);
});
