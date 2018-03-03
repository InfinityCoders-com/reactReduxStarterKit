import React, { PropTypes } from 'react';

const LoginForm = ({ state, onNameChange, onPassChange, onSubmit }) =>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-12'>
        <input type="text" onChange={onNameChange} value={state.name} /><br />
        <input type="text" onChange={onPassChange} value={state.pass} /><br />
        <input type="submit" onClick={onSubmit} />
        <p>Hello {name}</p>
      </div>
    </div>
  </div>;

LoginForm.propTypes = {
  state: PropTypes.object,
  onNameChange: PropTypes.func.isRequired,
  onPassChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
