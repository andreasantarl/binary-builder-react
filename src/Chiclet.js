import React from 'react';

class Chiclet extends React.Component {
  // handleClick = () => {
  //    this.props.handleClick(this.props.value);
  //  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>{this.props.active}</button>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Chiclet;
