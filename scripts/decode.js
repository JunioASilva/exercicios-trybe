
const decode = (stringDecode) => {
    let arrayDecode = stringDecode.split('');
  
    for (let index in arrayDecode) {
      if (arrayDecode[index] === '1') {
        arrayDecode[index] = 'a';
      } else if (arrayDecode[index] === '2') {
        arrayDecode[index] = 'e';
      } else if (arrayDecode[index] === '3') {
        arrayDecode[index] = 'i';
      } else if (arrayDecode[index] === '4') {
        arrayDecode[index] = 'o';
      } else if (arrayDecode[index] === '5') {
        arrayDecode[index] = 'u';
      }
    }
    return arrayDecode.join('');
}
    module.exports = decode;
