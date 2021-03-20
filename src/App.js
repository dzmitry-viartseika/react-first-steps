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
    pageTitle: 'React components',
    showCars: false
  }

  changeTitleHandler = (newTitle) => {
    this.setState({pageTitle: newTitle})
  }

  handlerInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  toggleText = () => {
    this.setState({
      showCars: !this.state.showCars
    })
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
        <input type="text" onChange={this.handlerInput}/>
        <button onClick={this.changeTitleHandler.bind(this, 'parent changed')}>change title</button>
        <button onClick={this.toggleText}>Toggle</button>
        { this.state.showCars ?
          <p>
            content
          </p> : null
        }
        {cars.map(car => <Child key={car.title} title={car.title} year={car.year}
                              onChangeTitle={() => this.changeTitleHandler(car.title)} />)}
      </div>

    );
  }
}

export default App;
