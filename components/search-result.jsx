import React, {Component} from 'react';

const items = [
  'JavaScript', 'Node', 'React', 'Redux', 'Bootstrap', 'Webpack', 'Babel'
];

export default class SearchResult extends Component {
  render() {
    const {keyword}  = this.props;
    return <div>
      {
        items.filter(item => item.toLowerCase().includes(keyword.toLowerCase()))
          .map(i => <div>{i}</div>)
      }
    </div>;
  }
}