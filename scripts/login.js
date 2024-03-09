function validation() {
  while (document.Formfill.Email.value == '') {
    document.getElementById('result').innerHTML = 'Enter your email'
    return false
  }
  while (document.Formfill.Password.value == '') {
    document.getElementById('result').innerHTML = 'Enter your Password'
    return false
  }
  while (document.getElementById('checkbox').checked == false) {
    document.getElementById('result').innerHTML =
      'Please agree to our terms and conditions'
    return false
  }
}
