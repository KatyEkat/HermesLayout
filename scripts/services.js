document.addEventListener('DOMContentLoaded', function () {
    const serviceButtons = document.querySelectorAll('.services_btn');
    const popups = document.querySelectorAll('.service_block_popup .popup');
    const popupBgrs = document.querySelectorAll('.service_block_popup .popup_bgr');

    serviceButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            togglePopupVisibility(index);
        });
    });

    function togglePopupVisibility(index) {
        popups.forEach((popup, i) => {
            const displayStyle = i === index && popup.style.display !== 'flex' ? 'flex' : 'none';
            popup.style.display = displayStyle;
            popupBgrs[i].style.display = displayStyle;
        });
    }

    document.addEventListener('click', function (event) {
        const isClickInsidePopup = popups.some((popup) => popup.contains(event.target));
        const isClickInsideButton = Array.from(serviceButtons).some((button) => button.contains(event.target));

        if (!isClickInsidePopup && !isClickInsideButton) {
            popups.forEach((popup, i) => {
                popup.style.display = 'none';
                popupBgrs[i].style.display = 'none';
            });
        }
    });
});
