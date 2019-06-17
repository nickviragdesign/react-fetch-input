require('babel-polyfill');
import React, { Component } from 'react';

const style = {
    margin: 12
};

export default class FetchInput extends Component {
    this.state = {
        queryString: null
    }

    setQueryString(value) {
        this.setState({queryString: value})
    }

    render() {
        return (
            <div>
                <div className="App">
                    Hello
                </div>
                <form
                    onSubmit=
                        { e =>
                            { e.preventDefault();
                            this.props.fetchTopics(this.state.queryString); }
                        }
                    className="Input"
                >
                    <input
                        onChange=
                            { e =>
                                { this.setQueryString(e.target.value); }
                            }
                        value={this.props.queryString}
                    /><br />
                    <button type="submit" style={style}>
                        Go
                    </button>
                </form>
            </div>
        );
    }
}

console.log(FetchInput);
