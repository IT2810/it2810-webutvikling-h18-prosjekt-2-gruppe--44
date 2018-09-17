import React from 'react';

class TextGetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            text: [],
            author: "",
            category: this.props.category
        };
    }

    componentDidMount() {
        console.info("Is this being called?");
        this.fetchText(this.selectRandomText(this.props.category));
    }

    fetchText(url) {
        if (url) {
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            text: result.text,
                            author: result.author
                        });
                    }, (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
    }

    selectRandomText(category) {
        let haiku = [
            "/text/haiku/buson.json",
            "/text/haiku/matsuo.json",
            "/text/haiku/shiki.json",
            "/text/haiku/soseki.json"
        ];
        let music = [
            "/text/music/macarena.json",
            "/text/music/safety_dance.json",
            "/text/music/stupid_hoe.json",
            "/text/music/we_built_this_city.json"
        ];
        let poems = [
            "/text/poems/garborg.json",
            "/text/poems/hagerup.json",
            "/text/poems/overland.json",
            "/text/poems/vinje.json"
        ];
        switch (category) {
            case "haiku":
                return haiku[Math.floor(Math.random() * haiku.length)];
            case "music":
                return music[Math.floor(Math.random() * music.length)];
            case "poem":
                return poems[Math.floor(Math.random() * poems.length)];
            default:
                return;
        }

    }

    render() {
        const {error, isLoaded, text, author, category} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if (this.props.category.localeCompare(category)) {
            this.setState({category: this.props.category});
            this.fetchText(this.selectRandomText(this.props.category));
            return <div>Loading for reals...</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <p>Author: {author}</p>
                    <pre>
                        {text.join("\n")}
                    </pre>
                </div>
            );
        }
    }
}
export default TextGetter;