//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/054.txt', 'utf8').split('\n');
let [[N]]=input.slice(0,-1).map(n=>n.trim().split(' ').map(BigInt));
const mod=1000000000n;

function multiple(A, B){
    let C=[...Array(2)].map(() => new Array(2));
    C[0][0]=(A[0][0]*B[0][0]%mod+A[0][1]*B[1][0]%mod)%mod;
    C[0][1]=(A[0][0]*B[0][1]%mod+A[0][1]*B[1][1]%mod)%mod;
    C[1][0]=(A[1][0]*B[0][0]%mod+A[1][1]*B[1][0]%mod)%mod;
    C[1][1]=(A[1][0]*B[0][1]%mod+A[1][1]*B[1][1]%mod)%mod;
    return C;
}

function div(A,num){
    A[0][0]%=num;
    A[1][0]%=num;
    A[0][1]%=num;
    A[1][1]%=num;
    return A;
}

function modpow(a, b){
    let ans = [[1n,0n],[0n,1n]], p = a;
    for(let i=0n; i<=60; i++){
        if((b & (1n<<i)) != 0){
            ans = multiple(ans,p);
            ans = div(ans,mod);
        }
        p = multiple(p,p);
        p = div(p,mod);
    }
    return ans;
}

let A=[...Array(2)].map(() => new Array(2));
A[0][0]=1n, A[0][1]=1n, A[1][0]=1n, A[1][1]=0n;
let ans;
let X=A;
//遅い　O(N)
/* for(let i=1;i<N-1n;i++){
    X=multiple(X,A);
} */

//速い　O(logN)
X=multiple(X,modpow(A,N-2n));
ans=X[0][0]%mod;
console.log(Number(ans));