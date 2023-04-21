import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* React.dev tic-tac-toe practice project */

// In React, it’s conventional to use onSomething names for props which represent events and handleSomething for the function definitions which handle those events (like onClick and handleClick, for example)

// We can't pass arguments directly to state-changing callback functions that are passed down as props. But we can pass anonymous arrow functions to them, and these arrow functions will only be run on the event (like onClick)

// Remenber that the anonymous arrow function pattern (such as: () => handleClick(0)) is actually a function within a function, and the outer function is anonymous

// The reason that we can't pass arguments directly to state-changing callback functions that are passed down as props, is that these functions will be called when the component renders, and then they will trigger a new render, because they changed the state, which will trigger them again, and so on - causing an infinite loop
