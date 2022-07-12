const fs = require('fs');

function euclid(max,min){
    let num;
    if(max%min===0){
        return min;
    }else{
        num=euclid(min,max%min);
    }
    return num;
}

function Main(input){
    input = input.split('\n');
    var tmp = input[0].trim().split(' ').map(n=>parseInt(n,10));
    const A=tmp[0];
    const B=tmp[1];
    //console.log(A+","+B);

    let max,min;
    if(A>=B){
        max=A;
        min=B;
    }else{
        max=B;
        min=A;
    }

    const gcd = euclid(max,min);
    console.log(gcd);
}

Main(fs.readFileSync('../txt/015.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));