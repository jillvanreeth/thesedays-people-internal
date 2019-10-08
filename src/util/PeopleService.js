const API_URL = 'https://people.tdlinx.be';

export const PeopleService = () => {
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
			return jsonResponse.map((person,key) => {
					return {
						id: person.id,
						mugshot: person.thumbnail,
						phone: person.phone,
						mobile: person.mobile,
						mail: person.mail,
						location: person.location,
						manager: person.manager,
						searchParams: {
							lastname: person.lastname,
							firstname: person.firstname,
							job: person.title_name,
							department: person.department_name,
						}
					}
			});
		})
		.catch(error => {
			return false;
		});
}

