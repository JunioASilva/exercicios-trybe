// // // const emailListInData = [
// // //     'roberta@email.com',
// // //     'paulo@email.com',
// // //     'anaroberta@email.com',
// // //     'fabiano@email.com',
// // //   ];
  
// // //   const showEmailList = (email) => {
// // //     // console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// // //   };
  
// // //   emailListInData.forEach(showEmailList);

// // //   const numbers = [19, 21, 30, 3, 45, 22, 15];

// // // const verifyEven = (number) => number % 2 === 0;

// // // const isEven = numbers.find(verifyEven);

// // // console.log(isEven); // 30

// // // console.log(verifyEven(22)); // False
// // // console.log(verifyEven(15)); // True

// // // // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// // // const isEven2 = numbers.find((number) => number % 2 === 0);

// // // console.log(isEven2); // 30

// // const numbers = [19, 21, 30, 3, 45, 22, 15];

// // const findDivisibleBy3And5 = () => {
// //   return numbers.find ((number) => number % 3 === 0 && number % 5 === 0); 
// // }

// // // console.log(findDivisibleBy3And5());

// // const names = ['João', 'Irene', 'Fernando', 'Maria'];

// // const findNameWithFiveLetters = () => {
// //   return names.find ((name) => name.length === 5);
// // }

// // // console.log(findNameWithFiveLetters());

// // const musicas = [
// //     { id: '31031685', title: 'Partita in C moll BWV 997' },
// //     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
// //     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// //   ]
  
// //   function findMusic(id) {
// //     return musicas.find ((musica) => musica.id === id );
// //   }
// //   musicas.forEach(findMusic);
  
// // //   console.log(findMusic('31031685'))


// //   const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// //   const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
  
// // //   console.log(verifyFirstLetter('i', listNames)); // true
// // //   console.log(verifyFirstLetter('x', listNames)); // false

// // const grades = {
// //     portugues: 'Reprovado',
// //     matematica: 'Reprovado',
// //     ingles: 'Reprovado',
// //   };
  
// //   const verifyGrades = (studentGrades) => (
// //     Object.values(studentGrades).every((grade) => grade === 'Reprovado')
// //   );
  
// //   console.log(verifyGrades(grades));

// // const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// // const hasName = (arr, name) => {
// //   arr.some((names) => currentName === name);
// // }

// // // console.log(hasName(names, 'Ana'))

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//   return arr.some((currentName) => currentName === name);
// }

// console.log(hasName(names, 'Ana'));

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//     return arr.every((currentArray) => currentArray.age >= minimumAge)
//   }
  
//   console.log(verifyAges(people, 18));

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   people.sort(function (a, b)  {
//       if(a.age < b.age) {
//           return 1;
//       }
//       if (a.age > b.age) {
//           return -1;
//       }
//       return 0;
//   })
  
//   console.log(people);


