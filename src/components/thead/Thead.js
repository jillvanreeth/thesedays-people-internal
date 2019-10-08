import React from 'react';

import './Thead.scss';

import {Sort} from './../../components/sort/Sort';
import {Filter} from './../../components/filter/Filter';

export const Thead = (props) => {
	return(

		<thead className="thead" >
			<tr>
				<th rowSpan="1" colSpan="1" ></th>

				<td colSpan="2">	
					<Sort/>
				</td>

				<td colSpan="2">	
				<Filter/>
				</td>

				<th style={{width:110}} rowSpan="1" colSpan="1">Phone</th>
				<th style={{width:110}} rowSpan="1" colSpan="1">Mobile</th>
			</tr>
		</thead>
	)

}