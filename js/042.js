//const N =require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map(BigInt)[0];
const N =require('fs').readFileSync('../txt/042.txt', 'utf8').split('\n').map(BigInt)[0];
let F=new Array(Number(N)+1).fill(0);

for(let i=1;i<=Number(N);i++){
    for(let j=i;j<=Number(N);j+=i){
        F[j]+=1;
    }
}

let sum=0;
for(let i=1;i<=N;i++){
    sum+=i*F[i];
}
console.log(sum);