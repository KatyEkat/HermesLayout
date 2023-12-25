// бургер мобилка
document.addEventListener("DOMContentLoaded", function () {
	const submenus = document.querySelectorAll(".header_mob-submenu");
	const arrowIcons = document.querySelectorAll(
		".header_desctop-arrow-link img"
	);

	document.addEventListener("click", function (event) {
		const clickedElement = event.target;
		if (clickedElement.classList.contains("submenu-checkbox")) {
			const currentSubmenu = clickedElement
				.closest(".header_desctop-arrow-link")
				.querySelector(".header_mob-submenu");
			toggleSubmenuVisibility(currentSubmenu, clickedElement.checked);
			const currentArrowIcon = clickedElement
				.closest(".header_desctop-arrow-link")
				.querySelector("img");
			updateArrowIcon(currentArrowIcon, clickedElement.checked);
			submenus.forEach((submenu) => {
				if (submenu !== currentSubmenu && clickedElement.checked) {
					submenu.style.display = "none";
					const closedArrowIcon = submenu
						.closest(".header_desctop-arrow-link")
						.querySelector("img");
					updateArrowIcon(closedArrowIcon, false);
				}
			});
		} else {
			submenus.forEach((submenu) => {
				submenu.style.display = "none";
				const closedArrowIcon = submenu
					.closest(".header_desctop-arrow-link")
					.querySelector("img");
				updateArrowIcon(closedArrowIcon, false);
			});
		}
	});

	function toggleSubmenuVisibility(submenu, isVisible) {
		submenu.style.display = isVisible ? "flex" : "none";
	}

	function updateArrowIcon(arrowIcon, isOpen) {
		arrowIcon.style.transform = isOpen ? "rotate(-90deg)" : "rotate(0deg)";
	}
});

// дэсктоп открывание закрывание меню

const submenu = [
	[
		document.querySelector(".header_about-us-services"),
		document.querySelector(".header_desk-about-us-services-popup"),
	],
	[
		document.querySelector(".header-link-about-us"),
		document.querySelector(".header_desk-about-us-popup"),
	],
	[document.querySelector(".header-link-online"), null],
	[document.querySelector(".header-link-news"), null],
	[document.querySelector(".header-link-contacts"), null],
];

console.log(submenu[0][1].classList.toString());
let sublink = submenu[0][1];
let sublinkHover = false;
console.dir(sublink.classList);

submenu.forEach((sub) => {
	console.log(sub);
	sub[0].addEventListener("mouseover", (event) => {
		if (sublink.classList.toString() !== sub[1]?.classList.toString()) {
			console.log(sublink);
			sublink.classList.remove("active");
		}
		sub[1].classList.add("active");
		sublinkHover = true;
		if (sub[1]) sublink = sub[1];
	});
	sub[1]?.addEventListener("mouseout", (event) => {
		event.stopPropagation();

		sublinkHover = false;
	});
});
document.addEventListener("mouseover", (event) => {
	console.log(sublinkHover);
	if (!sublinkHover) sublink.classList.remove("active");
});
