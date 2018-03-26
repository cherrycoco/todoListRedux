import React from 'react';
import FilterLink from '../containers/FilterLink.jsx';


const Footer = () => (
  <div>
    <FilterLink filter='All'>All</FilterLink>
    {' '}
    <FilterLink filter='Completed'>Completed</FilterLink>
    {' '}
    <FilterLink filter='Active'>Active</FilterLink>
    {' '}
  </div>
)

export default Footer;