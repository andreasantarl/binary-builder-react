import React from 'react';

class Chiclet extends React.Component {
  render() {
    return (
      <div>
        <button>{this.props.active}</button>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Chiclet;
