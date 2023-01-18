"use strict";

const getGen = function getGeneration(finGen, curGen = 0, node = document.body) {
  if (curGen === finGen) {
    if (node === document.body) {
      return [];
    } else {
      return [node];
    }
  } else {
    return Array.from(node.children).reduce((genMem, element) => {
      return genMem.concat(getGen(finGen, curGen + 1, element));
    }, []);
  }
};

const colorGeneration = function colorGeneration(gen) {
  getGen(gen).forEach(element => element.classList.add('generation-color'));
};

// colorGeneration(1);
// colorGeneration(4);
// colorGeneration(7);
// colorGeneration(8);
// colorGeneration(3);
// colorGeneration(0);
