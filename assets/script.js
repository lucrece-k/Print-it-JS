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
// creer la balise img flèche droite
let flecheRight = document.createElement('img');
// ajouter les attributs et class de cette balise
flecheRight.src = './assets/images/arrow_right.png';
flecheRight.alt = 'la flèche droit';
flecheRight.classList.add('arrow', 'arrow_right');
// récupérer l'élément parent dans lequelle la balise sera placer
let parentFleche = document.getElementById('banner');
// ajouter la nouvelle balise dans le fichier html
parentFleche.appendChild(flecheRight);

//  creation de la flèche gauche
let flecheLeft = document.createElement('img');
flecheLeft.src = './assets/images/arrow_left.png';
flecheLeft.alt = 'la flèche gauche';
flecheLeft.classList.add('arrow', 'arrow_left');
parentFleche.appendChild(flecheLeft);

// boucle for pour creer les balises span des bullets
for (let i = 0; i < slides.length; i++) {
  let spanBullet = document.createElement('span');
  spanBullet.classList.add('dot');
  let parentBullet = document.querySelector('.dots');
  parentBullet.appendChild(spanBullet);
}
// VARIABLE
// recuperer tout les span des bullets
let spanBullets = document.querySelectorAll('.dots span');
const arrowLeftClick = document.querySelector('.arrow_left');
const arrowRightClick = document.querySelector('.arrow_right');
let slideImg = document.querySelector('#banner img');
let slideP = document.querySelector('#banner p');
let i = 0;

// le bullet actif
function bulletActif() {
  if (i === 0) {
    spanBullets[i].classList.add('dot_selected');
  }
}
bulletActif();
// afficher  au click DROIT
function tableauSlideRight() {
  arrowRightClick.addEventListener('click', function () {
    // enlever le selected du bullet précédent
    spanBullets[i].classList.remove('dot_selected');
    i++;
    // si i depasse 4(nombre de slide) on revient au slide 1
    if (i > slides.length - 1) {
      i = 0;
    }
    // on change le slide, le bullet (nouveau bullet est selected) et le texte
    slideImg.src = './assets/images/slideshow/' + slides[i].image;
    slideP.innerHTML = slides[i].tagLine;
    spanBullets[i].classList.add('dot_selected');
  });
}

tableauSlideRight();
// affichage au click gauche
function tableauSlideLeft() {
  arrowLeftClick.addEventListener('click', function () {
    spanBullets[i].classList.remove('dot_selected');
    i--;
    if (i < 0) {
      i = slides.length - 1;
    }
    slideImg.src = './assets/images/slideshow/' + slides[i].image;
    slideP.innerHTML = slides[i].tagLine;
    spanBullets[i].classList.add('dot_selected');
  });
}
tableauSlideLeft();
