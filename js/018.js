const fs=require('fs');

function Main(input){
    input=input.split('\n');
    const N=parseInt(input[0].trim());
    const A=input[1].trim().split(' ').map(n=>parseInt(n,10));

    //console.log(N+A);
    let c1=0,c2=0,c3=0,c4=0;
    for(let i=0;i<A.length;i++){
        if(A[i]===100){
            c1++;
        }else if(A[i]===200){
            c2++;
        }else if(A[i]===300){
            c3++;
        }else if(A[i]===400){
            c4++;
        }
    }
    let count=0;
    count=c1*c4+c2*c3;
    console.log(count);
}

Main(fs.readFileSync('../txt/018.txt','utf8'));
//Main(fs.readFileSync('/dev/stdin','utf8'));