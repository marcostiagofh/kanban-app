import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { ADD, MOVE, LOAD } from "./actions";
import Column from "./Column";
import selector from "./selector";
import "./App.css";

const columns = [
  { name: "Backlog" }, 
  { name: "Doing" }, 
  { name: "Done" }
];

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  componentDidMount = () => this.props.load();

  handleAdd = columnIndex => {
    const name = window.prompt("Name?");
    if (!name) return;
    const card = { name, columnIndex, id: v4() };
    this.props.add(card);
  };

  render() {
    return (
      <div className="App">
        {columns.map((column, columnIndex) => (
          <Column
            column={column}
            columnIndex={columnIndex}
            key={columnIndex}
            cards={this.props.cardsByColumn[columnIndex]}
            onMoveLeft={cardId =>
              this.props.move(columnIndex, cardId, DIRECTION_LEFT)
            }
            onMoveRight={cardId =>
              this.props.move(columnIndex, cardId, DIRECTION_RIGHT)
            }
            onAddCard={() => this.handleAdd(columnIndex)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { cardsByColumn: selector(columns, state) };
};

const mapDispatchToProps = (dispatch) => ({
  add: card => dispatch({ type: ADD, card }),
  move: (columnIndex, cardId, direction) =>
    dispatch({ type: MOVE, columnIndex, cardId, direction }),
  load: () => dispatch({ type: LOAD })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
