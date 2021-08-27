                            //Exercicios Parte 1

            //Primeiro

//       const testingScope = escopo => {
//         if (escopo === true) {
//           let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//           ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
//           console.log(ifScope);
//         } else {
//           const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//           console.log(elseScope);
//         }
//       }

//       testingScope(true);

                //Segundo

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortArray = () => {
// oddsAndEvens[0] = 2,
// oddsAndEvens[1] = 3,
// oddsAndEvens[2] = 4,
// oddsAndEvens[3] = 7,
// oddsAndEvens[4] = 10
// oddsAndEvens[5] = 13

// return oddsAndEvens;
// }
// console.log(oddsAndEvens.sort(function(a,b){return a - b})); //usando o sort
// const sortedArray = sortArray();
// console.log(`Os numeros ${sortedArray} estão ordenados de forma crescente!`); 

                                //Exercicios Parte 2

                    //Primeiro

// const numeroFatorial = aaa => {
//     if (aaa > 1) {
//         return aaa * numeroFatorial(aaa - 1)
//     }
//     return aaa

// }
// console.log(numeroFatorial(5));

                    //concluindo de forma recursiva, usando operador ternary

// const fatorial = number => number > 1 ? number * fatorial(number -1) : 1;
// console.log(fatorial(5));

                    //Segundo

//  let longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu" // retorna 'aconteceu'

//  let big = " ";

//  longestWord.split(" ").forEach(word => {
//      if (word.trim().length > big.length) {
//          big = word.trim();
//      }
//  });
//  console.log(big);


