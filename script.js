// scroll section active link
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//
// var btn = document.getElementById('btn')
var loyout =document.getElementById('loyout')
var para = document.getElementById('para')

function add(){
    loyout.style.display = 'block'
    para.style.display = 'block'
}
function remove(){
    loyout.style.display = 'none'
    para.style.display = 'none'
}
