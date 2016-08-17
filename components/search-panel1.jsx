import React, {Component} from 'react';
import SearchPanel2 from './search-panel2.jsx';

export default class SearchPanel1 extends Component {
  render() {
    return <div className="search-panel">
      <SearchPanel2 onSearch={this.props.onSearch}/>
    </div>;
  }
}