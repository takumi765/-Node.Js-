const fs = require('fs');

function Main(input){
  var tmp = parseInt(input.trim());
  const N=tmp;
  console.log(5+N);
}

Main(fs.readFileSync('../txt/001.txt', 'utf8'));
//Main(fs.readFileSync('/dev/stdin', "utf8"));