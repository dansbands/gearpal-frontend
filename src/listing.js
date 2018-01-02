let allListings = []

class Listing {
  constructor(json) {
    this.id = json.id
    this.title = json.title
    this.picture = json.picture
    this.price = json.price
    this.availability = json.availability
    this.condition = json.condition
    this.location = json.location
    this.rating = json.rating
    allListings.push(this)

  }

  static all() {
    return [...allListings]
  }

  static createListings(json) {
    json.forEach(el => {
      let newListing = new Listing(el)
    })
    this.appendCards()
  }

  static appendCards() {
    let div = document.getElementById('listings')
    for (let i = 0; i < this.all().length; i++) {
      let newDiv = document.createElement('div')
      let item = this.all()[i]
      // console.log(newDiv)
      newDiv.innerHTML = `
        <div class="card col-xs-3">
          <img class="card-img-top" src="${item.picture}" style="height:150px; margin-left:25%" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">${item.title}</h4>
              <h5 class="card-title">$${item.price}.00</h5>

              <p class="card-text">Check out this cool guitar. It features a solid sitka spruce top...</p>
              <a href="#" class="btn btn-primary">More Info</a>
            </div>
        </div>
      `
      div.appendChild(newDiv)
    }
  }



createCard() {
  return `
      <div class="card col-xs-3">
        <img class="card-img-top" src="${this.picture}" style="height:150px; margin-left:25%" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">${this.title}</h4>
            <h5 class="card-title">$${this.price}.00</h5>

            <p class="card-text">Check out this cool guitar. It features a solid sitka spruce top...</p>
            <a href="#" class="btn btn-primary">More Info</a>
          </div>
      </div>
  `
}

}
