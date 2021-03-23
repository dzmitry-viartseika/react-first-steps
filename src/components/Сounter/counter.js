import React, { Component } from 'react';
import Counter2 from '../Сounter2/counter2'
import './counter.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default class Counter  extends Component {

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
            <div className="counter">
                <h2>Counter : { counter }</h2>
                <strong>
                    { this.props.clicked }
                </strong>
                <Counter2 />
                <button onClick={this.addCounter}>+ 111</button>
                <button className={ isDisableBtn } onClick={this.removeCounter}>-</button>
            </div>
        )
    }
}

