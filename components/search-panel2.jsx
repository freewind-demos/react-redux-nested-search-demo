import React, {Component} from 'react';
import SearchPanel3 from './search-panel3.jsx';

export default class SearchPanel2 extends Component {
  render() {
    return <div className="search-panel">
      <SearchPanel3 onSearch={this.props.onSearch}/>
    </div>;
  }
}