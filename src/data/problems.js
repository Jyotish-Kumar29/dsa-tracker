// ─────────────────────────────────────────────────────────────────────────────
// FULL DSA SHEET — 280+ problems
// Sources: Striver SDE Sheet, Blind 75, NeetCode 150, Love Babbar, Fraz Sheet
// Ordered for learning — do modules top to bottom
// ─────────────────────────────────────────────────────────────────────────────

export const MODULES = [
  "Arrays & Hashing",
  "Sorting & Searching",
  "Two Pointers",
  "Sliding Window",
  "Stack & Queue",
  "Linked List",
  "Binary Search",
  "Recursion & Backtracking",
  "Binary Tree",
  "Binary Search Tree",
  "Heaps",
  "Greedy",
  "Dynamic Programming",
  "Graphs",
  "Tries",
  "Bit Manipulation",
  "Math & Number Theory",
  "Intervals",
  "String Algorithms",
]

export const PROBLEMS = [

  // ═══════════════════════════════════════════════════
  // 1. ARRAYS & HASHING
  // ═══════════════════════════════════════════════════
  {
    id: "arr-01",
    name: "Two Sum",
    module: "Arrays & Hashing",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/two-sum/",
    gfgUrl: "https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/",
    companies: ["Google", "Amazon", "Facebook", "Apple"],
    statement: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9", "Only one valid answer exists."],
    hints: ["Use a hash map to store value → index as you iterate.", "For each element, check if (target - element) exists in the map."],
    approach: "Optimal: One-pass hash map. O(n) time, O(n) space.",
  },
  {
    id: "arr-02",
    name: "Contains Duplicate",
    module: "Arrays & Hashing",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/contains-duplicate/",
    gfgUrl: "https://www.geeksforgeeks.org/check-for-duplicates-in-an-array/",
    companies: ["Amazon", "Bloomberg"],
    statement: `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.`,
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
      { input: "nums = [1,1,1,3,3,4,3,2,4,2]", output: "true" },
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    hints: ["Use a HashSet. If inserting an element that already exists, return true."],
    approach: "HashSet approach: O(n) time, O(n) space. Alternatively sort and check adjacent — O(n log n) time, O(1) space.",
  },
  {
    id: "arr-03",
    name: "Best Time to Buy and Sell Stock",
    module: "Arrays & Hashing",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    gfgUrl: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/",
    companies: ["Amazon", "Goldman Sachs", "Microsoft"],
    statement: `You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`,
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5." },
      { input: "prices = [7,6,4,3,1]", output: "0", explanation: "No profit possible, return 0." },
    ],
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    hints: ["Track the minimum price seen so far.", "At each step, profit = current price - min price so far."],
    approach: "Single pass: keep track of minPrice and maxProfit. O(n) time, O(1) space.",
  },
  {
    id: "arr-04",
    name: "Product of Array Except Self",
    module: "Arrays & Hashing",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/product-of-array-except-self/",
    gfgUrl: "https://www.geeksforgeeks.org/a-product-array-puzzle/",
    companies: ["Amazon", "Apple", "Facebook", "Microsoft"],
    statement: `Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.`,
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
    ],
    constraints: ["2 <= nums.length <= 10^5", "-30 <= nums[i] <= 30"],
    hints: ["Build a prefix product array and a suffix product array.", "answer[i] = prefix[i-1] * suffix[i+1]. Can be done in O(1) extra space."],
    approach: "Prefix + suffix products in two passes. O(n) time, O(1) extra space (output array doesn't count).",
  },
  {
    id: "arr-05",
    name: "Maximum Subarray (Kadane's Algorithm)",
    module: "Arrays & Hashing",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/maximum-subarray/",
    gfgUrl: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
    companies: ["Amazon", "Apple", "LinkedIn", "Microsoft"],
    statement: `Given an integer array nums, find the subarray with the largest sum, and return its sum.

A subarray is a contiguous non-empty sequence of elements within an array.`,
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [1]", output: "1" },
      { input: "nums = [5,4,-1,7,8]", output: "23" },
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    hints: ["Kadane's: at each position, decide whether to extend the current subarray or start fresh.", "currentSum = max(nums[i], currentSum + nums[i])"],
    approach: "Kadane's Algorithm: O(n) time, O(1) space. Follow-up: divide & conquer O(n log n).",
  },
  {
    id: "arr-06",
    name: "Maximum Product Subarray",
    module: "Arrays & Hashing",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/maximum-product-subarray/",
    gfgUrl: "https://www.geeksforgeeks.org/maximum-product-subarray/",
    companies: ["LinkedIn", "Amazon"],
    statement: `Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.`,
    examples: [
      { input: "nums = [2,3,-2,4]", output: "6", explanation: "[2,3] has the largest product 6." },
      { input: "nums = [-2,0,-1]", output: "0" },
    ],
    constraints: ["1 <= nums.length <= 2 * 10^4", "-10 <= nums[i] <= 10"],
    hints: ["Track both the maximum and minimum product ending at current position.", "Minimum matters because a negative × negative = positive."],
    approach: "Track curMax and curMin at each step. O(n) time, O(1) space.",
  },
  {
    id: "arr-07",
    name: "Find Minimum in Rotated Sorted Array",
    module: "Arrays & Hashing",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    gfgUrl: "https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/",
    companies: ["Microsoft", "Amazon"],
    statement: `Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2] if it was rotated 4 times.

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.`,
    examples: [
      { input: "nums = [3,4,5,1,2]", output: "1", explanation: "The original array was [1,2,3,4,5] rotated 3 times." },
      { input: "nums = [4,5,6,7,0,1,2]", output: "0" },
      { input: "nums = [11,13,15,17]", output: "11" },
    ],
    constraints: ["n == nums.length", "1 <= n <= 5000", "-5000 <= nums[i] <= 5000", "All integers are unique."],
    hints: ["Binary search: the minimum is at the inflection point.", "If nums[mid] > nums[right], minimum is in the right half."],
    approach: "Binary search on the rotation pivot. O(log n) time, O(1) space.",
  },
  {
    id: "arr-08",
    name: "Trapping Rain Water",
    module: "Arrays & Hashing",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/trapping-rain-water/",
    gfgUrl: "https://www.geeksforgeeks.org/trapping-rain-water/",
    companies: ["Amazon", "Goldman Sachs", "Facebook", "Microsoft"],
    statement: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "The above elevation map traps 6 units of rain water." },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"],
    hints: ["Water at index i = min(maxLeft[i], maxRight[i]) - height[i].", "Two pointer approach avoids O(n) extra space."],
    approach: "Two pointers: O(n) time, O(1) space. Precompute arrays: O(n) time, O(n) space.",
  },
  {
    id: "arr-09",
    name: "3Sum",
    module: "Arrays & Hashing",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/3sum/",
    gfgUrl: "https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/",
    companies: ["Amazon", "Adobe", "Facebook", "Microsoft"],
    statement: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.`,
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,1,1]", output: "[]" },
      { input: "nums = [0,0,0]", output: "[[0,0,0]]" },
    ],
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    hints: ["Sort the array first. Fix one element, then use two pointers for the remaining pair.", "Skip duplicate values to avoid duplicate triplets."],
    approach: "Sort + two pointers. O(n²) time, O(1) extra space.",
  },
  {
    id: "arr-10",
    name: "Container With Most Water",
    module: "Arrays & Hashing",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/container-with-most-water/",
    gfgUrl: "https://www.geeksforgeeks.org/container-with-most-water/",
    companies: ["Amazon", "Bloomberg", "Apple"],
    statement: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.`,
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "The max area is formed between index 1 (height=8) and index 8 (height=7). Area = min(8,7) * (8-1) = 49." },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
    hints: ["Two pointers from both ends. Move the pointer with the smaller height inward.", "Why? Moving the larger one can only decrease the width without improving the height constraint."],
    approach: "Two pointers. O(n) time, O(1) space.",
  },
  {
    id: "arr-11",
    name: "Majority Element",
    module: "Arrays & Hashing",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/majority-element/",
    gfgUrl: "https://www.geeksforgeeks.org/majority-element/",
    companies: ["Amazon", "Microsoft"],
    statement: `Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.`,
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2" },
    ],
    constraints: ["n == nums.length", "1 <= n <= 5 * 10^4", "-10^9 <= nums[i] <= 10^9"],
    hints: ["Boyer-Moore Voting Algorithm: maintain a candidate and a count.", "If count == 0, set candidate = current element. Increment or decrement count based on match."],
    approach: "Boyer-Moore Voting: O(n) time, O(1) space.",
  },
  {
    id: "arr-12",
    name: "Rotate Array",
    module: "Arrays & Hashing",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/rotate-array/",
    gfgUrl: "https://www.geeksforgeeks.org/array-rotation/",
    companies: ["Microsoft", "Amazon"],
    statement: `Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.`,
    examples: [
      { input: "nums = [1,2,3,4,5,6,7], k = 3", output: "[5,6,7,1,2,3,4]" },
      { input: "nums = [-1,-100,3,99], k = 2", output: "[3,99,-1,-100]" },
    ],
    constraints: ["1 <= nums.length <= 10^5", "-2^31 <= nums[i] <= 2^31 - 1", "0 <= k <= 10^5"],
    hints: ["Reverse the whole array, then reverse first k, then reverse rest.", "k = k % n to handle k > n."],
    approach: "Three reversal trick. O(n) time, O(1) space.",
  },
  {
    id: "arr-13",
    name: "Find the Duplicate Number",
    module: "Arrays & Hashing",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/find-the-duplicate-number/",
    gfgUrl: "https://www.geeksforgeeks.org/find-the-two-repeating-elements-in-a-given-array/",
    companies: ["Amazon", "Facebook"],
    statement: `Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.`,
    examples: [
      { input: "nums = [1,3,4,2,2]", output: "2" },
      { input: "nums = [3,1,3,4,2]", output: "3" },
    ],
    constraints: ["1 <= n <= 10^5", "nums.length == n + 1", "1 <= nums[i] <= n", "All integers appear exactly once except for one."],
    hints: ["Treat array as a linked list where nums[i] points to index nums[i]. Find the cycle entry point.", "Floyd's cycle detection algorithm."],
    approach: "Floyd's Tortoise and Hare (cycle detection). O(n) time, O(1) space.",
  },

  // ═══════════════════════════════════════════════════
  // 2. SORTING & SEARCHING
  // ═══════════════════════════════════════════════════
  {
    id: "sort-01",
    name: "Sort Colors (Dutch National Flag)",
    module: "Sorting & Searching",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/sort-colors/",
    gfgUrl: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/",
    companies: ["Amazon", "Microsoft", "Facebook"],
    statement: `Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.`,
    examples: [
      { input: "nums = [2,0,2,1,1,0]", output: "[0,0,1,1,2,2]" },
      { input: "nums = [2,0,1]", output: "[0,1,2]" },
    ],
    constraints: ["n == nums.length", "1 <= n <= 300", "nums[i] is either 0, 1, or 2."],
    hints: ["Dutch National Flag algorithm by Dijkstra.", "Maintain three pointers: low, mid, high. 0s go before low, 2s go after high, 1s are between low and mid."],
    approach: "Dutch National Flag: one pass, O(n) time, O(1) space.",
  },
  {
    id: "sort-02",
    name: "Merge Sort",
    module: "Sorting & Searching",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/sort-an-array/",
    gfgUrl: "https://www.geeksforgeeks.org/merge-sort/",
    companies: ["Google", "Amazon", "Microsoft"],
    statement: `Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(n log n) time complexity and with the smallest space complexity possible.

This is a classic implementation problem — implement merge sort.`,
    examples: [
      { input: "nums = [5,2,3,1]", output: "[1,2,3,5]" },
      { input: "nums = [5,1,1,2,0,0]", output: "[0,0,1,1,2,5]" },
    ],
    constraints: ["1 <= nums.length <= 5 * 10^4", "-5 * 10^4 <= nums[i] <= 5 * 10^4"],
    hints: ["Divide the array in half, recursively sort both halves, then merge.", "The merge step takes two sorted arrays and produces one sorted array."],
    approach: "Merge sort: O(n log n) time, O(n) space for merge buffer.",
  },
  {
    id: "sort-03",
    name: "Count Inversions in Array",
    module: "Sorting & Searching",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/global-and-local-inversions/",
    gfgUrl: "https://www.geeksforgeeks.org/counting-inversions/",
    companies: ["Amazon", "Google"],
    statement: `Given an integer array nums, an inversion is a pair (i, j) where i < j and nums[i] > nums[j].

Return the number of inversions in nums.

Example context: In a ranked list, an inversion indicates how far the list is from being sorted.`,
    examples: [
      { input: "nums = [2, 4, 1, 3, 5]", output: "3", explanation: "Inversions: (2,1), (4,1), (4,3)" },
      { input: "nums = [1, 20, 6, 4, 5]", output: "5" },
    ],
    constraints: ["1 <= nums.length <= 10^5", "0 <= nums[i] <= 10^9"],
    hints: ["Use modified merge sort. During the merge step, when you pick from right half, count elements remaining in left half.", "Each such pick contributes that many inversions."],
    approach: "Modified merge sort: O(n log n) time, O(n) space.",
  },
  {
    id: "sort-04",
    name: "Kth Largest Element in Array",
    module: "Sorting & Searching",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    gfgUrl: "https://www.geeksforgeeks.org/kth-largest-element-in-an-array/",
    companies: ["Amazon", "Facebook", "Apple", "Microsoft"],
    statement: `Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?`,
    examples: [
      { input: "nums = [3,2,1,5,6,4], k = 2", output: "5" },
      { input: "nums = [3,2,3,1,2,4,5,5,6], k = 4", output: "4" },
    ],
    constraints: ["1 <= k <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    hints: ["QuickSelect algorithm — partition-based, similar to quicksort.", "Min-heap of size k is simpler but O(n log k)."],
    approach: "QuickSelect: O(n) average, O(n²) worst. Min-heap: O(n log k). For interviews, both are acceptable.",
  },

  // ═══════════════════════════════════════════════════
  // 3. TWO POINTERS
  // ═══════════════════════════════════════════════════
  {
    id: "tp-01",
    name: "Valid Palindrome",
    module: "Two Pointers",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/valid-palindrome/",
    gfgUrl: "https://www.geeksforgeeks.org/check-if-a-given-string-is-a-rotation-of-a-palindrome/",
    companies: ["Facebook", "Microsoft", "Uber"],
    statement: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "true", explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: "false" },
      { input: 's = " "', output: "true" },
    ],
    constraints: ["1 <= s.length <= 2 * 10^5", "s consists only of printable ASCII characters."],
    hints: ["Two pointers from both ends. Skip non-alphanumeric characters.", "Compare characters after converting to lowercase."],
    approach: "Two pointers: O(n) time, O(1) space.",
  },
  {
    id: "tp-02",
    name: "Two Sum II - Input Array Is Sorted",
    module: "Two Pointers",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    gfgUrl: "https://www.geeksforgeeks.org/two-pointers-technique/",
    companies: ["Amazon"],
    statement: `Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.`,
    examples: [
      { input: "numbers = [2,7,11,15], target = 9", output: "[1,2]" },
      { input: "numbers = [2,3,4], target = 6", output: "[1,3]" },
      { input: "numbers = [-1,0], target = -1", output: "[1,2]" },
    ],
    constraints: ["2 <= numbers.length <= 3 * 10^4", "-1000 <= numbers[i] <= 1000", "numbers is sorted in non-decreasing order.", "-1000 <= target <= 1000"],
    hints: ["Left pointer at start, right pointer at end.", "If sum < target, move left pointer right. If sum > target, move right pointer left."],
    approach: "Two pointers: O(n) time, O(1) space.",
  },
  {
    id: "tp-03",
    name: "4Sum",
    module: "Two Pointers",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/4sum/",
    gfgUrl: "https://www.geeksforgeeks.org/find-four-elements-that-sum-to-a-given-value-set-2/",
    companies: ["Adobe", "Amazon"],
    statement: `Given an array nums of n integers and an integer target, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

- 0 <= a, b, c, d < n
- a, b, c, and d are distinct.
- nums[a] + nums[b] + nums[c] + nums[d] == target`,
    examples: [
      { input: "nums = [1,0,-1,0,-2,2], target = 0", output: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" },
      { input: "nums = [2,2,2,2,2], target = 8", output: "[[2,2,2,2]]" },
    ],
    constraints: ["1 <= nums.length <= 200", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9"],
    hints: ["Sort first. Fix two outer pointers (nested loops), then use two-pointer for the inner pair.", "Skip duplicates at each pointer level."],
    approach: "Sort + two nested loops + two pointers. O(n³) time.",
  },
  {
    id: "tp-04",
    name: "Trapping Rain Water (Two Pointer)",
    module: "Two Pointers",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/trapping-rain-water/",
    gfgUrl: "https://www.geeksforgeeks.org/trapping-rain-water/",
    companies: ["Amazon", "Goldman Sachs", "Facebook"],
    statement: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

(Solve this using the two pointer approach — O(1) space.)`,
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"],
    hints: ["Left pointer and right pointer. Maintain maxLeft and maxRight.", "Water at each position depends on the smaller of the two max heights seen from either side."],
    approach: "Two pointers: O(n) time, O(1) space — no extra arrays needed.",
  },

  // ═══════════════════════════════════════════════════
  // 4. SLIDING WINDOW
  // ═══════════════════════════════════════════════════
  {
    id: "sw-01",
    name: "Longest Substring Without Repeating Characters",
    module: "Sliding Window",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    gfgUrl: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/",
    companies: ["Amazon", "Bloomberg", "Facebook", "Adobe"],
    statement: `Given a string s, find the length of the longest substring without repeating characters.`,
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with length 3.' },
      { input: 's = "bbbbb"', output: "1" },
      { input: 's = "pwwkew"', output: "3", explanation: 'The answer is "wke".' },
    ],
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."],
    hints: ["Sliding window with a hash set/map.", "Expand right pointer, shrink left pointer when a duplicate is found."],
    approach: "Sliding window + HashMap. O(n) time, O(min(n, alphabet)) space.",
  },
  {
    id: "sw-02",
    name: "Longest Repeating Character Replacement",
    module: "Sliding Window",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    gfgUrl: "https://www.geeksforgeeks.org/longest-repeating-character-replacement/",
    companies: ["Google", "Facebook"],
    statement: `You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.`,
    examples: [
      { input: 's = "ABAB", k = 2', output: "4", explanation: "Replace the two A's with two B's or vice versa." },
      { input: 's = "AABABBA", k = 1', output: "4" },
    ],
    constraints: ["1 <= s.length <= 10^5", "s consists of only uppercase English letters.", "0 <= k <= s.length"],
    hints: ["Window is valid if: windowSize - maxFreq <= k.", "Track the max frequency character in the window."],
    approach: "Sliding window + frequency map. O(n) time, O(26) = O(1) space.",
  },
  {
    id: "sw-03",
    name: "Minimum Window Substring",
    module: "Sliding Window",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/minimum-window-substring/",
    gfgUrl: "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/",
    companies: ["Facebook", "Google", "Amazon", "Uber"],
    statement: `Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.`,
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: "The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t." },
      { input: 's = "a", t = "a"', output: '"a"' },
      { input: 's = "a", t = "aa"', output: '""' },
    ],
    constraints: ["m == s.length", "n == t.length", "1 <= m, n <= 10^5", "s and t consist of uppercase and lowercase English letters."],
    hints: ["Expand right until all characters of t are in window. Then shrink left to minimize.", "Track 'have' vs 'need' counts to know when window is valid."],
    approach: "Sliding window with two frequency maps. O(m + n) time.",
  },
  {
    id: "sw-04",
    name: "Sliding Window Maximum",
    module: "Sliding Window",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/sliding-window-maximum/",
    gfgUrl: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
    companies: ["Amazon", "Google"],
    statement: `You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.`,
    examples: [
      { input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]" },
      { input: "nums = [1], k = 1", output: "[1]" },
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4", "1 <= k <= nums.length"],
    hints: ["Use a monotonic deque (decreasing). Front always has the index of current window's max.", "Remove indices outside window from front. Remove smaller elements from back."],
    approach: "Monotonic deque. O(n) time, O(k) space.",
  },
  {
    id: "sw-05",
    name: "Permutation in String",
    module: "Sliding Window",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/permutation-in-string/",
    gfgUrl: "https://www.geeksforgeeks.org/check-string-contains-permutation-another-string/",
    companies: ["Microsoft", "Amazon"],
    statement: `Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.`,
    examples: [
      { input: 's1 = "ab", s2 = "eidbaooo"', output: "true", explanation: "s2 contains one permutation of s1 (\"ba\")." },
      { input: 's1 = "ab", s2 = "eidboaoo"', output: "false" },
    ],
    constraints: ["1 <= s1.length, s2.length <= 10^4", "s1 and s2 consist of lowercase English letters."],
    hints: ["Fixed-size sliding window of length s1.length over s2.", "Compare character frequency maps of window and s1."],
    approach: "Fixed window sliding + frequency array. O(n) time.",
  },

  // ═══════════════════════════════════════════════════
  // 5. STACK & QUEUE
  // ═══════════════════════════════════════════════════
  {
    id: "stk-01",
    name: "Valid Parentheses",
    module: "Stack & Queue",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/valid-parentheses/",
    gfgUrl: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
    companies: ["Google", "Amazon", "Facebook", "Bloomberg"],
    statement: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
    hints: ["Push opening brackets onto stack. For closing brackets, check if top of stack matches.", "At the end, stack should be empty."],
    approach: "Stack. O(n) time, O(n) space.",
  },
  {
    id: "stk-02",
    name: "Min Stack",
    module: "Stack & Queue",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/min-stack/",
    gfgUrl: "https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/",
    companies: ["Amazon", "Bloomberg", "Google"],
    statement: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:
- MinStack() initializes the stack object.
- void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.`,
    examples: [
      { input: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]', output: "[null,null,null,null,-3,null,0,-2]" },
    ],
    constraints: ["-2^31 <= val <= 2^31 - 1", "Methods pop, top and getMin will always be called on non-empty stacks.", "At most 3 * 10^4 calls will be made to push, pop, top, and getMin."],
    hints: ["Maintain a separate stack that tracks the minimum at each level.", "Each stack entry stores (value, currentMin)."],
    approach: "Two stacks or stack of pairs. O(1) all operations.",
  },
  {
    id: "stk-03",
    name: "Daily Temperatures",
    module: "Stack & Queue",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/daily-temperatures/",
    gfgUrl: "https://www.geeksforgeeks.org/find-next-greater-element/",
    companies: ["Amazon", "Microsoft"],
    statement: `Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.`,
    examples: [
      { input: "temperatures = [73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" },
      { input: "temperatures = [30,40,50,60]", output: "[1,1,1,0]" },
      { input: "temperatures = [30,60,90]", output: "[1,1,0]" },
    ],
    constraints: ["1 <= temperatures.length <= 10^5", "30 <= temperatures[i] <= 100"],
    hints: ["Monotonic stack (decreasing). Store indices.", "When current temp > stack top temp, that's the answer for the stack top index."],
    approach: "Monotonic stack. O(n) time, O(n) space.",
  },
  {
    id: "stk-04",
    name: "Largest Rectangle in Histogram",
    module: "Stack & Queue",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    gfgUrl: "https://www.geeksforgeeks.org/largest-rectangle-under-histogram/",
    companies: ["Amazon", "Google", "Facebook"],
    statement: `Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.`,
    examples: [
      { input: "heights = [2,1,5,6,2,3]", output: "10", explanation: "The largest rectangle spans bars with heights [5,6], area = 5*2 = 10." },
      { input: "heights = [2,4]", output: "4" },
    ],
    constraints: ["1 <= heights.length <= 10^5", "0 <= heights[i] <= 10^4"],
    hints: ["Use a monotonic stack. For each bar, find how far left and right it can extend as the shortest bar.", "Stack stores indices. Pop when current height < stack top height."],
    approach: "Monotonic stack. O(n) time, O(n) space.",
  },
  {
    id: "stk-05",
    name: "Implement Queue using Stacks",
    module: "Stack & Queue",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/implement-queue-using-stacks/",
    gfgUrl: "https://www.geeksforgeeks.org/queue-using-stacks/",
    companies: ["Amazon", "Microsoft"],
    statement: `Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:
- void push(int x) Pushes element x to the back of the queue.
- int pop() Removes the element from the front of the queue and returns it.
- int peek() Returns the element at the front of the queue.
- boolean empty() Returns true if the queue is empty, false otherwise.

You must use only standard operations of a stack.`,
    examples: [
      { input: '["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]', output: "[null,null,null,1,1,false]" },
    ],
    constraints: ["1 <= x <= 9", "At most 100 calls will be made to push, pop, peek, and empty.", "All the calls to pop and peek are valid."],
    hints: ["Use two stacks: input stack and output stack.", "When output stack is empty and pop/peek is called, transfer all elements from input to output."],
    approach: "Two stacks. Amortized O(1) per operation.",
  },
  {
    id: "stk-06",
    name: "Next Greater Element I",
    module: "Stack & Queue",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/next-greater-element-i/",
    gfgUrl: "https://www.geeksforgeeks.org/next-greater-element/",
    companies: ["Amazon"],
    statement: `The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.`,
    examples: [
      { input: "nums1 = [4,1,2], nums2 = [1,3,4,2]", output: "[-1,3,-1]" },
      { input: "nums1 = [2,4], nums2 = [1,2,3,4]", output: "[3,-1]" },
    ],
    constraints: ["1 <= nums1.length <= nums2.length <= 1000", "0 <= nums1[i], nums2[i] <= 10^4", "All integers in nums1 and nums2 are unique."],
    hints: ["Process nums2 with a monotonic stack to find next greater for all elements.", "Store results in a map, then look up for nums1 elements."],
    approach: "Monotonic stack + HashMap. O(n) time.",
  },

  // ═══════════════════════════════════════════════════
  // 6. LINKED LIST
  // ═══════════════════════════════════════════════════
  {
    id: "ll-01",
    name: "Reverse Linked List",
    module: "Linked List",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/reverse-linked-list/",
    gfgUrl: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
    companies: ["Amazon", "Adobe", "Microsoft", "Apple"],
    statement: `Given the head of a singly linked list, reverse the list, and return the reversed list.`,
    examples: [
      { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
      { input: "head = [1,2]", output: "[2,1]" },
      { input: "head = []", output: "[]" },
    ],
    constraints: ["The number of nodes in the list is in the range [0, 5000].", "-5000 <= Node.val <= 5000"],
    hints: ["Iterative: three pointers (prev, curr, next).", "Recursive: reverse(curr.next), then curr.next.next = curr, curr.next = null."],
    approach: "Iterative: O(n) time, O(1) space. Recursive: O(n) time, O(n) stack space.",
  },
  {
    id: "ll-02",
    name: "Merge Two Sorted Lists",
    module: "Linked List",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/merge-two-sorted-lists/",
    gfgUrl: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
    companies: ["Amazon", "Microsoft", "Adobe"],
    statement: `You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = []", output: "[]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" },
    ],
    constraints: ["The number of nodes in both lists is in the range [0, 50].", "-100 <= Node.val <= 100", "Both list1 and list2 are sorted in non-decreasing order."],
    hints: ["Use a dummy head node to simplify edge cases.", "Compare front nodes, attach the smaller one, advance that pointer."],
    approach: "Iterative with dummy node: O(m+n) time, O(1) space.",
  },
  {
    id: "ll-03",
    name: "Linked List Cycle",
    module: "Linked List",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/linked-list-cycle/",
    gfgUrl: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
    companies: ["Amazon", "Microsoft"],
    statement: `Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.`,
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "true", explanation: "Tail connects to node at index 1." },
      { input: "head = [1,2], pos = 0", output: "true" },
      { input: "head = [1], pos = -1", output: "false" },
    ],
    constraints: ["The number of the nodes in the list is in the range [0, 10^4].", "-10^5 <= Node.val <= 10^5", "pos is -1 or a valid index in the linked-list."],
    hints: ["Floyd's cycle detection: slow pointer moves 1 step, fast pointer moves 2 steps.", "If they meet, there's a cycle."],
    approach: "Floyd's algorithm: O(n) time, O(1) space.",
  },
  {
    id: "ll-04",
    name: "Remove Nth Node From End of List",
    module: "Linked List",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    gfgUrl: "https://www.geeksforgeeks.org/delete-nth-node-from-the-end-of-the-given-linked-list/",
    companies: ["Amazon", "Microsoft", "Adobe"],
    statement: `Given the head of a linked list, remove the nth node from the end of the list and return its head.`,
    examples: [
      { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" },
      { input: "head = [1], n = 1", output: "[]" },
      { input: "head = [1,2], n = 1", output: "[1]" },
    ],
    constraints: ["The number of nodes in the list is sz.", "1 <= sz <= 30", "0 <= Node.val <= 100", "1 <= n <= sz"],
    hints: ["Two pointers: advance fast pointer n steps ahead, then move both until fast reaches end.", "Use a dummy node to handle edge cases like removing the head."],
    approach: "Two pointer (one pass): O(L) time, O(1) space.",
  },
  {
    id: "ll-05",
    name: "Reorder List",
    module: "Linked List",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/reorder-list/",
    gfgUrl: "https://www.geeksforgeeks.org/rearrange-a-given-linked-list-in-place/",
    companies: ["Amazon", "Facebook"],
    statement: `You are given the head of a singly linked-list: L0 → L1 → … → Ln-1 → Ln

Reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.`,
    examples: [
      { input: "head = [1,2,3,4]", output: "[1,4,2,3]" },
      { input: "head = [1,2,3,4,5]", output: "[1,5,2,4,3]" },
    ],
    constraints: ["The number of nodes in the list is in the range [1, 5 * 10^4].", "1 <= Node.val <= 1000"],
    hints: ["Three steps: 1) Find middle using slow/fast pointers. 2) Reverse second half. 3) Merge two halves."],
    approach: "Find middle + reverse + merge. O(n) time, O(1) space.",
  },
  {
    id: "ll-06",
    name: "LRU Cache",
    module: "Linked List",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/lru-cache/",
    gfgUrl: "https://www.geeksforgeeks.org/lru-cache-implementation/",
    companies: ["Amazon", "Google", "Microsoft", "Facebook"],
    statement: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if the key exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.`,
    examples: [
      { input: '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]', output: "[null,null,null,1,null,-1,null,-1,3,4]" },
    ],
    constraints: ["1 <= capacity <= 3000", "0 <= key <= 10^4", "0 <= value <= 10^5", "At most 2 * 10^5 calls will be made to get and put."],
    hints: ["HashMap for O(1) lookup + Doubly Linked List for O(1) insertion/deletion.", "Most recently used at head, least recently used at tail."],
    approach: "HashMap + Doubly Linked List. O(1) get and put.",
  },
  {
    id: "ll-07",
    name: "Merge K Sorted Lists",
    module: "Linked List",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/merge-k-sorted-lists/",
    gfgUrl: "https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/",
    companies: ["Amazon", "Facebook", "Google", "Microsoft"],
    statement: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.`,
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
      { input: "lists = []", output: "[]" },
      { input: "lists = [[]]", output: "[]" },
    ],
    constraints: ["k == lists.length", "0 <= k <= 10^4", "0 <= lists[i].length <= 500", "-10^4 <= lists[i][j] <= 10^4"],
    hints: ["Min-heap of size k: always extract the minimum and push the next node from that list.", "Alternatively: divide and conquer — merge lists pairwise."],
    approach: "Min-heap: O(n log k). Divide & conquer: O(n log k).",
  },
  {
    id: "ll-08",
    name: "Find the Starting Point of Loop in Linked List",
    module: "Linked List",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/linked-list-cycle-ii/",
    gfgUrl: "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/",
    companies: ["Amazon", "Microsoft"],
    statement: `Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.

Do not modify the linked list.`,
    examples: [
      { input: "head = [3,2,0,-4], pos = 1", output: "tail connects to node index 1", explanation: "The node at index 1 is the start of the cycle." },
      { input: "head = [1,2], pos = 0", output: "tail connects to node index 0" },
      { input: "head = [1], pos = -1", output: "no cycle" },
    ],
    constraints: ["The number of nodes in the list is in the range [0, 10^4].", "-10^5 <= Node.val <= 10^5"],
    hints: ["After Floyd's detection: move one pointer to head, keep one at meeting point. Move both one step at a time — they meet at cycle start.", "Mathematical proof: distance from head to cycle start = distance from meeting point to cycle start."],
    approach: "Floyd's cycle detection + mathematical insight. O(n) time, O(1) space.",
  },

  // ═══════════════════════════════════════════════════
  // 7. BINARY SEARCH
  // ═══════════════════════════════════════════════════
  {
    id: "bs-01",
    name: "Binary Search",
    module: "Binary Search",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-search/",
    gfgUrl: "https://www.geeksforgeeks.org/binary-search/",
    companies: ["Google", "Amazon", "Microsoft"],
    statement: `Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.`,
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 <= nums.length <= 10^4", "-10^4 < nums[i], target < 10^4", "All the integers in nums are unique.", "nums is sorted in ascending order."],
    hints: ["Set low = 0, high = n-1. While low <= high: mid = (low+high)/2.", "If nums[mid] == target return mid. If nums[mid] < target, low = mid+1. Else high = mid-1."],
    approach: "Classic binary search. O(log n) time, O(1) space.",
  },
  {
    id: "bs-02",
    name: "Search in Rotated Sorted Array",
    module: "Binary Search",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    gfgUrl: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/",
    companies: ["Amazon", "Microsoft", "Facebook"],
    statement: `There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k.

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.`,
    examples: [
      { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
      { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
      { input: "nums = [1], target = 0", output: "-1" },
    ],
    constraints: ["1 <= nums.length <= 5000", "-10^4 <= nums[i] <= 10^4", "All values in nums are unique.", "1 <= target <= 10^4"],
    hints: ["At any mid point, one half is always sorted. Determine which half is sorted.", "Check if target lies in the sorted half; if yes, search there, else search the other half."],
    approach: "Modified binary search. O(log n) time, O(1) space.",
  },
  {
    id: "bs-03",
    name: "Find First and Last Position of Element in Sorted Array",
    module: "Binary Search",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    gfgUrl: "https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/",
    companies: ["Facebook", "LinkedIn"],
    statement: `Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.`,
    examples: [
      { input: "nums = [5,7,7,8,8,10], target = 8", output: "[3,4]" },
      { input: "nums = [5,7,7,8,8,10], target = 6", output: "[-1,-1]" },
      { input: "nums = [], target = 0", output: "[-1,-1]" },
    ],
    constraints: ["0 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9", "nums is a non-decreasing integer array.", "-10^9 <= target <= 10^9"],
    hints: ["Two binary searches: one for leftmost occurrence (lower bound), one for rightmost (upper bound).", "Lower bound: when nums[mid] == target, record and search left. Upper bound: record and search right."],
    approach: "Two binary searches. O(log n) time, O(1) space.",
  },
  {
    id: "bs-04",
    name: "Koko Eating Bananas",
    module: "Binary Search",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/koko-eating-bananas/",
    gfgUrl: "https://www.geeksforgeeks.org/koko-eating-bananas/",
    companies: ["Amazon", "Google"],
    statement: `Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Return the minimum integer k such that she can eat all the bananas within h hours.`,
    examples: [
      { input: "piles = [3,6,7,11], h = 8", output: "4" },
      { input: "piles = [30,11,23,4,20], h = 5", output: "30" },
      { input: "piles = [30,11,23,4,20], h = 6", output: "23" },
    ],
    constraints: ["1 <= piles.length <= 10^4", "piles.length <= h <= 10^9", "1 <= piles[i] <= 10^9"],
    hints: ["Binary search on the answer (speed k). Range: [1, max(piles)].", "Check function: can Koko finish all piles at speed k within h hours?"],
    approach: "Binary search on answer space. O(n log m) where m = max(piles).",
  },
  {
    id: "bs-05",
    name: "Median of Two Sorted Arrays",
    module: "Binary Search",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    gfgUrl: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays/",
    companies: ["Google", "Amazon", "Apple", "Microsoft"],
    statement: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).`,
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.00000", explanation: "Merged: [1,2,3], median = 2." },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000", explanation: "Merged: [1,2,3,4], median = (2+3)/2 = 2.5." },
    ],
    constraints: ["nums1.length == m", "nums2.length == n", "0 <= m <= 1000", "0 <= n <= 1000", "1 <= m + n <= 2000", "-10^6 <= nums1[i], nums2[i] <= 10^6"],
    hints: ["Binary search on the smaller array to find the correct partition.", "Ensure left half elements ≤ right half elements across both arrays."],
    approach: "Binary search on partition. O(log(min(m,n))) time — one of the hardest binary search problems.",
  },
  {
    id: "bs-06",
    name: "Aggressive Cows (Binary Search on Answer)",
    module: "Binary Search",
    difficulty: "Medium",
    lcUrl: "https://www.spoj.com/problems/AGGRCOW/",
    gfgUrl: "https://www.geeksforgeeks.org/aggressive-cows-problem/",
    companies: ["Amazon", "Google"],
    statement: `Given an array of stall positions and a number of cows C, place the cows in the stalls such that the minimum distance between any two cows is maximized. Return this maximum of minimum distance.

This is a classic "binary search on answer" problem frequently asked in interviews.`,
    examples: [
      { input: "stalls = [1,2,4,8,9], cows = 3", output: "3", explanation: "Place cows at positions 1, 4, 9. Minimum distance = 3." },
      { input: "stalls = [10,1,2,7,5], cows = 3", output: "4" },
    ],
    constraints: ["2 <= stalls.length <= 10^5", "0 <= stalls[i] <= 10^9", "2 <= cows <= stalls.length"],
    hints: ["Sort stalls. Binary search on the answer (minimum distance).", "Check if we can place all cows with at least 'mid' distance between each."],
    approach: "Sort + binary search on answer. O(n log n) time.",
  },

  // ═══════════════════════════════════════════════════
  // 8. RECURSION & BACKTRACKING
  // ═══════════════════════════════════════════════════
  {
    id: "bt-01",
    name: "Subsets",
    module: "Recursion & Backtracking",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/subsets/",
    gfgUrl: "https://www.geeksforgeeks.org/power-set/",
    companies: ["Facebook", "Amazon", "Bloomberg"],
    statement: `Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.`,
    examples: [
      { input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" },
      { input: "nums = [0]", output: "[[],[0]]" },
    ],
    constraints: ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10", "All the numbers in nums are unique."],
    hints: ["For each element, you either include it or not. Recurse with both choices.", "Iteratively: start with [], for each number add it to all existing subsets."],
    approach: "Backtracking: O(2^n * n) time. Bit masking also works.",
  },
  {
    id: "bt-02",
    name: "Permutations",
    module: "Recursion & Backtracking",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/permutations/",
    gfgUrl: "https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/",
    companies: ["Microsoft", "Amazon", "Adobe"],
    statement: `Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.`,
    examples: [
      { input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
      { input: "nums = [0,1]", output: "[[0,1],[1,0]]" },
      { input: "nums = [1]", output: "[[1]]" },
    ],
    constraints: ["1 <= nums.length <= 6", "-10 <= nums[i] <= 10", "All the integers of nums are unique."],
    hints: ["At each step, pick an unused element and recurse. Backtrack by unusing it.", "Use a visited boolean array or swap elements."],
    approach: "Backtracking. O(n! * n) time.",
  },
  {
    id: "bt-03",
    name: "Combination Sum",
    module: "Recursion & Backtracking",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/combination-sum/",
    gfgUrl: "https://www.geeksforgeeks.org/combinational-sum/",
    companies: ["Amazon", "Uber", "Snapchat"],
    statement: `Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.`,
    examples: [
      { input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" },
      { input: "candidates = [2,3,5], target = 8", output: "[[2,2,2,2],[2,3,3],[3,5]]" },
    ],
    constraints: ["1 <= candidates.length <= 30", "2 <= candidates[i] <= 40", "All elements of candidates are distinct.", "1 <= target <= 40"],
    hints: ["Backtrack: at each step try all candidates starting from current index (to avoid duplicates).", "Stop when remaining target becomes 0 (success) or negative (prune)."],
    approach: "Backtracking with pruning. O(2^t) where t = target/min(candidates).",
  },
  {
    id: "bt-04",
    name: "N-Queens",
    module: "Recursion & Backtracking",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/n-queens/",
    gfgUrl: "https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/",
    companies: ["Amazon", "Microsoft", "Flipkart"],
    statement: `The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.`,
    examples: [
      { input: "n = 4", output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]' },
      { input: "n = 1", output: '[["Q"]]' },
    ],
    constraints: ["1 <= n <= 9"],
    hints: ["Place queens row by row. For each row, try each column.", "Track which columns, and which diagonals (row-col) and anti-diagonals (row+col) are occupied.", "Backtrack if placement is invalid."],
    approach: "Backtracking with O(n) validity check or O(1) with bitsets. Total solutions: O(n!).",
  },
  {
    id: "bt-05",
    name: "Sudoku Solver",
    module: "Recursion & Backtracking",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/sudoku-solver/",
    gfgUrl: "https://www.geeksforgeeks.org/sudoku-backtracking-7/",
    companies: ["Amazon", "Uber", "Apple"],
    statement: `Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:
1. Each of the digits 1-9 must occur exactly once in each row.
2. Each of the digits 1-9 must occur exactly once in each column.
3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.

The '.' character indicates empty cells.`,
    examples: [
      { input: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]', output: 'Filled board' },
    ],
    constraints: ["board.length == 9", "board[i].length == 9", "board[i][j] is a digit or '.'."],
    hints: ["Find empty cell, try digits 1-9. Check row, column, and 3x3 box validity.", "If valid, place digit and recurse. If recursion fails, backtrack (remove digit)."],
    approach: "Backtracking with constraint propagation. Worst case O(9^81) but practically very fast.",
  },
  {
    id: "bt-06",
    name: "Word Search",
    module: "Recursion & Backtracking",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/word-search/",
    gfgUrl: "https://www.geeksforgeeks.org/search-a-word-in-a-2d-grid-of-characters/",
    companies: ["Amazon", "Microsoft", "Bloomberg"],
    statement: `Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.`,
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true" },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', output: "true" },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', output: "false" },
    ],
    constraints: ["m == board.length", "n = board[i].length", "1 <= m, n <= 6", "1 <= word.length <= 15", "board and word consist of only lowercase and uppercase English letters."],
    hints: ["DFS from each cell where board[i][j] == word[0].", "Mark cells as visited during recursion, unmark on backtrack."],
    approach: "DFS + backtracking. O(m * n * 4^L) where L = word length.",
  },

  // ═══════════════════════════════════════════════════
  // 9. BINARY TREE
  // ═══════════════════════════════════════════════════
  {
    id: "tree-01",
    name: "Inorder Traversal of Binary Tree",
    module: "Binary Tree",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    gfgUrl: "https://www.geeksforgeeks.org/inorder-traversal-of-binary-tree/",
    companies: ["Microsoft", "Amazon"],
    statement: `Given the root of a binary tree, return the inorder traversal of its nodes' values.

Inorder traversal visits: Left subtree → Root → Right subtree.`,
    examples: [
      { input: "root = [1,null,2,3]", output: "[1,3,2]" },
      { input: "root = []", output: "[]" },
      { input: "root = [1]", output: "[1]" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 100].", "-100 <= Node.val <= 100"],
    hints: ["Recursive: trivial. For iterative: use an explicit stack.", "Iterative: go as left as possible pushing to stack, then process node, then go right."],
    approach: "Recursive: O(n) time. Iterative with stack: O(n) time, O(h) space. Morris traversal: O(n) time, O(1) space.",
  },
  {
    id: "tree-02",
    name: "Maximum Depth of Binary Tree",
    module: "Binary Tree",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    gfgUrl: "https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/",
    companies: ["Amazon", "LinkedIn"],
    statement: `Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "3" },
      { input: "root = [1,null,2]", output: "2" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 10^4].", "-100 <= Node.val <= 100"],
    hints: ["Recursive: depth = 1 + max(depth(left), depth(right)).", "Iterative BFS: count levels."],
    approach: "DFS recursive: O(n) time, O(h) space. BFS: O(n) time, O(w) space.",
  },
  {
    id: "tree-03",
    name: "Balanced Binary Tree",
    module: "Binary Tree",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/balanced-binary-tree/",
    gfgUrl: "https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/",
    companies: ["Amazon", "Bloomberg"],
    statement: `Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.`,
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "true" },
      { input: "root = [1,2,2,3,3,null,null,4,4]", output: "false" },
      { input: "root = []", output: "true" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 5000].", "-10^4 <= Node.val <= 10^4"],
    hints: ["Post-order DFS: return height of subtree, or -1 if unbalanced.", "Avoid recalculating height multiple times — do it in one pass bottom-up."],
    approach: "Bottom-up DFS: O(n) time, O(h) space.",
  },
  {
    id: "tree-04",
    name: "Diameter of Binary Tree",
    module: "Binary Tree",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/diameter-of-binary-tree/",
    gfgUrl: "https://www.geeksforgeeks.org/diameter-of-a-binary-tree/",
    companies: ["Google", "Facebook"],
    statement: `Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.`,
    examples: [
      { input: "root = [1,2,3,4,5]", output: "3", explanation: "3 is the length of the path [4,2,1,3] or [5,2,1,3]." },
      { input: "root = [1,2]", output: "1" },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 10^4].", "-100 <= Node.val <= 100"],
    hints: ["For each node, diameter through it = leftHeight + rightHeight.", "DFS returns height; update global max diameter as you go."],
    approach: "DFS with global variable. O(n) time, O(h) space.",
  },
  {
    id: "tree-05",
    name: "Binary Tree Level Order Traversal",
    module: "Binary Tree",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    gfgUrl: "https://www.geeksforgeeks.org/level-order-tree-traversal/",
    companies: ["Amazon", "Microsoft", "Bloomberg"],
    statement: `Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).`,
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" },
      { input: "root = [1]", output: "[[1]]" },
      { input: "root = []", output: "[]" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 2000].", "-1000 <= Node.val <= 1000"],
    hints: ["BFS with a queue. Process all nodes at current level before moving to next.", "Track level size at the start of each iteration."],
    approach: "BFS. O(n) time, O(n) space.",
  },
  {
    id: "tree-06",
    name: "Lowest Common Ancestor of Binary Tree",
    module: "Binary Tree",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    gfgUrl: "https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/",
    companies: ["Facebook", "Amazon", "Microsoft"],
    statement: `Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."`,
    examples: [
      { input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1", output: "3" },
      { input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4", output: "5" },
    ],
    constraints: ["The number of nodes in the tree is in the range [2, 10^5].", "-10^9 <= Node.val <= 10^9", "All Node.val are unique.", "p != q"],
    hints: ["Post-order DFS. If current node is p or q, return it.", "If both left and right returns are non-null, current node is LCA."],
    approach: "Recursive DFS. O(n) time, O(h) space.",
  },
  {
    id: "tree-07",
    name: "Binary Tree Maximum Path Sum",
    module: "Binary Tree",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    gfgUrl: "https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/",
    companies: ["Amazon", "Microsoft", "Google"],
    statement: `A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.`,
    examples: [
      { input: "root = [1,2,3]", output: "6", explanation: "The optimal path is 2 -> 1 -> 3 with path sum 6." },
      { input: "root = [-10,9,20,null,null,15,7]", output: "42", explanation: "The optimal path is 15 -> 20 -> 7 with sum 42." },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 3 * 10^4].", "-1000 <= Node.val <= 1000"],
    hints: ["For each node, consider it as the 'top' of the path: val + max(0, left) + max(0, right).", "Return val + max(0, left, right) to parent (only one branch can extend upward)."],
    approach: "Post-order DFS with global max. O(n) time, O(h) space.",
  },
  {
    id: "tree-08",
    name: "Serialize and Deserialize Binary Tree",
    module: "Binary Tree",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    gfgUrl: "https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/",
    companies: ["Amazon", "Google", "Facebook", "Microsoft"],
    statement: `Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.`,
    examples: [
      { input: "root = [1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]" },
      { input: "root = []", output: "[]" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 10^4].", "-1000 <= Node.val <= 1000"],
    hints: ["BFS or DFS preorder. Use 'null' marker for missing nodes.", "For deserialization, split by delimiter and reconstruct using queue/index pointer."],
    approach: "BFS or DFS. O(n) time and space for both operations.",
  },

  // ═══════════════════════════════════════════════════
  // 10. BINARY SEARCH TREE
  // ═══════════════════════════════════════════════════
  {
    id: "bst-01",
    name: "Search in a BST",
    module: "Binary Search Tree",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    gfgUrl: "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
    companies: ["Amazon"],
    statement: `You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.`,
    examples: [
      { input: "root = [4,2,7,1,3], val = 2", output: "[2,1,3]" },
      { input: "root = [4,2,7,1,3], val = 5", output: "[]" },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 5000].", "1 <= Node.val <= 10^7", "root is a binary search tree.", "1 <= val <= 10^7"],
    hints: ["If val < root.val, search left. If val > root.val, search right. If equal, return root."],
    approach: "Iterative or recursive. O(h) time where h is tree height.",
  },
  {
    id: "bst-02",
    name: "Insert into a BST",
    module: "Binary Search Tree",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
    gfgUrl: "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
    companies: ["Microsoft"],
    statement: `You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.`,
    examples: [
      { input: "root = [4,2,7,1,3], val = 5", output: "[4,2,7,1,3,5]" },
      { input: "root = [40,20,60,10,30,50,70], val = 25", output: "[40,20,60,10,30,50,70,null,null,25]" },
    ],
    constraints: ["The number of nodes in the tree will be in the range [0, 10^4].", "-10^8 <= Node.val <= 10^8", "All the values Node.val are unique.", "-10^8 <= val <= 10^8"],
    hints: ["Recursively navigate: go left if val < root.val, right otherwise. Insert when null is reached."],
    approach: "Recursive or iterative. O(h) time.",
  },
  {
    id: "bst-03",
    name: "Delete Node in a BST",
    module: "Binary Search Tree",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/delete-node-in-a-bst/",
    gfgUrl: "https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/",
    companies: ["LinkedIn", "Uber"],
    statement: `Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Deletion has three cases:
1. Node has no children — just remove it.
2. Node has one child — replace with that child.
3. Node has two children — replace with inorder successor (smallest in right subtree), then delete the successor.`,
    examples: [
      { input: "root = [5,3,6,2,4,null,7], key = 3", output: "[5,4,6,2,null,null,7] or [5,2,6,null,4,null,7]" },
      { input: "root = [5,3,6,2,4,null,7], key = 0", output: "[5,3,6,2,4,null,7]" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 10^4].", "-10^5 <= Node.val <= 10^5", "Each node has a unique value."],
    hints: ["Find the node. For two children: find inorder successor (leftmost of right subtree), copy its value, delete the successor."],
    approach: "Recursive. O(h) time.",
  },
  {
    id: "bst-04",
    name: "Validate Binary Search Tree",
    module: "Binary Search Tree",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/validate-binary-search-tree/",
    gfgUrl: "https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/",
    companies: ["Amazon", "Bloomberg", "Facebook"],
    statement: `Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.`,
    examples: [
      { input: "root = [2,1,3]", output: "true" },
      { input: "root = [5,1,4,null,null,3,6]", output: "false", explanation: "The root node's value is 5 but its right child's value is 4." },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 10^4].", "-2^31 <= Node.val <= 2^31 - 1"],
    hints: ["Pass min and max bounds while recursing. Left child must be < current node value; right child must be > current node value.", "Don't just check parent-child relationship — the entire left subtree must be less than root."],
    approach: "DFS with min/max bounds: O(n) time, O(h) space.",
  },
  {
    id: "bst-05",
    name: "Kth Smallest Element in BST",
    module: "Binary Search Tree",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    gfgUrl: "https://www.geeksforgeeks.org/find-k-th-smallest-element-in-bst-order-statistics-in-bst/",
    companies: ["Bloomberg", "Amazon"],
    statement: `Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.`,
    examples: [
      { input: "root = [3,1,4,null,2], k = 1", output: "1" },
      { input: "root = [5,3,6,2,4,null,null,1], k = 3", output: "3" },
    ],
    constraints: ["The number of nodes in the tree is n.", "1 <= k <= n <= 10^4", "0 <= Node.val <= 10^4"],
    hints: ["Inorder traversal of BST gives sorted order. Return the kth element.", "Use iterative inorder with early stopping for efficiency."],
    approach: "Inorder traversal. O(H + k) time where H is tree height.",
  },

  // ═══════════════════════════════════════════════════
  // 11. HEAPS
  // ═══════════════════════════════════════════════════
  {
    id: "heap-01",
    name: "Top K Frequent Elements",
    module: "Heaps",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/top-k-frequent-elements/",
    gfgUrl: "https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/",
    companies: ["Amazon", "Facebook", "Google"],
    statement: `Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.`,
    examples: [
      { input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" },
      { input: "nums = [1], k = 1", output: "[1]" },
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4", "k is in the range [1, the number of unique elements in the array].", "It is guaranteed that the answer is unique."],
    hints: ["Build a frequency map. Use a min-heap of size k.", "Bucket sort approach: O(n) — create buckets where index = frequency."],
    approach: "Min-heap of size k: O(n log k). Bucket sort: O(n).",
  },
  {
    id: "heap-02",
    name: "Find Median from Data Stream",
    module: "Heaps",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/find-median-from-data-stream/",
    gfgUrl: "https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/",
    companies: ["Amazon", "Google", "Microsoft"],
    statement: `The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

Implement the MedianFinder class:
- MedianFinder() initializes the MedianFinder object.
- void addNum(int num) adds the integer num from the data stream to the data structure.
- double findMedian() returns the median of all elements so far.`,
    examples: [
      { input: '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n[[],[1],[2],[],[3],[]]', output: "[null,null,null,1.5,null,2.0]" },
    ],
    constraints: ["-10^5 <= num <= 10^5", "There will be at least one element in the data structure before calling findMedian.", "At most 5 * 10^4 calls will be made to addNum and findMedian."],
    hints: ["Maintain a max-heap for the lower half and a min-heap for the upper half.", "Keep them balanced (size difference ≤ 1). Median is top of larger heap or average of both tops."],
    approach: "Two heaps. O(log n) addNum, O(1) findMedian.",
  },
  {
    id: "heap-03",
    name: "Task Scheduler",
    module: "Heaps",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/task-scheduler/",
    gfgUrl: "https://www.geeksforgeeks.org/task-scheduler/",
    companies: ["Amazon", "Facebook"],
    statement: `Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown interval between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.`,
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: "8", explanation: "A -> B -> idle -> A -> B -> idle -> A -> B." },
      { input: 'tasks = ["A","A","A","B","B","B"], n = 0', output: "6" },
    ],
    constraints: ["1 <= task.length <= 10^4", "tasks[i] is upper-case English letter.", "0 <= n <= 100"],
    hints: ["Greedy: always schedule the most frequent remaining task.", "Formula: result = max(tasks.length, (maxFreq-1)*(n+1) + countOfMaxFreq)"],
    approach: "Greedy with max-heap or mathematical formula. O(n) time.",
  },
  {
    id: "heap-04",
    name: "K Closest Points to Origin",
    module: "Heaps",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/k-closest-points-to-origin/",
    gfgUrl: "https://www.geeksforgeeks.org/find-k-closest-points-to-the-origin/",
    companies: ["Amazon", "Facebook", "Microsoft"],
    statement: `Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)² + (y1 - y2)²).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).`,
    examples: [
      { input: "points = [[1,3],[-2,2]], k = 1", output: "[[-2,2]]" },
      { input: "points = [[3,3],[5,-1],[-2,4]], k = 2", output: "[[3,3],[-2,4]]" },
    ],
    constraints: ["1 <= k <= points.length <= 10^4", "-10^4 < xi, yi < 10^4"],
    hints: ["Max-heap of size k: if current distance < heap top, replace.", "QuickSelect for O(n) average time."],
    approach: "Max-heap of size k: O(n log k). QuickSelect: O(n) average.",
  },

  // ═══════════════════════════════════════════════════
  // 12. GREEDY
  // ═══════════════════════════════════════════════════
  {
    id: "gr-01",
    name: "Jump Game",
    module: "Greedy",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/jump-game/",
    gfgUrl: "https://www.geeksforgeeks.org/jump-game/",
    companies: ["Amazon", "Microsoft"],
    statement: `You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.`,
    examples: [
      { input: "nums = [2,3,1,1,4]", output: "true", explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index." },
      { input: "nums = [3,2,1,0,4]", output: "false" },
    ],
    constraints: ["1 <= nums.length <= 10^4", "0 <= nums[i] <= 10^5"],
    hints: ["Track the maximum reachable index. If current index > maxReach, return false.", "If maxReach >= last index, return true."],
    approach: "Greedy: O(n) time, O(1) space.",
  },
  {
    id: "gr-02",
    name: "Jump Game II",
    module: "Greedy",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/jump-game-ii/",
    gfgUrl: "https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/",
    companies: ["Amazon", "Microsoft"],
    statement: `You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where 0 <= j <= nums[i].

Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].`,
    examples: [
      { input: "nums = [2,3,1,1,4]", output: "2", explanation: "Jump from index 0 to 1 (jump of 1), then to last index (jump of 3)." },
      { input: "nums = [2,3,0,1,4]", output: "2" },
    ],
    constraints: ["1 <= nums.length <= 10^4", "0 <= nums[i] <= 1000", "The input is generated such that you can reach nums[n - 1]."],
    hints: ["BFS-like greedy: at each 'level' (jump), find the farthest reachable position.", "Increment jumps when you pass the current 'boundary'."],
    approach: "Greedy (BFS-like): O(n) time, O(1) space.",
  },
  {
    id: "gr-03",
    name: "Gas Station",
    module: "Greedy",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/gas-station/",
    gfgUrl: "https://www.geeksforgeeks.org/find-a-tour-that-visits-all-stations/",
    companies: ["Amazon"],
    statement: `There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.`,
    examples: [
      { input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", output: "3" },
      { input: "gas = [2,3,4], cost = [3,4,3]", output: "-1" },
    ],
    constraints: ["n == gas.length == cost.length", "1 <= n <= 10^5", "0 <= gas[i], cost[i] <= 10^4"],
    hints: ["If total gas < total cost, return -1.", "Track current tank. If it goes negative, start fresh from next station."],
    approach: "Greedy: O(n) time, O(1) space.",
  },
  {
    id: "gr-04",
    name: "Hand of Straights",
    module: "Greedy",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/hand-of-straights/",
    gfgUrl: "https://www.geeksforgeeks.org/hand-of-straights/",
    companies: ["Google"],
    statement: `Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.`,
    examples: [
      { input: "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3", output: "true", explanation: "Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]." },
      { input: "hand = [1,2,3,4,5], groupSize = 4", output: "false" },
    ],
    constraints: ["1 <= hand.length <= 10^4", "0 <= hand[i] <= 10^9", "1 <= groupSize <= hand.length"],
    hints: ["Sort and use a frequency map. Greedily form groups starting from smallest available card.", "For each group, reduce frequency of groupSize consecutive values by 1."],
    approach: "Greedy with sorted map. O(n log n) time.",
  },

  // ═══════════════════════════════════════════════════
  // 13. DYNAMIC PROGRAMMING
  // ═══════════════════════════════════════════════════
  {
    id: "dp-01",
    name: "Climbing Stairs",
    module: "Dynamic Programming",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/climbing-stairs/",
    gfgUrl: "https://www.geeksforgeeks.org/count-ways-reach-nth-stair/",
    companies: ["Amazon", "Adobe", "Apple"],
    statement: `You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    examples: [
      { input: "n = 2", output: "2", explanation: "Two ways: 1+1 or 2." },
      { input: "n = 3", output: "3", explanation: "Three ways: 1+1+1, 1+2, 2+1." },
    ],
    constraints: ["1 <= n <= 45"],
    hints: ["dp[i] = dp[i-1] + dp[i-2]. This is essentially Fibonacci.", "Base cases: dp[1] = 1, dp[2] = 2."],
    approach: "DP or Fibonacci. O(n) time, O(1) space.",
  },
  {
    id: "dp-02",
    name: "House Robber",
    module: "Dynamic Programming",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/house-robber/",
    gfgUrl: "https://www.geeksforgeeks.org/find-maximum-possible-stolen-value-houses/",
    companies: ["Amazon", "Airbnb"],
    statement: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.`,
    examples: [
      { input: "nums = [1,2,3,1]", output: "4", explanation: "Rob house 1 (money=1) then house 3 (money=3). Total = 4." },
      { input: "nums = [2,7,9,3,1]", output: "12" },
    ],
    constraints: ["1 <= nums.length <= 100", "0 <= nums[i] <= 400"],
    hints: ["dp[i] = max(dp[i-1], dp[i-2] + nums[i]).", "Either skip current house or rob it (can't rob previous)."],
    approach: "1D DP: O(n) time. Space-optimized to O(1) with two variables.",
  },
  {
    id: "dp-03",
    name: "House Robber II",
    module: "Dynamic Programming",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/house-robber-ii/",
    gfgUrl: "https://www.geeksforgeeks.org/house-robber-ii/",
    companies: ["Microsoft"],
    statement: `You are a professional robber planning to rob houses along a street. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.`,
    examples: [
      { input: "nums = [2,3,2]", output: "3" },
      { input: "nums = [1,2,3,1]", output: "4" },
      { input: "nums = [1,2,3]", output: "3" },
    ],
    constraints: ["1 <= nums.length <= 100", "0 <= nums[i] <= 1000"],
    hints: ["Can't rob both first and last house. Run House Robber I on [0..n-2] and [1..n-1], take max."],
    approach: "Two passes of House Robber I. O(n) time, O(1) space.",
  },
  {
    id: "dp-04",
    name: "Longest Increasing Subsequence",
    module: "Dynamic Programming",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/longest-increasing-subsequence/",
    gfgUrl: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
    companies: ["Microsoft", "Amazon", "Google"],
    statement: `Given an integer array nums, return the length of the longest strictly increasing subsequence.`,
    examples: [
      { input: "nums = [10,9,2,5,3,7,101,18]", output: "4", explanation: "The LIS is [2,3,7,101] or [2,3,7,18], length 4." },
      { input: "nums = [0,1,0,3,2,3]", output: "4" },
      { input: "nums = [7,7,7,7,7,7,7]", output: "1" },
    ],
    constraints: ["1 <= nums.length <= 2500", "-10^4 <= nums[i] <= 10^4"],
    hints: ["DP: dp[i] = max(dp[j]+1) for all j < i where nums[j] < nums[i].", "Binary search + patience sorting for O(n log n)."],
    approach: "DP: O(n²) time. Binary search (tails array): O(n log n) time.",
  },
  {
    id: "dp-05",
    name: "Coin Change",
    module: "Dynamic Programming",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/coin-change/",
    gfgUrl: "https://www.geeksforgeeks.org/coin-change-dp-7/",
    companies: ["Amazon", "Google", "Microsoft"],
    statement: `You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.`,
    examples: [
      { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1." },
      { input: "coins = [2], amount = 3", output: "-1" },
      { input: "coins = [1], amount = 0", output: "0" },
    ],
    constraints: ["1 <= coins.length <= 12", "1 <= coins[i] <= 2^31 - 1", "0 <= amount <= 10^4"],
    hints: ["dp[amount] = min coins to make amount. dp[0] = 0.", "For each amount a, try each coin c: dp[a] = min(dp[a], dp[a-c]+1)."],
    approach: "Bottom-up DP: O(amount * coins.length) time.",
  },
  {
    id: "dp-06",
    name: "Longest Common Subsequence",
    module: "Dynamic Programming",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/longest-common-subsequence/",
    gfgUrl: "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/",
    companies: ["Amazon", "Google", "Bloomberg"],
    statement: `Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

A common subsequence of two strings is a subsequence that is common to both strings.`,
    examples: [
      { input: 'text1 = "abcde", text2 = "ace"', output: "3", explanation: 'LCS is "ace", length 3.' },
      { input: 'text1 = "abc", text2 = "abc"', output: "3" },
      { input: 'text1 = "abc", text2 = "def"', output: "0" },
    ],
    constraints: ["1 <= text1.length, text2.length <= 1000", "text1 and text2 consist of only lowercase English characters."],
    hints: ["2D DP: dp[i][j] = LCS of text1[0..i] and text2[0..j].", "If chars match: dp[i][j] = dp[i-1][j-1]+1. Else: max(dp[i-1][j], dp[i][j-1])."],
    approach: "2D DP: O(m*n) time and space. Can optimize to O(min(m,n)) space.",
  },
  {
    id: "dp-07",
    name: "Edit Distance",
    module: "Dynamic Programming",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/edit-distance/",
    gfgUrl: "https://www.geeksforgeeks.org/edit-distance-dp-5/",
    companies: ["Amazon", "Google", "Microsoft"],
    statement: `Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:
- Insert a character
- Delete a character
- Replace a character`,
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: "3", explanation: "horse → rorse (replace 'h' with 'r') → rose (delete 'r') → ros (delete 'e')." },
      { input: 'word1 = "intention", word2 = "execution"', output: "5" },
    ],
    constraints: ["0 <= word1.length, word2.length <= 500", "word1 and word2 consist of lowercase English letters."],
    hints: ["dp[i][j] = min edits to convert word1[0..i] to word2[0..j].", "If chars match: dp[i][j] = dp[i-1][j-1]. Else: 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])."],
    approach: "2D DP: O(m*n) time and space.",
  },
  {
    id: "dp-08",
    name: "0/1 Knapsack Problem",
    module: "Dynamic Programming",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/partition-equal-subset-sum/",
    gfgUrl: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
    companies: ["Amazon", "Microsoft"],
    statement: `Given weights and values of n items and a knapsack of capacity W, find the maximum value achievable within the weight limit. Each item can be taken at most once.

Also solve the variant: Partition Equal Subset Sum — given a non-empty array of positive integers, determine if it can be partitioned into two subsets with equal sum.`,
    examples: [
      { input: "weights = [1,3,4,5], values = [1,4,5,7], W = 7", output: "9", explanation: "Take items 2 and 3 (weight 3+4=7, value 4+5=9)." },
      { input: "nums = [1,5,11,5] (partition variant)", output: "true", explanation: "[1,5,5] and [11] both sum to 11." },
    ],
    constraints: ["1 <= n <= 300", "0 <= weights[i] <= 1000", "0 <= W <= 1000"],
    hints: ["dp[i][w] = max value using first i items with capacity w.", "For each item: either skip it or include it (if weight allows)."],
    approach: "2D DP: O(n*W) time. 1D DP: O(W) space using reverse iteration.",
  },
  {
    id: "dp-09",
    name: "Word Break",
    module: "Dynamic Programming",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/word-break/",
    gfgUrl: "https://www.geeksforgeeks.org/word-break-problem-dp-32/",
    companies: ["Amazon", "Google", "Facebook"],
    statement: `Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.`,
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: "true" },
      { input: 's = "applepenapple", wordDict = ["apple","pen"]', output: "true" },
      { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: "false" },
    ],
    constraints: ["1 <= s.length <= 300", "1 <= wordDict.length <= 1000", "1 <= wordDict[i].length <= 20"],
    hints: ["dp[i] = can s[0..i-1] be segmented. dp[0] = true.", "For each i, check all j < i: if dp[j] && s[j..i] in dict, dp[i] = true."],
    approach: "DP: O(n² * m) time where m = max word length.",
  },
  {
    id: "dp-10",
    name: "Unique Paths",
    module: "Dynamic Programming",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/unique-paths/",
    gfgUrl: "https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxmgrid/",
    companies: ["Amazon", "Bloomberg"],
    statement: `There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.`,
    examples: [
      { input: "m = 3, n = 7", output: "28" },
      { input: "m = 3, n = 2", output: "3" },
    ],
    constraints: ["1 <= m, n <= 100"],
    hints: ["dp[i][j] = dp[i-1][j] + dp[i][j-1]. First row and column are all 1s.", "Math: C(m+n-2, m-1) combinations."],
    approach: "DP: O(m*n) time. Math formula: O(m+n) time, O(1) space.",
  },
  {
    id: "dp-11",
    name: "Palindromic Substrings",
    module: "Dynamic Programming",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/palindromic-substrings/",
    gfgUrl: "https://www.geeksforgeeks.org/count-palindrome-sub-strings-string/",
    companies: ["Facebook", "Amazon"],
    statement: `Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.`,
    examples: [
      { input: 's = "abc"', output: "3", explanation: 'Three palindromic strings: "a", "b", "c".' },
      { input: 's = "aaa"', output: "6", explanation: 'Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".' },
    ],
    constraints: ["1 <= s.length <= 1000", "s consists of lowercase English letters."],
    hints: ["Expand around center: for each character (and gap), expand outward while palindrome holds.", "Count each valid expansion."],
    approach: "Expand around center: O(n²) time, O(1) space. DP also O(n²).",
  },
  {
    id: "dp-12",
    name: "Longest Palindromic Substring",
    module: "Dynamic Programming",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/longest-palindromic-substring/",
    gfgUrl: "https://www.geeksforgeeks.org/longest-palindromic-substring/",
    companies: ["Amazon", "Microsoft", "Bloomberg"],
    statement: `Given a string s, return the longest palindromic substring in s.`,
    examples: [
      { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' },
      { input: 's = "cbbd"', output: '"bb"' },
    ],
    constraints: ["1 <= s.length <= 1000", "s consist of only digits and English letters."],
    hints: ["Expand around center for each position (odd/even length palindromes).", "Manacher's algorithm for O(n) time."],
    approach: "Expand around center: O(n²) time. Manacher's: O(n) time.",
  },

  // ═══════════════════════════════════════════════════
  // 14. GRAPHS
  // ═══════════════════════════════════════════════════
  {
    id: "gr-g01",
    name: "Number of Islands",
    module: "Graphs",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/number-of-islands/",
    gfgUrl: "https://www.geeksforgeeks.org/find-number-of-islands/",
    companies: ["Amazon", "Facebook", "Microsoft", "Google"],
    statement: `Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.`,
    examples: [
      { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: "1" },
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: "3" },
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300", "grid[i][j] is '0' or '1'."],
    hints: ["For each unvisited '1', run DFS/BFS to mark the entire island as visited.", "Count how many times you start a DFS/BFS."],
    approach: "DFS/BFS: O(m*n) time, O(m*n) space. Union-Find also works.",
  },
  {
    id: "gr-g02",
    name: "Clone Graph",
    module: "Graphs",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/clone-graph/",
    gfgUrl: "https://www.geeksforgeeks.org/clone-an-undirected-graph/",
    companies: ["Facebook", "Amazon", "Google"],
    statement: `Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.`,
    examples: [
      { input: "adjList = [[2,4],[1,3],[2,4],[1,3]]", output: "[[2,4],[1,3],[2,4],[1,3]]" },
      { input: "adjList = [[]]", output: "[[]]" },
      { input: "adjList = []", output: "[]" },
    ],
    constraints: ["The number of nodes in the graph is in the range [0, 100].", "1 <= Node.val <= 100", "Node.val is unique for each node.", "There are no repeated edges and no self-loops in the graph."],
    hints: ["DFS with a HashMap: old node → cloned node. If already cloned, return it from map.", "Clone node first, then recursively clone neighbors."],
    approach: "DFS with visited map. O(V+E) time.",
  },
  {
    id: "gr-g03",
    name: "Course Schedule (Cycle Detection)",
    module: "Graphs",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/course-schedule/",
    gfgUrl: "https://www.geeksforgeeks.org/detect-cycle-in-a-directed-graph/",
    companies: ["Amazon", "Facebook", "Yelp"],
    statement: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

Return true if you can finish all courses. Otherwise, return false.`,
    examples: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", output: "true" },
      { input: "numCourses = 2, prerequisites = [[1,0],[0,1]]", output: "false" },
    ],
    constraints: ["1 <= numCourses <= 2000", "0 <= prerequisites.length <= 5000", "prerequisites[i].length == 2", "All the pairs are unique."],
    hints: ["Problem reduces to: does this directed graph have a cycle?", "DFS with three states: unvisited (0), visiting (1), visited (2). Cycle = edge to a 'visiting' node."],
    approach: "DFS cycle detection or Kahn's algorithm (BFS topological sort). O(V+E).",
  },
  {
    id: "gr-g04",
    name: "Topological Sort",
    module: "Graphs",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/course-schedule-ii/",
    gfgUrl: "https://www.geeksforgeeks.org/topological-sorting/",
    companies: ["Amazon", "Google"],
    statement: `There are a total of numCourses courses you have to take. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.`,
    examples: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", output: "[0,1]" },
      { input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]", output: "[0,2,1,3]" },
    ],
    constraints: ["1 <= numCourses <= 2000", "0 <= prerequisites.length <= numCourses * (numCourses - 1)"],
    hints: ["Kahn's Algorithm: Start with nodes having in-degree 0. Process and reduce neighbors' in-degree.", "Or DFS post-order: add to result after visiting all neighbors."],
    approach: "Kahn's BFS or DFS post-order. O(V+E) time.",
  },
  {
    id: "gr-g05",
    name: "Pacific Atlantic Water Flow",
    module: "Graphs",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    gfgUrl: "https://www.geeksforgeeks.org/pacific-atlantic-water-flow/",
    companies: ["Google", "Amazon"],
    statement: `There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

Water can only flow in four directions (up, down, left, right) from a cell to an adjacent one with an equal or lower height.

Given an m x n integer matrix heights, return a list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.`,
    examples: [
      { input: "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]", output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]" },
    ],
    constraints: ["m == heights.length", "n == heights[i].length", "1 <= m, n <= 200", "0 <= heights[i][j] <= 10^5"],
    hints: ["Reverse problem: start DFS from ocean borders, flow uphill (to equal or higher cells).", "BFS/DFS from Pacific border cells and from Atlantic border cells separately. Intersection = answer."],
    approach: "Reverse DFS/BFS from both oceans. O(m*n) time.",
  },
  {
    id: "gr-g06",
    name: "Dijkstra's Shortest Path",
    module: "Graphs",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/network-delay-time/",
    gfgUrl: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
    companies: ["Amazon", "Google", "Microsoft"],
    statement: `You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.`,
    examples: [
      { input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2", output: "2" },
      { input: "times = [[1,2,1]], n = 2, k = 1", output: "1" },
    ],
    constraints: ["1 <= k <= n <= 100", "1 <= times.length <= 6000", "times[i].length == 3", "1 <= wi <= 100"],
    hints: ["Dijkstra's with a min-heap. Start from node k, relax edges.", "Answer = max of all shortest distances. If any is infinity, return -1."],
    approach: "Dijkstra's with priority queue. O((V+E) log V) time.",
  },
  {
    id: "gr-g07",
    name: "Number of Connected Components in Undirected Graph",
    module: "Graphs",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    gfgUrl: "https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/",
    companies: ["LinkedIn", "Google"],
    statement: `You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.`,
    examples: [
      { input: "n = 5, edges = [[0,1],[1,2],[3,4]]", output: "2" },
      { input: "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]", output: "1" },
    ],
    constraints: ["1 <= n <= 2000", "1 <= edges.length <= 5000", "edges[i].length == 2", "0 <= ai <= bi < n", "ai != bi"],
    hints: ["DFS/BFS: count components by counting DFS starts.", "Union-Find: union edge endpoints, count distinct root nodes."],
    approach: "DFS/BFS or Union-Find. O(V+E) time.",
  },
  {
    id: "gr-g08",
    name: "Minimum Spanning Tree (Kruskal/Prim)",
    module: "Graphs",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
    gfgUrl: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
    companies: ["Amazon", "Google"],
    statement: `You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.`,
    examples: [
      { input: "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]", output: "20" },
      { input: "points = [[3,12],[-2,5],[-4,1]]", output: "18" },
    ],
    constraints: ["1 <= points.length <= 1000", "-10^6 <= xi, yi <= 10^6", "All pairs (xi, yi) are distinct."],
    hints: ["Prim's: start from any node, always add the cheapest edge connecting unvisited node.", "Kruskal's: sort edges by weight, add if it doesn't form a cycle (Union-Find)."],
    approach: "Prim's: O(V²) or O(E log V) with heap. Kruskal's: O(E log E).",
  },

  // ═══════════════════════════════════════════════════
  // 15. TRIES
  // ═══════════════════════════════════════════════════
  {
    id: "trie-01",
    name: "Implement Trie (Prefix Tree)",
    module: "Tries",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    gfgUrl: "https://www.geeksforgeeks.org/trie-insert-and-search/",
    companies: ["Google", "Facebook", "Amazon", "Microsoft"],
    statement: `A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:
- Trie() Initializes the trie object.
- void insert(String word) Inserts the string word into the trie.
- boolean search(String word) Returns true if the string word is in the trie, and false otherwise.
- boolean startsWith(String prefix) Returns true if there is a previously inserted string that has the prefix prefix, and false otherwise.`,
    examples: [
      { input: '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]', output: "[null,null,true,false,true,null,true]" },
    ],
    constraints: ["1 <= word.length, prefix.length <= 2000", "word and prefix consist only of lowercase English letters.", "At most 3 * 10^4 calls in total will be made to insert, search, and startsWith."],
    hints: ["TrieNode has children[26] and isEnd flag.", "insert: create nodes along the path. search: traverse, check isEnd. startsWith: traverse, return true if path exists."],
    approach: "Each operation O(L) where L = word length. O(total chars) space.",
  },
  {
    id: "trie-02",
    name: "Word Search II",
    module: "Tries",
    difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/word-search-ii/",
    gfgUrl: "https://www.geeksforgeeks.org/boggle-set-2-using-trie/",
    companies: ["Amazon", "Microsoft", "Google"],
    statement: `Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.`,
    examples: [
      { input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: '["eat","oath"]' },
    ],
    constraints: ["m == board.length", "n == board[i].length", "1 <= m, n <= 12", "board[i][j] is a lowercase English letter.", "1 <= words.length <= 3 * 10^4"],
    hints: ["Build a Trie from all words. DFS from every cell, following Trie paths.", "Prune DFS when current path has no Trie prefix. Mark found words to avoid duplicates."],
    approach: "Trie + DFS backtracking. O(m*n*4*3^(L-1)) where L = max word length.",
  },
  {
    id: "trie-03",
    name: "Design Add and Search Words Data Structure",
    module: "Tries",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    gfgUrl: "https://www.geeksforgeeks.org/add-and-search-word-data-structure-design/",
    companies: ["Facebook"],
    statement: `Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:
- WordDictionary() Initializes the object.
- void addWord(word) Adds word to the data structure, it can be matched later.
- bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.`,
    examples: [
      { input: '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]', output: "[null,null,null,null,false,true,true,true]" },
    ],
    constraints: ["1 <= word.length <= 25", "word in addWord consists of lowercase English letters.", "word in search consist of '.' or lowercase English letters."],
    hints: ["Standard Trie for addWord. For search, DFS with wildcard: when '.' is encountered, try all 26 children."],
    approach: "Trie with recursive DFS for wildcard. O(L) add, O(26^L) worst search.",
  },

  // ═══════════════════════════════════════════════════
  // 16. BIT MANIPULATION
  // ═══════════════════════════════════════════════════
  {
    id: "bit-01",
    name: "Number of 1 Bits (Hamming Weight)",
    module: "Bit Manipulation",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/number-of-1-bits/",
    gfgUrl: "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/",
    companies: ["Apple", "Microsoft"],
    statement: `Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).`,
    examples: [
      { input: "n = 11 (binary: 1011)", output: "3", explanation: "The input binary string 1011 has a total of three set bits." },
      { input: "n = 128 (binary: 10000000)", output: "1" },
      { input: "n = 2147483645 (binary: 1111111111111111111111111111101)", output: "30" },
    ],
    constraints: ["1 <= n <= 2^31 - 1"],
    hints: ["n & (n-1) clears the lowest set bit. Count how many times you can do this before n becomes 0.", "Or use n & 1 to check last bit, then right shift."],
    approach: "Brian Kernighan's: O(number of set bits). Built-in: O(1).",
  },
  {
    id: "bit-02",
    name: "Counting Bits",
    module: "Bit Manipulation",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/counting-bits/",
    gfgUrl: "https://www.geeksforgeeks.org/count-set-bits-in-all-numbers-from-1-to-n/",
    companies: ["Amazon"],
    statement: `Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.`,
    examples: [
      { input: "n = 2", output: "[0,1,1]" },
      { input: "n = 5", output: "[0,1,1,2,1,2]" },
    ],
    constraints: ["0 <= n <= 10^5"],
    hints: ["dp[i] = dp[i >> 1] + (i & 1). The number of 1s in i = 1s in i/2, plus 1 if i is odd."],
    approach: "DP: O(n) time, O(n) space.",
  },
  {
    id: "bit-03",
    name: "Missing Number",
    module: "Bit Manipulation",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/missing-number/",
    gfgUrl: "https://www.geeksforgeeks.org/find-the-missing-number/",
    companies: ["Microsoft", "Amazon"],
    statement: `Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.`,
    examples: [
      { input: "nums = [3,0,1]", output: "2" },
      { input: "nums = [0,1]", output: "2" },
      { input: "nums = [9,6,4,2,3,5,7,0,1]", output: "8" },
    ],
    constraints: ["n == nums.length", "1 <= n <= 10^4", "0 <= nums[i] <= n", "All the numbers of nums are unique."],
    hints: ["XOR all indices and all values. Everything cancels except the missing number.", "Or use Gauss formula: expected sum = n*(n+1)/2, subtract actual sum."],
    approach: "XOR or math: O(n) time, O(1) space.",
  },
  {
    id: "bit-04",
    name: "Sum of Two Integers (Without +/- operators)",
    module: "Bit Manipulation",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/sum-of-two-integers/",
    gfgUrl: "https://www.geeksforgeeks.org/add-two-numbers-without-using-arithmetic-operators/",
    companies: ["Facebook", "Amazon"],
    statement: `Given two integers a and b, return the sum of the two integers without using the operators + and -.`,
    examples: [
      { input: "a = 1, b = 2", output: "3" },
      { input: "a = 2, b = 3", output: "5" },
    ],
    constraints: ["-1000 <= a, b <= 1000"],
    hints: ["XOR gives sum without carry: a ^ b.", "AND with left shift gives carry: (a & b) << 1.", "Repeat until carry is 0."],
    approach: "Bit manipulation iteratively. O(1) time for bounded inputs.",
  },
  {
    id: "bit-05",
    name: "Reverse Bits",
    module: "Bit Manipulation",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/reverse-bits/",
    gfgUrl: "https://www.geeksforgeeks.org/write-an-efficient-c-program-to-reverse-bits-of-a-number/",
    companies: ["Apple", "Amazon"],
    statement: `Reverse bits of a given 32 bits unsigned integer.`,
    examples: [
      { input: "n = 00000010100101000001111010011100", output: "00111001011110000010100101000000", explanation: "Input: 43261596, Output: 964176192" },
    ],
    constraints: ["The input must be a binary string of length 32."],
    hints: ["Take last bit (n & 1), append to result. Right shift n. Repeat 32 times."],
    approach: "Bit manipulation: O(1) — exactly 32 iterations.",
  },

  // ═══════════════════════════════════════════════════
  // 17. MATH & NUMBER THEORY
  // ═══════════════════════════════════════════════════
  {
    id: "math-01",
    name: "Rotate Image",
    module: "Math & Number Theory",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/rotate-image/",
    gfgUrl: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
    companies: ["Amazon", "Microsoft", "Apple"],
    statement: `You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.`,
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" },
      { input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]" },
    ],
    constraints: ["n == matrix.length == matrix[i].length", "1 <= n <= 20", "-1000 <= matrix[i][j] <= 1000"],
    hints: ["Step 1: Transpose the matrix (swap matrix[i][j] with matrix[j][i]).", "Step 2: Reverse each row."],
    approach: "Transpose + reverse rows. O(n²) time, O(1) space.",
  },
  {
    id: "math-02",
    name: "Spiral Matrix",
    module: "Math & Number Theory",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/spiral-matrix/",
    gfgUrl: "https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/",
    companies: ["Microsoft", "Amazon", "Apple"],
    statement: `Given an m x n matrix, return all elements of the matrix in spiral order.`,
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" },
      { input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", output: "[1,2,3,4,8,12,11,10,9,5,6,7]" },
    ],
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 10", "-100 <= matrix[i][j] <= 100"],
    hints: ["Maintain four boundaries: top, bottom, left, right. Traverse right, down, left, up, then shrink boundaries."],
    approach: "Layer simulation. O(m*n) time, O(1) space.",
  },
  {
    id: "math-03",
    name: "Happy Number",
    module: "Math & Number Theory",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/happy-number/",
    gfgUrl: "https://www.geeksforgeeks.org/happy-number/",
    companies: ["Amazon", "Adobe"],
    statement: `Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:
- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.`,
    examples: [
      { input: "n = 19", output: "true", explanation: "1²+9²=82, 8²+2²=68, 6²+8²=100, 1²+0²+0²=1." },
      { input: "n = 2", output: "false" },
    ],
    constraints: ["1 <= n <= 2^31 - 1"],
    hints: ["Use Floyd's cycle detection on the sequence, or HashSet to detect repeats.", "All non-happy numbers eventually reach 4 in the cycle."],
    approach: "HashSet or Floyd's cycle detection. O(log n) iterations.",
  },
  {
    id: "math-04",
    name: "Power Function (Fast Exponentiation)",
    module: "Math & Number Theory",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/powx-n/",
    gfgUrl: "https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/",
    companies: ["Facebook", "Bloomberg", "Google"],
    statement: `Implement pow(x, n), which calculates x raised to the power n (i.e., xⁿ).`,
    examples: [
      { input: "x = 2.00000, n = 10", output: "1024.00000" },
      { input: "x = 2.10000, n = 3", output: "9.26100" },
      { input: "x = 2.00000, n = -2", output: "0.25000", explanation: "2^(-2) = 1/4 = 0.25." },
    ],
    constraints: ["-100.0 < x < 100.0", "-2^31 <= n <= 2^31-1", "n is an integer.", "-10^4 <= xⁿ <= 10^4"],
    hints: ["Fast exponentiation (binary exponentiation): x^n = (x^(n/2))² if n even, x * x^(n-1) if odd.", "Handle negative n: x^(-n) = 1/x^n."],
    approach: "Recursive/iterative fast exponentiation. O(log n) time.",
  },

  // ═══════════════════════════════════════════════════
  // 18. INTERVALS
  // ═══════════════════════════════════════════════════
  {
    id: "int-01",
    name: "Merge Intervals",
    module: "Intervals",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/merge-intervals/",
    gfgUrl: "https://www.geeksforgeeks.org/merging-intervals/",
    companies: ["Facebook", "Amazon", "Google", "Microsoft"],
    statement: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    examples: [
      { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]." },
      { input: "intervals = [[1,4],[4,5]]", output: "[[1,5]]" },
    ],
    constraints: ["1 <= intervals.length <= 10^4", "intervals[i].length == 2", "0 <= starti <= endi <= 10^4"],
    hints: ["Sort by start time. Merge if current start ≤ last merged end. Otherwise append new interval."],
    approach: "Sort + linear scan. O(n log n) time.",
  },
  {
    id: "int-02",
    name: "Insert Interval",
    module: "Intervals",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/insert-interval/",
    gfgUrl: "https://www.geeksforgeeks.org/insert-and-merge-a-new-interval-in-sorted-list-of-disjoint-intervals/",
    companies: ["Facebook", "LinkedIn", "Google"],
    statement: `You are given an array of non-overlapping intervals intervals sorted in ascending order by starti and a new interval newInterval.

Insert newInterval into intervals so that the list of intervals is still sorted and non-overlapping (merge if necessary).

Return the resulting list of intervals.`,
    examples: [
      { input: "intervals = [[1,3],[6,9]], newInterval = [2,5]", output: "[[1,5],[6,9]]" },
      { input: "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]", output: "[[1,2],[3,10],[12,16]]" },
    ],
    constraints: ["0 <= intervals.length <= 10^4", "intervals[i].length == 2", "0 <= starti <= endi <= 10^5"],
    hints: ["Three phases: add all intervals that end before newInterval starts, merge all that overlap, add all after."],
    approach: "Linear scan. O(n) time.",
  },
  {
    id: "int-03",
    name: "Non-overlapping Intervals",
    module: "Intervals",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/non-overlapping-intervals/",
    gfgUrl: "https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/",
    companies: ["Google"],
    statement: `Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.`,
    examples: [
      { input: "intervals = [[1,2],[2,3],[3,4],[1,3]]", output: "1", explanation: "Remove [1,3] and the rest are non-overlapping." },
      { input: "intervals = [[1,2],[1,2],[1,2]]", output: "2" },
      { input: "intervals = [[1,2],[2,3]]", output: "0" },
    ],
    constraints: ["1 <= intervals.length <= 10^5", "intervals[i].length == 2", "-5 * 10^4 <= starti < endi <= 5 * 10^4"],
    hints: ["Sort by end time. Greedily keep intervals that end earliest (Activity Selection Problem).", "Count removals = total - kept."],
    approach: "Greedy (sort by end). O(n log n) time.",
  },
  {
    id: "int-04",
    name: "Meeting Rooms II",
    module: "Intervals",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/meeting-rooms-ii/",
    gfgUrl: "https://www.geeksforgeeks.org/minimum-number-of-platforms-required-for-a-railway-station/",
    companies: ["Facebook", "Amazon", "Google", "Snapchat"],
    statement: `Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.`,
    examples: [
      { input: "intervals = [[0,30],[5,10],[15,20]]", output: "2" },
      { input: "intervals = [[7,10],[2,4]]", output: "1" },
    ],
    constraints: ["1 <= intervals.length <= 10^4", "0 <= starti < endi <= 10^6"],
    hints: ["Sort by start. Use a min-heap of end times. If current start >= heap min, reuse room (pop). Else add room (push).", "Heap size at end = min rooms needed."],
    approach: "Min-heap of end times. O(n log n) time.",
  },

  // ═══════════════════════════════════════════════════
  // 19. STRING ALGORITHMS
  // ═══════════════════════════════════════════════════
  {
    id: "str-01",
    name: "Valid Anagram",
    module: "String Algorithms",
    difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/valid-anagram/",
    gfgUrl: "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/",
    companies: ["Amazon", "Bloomberg"],
    statement: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" },
    ],
    constraints: ["1 <= s.length, t.length <= 5 * 10^4", "s and t consist of lowercase English letters."],
    hints: ["Count character frequencies in s, subtract for t. Should all be 0.", "Or sort both and compare."],
    approach: "Frequency array: O(n) time, O(1) space. Sort: O(n log n).",
  },
  {
    id: "str-02",
    name: "Group Anagrams",
    module: "String Algorithms",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/group-anagrams/",
    gfgUrl: "https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/",
    companies: ["Amazon", "Facebook", "Apple"],
    statement: `Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
      { input: 'strs = [""]', output: '[[""]]' },
      { input: 'strs = ["a"]', output: '[["a"]]' },
    ],
    constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100", "strs[i] consists of lowercase English letters."],
    hints: ["Key: sorted version of each word. Words with same sorted key are anagrams.", "HashMap: sorted_word → list of original words."],
    approach: "HashMap with sorted key. O(n * k log k) where k = max word length.",
  },
  {
    id: "str-03",
    name: "Encode and Decode Strings",
    module: "String Algorithms",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/encode-and-decode-strings/",
    gfgUrl: "https://www.geeksforgeeks.org/encode-and-decode-strings/",
    companies: ["Google", "Amazon"],
    statement: `Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Implement the encode and decode functions such that you can encode a list of strings and decode the encoded string back to the original list.`,
    examples: [
      { input: 'input = ["Hello","World"]', output: '["Hello","World"]', explanation: "The codec encodes and decodes correctly." },
      { input: 'input = [""]', output: '[""]' },
    ],
    constraints: ["1 <= strs.length <= 200", "0 <= strs[i].length <= 200", "strs[i] contains any possible characters."],
    hints: ["Use length prefix: encode as '4#Hello5#World'. Decode by reading length, then '#', then the string."],
    approach: "Length-prefixed encoding. O(n) encode and decode.",
  },
  {
    id: "str-04",
    name: "Longest Repeating Character Replacement",
    module: "String Algorithms",
    difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    gfgUrl: "https://www.geeksforgeeks.org/longest-repeating-character-replacement/",
    companies: ["Google"],
    statement: `You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.`,
    examples: [
      { input: 's = "ABAB", k = 2', output: "4" },
      { input: 's = "AABABBA", k = 1', output: "4" },
    ],
    constraints: ["1 <= s.length <= 10^5", "s consists of only uppercase English letters.", "0 <= k <= s.length"],
    hints: ["Sliding window. Window valid if: length - max_freq_char ≤ k."],
    approach: "Sliding window. O(n) time, O(26) space.",
  },
]
