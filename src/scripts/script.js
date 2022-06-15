function onClickMenu(){
    document.getElementById("menu").classList.toggle("change")
    document.getElementById("nav").classList.toggle("change")
    document.getElementById("menu-block").classList.toggle("change-block")
    document.getElementById("menu-bg").classList.toggle("change-bg")
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Olá, meu nome é Leonardo", "Sou Desenvolvedor Front-End", "Abaixo adicionarei um botão para que você conheça melhor o meu trabalho!!"];
const typingDelay = 50;
const erasingDelay = 20;
const newTextDelay = 1000; // Delay
let textArrayIndex = 0;
let textArrayLength = 3;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        if(textArrayLength > 1){
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay); 
            textArrayLength--;
        }
        else{
            cursorSpan.classList.remove("typing");
            document.getElementById("button").classList.remove("button")
            document.getElementById("button").classList.add("button-change")
        }
    }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay);
});

function alterarImg(instagram){
  instagram = document.getElementById(instagram-hover)
  instagram.src = '../img/instagram-button-hover';
}
