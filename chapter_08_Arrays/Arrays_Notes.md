# JavaScript Array Functions with Examples

JavaScript arrays provide many built-in methods to create, read, update, and transform data. This note summarizes the key methods and explains the topics covered in the chapter_08_Arrays folder.

---

## Contents (folder overview)

- `01_Arrays_Creation.js` — creating arrays and common literals (Array constructor, literals).
- `02_Arrays_Access_Modify_Adding_Removing.js` — accessing elements, `push`, `pop`, `shift`, `unshift`, and modifying in-place.
- `03_Arrays_Searching.js` — search helpers: `indexOf`, `includes`, `find`, `findIndex`.
- `04_Arrays_Traversing.js` — iteration patterns: `for`, `for...of`, `forEach`.
- `05_Arrays_Transforming.js` — transformation helpers: `map`, `filter`, `reduce` (examples included).
- `06_Arrays_Sorting.js` — `sort` usage and numeric compare functions to avoid lexicographic sort issues.
- `07_Arrays_Slicing.js` — `slice` vs `splice` and copying portions of arrays.
- `08_Arrays_Checking.js` — checking arrays and types (`Array.isArray`, length checks).
- `09_Arrays_Copying_shallowing.js` — shallow vs deep copy patterns and pitfalls.
- `10_Arrays_Destructuring.js` — array destructuring syntax and defaults.
- `shallow_deep_practice.js` & `Tasks.js` — practice and exercises.

---

## Quick Reference: Common Methods (short)

| Function | Purpose | Short Example |
|---|---:|---|
| `push` / `pop` | add/remove at end (mutates) | `arr.push(3)` |
| `shift` / `unshift` | remove/add at start (mutates) | `arr.shift()` |
| `slice` | copy portion (non-mutating) | `arr.slice(1,3)` |
| `splice` | add/remove in-place (mutates) | `arr.splice(1,1,'X')` |
| `concat` | join arrays (non-mutating) | `[1].concat([2])` |
| `indexOf` / `includes` | search for value | `arr.includes(x)` |
| `forEach` | iterate (side-effects) | `arr.forEach(x => console.log(x))` |
| `map` | transform each element → new array | `arr.map(x => x * 2)` |
| `filter` | return elements matching predicate | `arr.filter(x => x>2)` |
| `reduce` | fold to single value | `arr.reduce((a,b) => a+b,0)` |
| `sort` | reorder array (mutates) | `arr.sort((a,b)=>a-b)` |

---

## Expanded: map, filter, reduce (with notes)

- `map(fn)`
	- Purpose: create a new array by applying `fn` to every element.
	- Non-mutating.
	- Example:

```javascript
const numbers = [1,2,3,4,6,8];
const doubled = numbers.map(n => n * 2); // [2,4,6,8,12,16]
```

- `filter(fn)`
	- Purpose: select elements where `fn(element)` is truthy, returning a new array.
	- Non-mutating.
	- Example:

```javascript
const evens = numbers.filter(n => n % 2 === 0); // [2,4,6,8]
```

- `reduce((acc, cur) => ..., initial)`
	- Purpose: combine array elements into a single accumulator value.
	- Use an explicit `initial` value to handle empty arrays predictably.
	- Example (sum):

```javascript
const sum = numbers.reduce((acc, cur) => acc + cur, 0); // 24
```

---

## Notes & Tips

- Prefer non-mutating methods (`map`, `filter`, `slice`, `concat`) when you want immutable patterns.
- When sorting numbers, always pass a comparator: `arr.sort((a,b) => a - b)`.
- Use `Array.isArray(value)` to reliably check for arrays.
- For deep-copying complex nested structures, consider structured cloning (`structuredClone`) or deep copy libraries.

---

If you want, I can:

- expand any file summary into more examples,
- add links to specific lines in example files, or
- generate short code snippets you can run for each topic.
