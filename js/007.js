const fs = require('fs');

const main = function(input){
    input = input.trim().split(' ').map(n=>parseInt(n,10));
    const N=input[0];
    const X=input[1];
    const Y=input[2];

    var count=0;
    for(let i=0;i<=N;i++){
        if(i>=X || i>=Y){
            if(i%X===0 || i%Y===0){
                count++;
            }
        }
    }
    console.log(count);
}

main(fs.readFileSync('../txt/007.txt', 'utf8'));
//main(fs.readFileSync('/dev/stdin', 'utf8'));