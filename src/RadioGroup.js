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
                <div class="categories">
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
                        <input type="radio" name="music" value="/media/audio/8-bit/137227__dirtyjewbs__8-bit-loop.mp3" onChange={this.checkedMusicButton}/>8-bit
                        <input type="radio" name="music" value="/media/audio/drums/130579__drumhead62__live-groove-big-room-drums.mp3" onChange={this.checkedMusicButton}/>Drums
                        <input type="radio" name="music" value="/media/audio/party/402895__edemson86__edm-loop-lead.mp3" onChange={this.checkedMusicButton}/>Party
                    </form>
                    <AudioFile src={this.state.music} ref={this.musicChild}/>
                </div>
            </div>

        );
    }
}

export default TextRadio;
