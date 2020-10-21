sumSquares = arr => {
    let res = 0;
    for(let i=0;i<arr.length;++i){
        res += Math.pow(arr[i],2);
    }
    return res;
}

let result = sumSquares([1,2,3,4]);
console.log(result);