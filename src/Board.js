import React from "react";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderRow(x) {
    let rows = [];
    for (let i = x; i < x + 3; i++) {
      rows.push(this.renderSquare(i));
    }
    return rows;
  }

  renderTable() {
    let table = [];
    for (let i = 0; i < 9; i += 3) {
      table.push(<div className="board-row">{this.renderRow(i)}</div>);
    }
    return table;
  }

  render() {
    return <div>{this.renderTable()}</div>;
  }
}

export default Board;
