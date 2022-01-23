//Funcion para mostrar el menu lateral
const menuBurguer = document.querySelector('#menuBurguer');

menuBurguer.addEventListener('click', (e) =>{
    e.preventDefault();
    const navegation = document.querySelector('#navegation');
    const mask = document.querySelector('#mask');
    navegation.classList.toggle('show-navegation');
    mask.classList.toggle('show-mask');
});

const navegationClose = document.querySelector('#navegationClose');

navegationClose.addEventListener('click', (e) =>{
    e.preventDefault();
    const navegation = document.querySelector('#navegation');
    const mask = document.querySelector('#mask');
    navegation.classList.toggle('show-navegation');
    mask.classList.toggle('show-mask');
});


const navigationExpandableArray = document.querySelectorAll('.navegation__link--expandable');

navigationExpandableArray.forEach((element) =>{
    element.addEventListener('click',(e)=>{
        e.preventDefault();
        const element = e.target;
        const parent = element.closest('.navegation__item');
        parent.querySelector('.submenu').classList.toggle('show-submenu');
        if(parent.querySelector('.submenu').classList.contains('show-submenu')){
            parent.querySelector('.navegation__expandable').innerHTML ='-';
        }
        else{
            parent.querySelector('.navegation__expandable').innerHTML ='+';
        }
    })
});
 


