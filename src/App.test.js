import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PictureFetch from "./PictureFetch";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.render(<PictureFetch />, div);

  //ReactDOM.render(<App/>, document.querySelector("#main"));
  ReactDOM.unmountComponentAtNode(div);
});
