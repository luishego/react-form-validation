import React from "react";

const Form = ({ onSubmit, onChange, userName, ...rest }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            name="userName"
            onChange={onChange}
            {...rest}
          />
        </p>
        <p>
          <button>Submit that shit!</button>
        </p>
      </form>
    </div>
  );
};

export default Form;
