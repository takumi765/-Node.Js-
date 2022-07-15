const fs =require('fs');

let Main = function (input){
    input = input.split('\n');
    const N = parseInt(input[0].trim());
    //console.log(N);

    let pattern = new Array();
    for(let i=0;i<=N;i++){
        if(i===0 || i===1){
            pattern[i]=1;
        }else if(i){
            pattern[i] = pattern[i-1]+pattern[i-2];
        }
    }
    console.log(pattern[N]);
}

Main(fs.readFileSync('../txt/029.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));