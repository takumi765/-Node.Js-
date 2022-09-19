//let input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n');
let input = require('fs').readFileSync('../txt/057.txt', 'utf-8').split('\n');
const [[K, N]] = input.slice(0,-1).map(n=>n.trim().split(' ').map(BigInt));
console.log(K);
const mod = 1000000007n;
const A=[[1n,1n],[1n,0n]];

function multiple(A,B){
    let C = [...Array(Number(K))].map(()=> new Array(Number(K)).fill(0n));
    for(let i=0;i<K;i++){
        for(let j=0;j<K;j++){
            for(let k=0;k<K;k++){
                C[i][j]+=A[i][k]*B[k][j]%mod;
            }
        }
    }
    return C;
}

function div(A){
    A.forEach((element) => {
        for(let i=0;i<element.length;i++){
            element[i]%=mod;
        }
    });
    return A;
}

function modpow(A, N){
    let a=[...Array(Number(K))].map(()=>new Array(Number(K)).fill(0n));
    if(K==2){
        a=[[1n,0n],[0n,1n]]
    }else if(K==3){
        a=[[1n,0n,0n],[0n,1n,0n],[0n,0n,1n]];
    }
    let p=A;
    for(let i=0n;i<60;i++){
        if((N & (1n<<i)) != 0n){
            a=multiple(a,p);
            a=div(a);
        }
        p=multiple(p,p);
        p=div(p);
    }
    return a;
}

let ans;
if(K==2){
    let X=[[1n,1n],[1n,0n]];
    if(N==1){
        ans=X[0][0];
    }else{
        X= multiple(ans,modpow(A,N-1n));
        ans=X[0][0];
    }
}else if(K==3){
    ans = modpow(3n,K/2n);
}

console.log(Number(ans%mod));