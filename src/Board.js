import React from 'react';
import Chiclet from './Chiclet';

class Board extends React.Component {

  render() {
    const chiclets=new Array(+this.props.board.chiclets.length).fill(null).map((element, index) => {
      return(
        <Chiclet key={index} value={this.props.board.chiclets[index].value} active={this.props.board.chiclets[index].active}/>
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
