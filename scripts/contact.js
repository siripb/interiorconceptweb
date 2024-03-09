function validateForm() {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var phone = document.getElementById('phone').value
  var message = document.getElementById('message').value

  while (name == '') {
    document.getElementById('result').innerHTML = 'Enter your name'
    return false
  }
  while (email == '') {
    document.getElementById('result').innerHTML = 'Enter your email'
    return false
  }
  while (phone == '') {
    document.getElementById('result').innerHTML = 'Enter your phone number'
    return false
  }
  while (message == '') {
    document.getElementById('result').innerHTML = 'Please enter your message'
    return false
  }
}
