"use strict";

// Problem 1
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Launch School')
  }, 2000);
});

promise.then((fulfilled) => {
  console.log(fulfilled);
});

// Problem 2
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error: Not Launch School');
  }, 2000);
});

promise.catch((value) => {
  console.log(value);
});

/*
Problem 3
`I am NOT a Promise`, then `I am a Promise`. The code inside the `then` in line 5 executes
asynchronously, so it comes after the code on line 6.

Problem 4
`foo`, `bar`, `qux`, `baz`. `resolve()` doesn't exit the promise on its own. `baz` is
printed after `qux` because line 8 is executed asynchronously.

Problem 5
```bash
foo
bar
abc
qux
```

Same as above, promise runs, then all the rest of the synchronous code runs. Followed by the
asynchronous catch statement.

Problem 6
```bash

```
*/
