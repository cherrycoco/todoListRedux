import React from 'react';

const styles = {
  link: {
    margin: '2px'
  }
}

const Link = (props) => {
  return (
    <a style={styles.link} href='#'>{props.display}</a>
  )
}

export default Link;
