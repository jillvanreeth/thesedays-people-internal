import React, {useContext} from 'react';

import {AppContext} from '../../contexts/App.context';

import './Search.scss';

export const Search = () => {
	
	// handleKeyEvent = (e) => {
	
	// 	this.setState({
	// 		input: e.target.value ? e.target.value : '',
	// 	}, () => {
	// 		this.props.onKeyUp(this.state.input);
	// 	});
	// }

	const {handleKeyEvent, txtInput} = useContext(AppContext);


	return (
		<div className="search">
			<input className="search__input" type="text" onChange={(e) => handleKeyEvent(e.currentTarget.value)} value={txtInput} />
			<span className="search__helper">Search records</span>

			{txtInput && <span className="search__clear" onClick={this.handleKeyEvent}><span className="search__clear__icon"></span></span> }
		</div>
	)
	
}