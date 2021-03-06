import React from 'react';
import './Person.scss';

const person = (props) => {
	return (
        <div className="Person">
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <img src={props.img} alt="" />
            <p>
                {props.children}
            </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
	);
}

export default person;