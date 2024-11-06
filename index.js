function web() {
    window.open("index.html", "_blank");
}
function Navtop() {
    document.getElementById("Nav").style.position = "fixed";
}
function Navnottop() {
    document.getElementById("Nav").style.position = "absolute"; 
}
function aboutus() {
    window.open("aboutus.html", "_blank");
}
function btngen() {
    window.open("generations.html", "_blank");
}
function btnlan() {
    window.open("languages.html", "_blank");
}
window.addEventListener('load', adjustContentMargin);
window.addEventListener('resize', adjustContentMargin);
function adjustContentMargin() {
    const navbar = document.getElementById('Nav');
    const content = document.getElementById('Home');
    const navbarHeight = navbar.offsetHeight;
    content.style.marginTop = `${navbarHeight}px`;
}