import react from "react";
import React from "react";
import ReactDOM from "react-dom";

function Greet() {
  return (
    <div className="">
      <h1>Hello World!</h1>
      <ul>
        <li>
          <a href="#">Hello World</a>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Greet />, document.getElementById("root"));
