//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/059.txt', 'utf8').split('\n');
const N = parseInt(input[0].trim());
if(N%4===0){
  console.log(6);
}else if(N%4===1){
  console.log(2);
}else if(N%4===2){
  console.log(4);
}else if(N%4===3){
  console.log(8);
}