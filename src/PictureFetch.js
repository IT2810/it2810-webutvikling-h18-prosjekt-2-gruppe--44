import React from "react";

class PictureFetch extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            text: []
        };
    }

   // componentDidMount() {
   //     console.info("Is this being called?");
   //     this.fetchText(this.selectRandomText(this.props.category));
   // }

    fetchText(url) {
        console.log(url)
        if (url) {
            fetch("./pics/" +url + "/1.svg")
                .then(res => res.text())
                .catch(error => console.log(error))
                .then(
                    (result) => {
                      this.setState({
                            isLoaded: true,
                            text: result
                        });
                    }, (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
                .catch(error => {
                    console.log(error)
                })
        }
    }

  selectRandom(category) {
    let book = [
      "./pics/book/1"
    ];
    let iphone = [
      "./pics/iphone/1"
    ];
    let mac = [
      "./pics/mac/1"
    ];
    
    switch (category) {
      case "book":
        return book;
      case "iphone":
        return iphone;
      case "mac":
        return mac;
      default:
        return;
    }
  }

  componentDidUpdate(prevprops) {
      if(this.props !== prevprops)
      {
        this.fetchText(this.selectRandom(this.props.category));
      }
  }

  render() {
    const {error, isLoaded, text, category} = this.state;
    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (this.props.category && !isLoaded) {

        return <div>Loading...</div>
    } else if (!this.props.category) {
        return <div>Choose a Picture</div>
    } else {
        return (
            <div>
                {this.state.text}  
            </div>
            
        );
    }
}
}
export default PictureFetch;
