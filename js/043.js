//let input=require('fs').readFileSync('/dev/stdin','utf8').split('\n');
let input=require('fs').readFileSync('../txt/043.txt','utf8').split('\n');
const [[N,M],...X]=input.slice(0,-1).map(input=>input.trim().split(' ').map(Number));

let G=[...Array(N+1)].map(() => Array().fill(0));

for(let i=0;i<M;i++){
    G[X[i][0]].push(X[i][1]);
    G[X[i][1]].push(X[i][0]);
}
let stack=new Array();
let past=new Array(N+1).fill(0);
past[0]++;past[1]++;

let num=1;
for(let i=1;i<=N;i++){
    for(let j=0;j<G[num].length;j++){
        if(past[G[num][j]]===0){//たどったことが無ければ
            stack.push(G[num][j]);
            past[G[num][j]]++;
        }
    }
    if(stack.length===0){
        break;
    }
    num=stack.pop();
}

if(past.indexOf(0)===-1){
    console.log('The graph is connected.');
}else{
    console.log('The graph is not connected.');
}