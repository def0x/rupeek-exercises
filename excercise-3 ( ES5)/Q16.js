sumArray = (arr,fn) => {
    let res = 0;
    for(let i=0;i<arr.length;++i)
        res += fn(arr[i]);
    return res;
}

square = x => Math.pow(x,2);
cube = x => Math.pow(x,3);

console.log( sumArray( [ 1, 2, 3 ], square ) ); // prints 14
console.log( sumArray( [ 1, 2, 3 ], cube ) ); // prints 36