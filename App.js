const heading = React.createElement(
    "div",
    {},
    React.createElement("h1",{},"nested one"));

console.log(heading); //heading(React.createElement) here is a object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



