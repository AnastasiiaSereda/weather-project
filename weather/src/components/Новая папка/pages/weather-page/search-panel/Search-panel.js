import React, { Component } from "react";
import styles from "./SearchPanel.module.css"

class SearchPanel extends Component {
  state = {
    value: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onHandleSubmit(this.state.value);
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          placeholder="Insert name of the city ..."
          onChange={this.handleChange}
          value={this.state.value}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Here we go!</button>
      </form>
    );
  }
}

export default SearchPanel;