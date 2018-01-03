//when this works, Comment in Adapter line 7, comment out line 6, 

let allUsers = []

class User {
  constructor() {

  }

  static createUsers(json) {
    json.forEach(user => {
      let newUser = new User(user)
      newUser.addToDropdown()
    })
  }



  /// Instance Methods

  addToDropdown() {
    //get user dropdown by id
    //dropdown.innerHTML += /Some User Info/
  }
}
