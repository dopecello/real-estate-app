// UNIVERSAL SELECTORS
const searchBtn = document.getElementById("searchBtn")


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a074ef487mshdab54e7691d32ffp1dcf75jsn10bed4368ac3',
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
	}
};

let stateCode = document.getElementById("stateDropDown").value
let city = document.getElementById("searchCity").value
let beds = document.getElementById("minBedsSelect").value


	
document.getElementById("searchBtn").addEventListener("click", getAPIData())

function getAPIData () {
	fetch(
		"https://realty-in-us.p.rapidapi.com/properties/list-for-sale?" +
		'state_code=' + 
		 stateCode + 
		 '&city=' + 
		 city + 
		 '&limit=50&offset=0&sort=relevance' + 
		 '&beds_min=' + 
		 beds
		 , options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));
}
	
 




    
    
