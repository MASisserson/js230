"use strict";

const nodeSwap = function nodeSwap(id1, id2) {
  const node1 = document.getElementById(String(id1));
  const node2 = document.getElementById(String(id2));
  if (!node1 || !node2 || node1.contains(node2) || node2.contains(node1)) {
    return undefined;
  }

  const parent1 = node1.parentNode;
  const index1 = Array.from(parent1.childNodes).indexOf(node1);
  node2.parentNode.replaceChild(node1, node2);
  parent1.insertBefore(node2, parent1.childNodes[index1]);

  return true;
};

// at least one of the id attributes doesn't exist
console.log(nodeSwap(1, 20));
// undefined

// at least one of the nodes is a "child" of the other
console.log(nodeSwap(1, 4));
// undefined
console.log(nodeSwap(9, 3));
// undefined

// one swap
// console.log(nodeSwap(1, 2));

// multiple swaps
console.log(nodeSwap(3, 1));
console.log(nodeSwap(7, 9));
