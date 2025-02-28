import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {}, "Hi all");
const heading2 = React.createElement("h2", {}, "Hi everyone");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading1,heading2]);

console.log("hi everyone again");
