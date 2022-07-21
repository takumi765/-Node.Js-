let input = require('fs').readFileSync('../txt/038.txt', 'utf8').split('\n');
//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [[N, Q],A, ...X] = input.slice(0, -1).map(input=> input.trim().split(' ').map(Number));

let B=new Array(N);
B[0]=0;
A.forEach((a,i)=>{
    B[i+1]=a+B[i];
});

for (let i=0;i<Q;i++){
    console.log(B[X[i][1]]-B[X[i][0]-1]);
}