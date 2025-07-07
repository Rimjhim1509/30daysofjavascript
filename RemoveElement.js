// var removeElement = function(nums, value){
//     let count = 0;
//     for(let i =0 ;i <nums.length; i++){
//         if(nums[i]!==value){
//             nums[count] = nums[i];
//             count++
//         }
//     }
//     return count;
// }
//  const arr = [1,2,3,4,5,6];
// //console.log(arr.slice(3,));
// console.log(arr.splice(3,4));
// console.log(arr)
// //console.log(arr.slice(0,removeElement(arr,3)));

let nums = [1,23,43,4,5,67,58,56,938,354,55,33,45,23];
for(let i=0;i<nums.length;i++){
    if(nums[i]% 2 == 0){
        nums.splice(i,1);
       
    }
} 
console.log(nums);


let values = [9,8,7,6,5];
let counT = values.splice(2,);
console.log(counT);



    nums[count]=nums[i]

