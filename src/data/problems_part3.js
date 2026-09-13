export const PROBLEMS_PART3 = [
  // ════════════════════════════════════════════════════════════════════════
  // STACK AND QUEUES [Conversions, Monotonic Stack, Implementation]
  // ════════════════════════════════════════════════════════════════════════

  // Prefix, Infix, PostFix Conversion Problems
  {
    id: "stk-09", name: "Infix to Postfix Conversion", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Prefix, Infix, PostFix Conversion Problems", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/day-23-:-infix-to-postfix-_1382146", companies: ["Amazon"],
    statement: "Given an infix expression in the form of string str. Convert this infix expression to postfix expression.",
    examples: [{ input: "str = 'a+b*(c^d-e)^(f+g*h)-i'", output: "abcd^e-fgh*+^*+i-" }], constraints: ["1 <= str.length <= 10^5"],
    hints: ["Use a stack for operators.", "Assign precedence: ^ (highest), *, / (medium), +, - (lowest)."],
    approach: "Iterate through string. If operand, add to result. If '(', push to stack. If ')', pop from stack to result until '(' is found. If operator, pop operators with >= precedence from stack to result, then push the current operator. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-10", name: "Prefix to Infix Conversion", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Prefix, Infix, PostFix Conversion Problems", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/prefix-to-infix-conversion/1", cnUrl: "https://www.naukri.com/code360/problems/prefix-to-infix_1215000", companies: [],
    statement: "You are given a string S of size N that represents the prefix form of a valid mathematical expression. Convert it to its infix form.",
    examples: [{ input: "*-A/BC-/AKL", output: "((A-(B/C))*((A/K)-L))" }], constraints: ["1 <= N <= 10^4"],
    hints: ["Iterate through the string backwards (right to left)."],
    approach: "Loop from right to left. If operand, push to stack. If operator, pop two operands (op1, op2) from stack, combine them as `(op1 + operator + op2)` and push the resulting string back to the stack. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-11", name: "Prefix to Postfix Conversion", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Prefix, Infix, PostFix Conversion Problems", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/prefix-to-postfix-conversion/1", cnUrl: "https://www.naukri.com/code360/problems/prefix-to-postfix_1215003", companies: [],
    statement: "You are given a string that represents the prefix form of a valid mathematical expression. Convert it to its postfix form.",
    examples: [{ input: "*+AB-CD", output: "AB+CD-*" }], constraints: ["1 <= length of string <= 10^4"],
    hints: ["Iterate backwards. The logic is identical to Prefix to Infix, but the combination order changes."],
    approach: "Loop right to left. If operand, push to stack. If operator, pop two operands (op1, op2). Combine as `op1 + op2 + operator` and push back. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-12", name: "Postfix to Prefix Conversion", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Prefix, Infix, PostFix Conversion Problems", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/postfix-to-prefix-conversion/1", cnUrl: "https://www.naukri.com/code360/problems/postfix-to-prefix_1781435", companies: [],
    statement: "You are given a string that represents the postfix form of a valid mathematical expression. Convert it to its prefix form.",
    examples: [{ input: "ABC/-AK/L-*", output: "*-A/BC-/AKL" }], constraints: ["1 <= length of string <= 10^4"],
    hints: ["Iterate forwards (left to right)."],
    approach: "Loop left to right. If operand, push to stack. If operator, pop two operands (op2, then op1). Combine as `operator + op1 + op2` and push back. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-13", name: "Postfix to Infix Conversion", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Prefix, Infix, PostFix Conversion Problems", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/postfix-to-infix-conversion/1", cnUrl: "https://www.naukri.com/code360/problems/postfix-to-infix_8362149", companies: ["Amazon"],
    statement: "You are given a string that represents the postfix form of a valid mathematical expression. Convert it to its infix form.",
    examples: [{ input: "ab*c+", output: "((a*b)+c)" }], constraints: ["1 <= length of string <= 10^4"],
    hints: ["Iterate forwards. Combine with parentheses."],
    approach: "Loop left to right. If operand, push to stack. If operator, pop two operands (op2, then op1). Combine as `(op1 + operator + op2)` and push back. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-14", name: "Infix to Prefix Conversion", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Prefix, Infix, PostFix Conversion Problems", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/infix-to-prefix-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/infix-to-prefix_1382145", companies: [],
    statement: "Given an infix expression, convert it to a prefix expression.",
    examples: [{ input: "x+y*z/w+u", output: "++x/*yzwu" }], constraints: ["1 <= length <= 10^4"],
    hints: ["Reverse the infix expression, swap brackets, convert to postfix, then reverse the result."],
    approach: "1) Reverse string. 2) Swap '(' with ')' and vice versa. 3) Apply standard Infix to Postfix algorithm (with strict > condition for popping same precedence operators for right-associativity). 4) Reverse the resulting string. Time: O(N), Space: O(N)."
  },

  // Monotonic Stack/Queue Problems [VVV. Imp]
  {
    id: "stk-15", name: "Next Greater Element", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/next-greater-element-i/", gfgUrl: "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/next-greater-element_799354", companies: ["Amazon", "Microsoft"],
    statement: "The next greater element of some element x in an array is the first greater element that is to the right of x in the same array. Return an array of the next greater elements.",
    examples: [{ input: "nums1 = [4,1,2], nums2 = [1,3,4,2]", output: "[-1,3,-1]" }], constraints: ["1 <= nums.length <= 10^4"],
    hints: ["Traverse the array from right to left.", "Maintain a stack of elements. Before processing the current element, pop all elements from the stack smaller than or equal to it."],
    approach: "Monotonic Decreasing Stack. Loop from right to left. `while (!stack.empty() && stack.top() <= arr[i]) stack.pop()`. If stack empty, NGE is -1. Else, NGE is `stack.top()`. `stack.push(arr[i])`. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-16", name: "Next Greater Element - 2", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/next-greater-element-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/next-greater-element-2/1", cnUrl: "https://www.naukri.com/code360/problems/next-greater-element-ii_893250", companies: ["Amazon"],
    statement: "Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.",
    examples: [{ input: "nums = [1,2,1]", output: "[2,-1,2]" }], constraints: ["1 <= nums.length <= 10^4"],
    hints: ["Since the array is circular, you can simulate it by iterating 2*N times.", "Use modulo operator: `arr[i % N]`."],
    approach: "Loop `i` from `2*N - 1` down to 0. `while (!stack.empty() && stack.top() <= arr[i % n]) stack.pop()`. If `i < n`, record answer: stack empty ? -1 : `stack.top()`. `stack.push(arr[i % n])`. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-17", name: "Next Smaller Element", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/fab32f526b3b3a82ee1bf8ff9b783d8e578c7847/1", cnUrl: "https://www.naukri.com/code360/problems/next-smaller-element_1112581", companies: ["Amazon"],
    statement: "Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.",
    examples: [{ input: "A = [4, 5, 2, 10, 8]", output: "[-1, 4, -1, 2, 2]" }], constraints: ["1 <= A.length <= 10^5"],
    hints: ["This asks for the PREVIOUS smaller element (index < i)."],
    approach: "Monotonic Increasing Stack. Iterate left to right. `while(!stack.empty() && stack.top() >= A[i]) stack.pop()`. Answer is `stack.top()` or -1. `stack.push(A[i])`. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-18", name: "Asteroid Collision", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/asteroid-collision/", gfgUrl: "https://www.geeksforgeeks.org/problems/asteroid-collision/1", cnUrl: "https://www.naukri.com/code360/problems/asteroid-collision_975433", companies: ["Amazon", "Microsoft", "Google"],
    statement: "We are given an array asteroids of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Find out the state of the asteroids after all collisions.",
    examples: [{ input: "asteroids = [5, 10, -5]", output: "[5, 10]", explanation: "The 10 and -5 collide resulting in 10. The 5 and 10 never collide." }], constraints: ["2 <= asteroids.length <= 10^4"],
    hints: ["Use a stack. When a moving-left asteroid (-ve) encounters a moving-right asteroid (+ve), a collision occurs.", "Compare sizes and pop accordingly."],
    approach: "Iterate asteroids. Use stack. For each asteroid, while stack is not empty, top is positive, and current is negative: compare absolute values. If top < abs(curr), pop and continue. If top == abs(curr), pop and destroy both (break). If top > abs(curr), destroy current (break). Else push current. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-19", name: "Trapping Rainwater", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/trapping-rain-water/", gfgUrl: "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/trapping-rainwater_630519", companies: ["Amazon", "Google", "Microsoft"],
    statement: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }], constraints: ["n == height.length", "1 <= n <= 2 * 10^4"],
    hints: ["Water trapped at any bar `i` depends on the maximum height to its left and right.", "Use two pointers instead of storing prefix/suffix arrays for O(1) space."],
    approach: "Two Pointers: `left = 0`, `right = n-1`, `maxLeft = 0`, `maxRight = 0`. While `left <= right`: If `height[left] <= height[right]`, if `height[left] >= maxLeft`, `maxLeft = height[left]`, else `ans += maxLeft - height[left]`; `left++`. Symmetrically for right. Time: O(N), Space: O(1)."
  },
  {
    id: "stk-20", name: "Sum of Subarray Minimums", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/sum-of-subarray-minimums/", gfgUrl: "https://www.geeksforgeeks.org/problems/sum-of-subarray-minimum/1", cnUrl: "https://www.naukri.com/code360/problems/sum-of-subarray-minimums_8365427", companies: ["Amazon", "Google"],
    statement: "Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 10^9 + 7.",
    examples: [{ input: "arr = [3,1,2,4]", output: "17", explanation: "Subarrays: [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. Mins: 3, 1, 2, 4, 1, 1, 2, 1, 1, 1. Sum = 17." }], constraints: ["1 <= arr.length <= 3 * 10^4"],
    hints: ["Calculate the contribution of each element to the total sum.", "An element `arr[i]` acts as the minimum for a subarray if it is smaller than elements to its left and right. Find Next Smaller Element (NSE) and Previous Smaller Element (PSE)."],
    approach: "Use Monotonic Stacks to find arrays `left[i]` (distance to PSE) and `right[i]` (distance to NSE). To handle duplicates, make PSE strictly smaller (`<`) and NSE smaller-or-equal (`<=`). Total sum = `sum(arr[i] * left[i] * right[i])`. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-21", name: "Sum of Subarray Ranges", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/sum-of-subarray-ranges/", gfgUrl: "https://www.geeksforgeeks.org/problems/sum-of-subarray-ranges/1", cnUrl: "https://www.naukri.com/code360/problems/sum-of-subarray-ranges_1164895", companies: ["Google", "Amazon"],
    statement: "You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray. Return the sum of all subarray ranges of nums.",
    examples: [{ input: "nums = [1,2,3]", output: "4", explanation: "Subarrays: [1], [2], [3], [1,2], [2,3], [1,2,3]. Ranges: 0, 0, 0, 1, 1, 2. Sum = 4." }], constraints: ["1 <= nums.length <= 1000"],
    hints: ["Sum of ranges = (Sum of Subarray Maximums) - (Sum of Subarray Minimums).", "Compute both using Monotonic Stacks (similar to Sum of Subarray Minimums)."],
    approach: "Calculate Sum of Subarray Minimums using Monotonic Stack. Calculate Sum of Subarray Maximums using Monotonic Stack (with Next/Previous Greater Elements). Return `SumMax - SumMin`. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-22", name: "Stock Span Problem", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/online-stock-span/", gfgUrl: "https://www.geeksforgeeks.org/problems/stock-span-problem-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/stock-span_774749", companies: ["Amazon", "Microsoft", "Google"],
    statement: "Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day. The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the stock price was less than or equal to today's price.",
    examples: [{ input: "prices = [100, 80, 60, 70, 60, 75, 85]", output: "[1, 1, 1, 2, 1, 4, 6]" }], constraints: ["1 <= price <= 10^5"],
    hints: ["Use a Monotonic Decreasing Stack storing pairs of `(price, span)`."],
    approach: "Maintain a stack of `(price, span)`. When a new price comes in, `span = 1`. While stack is not empty and stack.top().price <= current_price, `span += stack.top().span`, `stack.pop()`. Push `(current_price, span)` and return span. Time: O(1) amortized per query, Space: O(N)."
  },
  {
    id: "stk-23", name: "Remove K Digits", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/remove-k-digits/", gfgUrl: "https://www.geeksforgeeks.org/problems/remove-k-digits/1", cnUrl: "https://www.naukri.com/code360/problems/remove-k-digits_1461221", companies: ["Amazon", "Microsoft"],
    statement: "Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.",
    examples: [{ input: "num = '1432219', k = 3", output: "'1219'" }], constraints: ["1 <= k <= num.length <= 10^5"],
    hints: ["When reading from left to right, you want the digits to be in monotonically increasing order.", "Use a stack. If the current digit is smaller than the stack top, and you still have removals (k > 0), pop the top."],
    approach: "Use a string as a stack. Iterate `c` in `num`. `while (k > 0 && !stack.empty() && stack.back() > c)`, `stack.pop()`, `k--`. Push `c`. If `k > 0` after loop, pop `k` elements. Strip leading zeros. If empty, return '0'. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-24", name: "Largest rectangle in a histogram", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/largest-rectangle-in-histogram/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/largest-rectangle-in-a-histogram_1058184", companies: ["Amazon", "Microsoft", "Google"],
    statement: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    examples: [{ input: "heights = [2,1,5,6,2,3]", output: "10", explanation: "The largest rectangle is shown in the histogram with width = 2 and height = 5 (bars 5 and 6)." }], constraints: ["1 <= heights.length <= 10^5"],
    hints: ["The maximum rectangle is constrained by its shortest bar.", "For each bar, find the index of the first smaller bar to its left and right using a monotonic stack."],
    approach: "Stack stores indices. Iterate 0 to N. While stack is not empty and `heights[stack.top()] >= heights[i]` (or `i == N`), `h = heights[stack.pop()]`. If stack is empty, `w = i`. Else `w = i - stack.top() - 1`. `max_area = max(max_area, h * w)`. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-25", name: "Maximum Rectangles", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Monotonic Stack/Queue Problems [VVV. Imp]", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/maximal-rectangle/", gfgUrl: "https://www.geeksforgeeks.org/problems/max-rectangle/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-size-rectangle-sub-matrix-with-all-1-s_893017", companies: ["Google", "Microsoft"],
    statement: "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
    examples: [{ input: "matrix = [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]", output: "6" }], constraints: ["1 <= row, cols <= 200"],
    hints: ["Treat each row as the base of a histogram.", "Build heights for each row and call the 'Largest Rectangle in Histogram' function."],
    approach: "Create a 1D array `heights` of size cols. For each row, update `heights`: if `matrix[i][j] == '1'`, `heights[j]++`, else `heights[j] = 0`. Pass `heights` to the `largestRectangleArea` function from the previous problem. Keep max. Time: O(M*N), Space: O(N)."
  },

  // Implementation Problems
  {
    id: "stk-26", name: "Sliding Window Maximum", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Implementation Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/sliding-window-maximum/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1", cnUrl: "https://www.naukri.com/code360/problems/sliding-window-maximum_980526", companies: ["Amazon", "Google", "Bloomberg"],
    statement: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
    examples: [{ input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]" }], constraints: ["1 <= nums.length <= 10^5", "1 <= k <= nums.length"],
    hints: ["Use a Deque (Double Ended Queue) to store indices.", "Maintain elements in the deque in decreasing order."],
    approach: "Deque stores indices. Iterate `i`. Remove indices out of window `if (dq.front() == i - k) dq.pop_front()`. Remove elements smaller than `nums[i]` from back `while (!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back()`. Push `i`. If `i >= k-1`, add `nums[dq.front()]` to ans. Time: O(N), Space: O(K)."
  },
  {
    id: "stk-27", name: "The Celebrity Problem", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Implementation Problems", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/the-celebrity-problem/1", cnUrl: "https://www.naukri.com/code360/problems/the-celebrity-problem_690596", companies: ["Amazon", "Microsoft", "Flipkart"],
    statement: "A celebrity is a person who is known to all but does not know anyone at a party. A square matrix M of size n x n is used to represent people at the party such that if element I row j column is 1 means ith person knows jth person. Find the celebrity at the party or return -1.",
    examples: [{ input: "M = [[0, 1, 0], [0, 0, 0], [0, 1, 0]]", output: "1" }], constraints: ["2 <= n <= 3000"],
    hints: ["Use a Stack or Two Pointers (top and down).", "Eliminate non-celebrities by asking if A knows B."],
    approach: "Two Pointers `top = 0`, `down = n - 1`. While `top < down`: if `M[top][down] == 1`, `top++`. Else `down--`. After finding a candidate `top`, verify that `top` knows no one and everyone knows `top`. Time: O(N), Space: O(1)."
  },
  {
    id: "stk-28", name: "Number of NGEs to the right", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Implementation Problems", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/number-of-nges-to-the-right/1", cnUrl: "https://www.naukri.com/code360/problems/number-of-greater-elements-to-the-right_8395743", companies: ["Amazon"],
    statement: "Given an array of integers arr and a list of query indices, find the number of elements strictly greater than `arr[query_index]` to its right for each query.",
    examples: [{ input: "arr = [3, 4, 2, 7, 5, 8, 10, 6], queries = [3, 6, 1]", output: "[2, 0, 4]" }], constraints: ["1 <= N <= 10^4"],
    hints: ["For each query index, you can iterate to the right, or precompute/use a stack if queries are arbitrary.", "Since queries can be arbitrary, you can count greater elements using nested loops or a segment tree/fenwick tree if N is massive, but for typical constraints, a direct scan or stack-based preprocessing works."],
    approach: "For each query index `idx`, iterate from `idx + 1` to `N - 1` and count how many elements are strictly greater than `arr[idx]`. Time: O(Q * N) or optimized with segment tree. Space: O(Q) for results."
  },
  {
    id: "stk-29", name: "LRU Cache", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Implementation Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/lru-cache/", gfgUrl: "https://www.geeksforgeeks.org/problems/lru-cache/1", cnUrl: "https://www.naukri.com/code360/problems/lru-cache-implementation_670276", companies: ["Amazon", "Microsoft", "Google", "Facebook"],
    statement: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    examples: [{ input: "LRUCache c = new LRUCache(2); c.put(1,1); c.put(2,2); c.get(1); c.put(3,3); c.get(2);", output: "[null, null, null, 1, null, -1]" }], constraints: ["1 <= capacity <= 3000"],
    hints: ["Use a Hash Map combined with a Doubly Linked List.", "Hash Map provides O(1) lookup. DLL allows O(1) removals and insertions."],
    approach: "Create a DLL node (key, value). Hash Map `unordered_map<int, Node*>`. Initialize dummy `head` and `tail` in DLL. `get(key)`: If exists, extract node, delete from DLL, insert right after `head`, return value. `put(key, val)`: If exists, delete from DLL. Insert new node after `head`, map to it. If `map.size() > cap`, delete `tail.prev`, erase its key from map. Time: O(1) for all."
  },
  {
    id: "stk-30", name: "LFU Cache", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Implementation Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/lfu-cache/", gfgUrl: "https://www.geeksforgeeks.org/problems/lfu-cache-1665050355/1", cnUrl: "https://www.naukri.com/code360/problems/lfucache_3114384", companies: ["Amazon", "Google", "Apple"],
    statement: "Design and implement a data structure for a Least Frequently Used (LFU) cache.",
    examples: [], constraints: ["1 <= capacity <= 10^4"],
    hints: ["Maintain a Map of Key -> Node.", "Maintain another Map of Frequency -> Doubly Linked List of Nodes.", "Keep track of the `minFrequency`."],
    approach: "Node has `key, val, freq`. `keyNode` map stores `key -> Node*`. `freqList` map stores `freq -> List (DLL)`. `get(key)`: Node freq increases, move it from `freqList[f]` to `freqList[f+1]`. Update `minFreq` if its old list becomes empty. `put(key, val)`: If cap reached, remove tail from `freqList[minFreq]`. Insert new node to `freqList[1]`, set `minFreq = 1`. Time: O(1)."
  },

  // ════════════════════════════════════════════════════════════════════════
  // SLIDING WINDOW & TWO POINTER COMBINED PROBLEMS
  // ════════════════════════════════════════════════════════════════════════

  // Medium Problems
  {
    id: "sw-01", name: "Longest Substring Without Repeating Characters", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Medium Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", gfgUrl: "https://www.geeksforgeeks.org/problems/length-of-the-longest-substring3036/1", cnUrl: "https://www.naukri.com/code360/problems/longest-substring-without-repeating-characters_758894", companies: ["Amazon", "Microsoft", "Meta"],
    statement: "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [{ input: "s = 'abcabcbb'", output: "3", explanation: "The answer is 'abc', with the length of 3." }], constraints: ["0 <= s.length <= 5 * 10^4"],
    hints: ["Use a sliding window with two pointers (left and right).", "Use an array/map to store the last seen index of each character."],
    approach: "Array `hash[256]` initialized to -1. `left = 0`, `maxLen = 0`. Iterate `right`. If `hash[s[right]] != -1`, `left = max(left, hash[s[right]] + 1)`. `hash[s[right]] = right`. `maxLen = max(maxLen, right - left + 1)`. Time: O(N), Space: O(1)."
  },
  {
    id: "sw-02", name: "Max Consecutive Ones III", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Medium Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/max-consecutive-ones-iii/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximize-number-of-1s0905/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-consecutive-ones_892994", companies: ["Facebook", "Amazon"],
    statement: "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
    examples: [{ input: "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2", output: "6" }], constraints: ["1 <= nums.length <= 10^5", "0 <= k <= nums.length"],
    hints: ["This translates to: Find the longest subarray with at most K zeros."],
    approach: "Sliding window. `left = 0`, `zeros = 0`, `maxLen = 0`. Iterate `right`. If `nums[right] == 0`, `zeros++`. `if (zeros > k)`, check `nums[left]`, if 0 `zeros--`, `left++` (Shrink window, but keeping it max size is an optimization: `while` vs `if`). `maxLen = max(maxLen, right - left + 1)`. Time: O(N), Space: O(1)."
  },
  {
    id: "sw-03", name: "Fruit Into Baskets", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Medium Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/fruit-into-baskets/", gfgUrl: "https://www.geeksforgeeks.org/problems/fruit-into-baskets-1663677047/1", cnUrl: "https://www.naukri.com/code360/problems/fruits-and-baskets_985356", companies: ["Google"],
    statement: "You only have two baskets, and each basket can hold a single type of fruit. Given an integer array fruits where fruits[i] is the fruit type from the ith tree, return the maximum number of fruits you can pick.",
    examples: [{ input: "fruits = [1,2,3,2,2]", output: "4", explanation: "Pick from trees [2,3,2,2]." }], constraints: ["1 <= fruits.length <= 10^5"],
    hints: ["This translates to: Longest subarray with at most 2 distinct elements."],
    approach: "Map to count frequencies. `left = 0`, `maxLen = 0`. Iterate `right`. `map[fruits[right]]++`. `if (map.size() > 2)`, decrement `map[fruits[left]]`, if 0 erase it, `left++`. `maxLen = max(maxLen, right - left + 1)`. Time: O(N), Space: O(1)."
  },
  {
    id: "sw-04", name: "Longest Repeating Character Replacement", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Medium Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-repeating-character-replacement/1", cnUrl: "https://www.naukri.com/code360/problems/longest-repeating-character-replacement_1626279", companies: ["Amazon", "Google"],
    statement: "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter.",
    examples: [{ input: "s = 'AABABBA', k = 1", output: "4", explanation: "Replace the one 'A' in the middle with 'B' to form 'AABBBBA'." }], constraints: ["1 <= s.length <= 10^5"],
    hints: ["Valid window condition: `(length of window) - (count of most frequent character in window) <= K`."],
    approach: "Frequency array of size 26. `left = 0`, `maxFreq = 0`, `maxLen = 0`. Iterate `right`. `freq[s[right]]++`. `maxFreq = max(maxFreq, freq[s[right]])`. `if ((right - left + 1) - maxFreq > k)`, `freq[s[left]]--`, `left++`. `maxLen = max(maxLen, right - left + 1)`. Time: O(N), Space: O(1)."
  },
  {
    id: "sw-05", name: "Binary Subarrays With Sum", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Medium Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/binary-subarrays-with-sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/binary-subarray-with-sum/1", cnUrl: "https://www.naukri.com/code360/problems/binary-subarrays-with-sum_3125903", companies: ["Amazon"],
    statement: "Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.",
    examples: [{ input: "nums = [1,0,1,0,1], goal = 2", output: "4", explanation: "Subarrays: [1,0,1], [1,0,1,0], [0,1,0,1], [1,0,1]." }], constraints: ["1 <= nums.length <= 3 * 10^4", "nums[i] is either 0 or 1."],
    hints: ["Number of subarrays with exact sum K = (Number with sum <= K) - (Number with sum <= K-1)."],
    approach: "Write helper `atMost(nums, goal)`. `left = 0`, `sum = 0`, `count = 0`. Iterate `right`. `sum += nums[right]`. `while (sum > goal && left <= right)`, `sum -= nums[left]`, `left++`. `count += right - left + 1`. Return `atMost(goal) - atMost(goal-1)`. Time: O(N), Space: O(1)."
  },
  {
    id: "sw-06", name: "Count number of Nice subarrays", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Medium Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/count-number-of-nice-subarrays/", gfgUrl: "https://www.geeksforgeeks.org/problems/count-subarrays-with-k-odd-numbers/1", cnUrl: "https://www.naukri.com/code360/problems/count-number-of-nice-subarrays_3114552", companies: ["Microsoft"],
    statement: "Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it. Return the number of nice sub-arrays.",
    examples: [{ input: "nums = [1,1,2,1,1], k = 3", output: "2", explanation: "[1,1,2,1] and [1,2,1,1]." }], constraints: ["1 <= nums.length <= 5 * 10^4", "1 <= k <= nums.length"],
    hints: ["Convert odd numbers to 1 and even numbers to 0.", "The problem reduces exactly to 'Binary Subarrays With Sum'."],
    approach: "Transform logic: `if (num % 2 == 1) num = 1; else num = 0;`. Use the exact same `atMost(k) - atMost(k-1)` logic from the previous problem. Time: O(N), Space: O(1)."
  },
  {
    id: "sw-07", name: "Number of Substrings Containing All Three Characters", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Medium Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/", gfgUrl: "https://www.geeksforgeeks.org/problems/count-substring-contains-abc/1", cnUrl: "https://www.naukri.com/code360/problems/count-substring-with-abc_8160465", companies: ["Amazon"],
    statement: "Given a string s consisting only of characters a, b and c. Return the number of substrings containing at least one occurrence of all these characters a, b and c.",
    examples: [{ input: "s = 'abcabc'", output: "10" }], constraints: ["3 <= s.length <= 5 * 10^4"],
    hints: ["Keep track of the last seen index for 'a', 'b', and 'c'.", "If you found all three, every starting index up to the minimum of those three last-seen indices forms a valid substring."],
    approach: "`lastSeen[3] = {-1, -1, -1}`. `count = 0`. Iterate `i`. `lastSeen[s[i] - 'a'] = i`. If all three are `!= -1`, `count += 1 + min({lastSeen[0], lastSeen[1], lastSeen[2]})`. Time: O(N), Space: O(1)."
  },
  {
    id: "sw-08", name: "Maximum Points You Can Obtain from Cards", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Medium Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-point-you-can-obtain-from-cards/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-points-from-cards_8365825", companies: ["Google", "Amazon"],
    statement: "There are several cards arranged in a row, and each card has an associated number of points. In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards. Return the maximum score you can obtain.",
    examples: [{ input: "cardPoints = [1,2,3,4,5,6,1], k = 3", output: "12", explanation: "Take the 3 cards from the right [5,6,1] sum = 12." }], constraints: ["1 <= cardPoints.length <= 10^5", "1 <= k <= cardPoints.length"],
    hints: ["Since you pick K cards from ends, you leave a contiguous subarray of size N - K in the middle.", "Minimize the sum of the N - K sliding window, and subtract it from total sum. Alternatively, maintain a left window and right window."],
    approach: "Take sum of first `k` elements (`leftSum`). `maxSum = leftSum`. `rightIndex = n - 1`. Loop `i` from `k-1` down to 0: `leftSum -= cardPoints[i]`, `rightSum += cardPoints[rightIndex--]`. `maxSum = max(maxSum, leftSum + rightSum)`. Time: O(K), Space: O(1)."
  },

  // Hard Problems
  {
    id: "sw-09", name: "Longest Substring With At Most K Distinct Characters", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Hard Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1", cnUrl: "https://www.naukri.com/code360/problems/longest-substring-with-at-most-k-distinct-characters_2221410", companies: ["Amazon", "Google", "Microsoft"],
    statement: "Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.",
    examples: [{ input: "s = 'eceba', k = 2", output: "3", explanation: "The substring is 'ece' with length 3." }], constraints: ["1 <= s.length <= 5 * 10^4", "0 <= k <= 50"],
    hints: ["Use a sliding window. Keep a hash map of character counts.", "When the map size exceeds k, shrink the window from the left until size is k again."],
    approach: "Hash Map for character frequencies. `left=0`, `maxLen=0`. Iterate `right`. `map[s[right]]++`. `while (map.size() > k)`, `map[s[left]]--`, if 0 `map.erase(s[left])`, `left++`. `maxLen = max(maxLen, right - left + 1)`. Time: O(N), Space: O(K)."
  },
  {
    id: "sw-10", name: "Subarrays with K Different Integers", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Hard Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/subarrays-with-k-different-integers/", gfgUrl: "https://www.geeksforgeeks.org/problems/subarrays-with-k-different-integers/1", cnUrl: "https://www.naukri.com/code360/problems/subarrays-with-at-most-k-distinct-values_1473804", companies: ["Amazon"],
    statement: "Given an integer array nums and an integer k, return the number of good subarrays of nums. A good array is an array where the number of different integers in that array is exactly k.",
    examples: [{ input: "nums = [1,2,1,2,3], k = 2", output: "7", explanation: "Subarrays: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]." }], constraints: ["1 <= nums.length <= 2 * 10^4", "1 <= k <= nums.length"],
    hints: ["Number of exact K = atMost(K) - atMost(K-1)."],
    approach: "Helper `atMost(k)`: Map to count frequencies. `left=0`, `count=0`. Iterate `right`. `map[nums[right]]++`. `while (map.size() > k)`, `map[nums[left]]--`, if 0 `map.erase`, `left++`. `count += right - left + 1`. Time: O(N), Space: O(N)."
  },
  {
    id: "sw-11", name: "Minimum Window Substring", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Hard Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/minimum-window-substring/", gfgUrl: "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-window-substring_1215004", companies: ["Amazon", "LinkedIn", "Microsoft"],
    statement: "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string ''.",
    examples: [{ input: "s = 'ADOBECODEBANC', t = 'ABC'", output: "'BANC'" }], constraints: ["m == s.length", "n == t.length", "1 <= m, n <= 10^5"],
    hints: ["Use a map to store the required counts of characters in t.", "Expand right to satisfy requirements. Once satisfied, shrink left to find the minimum."],
    approach: "Map required frequencies of `t`. Track `matchedCount = 0`. `left = 0`, `minLen = INT_MAX`, `start = 0`. Iterate `right`. If `s[right]` in map: `map[s[right]]--`, if `>= 0` `matchedCount++`. `while (matchedCount == t.length)`: Update `minLen` and `start`. Shrink `left`. If `s[left]` in map: `map[s[left]]++`, if `> 0` `matchedCount--`. `left++`. Time: O(N), Space: O(1)."
  },

  {
    id: "sw-12", name: "Minimum Window Subsequence", module: "Sliding Window & Two Pointer Combined Problems", subModule: "Hard Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/minimum-window-subsequence/", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-window-subsequence/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-window-subsequence_2181133", companies: ["Google", "Amazon"],
    statement: "Given strings s1 and s2, return the minimum contiguous substring part of s1, so that s2 is a subsequence of the part. If there is no such window in s1 that covers all characters in s2, return the empty string ''.",
    examples: [{ input: "s1 = 'abcdebdde', s2 = 'bde'", output: "'bcde'", explanation: "'bcde' is the answer because it occurs before 'bdde' which has the same length." }], constraints: ["1 <= s1.length <= 2 * 10^4", "1 <= s2.length <= 100"],
    hints: ["This can be solved with DP, but the optimal Two-Pointer approach is faster.", "Scan left to right to find a valid window, then scan right to left to minimize it."],
    approach: "Iterate `i` through `s1`. If `s1[i] == s2[j]`, `j++`. If `j == s2.length()`, we found a window ending at `i`. Now go backwards from `i` matching `s2` backwards to find the exact optimal start index. Update `minLen` and `startIdx`. Set `i = startIdx + 1` to find further windows. Time: O(S1 * S2) worst case, O(S1) avg. Space: O(1)."
  },


  // ════════════════════════════════════════════════════════════════════════
  // HEAPS [Learning, Medium, Hard Problems]
  // ════════════════════════════════════════════════════════════════════════

  // Learning
  {
    id: "hp-01", name: "Heaps (Theory Video)", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Learning", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
    statement: "Understand the theoretical concepts of Max Heaps and Min Heaps, complete binary trees, and array representation of heaps.",
    examples: [], constraints: [], hints: ["Left child = 2i + 1, Right child = 2i + 2, Parent = (i - 1) / 2."],
    approach: "Theoretical understanding of `heapify`, `push`, and `pop` operations and their O(log N) time complexities."
  },
  {
    id: "hp-02", name: "Implement Min Heap", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Learning", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/operations-on-binary-min-heap/1", cnUrl: "https://www.naukri.com/code360/problems/min-heap_4691801", companies: ["Amazon", "Microsoft"],
    statement: "Implement a Min Heap. The class should support push(x), pop(), and top() operations.",
    examples: [{ input: "push(3), push(2), push(1), pop()", output: "Returns 1, heap becomes [2, 3]" }], constraints: ["1 <= Queries <= 10^4"],
    hints: ["Use an array to store the tree.", "When inserting, place at the end and bubble up. When deleting, swap root with the last element and heapify down."],
    approach: "`push`: Add to end of array. While `arr[curr] < arr[parent]`, swap them. `pop`: Swap root with last element, remove last element. Call `heapify(0)` to sink the new root to its proper place. Time: O(log N)."
  },
  {
    id: "hp-03", name: "Check if an array represents a min heap", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Learning", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/is-binary-tree-heap/1", cnUrl: "https://www.naukri.com/code360/problems/is-binary-heap-tree_893136", companies: ["Amazon"],
    statement: "Given an array of size N, check if it represents a valid Min Heap.",
    examples: [{ input: "arr = [1, 2, 3, 4, 5, 6]", output: "true" }], constraints: ["1 <= N <= 10^5"],
    hints: ["For every node at index `i`, its value should be less than or equal to its children at `2i + 1` and `2i + 2`."],
    approach: "Iterate `i` from 0 to `(N/2 - 1)`. If `arr[i] > arr[2*i+1]` or (if right child exists) `arr[i] > arr[2*i+2]`, return false. Return true if loop completes. Time: O(N), Space: O(1)."
  },
  {
    id: "hp-04", name: "Convert Min Heap to Max Heap", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Learning", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/convert-min-heap-to-max-heap-1666385109/1", cnUrl: "https://www.naukri.com/code360/problems/convert-min-heap-to-max-heap_1381084", companies: [],
    statement: "You are given an array arr of size N representing a Min Heap. The task is to convert it to a Max Heap.",
    examples: [{ input: "arr = [3, 4, 8, 11, 13]", output: "[13, 11, 8, 4, 3]" }], constraints: ["1 <= N <= 10^5"],
    hints: ["You don't need to create a new array.", "Just run the standard `buildHeap` algorithm, but with a Max Heap `heapify` function."],
    approach: "Iterate from `i = (N-2)/2` down to 0. Call `maxHeapify(arr, N, i)`. The `maxHeapify` function sinks the current element if it's smaller than its children. Time: O(N), Space: O(log N) stack."
  },

  // Medium Problems
  {
    id: "hp-05", name: "K-th Largest element in an array", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/k-largest-elements4206/1", cnUrl: "https://www.naukri.com/code360/problems/kth-largest-element_796007", companies: ["Amazon", "Microsoft", "Facebook"],
    statement: "Given an integer array nums and an integer k, return the kth largest element in the array.",
    examples: [{ input: "nums = [3,2,1,5,6,4], k = 2", output: "5" }], constraints: ["1 <= k <= nums.length <= 10^5"],
    hints: ["A Min Heap of size K can keep track of the K largest elements seen so far."],
    approach: "Maintain a Min Heap (Priority Queue) of size `k`. Iterate array. `pq.push(num)`. If `pq.size() > k`, `pq.pop()`. The top of the heap is the Kth largest element. Time: O(N log K), Space: O(K)."
  },
  {
    id: "hp-06", name: "Kth smallest element in an array [use priority queue]", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1", cnUrl: "https://www.naukri.com/code360/problems/kth-smallest-element_893056", companies: ["Amazon", "Google"],
    statement: "Given an array arr[] and an integer K where K is smaller than size of array, find the Kth smallest element in the given array.",
    examples: [{ input: "arr = [7, 10, 4, 3, 20, 15], k = 3", output: "7" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Use a Max Heap of size K to keep track of the K smallest elements."],
    approach: "Maintain a Max Heap. Iterate array. `pq.push(num)`. If `pq.size() > k`, `pq.pop()`. The top of the heap is the Kth smallest element. Time: O(N log K), Space: O(K)."
  },
  {
    id: "hp-07", name: "Sort K sorted array", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Medium Problems", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/nearly-sorted-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/nearly-sorted_977915", companies: ["Amazon", "Microsoft"],
    statement: "Given an array of n elements, where each element is at most k away from its target position, sort the array optimally.",
    examples: [{ input: "arr = [6, 5, 3, 2, 8, 10, 9], k = 3", output: "[2, 3, 5, 6, 8, 9, 10]" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Since each element is at most K spaces away, the smallest element must be within the first K+1 elements."],
    approach: "Use a Min Heap of size `K+1`. Insert the first `K+1` elements. Extract minimum and place it at index 0. Then iterate the rest of the array: push `arr[i]`, pop min and place at next index. Finally, pop remaining elements. Time: O(N log K), Space: O(K)."
  },
  {
    id: "hp-08", name: "Merge K sorted Lists", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Medium Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/merge-k-sorted-lists/", gfgUrl: "https://www.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1", cnUrl: "https://www.naukri.com/code360/problems/merge-k-sorted-lists_992772", companies: ["Amazon", "Microsoft", "Google"],
    statement: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    examples: [{ input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }], constraints: ["0 <= k <= 10^4", "0 <= lists[i].length <= 500"],
    hints: ["Use a Min Heap to keep track of the smallest current element among all K lists."],
    approach: "Min Heap stores `(value, Node*)`. Push the head of all K lists into the heap. Extract minimum, append to result list, and if the extracted node has a `next`, push `next` into the heap. Time: O(N log K), Space: O(K) where N is total nodes."
  },
  {
    id: "hp-09", name: "Replace Elements by Their Rank", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Medium Problems", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/rank-transform-of-an-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/replace-elements-by-its-rank-in-the-array/1", cnUrl: "https://www.naukri.com/code360/problems/replace-each-element-of-array-with-its-corresponding-rank_4196160", companies: ["Amazon"],
    statement: "Given an array of integers arr, replace each element with its rank. Rank starts from 1, and equal elements share the same rank.",
    examples: [{ input: "arr = [40,10,20,30]", output: "[4,1,2,3]" }], constraints: ["0 <= arr.length <= 10^5"],
    hints: ["Sort the array (or a copy of it) to establish ranks, then map each value to its rank."],
    approach: "Copy `arr` to a new array and sort it. Use a Hash Map to assign ranks (ignoring duplicates). Iterate the original `arr` and replace with map values. Time: O(N log N), Space: O(N)."
  },
  {
    id: "hp-10", name: "Task Scheduler", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/task-scheduler/", gfgUrl: "https://www.geeksforgeeks.org/problems/task-scheduler/1", cnUrl: "https://www.naukri.com/code360/problems/task-scheduler_1070424", companies: ["Facebook", "Amazon"],
    statement: "Given a character array tasks, representing the tasks a CPU needs to do, and a non-negative integer n that represents the cooldown period between two same tasks. Return the least number of units of times that the CPU will take to finish all the given tasks.",
    examples: [{ input: "tasks = ['A','A','A','B','B','B'], n = 2", output: "8", explanation: "A -> B -> idle -> A -> B -> idle -> A -> B" }], constraints: ["1 <= task.length <= 10^4"],
    hints: ["Count the frequencies of tasks. The most frequent task acts as a bottleneck.", "Formula: `(maxFreq - 1) * (n + 1) + num_tasks_with_max_freq`."],
    approach: "Count frequencies. Max heap stores frequencies. Queue stores `(freq, available_time)`. Increment `time`. If heap not empty, pop, decrement freq. If `freq > 0`, push to queue with `time + n`. If queue front is available, push back to heap. Time: O(N), Space: O(1) (size 26)."
  },
  {
    id: "hp-11", name: "Hand of Straights", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/hand-of-straights/", gfgUrl: "https://www.geeksforgeeks.org/problems/hands-of-straights/1", cnUrl: "https://www.naukri.com/code360/problems/hand-of-straights_1462061", companies: ["Google"],
    statement: "Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize. Return true if she can rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.",
    examples: [{ input: "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3", output: "true", explanation: "[1,2,3], [2,3,4], [6,7,8]" }], constraints: ["1 <= hand.length <= 10^4", "1 <= groupSize <= hand.length"],
    hints: ["Use a TreeMap (or Min Heap + HashMap) to easily extract the smallest available card."],
    approach: "Count frequencies in an ordered map (TreeMap). Iterate map. While `count > 0`, we must form a straight starting here. Decrement the counts of the next `groupSize` consecutive elements. If any is missing, return false. Time: O(N log N), Space: O(N)."
  },

  // Hard Problems
  {
    id: "hp-12", name: "Design Twitter", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Hard Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/design-twitter/", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/design-twitter_3155160", companies: ["Amazon", "Twitter"],
    statement: "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.",
    examples: [], constraints: ["1 <= userId, followerId, followeeId <= 500"],
    hints: ["A user's feed is exactly like 'Merge K Sorted Lists'.", "Use a global timer for tweet timestamps. Use a Min Heap to find the top 10 tweets among all followed users."],
    approach: "Map of `userId -> unordered_set<int>` for followers. Map of `userId -> vector<pair<time, tweetId>>` for tweets. `getNewsFeed`: Get user's tweets and followed users' tweets. Push all to a Max Heap sorted by time. Pop top 10. Time: O(N log 10), Space: O(N)."
  },
  {
    id: "hp-13", name: "Minimum Cost to Connect Sticks", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Hard Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/connect-n-ropes-with-minimum-cost_625783", companies: ["Amazon", "Goldman Sachs"],
    statement: "You have some number of sticks with positive integer lengths. You can connect any two sticks of lengths x and y into one stick by paying a cost of x + y. Return the minimum cost to connect all the given sticks into one stick.",
    examples: [{ input: "sticks = [2,4,3]", output: "14", explanation: "Connect 2+3=5 (Cost 5). Connect 5+4=9 (Cost 9). Total 14." }], constraints: ["1 <= sticks.length <= 10^4"],
    hints: ["To minimize the cost, always connect the two smallest sticks available."],
    approach: "Use a Min Heap. Push all lengths. While `heap.size() > 1`: pop two smallest, add them, add to `totalCost`, push sum back to heap. Return `totalCost`. Time: O(N log N), Space: O(N)."
  },
  {
    id: "hp-14", name: "Kth largest element in a stream of running integers", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", gfgUrl: "https://www.geeksforgeeks.org/problems/kth-largest-element-in-a-stream2220/1", cnUrl: "https://www.naukri.com/code360/problems/kth-largest-element-in-a-stream_8230722", companies: ["Amazon", "Google"],
    statement: "Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    examples: [], constraints: ["1 <= k <= 10^4", "0 <= nums.length <= 10^4"],
    hints: ["Just like finding Kth largest in an array, a Min Heap of size K is the perfect data structure here."],
    approach: "Maintain a Min Heap of size `K`. In the `add` method, push the new element. If size exceeds `K`, pop the minimum. Return the `top()` of the heap. Time: O(log K) per add, Space: O(K)."
  },
  {
    id: "hp-15", name: "Maximum Sum Combination", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-sum-combination/1", cnUrl: "https://www.naukri.com/code360/problems/k-max-sum-combinations_975322", companies: ["Amazon"],
    statement: "Given two integer arrays A and B of size N each. Return the K maximum sum combinations from all possible sum combinations A[i] + B[j].",
    examples: [{ input: "A = [3, 2], B = [1, 4], K = 2", output: "[7, 6]", explanation: "3+4=7, 2+4=6" }], constraints: ["1 <= N, K <= 10^5"],
    hints: ["Sort both arrays descending. Use a Max Heap storing `(sum, (idxA, idxB))`.", "Use a set to avoid processing the same pair of indices multiple times."],
    approach: "Sort A and B descending. Push `(A[0]+B[0], (0, 0))` to Max Heap. While K--: pop top, add to answer. Push `(A[i+1]+B[j], (i+1, j))` and `(A[i]+B[j+1], (i, j+1))` if not visited. Time: O(K log K), Space: O(K)."
  },
  {
    id: "hp-16", name: "Find Median from Data Stream", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/find-median-from-data-stream/", gfgUrl: "https://www.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/find-median-in-a-stream_975268", companies: ["Amazon", "Microsoft", "Apple"],
    statement: "Implement the MedianFinder class: addNum(int num) adds the integer num from the data stream, and findMedian() returns the median of all elements so far.",
    examples: [{ input: "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()", output: "[1.5, 2.0]" }], constraints: ["-10^5 <= num <= 10^5"],
    hints: ["Use two heaps: A Max Heap for the smaller half of the numbers, and a Min Heap for the larger half.", "Keep the sizes balanced such that their difference is at most 1."],
    approach: "MaxHeap `left`, MinHeap `right`. `addNum`: Push to `left`. Pop from `left` and push to `right`. If `right.size() > left.size()`, pop from `right` and push back to `left`. `findMedian`: If sizes equal, return `(left.top() + right.top()) / 2.0`. Else return `left.top()`. Time: O(log N) per add."
  },
  {
    id: "hp-17", name: "Top K Frequent Elements", module: "Heaps [Learning, Medium, Hard Problems]", subModule: "Hard Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/top-k-frequent-elements/", gfgUrl: "https://www.geeksforgeeks.org/problems/top-k-frequent-elements-in-array/1", cnUrl: "https://www.naukri.com/code360/problems/k-most-frequent-elements_3167808", companies: ["Amazon", "Microsoft"],
    statement: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    examples: [{ input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" }], constraints: ["1 <= nums.length <= 10^5"],
    hints: ["Count frequencies using a map.", "Use a Min Heap of size K to keep the elements with the highest frequencies.", "Alternatively, use Bucket Sort for an O(N) solution."],
    approach: "Hash Map for frequencies. Bucket Sort: Create `vector<int> bucket[n+1]`. Place elements in bucket corresponding to their frequency. Iterate backwards from `n` down to 1, collecting elements until we have `k`. Time: O(N), Space: O(N)."
  },

  // ════════════════════════════════════════════════════════════════════════
  // GREEDY ALGORITHMS [Easy, Medium/Hard]
  // ════════════════════════════════════════════════════════════════════════

  // Easy Problems
  {
    id: "gr-01", name: "Assign Cookies", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Easy Problems", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/assign-cookies/", gfgUrl: "https://www.geeksforgeeks.org/problems/assign-cookies/1", cnUrl: "https://www.naukri.com/code360/problems/assign-cookies_8390826", companies: ["Amazon"],
    statement: "Assume you are an awesome parent and want to give your children some cookies. Each child i has a greed factor g[i], and each cookie j has a size s[j]. If s[j] >= g[i], assign cookie j to child i. Maximize the number of content children.",
    examples: [{ input: "g = [1,2,3], s = [1,1]", output: "1", explanation: "Only the child with greed 1 can be satisfied." }], constraints: ["1 <= g.length <= 3 * 10^4", "0 <= s.length <= 3 * 10^4"],
    hints: ["Sort both arrays.", "Use a greedy two-pointer approach to match the smallest valid cookie to the least greedy child."],
    approach: "Sort `g` and `s`. `i=0` (child), `j=0` (cookie). While `i < g.size() && j < s.size()`, if `s[j] >= g[i]`, `i++` (child satisfied). Always `j++`. Return `i`. Time: O(N log N), Space: O(1)."
  },
  {
    id: "gr-02", name: "Fractional Knapsack", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Easy Problems", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/fractional-knapsack_975286", companies: ["Amazon", "Microsoft"],
    statement: "Given weights and values of N items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack. You can break items for maximizing the total value of knapsack.",
    examples: [{ input: "N = 3, W = 50, values[] = {60,100,120}, weight[] = {10,20,30}", output: "240.0" }], constraints: ["1 <= N <= 10^5", "1 <= W <= 10^5"],
    hints: ["Sort the items in descending order of their value-to-weight ratio (`value/weight`).", "Take full items as long as capacity allows, then take a fraction of the last item."],
    approach: "Calculate `v/w` ratio for all items. Sort descending by ratio. Iterate items. If `weight <= capacity`, add value and reduce capacity. Else, add `(capacity * ratio)` and break. Time: O(N log N), Space: O(1)."
  },
  {
    id: "gr-03", name: "Lemonade Change", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Easy Problems", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/lemonade-change/", gfgUrl: "https://www.geeksforgeeks.org/problems/lemonade-change/1", cnUrl: "https://www.naukri.com/code360/problems/lemonade-change_8390823", companies: ["Amazon"],
    statement: "At a lemonade stand, each lemonade costs $5. Customers are standing in a queue, and buy one at a time. Each customer will pay with a $5, $10, or $20 bill. Return true if you can provide every customer with the correct change.",
    examples: [{ input: "bills = [5,5,5,10,20]", output: "true" }], constraints: ["1 <= bills.length <= 10^5"],
    hints: ["Keep count of $5 and $10 bills.", "When returning change for $20, greedily give a $10 and a $5 before giving three $5s."],
    approach: "Maintain `fives = 0`, `tens = 0`. Iterate bills. If $5, `fives++`. If $10, `tens++`, `fives--`. If $20, if `tens > 0`, `tens--`, `fives--`. Else `fives -= 3`. If `fives < 0`, return false. Time: O(N), Space: O(1)."
  },
  {
    id: "gr-04", name: "Valid Parenthesis Checker", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Easy Problems", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/valid-parenthesis-string/", gfgUrl: "https://www.geeksforgeeks.org/problems/valid-substring0624/1", cnUrl: "https://www.naukri.com/code360/problems/valid-parenthesis-string_1264953", companies: ["Amazon", "Microsoft"],
    statement: "Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid. '*' can be treated as a single right parenthesis ')', a single left parenthesis '(', or an empty string.",
    examples: [{ input: "s = '(*))'", output: "true" }], constraints: ["1 <= s.length <= 100"],
    hints: ["Maintain a range of possible open parentheses `[cmin, cmax]`.", "When seeing '(', both min and max increase. When seeing ')', both decrease. When seeing '*', min decreases (acts as close) and max increases (acts as open)."],
    approach: "`cmin = 0`, `cmax = 0`. Iterate string. If `(`, `cmin++, cmax++`. If `)`, `cmin--, cmax--`. If `*`, `cmin--, cmax++`. If `cmax < 0`, return false. If `cmin < 0`, reset `cmin = 0` (can't have negative open brackets). End: return `cmin == 0`. Time: O(N), Space: O(1)."
  },

  // Medium/Hard
  {
    id: "gr-05", name: "N meetings in one room", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-meetings_1062658", companies: ["Amazon", "Microsoft"],
    statement: "There is one meeting room in a firm. There are N meetings in the form of (start[i], end[i]). Find the maximum number of meetings that can be accommodated in the meeting room.",
    examples: [{ input: "start = [1,3,0,5,8,5], end =  [2,4,6,7,9,9]", output: "4", explanation: "Meetings: (1,2), (3,4), (5,7), (8,9)" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Greedily pick the meeting that ends first to leave maximum time for subsequent meetings.", "Sort by end time."],
    approach: "Store `(start, end, index)` in an array. Sort by `end` time. `count = 1`, `freeTime = end[0]`. Loop from `i=1`. If `start[i] > freeTime`, `count++`, `freeTime = end[i]`. Time: O(N log N), Space: O(N)."
  },
  {
    id: "gr-06", name: "Jump Game - I", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/jump-game/", gfgUrl: "https://www.geeksforgeeks.org/problems/jump-game/1", cnUrl: "https://www.naukri.com/code360/problems/jump-game_3139", companies: ["Amazon", "Microsoft"],
    statement: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index.",
    examples: [{ input: "nums = [2,3,1,1,4]", output: "true" }], constraints: ["1 <= nums.length <= 10^4", "0 <= nums[i] <= 10^5"],
    hints: ["Keep track of the maximum reachable index as you iterate.", "If the current index is greater than the max reachable index, you are stuck."],
    approach: "Maintain `maxReach = 0`. Iterate `i`. If `i > maxReach`, return false. `maxReach = max(maxReach, i + nums[i])`. Return true at the end. Time: O(N), Space: O(1)."
  },
  {
    id: "gr-07", name: "Jump Game II", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/jump-game-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/jump-game-ii_980227", companies: ["Amazon", "Google"],
    statement: "Given an array of non-negative integers nums, return the minimum number of jumps to reach the last index. The test cases are generated such that you can reach nums[n - 1].",
    examples: [{ input: "nums = [2,3,1,1,4]", output: "2", explanation: "Jump 1 step from 0 to 1, then 3 steps to the last index." }], constraints: ["1 <= nums.length <= 10^4"],
    hints: ["Use a BFS-like greedy approach. Keep track of the current jump boundary and the furthest you can reach."],
    approach: "`jumps = 0`, `currentEnd = 0`, `farthest = 0`. Iterate `i` up to `n-2`. `farthest = max(farthest, i + nums[i])`. If `i == currentEnd`, `jumps++`, `currentEnd = farthest`. Time: O(N), Space: O(1)."
  },
  {
    id: "gr-08", name: "Minimum number of platforms required", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-number-of-platforms_799400", companies: ["Amazon", "Microsoft", "Paytm"],
    statement: "Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required so that no train is kept waiting.",
    examples: [{ input: "arr[] = [0900, 0940, 0950, 1100], dep[] = [0910, 1200, 1120, 1130]", output: "3" }], constraints: ["1 <= N <= 5000"],
    hints: ["Sort the arrival and departure times separately.", "Use a two-pointer approach to simulate trains arriving and leaving."],
    approach: "Sort `arr` and `dep`. `i = 1`, `j = 0`, `plat_needed = 1`, `max_plat = 1`. While `i < n && j < n`: If `arr[i] <= dep[j]`, `plat_needed++`, `i++`. Else `plat_needed--`, `j++`. Update `max_plat`. Time: O(N log N), Space: O(1)."
  },
  {
    id: "gr-09", name: "Job sequencing Problem", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/job-sequencing-problem_1169460", companies: ["Amazon"],
    statement: "Given a set of N jobs where each jobi has a deadline and profit. Maximize the total profit if only one job can be scheduled at a time.",
    examples: [{ input: "Jobs = [(1,4,20),(2,1,10),(3,1,40),(4,1,30)]", output: "2 60", explanation: "Job 3 (40) and Job 1 (20)." }], constraints: ["1 <= N <= 10^5"],
    hints: ["Sort the jobs descending by profit.", "Schedule each job as late as possible before its deadline."],
    approach: "Sort jobs descending by profit. Find max deadline to size an array `slots`. Iterate jobs. Loop from job's deadline down to 1. Find a free slot, mark it, add profit. Time: O(N log N + N*D), Space: O(D)."
  },
  {
    id: "gr-10", name: "Candy", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/candy/", gfgUrl: "https://www.geeksforgeeks.org/problems/candy/1", cnUrl: "https://www.naukri.com/code360/problems/candy_893290", companies: ["Amazon", "Google", "Microsoft"],
    statement: "There are n children standing in a line. Each child is assigned a rating. You are giving candies subject to: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies.",
    examples: [{ input: "ratings = [1,0,2]", output: "5", explanation: "Give 2, 1, 2 candies." }], constraints: ["1 <= ratings.length <= 2 * 10^4"],
    hints: ["A single pass is not enough. You need to satisfy both left and right neighbors.", "Do one pass left-to-right, then one pass right-to-left."],
    approach: "Create `ans` array initialized to 1. Pass 1 (Left to Right): If `rat[i] > rat[i-1]`, `ans[i] = ans[i-1] + 1`. Pass 2 (Right to Left): If `rat[i] > rat[i+1]`, `ans[i] = max(ans[i], ans[i+1] + 1)`. Sum the array. Time: O(N), Space: O(N)."
  },
  {
    id: "gr-11", name: "Shortest Job First", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/shortest-job-first/1", cnUrl: "https://www.naukri.com/code360/problems/sjf_1172165", companies: ["Amazon"],
    statement: "Given an array of N integers denoting burst times of N processes. Find the average waiting time of all processes.",
    examples: [{ input: "bt = [4, 3, 7, 1, 2]", output: "4", explanation: "Sorted: [1, 2, 3, 4, 7]. Waiting times: [0, 1, 3, 6, 10]. Avg = 20/5 = 4." }], constraints: ["1 <= N <= 10^5"],
    hints: ["Sorting the burst times minimizes the waiting time of subsequent processes."],
    approach: "Sort the burst time array. Keep a running `time` sum and a `totalWaitTime` sum. Loop through array, `totalWaitTime += time`, `time += bt[i]`. Return `totalWaitTime / N`. Time: O(N log N), Space: O(1)."
  },
  {
    id: "gr-12", name: "LRU Page Replacement Algorithm", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/page-faults-in-lru5603/1", cnUrl: "https://www.naukri.com/code360/problems/lru-page-replacement-algorithm_920444", companies: ["Microsoft"],
    statement: "In operating systems that use paging, page replacement algorithms are needed to decide which page needs to be replaced when a new page comes in. Implement the Least Recently Used (LRU) algorithm and return the total number of page faults.",
    examples: [{ input: "N = 9, C = 4, pages = {5, 0, 1, 3, 2, 4, 1, 0, 5}", output: "8" }], constraints: ["1 <= N <= 1000", "1 <= Capacity <= 100"],
    hints: ["Simulate the cache using a vector or doubly linked list.", "Whenever a page is accessed, move it to the front/end to mark it as most recently used."],
    approach: "Use a `vector` to simulate memory. If page is in memory, erase it and push back. If not, `page_fault++`, push back. If size > C, erase the first element (`memory.front()`). Time: O(N * C), Space: O(C)."
  },
  {
    id: "gr-13", name: "Insert Interval", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/insert-interval/", gfgUrl: "https://www.geeksforgeeks.org/problems/insert-interval-1666733333/1", cnUrl: "https://www.naukri.com/code360/problems/insert-interval_1214695", companies: ["Google", "Amazon"],
    statement: "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and still does not have any overlapping intervals.",
    examples: [{ input: "intervals = [[1,3],[6,9]], newInterval = [2,5]", output: "[[1,5],[6,9]]" }], constraints: ["0 <= intervals.length <= 10^4"],
    hints: ["There are three phases: intervals strictly before newInterval, overlapping intervals, and intervals strictly after.", "Merge overlapping intervals into newInterval on the fly."],
    approach: "Iterate intervals. Phase 1: `intervals[i][1] < newInterval[0]`, add to ans. Phase 2 (Overlap): `intervals[i][0] <= newInterval[1]`, `newInterval[0] = min`, `newInterval[1] = max`. Add merged `newInterval`. Phase 3: Add remaining intervals. Time: O(N), Space: O(N)."
  },
  {
    id: "gr-14", name: "Merge Intervals", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/merge-intervals/", gfgUrl: "https://www.geeksforgeeks.org/problems/overlapping-intervals--170633/1", cnUrl: "https://www.naukri.com/code360/problems/merge-all-overlapping-intervals_6783452", companies: ["Amazon", "Microsoft", "Google"],
    statement: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals.",
    examples: [{ input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" }], constraints: ["1 <= intervals.length <= 10^4"],
    hints: ["Sort the intervals by their start times.", "If the start time of the current interval is <= the end time of the previous, they overlap."],
    approach: "Sort by start times. Iterate intervals. If `ans` is empty or `ans.last.end < curr.start`, push `curr`. Else update `ans.last.end = max(ans.last.end, curr.end)`. Time: O(N log N), Space: O(N)."
  },
  {
    id: "gr-15", name: "Non-overlapping Intervals", module: "Greedy Algorithms [Easy, Medium/Hard]", subModule: "Medium/Hard", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/non-overlapping-intervals/", gfgUrl: "https://www.geeksforgeeks.org/problems/non-overlapping-intervals/1", cnUrl: "https://www.naukri.com/code360/problems/non-overlapping-intervals_1083695", companies: ["Amazon", "Facebook"],
    statement: "Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
    examples: [{ input: "intervals = [[1,2],[2,3],[3,4],[1,3]]", output: "1", explanation: "Remove [1,3] to have the rest non-overlapping." }], constraints: ["1 <= intervals.length <= 10^5"],
    hints: ["This problem is equivalent to finding the maximum number of non-overlapping intervals, which is the exact same logic as 'N meetings in one room'."],
    approach: "Sort intervals by END time. `lastEndTime = intervals[0][1]`, `count = 1` (max non-overlapping). Iterate from `i=1`. If `intervals[i][0] >= lastEndTime`, `count++`, `lastEndTime = intervals[i][1]`. Return `N - count`. Time: O(N log N), Space: O(1)."
  },



  // ═══ BINARY TREES ═══
  // ════════════════════════════════════════════════════════════════════════
  // BINARY TREES [Traversals, Medium and Hard Problems]
  // ════════════════════════════════════════════════════════════════════════

  // Traversals
  {
    id: "bt-01", name: "Introduction to Trees", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/introduction-to-trees/1", cnUrl: "https://www.naukri.com/code360/problems/number-of-nodes_81992", companies: [],
    statement: "Understand the concept of Binary Trees. Find the maximum number of nodes on level i of a binary tree.",
    examples: [{ input: "i = 5", output: "16", explanation: "Level 1 has 1 node, Level 5 has 2^(5-1) = 16." }], constraints: ["1 <= i <= 20"],
    hints: ["The maximum nodes at level L is 2^(L-1)."],
    approach: "Return `pow(2, i - 1)`. Time: O(1)."
  },
  {
    id: "bt-02", name: "Binary Tree Representation", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/binary-tree-representation/1", cnUrl: "https://www.naukri.com/code360/problems/create-binary-tree_8360671", companies: [],
    statement: "You are given an array of elements. Construct a strictly full binary tree from the given array elements using the standard array representation of a binary tree (level order).",
    examples: [{ input: "nodes = [1, 2, 3, 4, 5, 6, 7]", output: "       1\n     /   \\\n    2     3\n   / \\   / \\\n  4   5 6   7" }], constraints: ["1 <= nodes.length <= 10^5"],
    hints: ["In an array representation of a binary tree, for any node at index `i`, its left child is at `2*i + 1` and its right child is at `2*i + 2`."],
    approach: "Create the root using `nodes[0]`. Use a queue to keep track of the created nodes. Iterate through the array in steps of 2, attaching the left child (`2*i+1`) and right child (`2*i+2`) to the front node of the queue, then push the children into the queue. Time: O(N), Space: O(N)."
  },
  {
    id: "bt-03", name: "Pre, Post, Inorder in one traversal", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/tree-traversals/1", cnUrl: "https://www.naukri.com/code360/problems/tree-traversal_981269", companies: ["Amazon"],
    statement: "Write a function to return the Preorder, Inorder, and Postorder traversals of a Binary Tree simultaneously in a single traversal.",
    examples: [{ input: "root = [1, 2, 3]", output: "Pre: [1, 2, 3], In: [2, 1, 3], Post: [2, 3, 1]" }], constraints: ["1 <= nodes <= 10^5"],
    hints: ["Use a stack that stores pairs of `(Node*, int state)`.", "State 1 = Preorder, State 2 = Inorder, State 3 = Postorder."],
    approach: "Stack of `pair<Node*, int>`. Push `{root, 1}`. While stack not empty: `auto it = stack.top()`, `stack.pop()`. If state == 1: push `val` to preorder, push `{node, 2}` to stack, if `node.left` push `{node.left, 1}`. If state == 2: push `val` to inorder, push `{node, 3}`, if `node.right` push `{node.right, 1}`. If state == 3: push `val` to postorder. Time: O(N), Space: O(N)."
  },
  {
    id: "bt-04", name: "Preorder Traversal", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-tree-preorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/preorder-traversal/1", cnUrl: "https://www.naukri.com/code360/problems/preorder-traversal_1092859", companies: ["Amazon", "Microsoft"],
    statement: "Given the root of a binary tree, return the preorder traversal of its nodes' values. (Root -> Left -> Right).",
    examples: [{ input: "root = [1,null,2,3]", output: "[1,2,3]" }], constraints: ["0 <= nodes <= 100"],
    hints: ["Recursion: process current node, call left, call right."],
    approach: "Recursive `dfs(root)`: `if (!root) return; ans.push(root.val); dfs(root.left); dfs(root.right);`. Time: O(N), Space: O(N)."
  },
  {
    id: "bt-05", name: "Inorder Traversal of Binary Tree", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-tree-inorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/inorder-traversal/1", cnUrl: "https://www.naukri.com/code360/problems/inorder-traversal_3839605", companies: ["Amazon", "Microsoft"],
    statement: "Given the root of a binary tree, return the inorder traversal of its nodes' values. (Left -> Root -> Right).",
    examples: [{ input: "root = [1,null,2,3]", output: "[1,3,2]" }], constraints: ["0 <= nodes <= 100"],
    hints: ["Recursion: call left, process current node, call right."],
    approach: "Recursive `dfs(root)`: `if (!root) return; dfs(root.left); ans.push(root.val); dfs(root.right);`. Time: O(N), Space: O(N)."
  },
  {
    id: "bt-06", name: "Postorder Traversal", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-tree-postorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/postorder-traversal/1", cnUrl: "https://www.naukri.com/code360/problems/postorder-traversal_2081920", companies: ["Amazon"],
    statement: "Given the root of a binary tree, return the postorder traversal of its nodes' values. (Left -> Right -> Root).",
    examples: [{ input: "root = [1,null,2,3]", output: "[3,2,1]" }], constraints: ["0 <= nodes <= 100"],
    hints: ["Recursion: call left, call right, process current node."],
    approach: "Recursive `dfs(root)`: `if (!root) return; dfs(root.left); dfs(root.right); ans.push(root.val);`. Time: O(N), Space: O(N)."
  },
  {
    id: "bt-07", name: "Level Order Traversal", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/level-order-traversal/1", cnUrl: "https://www.naukri.com/code360/problems/level-order-traversal_796002", companies: ["Amazon", "Microsoft"],
    statement: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }], constraints: ["0 <= nodes <= 2000"],
    hints: ["Use a Queue for Breadth-First Search (BFS)."],
    approach: "Queue BFS. Push `root`. `while (!q.empty())`: size = `q.size()`, loop `size` times, pop node, push to `level` array. Push `node.left` and `node.right` to queue if they exist. Push `level` array to `ans`. Time: O(N), Space: O(N)."
  },
  {
    id: "bt-08", name: "Iterative Preorder Traversal of Binary Tree", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-tree-preorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/preorder-traversal-iterative/1", cnUrl: "https://www.naukri.com/code360/problems/preorder-traversal_1092859", companies: ["Microsoft"],
    statement: "Given the root of a binary tree, return the preorder traversal without using recursion (Iterative approach).",
    examples: [{ input: "root = [1,null,2,3]", output: "[1,2,3]" }], constraints: ["0 <= nodes <= 100"],
    hints: ["Use a Stack.", "Push the right child first, then the left child, so that the left child is processed first."],
    approach: "Stack. Push `root`. While stack not empty: `node = stack.pop()`, `ans.push(node.val)`. If `node.right` exists, `stack.push(node.right)`. If `node.left` exists, `stack.push(node.left)`. Time: O(N), Space: O(N)."
  },
  {
    id: "bt-09", name: "Iterative Inorder Traversal of Binary Tree", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-tree-inorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/inorder-traversal-iterative/1", cnUrl: "https://www.naukri.com/code360/problems/inorder-traversal_3839605", companies: ["Amazon"],
    statement: "Given the root of a binary tree, return the inorder traversal without using recursion (Iterative approach).",
    examples: [{ input: "root = [1,null,2,3]", output: "[1,3,2]" }], constraints: ["0 <= nodes <= 100"],
    hints: ["Use a Stack.", "Keep traversing left and pushing to stack. When null, pop, visit, and move right."],
    approach: "Stack. `curr = root`. While `curr` or `!stack.empty()`: If `curr`, `stack.push(curr)`, `curr = curr.left`. Else, `curr = stack.pop()`, `ans.push(curr.val)`, `curr = curr.right`. Time: O(N), Space: O(N)."
  },
  {
    id: "bt-10", name: "Post-order Traversal of Binary Tree using 2 stacks", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-tree-postorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/postorder-traversal-iterative/1", cnUrl: "https://www.naukri.com/code360/problems/postorder-traversal_2081920", companies: ["Amazon"],
    statement: "Given the root of a binary tree, return the postorder traversal using an iterative approach with two stacks.",
    examples: [{ input: "root = [1,null,2,3]", output: "[3,2,1]" }], constraints: ["0 <= nodes <= 100"],
    hints: ["Postorder is Left -> Right -> Root.", "If we do Root -> Right -> Left and reverse the result, we get Postorder."],
    approach: "Use two stacks (or one stack and reverse the output array). Push `root` to `st1`. While `st1` is not empty, `node = st1.pop()`, push `node` to `st2`. Push `node.left` then `node.right` to `st1`. Finally, pop everything from `st2` to get the answer. Time: O(N), Space: O(N)."
  },
  {
    id: "bt-11", name: "Post-order Traversal of Binary Tree using 1 stack", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-tree-postorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/postorder-traversal-iterative/1", cnUrl: "https://www.naukri.com/code360/problems/postorder-traversal_2081920", companies: ["Amazon", "Microsoft"],
    statement: "Given the root of a binary tree, return the postorder traversal using an iterative approach with exactly one stack.",
    examples: [{ input: "root = [1,null,2,3]", output: "[3,2,1]" }], constraints: ["0 <= nodes <= 100"],
    hints: ["You need to keep track of whether you are returning from the left child or the right child.", "If `curr.right` is null or `curr.right` equals the previously printed node, print `curr`."],
    approach: "One stack. `curr = root`, `lastVisited = null`. While `curr` or `!stack.empty()`: If `curr`, `stack.push(curr)`, `curr = curr.left`. Else, `peekNode = stack.top()`. If `peekNode.right` exists and `lastVisited != peekNode.right`, `curr = peekNode.right`. Else, `ans.push(peekNode.val)`, `lastVisited = stack.pop()`. Time: O(N), Space: O(N)."
  },
  {
    id: "bt-12", name: "Preorder, Inorder, and Postorder Traversal in one Traversal", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Traversals", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/tree-traversals/1", cnUrl: "https://www.naukri.com/code360/problems/tree-traversal_981269", companies: ["Amazon"],
    statement: "Write a function to return the Preorder, Inorder, and Postorder traversals of a Binary Tree simultaneously in a single traversal.",
    examples: [{ input: "root = [1, 2, 3]", output: "Pre: [1, 2, 3], In: [2, 1, 3], Post: [2, 3, 1]" }], constraints: ["1 <= nodes <= 10^5"],
    hints: ["Use a stack that stores pairs of `(Node*, int state)`.", "State 1 = Preorder, State 2 = Inorder, State 3 = Postorder."],
    approach: "Stack of `pair<Node*, int>`. Push `{root, 1}`. While stack not empty: `auto it = stack.top()`, `stack.pop()`. If state == 1: push `val` to preorder, push `{node, 2}` to stack, if `node.left` push `{node.left, 1}`. If state == 2: push `val` to inorder, push `{node, 3}`, if `node.right` push `{node.right, 1}`. If state == 3: push `val` to postorder. Time: O(N), Space: O(N)."
  }
];