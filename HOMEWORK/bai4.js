function isPalindrome (str){
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        const strEle = str[i];
        const reverEle = str[str.length -1 -i];
        if(strEle !== reverEle){
            return false
        }
    }
    return true
    

}


  

console.log(isPalindrome("moom"));
console.log(isPalindrome("raceaecar"));
console.log(isPalindrome("rracearr"));