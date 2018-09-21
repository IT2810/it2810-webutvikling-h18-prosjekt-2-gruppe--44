import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="tabs">
        <button onClick={(e) => this.props.onClick(e, 0)} class={this.props.tabClass0}>Tab 1</button>
        <button onClick={(e) => this.props.onClick(e, 1)} class={this.props.tabClass1}>Tab 2</button>
        <button onClick={(e) => this.props.onClick(e, 2)} class={this.props.tabClass2}>Tab 3</button>
        <button onClick={(e) => this.props.onClick(e, 3)} class={this.props.tabClass3}>Tab 4</button>
      </div>
    );
  }
}

export default Tabs;
