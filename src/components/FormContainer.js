import React, { Component } from "react";
import Form from "./Form";

class FormDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }
  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { userName } = this.state;

    return (
      <div>
        <Form
          onChange={this.inputChangeHandler}
          userName={userName}
          style={{ color: "blue" }}
        />
      </div>
    );
  }
}

export default FormDetails;
