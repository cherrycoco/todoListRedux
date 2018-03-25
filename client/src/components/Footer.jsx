import React from 'react';
import FilterLink from '../containers/FilterLink.jsx';


const Footer = () => (
  <div>
    <FilterLink filter='SHOW_ALL' display='All' />
    {' '}
    <FilterLink filter='SHOW_COMPLETED' display='Complete' />
    {' '}
    <FilterLink filter='SHOW_ACTIVE' display='Active' />
    {' '}
  </div>
)

export default Footer;