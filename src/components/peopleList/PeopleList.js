import React, {useContext} from 'react';

import {AppContext} from '../../contexts/App.context';

import './PeopleList.scss';

import {Person} from './../person/Person';

export const PeopleList = () => {

	const {people} = useContext(AppContext);

	const renderPeople = (people) => people.map((person, index) => <Person index={index} key={person.id} meta={person} parity={index % 2 === 0 ? 'even' : 'odd'} /> );

	return (		 
		<tbody className="peopleList">
			{people && renderPeople(people)}
		</tbody>
	)
}