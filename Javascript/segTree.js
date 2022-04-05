class SegmentTree {
    constructor(nums){
        this.nums = nums;
        const n =  nums.length;
        if(n === 0) {
            this.tree = [];
        } else {
            this.tree = new Array(2 * n -1).fill(0);
        } 
    }
    // parent(i) {
    //     return Math.floor((i-1)/2);
    // }
    left(i) {
        return 2*i + 1;
    }
    right(i) {
        return 2*i + 2;
    }
    buildSegmentTreeWrapper(tree, index, nums, start, end){
        if(nums.length === 0) {
            return 0;
        }
        // base case: leaf node
        if(start === end) {
            tree[index] = nums[start];
            return nums[start];
        }
        const mid = start + Math.floor((end - start)/2);
        
        // call recursively
        const left = this.left(index);
        const right = this.right(index);
        //tree[index] = this.buildSegmentTreeWrapper(tree, left, nums, start, mid) + this.buildSegmentTreeWrapper(tree, right, nums, mid + 1, end);
		tree[index] = Math.min(this.buildSegmentTreeWrapper(tree, left, nums, start, mid),this.buildSegmentTreeWrapper(tree, right, nums, mid + 1, end))
        return tree[index];        
    }
    buildSegmentTree() {
      this.buildSegmentTreeWrapper(this.tree, 0, this.nums, 0, this.nums.length - 1); 
	  return this.tree;
    }

    updateWrapper(tree, index, l, r, u,v,val)
    {
        if (v < l || r < u) {
            return;
        }
        if(l == r)
        {
            this.tree[index] = val;
            return; 
        }
        const mid = l + Math.floor((r - l) / 2)
        const left = this.left(index);
        const right = this.right(index);
        this.updateWrapper(tree, left, l, mid, u , v , val);
        this.updateWrapper(tree, right, mid + 1, r, u, v, val);
        this.tree[index] = Math.min(this.tree[left], this.tree[right]);
    }  
    update(u,v,val)
    {
        this.updateWrapper(tree, 0, 0, this.nums.length - 1, u,v,val);
        return this.tree;
    }
//     getRangeSumWrapper(tree, index, lIndex, rIndex, start, end) {
//         // case1: Total overlap
//         if( start <= lIndex && end >= rIndex ){
//             return tree[index];
//         }
//         // case 2: No overlap
//         if( rIndex < start || lIndex > end  ) {
//             return 0;
//         }
//         // case 3: overlap
//         const left = this.left(index);
//         const right = this.right(index);
//         const mid = lIndex + Math.floor((rIndex - lIndex)/2);
        
//         const leftResult =  this.getRangeSumWrapper(tree, left, lIndex, mid, start, end);
//         const rightResult = this.getRangeSumWrapper(tree, right, mid + 1, rIndex, start, end);
//         const result =  leftResult + rightResult;
//         return result;
        
//     }
//     getRangeSum(start, end) {
//         return this.getRangeSumWrapper(this.tree, 0, 0, this.nums.length - 1, start, end);
//     }
    // updateWrapper(tree, index, lIndex, rIndex, pos, diff ) {

    //     // case1: if not in range then simply return
    //     if(pos < lIndex || pos > rIndex) {
    //         return;
    //     }
    //     // Update sum
    //     tree[index] += diff;
        
    //     // case 2: leaf node then simply return
    //     if(lIndex === rIndex) {
    //         return;
    //     }
    //     const mid = lIndex + Math.floor((rIndex - lIndex)/2);
    //     const left = this.left(index);
    //     const right = this.right(index);
        
    //     // Update left tree
    //     this.updateWrapper(tree, left, lIndex, mid, pos, diff);
    //     // Update right tree
    //     this.updateWrapper(tree, right, mid + 1, rIndex, pos, diff);
    // }
    // update(pos, val) {
    //     const diff = val - this.nums[pos];
    //     this.nums[pos] = val;
    //     this.updateWrapper(this.tree, 0, 0, this.nums.length - 1, pos, diff);
    //     return this.tree;
    // }
}