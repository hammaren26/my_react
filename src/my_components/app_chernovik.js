import React, { Component } from 'react'
import Car from './todo/Car.js'
import './App.scss'


class App extends Component {

	constructor(props) {
		console.log('App constructor')
		super(props) 

		this.state = {
			cars: [
				{name:'Ford', year:'2016'},
				{name:'Mazda', year:'2017'},
				{name:'Audi', year:'2019'}
			],
			pageTitle: 'React components',
			showCars: false
		}
	}

	// changeTitleHandler = (newTitle) => {
	// 	this.setState({
	// 		pageTitle: newTitle
	// 	})
	// }

	onChangeName (name, index) {;
		const car = this.state.cars[index];
		car.name = name;
  

		const cars = [...this.state.cars]
		cars[index] = car
		this.setState({
			cars: cars
		})

	}

	toggleCarsHandler = () => {
		this.setState({
			showCars: !this.state.showCars
		})
	}

	deleteHandler = (index) => {

		const cars = this.state.cars.concat()
		cars.splice(index, 1)
		this.setState({
			cars: cars
		})
	}


	componentWillMount() {
		console.log('App componentWillMount');
	}

	componentDidMount() {
		console.log('App componentDidMount');
	}


	render () {

		console.log('App Render');

	    let cars = null;

	    if (this.state.showCars) {
	  	  cars = this.state.cars.map((car, index) => {
	    	  return (
	    		  <Car
	    			  key = {index}
			    	  name = {car.name}
			    	  year = {car.year}
			    	  onDelete = {this.deleteHandler}
			    	  onChangeName = { event => {this.onChangeName(event.target.value, index)} }
	   			  />
	    	  )
    	  })
	    }


		return (
		  <div className='box'>
		    {/*<h1 style = {divStyle}>{this.state.pageTitle}:</h1>*/}
		    {/*<button onClick={this.changeTitleHandler.bind(this, 'Change')}>Change title</button>*/}
		    <h1>{this.props.title}</h1>
		    <button
		    	onClick={this.toggleCarsHandler}
		    	className={'AppButton'}
		    >
		    	Toggle cars
		    </button>

		    { cars }
		  </div>
		);
	}
}

export default App;