document.addEventListener("DOMContentLoaded", initialFunction)

function initialFunction() {
  Adapter.getUser()
  .then(Adapter.getListings)
  .then(Adapter.getReservations)
  .then(list => {
    let listingUsername = document.getElementById('ListerUsername')

    listingUsername.value = User.currentUsername().username

  })
}

// let listingUsername = document.getElementById('ListerUsername')
// // console.log(listingUsername.value)
// // console.log(User.currentUsername())
// // debugger
// listingUsername.value = User.currentUsername()



let formList = document.getElementById('listing-form-new')
formList.addEventListener("submit", () => listingFunc(event))

function listingFunc(event) {

  event.preventDefault()

  let username = event.target[0].value
  console.log(username)
  let itemName = event.target[1].value
  let price = event.target[2].value
  let location = event.target[3].value
  let condition = event.target[4].value
  let imageURL = event.target[5].value
  let listerId = User.all().find(user => user.username === username).id

  let listing = new Listing({title: itemName, picture: imageURL, price: price, condition: condition, location: location, lister_id: listerId})

  console.log(listing)

  let listData = {
    title: itemName,
    picture: imageURL,
    price: price,
    condition: condition,
    location: location,
    lister_type: "User",
    lister_id: listerId,
  }
  fetch(`http://localhost:3000/listings`,{
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(listData)})

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


function makeNewUser(){
  let blankImg = document.getElementById("initialImage")
  blankImg.src = "img/profile/placeholder.png"
  let submit = document.getElementById("submitNewUser")
  submit.addEventListener("submit", function(){
    event.preventDefault()
    let newUsername = event.target[0].value
    let location = event.target[1].value
    let profilePic = event.target[2].value
    let userData ={username: newUsername, location: location, picture: profilePic}
    fetch(`http://localhost:3000/users`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userData)})
      .then(res=> res.json())
      .then(json => {
        let user = new User(json)
        console.log(user)
        blankImg.src = profilePic

      })

    // let user = new User({username: newUsername, location: location, picture: profilePic})

  })
}

// function getLocationValue() {
//   let locationValue = document.getElementById('location-search').value
//   console.log('Location Value:', locationValue)
//
// }



// TO DO:


  // BUGS:

      //String Search breaks if you put in 'Shure 58'. Possibly split the string and check for inclusion of each

      // New reservation doesn't append to user profile until page refresh

      // Date in reservation displays in an ugly format




  // NEW:

    // Create Listing Form - ERICK
      // Write JS

      //CORY
    // Create New User Form
      // XX Build this
      // Add JS

    // Search Form - DAN
        // Search by imperfect match ('Shure 58')
        // Remove from search results if unvailable

    // User Select - Erick
        // Done
        // XX Add view profile




// DONE:
// Reservation Form - CORY
  // XXGenerate user feedback - successfully created

    // User Select
        // XX Populate User Select Dropdown with user info
            // Adapter.getUser .then(data => User.createUsers(data))
        // XX Store value of currently selected user for use in reservation form

    // Search Form - DAN
        // XX Search by partial match

    // XX ProfilePic doesn't load properly

    // User Profile Page - DAN
      // XX Build this
      // XX Write JS
      // XX Shows reservations
      // XX Shows listings
