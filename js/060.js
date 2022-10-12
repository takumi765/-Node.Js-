//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/060.txt', 'utf8').split('\n');
const N = parseInt(input[0].trim());
if(N%4===0){
  console.log('Second');
}else{
  console.log('First');
}