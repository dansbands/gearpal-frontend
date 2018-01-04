document.addEventListener("DOMContentLoaded", initialFunction)

function initialFunction() {
  Adapter.getUser()
  Adapter.getListings()
  Adapter.getReservations()
}



document.getElementById('search-button').addEventListener('click', getSearchValues)
// document.getElementById('location-search').addEventListener('input', getLocationValue)

function getSearchValues() {
  let search = document.getElementById('search')
  let location = document.getElementById('location-search')
  let searchValue = document.getElementById('search').value
  let locationValue = document.getElementById('location-search').value
  Listing.filterListing(searchValue, locationValue)
}

// function getLocationValue() {
//   let locationValue = document.getElementById('location-search').value
//   console.log('Location Value:', locationValue)
//
// }



// TO DO:


  // BUGS:

      //String Search breaks if you put in 'Shure 58'. Possibly split the string and check for inclusion of each

  // NEW:

    // Search Form - DAN
        // XX Search by partial match
        // Keyup

    // Renting Form - CORY


    // Create Listing Form



    // User Select
        // Populate User Select Dropdown with user info
            // Adapter.getUser .then(data => User.createUsers(data))
        //Store value of currently selected user for use in reservation form
