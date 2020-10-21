sumArray = arr => {
    let res = 0;
    for(let i=0;i<arr.length;++i){
        res += arr[i];
    }
    return res;
}

let result = sumArray([1,2,3,4]);
console.log(result);