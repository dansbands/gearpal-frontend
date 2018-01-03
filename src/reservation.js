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
    json.forEach(reservation => {
      let newReservation = new User(reservation)

    })
  }
}
