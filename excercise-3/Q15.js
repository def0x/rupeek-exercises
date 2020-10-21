transform = x => Math.pow(x,2);

sum = (x,y,transform) => transform(x) + transform(y);

console.log(sum(2,3,transform));