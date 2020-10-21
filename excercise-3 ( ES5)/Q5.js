const arr = [1,2,3,4,5]

console.log(arr.length);

arr[0]++;

arr[0] = arr[3] + arr[4];

arr.push(6);

const newArr = [];
for(let i=0;i<arr.length;++i){
    newArr.push(arr[i]);
}

console.log(newArr)