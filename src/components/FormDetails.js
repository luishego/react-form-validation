import React, { Component } from "react";
import FormContainer from "./FormContainer";

class FormDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: ""
    };
  }

  nameHandler = e => {
    this.setState({
      username: e.target.value,
      email: e.target.value
    });
  };
  render() {
    return (
      <div>
        <FormContainer
          changed={this.nameHandler}
          currentUsername={this.state.username}
        />
      </div>
    );
  }
}

export default FormDetails;
