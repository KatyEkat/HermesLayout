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

document.addEventListener('DOMContentLoaded', function () {
    const submenusDesktop = document.querySelectorAll('.header_desk-submenu');
	// const menuListDesctop = document.querySelectorAll('.header_desktop-main-list');

	// function closeAllSubmenus(){
	// 	menuListDesctop.forEach((submenusDesktop) => {
	// 		submenusDesktop.style.display = "none"
	// 	})
	// }


    document.addEventListener('mouseout', function (event) {
        const hoveredElement = event.target;

        const isServicesButton = hoveredElement.closest('.header_desktop-link.header_desctop-arrow-link');
        const isAboutButton = hoveredElement.closest('.header_desktop-link.header_desctop-arrow-link');

        if (isServicesButton || isAboutButton) {
            const currentSubmenu = isServicesButton
                ? isServicesButton.querySelector('.header_desk-submenu')
                : isAboutButton.querySelector('.header_desk-submenu');

            const currentArrowIcon = isServicesButton
                ? isServicesButton.querySelector('img')
                : isAboutButton.querySelector('img');

            toggleSubmenuVisibility(currentSubmenu, currentArrowIcon);
        } 
		// else {
        //     submenusDesktop.forEach(submenu => {
        //         const closedArrowIcon = submenu.closest('.header_desctop-arrow-link').querySelector('img');
        //         updateArrowIcon(closedArrowIcon, false);
        //     });
        // }
    });

    function toggleSubmenuVisibility(submenu, arrowIcon) {
        const isActive = submenu.classList.contains('active');

        submenusDesktop.forEach(otherSubmenu => {
            if (otherSubmenu !== submenu && otherSubmenu.classList.contains('active')) {
                otherSubmenu.classList.remove('active');
                const closedArrowIcon = otherSubmenu.closest('.header_desctop-arrow-link').querySelector('img');
                updateArrowIcon(closedArrowIcon, false);
            }
        });

        submenu.classList.toggle('active');
        updateArrowIcon(arrowIcon, !isActive);
    }

    function updateArrowIcon(arrowIcon, isOpen) {
        arrowIcon.style.transform = isOpen ? 'rotate(-90deg)' : 'rotate(0deg)';
    }
});
