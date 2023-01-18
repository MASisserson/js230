"use strict";

function nodeToArr(node = document.body) {
  if (Array.from(node.children).length === 0) {
    return [node.tagName, []];
  } else {
    const elementsArr = [node.tagName, []];
    return Array.from(node.children).reduce((elements, element) => {
      elements[1].push([nodeToArr(element)]);
      return elements;
    }, elementsArr);
  }
}

console.log(nodeToArr());
