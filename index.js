function web() {
    window.open("index.html","_parent");
}
function opjsa() {
    window.open("https://opjsangul.com","_parent");
}
function Navtop() {
    document.getElementById("Nav").style.position = "fixed";
}
function Navnottop() {
    document.getElementById("Nav").style.position = "absolute"; 
}
function aboutus() {
    window.open("aboutus.html","_parent");
}
function btngen() {
    window.open("generations.html","_parent");
}
function btnlan() {
    window.open("languages.html","_parent");
}
window.addEventListener("load", adjustContentMargin);
window.addEventListener("resize", adjustContentMargin);
function adjustContentMargin() {
    const navbar = document.getElementById("Nav");
    const content = document.querySelector("section");
    const navbarHeight = navbar.offsetHeight;
    content.style.marginTop = navbarHeight + "px";
}
window.addEventListener("load", adjustDiscoballHeight);
window.addEventListener("resize", adjustDiscoballHeight);
function adjustDiscoballHeight() {
    const discoball = document.getElementById("discoball");
    if (discoball) {
        const discoballw = discoball.offsetWidth;
        discoball.style.height = discoballw + "px";
    }
}