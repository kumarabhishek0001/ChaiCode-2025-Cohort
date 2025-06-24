import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

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

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {},"Chai Variations"),
            React.createElement(chai, {name: "Ginger Tea", cost: 700}),
            React.createElement(chai, {name: "Lemon Tea", cost: 850}),
            React.createElement(chai, {name: "Masala Chai", cost: 1000})
        ]

    )
};

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))

