const fs = require('fs');

function Fact(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            process.stdout.write(i+" ");
            Fact(num/i);
            return;
        }
    }
    process.stdout.write(num+'\n');
}

function Main(input){
    const N = parseInt(input.trim());

    Fact(N);
}

Main(fs.readFileSync('../txt/014.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));