//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/058.txt', 'utf8').split('\n');
const [[N, X, Y]] = input.slice(0,-1).map(n=> n.trim().split(' ').map(Number))

if(N%2===(Math.abs(X)+Math.abs(Y))%2 && N >= (Math.abs(X)+Math.abs(Y))){
  console.log('Yes');
}else{
  console.log('No');
}