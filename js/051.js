function modpow(a, b, m) {
  let p = a, ans = 1n;
  for (let i = 0n; i < 30; i++) {
    if ((b & (1n << i)) != 0) {
      ans *= p;
      ans %= m;
    }
    p *= p;
    p %= m;
  }
  return ans;
}
function division(a, b, m) {
  return (a * modpow(b, m-2n, m)) % m;
}
 
function main(input) {
  input = input.trim().split('\n');
  let [x,y] = input[0].split(' ').map(val => BigInt(val));
 
  let mod = 1000000007n;
  let fact = new Array();
  function ncr(n, r) {
    return division(fact[n], fact[r]*fact[n-r]%mod, mod);
  }
  fact[0] = 1n;
  for (let i = 1n; i <= 200000; i++) {
    fact[i] = i*fact[i-1n]%mod;
  }
  console.log(Number(ncr(x+y, y)));
  
}
//main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../txt/051.txt", "utf8"));