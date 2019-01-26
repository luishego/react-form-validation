import React, { Component } from "react";
import FormContainer from "./FormContainer";

class FormDetails extends Component {
  state = {
    username: "",
    email: ""
  };
  nameHandler = target => {
    this.setState({
      username: target.value,
      email: target.value
    });
    console.log(this.username, this.email);
  };
  render() {
    return (
      <div>
        <FormContainer />
      </div>
    );
  }
}

export default FormDetails;
