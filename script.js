// const acordar = () => 'Acordando';

// const cafe = () => 'Tomar café';

// const dormir = () => 'Hora de dormir';

// const doingThings = (callback) => {
//     const result = callback();
//     console.log (result)
// }
// doingThings(acordar);
// doingThings(cafe);
// doingThings(dormir);

// const novoContratado = (fullName) => {
//     const email = fullName.toLowerCase().split(' ').join('_');
//     return { fullName, email: `${email}@gmail.com` }
// }
// const newEmployees = (callback) => {
//     const employees = {
//       id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };
//   console.log(newEmployees(novoContratado));

// const numberCheck = (myNumber, number) => myNumber === number

// const resultado = (myNumber, callback) => {
//     const number = Math.floor((Math.random() * 5) +1);
    
//     return callback(myNumber, number) ? 'Voce ganhou' : 'Tente novamente';
// };

// console.log(resultado(1, numberCheck));
