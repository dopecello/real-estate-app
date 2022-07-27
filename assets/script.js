// UNIVERSAL SELECTORS
const searchBtn = document.getElementById("searchBtn")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ba4b449754mshe56b9d6fec584cbp1afc6fjsn27231b1cf8a7',
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
	}
};

// let stateCode = 'FL'
// let city = 'Miami'
// let beds = '1'


searchBtn.onclick = function getAPIData(event) {

	let stateCode = document.getElementById("stateDropDown").value
	let city = document.getElementById("searchCity").value
	let beds = document.getElementById("minBedsSelect").value

	fetch(
		'https://realty-in-us.p.rapidapi.com/properties/list-for-rent?' +
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
		
	event.preventDefault();
}
