//BigInt型にしないと通らない。ハマると時間をかなりとられるので気を付ける。
let input = require('fs').readFileSync('../txt/040.txt', 'utf8').split('\n');
//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [N,A,M,...B] = input.slice(0, -1).map(input=> input.trim().split(' ').map(n=>BigInt(n)));

let L=new Array(N).fill(0n);
for(let i=1;i<N;i++){
    L[i]=L[i-1]+A[i-1];
}
console.log(L);
console.log(B);
console.log(A);

let sum=0n;
for(let i=1;i<M;i++){
    if(L[B[i][0]-1n]>L[B[i-1][0]-1n]){
        sum+=L[B[i][0]-1n]-L[B[i-1][0]-1n];
        console.log(L[B[i][0]-1n]-L[B[i-1][0]-1n]);
    }else{
        sum+=L[B[i-1][0]-1n]-L[B[i][0]-1n];
        console.log(L[B[i-1][0]-1n]-L[B[i][0]-1n]);
    }
}
console.log(sum.toString());