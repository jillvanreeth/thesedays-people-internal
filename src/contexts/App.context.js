import React, { useState, useEffect, createContext } from 'react';
import {FilterService} from '../util/FilterService';
import {PeopleService} from '../util/PeopleService';

export const AppContext = createContext({
	show: null,
	menu: 'closed',
	pages: null,
	activePage: 1,
	isLoading: true,
	totalPeople: [],
  people: [],
	activePerson: null,
	filters: {},
	filteredPeople: [],
	activeFilter: null,
	activeFilterValue: null,
	filterValue: null,
	txtInput: null,
	results: true,
	dir: 'asc',
	activeSort: 'firstname',
	error: true,
});

export const AppProvider = ({children}) => {
// GET PEOPLE
	const getPeople = () => {
     
    PeopleService().then(people => {
      if(people) {
      	const totalPeopleState = people;
       	totalPeopleState && setTotalPeople(totalPeopleState);
       
        const isLoadingState = !isLoading;
        updateLoading(isLoadingState); 
      }
      else {
      	updateError(!error);
      }
    });
  }
  const [totalPeople, setTotalPeople] = useState(getPeople);
  const [isLoading, updateLoading] = useState(true);
  const [error, updateError] = useState(false);


// GET FILTERS
	const getFilters = () => {
		FilterService().then(filters => {

			if(filters.departments && filters.jobs) {
				const filtersState = {
					departments: filters.departments,
					jobs: filters.jobs,
				};
	    	setFilters(filtersState);
       } 
    });
	}
	const [filters, setFilters] = useState(getFilters);


// MENU
	const handleMenuToggle = () => {
		const menuState = menu === 'open' ? 'closed' : 'open';
		updateMenu(menuState);
	};
	const [menu, updateMenu] = useState('closed'); 
	

// KEY EVENTS
	const handleKeyEvent = (txt) => {
		const txtState = txt ? txt : '';
		updateTextInput(txtState);
	}
	const [txtInput, updateTextInput] = useState(null);


// BACK CLICK
	const handleBackClick = () => {
		updateActivePerson(null);
	}


// PERSON CLICK
	const handlePersonClick = (index) => {
		const activePersonState = people[index];
		updateActivePerson(activePersonState);
	}
	const [activePerson, updateActivePerson] = useState(null);


// AMOUNT CHANGE	
	const handleAmountChange = (nr) => {
		//console.log('AMOUNT CHANGE');
		updateShow(nr);		
	}
	const [show, updateShow] = useState(10);


// HANDLE PAGE CLICK
	const handlePageClick = (dataPage) => {
		//console.log('PAGE CLICK', dataPage);
		const thePage = isNaN(dataPage) ? dataPage : ~~dataPage;
		
	 	if((activePage === 1 && dataPage === 'prev') || (activePage === pages && dataPage === 'next') ) { return false; }

	  if(isNaN(thePage)) {
	  	updatePage(thePage === 'prev' ? activePage -1 : activePage + 1);
		}
		else { 
			updatePage(~~thePage);
		}		

		const next = document.querySelector('[data-page="next"]').parentNode;
		const prev = document.querySelector('[data-page="prev"]').parentNode;
			
		thePage === pages ? next.classList.add('disabled') : next.classList.remove('disabled');
 		thePage === 1 ? prev.classList.add('disabled') : prev.classList.remove('disabled');
	}
	const [activePage, updatePage] = useState(1);
 

// PEOPLE TO SHOW
  const showPeople = (offset, people) => {
  	//console.log('PEOPLE TO SHOW');
  	let minOffset = !offset ? 0 : (show * offset) - show;
    let maxOffset = !offset ? show : show * offset;

    maxOffset = maxOffset > people.length ? people.length : maxOffset;

    const peopleState = people.slice(minOffset, maxOffset);
   
    peopleState && updatePeople(peopleState);
    
    const pagesState = Math.ceil(people.length / show);
    peopleState && setPages(pagesState);	
  }
  const [people, updatePeople] = useState(null);
  const [pages, setPages] = useState(null);


// SORTING
	const handleSortClick = (target) => {

		const thePeople = [...people];
		
		if(dir === 'asc') {
			thePeople.sort((a,b) => (a.searchParams[target] < b.searchParams[target]) ? 1 : -1);
		}

		if(dir === 'desc') {
			thePeople.sort((a,b) => (a.searchParams[target] > b.searchParams[target]) ? 1 : -1);
		}

		updatePeople(thePeople);
		updateDir(dir === 'asc' ? 'desc' : 'asc');
		updateSort(target);
	}
	const [dir, updateDir] = useState('asc');
	const [activeSort, updateSort] = useState('firstname');


// FILTER CHANGE
	const handleFilterChange = (currentTarget) => {
		const activeFilterId = currentTarget.id;
		updateActiveFilter(activeFilterId);

		const activeFilterValueState = currentTarget.value.toLowerCase();
		updateFilterValue(activeFilterValueState);

		// reset other filter
		const selects = document.querySelectorAll(`select.filter__select:not(#${currentTarget.id})`);
		selects.forEach((select) => select.selectedIndex = 0);
	}
	const [activeFilter, updateActiveFilter] = useState(null);
	const [activeFilterValue, updateFilterValue] = useState(null);


// FILTERING
	const filterIt = () => {
		
		const activeFilterId = activeFilterValue && activeFilterValue.replace(/\s/g, '');
		//console.log('FILTER IT');
		
		let filteredPeopleState = totalPeople.filter(person => {
			let count = 0;
			const theParams = Object.values(person.searchParams).join('').replace(/\s/g, '').toLowerCase();
      if(txtInput && activeFilterValue) {
      	theParams.indexOf(txtInput) > -1 && count++;
        theParams.indexOf(activeFilterValue) > -1 && count++;

        if(count === 2 && txtInput && activeFilterValue) {  return person; }
      }
      else {
      	if(txtInput && theParams.indexOf(txtInput) > -1) {  return person; }
     		if(activeFilterValue && activeFilterValue.length && theParams.indexOf(activeFilterId) > -1) { return person; }
      }
		});
		
		updateFilteredPeople(filteredPeopleState);
		
		!filteredPeopleState.length ? updateResults(false) : updateResults(true);
	}
	const [filteredPeople, updateFilteredPeople] = useState(null);
	const [results, updateResults] = useState(true);


// RESET
	const resetIt = () => {
		//console.log('RESET');
		updateFilteredPeople(null);
		updatePeople(totalPeople);
	}

	
// CALLBACKS
	useEffect(() => {
  	if(filteredPeople) { showPeople(null,filteredPeople); }

	}, [filteredPeople]);

	useEffect(() => {
		const thePeople = filteredPeople ? filteredPeople : totalPeople;	
		(thePeople && show) && showPeople(null, thePeople);

	}, [show,filteredPeople, totalPeople]);
	
	useEffect(() => {
		(activeFilterValue || txtInput) && filterIt();

		(!activeFilterValue && !txtInput) && resetIt();

	}, [activeFilterValue, txtInput]);


	useEffect(() => {
		const thePeople = filteredPeople ? filteredPeople : totalPeople;	
		(activePage && thePeople) && showPeople(activePage, thePeople);

	}, [activePage,filteredPeople, totalPeople]);


	useEffect(() => {
		if(totalPeople && !activeFilterValue) { showPeople(null, totalPeople); }

	}, [totalPeople, activeFilterValue]);



	return (
		<AppContext.Provider value={{error,activePage, handlePageClick, handleAmountChange, activeSort,dir,handleSortClick, results, handleKeyEvent, pages, isLoading, people, activeFilter, activeFilterValue, handleFilterChange, filters,menu, handleMenuToggle, activePerson, handleBackClick, handlePersonClick}}>{children}</AppContext.Provider>
	);

};