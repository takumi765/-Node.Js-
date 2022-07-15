const fs =require('fs');

let Main = function (input){
    input = input.split('\n');
    const N = parseInt(input[0].trim());
    const h = input[1].trim().split(' ').map(n=>parseInt(n,10));
    
    let tiredness = new Array();
    for(i=0;i<N;i++){
        if(i===0){
            tiredness[i]=0;
        }else if(i===1){
            tiredness[i]=Math.abs(h[i]-h[i-1]);
        }else{
            tiredness[i]=Math.min(tiredness[i-1]+Math.abs(h[i]-h[i-1]),tiredness[i-2]+Math.abs(h[i]-h[i-2]));
        }
    }
    console.log(tiredness[i-1]);
}

Main(fs.readFileSync('../txt/028.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));