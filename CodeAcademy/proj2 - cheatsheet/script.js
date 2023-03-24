$(document).ready(function() {

let html = document.getElementById("html_nav");
let css = document.getElementById("css_nav");
let html_block = document.getElementById("html");
let css_block = document.getElementById("css");

html.addEventListener('click', function() {
    html_block.style.display = "block";
    css_block.style.display = "none";
});
css.addEventListener('click', function() {
    html_block.style.display = "none";
    css_block.style.display = "block";
});

});