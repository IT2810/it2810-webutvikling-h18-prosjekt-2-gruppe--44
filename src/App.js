import React, { Component } from 'react';
import Tabs from './Tabs';
import Categories from './Categories';
import TextGetter from './TextGetter';
import PictureFetch from './PictureFetch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCategory: "book",
      textCategory: "haiku",
      audioCategory: "8-bit",
      music: ""};

    this.musicChild = React.createRef();
  }

  imageRadioButtonChanged = event => {
      this.setState({
          imageCategory: event.currentTarget.value
      });
  };

  textRadioButtonChanged = event => {
      this.setState({
          textCategory: event.currentTarget.value
      });
  };

  audioRadioButtonChanged = event => {
      this.setState({
          audioCategory: event.currentTarget.value
      });
      //this.musicChild.current.reloadPlayer();
  };

  render() {
    return (
      <div id="container" className="container">
        <Tabs />

        <Categories textRadioButtonChanged={this.textRadioButtonChanged}
        audioRadioButtonChanged={this.audioRadioButtonChanged}
        imageRadioButtonChanged={this.imageRadioButtonChanged} />

        <div id="content" className="content">
          <p>imageCategory: {this.state.imageCategory}</p>
          <p>textCategory: {this.state.textCategory}</p>
          <p>audioCategory: {this.state.audioCategory}</p>

          <PictureFetch category={this.state.imageCategory} />
          <TextGetter category={this.state.textCategory} />

          <audio id="audio" ref="audio" controls autoPlay loop>
            <source src={this.props.src} type="audio/mpeg"></source>
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    );
  }
}

export default App;
