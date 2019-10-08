import React, {useContext} from 'react';

import {AppContext} from '../../contexts/App.context';

export const Page = (props) => {

	const {activePage, handlePageClick} = useContext(AppContext);
	
	return (
		<li className={`pager__item ${activePage === props.nr ? 'pager-is-active' : ''}`}>
			<a onClick={(e) => handlePageClick(e.currentTarget.dataset.page)} 
				className="pager__link"
				href="#0"
				data-page={props.nr}>{props.nr}</a>
		</li>
	)
}