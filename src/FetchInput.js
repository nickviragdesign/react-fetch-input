require('babel-polyfill');
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
    margin: 12
};

export default class FetchInput extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    Hello
                </div>
                <form
                    onSubmit=
                        { e => {
                            e.preventDefault();
                            this.props.fetchTopics(this.props.queryString);
                        }}
                    className="Input"
                >
                    <TextField
                        hintText="Brooklyn, NY"
                        floatingLabelText="Location"
                        onChange=
                            { e => {
                                this.props.setQueryString(e.target.value);
                            }}
                        value={this.props.queryString}
                    /><br />
                    <RaisedButton type="submit" label="Primary" primary={true} style={style} />
                </form>
            </MuiThemeProvider>
        );
    }
}

console.log(FetchInput);
