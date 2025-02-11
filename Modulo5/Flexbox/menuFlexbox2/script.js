let hamMenu = document.querySelector(".ham-menu");
let offScreenMenu = document.querySelector("nav.off-screen-menu");
let linkNav = document.querySelectorAll("nav>a");
hamMenu.addEventListener('click', toggleMenu);
document.addEventListener('click', fecharMenuAoClicarFora);
adicionarEventosLink()

function toggleMenu(){
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
}

function adicionarEventosLink(){
    for(let i=0; i < linkNav.length; i++){
        linkNav[i].addEventListener('click', toggleMenu);
    }
}

function fecharMenuAoClicarFora(event) {
    if (!offScreenMenu.contains(event.target) && !hamMenu.contains(event.target)) {
        // Se o clique não foi no menu nem no botão do menu, fecha o menu
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
    }
}