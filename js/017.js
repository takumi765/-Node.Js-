const fs = require('fs');

function euclid(A,B){
    let max,min;
    if(A>=B){
        max=A;
        min=B;
    }else{
        max=B;
        min=A;
    }

    if(max%min===0n){
        return min;
    }else{
        return euclid(min,max%min);
    }
}

function LCM(A,B){
    return (A/euclid(A,B))*B;
}

function Main(input){
    input = input.split('\n');
    const N=parseInt(input[0].trim());
    var tmp = input[1].trim().split(' ').map(n=>BigInt(n));//整数の値が大きすぎるからBigIntじゃないとだめ

    var R,ans=1n;
    R=LCM(tmp[0],tmp[1]);

    for(let i=2;i<N;i++){
        R = LCM(R,tmp[i]);
    }

    console.log(R.toString(10));//そのままだとBigIntとして扱われてOnと出力されるから
}

Main(fs.readFileSync('../txt/017.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));