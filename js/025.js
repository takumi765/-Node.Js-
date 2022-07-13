const fs =require('fs');

let Main = function (input){
    input = input.split('\n');
    const N=input[0].trim();
    const A=input[1].trim().split(' ').map(n=>parseInt(n,10));
    const B=input[2].trim().split(' ').map(n=>parseInt(n,10));

    let E=0;
    for(let i=0;i<N;i++){
        E+=(1/3)*A[i]+(2/3)*B[i];
    }
    console.log(E);
}

Main(fs.readFileSync('../txt/025.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));