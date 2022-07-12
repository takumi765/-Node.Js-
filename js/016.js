const fs = require('fs');

function euclid(max,min){
    if(max%min===0n){
        return min;
    }else{
        return euclid(min,max%min);
    }
}

function Main(input){
    input = input.split('\n');
    const N=parseInt(input[0].trim());
    var tmp = input[1].trim().split(' ').map(n=>BigInt(n));//整数の値が大きすぎるからBigIntじゃないとだめ

    var max,min,gcd;
    gcd=tmp[0];

    for(let i=1;i<N;i++){
        if(tmp[i]>=gcd){
            max=tmp[i];
            min=gcd;
        }else{
            max=gcd;
            min=tmp[i];
        }
        gcd = euclid(max,min);
    }
    console.log(gcd.toString(10));//そのままだとBigIntとして扱われて〇nと出力されるから
}

Main(fs.readFileSync('../txt/016.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));