var rotate = function(nums, k) {

    for(let i = nums.length-1; i >=nums.length-k; i--){
        nums.unshift(nums.pop());
    }
    return nums;
   //The below solution works as well
   // nums.unshift(...nums.splice(nums.length-k));
};