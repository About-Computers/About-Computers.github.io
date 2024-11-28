function web() {
    window.open("index.html");
}
function opjsa() {
    window.open("https://opjsangul.com");
}
function Navtop() {
    document.getElementById("Nav").style.position = "fixed";
}
function Navnottop() {
    document.getElementById("Nav").style.position = "absolute"; 
}
function aboutus() {
    window.open("aboutus.html");
}
function btngen() {
    window.open("generations.html");
}
function btnlan() {
    window.open("languages.html");
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