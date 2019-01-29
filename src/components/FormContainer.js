import React, { Component } from "react";
import Form from "./Form";
import Greeting from "./Greeting";

class FormDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }
  submitHandler = e => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
  };
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
          onSubmit={this.submitHandler}
          onChange={this.inputChangeHandler}
          userName={userName}
          style={{ color: "blue" }}
        />
        <Greeting userName={userName} />
      </div>
    );
  }
}

export default FormDetails;
