//NAME SLOGAN

let firstButton = document.getElementById('buttonFirst');
let nameSlogan = document.createElement('h1');
let divSlogan = document.getElementById('slogan');
let firstSequence = document.getElementById('sequence');
let reloadButton = document.getElementById('hiddenButton');
let menuList = document.getElementById('headerList');

reloadButton.style.display = "none";
divSlogan.style.display = "none";
menuList.style.display = "none";

firstButton.addEventListener('click', function() {
    firstButton.style.display = "none";
    firstSequence.style.display = "none";
    reloadButton.style.display = "inline";
    divSlogan.style.display = "inline";
    menuList.style.display = "inline";
});

reloadButton.addEventListener('click', function() {
    window.location.reload(true);
})
