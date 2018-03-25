import React from 'react';
import { connect } from 'react-redux';
import Link from '../components/Link.jsx';
import { setVisibilityFilter } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    currentFilter: state.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(props.filter));
    }
  }
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;


