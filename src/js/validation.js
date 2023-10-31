const error = document.querySelector('.error')
const inputName = document.querySelector('.form-box__name')
const inputMail = document.querySelector('.form-box__email')
const msgBox = document.querySelector('.msg')

const sendBtn = document.querySelector('.btn-send')
const clearBtn = document.querySelector('.btn-clear')

// email validation
const checkEmail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

	if (re.test(inputMail.value) && (inputMail.value != '' || inputName.value != '' || msgBox.value != '')) {
		clearError()
	} else {
		showError()
	}
}

// showing error if data is wrong
const showError = () => {
	error.classList.add('active')
	error.innerHTML = 'Podałeś błędne dane! Spróbuj ponownie!'
}

// clearing errors if data is fine
const clearError = () => {
	error.classList.remove('active')
	error.innerHTML = ''
}

// function that clears every field in form
const clearForm = () => {
	inputName.value = ''
	inputMail.value = ''
	msgBox.value = ''
	clearError()
}

sendBtn.addEventListener('click', checkEmail)
clearBtn.addEventListener('click', clearForm)
