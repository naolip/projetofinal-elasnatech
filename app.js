const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector(".scroll-top");


// scroll TOP Button Events

if(scrollButton){
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > (window.innerHeight * 1.2)){
      scrollButton.style.display="flex";
    }else{
      scrollButton.style.display="none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}


var hamburguer = document.getElementById('hamburguer');
var itensMenu = document.getElementById('itens_menu');

hamburguer.addEventListener('click', aparecer);

function aparecer() {
    if (itens_menu.style.display == 'block') {
        itensMenu.classList.remove('show');
    } else {
        itensMenu.classList.toggle('show');
    }
}

