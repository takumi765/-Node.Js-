//let input=require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input=require('fs').readFileSync('../txt/052.txt', 'utf8').split('\n');
const [[X,Y]]=input.slice(0,-1).map(n=>n.trim().split(' ').map(BigInt));

let num=0n;
let mod = 1000000007n

function modpow(b, n){
    let ans=1n, p=b;
    for(let i=0n;i<=30;i++){
        if((n & (1n<<i)) != 0){
            ans*=p;
            ans%=mod;
        }
        p*=p;
        p%=mod;
    }
    return ans;
}

function division(a, b){
    return (a*modpow(b, mod-2n))%mod;
}

function nCr(n, r){
    return division(fact[n], fact[r]*fact[n-r]%mod);
}

let s=(2n*Y-X);
let t=(2n*X-Y);

let fact = new Array();
fact[0]=fact[1]=1n;
for(let i=2n;i<=s+t;i++){
    fact[Number(i)]=i*fact[Number(i-1n)]%mod;
}

if(s<0n || t<0n){
    num=0n;
}else if(s%3n===0n && t%3n===0n){
    num = nCr((s+t)/3n, s/3n);
}

console.log(Number(num));