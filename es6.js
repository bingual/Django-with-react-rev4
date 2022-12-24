const base_10 = (fn) => (x, y) => fn(x, y) + 10;

let mysum = (x, y) => x + y;
mysum = base_10(mysum);
console.log(mysum(1, 2));
