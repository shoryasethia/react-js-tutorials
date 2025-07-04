# 🧠 Redux Toolkit Basics

### 🔹 What is a `slice`?

A **slice** is a **portion of the Redux state + logic** to update that state.

Example:

```js
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true
      state.userData = action.payload.userData
    },
    logout: (state, action) => {
      state.status = false
      state.userData = null
    }
  }
})
```

🟡 `authSlice` handles login/logout related state & logic.

---

### 🔹 What is `state`?

**State** = your app's current data.

In your `auth` slice:

```js
const initialState = {
  status: false,
  userData: null
}
```

You're tracking:

* `status`: Whether the user is logged in
* `userData`: Logged-in user's data

When the state changes, your app UI updates accordingly.

---

### 🔹 What are `actions`?

**Actions** = instructions to change the state.

Examples from your slice:

```js
login: (state, action) => {
  state.status = true
  state.userData = action.payload.userData
}

logout: (state, action) => {
  state.status = false
  state.userData = null
}
```

You use `dispatch()` to send these actions.

---

### 🔹 What is `dispatch`?

**`dispatch`** is a function used to **send an action** to the Redux store.

Example:

```js
dispatch(login({ userData: { name: "Shorya" } }))
```

This runs the `login` reducer and updates the state.

---

### 🔹 What is `useSelector`?

**`useSelector`** is used to **read/access state** from the Redux store inside a React component.

Example:

```js
const isLoggedIn = useSelector((state) => state.auth.status)
const user = useSelector((state) => state.auth.userData)
```

This gives you the current values of the state.

---

### 🔁 Summary Table

| Term          | What it does                        | Used for                 |
| ------------- | ----------------------------------- | ------------------------ |
| `slice`       | A part of Redux state + its logic   | Grouping related state   |
| `state`       | Stores current app data             | Access via `useSelector` |
| `action`      | Instruction to update state         | Send via `dispatch`      |
| `dispatch`    | Sends an action to modify the state | Works on **actions**     |
| `useSelector` | Reads values from the Redux store   | Works on **state**       |
