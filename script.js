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

// const top3Albums = {
//     1: 'Nightfall in Middle-Earth',
//     2: 'Imaginations from the Other Side',
//     3: 'Somewhere Far Beyond',
//     };
//     console.log(Object.entries(top3Albums))
    
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const address = 'adress';
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const name = order['name'];
    const phoneNumber = order['phoneNumber'];
    const street = order.address.street;
    const number = order.address.number;
    const apartment = order.address.apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº${number}, AP: ${apartment}`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const newName = order.name = 'Luiz Silva';
    const pizza = Object.keys(order.order.pizza)
    const coke = order.order.drinks.coke.type
    const newValue = order.payment.total = 50

    console.log(`Olà ${newName}, o total do seu pedido de ${pizza } e ${coke} é R$ ${newValue}.`)
  }
  
  orderModifier(order);
