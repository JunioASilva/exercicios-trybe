// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.filter(verifyEven);

// console.log(isEven); // [ 30, 22 ]

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.filter((number) => number % 2 === 0);

// console.log(isEven2); // [ 30, 22 ]

//Exemplo 2

// const objPeople = [
//     { name: 'José', age: 21 },
//     { name: 'Lucas', age: 19 },
//     { name: 'Maria', age: 16 },
//     { name: 'Gilberto', age: 18 },
//     { name: 'Vitor', age: 15 },
//   ];
  
//   const verifyAgeDrive = (arrayOfPeople) => (
//     arrayOfPeople.filter((people) => (people.age < 18))
//   );
  
//   console.log(verifyAgeDrive(objPeople));
//   // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudentByName = (name, listStudents) =>
//   listStudents.filter((student) => student !== name);
//   // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

// const newListStudents = removeStudentByName('Wesley', arrayMyStudents);
// console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const productValue = (listProducts, listPrice) => listProducts.map((product, index) => (
//     { [product]: listPrice[index] }
// ));

// const listProducts = (productValue(products, prices));
// console.log(listProducts);

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
//         { name: 'Matemática', nota: '59' },
//         { name: 'Português', nota: '80' },
//         { name: 'Química', nota: '78' },
//         { name: 'Biologia', nota: '92' },
//       ],
//     },
//     {
//       nome: 'Jorge',
//       sobrenome: 'Santos',
//       idade: 15,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '76' },
//         { name: 'Português', nota: '90' },
//         { name: 'Química', nota: '70' },
//         { name: 'Biologia', nota: '80' },
//       ],
//     },
//     {
//       nome: 'Maria',
//       sobrenome: 'Silveira',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '91' },
//         { name: 'Português', nota: '85' },
//         { name: 'Química', nota: '92' },
//         { name: 'Biologia', nota: '90' },
//       ],
//     },
//     {
//       nome: 'Natalia',
//       sobrenome: 'Castro',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '70' },
//         { name: 'Português', nota: '70' },
//         { name: 'Química', nota: '60' },
//         { name: 'Biologia', nota: '50' },
//       ],
//     },
//     {
//       nome: 'Wilson',
//       sobrenome: 'Martins',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '80' },
//         { name: 'Português', nota: '82' },
//         { name: 'Química', nota: '79' },
//         { name: 'Biologia', nota: '75' },
//       ],
//     },
//   ];

// const allNameStudents = [];

// for (let index = 0; index < estudantes.length; index += 1 ) {
//   if(estudantes[index].turno === 'Manhã') {
//     allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
//   }
// }

// console.log(allNameStudents);

// const allNameStudents = estudantes.filter((estudante) => (
//     estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
  
//   console.log(allNameStudents);

// const findStudent = (name, students) => {
//     for (let index = 0; index < students.length; index += 1) {
//       if (students[index].nome === name) {
//         return students[index];
//       }
//     }
//   };
  
//   const reportStatus = (name, students) => {
//     const getStudent = findStudent(name, students);
//     const report = [];
//     for (let index = 0; index < getStudent.materias.length; index += 1) {
//       if (getStudent.materias[index].nota >= 60) {
//         report.push(`${getStudent.materias[index].name} Aprovado`);
//       } else {
//         report.push(`${getStudent.materias[index].name} Reprovado`);
//       }
//     }
//     return report;
//   };
  
//   console.log(reportStatus('Natalia', estudantes));

const assert = require('assert');
const { count } = require('console');

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

// const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
//   ];
  
//   function formatedBookNames() {
//    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

//   }
  
//   assert.deepStrictEqual(formatedBookNames(), expectedResult);

// const expectedResult = [
//     {
//       age: 31,
//       author: 'Isaac Asimov',
//     },
//     {
//       age: 38,
//       author: 'H. P. Lovecraft',
//     },
//     {
//       age: 39,
//       author: 'Stephen King',
//     },
//     {
//       age: 43,
//       author: 'George R. R. Martin',
//     },
//     {
//       age: 45,
//       author: 'Frank Herbert',
//     },
//     {
//       age: 62,
//       author: 'J. R. R. Tolkien',
//     },
//   ];
  
//   function nameAndAge() {
//     return books.map(book => ({
//         author: book.author.name,
//         age: book.releaseYear - book.author.birthYear
//     })).sort((obj1, obj2) => obj1.age - obj2.age)
//   }
//   console.log(nameAndAge())
  
//   assert.deepStrictEqual(nameAndAge(), expectedResult); 

// const expectedResult = [
//     { 
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: { name: 'George R. R. Martin', birthYear: 1948 },
//       releaseYear: 1991
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: { name: 'Frank Herbert', birthYear: 1920 },
//       releaseYear: 1965
//     }
//   ];
  
//   function fantasyOrScienceFiction () {
//     return books.filter((genreBook) => genreBook.genre === 'Ficção Científica' || genreBook.genre === 'Fantasia');
//   }
//   console.log(fantasyOrScienceFiction(expectedResult));
  
//   assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);

// const expectedResult = [
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//       releaseYear: 1928,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954,
//     },
//   ];
  
//   function oldBooksOrdered() {
//     return books.filter((book) => book.releaseYear <= 1961).sort((obj1, obj2) => obj1.releaseYear - obj2.releaseYear);
//   }
//   console.log(oldBooksOrdered());
  
//   assert.deepStrictEqual(oldBooksOrdered(), expectedResult);

// const expectedResult = [
//     'Frank Herbert',
//     'George R. R. Martin',
//     'Isaac Asimov',
//     'J. R. R. Tolkien',
//   ];
  
//   function fantasyOrScienceFictionAuthors() {
//     return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((book) => book.author.name).sort();
    // const procuraGenero = ['Ficção Científica', 'Fantasia']
    // return books
    // .filter((book) => procuraGenero.includes(book.genre))
    // .map((book) => book.author.name).sort()
//   }
//   console.log(fantasyOrScienceFictionAuthors(expectedResult));
//   assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);

// const expectedResult = [
//     'O Senhor dos Anéis',
//     'Fundação',
//     'O Chamado de Cthulhu',
//   ];
  
//   function oldBooks() {
//     return books.filter((book) => book.releaseYear <= 1961).map((book) => book.name);
//   }
// //   console.log(oldBooks(expectedResult))
  
//   assert.deepStrictEqual(oldBooks(), expectedResult);

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.find((book) => (book.author.name.split(' ').filter((author) => author.endsWith('.')).length === 3)).name; 
}
console.log(authorWith3DotsOnName(expectedResult));

// assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);