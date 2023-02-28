import React, { Component } from "react";
import TodoList from "../TodoList/TodoList";

export default class Todo extends Component {
  state = {
    todos: [ ],
  };

  addTodo = (obj) => {
    let { todos } = this.state;
    todos.push(obj);
    this.setState({
      todos,
    });
  };
  delTODO = (index) => {
    let { todos } = this.state;
    todos.splice(index, 1);
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <TodoList
        todos={this.state.todos}
        addTodo={this.addTodo}
        delTODO={this.delTODO}
      />
    );
  }
}
