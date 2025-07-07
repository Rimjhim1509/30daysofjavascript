// //brute force approach
// function findSum(arr,k){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1; j<arr.length;j++){
//             if(arr[i]+arr[j]=== k){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// const arr=[10,2,3,11,90];
// const k = 21
// console.log(findSum(arr,k))

//Optimised Approach

function findSum(arr ,k){
    const seen = new Set();
    for(const num of arr){
        if(seen.has(k-num)){
            return true;
        }
        seen.add(num)
    }
    return false;


}
const nums = [1,2,4,5,3];
const k = 8;
console.log(findSum(nums,k));
