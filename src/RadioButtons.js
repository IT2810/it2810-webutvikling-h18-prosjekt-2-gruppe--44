import React from "react";
import PictureFetch from "./PictureFetch";

class PictureRadio extends React.Component {
  constructor(props) {
    super(props);
    this.picture = React.createRef();
    this.state = {
      category: "",
      pic: ""
    };
  }

  checkedButton = event => {
    console.info(event.currentTarget.value);
    this.setState({
      category: event.currentTarget.value
    });
  };

  checkedPictureButton = event => {
    this.setState({
      pic: event.currentTarget.value
    });
    this.picture.current.reloadPlayer();
  };

  render() {
    return (
      <div>
        <div>
          <h2>Text</h2>
          <form>
            <input
              type="radio"
              name="Picture"
              value="book"
              onChange={this.checkedButton}
            />
            Book
            <input
              type="radio"
              name="Picture"
              value="iphone"
              onChange={this.checkedButton}
            />
            Iphone
            <input
              type="radio"
              name="Picture"
              value="mac"
              onChange={this.checkedButton}
            />
            Mac
          </form>
          <PictureFetch category={this.state.category} />
        </div>
      </div>
    );
  }
}

export default PictureRadio;
