document.addEventListener("DOMContentLoaded", initialFunction)

function initialFunction() {
  Adapter.getUser()
  Adapter.getListings()
}


document.getElementById('search-button').addEventListener('click', getSearchValue)

function getSearchValue() {
  let searchValue = document.getElementById('search').value
  console.log('Get Search Value:', searchValue)
  Listing.filterListing(searchValue)
}



// TO DO:

    // Search Form - DAN
        // Search by partial match
        // Keyup

    // Renting Form - CORY


    // Create Listing Form



    // User Select
        // Populate User Select Dropdown with user info
            // Adapter.getUser .then(data => User.createUsers(data))
        //Store value of currently selected user for use in reservation form
