import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container-fluid text-center'>
    <div className='row bg-blue'>
      <span className='logo'>TDM</span>
      <div className='nav'>
        <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
        <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
      </div>
      <span className='settings'></span>
    </div>
    <div className='row'>
      <div className='page-layout__viewport'>
        {children}
      </div>    
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
