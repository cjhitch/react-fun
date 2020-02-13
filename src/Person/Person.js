import React from 'react';
import './Person.scss';

const person = (props) => {
	return (
        <div>
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p>
                {props.children}
            </p>
        </div>
	);
}

export default person;