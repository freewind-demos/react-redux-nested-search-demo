'use strict';
import SearchForm from '../components/search-form.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

function mapStateToProps(state) {
  return {
    keyword: state.keyword
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (keyword) => dispatch(actions.search(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);