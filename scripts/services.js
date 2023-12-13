document.addEventListener('DOMContentLoaded', function () {
    const serviceButtons = document.querySelectorAll('.services_btn');
    const popups = document.querySelectorAll('.service_block_popup .popup');

    serviceButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            togglePopupVisibility(index);
        });
    });

    function togglePopupVisibility(index) {
        popups.forEach((popup, i) => {
            popup.style.display = i === index ? (popup.style.display === 'flex' ? 'none' : 'flex') : 'none';
        });
    }
});
