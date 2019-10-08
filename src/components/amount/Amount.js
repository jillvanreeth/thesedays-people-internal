import React, {useContext} from 'react';

import {AppContext} from '../../contexts/App.context';

import './Amount.scss';

export const Amount = () => {

	
	// handleAmountChange = (e) => {

	// 	const nr = parseInt(e.target.value);

	// 	this.props.onChange(nr);
	// }
 	const {handleAmountChange} = useContext(AppContext);

	return (

		

		<div className="amount">
			<select className="amount__select" onChange={(e) => handleAmountChange(e.target.value)} defaultValue="10">
				<option value="50">50</option>
				<option value="20">20</option>
				<option value="10">10</option>
				<option value="-1">All</option>
			</select>
			
			<span className="amount__helper">items per page</span>
		</div>
	)
}