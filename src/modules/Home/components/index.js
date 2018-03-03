import React, { PropTypes } from 'react';

const Home = ({ name, onNameChange }) =>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-12'>
        <input type="text" onChange={onNameChange} />
        <p>Hello {name}</p>
      </div>
    </div>
  </div>;

Home.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
};

export default Home;
