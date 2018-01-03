class Adapter {
  static getUser() {

    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(console.log)
    // .then(data => User.createUsers(data))
  }

  static getListings() {
    fetch('http://localhost:3000/listings')
    .then(res => res.json())
    .then(json => Listing.createListings(json))
  }

}
