import React, {useContext} from 'react';

import {AppContext} from '../../contexts/App.context';

import './Person.scss';

export const Person = (person) => {
	
	const {handlePersonClick} = useContext(AppContext);

	return (
		<tr data-person={person.meta.username} className={`person ${person.parity}`} onClick={() => handlePersonClick(person.index) } >
		
			<td className="person__mugshot">
				<img src={person.meta.mugshot} width="100" alt=""/>
				<span style={{display:'none'}}>{person.meta.username}</span>
			</td>
		
			<td className="person__data" data-label="First name">{person.meta.searchParams.firstname}</td>
			<td className="person__data" data-label="Last name">{person.meta.searchParams.lastname}</td>
			<td className="person__data" data-label="Job Title">{person.meta.searchParams.job}</td>
			<td className="person__data" data-label="Department">{person.meta.searchParams.department}</td>
			<td className="person__data" data-label="Phone">{person.meta.phone}</td>
			<td className="person__data" data-label="Mobile">{person.meta.mobile}</td>
		</tr>
	)
}