class Adapter {
  static getUser() {

    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(console.log)
  }

}
