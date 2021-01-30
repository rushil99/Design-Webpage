const menu = documents.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(e) {
    menu.classlist.toggle('is-active');
    menulinks.classlist.toggle('active');
});