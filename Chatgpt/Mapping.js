let arr = [1,1,2,2,2,3,3,3,3,3];
let num = {};
for(let n of arr){
    num[n]= (num[n] || 0)+1;
}
console.log(num);
