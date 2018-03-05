import React from 'react';
import Link from './Link.jsx';


const Footer = (props) => {
  return (
    <div>
      <Link display='all'/>
      <Link display='completed' />
      <Link display='active' />
    </div>
  )
}

export default Footer;