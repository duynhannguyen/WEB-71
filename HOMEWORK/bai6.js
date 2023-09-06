function findTwoNumber(arr,targetNum){

    let resultArr = []

    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === targetNum){
                resultArr.push(i, j)
            }
        }
    }

    return resultArr;

}



console.log(findTwoNumber([2,11,-2,7,15], 9));
console.log(findTwoNumber([3,2,4], 6));
console.log(findTwoNumber([3,3],6))


