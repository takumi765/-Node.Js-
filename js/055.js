//let input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n');
let input = require('fs').readFileSync('../txt/055.txt', 'utf-8').split('\n');
const [[N]] = input.slice(0,-1).map(n=>n.trim().split(' ').map(BigInt));
const mod = 1000000007n;
const A=[[2n,1n],[1n,0n]];

function multiple(A,B){
    let C = [...Array(2)].map(()=> new Array(2));
    C[0][0]=(A[0][0]*B[0][0]%mod+A[0][1]*B[1][0]%mod)%mod;
    C[0][1]=(A[0][0]*B[0][1]%mod+A[0][1]*B[1][1]%mod)%mod;
    C[1][0]=(A[1][0]*B[0][0]%mod+A[1][1]*B[1][0]%mod)%mod;
    C[1][1]=(A[1][0]*B[0][1]%mod+A[1][1]*B[1][1]%mod)%mod;
    return C;
}

function div(A){
    A.forEach((element) => {
        element[0]%=mod;
        element[1]%=mod;
    });
    return A;
}

function modpow(A, N){
    let a=[[1n,0n],[0n,1n]], p=A;
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

let ans=[[1n,1n],[1n,0n]];
if(N==1){
    
}else{
    ans= multiple(ans,modpow(A,N-2n));
}
console.log(Number(ans[0][0]%mod));