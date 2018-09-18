import React from 'react';
import TextGetter from './TextGetter';

class TextRadio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: ""
        };
    }


    checkedButton= event => {
        this.setState({
            category: event.currentTarget.value
        });

    };
    render() {
        return (
            <div>
                <form>
                    <input type="radio" name="text" value="haiku" onChange={this.checkedButton}/>Haiku
                    <input type="radio" name="text" value="music" onChange={this.checkedButton}/>Music
                    <input type="radio" name="text" value="poem" onChange={this.checkedButton}/>Poem
                </form>
                <TextGetter category={this.state.category} />
            </div>
        );
    }
}

export default TextRadio;
