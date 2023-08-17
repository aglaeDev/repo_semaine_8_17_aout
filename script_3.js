const number = prompt("Choisis un nombre entre 1 et 25");
console.log(number);

let i = 1;
const bloc = '#';
const space = ' ';

while (i < number) {
  const nbrOfSpaces = number - i;
  console.log(space.repeat(nbrOfSpaces) + bloc.repeat(i));
  i++;
}
