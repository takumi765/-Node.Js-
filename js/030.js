const fs =require('fs');

let Main = function (input){
    input = input.split('\n');
    let [[N,W], ...products] = input.slice(0,-1).map(input=>input.split(' ').map(Number));

    let value = [...Array(N+1)].map(() => Array(W+1).fill(-Infinity));
    value[0][0]=0;
    
    products.forEach(([wi, vi], i) => {
        for(let j=0;j<=W;j++){
            value[i+1][j] = (j>=wi) ? Math.max(value[i][j-wi]+vi, value[i][j]) : value[i][j];
        }
    });

    
    console.log(Math.max(...value[value.length-1]));
}

Main(fs.readFileSync('../txt/030.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));