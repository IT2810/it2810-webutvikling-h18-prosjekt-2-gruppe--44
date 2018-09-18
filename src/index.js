import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RadioButtons from "./RadioButtons";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<RadioButtons />, document.getElementById("radioselector"));
registerServiceWorker();
