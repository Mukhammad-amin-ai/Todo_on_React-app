import React, { Component } from "react";
import "./Todo.css";
export default class TodoList extends Component {
  state = {
    newText: "",
  };

  changedIn = (event) => {
    let { newText } = this.state;
    newText = event.target.value;
    this.setState({
      newText,
    });
  };
  deleteTodo=(index)=>{
    this.props.delTODO(index)
}
  addTodo = () => {
    let { newText } = this.state;
    let thisHour = new Date().getHours();
    let thisMinute = new Date().getMinutes();
    if(newText !== ""){
      let obj={
        text:newText,
        date:thisHour+":"+thisMinute,
        id:this.props.todos.length+1,
      };
      this.props.addTodo(obj);
      this.setState({
        newText: ""
      })
    }

  };

  render() {
    const { todos } = this.props;

    return (
      <div className="todo_list">
        <div className="todo">
          <h1>Todo List</h1>
        </div>
        <div className="tools">
          <input type="text" onChange={this.changedIn} required />
          <button onClick={this.addTodo}>Add</button>
        </div>
        {todos.length !== 0
          ? todos.map((item, index) => (
              <div className="list">
                <div className="info">
                  <h4>{item.text}</h4>
                  <p>{item.date}</p>
                </div>
                <div className="buttonDel">
                  <button className="infBtn" onClick={()=>this.deleteTodo(index)}> X</button>
                </div>
              </div>
            ))
          : ""}
      </div>
    );
  }
}
