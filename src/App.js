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

	render() {
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button onClick={() => this.switchNameHandler('Max!!')}>Switch Name</button> {/* not recommended */}
				<Person 
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
					click={this.switchNameHandler.bind(this, 'Maximilian') /* Recommended */}
				/>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
			</div>
		);
	}
}

export default App;
