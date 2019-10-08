const API_URL = 'https://people.tdlinx.be';

const departments = [];

export const DepartmentService = () => {
	return fetch(`${API_URL}/json/people`)
		.then((response) => {
  		if(response.statusText === 'OK') {
      		return response.json();
  		}
		})
		.then((jsonResponse) => {
			jsonResponse.forEach((person,key) => {

				let dep = person.department_name;
				
				if(!departments.includes(dep)) {
	        departments.push(dep);
	        departments.sort((a,b) => a > b ? 1 : -1);
	      }
			});
		return departments;
	});
}
