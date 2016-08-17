import React, {Component} from 'react';
import SearchForm from './search-form.jsx';

export default class SearchPanel3 extends Component {
  render() {
    return <div className="search-panel">
      <SearchForm onSearch={this.props.onSearch}/>
    </div>;
  }
}