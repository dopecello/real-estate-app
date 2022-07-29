// UNIVERSAL SELECTORS
const searchBtn = document.getElementById("searchBtn")
const cardContainer = document.getElementById("cardContainer")
const searchContainer = document.getElementById("searchContainer")
const modalBg = document.querySelector('.modal-background')
const modal = document.querySelector('.modal')
let locationArray = JSON.parse(localStorage.getItem("Searched-Locations")) || []


//error modal
// modalBg.addEventListener('click', () => {
// 	modal.classList.remove('is-active')
// })



//API options
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ba4b449754mshe56b9d6fec584cbp1afc6fjsn27231b1cf8a7',
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
	}
};

function saveSearchQuery() {
	let state = document.getElementById("stateDropDown").value
	let city = document.getElementById("searchCity").value
	let cityStatePair = {
		city,
		state
	}

	locationArray = [...locationArray, cityStatePair]
	localStorage.setItem("Searched-Locations", JSON.stringify(locationArray))
}

function displaySearchedLocations() {
	let displayEl = []
	let searchHistoryItemEl = []
	let searchTitle = []

	displayEl = document.createElement("div")
	displayEl.classList.add("searchHistory")
	searchTitle = document.createElement("h1")
	searchTitle.classList.add("has-text-centered")
	searchTitle.classList.add("has-text-white")
	searchTitle.classList.add("title")
	searchTitle.classList.add("is-2")
	searchTitle.innerText = "Recent Searches"
	displayEl.appendChild(searchTitle)

	for (let i = 0; i < locationArray.length; i++) {
		const locations = locationArray[i]
		searchHistoryItemEl[i] = document.createElement("p")
		searchHistoryItemEl[i].classList.add("has-text-centered")
		searchHistoryItemEl[i].classList.add("has-text-white")
		searchHistoryItemEl[i].innerText = "-" + " " + locations.city + "," + " " + locations.state
		displayEl.appendChild(searchHistoryItemEl[i])
		searchContainer.appendChild(displayEl)
	}

}


//fetch API function
searchBtn.onclick = function getAPIData(event) {

	event.preventDefault();
	saveSearchQuery()
	displaySearchedLocations()


	let stateCode = document.getElementById("stateDropDown").value
	let cityInput = document.getElementById("searchCity").value
	let beds = document.getElementById("minBedsSelect").value

	fetch(
		'https://realty-in-us.p.rapidapi.com/properties/list-for-sale?' +
		'state_code=' +
		stateCode +
		'&city=' +
		cityInput +
		'&limit=50&offset=0&sort=relevance' +
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
				propDivEl[i].classList.add("has-text-centered")
				propDivEl[i].classList.add("p-4")
				propDivEl[i].classList.add("has-background-black-ter")
				propDivEl[i].classList.add("m-6")
				propDivEl[i].classList.add("has-text-white")

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


}



