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

    document.addEventListener('click', function (event) {
        const clickedElement = event.target;

        const clickedArrow = clickedElement.closest('.header_desctop-arrow-link');
        if (clickedArrow) {
            const currentSubmenu = clickedArrow.querySelector('.header_desk-submenu');
            const currentArrowIcon = clickedArrow.querySelector('img');
            toggleSubmenuVisibility(currentSubmenu, currentArrowIcon);
        } else {
            submenusDesktop.forEach(submenu => {
                submenu.style.display = 'none';
                const closedArrowIcon = submenu.closest('.header_desctop-arrow-link').querySelector('img');
                updateArrowIcon(closedArrowIcon, false);
            });
        }
    });

    function toggleSubmenuVisibility(submenu, arrowIcon) {
        const isVisible = submenu.style.display === 'flex';
        submenu.style.display = isVisible ? 'none' : 'flex';

        updateArrowIcon(arrowIcon, !isVisible);

        submenusDesktop.forEach(otherSubmenu => {
            if (otherSubmenu !== submenu && isVisible) {
                otherSubmenu.style.display = 'none';
                const closedArrowIcon = otherSubmenu.closest('.header_desctop-arrow-link').querySelector('img');
                updateArrowIcon(closedArrowIcon, false);
            }
        });
    }

    function updateArrowIcon(arrowIcon, isOpen) {
        arrowIcon.style.transform = isOpen ? 'rotate(-90deg)' : 'rotate(0deg)';
    }
});
