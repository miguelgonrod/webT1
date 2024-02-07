/*document.getElementById("myID").addEventListener('mouseenter', function() {
    document.getElementById("myID").style.backgroundColor = "green"});
        
document.getElementById("myID").addEventListener('mouseleave', function() {
    document.getElementById("myID").style.backgroundColor = "red"});
*/

/*document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('.hover-section');

    sections.forEach(function (section) {
        section.addEventListener('mouseenter', function () {
            section.style.backgroundColor = '#e0e0e0';
        });

        section.addEventListener('mouseleave', function () {
            section.style.backgroundColor = '';
        });
    });
});
*/
var color = [, "#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#E7993C"];
 
document.querySelector("section").addEventListener(
    "mouseover", function () {
 
        document.querySelector("section").style.background
            = color[(Math.floor(Math.random() * color.length))];
    })