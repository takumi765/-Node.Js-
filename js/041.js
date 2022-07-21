//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/041.txt', 'utf8').split('\n');
const [[T],[N], ...TIME] = input.slice(0,-1).map(input=>input.trim().split(' ').map(Number));

let L=new Array(N);
let R=new Array(N);

TIME.forEach(([li,ri],i)=>{
    L[i]=li;
    R[i]=ri;
});
// console.log(TIME);
// console.log(L);
// console.log(R);

let CNT=new Array(T+1).fill(0);
L.map(n=>CNT[n]++);
R.map(n=>CNT[n]--);
// console.log(CNT);

let sum=0;
for(let i=0;i<T;i++){
    sum+=CNT[i];
    console.log(sum);
}