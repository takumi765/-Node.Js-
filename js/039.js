let input = require('fs').readFileSync('../txt/039.txt', 'utf8').split('\n');
//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [[N, Q], ...T] = input.slice(0, -1).map(input=> input.trim().split(' ').map(Number));

let L = new Array();
let R = new Array();
let X = new Array();
for(let i=0;i<Q;i++){
    L[i]=T[i][0], R[i]=T[i][1], X[i]=T[i][2];
}

let A = new Array(N+1).fill(0);
for(let i=0;i<Q;i++){
    A[L[i]]+=X[i];
    A[R[i]+1]-=X[i];
    console.log(A);
}
for(let i=2;i<=N;i++){
    if(A[i]>0){
        process.stdout.write('<');
    }else if(A[i]<0){
        process.stdout.write('>');
    }else{
        process.stdout.write('=');
    }
}
console.log('');