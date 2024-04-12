// btn anm nex

var btnAcercaDe = document.querySelectorAll("#btnAcercaDe");
var btnBlog = document.querySelectorAll("#btnBlog");
var btnResponsive = document.querySelectorAll("#btnResponsive");
var secNex = document.querySelector(".nex");

btnAcercaDe[0].removeAttribute("href");
btnAcercaDe[1].removeAttribute("href");
btnAcercaDe[2].removeAttribute("href");
btnBlog[0].removeAttribute("href");
btnBlog[1].removeAttribute("href");
btnResponsive[0].removeAttribute("href");  
btnResponsive[1].removeAttribute("href");  

btnAcercaDe[0].addEventListener("click", nexAcercaDe);
btnAcercaDe[1].addEventListener("click", nexAcercaDe);
btnAcercaDe[2].addEventListener("click", nexAcercaDe);
btnBlog[0].addEventListener("click", nexBlog);
btnBlog[1].addEventListener("click", nexBlog);
btnResponsive[0].addEventListener("click", nexAcercaDe); 
btnResponsive[1].addEventListener("click", nexBlog); 

function nexAcercaDe () {

    secNex.classList.add("secNexActive");

    setTimeout(() => {
        location.href = "./acerca-de.html";

    }, 500)
}

function nexBlog () {

    secNex.classList.add("secNexActive");

    setTimeout(() => {
        location.href = "./blog.html";

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

// proyectos

var controls1 = document.querySelector("#controls1");
var controls2 = document.querySelector("#controls2");
var sliderProyec = document.querySelector("#sliderProyet");
var sliderProyetLi1 = document.querySelector("#sliderProyetLi1");
var sliderProyetLi2 = document.querySelector("#sliderProyetLi2");



controls2.addEventListener("click", (e) => {
    sliderProyec.classList.add("sliderProyecActive");
    sliderProyetLi2.classList.add("opacity1");
    sliderProyetLi1.classList.add("opacity0");
    controls2.classList.add("controlActive");
    controls1.classList.add("controlDesactive");
})

controls1.addEventListener("click", (e) => {
    sliderProyec.classList.remove("sliderProyecActive");
    sliderProyetLi2.classList.remove("opacity1");
    sliderProyetLi1.classList.remove("opacity0");
    controls2.classList.remove("controlActive");
    controls1.classList.remove("controlDesactive");
})

// slider sec 4

var slider = document.querySelector("#sec__4__card__slider__ul");
var btnRigt = document.querySelector("#btnRigt");
var btnLeft = document.querySelector("#btnLeft");

let contedorX = 0;

btnLeft.addEventListener("click", () => {
    if(contedorX >= 75){
        contedorX = -25;
    }else{
       contedorX += 25;
       slider.style.transform = `translateX(${-contedorX}%)`;
    }
});

btnRigt.addEventListener("click", () => {
    if(contedorX <= 0){
        contedorX = 100
    }else{
      contedorX -= 25;
      slider.style.transform = `translateX(${-contedorX}%)`;
    }
});