import React, { Component } from 'react';
import './App.css';
import Child from './components/child'

class App extends Component {

  state = {
    cars: [
      {title: 'Ford', year: 2018},
      {title: 'Audi', year: 2016},
      {title: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({pageTitle: newTitle})
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars;
    const title = this.state.pageTitle;

    return (
      <div style={divStyle}>
        <h1>{ title }</h1>
        <button onClick={this.changeTitleHandler.bind(this, 'parent changed')}>change title</button>
        <Child title={cars[0].title} onChangeTitle={this.changeTitleHandler.bind(this, cars[0].title)}/>
        <Child title={cars[1].title} onChangeTitle={() => this.changeTitleHandler(cars[1].title)}/>
        <Child title={cars[2].title} onChangeTitle={() => this.changeTitleHandler('werteeC')}/>
      </div>
    );
  }
}

export default App;
