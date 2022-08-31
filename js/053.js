//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/053.txt', 'utf8').split('\n');
let [[N]]=input.slice(0,-1).map(n=>n.trim().split(' ').map(BigInt));

const mod=1000000007n;
const r=4n;

function modpow(a,b){
    let ans=1n, p=a;
    for(let i=0n;i<=60;i++){
        if((b & (1n<<i)) != 0){
            ans*=p;
            ans%=mod;
        }
        p*=p;
        p%=mod;
    }
    return ans;
}

function division(a,b){
    return (a*modpow(b,mod-2n))%mod;
}

function touhi(R){
    return division(R-1n,r-1n);
}

let fact = modpow(r,N+1n);
console.log(Number(touhi(fact%mod)));