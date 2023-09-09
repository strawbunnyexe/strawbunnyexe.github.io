// MENU TOGGLE
window.onload = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.onclick = () => {
      menuToggle.classList.toggle('is-active');
	    sidebar.classList.toggle('is-active');
    };
};
