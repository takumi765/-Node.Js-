//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input = require('fs').readFileSync('../txt/032.txt', 'utf8').split('\n');
const [[N, X], ...[A]] = input.slice(0,-1).map(input=>input.trim().split(' ').map(Number));

// 数値のソートは関数が必要
A.sort(function(a, b){
    // 簡略化
    return (a - b)
});

function cond(l, r){
    if(r-l <= 1){
        if(A[r]===X || A[l]===X){
            return 1;
        }else{
            return -1;
        }
    }
    let mid = Math.floor((l+r)/2);
    if(A[mid]<X){
        return cond(mid,r);
    }else if(A[mid]>=X){
        return cond(l,mid);
    }
}

if(cond(0, N-1) === -1){
    console.log('No');
}else if(cond(0, N-1) === 1){
    console.log('Yes');
}