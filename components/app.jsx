import React, {Component} from 'react';
import SearchResultContainer from '../containers/search-result-container.jsx';
import SearchPanel1 from './search-panel1.jsx';

export default class App extends Component {

  render() {
    return <div>
      <SearchPanel1 />
      <hr />
      <SearchResultContainer />
    </div>;
  }

}