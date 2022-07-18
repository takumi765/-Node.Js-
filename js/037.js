//不完全

let input = require('fs').readFileSync('../txt/037.txt', 'utf8').split('\n');
//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [...A] = input.slice(0, -1).map(input=> input.trim().split(' ').map(Number));

let vector12 = [A[1][0]-A[0][0], A[1][1]-A[0][1]];
let vector13 = [A[2][0]-A[0][0], A[2][1]-A[0][1]];
let vector14 = [A[3][0]-A[0][0], A[3][1]-A[0][1]];

let vector21 = [A[0][0]-A[1][0], A[0][1]-A[1][1]];
let vector23 = [A[2][0]-A[1][0], A[2][1]-A[1][1]];
let vector24 = [A[3][0]-A[1][0], A[3][1]-A[1][1]];

function f(A,B){
    return Math.acos((A[0]*B[0]+A[1]*B[1])/(Math.sqrt(A[0]**2+A[1]**2)*Math.sqrt(B[0]**2+B[1]**2)));
}
console.log((f(vector12,vector13)+f(vector12,vector14))*180/Math.PI);
console.log((f(vector21,vector23)+f(vector21,vector24))*180/Math.PI);

if((f(vector12,vector13)+f(vector12,vector14))*180/Math.PI>180){
    console.log('No');
}else if((f(vector21,vector23)+f(vector21,vector24))*180/Math.PI>180){
    console.log('No');
}else{
    console.log('Yes');
}
