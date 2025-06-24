# ⚛️ React Hooks — Complete Developer Reference

Use this as a long-term **reference document** while building React apps. No fluff — just everything **you actually need**.

---

## 🔹 `useState`

### 📖 Definition:

Adds local state to a functional component. React **re-renders** the component whenever the state changes.

### 🧠 Mental Model:

> Like a variable that causes a re-render when you change it.

### 📦 Syntax:

```js
const [value, setValue] = useState(initialValue);
```

### ✅ Use Case:

* Counter
* Form field
* Toggle switch

### 🧪 Example:

```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Count is {count}
</button>
```

### 🔍 Notes:

* You should **always use the updater (`setValue`)** to modify the state.
* React **batches state updates**, so multiple `setX()` calls may be grouped.

---

## 🔹 `useEffect`

### 📖 Definition:

Runs **side effects** after rendering. This can be:

* API calls
* DOM manipulation
* Subscriptions

### 🧠 Mental Model:

> “Watch these dependencies. If any of them change, run the effect.”

### 📦 Syntax:

```js
useEffect(() => {
  // effect logic

  return () => {
    // cleanup logic (optional)
  };
}, [dependencies]);
```

### ✅ Use Case:

* Fetch data from API
* Update document title
* Add/remove event listeners

### 🧪 Example:

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

### 🔍 Notes:

* **Runs after every render** by default.
* Pass `[]` to run only on **initial mount**.
* Return a cleanup function to run on unmount or before re-running.

---

## 🔹 `useRef`

### 📖 Definition:

Stores a **persistent, mutable reference** that does **not** cause re-render when updated.

### 🧠 Mental Model:

> A box that lives through the entire lifecycle of the component, even across re-renders.

### 📦 Syntax:

```js
const myRef = useRef(initialValue);
```

### ✅ Use Case:

* DOM element access
* Store timers
* Persist previous values

### 🧪 Example 1: DOM access

```jsx
const inputRef = useRef();

useEffect(() => {
  inputRef.current.focus();
}, []);

<input ref={inputRef} />;
```

### 🧪 Example 2: Read value without triggering re-render

```jsx
const inputRef = useRef();

const handleSubmit = () => {
  alert(inputRef.current.value);
};

return <input ref={inputRef} />;
```

### 🔍 Notes:

* `useRef().current` is mutable.
* Perfect for avoiding extra renders.

---

## 🔹 `useCallback`

### 📖 Definition:

Returns a **memoized version of a function**, so it's **only recreated** if dependencies change.

### 🧠 Mental Model:

> Cache the function between renders unless inputs change.

### 📦 Syntax:

```js
const memoizedFn = useCallback(() => {
  // logic
}, [dependencies]);
```

### ✅ Use Case:

* Prevent re-renders of `React.memo()` children
* Optimize callbacks in deep trees

### 🧪 Example:

```jsx
const increment = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
```

### 🔍 Notes:

* Don’t overuse it — it's for optimization, not correctness.
* Only necessary when you **pass functions to memoized children**.

---

## 🔹 `useMemo`

### 📖 Definition:

Returns a **memoized value**. Only recomputes it if dependencies change.

### 🧠 Mental Model:

> “If inputs haven’t changed, don’t recalculate this value.”

### 📦 Syntax:

```js
const memoizedValue = useMemo(() => expensiveCalc(input), [input]);
```

### ✅ Use Case:

* Expensive computations (filter, sort)
* Derived state

### 🧪 Example:

```jsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.name.includes(query));
}, [query, users]);
```

### 🔍 Notes:

* Memoizes **return values**, not functions.
* Overuse can lead to premature optimization.

---

## 🔹 `useContext`

### 📖 Definition:

Lets you access **global/shared state** without passing props manually.

### 🧠 Mental Model:

> “Subscribe to a shared value that’s provided somewhere higher up.”

### 📦 Syntax:

```js
const contextValue = useContext(MyContext);
```

### ✅ Use Case:

* Theme
* Auth state
* Language settings

### 🧪 Example:

#### Step 1: Create context

```js
const ThemeContext = React.createContext();
```

#### Step 2: Provide it

```jsx
<ThemeContext.Provider value={{theme, setTheme}}>
  <App />
</ThemeContext.Provider>
```

#### Step 3: Use it

```jsx
const { theme, setTheme } = useContext(ThemeContext);
```

### 🔍 Notes:

* Updates all consumers when value changes.
* Lightweight alternative to Redux/Zustand.

---

## 🔹 `useReducer`

### 📖 Definition:

Alternative to `useState()` for **complex state logic**, especially when state changes depend on previous state.

### 🧠 Mental Model:

> A mini Redux-style reducer inside your component.

### 📦 Syntax:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### ✅ Use Case:

* Complex form logic
* Finite state machines
* Grouped/related state values

### 🧪 Example:

```js
function reducer(state, action) {
  switch (action.type) {
    case "inc": return { count: state.count + 1 };
    case "dec": return { count: state.count - 1 };
    case "reset": return { count: 0 };
    default: return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

```jsx
<button onClick={() => dispatch({ type: 'inc' })}>+</button>
```

### 🔍 Notes:

* Encourages **pure functions**.
* Better when state transitions are complex or nested.

---

# ⚙️ Hook Comparison Cheat Sheet

| Hook          | Purpose                           | Causes Re-render? | Persistent? | Best for                   |
| ------------- | --------------------------------- | ----------------- | ----------- | -------------------------- |
| `useState`    | Store local reactive state        | ✅ Yes             | ✅ Yes       | UI updates                 |
| `useEffect`   | Run code on lifecycle or updates  | ❌ (runs after)    | ❌           | Side-effects               |
| `useRef`      | Store a mutable value or DOM node | ❌ No              | ✅ Yes       | DOM access, timers         |
| `useCallback` | Memoize a function                | ❌ No              | ✅ Yes       | Avoid function re-creation |
| `useMemo`     | Memoize a computed value          | ❌ No              | ✅ Yes       | Avoid recomputation        |
| `useContext`  | Access shared/global state        | ✅ Yes             | ✅ Yes       | Theming, auth              |
| `useReducer`  | Manage complex state transitions  | ✅ Yes             | ✅ Yes       | State logic, FSMs          |

---

# 📌 When to Use Which Hook?

| Situation                                        | Hook          |
| ------------------------------------------------ | ------------- |
| You need a value that updates the UI             | `useState`    |
| You want to do something on mount/update/unmount | `useEffect`   |
| You need to access a DOM element                 | `useRef`      |
| You pass the same function to a child            | `useCallback` |
| You calculate a filtered/sorted result           | `useMemo`     |
| You need to share state across components        | `useContext`  |
| You have complex state logic                     | `useReducer`  |