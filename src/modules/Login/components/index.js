import React, { PropTypes } from 'react';

const Login = ({ name, onNameChange }) =>
  <div>
    <input type="text" onChange={onNameChange} />
    <p>Hello {name}</p>
  </div>;

Login.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
};

export default Login;
