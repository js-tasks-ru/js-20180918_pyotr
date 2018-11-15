'use strict';

var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
function getMinMax(string) {
  
  string +=' ';
  let arr = [];
  let acc = '';
  // let finalArr = [];
  let obj = {min:true, max:true};
  
  for (let i = 0; i < string.length; i++){
    if ( '0' <= string[i] && string[i] <= '9' ||
                string[i] == '.'              ||
                string[i] == '-'){
      acc += string[i];
    } else if (isNaN( parseInt(string[i], 10) ) && acc !== '') {
      arr.push(acc);
      acc = '';
    }   
  }
  
  arr.sort((a,b) => +a - +b);
  return obj = {min:+arr[0], max:+arr[arr.length-1]};
  // finalArr = [+arr[0],+arr[arr.length-1]]
}
console.log(getMinMax(inputData)); // ожидается [-5.8, 73]

