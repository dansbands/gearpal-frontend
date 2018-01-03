document.addEventListener("DOMContentLoaded", initialFunction)

function initialFunction() {
  Adapter.getUser()
  Adapter.getListings()
  Adapter.getReservations()
}
