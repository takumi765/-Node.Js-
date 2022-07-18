let input = require('fs').readFileSync('../txt/034.txt', 'utf8').split('\n');
//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [N, ...A] = input.slice(0, -1).map(input=> input.trim().split(' ').map(Number));

let L, min=Infinity;
for(let i=0;i<N;i++){
    for(let j=i+1;j<N;j++){
        L=Math.sqrt((A[i][0]-A[j][0])**2 + (A[i][1]-A[j][1])**2);
        min=Math.min(L,min);
    }
}
console.log(min);