import React from "react";
import { Link } from "react-router-dom";

const Form = ({ onSubmit, onChange, userName, ...rest }) => {
  return (
    <div>
      <form>
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
          <button>
            <Link to={`/result/${userName}`}>Submit that shit!</Link>
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
