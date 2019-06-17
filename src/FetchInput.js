require('babel-polyfill');
import React, { Component } from 'react';

const style = {
    margin: 12
};

export default class FetchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: null
    }
  }

  setQueryString(value) {
    this.setState({queryString: value});
  }

  handleSubmit() {
    if (!this.props.action) return
    fetch(this.props.action + this.state.queryString)
      .then(response => response.json())
      .then(json => console.log(json))
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(this.state.queryString); }}
          className="Input"
        >
          <input
            onChange={e => this.setQueryString(e.target.value)}
            value={this.state.queryString}
          /><br />
          <button type="submit" style={style}>Go</button>
        </form>
      </div>
    );
  }
}

console.log(FetchInput);
