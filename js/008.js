const fs = require('fs');

function Main(input){
    input = input.trim().split(' ').map(n=>parseInt(n,10));
    const N=input[0];
    const S=input[1];

    let count=0;
    for(let i=1;i<=N;i++){
        for(let j=1;j<=N;j++){
            if(i+j<=S){
                count++;
            }
        }
    }
    console.log(count);
}

Main(fs.readFileSync('../txt/008.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));