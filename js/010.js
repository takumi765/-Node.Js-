const fs = require('fs');

function multiple(num){
    if(num===0){
        return 1;
    }
    return num*multiple(--num);
}

const main = function(input){
    input=parseInt(input.trim());
    let N = multiple(input);
    console.log(N);
}

main(fs.readFileSync('../txt/010.txt', 'utf8'));
//main(fs.readFileSync('/dev/stdin', 'utf8'));