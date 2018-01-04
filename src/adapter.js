class Adapter {
  static getUser() {

    return fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json => User.createUsers(json))
    .then(()=> User.currentUser())
  }

  static getListings() {
    return fetch('http://localhost:3000/listings')
    .then(res => res.json())
    .then(json => Listing.createListings(json))
  }

  static getReservations(userId) {

    return fetch('http://localhost:3000/reservations')
    .then(res => res.json())
    .then(json => Reservation.createReservations(json))
    // .then(data => User.createUsers(data))
  }

}
