# Practice Problems: Promises and Async/Await

## Problem 1

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Launch School')
  }, 2000);
});

promise.then((fulfilled) => console.log(fulfilled));
```

## Problem 2

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error: Not Launch School');
  }, 2000);
});

promise.catch((value) => console.log(value));
```

## Problem 3

`I am NOT a Promise`, then `I am a Promise`. The code inside the `then` in line 5 executes
asynchronously, so it comes after the code on line 6.

## Problem 4

`foo`, `bar`, `qux`, `baz`. `resolve()` doesn't exit the promise on its own. `baz` is
printed after `qux` because line 8 is executed asynchronously.

## Problem 5

```bash
foo
bar
abc
qux
```

Same as above, promise runs, then all the rest of the synchronous code runs. Followed by the
asynchronous catch statement.

## Problem 6

```bash
1
3
6
undefined
```

There are 4 `console.log()` calls. `1` is passed to the first `then`, the result of `1 + 2` is passed to the second `then`, `6` is passed to the third `then`. The callback of `finally` doesn't take arguments, so `num` will evaluate to `undefined` regardless of what happens in the `then` clause.

## Problem 7

```bash
Got it!
```

Once a Promise is resolved or rejected, any additional attempts to settle it will fail silently.
