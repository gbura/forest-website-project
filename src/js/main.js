const burgerBtn = document.querySelector('.nav__mobile-btn-burger')
const burgerCloseBtn = document.querySelector('.nav__mobile-btn-close')
const ulList = document.querySelector('.nav__list')
const listItem = document.querySelectorAll('.nav__item')

const footerYear = document.querySelector('.author__date')

// scroll spy
// let section = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('nav a')

// window.onscroll = () => {
// 	section.forEach(sec => {
// 		let top = window.scrollY
// 		let offset = sec.offsetTop
// 		let height = sec.offsetHeight
// 		let id = sec.getAttribute('id')

// 		if (top >= offset && top < offset + height) {
// 			navLinks.forEach(link => {
// 				link.classList.remove('active')
// 				document.querySelector('nav a[href*=' + id + ']').classList.add('active')
// 			})
// 		}
// 	})
// }

// handling burger menu
const handleNav = () => {
	if (burgerCloseBtn.classList.contains('hidden')) {
		burgerCloseBtn.classList.remove('hidden')
		burgerBtn.classList.add('hidden')
		ulList.classList.add('active')
	} else {
		burgerBtn.classList.remove('hidden')
		burgerCloseBtn.classList.add('hidden')
		ulList.classList.remove('active')
	}
}

// handling burger menu links
const handleNavLinks = () => {
	listItem.forEach(item => {
		item.addEventListener('click', () => {
			handleNav()
			ulList.classList.remove('active')
		})
	})
}

handleNavLinks()

// showing current year in footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

burgerBtn.addEventListener('click', handleNav)
burgerCloseBtn.addEventListener('click', handleNav)
