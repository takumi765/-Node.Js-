const fs=require('fs');

function convolution(n,r){
    let m=1,l=1;
    for(let i=0;i<r;i++){
        m*=(n-i);
        l*=(r-i);
    }
    return m/l;
}

function Main(input){
    input=input.split('\n');
    const N=parseInt(input[0].trim())
    const A=input[1].trim().split(' ').map(n=>parseInt(n,10));

    let count= new Array(100000).fill(0);
    for(let i=0;i<N;i++){
        count[A[i]]++;
    }

    let ans=0,num=0;
    let num_500000 = 0;
    for(let i=0;i<N;i++){
        if(A[i]<100000/2 && count[100000-A[i]]>0){
            ans+=count[100000-A[i]];
        }else if(A[i]*2===100000){
            num_500000=i;
            num+=convolution(count[A[num_500000]],2);
        }
    }
    ans+=num/count[A[num_500000]];
    console.log(ans);
}

Main(fs.readFileSync('../txt/022.txt','utf8'));
//Main(fs.readFileSync('/dev/stdin','utf8'));