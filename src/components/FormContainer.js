import React from "react";

const FormContainer = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        value={props.nameHandler}
        onChange={props.currentUsername}
      />
      <input
        type="email"
        placeholder="Email"
        value={props.email}
        onChange={props.nameHandler}
      />
      <button type="submit">Submit that shit!</button>
    </form>
  );
};
export default FormContainer;
