/* // // setTimeout(() => {
// //     console.log('Comprar parafusos') // Comprar parafusos
// //     console.log('Adicionar ao estoque') // Adicionar ao estoque
// //   }, 2000);
  
// //   console.log('1 - Receber roda'); // 1 - Receber roda
// //   console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// //   console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro




// // const assert = require('assert');

// // const pushNumber = (list, number) => list.push(number);

// // let numbers = [];

// // pushNumber(numbers, 1);
// // pushNumber(numbers, 2);
// // pushNumber(numbers, 3);

// // assert.deepStrictEqual(numbers, [1, 2, 3]);




// // const assert = require('assert');

// // const pushNumber = (list, number) => list.push(number);

// // let numbers = [];

// // setTimeout(() => pushNumber(numbers, 1), 3000);
// // pushNumber(numbers, 2);
// // pushNumber(numbers, 3);

// // assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha

// // const assert = require('assert');


// // const pushNumber = (list, number) => {
// //   list.push(number);
// //   console.log(list);
// // };

// // let numbers = [];

// // setTimeout(() => pushNumber(numbers, 1), 3000);
// // pushNumber(numbers, 2);
// // pushNumber(numbers, 3);

// // setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);



// // const myExpenses = [
// //     {
// //       gym: 99,
// //     },
// //     {
// //       ifood: 200,
// //     },
// //     {
// //       phone: 60,
// //     },
// //     {
// //       internet: 100,
// //     },
// //   ];
  
// //   const myIncome = 1000;

// //   const monthlyBudget = (myIncome, myExpenses, callback) => {

// //     const totalExpenses = callback(myExpenses);
// //     const totalAfterExpenses = myIncome - totalExpenses;
  
// //     console.log(`Balanço do mês:
// //       Recebido: R$${myIncome},00
// //       Gasto: R$${totalExpenses},00
// //       Saldo: R$${totalAfterExpenses},00 `);
// //   };
  
// //   const handleExpenses = myExpenses => {
// //   const eachValue = myExpenses.map((item) => Object.values(item)[0]);
// //   const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
// //   return totalExpense;
// // };

// // monthlyBudget(myIncome, myExpenses, handleExpenses);




// // const assert = require('assert');

// // const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// // const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// // const getUser = (callback) => {
// //   const userToReturn = {
// //     firstName: "Ivan",
// //     lastName: "Ivanovich",
// //     nationality: "Russian"
// //   };
// //     return callback(userToReturn);
// // };
    
// // assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
// // assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser

// // const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// // const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// // const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// // const getUser = callback => {
// //   setTimeout(() => {
// //     const user = {
// //       firstName: "Ivan",
// //       lastName: "Ivanovich",
// //       nationality: "Russian",
// //     };
// //     console.log(callback(user));
// //   }, delay());
// // };

// // getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// // getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo

// const countryName = ({ name }) => console.log(`Returned country is ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//       const country = {
//         name: "Brazil",
//         hdi: 0.759,
//         currency: "Real",
//       };
//       onSuccess(country);
//     }
//     else {
//       const errorMessage = "Country could not be found";
//     }
    
//   }, delay());
// };

// // Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryName, printErrorMessage);

// // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryCurrency, printErrorMessage);

// const jsonInfo = `{
//   "muitasEmpresasUsam": [
//     "Google",
//     "Twitter",
//     "Facebook",
//     "etc..."
//   ],
//   "temVariasVantagens": [
//     "Legível",
//     "Fácil de usar",
//     "Leve",
//     "Popular",
//     "Versátil"
//   ],
//   "muitasLinguagensDaoSuporte": [
//     "Python",
//     "C",
//     "C++",
//     "Java",
//     "PHP"
//   ]
// }`;

// const usoJSONPorque = JSON.parse(jsonInfo);

// const corporationsList = document.getElementById('corporations-used-by');
// const advantagesList = document.getElementById('advantages');
// const languagesList = document.getElementById('languages-used-by');

// usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
//   const newLi = document.createElement('li');
//   newLi.innerText = empresa;
//   corporationsList.appendChild(newLi);
// });

// usoJSONPorque.temVariasVantagens.map((vantagens) => {
//   const newLi = document.createElement('li');
//   newLi.innerText = vantagens;
//   advantagesList.appendChild(newLi);
// });

// usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
//   const newLi = document.createElement('li');
//   newLi.innerText = linguagens;
//   languagesList.appendChild(newLi);
// });

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   setTimeout(() => console.log("Returned planet: ", mars), 4000); 
// };

// getPlanet(); // imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

 const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
// console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = () => {
 setTimeout(() => {
    console.log(`A temperatura atual de Marte é: ${getMarsTemperature()}º`);
}, messageDelay());

}
sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature())) // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo */

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const handlersSuccessOrError = (onSuccess, onError) => {

  const currentTemperature = getMarsTemperature();
  
  if (currentTemperature > 40) {
    return onError("Robot is busy")
  } else {
    return onSuccess(currentTemperature)
  }
}

const sendMarsTemperature = (onSuccess, handleError) => {
  setTimeout(() => handlersSuccessOrError(onSuccess, handleError), messageDelay());
};


sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);