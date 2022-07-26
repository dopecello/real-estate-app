const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a074ef487mshdab54e7691d32ffp1dcf75jsn10bed4368ac3',
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
	}
};

let stateCode = 'FL'
let city = 'Miami'
let beds = '1'

fetch(
'https://realty-in-us.p.rapidapi.com/properties/list-for-rent?' +
'state_code=' + 
 stateCode + 
 '&city=' + 
 city + 
 '&limit=200&offset=0&sort=relevance' + 
 '&beds_min=' + 
 beds
 , options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//will become the value of whatever you type in serach bar
    // let stateCode = document.querySelector('.search-state').value;
    //let city = document.querySelector('.search-city').value;
    //let beds = document.querySelector('.search-beds').value;
    
