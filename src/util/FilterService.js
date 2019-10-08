const API_URL = 'https://people.tdlinx.be';

const filters = {
	jobs: [],
	departments: [],
};


export const FilterService = () => {
	return fetch(`${API_URL}/json/people`)
		.then((response) => {
  		if(response.statusText === 'OK') {
      		return response.json();
  		}
  		else {
	      throw Error('Network response was not ok.');
	    }
		})
		.then((jsonResponse) => {
			jsonResponse.forEach((person,key) => {

				let dep = person.department_name;
				let job = person.title_name;
				
				if(!filters.jobs.includes(job)) {
	        filters.jobs.push(job);
	        filters.jobs.sort((a,b) => a > b ? 1 : -1);
	      }

				if(!filters.departments.includes(dep)) {
	        filters.departments.push(dep);
	        filters.departments.sort((a,b) => a > b ? 1 : -1);
	      }
			});
		return filters;
	})
	.catch(error => {
		return false;
	});
}




