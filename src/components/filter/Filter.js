import React, {useContext} from 'react';

import {AppContext} from '../../contexts/App.context';

import './Filter.scss';

export const Filter = () => {	
	
	const {filters, handleFilterChange} = useContext(AppContext);

	const renderOptions = (items) => items.map((item, index) => <option key={index} value={item}>{item}</option>);
	
	return (
		<table className="filter">
			<thead>
				<tr>	
					<th className="sorting_asc" rowSpan="1" colSpan="1">
						<select className="filter__select filter-column" onChange={(e) => handleFilterChange(e.currentTarget)} id="jobs">
							<option value="">- Job -</option>
							{filters && renderOptions(filters.jobs)}
						</select>
					</th>

					<th className="sorting_asc" rowSpan="1" colSpan="1">
						<select className="filter__select filter-column" onChange={(e) => handleFilterChange(e.currentTarget)} id="departments">
							<option value="">- Department -</option>
							{filters && renderOptions(filters.departments)}
						</select>
					</th>
					
				</tr>
			</thead>
		</table>
	)
}