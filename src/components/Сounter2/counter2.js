import React, { Component } from 'react';
import './counter2.scss'
// import { ClickedContext }  from '../../App'
import { FullNameContext }  from '../../App'

// eslint-disable-next-line import/no-anonymous-default-export
export default class   extends Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    removeCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
        if (!this.state.counter) {
            this.setState({
                counter: 0
            })
        }
    }

    render() {

        const isDisableBtn = [];

        isDisableBtn.push(this.state.counter ? '' : 'disable');

        const counter = this.state.counter;

        return (
            <div className="counter2">
                <h2>Counter2</h2>
                <FullNameContext.Consumer>
                    {
                        fullName => fullName ? <p>Dmitry Verteyko</p> : null
                    }
                </FullNameContext.Consumer>
            </div>
        )
    }
}

