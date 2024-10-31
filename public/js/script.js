
// rums page mountain animation
const title = document.querySelector('.title-rums');
const leaf1 = document.querySelector('.leaf1');
const leaf2 = document.querySelector('.leaf2');
const bush2 = document.querySelector('.bush2');
const mount1 = document.querySelector('.mount1');
const mount2 = document.querySelector('.mount2');
const rumImage1 = document.querySelector('.rum-image1');
const rumImage2 = document.querySelector('.rum-image2');

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = -value * 2 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    rumImage1.style.marginBottom = -value * 1.5 + 'px'
    rumImage2.style.marginBottom = -value * 1.5 + 'px'
    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})

    
// appelle des composants pour l'animation de la section fruits


// function pour les bouttons previous et next button

let caroussel = document.querySelector('.caroussel');
let listHtml = document.querySelector('.caroussel .list' );
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

document.addEventListener('DOMContentLoaded', function(){

    nextButton.onclick = function() {
        showSlider('next');
    }
    prevButton.onclick = function() {
        showSlider('prev');
    }
})

const showSlider = (type) => {
    let items = document.querySelectorAll('.caroussel .list .item')

    // creation d'un loop, une fois que l'utilisateur appuis sur le bouton ça envoie la class derrier
    if(type === 'next') {
        listHtml.appendChild(items[0]);
        caroussel.classList.add('next');
    } else {
        let positionLast = items.length -1;
        listHtml.prepend(items[positionLast]);
        caroussel.classList.add('prev');
    }
}


// animation scroll reveal 
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal') 

        // creation de la boucle for pour l'animation
        for(var i = 0; i < reveals.length; i++) {

            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150; 

            if(revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }


}


// animation pour la page index sur une scroll automatic bar
const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia("prefers-reduced-motion: reduce").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden',true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}