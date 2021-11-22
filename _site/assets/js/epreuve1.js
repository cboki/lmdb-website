const tour = document.getElementById('tour');
const colors = ['orange', 'vert', 'rose', 'bleu', 'rouge', 'jaune'];

const briques = document.querySelectorAll('#tour > .brique');

briques.forEach((brique) => {
    brique.addEventListener('click', (event) => {
        event.currentTarget.classList.remove('orange', 'vert', 'rose', 'bleu', 'rouge', 'jaune');
        newColor = colors[getRandomInt(colors.length)];
        event.currentTarget.classList.add(newColor);
        checkSolution();
    })
});


getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  checkSolution = () => {
    solution = ['vert', 'vert', 'rose', 'vert', 'orange', 'vert', 'rose', 'rose', 'vert', 'jaune', 'rouge', 'jaune', 'rouge', 'vert', 'jaune', 'vert', 'jaune', 'jaune', 'vert', 'vert', 'rouge', 'jaune', 'vert', 'rouge', 'vert', 'rouge', 'vert', 'jaune', 'rouge', 'bleu', 'rose', 'vert', 'orange', 'rose', 'vert', 'orange'];  
    tentative = [];
    briques.forEach((brique) => {
        tentative.push(brique.classList[1]);
    });
    if (arraysEqual(tentative, solution)) {
        console.log("Le savais-tu ? Si tu cliques constamment sur le premier lien du contenu d'un article Wikipedia, tu finiras toujours par tomber sur le même article, encore et encore.")
        console.log("Cet article parle d'une discipline qui est enseignée au lycée.")
        console.log("Trouve cette page.")
        console.log("En 4.3.2, une image.")
        console.log("Trouve le nombre d'habitants qui résidaient dans la commune où l'auteur de cette image s'est éteinte, à la date inscrite sur la façade de la mairie.")
        console.log("Peut-être existe-t-il une page html qui porte ce nom ?")
        tour.insertAdjacentHTML('afterend', '<img src="../assets/images/bebeduplo.jpg">');
        tour.insertAdjacentHTML('afterend', '<p>La suite des instructions se trouve probablement dans la console web ...</p>');
        tour.insertAdjacentHTML('afterend', '<p>Bien joué Valou !!! Première épreuve réussie.</p>');
    };
  }

  arraysEqual = (a1,a2) => {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}