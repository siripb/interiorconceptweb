function validation() {
  const form = document.Formfill
  const resultElement = document.getElementById('result')

  if (form.FullName.value === '' || form.FullName.value.length < 6) {
    resultElement.innerHTML = 'Enter Full Name'
    return false
  }

  if (form.Email.value === '') {
    resultElement.innerHTML = 'Enter your email'
    return false
  }

  if (form.Password.value === '') {
    resultElement.innerHTML = 'Enter your Password'
    return false
  }

  if (form.Password.value !== form.cPassword.value) {
    resultElement.innerHTML = 'Password does not match'
    return false
  }

  if (form.cPassword.value === '') {
    resultElement.innerHTML = 'Confirm your Password'
    return false
  } else if (form.Password.value.length < 8) {
    resultElement.innerHTML = 'Password must be 8 digits or more'
    return false
  }

  if (form.Password.value === form.cPassword.value) {
    popup.classList.add('open-slide')
    return false
  }
}

let popup = document.getElementById('popup')
function closeSlide() {
  popup.classList.remove('open-slide')
}
function clearAllInputs(event) {
  var allInputs = document.querySelectorAll('input.login')
  allInputs.forEach((singleInput) => (singleInput.value = ''))
}
