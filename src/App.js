import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Stephanie', age: 26 }
		]
	}

	switchNameHandler = (newName) => {
		this.setState( {
			persons: [
				{ name: newName, age: 28 },
				{ name: 'Manu', age: 29 },
				{ name: 'Stephanie', age: 27 }
			]
		} )
	}

	nameChangedHandler = (event) => {
		this.setState( {
			persons: [
				{ name: event.target.value, age: 28 },
				{ name: 'Manu', age: 29 },
				{ name: 'Stephanie', age: 26 }
			]
		} )
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button
				style={style}
				onClick={() => this.switchNameHandler('Max!!')}>Switch Name</button> {/* not recommended */}
				<Person 
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
					click={this.switchNameHandler.bind(this, 'Maximilian') /* Recommended */}
					changed={this.nameChangedHandler}
				/>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
			</div>
		);
	}
}

export default App;
