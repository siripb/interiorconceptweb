function addData() {
  var email = document.getElementById('email').value
  var pass = document.getElementById('pwd').value
  var fullname = document.getElementById('full_name').value
  var gender = document.querySelector('input[name="gender"]:checked').value
  localStorage.setItem('fullname', fullname)
  localStorage.setItem('userEmail', email)
  localStorage.setItem('userPassword', pass)
  localStorage.setItem('gender', gender)
  let user = {
    name: fullname,
    email: email,
    password: pass,
    gender: gender,
  }
  console.log(user)
}
function logData() {
  console.log(window.localStorage.getItem('fullname'))
  console.log(window.localStorage.getItem('userEmail'))
  console.log(window.localStorage.getItem('userPassword'))
  console.log(window.localStorage.getItem('gender'))
  alert('Te dhenat u ruajten me sukses')
}
