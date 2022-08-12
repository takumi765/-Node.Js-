//const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
const input = require("fs").readFileSync("../txt/047.txt", "utf8").split("\n");
const [[N,M], ...X] = input.slice(0, -1).map(n => n.split(" ").map(Number));
const colors = Array(N).fill(0);
const graph = colors.map(() => []);

for (const [a, b] of X) {
  graph[a - 1].push(b - 1);
  graph[b - 1].push(a - 1);
}

function ans() {
  while (colors.includes(0)) {
    const s = colors.indexOf(0);
    const stack = [s];
    colors[s] = 1;

    while (stack.length) {
      const pos = stack.pop();

      for (const i of graph[pos]) {
        if (colors[i] === colors[pos]) {
          return "No";
        }

        if (!colors[i]) {
          colors[i] = -colors[pos];
          stack.push(i);
        }
      }
    }
  }
  return "Yes";
};

console.log(ans());
