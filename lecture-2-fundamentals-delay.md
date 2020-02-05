# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example
setTimeout(function() {
    console.log('Hello There');
}, 3000); // milliseconds
//function will not run until 3 second have passed
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

dangerous..infinite?

```js
// Example
setinterval(function() {
    console.log('Hello There');
}, 3000); 
// runs every 3 seconds
// NEVER STOPS

const myTimer = setinterval(function() {
    console.log('Hello There');
}, 3000); 
// as soon as declared it starts running

// to stop the interval
clearInterval(myTimer);

```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

//see about^

```js
// Example

```

---
hopefully not using much. useful for games and such.
not really for production code

