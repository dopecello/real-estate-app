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
		'&limit=18&offset=0&sort=relevance' +
		'&beds_min=' +
		beds
		, options)
		.then((res) => res.json())
		.then((data) => {
			let propertyListings = data.listings
			var propDivEl = [];
			var propImgEl = [];
			var propDescripEl = [];
			var bedBathEl = [];
			var addressEl = [];
			var breakEl = [];
			var detailsLinkEl = [];
			for (var i = 0; i < propertyListings.length; i++) {
				const property = propertyListings[i]
				propDivEl[i] = document.createElement("div")
				propDivEl[i].classList.add("card")
				// adding image
				propImgEl[i] = document.createElement("img")
				propImgEl[i].src = property.photo
				// adding price and type
				propDescripEl[i] = document.createElement("p")
				propDescripEl[i].innerText = property.price + " " + property.prop_type
				// adding beds and baths
				bedBathEl[i] = document.createElement("p")
				bedBathEl[i].innerText = property.baths + " " + "Baths" + " " + "-" + " " + property.beds + " " + "Beds"
				// adding address
				addressEl[i] = document.createElement("p")
				addressEl[i].innerText = property.address
				//creating break
				breakEl[i] = document.createElement("br")
				//creating details link
				detailsLinkEl[i] = document.createElement("a")
				detailsLinkEl[i].href = property.rdc_web_url
				detailsLinkEl[i].innerText = "Details"
				// appending children
				propDivEl[i].appendChild(propImgEl[i])
				propDivEl[i].appendChild(propDescripEl[i])
				propDivEl[i].appendChild(bedBathEl[i])
				propDivEl[i].appendChild(addressEl[i])
				propDivEl[i].appendChild(breakEl[i])
				propDivEl[i].appendChild(detailsLinkEl[i])
				// adding everything
				cardContainer.appendChild(propDivEl[i])
			}
		})

		.catch(err => console.error(err));

	event.preventDefault();

}

//error modal
const theSearchBtn = document.getElementById("searchBtn")
const modalBg = document.querySelector('.modal-background')
const modal = document.querySelector('.modal')

theSearchBtn.addEventListener('click',() => {
	modal.classList.add('is-active')
})

modalBg.addEventListener('click', () => {
	modal.classList.remove('is-active')
})