var threeSum = function(nums) {
    const res = [];
    if (nums.length<3) return res;
    
    nums.sort((a,b)=>a-b);
    
    const target = 0;
        
    for (let i=0; i<nums.length-2; i++){
        if (nums[i]===nums[i-1]) continue;
        const subTarget = target - nums[i];
        let left = i+1;
        let right = nums.length-1;
        
        while (left < right){
            const sum = nums[left]+nums[right];
            if (sum===subTarget){
                res.push([nums[i], nums[left], nums[right]]);
                while (nums[left]===nums[left+1]) left++;
                while (nums[right]===nums[right-1]) right--;
                left++;
                right--;
            } else if (sum < subTarget) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    
    return res;
};