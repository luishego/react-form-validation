import React from "react";

const FormContainer = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        //value={this.state.username}
        //onChange={this.nameHandler}
      />
      <input
        type="email  "
        placeholder="Email"
        //value={this.state.email}
        //onChange={this.nameHandler}
      />
      <button type="submit">Submit that shit!</button>
    </form>
  );
};
export default FormContainer;
