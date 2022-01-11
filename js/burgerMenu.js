const burgerMenu = () => {
  const iconMenu = document.querySelector('.header__burger');
  const menuBody = document.querySelector('.header__menu');

  if (iconMenu) {
    iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }

  if (menuBody) {
    menuBody.addEventListener('click', (e) => {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
    });
  }
};

export default burgerMenu;