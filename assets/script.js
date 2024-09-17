const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];
const arrowLeftClick = document.querySelector('.arrow_left');
console.log(arrowLeftClick);
arrowLeftClick.addEventListener('click', function (event) {
  alert('click gauche');
  console.log(event);
});
const arrowRightClick = document.querySelector('.arrow_right');
console.log(arrowRightClick);
arrowRightClick.addEventListener('click', function (event) {
  alert('click droit');
  console.log(event);
});
