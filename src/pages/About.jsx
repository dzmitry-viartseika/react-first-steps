import React, { Component } from 'react';


export default class About  extends Component {

    proceedToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    render() {
        return (
            <div>
                About
                <button onClick={this.proceedToHome}>
                    Back to Main
                </button>
            </div>
        )
    }
}
