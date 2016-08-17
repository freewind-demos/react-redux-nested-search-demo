import React, {Component} from 'react';

export default class SearchResult extends Component {
  render() {
    const {keyword, items}  = this.props;
    return <div>
      {
        items.filter(item => item.toLowerCase().includes(keyword.toLowerCase()))
          .map(i => <div>{i}</div>)
      }
    </div>;
  }
}