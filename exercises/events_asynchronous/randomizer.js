"use strict";

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let seconds = callbacks.length * 2;
  
  for (let idx = 1; idx <= seconds; idx++) {
    setTimeout(() => console.log(idx), idx * 1000);
  }

  callbacks.forEach(callback => {
    setTimeout(callback, Math.ceil(Math.random() * seconds * 1000));
  });
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6
