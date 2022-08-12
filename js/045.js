//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/043.txt', 'utf8').split('\n');

const [[N,M],...X]=input.slice(0,-1).map(input=>input.trim().split(' ').map(Number));
let G=[...Array(N+1)].map(() => Array().fill(0));


for(let i=0;i<M;i++){
    G[X[i][0]].push(X[i][1]);
    G[X[i][1]].push(X[i][0]);
}
let ans=0;
for(let i=0;i<=N;i++){
    let cnt=0;
    for(let j=0;j<G[i].length;j++){
        if(i>G[i][j]){
            cnt++;
        }
    }
    if(cnt===1){
        ans++;
    }
}

console.log(ans);