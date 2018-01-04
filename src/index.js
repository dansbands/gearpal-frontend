document.addEventListener("DOMContentLoaded", initialFunction)

function initialFunction() {
  Adapter.getUser()
  .then(Adapter.getListings)
  // .then(Adapter.getReservations)
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



    // Create Listing Form - ERICK
      // Write JS

    // User Profile Page - DAN
      // Build this
      // Write JS
      // Shows reservations

    // Reservation Form - CORY
      // Generate user feedback - successfully created

    // Create New User Form
      // XX Build this
      // Add JS





    // Search Form - DAN
        // Search by imperfect match ('Shure 58')
        // Remove from search results if unvailable

    // User Select - Erick
        // Done
        // Add view profile




// DONE:

    // User Select
        // XX Populate User Select Dropdown with user info
            // Adapter.getUser .then(data => User.createUsers(data))
        // XX Store value of currently selected user for use in reservation form

    // Search Form - DAN
        // XX Search by partial match

    // XX ProfilePic doesn't load properly
