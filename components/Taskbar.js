import React, { Component } from "react";
import TodoItems from "./TodoItems";

class Taskbar extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
  }

  handledelete() {}

  render() {
    const { items } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="Enter Task"
            />
            <button type="submit"> Add Task</button>
          </form>
        </div>
        <TodoItems
          handleDelete={this.handledelete}
          entries={this.state.items}
        />
      </div>
    );
  }
}

export default Taskbar;
