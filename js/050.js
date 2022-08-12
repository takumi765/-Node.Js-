//const input=require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const input=require('fs').readFileSync('../txt/050.txt', 'utf8').split('\n');
const [[a, b]]=input.slice(0,-1).map(input=>input.trim().split(' ').map(BigInt));
const M=1000000007n;

let ans=1n;
let p=a;
for(let i=0n;i<30;i++){
    if((b & (1n<<i))!==0n){
        ans*=p
        ans%=M;
    }
    p*=p;
    p%=M;
}
console.log(Number(ans));