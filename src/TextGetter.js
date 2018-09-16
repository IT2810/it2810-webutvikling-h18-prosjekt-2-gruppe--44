import React, { Component } from 'react';

class TextGetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            text: [],
            author: "",
            url: props.url
        };
    }

    componentDidMount() {
        fetch("/text/haiku/buson.json")
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

    render() {
        const {error, isLoaded, text, author} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <p>Author: {author}</p>
                    {text.map(line => <p>{line}</p>)}
                </div>
            );
        }
    }
}
export default TextGetter;