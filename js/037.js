//不完全

//BigInt型にしないと通らない。ハマると時間をかなりとられるので気を付ける。
let input = require('fs').readFileSync('../txt/037.txt', 'utf8').split('\n');
//let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [...A] = input.slice(0, -1).map(input=> input.trim().split(' ').map(n=>BigInt(n)));

let vector12 = [A[1][0]-A[0][0], A[1][1]-A[0][1]];
let vector13 = [A[2][0]-A[0][0], A[2][1]-A[0][1]];
let vector14 = [A[3][0]-A[0][0], A[3][1]-A[0][1]];

let vector31 = [A[0][0]-A[2][0], A[0][1]-A[2][1]];
let vector32 = [A[1][0]-A[2][0], A[1][1]-A[2][1]];
let vector34 = [A[3][0]-A[2][0], A[3][1]-A[2][1]];

function cross(A,B){
    return A[0]*B[1]-A[1]*B[0];
}

function BigMax(x,y){
    return x>y?x:y;
}
function BigMin(x,y){
    return x>y?y:x;
}

let ans1 = cross(vector12, vector13);
let ans2 = cross(vector12, vector14);
let ans3 = cross(vector34, vector32);
let ans4 = cross(vector34, vector31);

if(ans1===0n && ans2===0n && ans3===0n && ans4===0n){
    if(A[0]>A[1]){
        let tmp=A[0];
        A[0]=A[1];
        A[1]=tmp;
    }else if(A[2]>A[3]){
        let tmp = A[2];
        A[2]=A[3];
        A[3]=tmp;
    }
    if(BigMax(A[0][0],A[2][0])<=BigMin(A[1][0],A[3][0]) && BigMax(A[0][1],A[2][1])<=BigMin(A[1][1],A[3][1])){
        console.log('Yes');
    }else{
        console.log('No');
    }
}else{
    let IsAB = false;
    let IsCD = false;
    if(ans1>=0n && ans2<=0n){
        IsAB=true;
    }
    if(ans1<=0n && ans2>=0n){
        IsAB=true;
    }
    if(ans3>=0n && ans4<=0n){
        IsCD=true;
    }
    if(ans3<=0n && ans4>=0n){
        IsCD=true;
    }
    
    if(IsAB===true && IsCD===true){
        console.log('Yes');
    }else{
        console.log('No');
    }
}