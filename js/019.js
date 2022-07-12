const fs=require('fs');

function convolution(n,r){
    let ans=1;
    let N=n,R=r;
    for(let i=r;i>=1;i--){
        ans*=(N--/R--);
    }
    return ans;
}

function Main(input){
    input=input.split('\n');
    const N=parseInt(input[0].trim());
    const A=input[1].trim().split(' ').map(n=>parseInt(n,10));

    let c1=0,c2=0,c3=0;
    for(let i=0;i<A.length;i++){
        if(A[i]===1){
            c1++;
        }else if(A[i]===2){
            c2++;
        }else if(A[i]===3){
            c3++;
        }
    }
    let count=0;
    count=convolution(c1,2)+convolution(c2,2)+convolution(c3,2);
    console.log(count);
}

Main(fs.readFileSync('../txt/019.txt','utf8'));
//Main(fs.readFileSync('/dev/stdin','utf8'));