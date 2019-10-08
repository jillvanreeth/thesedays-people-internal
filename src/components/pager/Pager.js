import React, {useContext} from 'react';

import {AppContext} from '../../contexts/App.context';

import './Pager.scss';

import {Page} from './Page';

export const Pager = () => {
	
	const {pages, handlePageClick} = useContext(AppContext);

	const renderPages = (pages) => {

		const pageItems = [];

		for(let i = 1; i <= pages; i++) {	
			pageItems.push(<Page key={i} nr={i} />);
		}

		return pageItems;
	}

	return (
		<nav className="pager">
		  <ul className="pager__list">
		  	
		    <li className="pager__item pager__item--dir disabled">
		      <a onClick={(e) => handlePageClick(e.currentTarget.dataset.page)} data-page="prev" className="pager__link" href="#0">
		        <span aria-hidden="true">&laquo;</span>
		      </a>
		    </li>

		    {pages && renderPages(pages)}

		    <li className="pager__item pager__item--dir">
		      <a onClick={(e) => handlePageClick(e.currentTarget.dataset.page)} data-page="next" className="pager__link" href="#0">
		        <span>&raquo;</span>
		      </a>
		    </li>
		  </ul>
		</nav>
	)
	
}

