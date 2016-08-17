'use strict';
import SearchResult from '../components/search-result.jsx';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    keyword: state.keyword,
    items: state.items
  }
}

export default connect(mapStateToProps)(SearchResult);