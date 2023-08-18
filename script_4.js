const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

    // 70's parts 

const entrep70 = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
console.log("entrep70", entrep70)

    //names parts

const names = entrepreneurs.map(a => ({...a}));

names.forEach(entrepreneur => {
    delete entrepreneur.year
})
console.log("names", names);
console.log("entrepreneurs", entrepreneurs)

    //age parts
const agesEntrepreneurs = entrepreneurs.map(a => ({...a}));

agesEntrepreneurs.forEach(entrepreneurAge => {
    delete entrepreneurAge.first
    delete entrepreneurAge.last
})

// console.log("agesEntrepreneurs", agesEntrepreneurs)

agesEntrepreneurs.forEach(entrepreneur => {
    const currentYear = 2023;
    const realAge = currentYear - entrepreneur.year;
    // console.log("age", realAge);
    entrepreneur.age = realAge
})  
    
console.log("agesEntrepreneurs", agesEntrepreneurs);  

//alphabetical sort
 
const alphaCopy = names.map(a => ({...a}))
/*alphaCopy.forEach(entrepreneur => {
  delete book.rented
  delete book.id
})*/
const alphaSort = alphaCopy.sort((a, b) =>
  a.last.localeCompare(b.last));
console.log("alphaSort", alphaSort);