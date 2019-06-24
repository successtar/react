import React from 'react';

import "./Walex.css";

/* Walex component */

const walex = props => {

	return (
		<div className="Walex">
			<h3 onClick={props.clicker}> {props.name} is here. He Studied at {props.school} and random age is {Math.floor(Math.random() * 50)}</h3>

			<button 
				onClick={props.delete} 
				style={props.styling}> 
				Delete 
			</button>

			<input type="text" onChange={props.change} value={props.name} />

		</div>
	); 
};

export default walex;