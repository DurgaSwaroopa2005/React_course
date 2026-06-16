import React from "react";
import ReactDOM from "react-dom/client";


// React element
const heading = (<h1 id="heading" className="head">hello this is JSX</h1>);

//React component
const Title = () => <p>this is title</p>;

//component composition
const HeadingComponent = ()=> (<> 
<Title />
 <h1>headingcomponent</h1>
  </>
  );
    
    
    
    







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

