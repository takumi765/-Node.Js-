let input = require('fs').readFileSync('../txt/036.txt', 'utf8').split('\n');
//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [[A,B,H,M]] = input.slice(0, -1).map(input=> input.trim().split(' ').map(Number));

let theta_A = -(H*30+M*0.5)/180*Math.PI;//短針は長針とともに少しづつ動いていることに注意！
let theta_B = -M*6/180*Math.PI;
//console.log(theta_A/Math.PI*180);
//console.log(theta_B/Math.PI*180);

//複素数を用いる
let vectorA = [A*Math.cos(Math.PI/2+theta_A), A*Math.sin(Math.PI/2+theta_A)];
let vectorB = [B*Math.cos(Math.PI/2+theta_B), B*Math.sin(Math.PI/2+theta_B)];
//console.log(vectorA);
//console.log(vectorB);

let vectorC = [vectorA[0]-vectorB[0], vectorA[1]-vectorB[1]];
//console.log(vectorC);
let L = Math.sqrt(vectorC[0]**2+vectorC[1]**2);
console.log(L);