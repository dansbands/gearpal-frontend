//when this works, Comment in Adapter line 7, comment out line 6,

let allUsers = []
let currentUser

class User {
  constructor(json) {
    this.id = json.id
    this.username = json.username
    this.location = json.location
    this.borrower_rating = json.borrower_rating
    this.lister_rating = json.lister_rating
    this.picture = json.picture
    this.listings = json.listings
    this.reservations = json.reservations
    allUsers.push(this)

  }



  static all(){
    return [...allUsers]
  }

  static createUsers(json) {
    json.forEach(user => {
      let newUser = new User(user)
      newUser.addToDropdown()
    })
  }

  static currentUser(){
    currentUser = this.all()[0]
    let profilePic = document.getElementById('profile-pic')
    profilePic.src = currentUser.picture
    currentUser.createUserProfile()
  }

  static updateCurrentUser(){
    currentUser = allUsers.find(user => user.id === parseInt(this.id))
    let profilePic = document.getElementById('profile-pic')
    profilePic.src = currentUser.picture
    currentUser.createUserProfile()

  }



  /// Instance Methods

  addToDropdown() {
    let userSelect = document.getElementById('user-select')
    userSelect.style = 'width: 400px'
    let li = document.createElement('LI')
    let userlink = document.createElement('A')
    let pic = document.createElement('IMG')
    let profile = document.createElement('button')
    let select = document.createElement('button')
    select.className = "btn btn-default btn-xs pull-right"
    select.innerHTML = "Select User"
    profile.className = "btn btn-default btn-xs pull-right"
    profile.innerHTML += `
    <!-- Button trigger modal New Listing-->
    <li data-toggle="modal" data-target="#userProfileModal">
    View Profile
    </li>

    `

    userlink.href = "#"
    userlink.innerText += `${this.username}`
    userlink.style = 'height: 40px'
    li.style = 'height: 40px'
    pic.style = "height: 30px; width: 30px; border-radius: 30px; float: left; margin-right: 10px"
    pic.src = this.picture
    li.id = this.id
    li.appendChild(userlink)
    userlink.appendChild(pic)
    userlink.appendChild(select)
    userlink.appendChild(profile)

    userSelect.insertBefore(li, userSelect.childNodes[0])
    //get user dropdown by id
    //dropdown.innerHTML += /Some User Info/
    li.addEventListener('click', User.updateCurrentUser)


  }


  static currentUsername() {
    return currentUser
  }


  createUserProfile() {
    let modalDiv = document.getElementById('userProfileModal')
    // modalDiv.innerHTML = ''
    let profilePicture = document.getElementById('profilePicture')
    profilePicture.src = this.picture
    let profileUsername = document.getElementById('profileUsername')
    profileUsername.innerHTML = this.username
    let profileLocation = document.getElementById('profileLocation')
    profileLocation.innerHTML = this.location
    let profileBorrowerRating = document.getElementById('profileBorrowerRating')
    profileBorrowerRating.innerHTML = this.borrower_rating
    let profileListerRating = document.getElementById('profileListerRating')
    profileListerRating.innerHTML = this.lister_rating

    let profileListings = document.getElementById('profileListings')
    profileListings.innerHTML = ''
    this.listings.forEach(listing => {
      profileListings.innerHTML += `
      <div class="panel panel-default">
      <div class="panel-heading">
      <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#profileListings" href="#collapse${listing.id}">
      ${listing.title}</a>
      </h4>
      </div>
      <div id="collapse${listing.id}" class="panel-collapse collapse">
      <div class="panel-body">
      <p>Availability: ${listing.availability}</p>
      <p>Condition: ${listing.condition}</p>
      <p>Price: ${listing.price}</p>
      <p>Rating: ${listing.rating}</p>
      </div>
      </div>
      </div>

      `
    })


    let profileReservations = document.getElementById('profileReservations')
    profileReservations.innerHTML = ''
    this.reservations.forEach(reservation => {
      let resName
      reservation.name ? resName = reservation.name : resName = "Reservation"
      profileReservations.innerHTML += `
      <div class="panel panel-default">
      <div class="panel-heading">
      <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#profileReservations" href="#collapse-${reservation.id}">
      ${resName}</a>
      </h4>
      </div>
      <div id="collapse-${reservation.id}" class="panel-collapse collapse">
      <div class="panel-body">
      <h5>Start Date:</h5>
      <p>${reservation.start_date}</p>
      <h5>End Date:</h5>
      <p>${reservation.end_date}</p>
      </div>
      </div>
      </div>

      `
    })


  }


}
