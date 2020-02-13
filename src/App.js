import React, { useState } from 'react';
import './App.scss';
import Person from './Person/Person';

const App = props => {
	const [ personsState, setPersonsState ] = useState( {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Stephanie', age: 26 }
		]
	});

	const [otherState, setOtherState] = useState({
		othersState: 'some other value'
	});

	console.log(personsState, otherState);

	const switchNameHandler = () => {
		setPersonsState({
			persons: [
				{ name: 'Maximilian', age: 28 },
				{ name: 'Manu', age: 29 },
				{ name: 'Stephanie', age: 27 }
			]
		});
	}

	return (
		<div className="App">
			<h1>Hi, I'm a React App</h1>
			<p>This is really working!</p>
			<button onClick={switchNameHandler}>Switch Name</button>
			<Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
			<Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
			<Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
		</div>
	);
}

export default App;
