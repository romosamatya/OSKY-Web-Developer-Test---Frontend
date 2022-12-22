const membershipLink = document.getElementById('membership-link');
const membershipSubmenu = document.querySelector('#membership-submenu');
const closeButton = document.querySelector('#membership-submenu button');
const menuButton = document.getElementById('menu-button');
const navMenu = document.querySelector('nav ul');

function toggleMembershipSubmenu() {
  membershipSubmenu.classList.toggle('visible');
}

function closeMembershipSubmenu(event) {
  if (event.target !== membershipLink && !membershipSubmenu.contains(event.target)) {
    membershipSubmenu.classList.remove('visible');
  }
}

function toggleNavMenu() {
  navMenu.classList.toggle('visible');
}

function confirmNavigation(event) {
  if (!confirm('Are you sure you want to navigate to a different domain?')) {
    event.preventDefault();
  }
}

membershipLink.addEventListener('click', toggleMembershipSubmenu);
document.addEventListener('click', closeMembershipSubmenu);
closeButton.addEventListener('click', toggleMembershipSubmenu);
menuButton.addEventListener('click', toggleNavMenu);
jQuery('.social-menu li a').click(confirmNavigation);