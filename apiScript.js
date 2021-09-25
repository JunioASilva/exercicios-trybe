// apiScript.js  

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' } };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke
    )
    
    const promise = new Promise((resolve, reject) => {
      let sumHighNumber = 0;
      const newArray = [1, 12, 21, 27, 20, 11, 10, 48, 35, 30];
      newArray.forEach((index) => {
        const highNumber = Math.pow(index, 2);
        sumHighNumber = sumHighNumber + highNumber;
        })
        if (sumHighNumber < 8000) {
          resolve(sumHighNumber);
       } 
         reject()
       
    });
    promise
    .then((sumHighNumber) => console.log([2, 3, 5, 10].map((number) => sumHighNumber / number)))
    .then(array => array.reduce((number, acc ) => number + acc))
    .catch(() => console.log('é mais de 8 mil essa Promise'));
};

window.onload = () => fetchJoke();