const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let slides = '';
let thumbs = '';

for (let i = 0; i < items.length; i++) {

    slides +=  `<div class="item">
                    <img src="${items[i]}">
                    
                    <div class="bio">
                        <h3>${title[i]}</h3>
                        <p>${text[i]}</p>
                    </div>
                    
                </div> `;

    thumbs += `<div class="item-thumbs">
                    <img src="${items[i]}">
                </div> `;
}

//creo gli items con la variabile slides
let itemsContainer = document.querySelector('.items-container');
itemsContainer.innerHTML = slides;

//creo le thumbs
let thumbsContainer = document.querySelector('.thumbs-container');
thumbsContainer.insertAdjacentHTML ("afterbegin", thumbs);

//tengo traccia tramite una variabile della posizione della slide attiva

let currentSlide = 0;

//do la classe active alla prima slides
let item = document.getElementsByClassName('item');
item[currentSlide].classList.add('active');

//do la classe active alla prima thumbs
let thumb = document.getElementsByClassName('item-thumbs');
thumb[currentSlide].classList.add('active');

//aggiungo un ascoltatore di eventi sull prev per gestire il click
let prev = document.querySelector ('.prev');
prev.addEventListener('click',
    function(){

        //ciclo infinito
        if(currentSlide > 0){
            item[currentSlide].classList.remove('active');
            thumb[currentSlide].classList.remove('active');

            currentSlide--;

            item[currentSlide].classList.add('active');
            thumb[currentSlide].classList.add('active');
        } else {
            item[currentSlide].classList.remove('active');
            thumb[currentSlide].classList.remove('active');

            currentSlide = item.length - 1;

            item[currentSlide].classList.add('active');
            thumb[currentSlide].classList.add('active');
        }
        
        
    }
);

//aggiungo un ascoltatore di eventi sull next per gestire il click
let next = document.querySelector ('.next');
next.addEventListener('click',
    function(){

        //ciclo infinito
        if(currentSlide <item.length - 1){
            item[currentSlide].classList.remove('active');
            thumb[currentSlide].classList.remove('active');

            currentSlide++;

            item[currentSlide].classList.add('active');
            thumb[currentSlide].classList.add('active'); 

        }else{
            item[currentSlide].classList.remove('active');
            thumb[currentSlide].classList.remove('active');

            currentSlide = 0;

            item[currentSlide].classList.add('active');
            thumb[currentSlide].classList.add('active'); 
        }
        
    }
);