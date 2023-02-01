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

## Problem 8

```javascript
function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function test(input) {
  const a = await after1s(2);
  const b = await after1s(3);
  return input * a * b;
}

test(3).then((value) => console.log(value));
```

```bash
18
```

The output will appear about 2 seconds after the program is invoked.

## Problem 9

```javascript
function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function test(input) {
  const a = await after1s(2);
  const b = await after1s(3);
  return input * (await a) * (await b);
}

test(3).then((value) => console.log(value));
```

```bash
18
```

The solution will still appear after roughly 2 seconds. The addition of `await` on line 108
doesn't change anything because by that point `a` and `b` are already set to non-promise values.

## Problem 10

```javascript
function after1s(x, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, ms);
  });
}

async function test1(input) {
  const a = await after1s(2, 2000);
  const b = await after1s(3, 2000);
  return input * a * b;
}

async function test2(input) {
  const a = await after1s(2, 1000);
  const b = await after1s(3, 1000);
  return input * a * b;
}

test1(2).then((value) => console.log(value));
test2(3).then((value) => console.log(value));
```

```bash
18
12
```

The 18 will appear 2 seconds after the program is invoked. The 12 will appear roughly 4 seconds
after the program is invoked. 

## Problem 11

```javascript
const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log(result));
  console.log("2");
}

function test2() {
  console.log("3");
}

test1();
test2();
```

```bash
2
3
1
```

line 162 will be run asynchronously, while lines 163 and 167 will be run synchronously.

## Problem 12

```javascript
const test = Promise.resolve("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();
```

```bash
A
B
```

`test` is already resolved immediately to `'A'`, so `await` doesn't make it asynchronous.

## Problem 13

```javascript
const test = Promise.reject("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();
```

```bash
E
B
```

A rejected promise causes JS to raise an exception. This causes the `catch` statement to run.
`finally` is always run, regardless.
