const fs = require('fs');

function Main(input){
    const N = parseInt(input.trim());

    flag=0;
    for(let i=2;i<=Math.sqrt(N);i++){
        if(N%i===0){
            flag=1;
        }
    }
    if(flag===0){
        console.log('Yes');
    }else{
        console.log('No');
    }
}

Main(fs.readFileSync('../txt/012.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));