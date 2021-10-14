import react from "react";
import React from "react";
import ReactDOM from "react-dom";

function Greet() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => {
  return <h2>Hello World!</h2>;
};

const Message = () => {
  return <p>ReactJs power</p>;
}

ReactDOM.render(<Greet />, document.getElementById("root"));
