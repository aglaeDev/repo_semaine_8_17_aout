function factorielle(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorielle(n - 1);
    }
  }
  
  // Demande à l'utilisateur de saisir un nombre via une boîte de dialogue prompt
  let nombre = parseInt(prompt("De quel nombre veux-tu calculer la factorielle ?"));
  
  // Calcul de la factorielle du nombre saisi
  let resultat = factorielle(nombre);
  
  // Affichage du résultat dans la console
  console.log("Le résultat est : " + resultat);