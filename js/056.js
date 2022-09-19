//let input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n');
let input = require('fs').readFileSync('../txt/057.txt', 'utf-8').split('\n');
const [[K, N]] = input.slice(0,-1).map(n=>n.trim().split(' ').map(BigInt));
const mod = 1000000007n;
const A=[[1n,1n,1n],[1n,0n,0n],[0n,1n,0n]];

function multiple(A,B){
    let C=[...Array(3)].map(()=>Array(3).fill(0n));
    //console.log(C);
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            for(let k=0;k<3;k++){
                C[i][j]+=A[i][k]*B[k][j];
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
    let a=[[1n,0n,0n],[0n,1n,0n],[0n,0n,1n]], p=A;
    for(let i=0n;i<60;i++){
        if((N & (1n<<i)) != 0n){
            a=multiple(a,p);
            a=div(a);
        }
        p=multiple(p,p);
        p=div(p);
        //console.log(a);
    }
    return a;
}

let X=[2n,1n,1n];
let ans;
if(N==1 || N==2){
    ans=1n;
}else{
    let Y= div(modpow(A,N-3n));
    //console.log(Y);
    ans=(Y[0][0]*X[0]+Y[0][1]*X[1]+Y[0][2]*X[2])%mod;
}
console.log(Number(ans%mod));