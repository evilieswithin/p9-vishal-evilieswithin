//! Problem 7.1: Max Sum Contiguous Subarray

// Find the contiguous subarray within an array, A of length N which has the largest sum.

// Input Format:
// The first and the only argument contains an integer array, 
// A. Output Format: Return an integer representing the maximum possible sum of the contiguous subarray.
// Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example:

// Input 1: A = [1, 2, 3, 4, -10]

// Output 1: 10

// Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.

// Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output 2:6

// Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6 

function maxSubArraySum(A) {
    let max_ending_here = A[0];
    let max_so_far = A[0];
    for (let i = 1; i < A.length; i++) {
      max_ending_here = Math.max(A[i], max_ending_here + A[i]);
      max_so_far = Math.max(max_so_far, max_ending_here);
    }
    return max_so_far;
  }

  let A = [1, 2, 3, 4, -10];
console.log(maxSubArraySum(A)); 

A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(A)); 

//! Problem 7.2 Spiral Order Matrix II

// Problem Description Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]


function spiralOrder(matrix) {
    if (matrix.length === 0) {
      return [];
    }
    const m = matrix.length;
    const n = matrix[0].length;
    let result = [];
    let rowStart = 0;
    let rowEnd = m - 1;
    let colStart = 0;
    let colEnd = n - 1;
    while (rowStart <= rowEnd && colStart <= colEnd) {
      // Traverse right
      for (let j = colStart; j <= colEnd; j++) {
        result.push(matrix[rowStart][j]);
      }
      rowStart++;
  
      // Traverse down
      for (let i = rowStart; i <= rowEnd; i++) {
        result.push(matrix[i][colEnd]);
      }
      colEnd--;
  
      // Traverse left
      if (rowStart <= rowEnd) {
        for (let j = colEnd; j >= colStart; j--) {
          result.push(matrix[rowEnd][j]);
        }
        rowEnd--;
      }
  
      // Traverse up
      if (colStart <= colEnd) {
        for (let i = rowEnd; i >= rowStart; i--) {
          result.push(matrix[i][colStart]);
        }
        colStart++;
      }
    }
    return result;
  }

  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(spiralOrder(matrix)); 


  //! Problem 7.3 Sort array of 0's,1's and 2's

//  Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.Example 1:
 
//  Input:
//  N = 5
//  arr[]= {0 2 1 2 0}
//  Output:0 0 1 2 2
// Explanation: 0's 1's and 2's are segregated into ascending order.

// Example 2:
// Input:
// N = 3
// arr[] = {0 1 0}
// Output:0 0 1
// Explanation: 0s 1s and 2s are segregated into ascending order. Time Complexity: O(N)Expected Auxiliary Space: O(1)

// Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2 in javascript


function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
  
    while (mid <= high) {
      if (nums[mid] === 0) {
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        mid++;
      } else {
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
      }
    }
  
    return nums;
  }
  
  // Example usage:
  const arr1 = [0, 2, 1, 2, 0];
  console.log(sortColors(arr1)); 
  
  const arr2 = [0, 1, 0];
  console.log(sortColors(arr2)); 
  
  //! Problem 7.4 : Best time to buy and sell stock
//   You are given an array prices where prices[i] is the price of a given stock on the ith day.
//   You want to maximize your profit by choosing a single day to buy one stock and
//   choosing a different day in the future to sell that stock.Return the maximum profit you
//   can achieve from this transaction. If you cannot achieve any profit, return 0.
  
//   Example 1: Input: prices = [7,1,5,3,6,4] Output: 5 Explanation: Buy on day 2 (price = 1)
//   and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on
//   day 1 is not allowed because you must buy before you sell. Example 2: Input:
//    prices =[7,6,4,3,1] Output: 0 Explanation: In this case, no transactions are done and the maxprofit = 0
   
//    Constraints: 1 <= prices.length <= 105 0 <= prices[i] <= 104 
  
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
    return maxProfit;
  }
  

  //! Problem 7.5: Pair With Given Difference
//   Given an one-dimensional unsorted array A containing N integers.You are also given an
//   integer B, find if there exists a pair of elements in the array whose difference is B.
//   Return1 if any such pair exists else return 0. Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105
//   Input Format First argument is an integer array A of size N. Second argument is an integer B.
  
//   Output Format Return 1 if any such pair exists else return 0.
  
//   Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 Input 2: A = [-10, 20] B = 30

// Example Output Output 1: 1 Output 2: 1

// Example Explanation Explanation 1: Pair (80, 2) gives a difference of 78. Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30 in javascript


function findPairWithDifference(arr, B) {
    const set = new Set();
    
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (set.has(num - B) || set.has(num + B)) {
        return 1;
      }
      set.add(num);
    }
    
    return 0;
  }

  //! Problem 7.6 : 3 sum
  
//   Given an array S of n integers, find three integers in S such that the sum is closest to a 
//   given number, target.Return the sum of the three integers.Assume that there will only be 
//   one solution.
  
//   Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to thetarget is 2. (-1 + 2 + 1 = 2)
  
//   Assignment Introduction:
  
//   Calculate the time and space complexity for the set of questions
//   A set of  Problem statement based on array that would help student how toiterate and process an array
  
//   Benchmarks
//   All the problem should have optimized solutions
//   All the problem statement should have the time and space complexity mention inthe code comment
//   The code should be readable and must follow good coding practice.
//   Keep the code as modular as you can.
  

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // sort the array in ascending order
    let closestSum = nums[0] + nums[1] + nums[2]; // initialize closest sum to first triplet
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum; // update closest sum if current sum is closer to target
        }
        if (sum < target) {
          left++; // if sum is less than target, move left pointer to right to increase sum
        } else if (sum > target) {
          right--; // if sum is greater than target, move right pointer to left to decrease sum
        } else {
          return sum; // if sum is equal to target, we have found the closest sum possible
        }
      }
    }
    return closestSum;
  }

  console.log(threeSumClosest([-1, 2, 1, -4], 1)); // expected output: 2

  