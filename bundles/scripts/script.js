function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) selectedPage.classList.add('active');
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`nav ul li a[href="#${pageId}"]`);
    if (activeLink) activeLink.classList.add('active');

    const navLinksContainer = document.querySelector('.nav-links');
    if (navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
