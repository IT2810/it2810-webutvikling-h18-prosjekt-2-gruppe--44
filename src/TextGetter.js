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
        fetchText("/text/haiku/buson.json");
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

    render() {
        const {error, isLoaded, text, author, category} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
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
