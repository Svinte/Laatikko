const style = document.createElement("link");
style.rel="stylesheet";
style.href="/body/body.css";
document.body.appendChild(style);
const banner = document.createElement("div");
banner.id="banner";
document.body.appendChild(banner);
const logo = document.createElement("button");
logo.id="logo";
banner.appendChild(logo);
const selection = document.createElement("div");
selection.id="selection";
document.body.appendChild(selection);
const b = document.createElement("h6");
b.id="close";
b.innerHTML="&#8693;";
selection.appendChild(b);
const b1 = document.createElement("h6");
b1.className="button";
b1.innerHTML="Discord";
selection.appendChild(b1);
const b2 = document.createElement("h6");
b2.className="button";
b2.innerHTML="Koti";
selection.appendChild(b2);
const b3 = document.createElement("h6");
b3.className="button";
b3.innerHTML="Palaute";
selection.appendChild(b3);
const b4 = document.createElement("h6");
b4.className="button";
b4.innerHTML="Mainos";
selection.appendChild(b4);
var open = false;
logo.onclick = function () {
    if (open) {
        open = false;
        selection.style.display="none";
    }   else {
        open = true;
        selection.style.display="block";
    }
};
b.onclick = function () {
    open = false;
    selection.style.display="none";
};
b1.onclick=function () {
    var position = (screen.width - 500) / 2;
    var Position = (screen.height - 700) / 2;
    var window = document.open("https://discord.com/invite/7DNNuAgaj9", "popup", "width=500, height=600, left=auto"+",right=" + position);
    window.moveTo(position, Position);
    window.focus();
};
b2.onclick=function () {
    document.location.href="/";
};
b3.onclick=function () {
    document.location.href="/palaute.html";
};
b4.onclick=function () {
    document.location.href="/mainos.html";
};
document.body.onload = function () {
    const cop = document.createElement("div");
    cop.id="cop";
    document.body.appendChild(cop);
    const copText = document.createElement("h7");
    copText.id="copyright";
    copText.innerHTML="&copy; ff6171 & Nikolas Lehto 2023";
    cop.appendChild(copText);
}