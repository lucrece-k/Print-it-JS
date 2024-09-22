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

// meme proseder pour la creation de la flèche gauche
let flecheLeft = document.createElement('img');
flecheLeft.src = './assets/images/arrow_left.png';
flecheLeft.alt = 'la flèche gauche';
flecheLeft.classList.add('arrow', 'arrow_left');
parentFleche.appendChild(flecheLeft);

// ajout des bullet points
let spanBulletUn = document.createElement('span');
spanBulletUn.classList.add('dot');
let parentBullet = document.querySelector('.dots');
parentBullet.appendChild(spanBulletUn);

let spanBulletDeux = document.createElement('span');
spanBulletDeux.classList.add('dot');
parentBullet.appendChild(spanBulletDeux);

let spanBulletTrois = document.createElement('span');
spanBulletTrois.classList.add('dot');
parentBullet.appendChild(spanBulletTrois);

let spanBulletQuatre = document.createElement('span');
spanBulletQuatre.classList.add('dot');
parentBullet.appendChild(spanBulletQuatre);

// recuperer tout les span des bullet
let spanBullet = document.querySelectorAll('.dots span');
console.log(spanBullet);

const arrowLeftClick = document.querySelector('.arrow_left');
console.log(arrowLeftClick);
arrowLeftClick.addEventListener('click', function (event) {
  spanBullet.classList.add('dot_selected');
  console.log(spanBullet);
});

const arrowRightClick = document.querySelector('.arrow_right');
console.log(arrowRightClick);
arrowRightClick.addEventListener('click', function () {
  let i = 0;
  i++;
  spanBullet[i].classList.add('dot_selected');
  console.log(spanBullet[i]);
});
