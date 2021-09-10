// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 0 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "0"
// console.log(sumNumbers); // 113

// const numbers = [50, 85, -30, 3, 15];
// let maior = 0;
// for(let index = 0; index < numbers.length; index += 1) {
//     if ( numbers[index] > maior) {
//         maior = numbers[index]
//     }
// }
// console.log(maior)

// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(reduce(getBigger, 0)); // 85

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const isEven = numbers.filter((number) => number % 2 === 0);
// const sumPair = (currenValue, number) => (currenValue + number);

// const sumNumbers = () => isEven.reduce(sumPair);


// console.log(sumNumbers(numbers));

// const estudantes = [
//     {
//       nome: 'Jorge',
//       sobrenome: 'Silva',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 67 },
//         { name: 'Português', nota: 79 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 65 },
//       ],
//     },
//     {
//       nome: 'Mario',
//       sobrenome: 'Ferreira',
//       idade: 15,
//       turno: 'Tarde',
//       materias: [
//         { name: 'Matemática', nota: 59 },
//         { name: 'Português', nota: 80 },
//         { name: 'Química', nota: 78 },
//         { name: 'Biologia', nota: 92 },
//       ],
//     },
//     {
//       nome: 'Jorge',
//       sobrenome: 'Santos',
//       idade: 15,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 76 },
//         { name: 'Português', nota: 90 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 80 },
//       ],
//     },
//     {
//       nome: 'Maria',
//       sobrenome: 'Silveira',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 91 },
//         { name: 'Português', nota: 85 },
//         { name: 'Química', nota: 92 },
//         { name: 'Biologia', nota: 90 },
//       ],
//     },
//     {
//       nome: 'Natalia',
//       sobrenome: 'Castro',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 70 },
//         { name: 'Português', nota: 70 },
//         { name: 'Química', nota: 60 },
//         { name: 'Biologia', nota: 50 },
//       ],
//     },
//     {
//       nome: 'Wilson',
//       sobrenome: 'Martins',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 80 },
//         { name: 'Português', nota: 82 },
//         { name: 'Química', nota: 79 },
//         { name: 'Biologia', nota: 75 },
//       ],
//     },
//   ];

  
//   console.log(bestClass(estudantes));

// const assert = require('assert');

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   return arrays.reduce((acc, cur) => acc.concat(cur), []);
// }
// console.log(flatten(arrays));


// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames() {
//   const names = books.reduce((acc, book, index, array) => {
//     if (index === array.length -1) return `${acc} ${book.author.name}.`;
//     return `${acc} ${book.author.name},`;
//   }, '');
//   return names.trim();
// }
// console.log(reduceNames(expectedResult));

// assert.strictEqual(reduceNames(), expectedResult);