import React, {Component} from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.props.onSearch;
  }

  render() {
    const {keyword} = this.props;
    return <form>
      <input type="text" placeholder="keyword" autoFocus="true"
             defaultValue={keyword}
             onChange={this._onKeywordChange.bind(this)}/>
    </form>
  }

  _onKeywordChange(event) {
    let keyword = event.target.value;
    this.onSearch(keyword);
  }

}