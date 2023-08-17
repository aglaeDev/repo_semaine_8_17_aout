const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

  // book borrow

  const borrowBook = books.filter(book => book.rented >= 1);
  console.log("borrowBook", borrowBook)
  
  //most rented

  const booksCopy = books.map(a => ({...a}));

  booksCopy.forEach(book => {
    delete book.title
    delete book.id
  })
  booksCopy.sort(function(a, b) {
    return a.rented - b.rented
  });

  const mostRented = booksCopy.slice(-1)

  console.log("mostRented", mostRented);  

  //less rented

  const booksCopy2 = books.map(a => ({...a}));

  booksCopy2.forEach(book => {
    delete book.title
    delete book.id
  })
  booksCopy2.sort(function(a, b) {
    return a.rented - b.rented
  });
  const lessRented = booksCopy2.slice(0, 1)

  console.log("lessRented", lessRented);

  //find ID: 873495

  const findBook = books.indexOf(873495);
  console.log("findBook", findBook)

  //supp ID: 133712 

  const suppCopy = books.map(a => ({...a}));
  const suppBook = suppCopy.shift();
  console.log("suppCopy", suppCopy);  
  
  //alphabetical sort
 
  const alphaCopy = suppCopy.map(a => ({...a}))
  alphaCopy.forEach(book => {
    delete book.rented
    delete book.id
  })
  const alphaSort = alphaCopy.sort((a, b) =>
    a.title.localeCompare(b.title));
  console.log("alphaSort", alphaSort);  