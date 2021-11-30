function showActiveLink() {
    let links = Array.from(document.links);
    let activeLink = links.find((link) => document.URL.includes(link.href));
    removeLinkMarker(links);
    activeLink.parentElement.classList.add('sidebarlink--active');
}

function removeLinkMarker(links) {
    links.forEach((link) => link.parentElement.classList.remove('sidebarlink--active'));
}