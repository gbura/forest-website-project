const error = document.querySelector('.error')
const inputName = document.querySelector('.form-box__name')
const inputMail = document.querySelector('.form-box__email')
const msgBox = document.querySelector('.msg')

const sendBtn = document.querySelector('.btn-send')
const clearBtn = document.querySelector('.btn-clear')

const popup = document.querySelector('.popup')

// email validation
const checkEmail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

	if (re.test(inputMail.value)) {
		clearError()
		showPopup()
		clearInputs()
	} else {
		showError()
	}
}

const clearInputs = () => {
	inputName.value = ''
	inputMail.value = ''
	msgBox.value = ''
}

// showing error if data is wrong
const showError = () => {
	error.classList.add('active')
	error.innerHTML = 'Podałeś/aś błędne dane! Spróbuj ponownie!'
}

// clearing errors if data is fine
const clearError = () => {
	error.classList.remove('active')
	error.innerHTML = ''
}

// function that clears every field in form
const clearForm = () => {
	clearInputs()
	clearError()
}

const showPopup = () => {
	if (inputMail.value != '' || inputName.value != '' || msgBox.value != '') {
		popup.classList.add('success')
		popup.textContent = 'Wysłano formularz'
		setTimeout(() => {
			popup.classList.remove('success')
		}, 2000)
	}
}

sendBtn.addEventListener('click', checkEmail)

clearBtn.addEventListener('click', () => {
	clearForm()
	popup.classList.add('clear')
	popup.textContent = 'Wyczyszczono formularz'
	setTimeout(() => {
		popup.classList.remove('clear')
	}, 2000)
})
