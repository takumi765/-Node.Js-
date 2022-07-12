const fs = require('fs');

const main = function(input){
    input = input.trim().split('\n');
    let tmp1=input[0].trim().split(' ').map(n=>parseInt(n,10));
    let A=input[1].trim().split(' ').map(n=>parseInt(n,10));

    const N=tmp1[0];
    const S=tmp1[1];

    for(let i=0;i<((1<<N)-1);i++){
        let sum=0;
        //console.log(i);
        for(let j=0;j<N;j++){
            if((i&(1<<j)) != 0){
                sum+=A[j];
            }
        }
        if(sum===S){
            console.log('Yes');
            return 0;
        }
    }
    console.log('No');
    return 0;
}

main(fs.readFileSync('../txt/009.txt', 'utf8'));
//main(fs.readFileSync('/dev/stdin', 'utf8'));