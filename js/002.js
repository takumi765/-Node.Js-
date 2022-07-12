const fs = require('fs');

const main = function(input){
    input=input.trim().split(' ').map(n=>parseInt(n,10));
    //console.log(input);
    let sum = input.reduce((total,element)=>total+element,0);
    console.log(sum);
}

main(fs.readFileSync('../txt/002.txt', 'utf8'));
//main(fs.readFileSync('/dev/stdin', 'utf8'));