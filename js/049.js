//const input=require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const input=require('fs').readFileSync('../txt/049.txt', 'utf8').split('\n');
const N=parseInt(input[0].trim());
const M=10**9+7;

function fibonacci(num){
    let A=new Array();
    A[1]=1,A[2]=1;
    for(let i=3;i<=num;i++){
        A[i]=(A[i-2] + A[i-1]) % M;
    }
    return A[num];
}

console.log(fibonacci(N));