let input = require('fs').readFileSync('../txt/031.txt', 'utf8').split('\n');
//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [N, A] = input.slice(0,-1).map(input=>input.trim().split(' ').map(Number));

let dp1=new Array(N);
let dp2=new Array(N);
dp1[0]=0;dp2[0]=0;

for(let i=1;i<=N;i++){
    dp1[i] = dp2[i-1]+A[i-1];
    dp2[i] = Math.max(dp1[i-1],dp2[i-1]);
}

console.log(dp2[N]);