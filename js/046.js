//let input=require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let input=require('fs').readFileSync('../txt/046.txt', 'utf8').split('\n');
let [[R, C], [sy, sx], [gy, gx], ...c]=input.slice(0,-1).map(input=>input.trim().split(' '));

R=parseInt(R);
C=parseInt(C);
sy=parseInt(sy);
sx=parseInt(sx);
gx=parseInt(gx);
gy=parseInt(gy);

c.forEach((n,i)=>{
    c[i]=n[0].split('');
});

let cost=new Array(R)
for(let i=0;i<R;i++){
    cost[i]=new Array(C).fill(0);
}

let que=new Array();
que.push([sy-1,sx-1]);
while(que.length>0){
    let point=que.shift();
    //console.log(que);
    if(cost[point[0]-1][point[1]]===0 && c[point[0]-1][point[1]]!='#'){
        cost[point[0]-1][point[1]]=cost[point[0]][point[1]]+1;
        que.push([point[0]-1, point[1]]);
        //console.log(c[point[0]-1][point[1]]);

    }
    if(cost[point[0]][point[1]-1]===0 && c[point[0]][point[1]-1]!='#'){
        cost[point[0]][point[1]-1]=cost[point[0]][point[1]]+1;
        que.push([point[0], point[1]-1]);
        //console.log([point[0], point[1]-1]);
    }
    if(cost[point[0]+1][point[1]]===0 && c[point[0]+1][point[1]]!='#'){
        cost[point[0]+1][point[1]]=cost[point[0]][point[1]]+1;
        que.push([point[0]+1, point[1]]);
        //console.log([point[0]+1, point[1]]);
    }
    if(cost[point[0]][point[1]+1]===0 && c[point[0]][point[1]+1]!='#'){
        cost[point[0]][point[1]+1]=cost[point[0]][point[1]]+1;
        que.push([point[0], point[1]+1]);
        //console.log([point[0], point[1]+1]);
    }
}
//console.log(cost);
console.log(cost[gy-1][gx-1]);
