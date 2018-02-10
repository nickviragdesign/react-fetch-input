require('babel-polyfill');
import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Container extends Component {
    render() {
        return (
            <div className="App">Test</div>
        );
    }
}
ReactDOM.render(<Container/>, document.getElementById('root'));
