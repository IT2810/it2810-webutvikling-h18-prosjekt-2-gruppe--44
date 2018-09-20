import React, { Component } from "react";
import PictureFetch from "./PictureFetch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <span>
          <div id="main" />
          <h4>hi</h4>
          <div classname= "svgFile" dangerouslySetInnerHTML={{__html: this.props.svg}}/></div>
        </span>
      </div>
    );
  }
}

export default App;
