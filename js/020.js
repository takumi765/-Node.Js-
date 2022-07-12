const fs=require('fs');

function Main(input){
    input=input.split('\n');
    const N=parseInt(input[0].trim());
    const A=input[1].trim().split(' ').map(n=>parseInt(n,10));

    let count=0, num;
    for(let i=0;i<A.length;i++){
        for(let j=i+1;j<A.length;j++){
            for(let k=j+1;k<A.length;k++){
                for(let l=k+1;l<A.length;l++){
                    for(let m=l+1;m<A.length;m++){
                        num=A[i]+A[j]+A[k]+A[l]+A[m];
                        if(num===1000){
                            count++;
                        }
                    }
                }
            }
        }
    }
    console.log(count);
}

Main(fs.readFileSync('../txt/020.txt','utf8'));
//Main(fs.readFileSync('/dev/stdin','utf8'));