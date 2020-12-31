import React from 'react'
import './Car.css'
// import Radium from 'radium'


class Car extends React.Component {

	componentWillReceiveProps(nextProps) {
		console.log('Car componentWillReceiveProps', nextProps);
	}

	shouldComponentUpdate (nextProps, nextState) {
		console.log('Car shouldComponentUpdate', nextProps, nextState);
		return true;
	}

	componentWillUpdate (nextProps, nextState) {
		console.log('Car componentWillUpdate', nextProps, nextState);
	}

	componentDidUpdate () {
		console.log('Car componentDidUpdate');
	}

	render () {

		console.log('Car Render')
		const inputClasses = ['input'];

		if (this.props.name !== '') {
			inputClasses.push('green');
		} else {
			inputClasses.push('red');
		}

		if (this.props.name.length > 4) {
			inputClasses.push('bold');
		}


		const style = {
			border: '3px solid #62f12f',
			transition: 'all .2s',
			boxShadow: '0 4px 5px 0 rgba(0,0,0,.14)',
			':hover': {
				border: '3px solid black',
				boxShadow: '0 4px 15px 0 rgba(0, 0 , 0,.25)'
			}
		}

		return (
			<div className='car' style={style}>
				<div>Name: {this.props.name}</div>
				<div>Year: {this.props.year}</div>
				<input
					type="text"
					onChange={this.props.onChangeName}
					value={this.props.name}
					className={inputClasses.join(' ')}
				/>
				{<button onClick={this.props.onDelete}>Delete</button>}
			</div>
	  );
	}
}

export default Car;