const fs = require('fs');

function Main(input){
    const N = parseInt(input.trim());

    var flag,num=0;
    var A=new Array();
    for(let i=2;i<=N;i++){
        flag=0;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                flag=1;
            }
        }
        if(flag===0){
            A[num++]=i;
        }
    }
    //console.log(A);
    for(let i=0;i<A.length;i++){
        process.stdout.write(A[i].toString());
        if(i!==(A.length-1)){
            process.stdout.write(" ");
        }else{
            process.stdout.write("\n");
        }
    }
}

Main(fs.readFileSync('../txt/011.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));