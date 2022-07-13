const fs = require('fs');

let expectation = function(E){
    let ans = 0;
    for(let i=0;i<E.length;i++){
        ans += E[i]
    }
    return ans/E.length;
}

function Main(input){
    input = input.split('\n');
    const N = parseInt(input[0], 10);
    let B = input[1].trim().split(' ').map(n=>parseInt(n, 10));
    let R = input[2].trim().split(' ').map(n=>parseInt(n, 10));

    console.log(expectation(B)+expectation(R));
}

Main(fs.readFileSync('../txt/023.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', utf8));