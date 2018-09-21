import React, { Component } from 'react';
import Tabs from './components/Tabs';
import Categories from './components/Categories';
import PictureLoader from './components/loaders/PictureLoader';
import TextLoader from './components/loaders/TextLoader';
import AudioLoader from './components/loaders/AudioLoader';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCategory: "book",
      textCategory: "haiku",
      audioCategory: "8-bit",
      music: "",
      activeTabIndex: 0,
      tabClass0: "selected",
      tabClass2: "",
      tabClass1: "",
      tabClass3: ""
    };

    this.musicChild = React.createRef();
    this.handleClickedTab = this.handleClickedTab.bind(this);
  }

  handleClickedTab(e, index) {
    if(index != this.state.activeTabIndex) {
      this.setState({activeTabIndex: index});

      if(index == 0) {
        this.setState({tabClass0: "selected", tabClass1: "", tabClass2: "", tabClass3: ""});
      } else if(index == 1) {
        this.setState({tabClass0: "", tabClass1: "selected", tabClass2: "", tabClass3: ""});
      } else if(index == 2) {
        this.setState({tabClass0: "", tabClass1: "", tabClass2: "selected", tabClass3: ""});
      } else if(index == 3) {
        this.setState({tabClass0: "", tabClass1: "", tabClass2: "", tabClass3: "selected"});
      }
    }
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

      this.musicChild.current.reloadPlayer();
  };

  render() {
    return (
      <div id="container" className="container">
        <Tabs onClick={this.handleClickedTab} activeTabIndex={this.state.activeTabIndex} tabClass0={this.state.tabClass0} tabClass1={this.state.tabClass1} tabClass2={this.state.tabClass2} tabClass3={this.state.tabClass3}/>

        <Categories textRadioButtonChanged={this.textRadioButtonChanged}
        audioRadioButtonChanged={this.audioRadioButtonChanged}
        imageRadioButtonChanged={this.imageRadioButtonChanged} />

        <div id="content" className="content">
          <p>imageCategory: {this.state.imageCategory}</p>
          <p>textCategory: {this.state.textCategory}</p>
          <p>audioCategory: {this.state.audioCategory}</p>

          <PictureLoader category={this.state.imageCategory} />
          <TextLoader category={this.state.textCategory} />

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
