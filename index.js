import React from "react";
import ReactDOM from "react-dom/client";

const Heading2 = () => <h2>h2 here</h2>;
const Heading1 = () => (
	<>
		<h1>Hi there</h1>
        {<Heading2></Heading2>}
		{Heading2()}
	</>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading1 />);

console.log("hi everyone again");
