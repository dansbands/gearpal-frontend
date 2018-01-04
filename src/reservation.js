let allReservations = []

class Reservation {
  constructor(json) {
    this.start_date = json.start_date
    this.end_date = json.end_date
    this.reservation_id = json.id
    this.reserver_id = json.reserver_id
    this.listing_id = json.listing_id
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
    let titleDiv = document.getElementById(`itemTitle${itemId}`).innerText
    let item = Listing.all().find(listing => itemId === listing.id)
    item.availability = false
    let reserverId = User.all().find(user => user.username === username).id

    let reservation = new Reservation({start_date: pickupDate, name: titleDiv, end_date: returnDate, reserver_id: reserverId})
    let borrowerId = User.all().find(user => user.username === username).id

    console.log(titleDiv);
    let reserveData = {
      start_date: pickupDate,
      end_date: returnDate,
      name: titleDiv,
      reserver_type: "User",
      reserver_id: borrowerId,
      listing_id: itemId
    }
    fetch(`http://localhost:3000/reservations`,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(reserveData)})
    .then(res=> res.json())
    .then(json => {
      let now = new Date();
      let currentUser = User.currentUsername()
      console.log(currentUser)
      let reserveDiv = undefined
      for (let i = 0; i< currentUser.reservations.length; i++) {
        let reservation = currentUser.reservations[i]

          let reserveDiv = document.getElementById(`form${itemId}`)
          reserveDiv.innerHTML = ""

          reserveDiv.innerHTML += "<br><p id='userFeed'>You have reserved this item</p>"
          break

      }





    })

}
}
