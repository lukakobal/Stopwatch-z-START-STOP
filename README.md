# ⏱ React 88 – Stopwatch

## 📌 What I learned
- How useEffect works with dependencies
- When cleanup runs
- How to prevent memory leaks
- Why functional state update is important inside intervals

## ⚙ Features
- Start timer
- Stop timer
- Reset timer
- Proper interval cleanup

## 🧠 Key Concept
Cleanup runs:
- before next effect
- on unmount

Functional update:
```js
setCount(prev => prev + 1)

https://codesandbox.io/p/sandbox/54k5ng?file=%2Fsrc%2FApp.js
