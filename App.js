// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React");

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        {
            id: "child"
        }),
        React.createElement("h1", {}, "I'm an H1 Tag")
)
console.log("heading", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);