function threeSum(arr, target) {
// write your code here
  let binaryStr = ""
while(num>0){
let rem = num%2;
binaryStr = binaryStr + rem.toString()
num = Math.floor(num/2)
}
return binaryStr.split("").reverse().join("")
}

module.exports = threeSum;
