const navMobile = document.getElementById('nav-mobile');
const contentMain = document.getElementById('main');

const menuIconClosed = document.getElementById('menu-closed');
const menuIconOpend = document.getElementById('menu-opend');

const navItems = document.querySelectorAll('.item');

const MENU_ACTIONS = {
  OPEND: 'MENU-OPEND',
  CLOSED: 'MENU-CLOSED',
  SECTION: 'MENU-SELECT-SECTION'
}

const toggleMenu = (ACTION, ITEM) => {
  if (MENU_ACTIONS.OPEND === ACTION) {
    navMobile.classList.remove('nav-hidden');
    contentMain.classList.add('main-w-menu');
  }
  else if (MENU_ACTIONS.CLOSED === ACTION || MENU_ACTIONS.SECTION === ACTION) {
    navMobile.classList.add('nav-hidden');
    contentMain.classList.remove('main-w-menu');
  }

  if (MENU_ACTIONS.SECTION === ACTION) {
    const idContainer = ITEM.textContent.toLowerCase();
    const container = document.getElementById(idContainer);
    container.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

navItems.forEach(item => item.addEventListener('click', () => toggleMenu(MENU_ACTIONS.SECTION, item)))

menuIconOpend.addEventListener('click', () => toggleMenu(MENU_ACTIONS.OPEND));
menuIconClosed.addEventListener('click', () => toggleMenu(MENU_ACTIONS.CLOSED));
