# 17-05-2025

## Chapter-00
commmand - *npm create @vite/latest*

index.html -> loads a scipt i.e main.jsx -> this main.jsx refers to a function called app.js -> app.jsx returns an html

## Chapter-01
*CDN* -> unpkg or ems

react - 18
- simply just use the CDN in HTML
- then just connect the html to JS -> write the code

react - 19

## Chapter-2 
*Syntax of React create element*

```js
const chai = (props) => {
    console.log(props.name, props.cost)
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("p", {}, props.cost)
        ]
    )
}
```

## Chapter-3
Prettier & Eslint
- eslint alternatives =>
- prettier alternatives => 

## Chapter-4
- we write js inside React -> I want to write HTML in my react rather that using createElements i.e js

- but the react only understands JS

- For React to understand HTML we use **BABEL**

- we are not using reutrn in our chai and app functions because we use () => () which does not require a return statements while () => {} does

## Chapter-5
Hot module replacemetn(HMR) - live website relode

js-module-bundeler - parcel, esbuild, rollup
vite-alternative - webpack, parcel, snowpack, RSpack

**vite rules**
- keep app and index.js in src
- js -> jsx

## chapter-6
first paint 
first interactive paint
first contentfull paint

# 18-05-2025