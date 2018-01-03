document.addEventListener("DOMContentLoaded", initialFunction)

function initialFunction() {
  Adapter.getUser()
  Adapter.getListings()
}


document.getElementById('search-button').addEventListener('click', getSearchValue)

function getSearchValue() {
  let searchValue = document.getElementById('search').value
  console.log('Get Search Value:', searchValue)
  Listing.findListing(searchValue)
}
