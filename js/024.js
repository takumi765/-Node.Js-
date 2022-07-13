const fs =require('fs');

let Main = function (input){
    input = input.split('\n');
    const N=input[0].trim();
    let TEST = new Array(N);
    for(let i=0;i<N;i++){
        TEST[i]=input[i+1].trim().split(' ').map(n=>parseInt(n,10));
    }
    //console.log(TEST);
    let E=0;
    for(let i=0;i<N;i++){
        E+=(TEST[i][1]/TEST[i][0]);
    }
    console.log(E);
}

Main(fs.readFileSync('../txt/024.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));