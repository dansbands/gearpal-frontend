let allReservations = []

class Reservation {
  constructor(json) {
    this.start_date = json.start_date
    this.end_date = json.end_date
    this.reservation_id = json.id
    this.reserver_id = json.reserver_id
    allReservations.push(this)

  }

  static all() {
    return [...allReservations]
  }

  static createReservations(json) {
    debugger
    json.forEach(reservation => {
      let newReservation = new User(reservation)

    })
  }


  static reserveFunc(event, itemId) {

    event.preventDefault()
    let username = event.target[0].value
    let pickupDate = event.target[1].value
    let returnDate = event.target[2].value
    let item = Listing.all().find(listing => itemId === listing.id)
    item.availability = false
    let reserverId = User.all().find(user => user.username === username).id

    let reservation = new Reservation({start_date: pickupDate, end_date: returnDate, reserver_id: reserverId})
    let borrowerId = User.all().find(user => user.username === username).id

    let reserveData = {
      start_date: pickupDate,
      end_date: returnDate,
      name: "???",
      reserver_type: "User",
      reserver_id: borrowerId
    }
    fetch(`http://localhost:3000/reservations`,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(reserveData)})
    .then(res=> res.json())
    .then(json => {
      
    })

}
}
