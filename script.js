//      TOGGLE MENU 

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.nav-menu');
let toggleImg = document.querySelector('.toggle img')
toggle.onclick= openMenu;

function openMenu() {
  menu.classList.toggle('open');
  menu.style.transition = '.5s';
  if(menu.className.indexOf('open') === -1){
  toggleImg.setAttribute('src','images/icon-hamburger.svg');
  }else {
  toggleImg.setAttribute('src','images/icon-close-menu.svg');
  }
}

//      OPEN / CLOSE    POPUP

let popup = document.querySelector(".sec-popup");
let btnBack = document.querySelector(".btn-back");
let btnClosePopup = document.querySelector(".close-popup");

btnBack.onclick = openPopup;
btnClosePopup.onclick = openPopup;

function openPopup() {
popup.classList.toggle('hide');

}

//       OPEN / CLOSE     SELECTED


let check = document.querySelectorAll('.check');
let zone = document.querySelectorAll('.zone-click');
let selected = document.querySelectorAll('.selected');
let pledge = document.querySelectorAll('.input-pledge');
let submit = document.querySelectorAll('.btn-submit')
let success = document.querySelector('.card-success');
let btnSuccess = document.querySelector('.btn-success');

for ( let i =0;i< check.length ; i++){
zone[i].onclick = function(){
  if (check[i].checked ===false) {
    check[i].checked =true
    selected[i].classList.toggle('hide')

  } else {
    check[i].checked = false;
    selected[i].classList.toggle('hide')

  }
}
check[i].onchange = function(){
selected[i].classList.toggle('hide')
  }
}

for(let i =0 ; i< submit.length ; i++){
  submit[i].onclick = function(){
    for(let i =0;i<check.length ; i++){
      check[i].checked = false;
      selected[i].classList.add('hide');
    }
    success.classList.remove('hide');
    popup.classList.add('hide');

  }
}

btnSuccess.onclick = function(){
  success.classList.add('hide');
}