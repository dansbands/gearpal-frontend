//when this works, Comment in Adapter line 7, comment out line 6,

let allUsers = []
let currentUser

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

  static currentUser(){
    currentUser = this.all()[0]
    let profilePic = document.getElementById('profile-pic')
    profilePic.src = currentUser.picture
  }

  static updateCurrentUser(){
    currentUser = allUsers.find(user => user.id === parseInt(this.id))
    let profilePic = document.getElementById('profile-pic')
    profilePic.src = currentUser.picture

  }
  static currentUsername(){
    return currentUser.username
  }

  /// Instance Methods

  addToDropdown() {
    let userSelect = document.getElementById('user-select')
    userSelect.style = 'width: 300px'
    let li = document.createElement('LI')
    let userlink = document.createElement('A')
    let pic = document.createElement('IMG')
    userlink.href = "#"
    userlink.innerText += `${this.username}`
    userlink.style = 'height: 40px'
    li.style = 'height: 40px'
    pic.style = "height: 30px; width: 30px; border-radius: 10px; float: left"
    pic.src = this.picture
    li.id = this.id
    li.appendChild(userlink)
    userlink.appendChild(pic)
    userSelect.insertBefore(li, userSelect.childNodes[0])
    //get user dropdown by id
    //dropdown.innerHTML += /Some User Info/
    li.addEventListener('click', User.updateCurrentUser)


  }


}
