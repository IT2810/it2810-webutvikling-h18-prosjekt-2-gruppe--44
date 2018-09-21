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

  render() {
    return (
      <div>
                    <h1>Image</h1>
                    <form>
                        <input type="radio" name="pic" value="book" onChange={this.checkedButton}/>Book
                        <input type="radio" name="pic" value="iphone" onChange={this.checkedButton}/>iPhone
                        <input type="radio" name="pic" value="mac" onChange={this.checkedButton}/>Mac
                    </form>
                    <PictureFetch category={this.state.category} />
                </div>
    );
  }
}

export default PictureRadio;
