let allListings = []

class Listing {
  constructor(json) {
    this.id = json.id
    this.title = json.title
    this.picture = json.picture
    this.price = json.price
    this.condition = json.condition
    this.location = json.location
    this.rating = json.rating
    this.availability = json.availability
    this.lister_id = json.lister_id
    allListings.push(this)

  }

  static all() {
    return [...allListings]
  }

  static createListings(json) {
    let div = document.getElementById('listings')
    json.forEach(el => {
      let newListing = new Listing(el)
    })
    this.appendCards()
  }

  static appendCards(val) {
    let div = document.getElementById('listings')
    let items
    div.innerHTML = ''
    if (val) {
      items = val
      console.log("Val:", val);
    } else {
      items = this.all()
    }

    for (let i = 0; i < items.length; i++) {
      let newDiv = document.createElement('div')


      let item = items[i]


      // console.log(newDiv)
      newDiv.innerHTML = `
      <div class="card col-xs-3" style="margin-bottom: 20px">
      <img class="card-img-top" src="${item.picture}" style="height:150px" alt="Card image cap">
      <div class="card-block">
      <h4 class="card-title">${item.title}</h4>
      <h5 class="card-title">$${item.price}.00</h5>

      <p class="card-text">Check out this cool guitar. It features a solid sitka spruce top...</p>

      <!-- Button trigger modal -->
      <li type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal${item.id}">
      More Info
      </li>

      </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="myModal${item.id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title" id="myModalLabel">${item.title}</h4>
      </div>
      <div class="modal-body">
      <div class="row">
      <div class="col-sm-6">
      <img src="${item.picture}" alt="">
      </div>
      <div class="col-sm-3">
      <p><b>Rate:</b></p>
      <p><b>Location:</b></p>
      <p><b>Condition:</b></p>
      <p><b>Rating:</b></p>
      </div>
      <div class="col-sm-3">
      <p>$${item.price}.00/day</p>
      <p>${item.location}</p>
      <p>${item.condition}</p>
      <p>${item.rating}</p>

      </div>
      </div>


      <form id ="form${item.id}">
      <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input type="text" class="form-control" id="exampleInputEmail1" value="${User.currentUsername()}">
      </div>
      <div class="form-group">
      <label for="exampleInputPassword1">Pickup Date</label>
      <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Pickup Date">
      </div>
      <div class="form-group">
      <label for="exampleInputPassword1">Return Date</label>
      <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Return Date">
      </div>


      <button id="reserve${item.id}" type="submit" class="btn btn-default">Reserve</button>

      </form>


      </div>

      </div>
      </div>
      </div>
      `
      div.appendChild(newDiv)
      let form = document.getElementById(`form${item.id}`)
      let itemId = item.id
      form.addEventListener("submit", () => Reservation.reserveFunc(event, itemId))
    }
  }


  static filterListing(searchValue, locationValue) {



    let listings = Listing.all()
    // let newListings


    if (searchValue) {
      listings = listings.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
      console.log('Location');
    }
    //
    if (locationValue) {
      listings = listings.filter(obj => obj.location.toLowerCase().includes(locationValue.toLowerCase()))
      console.log('Search', listings);
    }


  //   let newListings = listings.filter(obj => {
  //     // console.log("Object", obj);
  //     if (true) {
  //       console.log('Search Value:', searchValue)
  //       obj.title.toLowerCase().includes(searchValue.toLowerCase())
  //     }
  //     if (true) {
  //       console.log('Location Value:', locationValue)
  //       obj.location.toLowerCase().includes(locationValue.toLowerCase())
  //     }
  //  })

  //  if (!newListings.length) {
  //    newListings = listings
  //  }
  //   console.log(newListings);



    this.appendCards(listings)
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
