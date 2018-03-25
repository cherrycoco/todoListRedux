import React from 'react';
import { connect } from 'react-redux';
import Link from '../components/Link.jsx';
import { setVisibilityFilter } from '../actions/index';

const mapStateToProps = (state) => ({
    currentFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick () {
    dispatch(setVisibilityFilter(props.filter));
  }
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;


