var sortColors = function(nums){
    let zero = 0, one=0,two =0;
    for(let n of nums){
        if(n==0)
            zero++;
        else if(n==1)one++;
        else two++;
        
    }
    for(let i=0;i<nums.length;i++){
        if(zero >0){
            nums[i]=0;
        zero--;
        }else if(one>0){
        nums[i] =1;
        one--;
        
    }else{
        nums[i]=2;
        two--;
    }

    }return nums;
}
console.log(sortColors([1,2,0,1,2,1,1,0,1,2,0,1,0,0]));
