const API_URL = 'https://people.tdlinx.be';

const jobs = [];

export const JobService = () => {
	return fetch(`${API_URL}/json/people`)
		.then((response) => {
  		if(response.statusText === 'OK') {
      		return response.json();
  		}
		})
		.then((jsonResponse) => {
			jsonResponse.forEach((person,key) => {

				let job = person.title_name;
				
				if(!jobs.includes(job)) {
	        jobs.push(job);
	        jobs.sort((a,b) => a > b ? 1 : -1);
	      }
			});
		return jobs;
	});
	// .catch(function(response) {
	// 		console.log(response,'Network response was not ok.'); return false;
	// 	});
}
