const encode = (stringEncode) => {
    let arrayEncode = stringEncode.split('');
    
    for (let index in arrayEncode) {
      if (arrayEncode[index] === 'a') {
        arrayEncode[index] = '1';
      } else if (arrayEncode[index] === 'e') {
        arrayEncode[index] = '2';
      } else if (arrayEncode[index] === 'i') {
        arrayEncode[index] = '3';
      } else if (arrayEncode[index] === 'o') {
        arrayEncode[index] = '4';
      } else if (arrayEncode[index] === 'u') {
        arrayEncode[index] = '5';
      }
    }
    return arrayEncode.join('');
}
    module.exports = encode;