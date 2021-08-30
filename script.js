// let object = {
//     mesa: 'inclinada',
//     caderno: 'desenho'
// };

// let newKey = 'caneta';
// const caneta = 'azul';
// object[newKey] = caneta;

// // const materialNovo = `${object.newKey} ${object.caneta}`
// console.log(object)

// const object = new Object ();

//     object.caneta = 'azul';
//     object.caderno = '10 matérias';
//     object.corretivo = 'branco';

//     console.log(object);

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     author: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
// //   for (const property in coolestTvShow) {
// //     console.log(property);
// //   }
//   console.log(Object.keys(coolestTvShow));

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };

//   const allObjects = (student) =>{
//       const arrayStudent = Object.keys(student);
//       for(index in arrayStudent) {
//           console.log(`${arrayStudent[index]}, Nivel ${student[arrayStudent[index]]}`)
//       }
//   };
//   console.log('Estudante 1');
//   allObjects(student1);

//   const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

//   console.log(Object.keys(coolestTvShow));

// const student = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkill: 'Ótimo',
//   };
  
//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }
  
//     return skills;
//   };
  
//   const listSkillsValuesWithValues = (student) => Object.values(student);
  
// //   Sem Object.values
//   console.log(listSkillsValuesWithFor(student));

//   console.log(listSkillsValuesWithValues(student));

// const países = {
//     França: 'Paris',
//     Brasil: 'Brasília',
//     Espanha: 'Madrid',
//     Portugal: 'Lisboa',
//   };
//   const pairKeyValue = Object.entries(países);
//   console.log(pairKeyValue);

// for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

//   console.log(Object.pais);

const top3Albums = {
    1: 'Nightfall in Middle-Earth',
    2: 'Imaginations from the Other Side',
    3: 'Somewhere Far Beyond',
    };
    console.log(Object.entries(top3Albums))
    
