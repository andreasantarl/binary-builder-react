import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Board from './Board';

class App extends React.Component {

    constructor() {
      super();
      this.state={
        sum: 0,
        board: {
          chiclets: this.createChiclets(6),
        }
      }
    }

    createChiclets(i) {
      return new Array(i).fill(null).map((element, index) => {
        return {
          value: Math.pow(2, index),
          active: false
        }
      });
    }

    // handleClick(i) {
    //   const isActive = this.props.active ? 1 : 0;
    //   this.setState({
    //     state: {
    //       board: {
    //         chiclets: {
    //           active: isActive,
    //         }
    //       }
    //     }
    //   })
    // }

    render() {
      return (
         <Board board={this.state.board}
        //  onClick={i => this.handleClick(i)}
         />
      )
    }
}


ReactDOM.render(<App />, document.getElementById("root"));

export default App;
