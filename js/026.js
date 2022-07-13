const fs =require('fs');

let Main = function (input){
    input = input.split('\n');
    const N=input[0].trim();
    
    let E=0;
    for(let i=N;i>0;i--){
        E+= N/i;
    }
    console.log(E);
}

Main(fs.readFileSync('../txt/026.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));