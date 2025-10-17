(function () {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
  const pwd = document.getElementById('password')
  const cpwd = document.getElementById('confirmPassword')
  const hobbies = document.querySelectorAll('input[name="hobby[]"]')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

        // reset states
        cpwd.classList.remove('is-invalid', 'is-valid')

        let formValid = form.checkValidity()
        let customValid = true

        // password match check
        if (pwd.value !== cpwd.value || pwd.value.length < 8) {
            customValid = false
            cpwd.classList.remove('is-valid')
            cpwd.classList.add('is-invalid')
        } else {
            cpwd.classList.remove('is-invalid')
            cpwd.classList.add('is-valid')
        }

        if (!formValid || !customValid) {
            event.preventDefault()
            event.stopPropagation()
            // show red states only
            form.classList.add('was-validated')
        } else {
        // show green only when the entire form passes
            form.classList.add('was-validated')
        }


        form.classList.add('was-validated')
    }, false)
  })
})()
