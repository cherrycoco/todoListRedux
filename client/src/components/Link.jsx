import React from 'react';

const Link = ({ currentFilter, filter, onClick, display }) => {
  if (currentFilter === filter) return <span>{display}</span>

  return (
    <a onClick={(e) => {
      e.preventDefault();
      onClick();
    }} href='#'>
    {display}
    </a>
  )
}

export default Link;
