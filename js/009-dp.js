//let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let input = require('fs').readFileSync('../txt/009-dp.txt', 'utf8');
input = input.split('\n');

let [[N, S], A] = input.slice(0,-1).map(input=>input.trim().split(' ').map(Number));
let value = [...Array(N+1)].map(()=>Array(S+1).fill(false));
value[0][0]=true;

//console.log(A);
A.forEach((ai,i) => {
    for(let j=0;j<=S;j++){
        value[i+1][j]=(j>=ai && value[i][j-ai]) ? true : value[i][j];
    }
});

if(value[N][S]===false){
    console.log('No');
}else{
    console.log('Yes');
}