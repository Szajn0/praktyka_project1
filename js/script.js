'use strict';

const burger = document.querySelector('.material-icons');
const closeMenu = document.querySelector('.navigation .material-icons');
const menuDiv = document.querySelector('.navigation');

console.log(burger);

burger.addEventListener('click', () => {
  
    menuDiv.classList.add('showMenu');

});

closeMenu.addEventListener('click', () => {
    
    menuDiv.classList.remove('showMenu');

});