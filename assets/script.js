// UNIVERSAL SELECTORS
const searchBtn = document.getElementById("searchBtn")
const cardContainer = document.getElementById("cardContainer")

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
		'https://realty-in-us.p.rapidapi.com/properties/list-for-sale?' +
		'state_code=' +
		stateCode +
		'&city=' +
		city +
		'&limit=6&offset=0&sort=relevance' +
		'&beds_min=' +
		beds
		, options)
		.then((res) => res.json())
		.then((data) => {
			let propertyListings = data.listings
			// var propDivEl = [];
			// var propImgEl = [];
			for (var i = 0; i < propertyListings.length; i++) {
				const property = propertyListings[i]
				console.log(property.address)
				// propDivEl[i] = document.createElement("div");
				// propDivEl.classList.add("card");
				// var propImgEl = document.createElement("img");
				// propImgEl
			}
		})

		.catch(err => console.error(err));

	event.preventDefault();

}
	// `<div class="card">
	// 			<img src=${listings.photo} alt="listings-image">
	// 			<p><span id="price">${listings.price} </span><span id="prop-type">${listings.prop_type}</span></p>
	// 			<p><span id="bath">${listings.baths} Baths </span>-<span id="bed"> ${listings.beds} Beds</span></p>
	// 			<p id="address">${listings.address}</p>
	// 			<br />
	// 			<a href=${listings.rdc_web_url} id="details">Details</a>
	// 			</div>`
	// 		})