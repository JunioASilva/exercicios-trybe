const techList = (arrayTech, name) => {
    let arrayReturn = [];
    arrayTech = arrayTech.sort();
    if (arrayTech.length === 0) {
      return 'Vazio!';
    }
    for (let index of arrayTech) {
      arrayReturn.push({ tech: index, name: name });
    }
    return arrayReturn;
}
  module.exports = techList;