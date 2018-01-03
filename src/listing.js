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


                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputFile">File input</label>
                    <input type="file" id="exampleInputFile">
                    <p class="help-block">Example block-level help text here.</p>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Check me out
                    </label>
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>


              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
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
