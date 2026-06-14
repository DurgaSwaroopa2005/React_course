const heading = React.createElement("h1",
    {id: "heading"},
    "hello this is react!"
);

console.log(heading); //heading(React.createElement) here is a object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);