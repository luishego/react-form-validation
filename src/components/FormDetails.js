import React, { Component } from "react";
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
        <form onSubmit={this.submitHandler}>
          <p>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              name="userName"
              onChange={this.inputChangeHandler}
            />
          </p>
          <p>
            <button>Submit that shit!</button>
          </p>
        </form>
        <h4>Welcome {userName}</h4>
      </div>
    );
  }
}

export default FormDetails;
