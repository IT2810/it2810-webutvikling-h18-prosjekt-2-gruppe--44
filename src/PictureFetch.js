import React from "react";

class PictureFetch extends React.Component {
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
                .then(res => res.text())
                .then(
                    (result) => {
                      const val = result.text()
                      this.setState({
                            isLoaded: true,
                            text: val,
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

  selectRandom(category) {
    let book = [
      "/pics/book/1.svg",
      "/pics/book/2.svg",
      "/pics/book/3.svg",
      "/pics/book/4.svg"
    ];
    let iphone = [
      "/pics/iphone/1.svg",
      "/pics/iphone/2.svg",
      "/pics/iphone/3.svg",
      "/pics/iphone/4.svg"
    ];
    let mac = [
      "/pics/mac/1.svg",
      "/pics/mac/2.svg",
      "/pics/mac/3.svg",
      "/pics/mac/4.svg"
    ];
    
    switch (category) {
      case "book":
        return book[Math.floor(Math.random() * book.length)];
      case "iphone":
        return iphone[Math.floor(Math.random() * iphone.length)];
      case "mac":
        return mac[Math.floor(Math.random() * mac.length)];
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
  document.querrySelector(".svgFile");
  }
}
export default PictureFetch;
