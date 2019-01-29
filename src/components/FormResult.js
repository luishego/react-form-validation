import React from "react";

const FormResult = ({ match }) => {
  const name =
    match.params && match.params.name ? match.params.name : "Unknown";

  return <h4>Welcome {name}</h4>;
};

export default FormResult;
