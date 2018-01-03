//when this works, Comment in Adapter line 7, comment out line 6,

let allUsers = []

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



  /// Instance Methods

  addToDropdown() {
    let userSelect = document.getElementById('user-select')
    userSelect.style = 'width: 300px'
    let li = document.createElement('LI')
    let userlink = document.createElement('A')
    let pic = document.createElement('IMG')
    li.style = 'width: 80%; height: 200px;background: aqua;margin: auto;padding: 10px'
    pic.style = "height: 20px; width: 20px; border-radius: 25px"
    pic.src = this.picture
    li.id = this.id
    userlink.innerHTML += `${this.username}`
    li.appendChild(userlink)
    li.appendChild(pic)
    userSelect.appendChild(li)

    //get user dropdown by id
    //dropdown.innerHTML += /Some User Info/
  }
}
