const fs = require('fs');

const main = function(input){
    input=input.split('\n');
    let tmp = input[1].trim().split(' ').map(n => parseInt(n,10));
    const N = parseInt(input[0],10);
    let total = tmp.reduce((sum,element)=>sum+element,0);
    console.log(total);
}

main(fs.readFileSync('../txt/003.txt', 'utf8'));
//main(fs.readFileSync('/dev/stdin', 'utf8'));