//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/033.txt', 'utf8').split('\n');
const [A,B,C] = input.slice(0,-1).map(input=>input.trim().split(' ').map(Number));

let L;
let vector1 = [A[0]-B[0], A[1]-B[1]];
let vector2 = [C[0]-B[0], C[1]-B[1]];
let vector3 = [A[0]-C[0], A[1]-C[1]];

if((vector1[0]*vector2[0]+vector1[1]*vector2[1])<0){
    L=Math.sqrt(vector1[0]**2+vector1[1]**2);
}else if((-vector2[0]*vector3[0]-vector2[1]*vector3[1])<0){
    L=Math.sqrt(vector3[0]**2+vector3[1]**2);
}else{

    L=Math.abs(vector1[0]*vector2[1]-vector1[1]*vector2[0])/Math.sqrt(vector2[0]**2+vector2[1]**2);
}


console.log(L);