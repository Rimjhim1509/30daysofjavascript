const graph = {
    A: ['B','C'],
    B:['D'],
    C:['E'],
    D:[],
    E:[]
};
let queue = ['A'];

while (queue.length > 0) {
  let current = queue.shift();
  console.log(current);

  for (let neighbor of graph[current]) {
    queue.push(neighbor);
  }
}
