//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/061.txt', 'utf8').split('\n');
const [[N]] = input.slice(0,-1).map(n=>n.trim().split(' ').map(BigInt));

let num=0n;
for(i=0n;(2n**i)<=N;i+=1n){
  num+=(2n**i);
  console.log(num);
}

if(N===num){
  console.log('Second');
}else{
  console.log('First');
}