import React, {Component} from 'react';
import SearchResult from './search-result.jsx';
import SearchPanel1 from './search-panel1.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  render() {
    return <div>
      <SearchPanel1 onSearch={(keyword) => this.setState({keyword: keyword})}/>
      <hr />
      <SearchResult keyword={this.state.keyword} items={
        ['JavaScript', 'Node', 'React', 'Redux', 'Bootstrap', 'Webpack', 'Babel']
      }/>
    </div>;
  }

}