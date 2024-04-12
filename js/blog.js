// btn anm header

var btnAcercaDe = document.querySelectorAll("#btnAcercaDe");
var btnBlog = document.querySelectorAll("#btnBlog");
var btnResponsive = document.querySelectorAll("#btnResponsive");
var secNex = document.querySelector(".nex");

btnAcercaDe[0].removeAttribute("href");
btnAcercaDe[1].removeAttribute("href");
btnBlog[0].removeAttribute("href");
btnResponsive[0].removeAttribute("href");  
btnResponsive[1].removeAttribute("href");  

btnAcercaDe[0].addEventListener("click", nexAcercaDe);
btnAcercaDe[1].addEventListener("click", nexAcercaDe);
btnBlog[0].addEventListener("click", nexBlog);
btnResponsive[0].addEventListener("click", nexAcercaDe); 
btnResponsive[1].addEventListener("click", nexBlog); 

function nexAcercaDe () {

    secNex.classList.add("secNexActive");

    setTimeout(() => {
        location.href = "./index.html";

    }, 500)
}

function nexBlog () {

    secNex.classList.add("secNexActive");

    setTimeout(() => {
        location.href = "./acerca-de.html";

    }, 500)
}


//   header active
  
var headerBtnRigth = document.querySelector("#header__btn__rigth");
var header__blur = document.querySelector(".header__blur");

window.onscroll = function () {

  let scroll = document.documentElement.scrollTop;

  if(scroll > 10){
      headerBtnRigth.classList.add("headerBtnRigthActive");
      header__blur.classList.add("headerActive");
  }
  else if(scroll < 10){
      headerBtnRigth.classList.remove("headerBtnRigthActive");
      header__blur.classList.remove("headerActive");
  }
}

// mn responsive

var iconMn = document.querySelector(".icon__mn");  
var iconMnSpan = document.querySelectorAll(".icon__mn__span");
var secMnResponsive = document.querySelector(".sec__mn__responsive");
var secMnResponsiveUl = document.querySelector(".sec__mn__responsiveUl");

iconMn.addEventListener("click", () => {
  iconMnSpan[0].classList.toggle("iconMnSpanActive0");
  iconMnSpan[1].classList.toggle("iconMnSpanActive1");
  iconMnSpan[2].classList.toggle("iconMnSpanActive2");
  secMnResponsive.classList.toggle("secMnResponsiveActive");
  secMnResponsiveUl.classList.toggle("secMnResponsiveUlActive");

})