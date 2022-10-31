const topMenuItemsClass = ".header__menu-link";
const topMenuItemsClassActive = "header__menu-link--active";
const topMenuItems = document.querySelectorAll(topMenuItemsClass);

const footerMenuItemsClass = ".footer-menu__link";
const footerMenuItemsClassActive = "footer-menu__link--active";
const footerMenuItems = document.querySelectorAll(footerMenuItemsClass);

const activeMenu = function (items, itemsClassActive) {
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      let current = document.getElementsByClassName(itemsClassActive);
      current[0].className = current[0].className.replace(itemsClassActive, "");
      this.className += ` ${itemsClassActive}`;
    });
  }
};

activeMenu(topMenuItems, topMenuItemsClassActive);
activeMenu(footerMenuItems, footerMenuItemsClassActive);
