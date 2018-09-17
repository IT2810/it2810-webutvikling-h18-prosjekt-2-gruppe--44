import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AudioFile from './AudioFile';
import song1 from './338986__drfx__music-box-melody-1.mp3';
import song2 from './321718__rhodesmas__dark-magic-music-loop.wav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {src: song1};
    this.changeSource = this.changeSource.bind(this);
    this.child = React.createRef();
  }

  changeSource() {
    this.setState({src: song2});
    this.child.current.reloadPlayer();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <AudioFile src={this.state.src} ref={this.child} />
          <button onClick={this.changeSource}>Change song</button>
        </div>
      </div>
    );
  }
}

export default App;
