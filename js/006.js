const fs = require('fs');

const main = function(input){
    input=parseInt(input,10);
    console.log(2*input+3)
}

main(fs.readFileSync('../txt/006.txt', 'utf8'));
//main(fs.readFileSync('/dev/stdin', 'utf8'));