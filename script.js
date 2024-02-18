// ==================toggle icon navber========
let menuicon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');
menuicon.onclick = () =>{
menuicon.classList.toggle('bx-x');
navber.classList.toggle('active');
};
