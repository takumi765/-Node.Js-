const fs = require('fs');

const main = function(input){
    input = input.trim().split(' ').map(n=>parseInt(n,10));
    let total = input.reduce((sum,element)=>sum*element,1);
    console.log(total);
}

main(fs.readFileSync('../txt/004.txt', 'utf8'));
//main(fs.readFileSync('/dev/stdin', 'utf8'));