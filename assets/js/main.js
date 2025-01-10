/*================Change Background Header===================*/
function scrollHeader() {
	const header = document.getElementById("header");
	// when the scroll is greater than 80 viewport height, add the scroll-header class to scroll header tag
	if (this.scrollY >= 80) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/* ====================Show Scroll Up=================== */
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	// when the scroll is greater than 350 viewport height, add the show-scroll class to scroll-top class 
	if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/* ================About Tabs================ */
const tabs = document.querySelectorAll("[data-target]"),
	tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target);

		tabContent.forEach((tabContent) => {
			tabContent.classList.remove("tab__active");
		});

		target.classList.add("tab__active");

		tabs.forEach((tab) => {
			tab.classList.remove("tab__active");
		});

		tab.classList.add("tab__active");
	});
});

/* =================Contact Form=============== */
const contactForm = document.getElementById("contact-form"),
	contactName = document.getElementById("contact-name"),
	contactEmail = document.getElementById("contact-email"),
	contactSubject = document.getElementById("contact-subject"),
	contactMessage = document.getElementById("contact-message"),
	errorMessage = document.getElementById("error-message");

const sendEmail = (e) => {
	e.preventDefault();

	// check if the field has a value
	if (
		contactName.value === "" ||
		contactEmail.value === "" ||
		contactSubject.value === "" ||
		contactMessage.value === ""
	) {
		// show message
		errorMessage.className = "error__message first-color";
		errorMessage.textContent = "Write all the input fields";
	} else {
		// serviceID - templateID - #from - publickey
		emailjs
			.sendForm(
				"service_hsnswfl",
				"template_pd6tlro",
				"#contact-form",
				"6MIdtoOc2Djr19XyI"
			)
			.then(
				() => {
					// show message and add color, window + dot to open emoji
					errorMessage.className = "error__message color-green";
					errorMessage.innerText = "Message sent";

					// remove message after 3 seconds
					setTimeout(() => {
						errorMessage.innerText = "";
					}, 5000);
				},
				(error) => {
					alert("OOPS! SOMETHING WENT WRONG...", error);
				}
			);

		// clear input fields
		contactName.value = "";
		contactEmail.value = "";
		contactSubject.value = "";
		contactMessage.value = "";
	}
};

contactForm.addEventListener("submit", sendEmail);
