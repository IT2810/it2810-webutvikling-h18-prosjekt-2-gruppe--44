import React from 'react';
import TextGetter from './TextGetter';
import AudioFile from './AudioFile';

class TextRadio extends React.Component {

    constructor(props) {
        super(props);
        this.musicChild = React.createRef();
        this.state = {
            category: "",
            music: ""
        };
    }


    checkedButton= event => {
        console.info(event.currentTarget.value);
        this.setState({
            category: event.currentTarget.value
        });
    };

    checkedMusicButton = event => {
        this.setState({
            music: event.currentTarget.value
        });
        this.musicChild.current.reloadPlayer();
    };

    render() {
        return (
            <div>
                <div>
                    <h1>Text</h1>
                    <form>
                        <input type="radio" name="text" value="haiku" onChange={this.checkedButton}/>Haiku
                        <input type="radio" name="text" value="music" onChange={this.checkedButton}/>Music
                        <input type="radio" name="text" value="poem" onChange={this.checkedButton}/>Poem
                    </form>
                    <TextGetter category={this.state.category} />
                </div>
                <div>
                    <h1>Music</h1>
                    <form>
                        <input type="radio" name="music" value="/music/music-box.mp3" onChange={this.checkedMusicButton}/>Box
                        <input type="radio" name="music" value="/music/321718__rhodesmas__dark-magic-music-loop.wav" onChange={this.checkedMusicButton}/>Magic
                    </form>
                    <AudioFile src={this.state.music} ref={this.musicChild}/>
                </div>
            </div>

        );
    }
}

export default TextRadio;