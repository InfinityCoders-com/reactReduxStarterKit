
import React, { PropTypes } from 'react';

const Header = ({}) =>
  <div className='row'>
    <div className='col-md-12'>
      <a href='#/'> Home</a>
      <a href='#/login'> Login </a>
    </div>
  </div>;

Header.propTypes = {};

export default Header;
