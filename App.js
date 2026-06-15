import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
     [React.createElement("h1",{},"h1 tag"),
      React.createElement("h2",{},"h2 tag")
     ]
    ),
     React.createElement("div",{id:"child2"},
     [React.createElement("h1",{},"h1 tag"),
      React.createElement("h2",{},"h2 tag")
     ]
    )
    ]
)



console.log(heading); //heading(React.createElement) here is a object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



// <div id="root">
//     <div id="parent">
//         <div id="child1">
//             <h1></h1>
//             <h2></h2>
//         </div>
//         <div id="child2">
//             <h1>h1</h1>
//             <h2>h2</h2>
//         </div>
//     </div>
// </div>