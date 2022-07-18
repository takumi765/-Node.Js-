//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/035.txt', 'utf8').split('\n');

const [A,B]=input.slice(0,-1).map(input=>input.trim().split(' ').map(Number));

function distance(x,y){
    return Math.sqrt(x**2+y**2);
}

let L = distance((A[0]-B[0]),A[1]-B[1]);
let R1 = Math.abs(A[2]-B[2]);
let R2 = Math.abs(A[2]+B[2]);

if(L<R1){
    console.log(1);
}else if(L===R1){
    console.log(2);
}else if(R1<L && L<R2){
    console.log(3);
}else if(R2===L){
    console.log(4);
}else if(R2<L){
    console.log(5);
}