const fs=require('fs');

let N;
let A = new Array();
let B = new Array();

let merge = function (l, r){
    if((r-l) === 1){
        return;
    }

    let pivot = Math.floor((r+l)/2);
    merge(l, pivot);//・・・①
    merge(pivot, r);//・・・②

    let c1=l, c2=pivot, cnt=0;
    while(c1 !== pivot || c2 !== r){
        if(c1 === pivot){
            //①の配列の要素が無い
            B[cnt++] = A[c2++];
        }else if(c2 === r){
            //②の要素がない
            for(;c1<pivot;c1++){
                B[cnt++]=A[c1];
            }
        }else{
            if(A[c1] <= A[c2]){
                B[cnt++] = A[c1++];
            }else{
                B[cnt++] = A[c2++];
            }
        }
    }
    for(let i=0;i<cnt;i++){
        A[i+l] = B[i];
    }
}

function Main(input){
    input=input.split('\n');
    N = parseInt(input[0].trim());
    A = input[1].trim().split(' ').map(n=>parseInt(n,10));

    //マージソート
    merge(0, A.length);

    for(let i=0;i<B.length;i++){
        if(i<B.length-1){
            process.stdout.write(B[i]+' ');
        }else{
            process.stdout.write(B[i]+'\n');
        }
    }
}

Main(fs.readFileSync('../txt/027.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', 'utf8'));