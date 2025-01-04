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
