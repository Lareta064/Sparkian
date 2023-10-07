document.addEventListener("DOMContentLoaded", function () {

	/*============= open/close mob menu ===============*/
	const menuToggle = document.querySelector('#menu-toggle');

	const mobileMenu = document.querySelector('#header-menu');


	const bodyEl = document.body;
	if (menuToggle) {
		menuToggle.addEventListener('click', function (e) {
			e.stopPropagation();

			if (this.classList.contains('active')) {

				this.classList.remove('active');
				mobileMenu.classList.remove('active');
				bodyEl.classList.remove('lock');
			} else {
				this.classList.add('active');
				mobileMenu.classList.add('active');
				bodyEl.classList.add('lock');
			}
		});
		mobileMenu.addEventListener('click', function () {
			this.classList.remove('active');
			menuToggle.classList.remove('active');
			bodyEl.classList.remove('lock');
		})
		/*======== закрывать моб меню при ресайзе экрана ====== */
		window.addEventListener('resize', function () {
			if (this.innerWidth > 767) {
				if (mobileMenu.classList.contains('active')) {
					menuToggle.classList.remove('active');
					mobileMenu.classList.remove('active');
					bodyEl.classList.remove('lock');
				}
			}
		});
	}
 
    /* game select */
	const mySelectBlocks = Array.from(document.getElementsByClassName('mySelect'));
	mySelectBlocks.forEach((item, i) => {
		const mySelect = item.querySelector('.mySelect-input');
		// const mySelectInput = item.querySelector('.selectValue');
		let mySelectOptions = item.querySelectorAll('.mySelect-options');
		const mySelectIcon = item.querySelector('.mySelect-icon');
		const mySelecDrop = item.querySelector('.mySelect-drop');

		mySelect.addEventListener('click', () => {

			if (mySelecDrop.classList.contains('active')) {
				mySelecDrop.classList.remove('active');
				mySelectIcon.classList.remove('active');
				mySelect.classList.remove('open');


			} else {
				mySelecDrop.classList.add('active');
				mySelectIcon.classList.add('active');
				mySelect.classList.add('open');
			}

		});
		for (let item of mySelectOptions) {
			item.addEventListener('click', () => {
				itemText = item.querySelector('.mySelect-options__value').innerText;
				mySelecDrop.classList.remove('active');
				mySelectIcon.classList.remove('active');
				mySelect.innerText = itemText;
				for (let i = 0; i < mySelectOptions.length; i++){
					mySelectOptions[i].classList.remove('active-item');
				}
				item.classList.add('active-item');
				

			});
		}

	});

	var mixer = mixitup('#mixGameCards', {
		
		animation: {
			duration: 300
		}
	});
})