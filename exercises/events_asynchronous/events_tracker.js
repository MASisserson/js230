divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));

function createTracker()

console.log(tracker.list().length);    // 4
console.log(tracker.elements());       // [div#blue, div#red, div#orange, div#green]
console.log(tracker.elements()[0] === document.querySelector('#blue'));  // true
console.log(tracker.elements()[3] === document.querySelector('#green')); // true
console.log(tracker.list()[0]); // click { target: div#blue, buttons: 0, clientX: 195, clientY: 190 ...}        
                   // Chrome `tracker` - PointerEvent
console.log(tracker.clear());  // 0
console.log(tracker.list());   // []
tracker.list()[0] = 'abc';
console.log(tracker.list().length);  // 0
