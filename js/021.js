const fs=require('fs');

function convolution(n,r){
    let m=1,l=1;
    for(let i=0;i<r;i++){
        m*=(n-i);
        l*=(r-i);
    }
    return m/l;
}

function Main(input){
    input=input.split('\n');
    const A=input[0].trim().split(' ').map(n=>parseInt(n,10));

    console.log(convolution(A[0],A[1]));
}

Main(fs.readFileSync('../txt/021.txt','utf8'));
//Main(fs.readFileSync('/dev/stdin','utf8'));