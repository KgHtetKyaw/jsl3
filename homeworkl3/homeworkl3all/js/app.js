// Start Menu Section
const menubtn = document.querySelector('.menu-btns');
const menushow = document.querySelector('.menu-menus');

menubtn.addEventListener('click',()=>{
    menubtn.classList.toggle('show');
    menushow.classList.toggle('show');
});

// End Menu Section