import React, { Component } from "react";

class TodoItems extends Component {
  createTasks(item) {
    return (
      <li key={item.key}>
        {item.text}
        <a href="#" onClick={this.props.handleDelete}>
          {" "}
          [Remove]
        </a>
      </li>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks.bind(this));

    return <ul className="todolist">{listItems}</ul>;
  }
}
export default TodoItems;
