"use strict";

const getEl = function getElements(arr, ...values) {
  return values.map(val => arr.find(ele => ele.value === val));
}

document.addEventListener('DOMContentLoaded', () => {
  const animals = document.querySelector('#animals');
  const classifications = document.querySelector('#animal-classifications');
  const aniOptions = Array.from(animals.children);
  const claOptions = Array.from(classifications.children);
  const selections = {
    Animals: claOptions,
    Classifications: aniOptions,
    Vertebrate: getEl(aniOptions, 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'),
    'Warm-blooded': getEl(aniOptions, 'Bear', 'Whale', 'Ostrich'),
    'Cold-blooded': getEl(aniOptions, 'Salmon', 'Turtle'),
    Mammal: getEl(aniOptions, 'Bear', 'Whale'),
    Bird: getEl(aniOptions, 'Ostrich'),
    Bear: getEl(claOptions, 'Vertebrate', 'Warm-blooded', 'Mammal'),
    Turtle: getEl(claOptions, 'Vertebrate', 'Cold-blooded'),
    Whale: getEl(claOptions, 'Vertebrate', 'Warm-blooded', 'Mammal'),
    Salmon: getEl(claOptions, 'Vertebrate', 'Cold-blooded'),
    Ostrich: getEl(claOptions, 'Vertebrate', 'Warm-blooded', 'Bird'),
  };

  animals.addEventListener('click', event => {
    classifications.textContent = '';
    selections[animals.value].forEach(element => classifications.appendChild(element));
  });

  classifications.addEventListener('click', event => {
    animals.textContent = '';
    selections[classifications.value].forEach(element => animals.appendChild(element));
  });
});
