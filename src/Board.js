import React from 'react';
import Chiclet from './Chiclet';

class Board extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i) {
    console.log(i);
    const isActive = this.active ? 1 : 0;
    // this.props.active = isActive;
    this.setState({
      // chiclets: {
        active: isActive,
      // }
    })
  }

  render() {
    const chiclets=new Array(+this.props.board.chiclets.length).fill(null).map((element, index) => {
      return(
        <Chiclet key={index}
          value={this.props.board.chiclets[index].value}
          active={this.props.board.chiclets[index].active}
          handleClick={(i) => this.handleClick(i)}
        />
      );
    });
    return (
      <div>
        {chiclets}
      </div>
    );
  }
}

export default Board;
