import React, { Component }  from 'react';
import './App.scss';
import Child from './components/Child/child';
import Counter from './components/Сounter/counter'
import Test from './components/Test/test'
import ButtonTemplate from "./components/Elements/ButtonTemplate";
import PropTypes from 'prop-types';

// export const ClickedContext = React.createContext(false);
export const FullNameContext = React.createContext('');

class App extends Component {
  // Date
  state = {
    cars: [
      {title: 'Ford', year: 2018},
      {title: 'Audi', year: 2016},
      {title: 'Mazda', year: 2010},
      {title: 'Geely', year: 2020}
    ],
    pageTitle: 'React components',
    showCars: false,
    clicked: false,
    title: 'State title',
    counter: 0,
    fullName: ''
  }

  // Function

  test1 = (newTitle) => {
    this.setState({
      title: newTitle,
    })
  }



  changeTitleHandler = (newTitle) => {
    this.setState({title: newTitle})
  }

  handlerInput = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  onDeleteCar = (index) => {
    const cars = this.state.cars;
    const car = this.state.cars[index]
    if (car.title === this.state.pageTitle) {
      this.setState({
        pageTitle: 'Deleted Title'
      })
    }
    cars.splice(index, 1)
    this.setState({
      cars,
    })
  }

  toggleText = () => {
    console.log('cl')
    this.setState((prevState) => {
      return {
        showCars: !prevState.showCars
      }
    })
  }

  onChangeHeadline = (title, index) => {
    const car = this.state.cars[index];
    car.title = title;
    const cars = [...this.state.cars]
    cars[index] = car;
    this.setState({
      cars,
    })
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }


  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps')
  // }


  render() {
    console.log('render')
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars;
    const title = this.state.pageTitle;
    const mainTitle = this.state.title;
    const counter = this.state.counter;
    const isVisible = this.state.showCars;

    const titleClass  = [];

    if (mainTitle === 'New Title') {
      titleClass.push('raven')
    }

    const text = 'Title'

    return (
      <>
        <ButtonTemplate buttonText="Click me"/>
        <button onClick={() => this.setState({
          fullName: 'Dmitry Verteyko'}
          )}>Change Clicked Context Api</button>
          <div style={divStyle}>
          <input type="text"
                 onChange={this.handlerInput}
          />
          <h1 className={ titleClass }>
            { mainTitle }
          </h1>

          <h2>Counter: { counter }</h2>
          <Test
              titleComponent={text}
              onChangeTitle={() => this.test1('daskdskada')}
          />
          <button onClick={this.changeTitleHandler.bind(this, 'function text')}>Change Title weeweqw</button>
          <div>
            ====================================
          </div>
          { isVisible ?
              <p>
                ewrwekrwe rkmwek rmwe krw rw wek rmwek rmwe w
              </p> : null
          }
            <FullNameContext.Provider value={this.state.fullName}>
              <Counter />
            </FullNameContext.Provider>
          <div>
            ====================================
          </div>
          <h1>{ this.props.mainTitle }</h1>
          <Counter />
          <input type="text" onChange={this.handlerInput}/>
          <button onClick={this.changeTitleHandler.bind(this, 'parent changed')}>change title</button>
          <button onClick={this.toggleText}>Toggle CONTENT</button>
          { this.state.showCars ?
              <p>
                { title }
              </p> : null
          }
              {cars.map((car, index) =>
                  <Child key={index}
                         title={car.title}
                         year={car.year}
                         onChangeHeadline={event => this.onChangeHeadline(event.target.value, index)}
                         onChangeTitle={() => this.changeTitleHandler(car.title)}
                         onDeleteCar={() => this.onDeleteCar(index)} />
              )}
        </div>
      </>
    );
  }
}

Child.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  onChangeTitle: PropTypes.func,
  onChangeHeadline: PropTypes.func,
  onDeleteCar: PropTypes.func.isRequired,
  // array: PropTypes.array,
  // bool: PropTypes.bool,
  // object: PropTypes.object,
}


export default App;
