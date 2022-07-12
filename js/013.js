const fs = require('fs');

function Main(input){
    const N = parseInt(input.trim());

    for(let i=0;i<Math.sqrt(N);i++){
        if(N%i===0){
            console.log(i);
            console.log(N/i);
        }
    }
}

Main(fs.readFileSync('../txt/013.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));