# conditional-rendering

- Condtional Rendering is a technique used in React to render components based on some condition.
- It can be either any number, falsy or truthy values or some specific condition
- In this project I have rendered quotes conditionally based on the length of the state which contains array of quotes.

## `&&` Operator

- While using && React checks condition on left side and renders the right side of operator.
- But if left side is number then in the case of falsy value on right side, react will print 0.

```js
 array.length && <Component/>
```

## `!!` Double Negation

- To avert the previous issue we can use double negation to convert 0, null or anyother falsy values to a proper false literal.

```js
 !!array.length && <Component/>
```
