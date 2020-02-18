import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 0, name: 'Max', age: 28, img: 'https://miro.medium.com/max/2400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
			{ id: 1, name: 'Manu', age: 29, img: 'https://www.hd-freewallpapers.com/latest-wallpapers/desktop-image-of-a-parrot-wallpaper.jpg' },
			{ id: 2, name: 'Stephanie', age: 26, img: 'https://www.remove.bg/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png' }
		],
		otherState: 'some other value',
		showPersons: false
	}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

	nameChangedHandler = (event, id) => {

		const personIndex = this.state.persons.findIndex(per => {
			return per.id === id;
		});

		const person = {...this.state.persons[personIndex]}

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState( {persons: persons} );

	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow})
	}

	render() {
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							click={() => this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							img={person.img} 
							key={person.id}
							changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
					})}
				</div>
			);

			style.backgroundColor = 'red';
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button
				style={style}
				onClick={this.togglePersonsHandler}>Toggle Persons</button>
				{persons}
			</div>
		);
	}
}

export default App;
