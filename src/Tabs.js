import React from 'react';

class Tabs extends React.Component {
  render() {
    return(
      <div className="tabs">
        <button class="selected">Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
        <button>Tab 4</button>
      </div>
    );
  }
}

export default Tabs;
