export const PROBLEMS_PART2 = [
  // ═══ BINARY SEARCH [1D, 2D Arrays, Search Space] ═══
  // BS on 1D Arrays
  {
    id: "bs-01", name: "Search X in sorted array", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/binary-search/", gfgUrl: "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/binary-search_972", companies: ["Amazon", "Microsoft"],
    statement: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
    examples: [{ input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" }], constraints: ["1 <= nums.length <= 10^4", "-10^4 < nums[i], target < 10^4"],
    hints: ["Since the array is sorted, you can use Binary Search."],
    approach: "Standard Binary Search. `low = 0`, `high = n-1`. `mid = low + (high - low)/2`. If `nums[mid] == target`, return `mid`. If `nums[mid] < target`, `low = mid + 1`. Else `high = mid - 1`. Time: O(log N), Space: O(1)."
  },
  {
    id: "bs-02", name: "Lower Bound", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/lower-bound_8165382", companies: ["Amazon"],
    statement: "Given a sorted array arr[] of size N and a number X, find the lower bound of X. The lower bound of X is the first index i such that arr[i] >= X.",
    examples: [{ input: "N = 5, arr = [1, 2, 8, 10, 11], X = 9", output: "3", explanation: "10 is the first element >= 9, which is at index 3." }], constraints: ["1 <= N <= 10^5"],
    hints: ["Use Binary Search. If arr[mid] >= X, it might be the answer, but search left for a smaller index."],
    approach: "`ans = N`, `low = 0`, `high = N-1`. If `arr[mid] >= X`, `ans = mid` and `high = mid - 1`. Else `low = mid + 1`. Time: O(log N), Space: O(1)."
  },
  {
    id: "bs-03", name: "Upper Bound", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1", cnUrl: "https://www.naukri.com/code360/problems/implement-upper-bound_8165383", companies: [],
    statement: "Find the upper bound of X in a sorted array. The upper bound is the first index i such that arr[i] > X.",
    examples: [{ input: "N = 5, arr = [1, 2, 8, 10, 11], X = 8", output: "3", explanation: "10 is the first element strictly > 8." }], constraints: ["1 <= N <= 10^5"],
    hints: ["Use Binary Search. If arr[mid] > X, it might be the answer, but search left."],
    approach: "`ans = N`, `low = 0`, `high = N-1`. If `arr[mid] > X`, `ans = mid` and `high = mid - 1`. Else `low = mid + 1`. Time: O(log N), Space: O(1)."
  },
  {
    id: "bs-04", name: "Search insert position", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/search-insert-position/", gfgUrl: "https://www.geeksforgeeks.org/problems/search-insert-position-of-k-in-a-sorted-array/1", cnUrl: "https://www.naukri.com/code360/problems/algorithm-to-find-best-insert-position-in-sorted-array_839813", companies: ["Apple", "Amazon"],
    statement: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    examples: [{ input: "nums = [1,3,5,6], target = 5", output: "2" }, { input: "nums = [1,3,5,6], target = 2", output: "1" }], constraints: ["1 <= nums.length <= 10^4"],
    hints: ["This problem is equivalent to finding the Lower Bound."],
    approach: "Apply Lower Bound logic. `if (nums[mid] >= target) ans = mid, high = mid - 1; else low = mid + 1;`. Return `ans`. Time: O(log N), Space: O(1)."
  },
  {
    id: "bs-05", name: "Floor and Ceil in Sorted Array", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1", cnUrl: "https://www.naukri.com/code360/problems/ceiling-in-a-sorted-array_1825401", companies: ["Amazon"],
    statement: "Given an unsorted array Arr[] and an integer X, find floor and ceiling of X in Arr[]. Floor of X is the largest element <= X. Ceil of X is the smallest element >= X.",
    examples: [{ input: "X = 7, Arr = [5, 6, 8, 9, 6, 5, 5, 6]", output: "6 8" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Sort the array first if it's unsorted. Then Floor is finding the largest element <= X, and Ceil is finding the Lower Bound (>= X)."],
    approach: "Sort array. For floor: `if (arr[mid] <= X) ans = arr[mid], low = mid + 1`. For ceil: `if (arr[mid] >= X) ans = arr[mid], high = mid - 1`. Time: O(N log N) for sort, O(log N) for search."
  },
  {
    id: "bs-06", name: "First and last occurrence", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1", cnUrl: "https://www.naukri.com/code360/problems/first-and-last-position-of-an-element-in-sorted-array_1082549", companies: ["Facebook", "Amazon"],
    statement: "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If not found, return [-1, -1].",
    examples: [{ input: "nums = [5,7,7,8,8,10], target = 8", output: "[3,4]" }], constraints: ["0 <= nums.length <= 10^5"],
    hints: ["Write two separate binary search functions: one to find the first occurrence, and one to find the last occurrence."],
    approach: "First Occurrence: `if (nums[mid] == target) first = mid, high = mid - 1`. Last Occurrence: `if (nums[mid] == target) last = mid, low = mid + 1`. Time: O(log N), Space: O(1)."
  },
  {
    id: "bs-07", name: "Count Occurrences in a Sorted Array", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1", cnUrl: "https://www.naukri.com/code360/problems/occurrence-of-x-in-a-sorted-array_630456", companies: ["Amazon"],
    statement: "Given a sorted array Arr and a number X, count the occurrences of X in Arr.",
    examples: [{ input: "Arr = [1, 1, 2, 2, 2, 2, 3], X = 2", output: "4" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Find the first and last occurrence indices. The count is last - first + 1."],
    approach: "Find `first = firstOccurrence(Arr, X)` and `last = lastOccurrence(Arr, X)`. Return `last - first + 1`. Time: O(log N), Space: O(1)."
  },
  {
    id: "bs-08", name: "Search in rotated sorted array-I", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1", cnUrl: "https://www.naukri.com/code360/problems/search-in-rotated-sorted-array_1082554", companies: ["Amazon", "Microsoft", "LinkedIn"],
    statement: "There is an integer array nums sorted in ascending order (with distinct values), rotated at an unknown pivot. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }], constraints: ["1 <= nums.length <= 5000", "All values are unique."],
    hints: ["Identify which half of the array (left or right of mid) is perfectly sorted. Check if the target lies within that sorted half."],
    approach: "If `nums[low] <= nums[mid]`, left half is sorted. Check `if (nums[low] <= target && target <= nums[mid]) high = mid - 1`, else `low = mid + 1`. If right half is sorted, check `if (nums[mid] <= target && target <= nums[high]) low = mid + 1`, else `high = mid - 1`. Time: O(log N)."
  },
  {
    id: "bs-09", name: "Search in rotated sorted array-II", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/search-in-rotated-array-2/1", cnUrl: "https://www.naukri.com/code360/problems/search-in-rotated-sorted-array-ii_1082555", companies: ["Amazon"],
    statement: "Similar to Part I, but the array nums may contain duplicates. Return true if target is in nums.",
    examples: [{ input: "nums = [2,5,6,0,0,1,2], target = 0", output: "true" }], constraints: ["1 <= nums.length <= 5000"],
    hints: ["Because of duplicates, you might have nums[low] == nums[mid] == nums[high]. In this case, you can't tell which half is sorted. Shrink the search space."],
    approach: "Same logic as Part I, but add a check: `if (nums[low] == nums[mid] && nums[mid] == nums[high]) { low++; high--; continue; }` to handle the edge case of duplicates. Time: O(log N) avg, O(N) worst."
  },
  {
    id: "bs-10", name: "Find minimum in Rotated Sorted Array", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-element-in-a-sorted-and-rotated-array3611/1", cnUrl: "https://www.naukri.com/code360/problems/find-minimum-in-rotated-sorted-array_1081548", companies: ["Microsoft", "Amazon"],
    statement: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Find the minimum element of this array. All integers are unique.",
    examples: [{ input: "nums = [3,4,5,1,2]", output: "1" }], constraints: ["1 <= nums.length <= 5000"],
    hints: ["The minimum element will always be in the unsorted half. If a half is sorted, the minimum of that half is its first element."],
    approach: "If `nums[low] <= nums[mid]`, left is sorted. `ans = min(ans, nums[low])`, search right (`low = mid + 1`). Else right is sorted. `ans = min(ans, nums[mid])`, search left (`high = mid - 1`). Time: O(log N)."
  },
  {
    id: "bs-11", name: "Find out how many times the array is rotated", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/rotation4723/1", cnUrl: "https://www.naukri.com/code360/problems/rotation_7449070", companies: ["Amazon"],
    statement: "Given an ascending sorted rotated array Arr of distinct integers. The array is right rotated K times. Find the value of K.",
    examples: [{ input: "Arr = [5, 1, 2, 3, 4]", output: "1" }], constraints: ["1 <= N <= 10^5"],
    hints: ["The number of rotations is exactly equal to the index of the minimum element in the array."],
    approach: "Use the 'Find Minimum in Rotated Sorted Array' logic. Keep track of the index of the minimum element. The index is the answer. Time: O(log N)."
  },
  {
    id: "bs-12", name: "Single element in a Sorted Array", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/single-element-in-a-sorted-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/find-the-element-that-appears-once-in-sorted-array0624/1", cnUrl: "https://www.naukri.com/code360/problems/unique-element-in-sorted-array_1112654", companies: ["Amazon", "Google"],
    statement: "You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Return the single element that appears only once. Your solution must run in O(log n) time.",
    examples: [{ input: "nums = [1,1,2,3,3,4,4,8,8]", output: "2" }], constraints: ["1 <= nums.length <= 10^5"],
    hints: ["Before the single element, the pairs are at (even, odd) indices. After the single element, the pairs are at (odd, even) indices."],
    approach: "Binary Search. Check `mid`. If `mid` is even and `nums[mid] == nums[mid+1]`, or `mid` is odd and `nums[mid] == nums[mid-1]`, we are on the left of the single element, so `low = mid + 1`. Else, `high = mid - 1`. Time: O(log N)."
  },
  {
    id: "bs-13", name: "Find peak element", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 1D Arrays", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/find-peak-element/", gfgUrl: "https://www.geeksforgeeks.org/problems/peak-element/1", cnUrl: "https://www.naukri.com/code360/problems/find-peak-element_1081482", companies: ["Google", "Amazon"],
    statement: "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.",
    examples: [{ input: "nums = [1,2,3,1]", output: "2", explanation: "3 is a peak element and your function should return the index number 2." }], constraints: ["1 <= nums.length <= 1000", "nums[i] != nums[i+1]"],
    hints: ["Compare mid with mid+1. If nums[mid] < nums[mid+1], you are on an ascending slope, so a peak must exist to the right."],
    approach: "If `nums[mid] > nums[mid-1]` and `nums[mid] > nums[mid+1]`, return `mid`. If `nums[mid] > nums[mid-1]` (ascending), search right: `low = mid + 1`. Else search left: `high = mid - 1`. Edge cases: handle `mid == 0` and `mid == n-1`. Time: O(log N)."
  },

  // BS on Answers
  {
    id: "bs-14", name: "Find square root of a number", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/sqrtx/", gfgUrl: "https://www.geeksforgeeks.org/problems/square-root/1", cnUrl: "https://www.naukri.com/code360/problems/square-root-integral_893351", companies: ["Amazon", "Microsoft"],
    statement: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer.",
    examples: [{ input: "x = 8", output: "2", explanation: "The square root of 8 is 2.82842..., and since we round it down, we return 2." }], constraints: ["0 <= x <= 2^31 - 1"],
    hints: ["Binary search the answer between 1 and x."],
    approach: "`low = 1`, `high = x`. `mid = low + (high-low)/2`. If `mid * mid <= x`, `ans = mid` and search right (`low = mid + 1`). Else search left (`high = mid - 1`). Use division `x / mid >= mid` to prevent overflow. Time: O(log X)."
  },
  {
    id: "bs-15", name: "Find Nth root of a number", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1", cnUrl: "https://www.naukri.com/code360/problems/nth-root-of-m_1062679", companies: ["Amazon"],
    statement: "You are given 2 numbers (n , m); the task is to find n√m (nth root of m). If the root is not integer then returns -1.",
    examples: [{ input: "n = 3, m = 27", output: "3" }], constraints: ["1 <= n <= 30", "1 <= m <= 10^9"],
    hints: ["Binary search from 1 to m.", "To prevent overflow during power calculation, return early if mid^n exceeds m."],
    approach: "`low = 1`, `high = m`. Function `f(mid, n, m)` computes `mid^n` but breaks if it exceeds `m`. If `f == m` return `mid`. If `f < m` `low = mid + 1`. Else `high = mid - 1`. Time: O(log M * log N)."
  },
  {
    id: "bs-16", name: "Koko eating bananas", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/koko-eating-bananas/", gfgUrl: "https://www.geeksforgeeks.org/problems/koko-eating-bananas/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-rate-to-eat-bananas_7449064", companies: ["Google", "Amazon"],
    statement: "Koko loves to eat bananas. There are n piles of bananas. Koko can decide her bananas-per-hour eating speed of k. Return the minimum integer k such that she can eat all the bananas within h hours.",
    examples: [{ input: "piles = [3,6,7,11], h = 8", output: "4" }], constraints: ["1 <= piles.length <= 10^4", "piles.length <= h <= 10^9"],
    hints: ["Binary search on the answer space. The minimum speed is 1, and the maximum is the largest pile."],
    approach: "Binary search on speed `k` from `1` to `max(piles)`. For a `mid` speed, calculate total hours required: `sum(ceil(pile / mid))`. If `total <= h`, it's valid, `ans = mid`, try a smaller speed (`high = mid - 1`). Else try larger (`low = mid + 1`). Time: O(N log(MaxPile))."
  },
  {
    id: "bs-17", name: "Minimum days to make M bouquets", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-days-to-make-m-bouquets/1", cnUrl: "https://www.naukri.com/code360/problems/rose-garden_2248080", companies: ["Bloomberg", "Google"],
    statement: "You are given an integer array bloomDay, an integer m and an integer k. You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden. Return the minimum number of days you need to wait to be able to make m bouquets.",
    examples: [{ input: "bloomDay = [1,10,3,10,2], m = 3, k = 1", output: "3" }], constraints: ["bloomDay.length <= 10^5", "1 <= m, k <= 10^5"],
    hints: ["If m * k > n, it's impossible, return -1.", "Binary search the days between min(bloomDay) and max(bloomDay)."],
    approach: "Binary Search. Range: `[minDay, maxDay]`. Check function: iterate array. If `bloomDay[i] <= mid`, increment contiguous count. If `count == k`, `bouquets++`, reset `count`. If `bloomDay[i] > mid`, reset `count`. If `bouquets >= m`, valid, search left. Else search right. Time: O(N log(MaxDay))."
  },
  {
    id: "bs-18", name: "Find the smallest divisor", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/", gfgUrl: "https://www.geeksforgeeks.org/problems/smallest-divisor/1", cnUrl: "https://www.naukri.com/code360/problems/smallest-divisor-with-the-given-limit_1755882", companies: ["Amazon"],
    statement: "Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.",
    examples: [{ input: "nums = [1,2,5,9], threshold = 6", output: "5", explanation: "Divide by 5: 1/5=1, 2/5=1, 5/5=1, 9/5=2. Sum = 5 <= 6." }], constraints: ["1 <= nums.length <= 5 * 10^4", "nums.length <= threshold <= 10^6"],
    hints: ["Binary search the divisor between 1 and max(nums).", "Use ceil division: `(num + div - 1) / div` in C++."],
    approach: "Binary Search on answer. Low = 1, High = max(nums). Check `sum(ceil(num / mid)) <= threshold`. If true, `ans = mid`, search left. Else search right. Time: O(N log(MaxElement))."
  },
  {
    id: "bs-19", name: "Capacity to Ship Packages Within D Days", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", gfgUrl: "https://www.geeksforgeeks.org/problems/capacity-to-ship-packages-within-d-days/1", cnUrl: "https://www.naukri.com/code360/problems/capacity-to-ship-packages-within-d-days_1229379", companies: ["Amazon", "Google", "Facebook"],
    statement: "A conveyor belt has packages that must be shipped within days days. Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.",
    examples: [{ input: "weights = [1,2,3,4,5,6,7,8,9,10], days = 5", output: "15" }], constraints: ["1 <= days <= weights.length <= 5 * 10^4"],
    hints: ["The minimum capacity cannot be less than the heaviest package. The maximum capacity could be the sum of all packages."],
    approach: "Binary Search range `[max(weights), sum(weights)]`. Check function: Greedily add weights to a daily load. If `load + weights[i] > mid`, start a new day. If `requiredDays <= days`, valid, search left. Else search right. Time: O(N log(Sum))."
  },
  {
    id: "bs-20", name: "Kth Missing Positive Number", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/kth-missing-positive-number/", gfgUrl: "https://www.geeksforgeeks.org/problems/k-th-missing-element3635/1", cnUrl: "https://www.naukri.com/code360/problems/kth-missing-element_893215", companies: ["Facebook", "Amazon"],
    statement: "Given an array arr of positive integers sorted in a strictly increasing order, and an integer k. Return the kth positive integer that is missing from this array.",
    examples: [{ input: "arr = [2,3,4,7,11], k = 5", output: "9", explanation: "Missing: [1,5,6,8,9,10]. The 5th is 9." }], constraints: ["1 <= arr.length <= 1000", "1 <= k <= 1000"],
    hints: ["The number of missing positive integers before index i is `arr[i] - (i + 1)`."],
    approach: "Binary Search. Range `[0, n-1]`. If `arr[mid] - (mid + 1) < k`, search right (`low = mid + 1`). Else search left (`high = mid - 1`). The answer is `low + k` (or `arr[high] + k - missing_before_high`). Time: O(log N)."
  },
  {
    id: "bs-21", name: "Aggressive Cows", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/aggressive-cows/1", cnUrl: "https://www.naukri.com/code360/problems/aggressive-cows_1082559", companies: ["Amazon", "Google", "Microsoft"],
    statement: "You are given an array with unique elements representing stall coordinates, and k cows. Assign the cows to the stalls such that the minimum distance between any two of them is as large as possible. Return that minimum distance.",
    examples: [{ input: "stalls = [1,2,4,8,9], k = 3", output: "3", explanation: "Place cows at 1, 4, 8. Distances are 3 and 4. Min is 3." }], constraints: ["2 <= stalls.length <= 10^5", "2 <= k <= stalls.length"],
    hints: ["Sort the array. Binary search on the answer (distance). Range is [1, max(stalls) - min(stalls)]."],
    approach: "Sort stalls. Binary search `mid` distance. Check function: Place first cow at `stalls[0]`. Track `lastPlaced`. Iterate stalls, if `stalls[i] - lastPlaced >= mid`, place cow and update `lastPlaced`. If `cowsPlaced >= k`, valid, search right (`ans=mid`). Else search left. Time: O(N log(MaxDist))."
  },
  {
    id: "bs-22", name: "Book Allocation Problem", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1", cnUrl: "https://www.naukri.com/code360/problems/allocate-books_1090540", companies: ["Google", "Amazon", "Microsoft"],
    statement: "Given an array of integer numbers where 'A[i]' represents the number of pages in the 'i-th' book. There are 'M' number of students. Allocate books such that the maximum number of pages assigned to a student is minimized.",
    examples: [{ input: "A = [12, 34, 67, 90], M = 2", output: "113", explanation: "Allocate [12,34,67] to student 1 and [90] to student 2." }], constraints: ["N < M returns -1", "1 <= N <= 10^5"],
    hints: ["Binary search on the answer space. Min pages = max(A). Max pages = sum(A)."],
    approach: "Binary Search. Range `[max(A), sum(A)]`. Check function: allocate pages sequentially. If `pages + A[i] > mid`, assign to next student. If `studentsRequired > M`, return false. If true, `ans = mid`, search left. Else search right. Time: O(N log(Sum))."
  },
  {
    id: "bs-23", name: "Split array - largest sum", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/split-array-largest-sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/split-array-largest-sum/1", cnUrl: "https://www.naukri.com/code360/problems/split-array-largest-sum_8165509", companies: ["Google", "Amazon"],
    statement: "Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized. Return the minimized largest sum of the split.",
    examples: [{ input: "nums = [7,2,5,10,8], k = 2", output: "18", explanation: "Subarrays [7,2,5] and [10,8]. Max sum is 18." }], constraints: ["1 <= nums.length <= 1000", "1 <= k <= min(50, nums.length)"],
    hints: ["This problem is conceptually identical to the Book Allocation Problem."],
    approach: "Binary search on max sum. Range `[max(nums), sum(nums)]`. Validate if array can be split into <= k parts such that no part sum exceeds `mid`. Time: O(N log(Sum))."
  },
  {
    id: "bs-24", name: "Painter's Partition", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/the-painters-partition-problem1535/1", cnUrl: "https://www.naukri.com/code360/problems/painter-s-partition-problem_1089557", companies: ["Google", "Microsoft"],
    statement: "Given an array/list of length N, where the array represents the boards and each element of the given array represents the length of each board. There are K painters. Find the minimum time to get this job done.",
    examples: [{ input: "arr = [5, 5, 5, 5], K = 2", output: "10" }], constraints: ["1 <= N <= 10^5"],
    hints: ["This problem is conceptually identical to Split Array Largest Sum and Book Allocation."],
    approach: "Binary Search. Range `[max(arr), sum(arr)]`. Function to check if K painters can paint boards with `mid` max time. Time: O(N log(Sum))."
  },
  {
    id: "bs-25", name: "Minimize Max Distance to Gas Station", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/minimize-max-distance-to-gas-station/", gfgUrl: "https://www.geeksforgeeks.org/problems/minimize-max-distance-to-gas-station/1", cnUrl: "https://www.naukri.com/code360/problems/minimise-max-distance_7541449", companies: ["Google"],
    statement: "You are given a sorted integer array stations representing gas station locations. You add k new gas stations. Return the smallest possible value of the maximum distance between adjacent gas stations after adding the k new stations.",
    examples: [{ input: "stations = [1,2,3,4,5,6,7,8,9,10], k = 9", output: "0.50000" }], constraints: ["10 <= stations.length <= 2000"],
    hints: ["Since the answer is a floating point number, use binary search with a precision condition (e.g., high - low > 1e-6)."],
    approach: "Binary search on distance (double). Low=0, High=max_gap. Mid is distance. Check function: loop gaps, `count += floor(gap / mid)`. If `count <= k`, valid, `high = mid`. Else `low = mid`. Time: O(N log(MaxGap / 1e-6))."
  },
  {
    id: "bs-26", name: "Median of 2 sorted arrays", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/median-of-two-sorted-arrays/", gfgUrl: "https://www.geeksforgeeks.org/problems/median-of-2-sorted-arrays-of-different-sizes/1", cnUrl: "https://www.naukri.com/code360/problems/median-of-two-sorted-arrays_985294", companies: ["Amazon", "Microsoft", "Google"],
    statement: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    examples: [{ input: "nums1 = [1,3], nums2 = [2]", output: "2.00000" }], constraints: ["nums1.length == m, nums2.length == n", "0 <= m <= 1000", "0 <= n <= 1000", "1 <= m + n <= 2000"],
    hints: ["Use Binary Search on the smaller array to partition the two arrays into two halves of equal length.", "Check if max_left <= min_right for both arrays."],
    approach: "Binary search partition on smaller array. `cut1 = mid`, `cut2 = (n1+n2+1)/2 - cut1`. Compare `l1, l2` with `r1, r2`. If `l1 <= r2 && l2 <= r1`, valid partition found. If `l1 > r2`, move left (`high = cut1-1`). Else move right. Time: O(log(min(N1, N2))). Space: O(1)."
  },
  {
    id: "bs-27", name: "Kth element of 2 sorted arrays", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on Answers", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1", cnUrl: "https://www.naukri.com/code360/problems/k-th-element-of-2-sorted-array_1164159", companies: ["Amazon", "Microsoft", "Google"],
    statement: "Given two sorted arrays arr1 and arr2 of size N and M respectively and an element K. The task is to find the element that would be at the kth position of the final sorted array.",
    examples: [{ input: "arr1 = [2, 3, 6, 7, 9], arr2 = [1, 4, 8, 10], k = 5", output: "6" }], constraints: ["1 <= N, M <= 10^5"],
    hints: ["Very similar to Median of Two Sorted Arrays.", "Adjust the partition boundaries. The cut must be such that total elements on the left equals K."],
    approach: "Binary search on smaller array. Range `[max(0, k-m), min(k, n)]`. `cut1 = mid`, `cut2 = k - cut1`. Valid condition: `l1 <= r2 && l2 <= r1`. Answer is `max(l1, l2)`. Time: O(log(min(N, M))). Space: O(1)."
  },

  // BS on 2D Arrays
  {
    id: "bs-28", name: "Find row with maximum 1's", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 2D Arrays", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1", cnUrl: "https://www.naukri.com/code360/problems/row-with-maximum-1-s_1112656", companies: ["Amazon", "Microsoft"],
    statement: "Given a boolean 2D array of n x m dimensions where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1's.",
    examples: [{ input: "matrix = [[0,1,1],[1,1,1],[0,0,0]]", output: "1" }], constraints: ["1 <= n, m <= 10^3"],
    hints: ["Since each row is sorted, you can find the first occurrence of 1 in each row using Binary Search.", "Alternatively, use a step-wise approach starting from top-right corner."],
    approach: "Optimal: Start at `row=0, col=m-1`. If `mat[row][col] == 1`, we found a better row, `ans = row`, `col--`. If `mat[row][col] == 0`, `row++`. Time: O(N + M). Space: O(1)."
  },
  {
    id: "bs-29", name: "Search in a 2D matrix", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 2D Arrays", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/search-a-2d-matrix/", gfgUrl: "https://www.geeksforgeeks.org/problems/search-in-a-matrix1720/1", cnUrl: "https://www.naukri.com/code360/problems/search-in-a-2d-matrix_980531", companies: ["Amazon", "Microsoft", "Paytm"],
    statement: "You are given an m x n integer matrix matrix with the following two properties: Each row is sorted in non-decreasing order. The first integer of each row is greater than the last integer of the previous row. Given an integer target, return true if target is in matrix.",
    examples: [{ input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", output: "true" }], constraints: ["1 <= m, n <= 100"],
    hints: ["Treat the 2D matrix as a strictly sorted 1D array of length m*n."],
    approach: "Binary Search. `low = 0`, `high = m*n - 1`. `mid` corresponds to `matrix[mid / n][mid % n]`. Standard binary search checks. Time: O(log(M*N)). Space: O(1)."
  },
  {
    id: "bs-30", name: "Search in 2D matrix - II", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 2D Arrays", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/search-a-2d-matrix-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/search-in-a-matrix-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/search-in-a-2d-matrix-ii_1082553", companies: ["Amazon", "Microsoft"],
    statement: "Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. Integers in each row are sorted in ascending from left to right. Integers in each column are sorted in ascending from top to bottom.",
    examples: [{ input: "matrix = [[1,4,7,11,15],[2,5,8,12,19]], target = 5", output: "true" }], constraints: ["1 <= m, n <= 300"],
    hints: ["Start from the top-right corner. If target is smaller, move left. If larger, move down."],
    approach: "Pointers at `r = 0, c = n-1`. While `r < m && c >= 0`: if `matrix[r][c] == target` return true. If `matrix[r][c] > target` `c--`. Else `r++`. Time: O(M+N). Space: O(1)."
  },
  {
    id: "bs-31", name: "Find Peak Element - II", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 2D Arrays", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/find-a-peak-element-ii/", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/find-peak-element-ii_6615715", companies: ["Google", "Amazon"],
    statement: "A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom. Find a peak element.",
    examples: [{ input: "mat = [[1,4],[3,2]]", output: "[0,1]" }], constraints: ["m, n >= 1", "No two adjacent cells are equal."],
    hints: ["Binary search on the columns. Find the global maximum of the middle column."],
    approach: "Binary Search on columns. For `mid` col, find the max element `maxRow`. Check left and right neighbors of `mat[maxRow][mid]`. If left is greater, search left (`high = mid-1`). Else if right is greater, search right (`low = mid+1`). Else we found the peak. Time: O(M * log N). Space: O(1)."
  },
  {
    id: "bs-32", name: "Matrix Median", module: "Binary Search [1D, 2D Arrays, Search Space]", subModule: "BS on 2D Arrays", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1", cnUrl: "https://www.naukri.com/code360/problems/median-of-a-row-wise-sorted-matrix_1112673", companies: ["Amazon", "Microsoft"],
    statement: "Given a row-wise sorted matrix of size R*C where R and C are always odd, find the median of the matrix.",
    examples: [{ input: "matrix = [[1, 3, 5], [2, 6, 9], [3, 6, 9]]", output: "5", explanation: "Sorted 1D array: [1,2,3,3,5,6,6,9,9]. Median is 5." }], constraints: ["1 <= R, C <= 150"],
    hints: ["Use Binary Search on the range of elements (min element to max element).", "Use upper_bound to count elements less than or equal to mid."],
    approach: "Binary search on answers `[1, 10^9]`. For `mid`, count how many elements in the matrix are `<= mid` using `upper_bound` on each row. If `count <= (R*C)/2`, `low = mid+1`. Else `high = mid-1`. The answer is `low`. Time: O(R * log(C) * log(10^9)). Space: O(1)."
  },


  // ════════════════════════════════════════════════════════════════════════
  // STRINGS [Basic and Medium]
  // ════════════════════════════════════════════════════════════════════════

  // Basic and Easy String Problems
  {
    id: "str-01", name: "Remove Outermost Parentheses", module: "Strings [Basic and Medium]", subModule: "Basic and Easy String Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/remove-outermost-parentheses/", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/remove-outermost-parentheses_2326922", companies: ["Google", "Amazon"],
    statement: "A valid parentheses string is either empty '', '(' + A + ')', or A + B. Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.",
    examples: [{ input: "s = '(()())(())'", output: "'()()()'", explanation: "The primitive strings are '(()())' and '(())'. Removing outermost parentheses gives '()()' + '()' = '()()()'." }],
    constraints: ["1 <= s.length <= 10^5", "s is a valid parentheses string"], hints: ["Use a counter to keep track of the depth of nested parentheses.", "Only add parentheses to the answer if the depth is strictly greater than 0 for '(' and strictly greater than 1 for ')'."],
    approach: "Maintain a `count` variable. Iterate through `s`. If `s[i] == '('` and `count++ > 0`, append to result. If `s[i] == ')'` and `count-- > 1`, append to result. Time: O(N), Space: O(N) for string builder."
  },
  {
    id: "str-02", name: "Reverse words in a given string / Palindrome Check", module: "Strings [Basic and Medium]", subModule: "Basic and Easy String Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/reverse-words-in-a-string/", gfgUrl: "https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1", cnUrl: "https://www.naukri.com/code360/problems/reverse-words-in-a-string_696444", companies: ["Amazon", "Microsoft", "Paytm"],
    statement: "Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters. Return a string of the words in reverse order concatenated by a single space.",
    examples: [{ input: "s = '  hello world  '", output: "'world hello'" }], constraints: ["1 <= s.length <= 10^4"],
    hints: ["You need to handle leading, trailing, and multiple spaces between words."],
    approach: "Two pointers from right to left. Skip trailing spaces. When a word is found (non-space characters), mark boundaries and append to result string. Add a single space between words. Time: O(N), Space: O(N)."
  },
  {
    id: "str-03", name: "Largest Odd Number in a String", module: "Strings [Basic and Medium]", subModule: "Basic and Easy String Problems", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/largest-odd-number-in-string/", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/largest-odd-number-in-a-string_1115856", companies: ["Microsoft"],
    statement: "You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string '' if no odd integer exists.",
    examples: [{ input: "num = '35427'", output: "'35427'" }, { input: "num = '4206'", output: "''" }], constraints: ["1 <= num.length <= 10^5"],
    hints: ["A number is odd if and only if its last digit is odd.", "Find the rightmost odd digit and return the substring from the beginning to that digit."],
    approach: "Iterate the string from right to left. Find the first character that is an odd digit (`(c - '0') % 2 != 0`). Return the substring from 0 to that index + 1. Time: O(N), Space: O(1)."
  },
  {
    id: "str-04", name: "Longest Common Prefix", module: "Strings [Basic and Medium]", subModule: "Basic and Easy String Problems", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/longest-common-prefix/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1", cnUrl: "https://www.naukri.com/code360/problems/longest-common-prefix_2090383", companies: ["Amazon", "Microsoft", "Apple"],
    statement: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ''.",
    examples: [{ input: "strs = ['flower','flow','flight']", output: "'fl'" }], constraints: ["1 <= strs.length <= 200"],
    hints: ["Sort the array of strings and compare the first and last strings."],
    approach: "Sort the array of strings alphabetically. Compare the first string with the last string character by character until they differ. The matched characters form the longest common prefix. Time: O(N log N * M), Space: O(M)."
  },
  {
    id: "str-05", name: "Isomorphic String", module: "Strings [Basic and Medium]", subModule: "Basic and Easy String Problems", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/isomorphic-strings/", gfgUrl: "https://www.geeksforgeeks.org/problems/isomorphic-strings-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/isomorphic-strings_1117636", companies: ["LinkedIn", "Amazon"],
    statement: "Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character.",
    examples: [{ input: "s = 'egg', t = 'add'", output: "true" }], constraints: ["1 <= s.length <= 5 * 10^4", "t.length == s.length"],
    hints: ["Use two HashMaps or arrays of size 256 to store character mappings from s to t and t to s."],
    approach: "Maintain two arrays `mapS[256]` and `mapT[256]` initialized to 0. Iterate through strings. If `mapS[s[i]] != mapT[t[i]]`, return false. Else, update both mappings to `i + 1`. Time: O(N), Space: O(1)."
  },
  {
    id: "str-06", name: "Rotate String", module: "Strings [Basic and Medium]", subModule: "Basic and Easy String Problems", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/rotate-string/", gfgUrl: "https://www.geeksforgeeks.org/problems/check-if-string-is-rotated-by-two-places-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/check-if-one-string-is-a-rotation-of-another-string_1115683", companies: ["Microsoft", "Amazon"],
    statement: "Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.",
    examples: [{ input: "s = 'abcde', goal = 'cdeab'", output: "true" }], constraints: ["1 <= s.length, goal.length <= 100"],
    hints: ["Concatenate s with itself (`s + s`). If `goal` is a rotation of `s`, it will be a substring of `s + s`."],
    approach: "Check if `s.length == goal.length`. If true, return `(s + s).contains(goal)`. Time: O(N), Space: O(N)."
  },
  {
    id: "str-07", name: "Check if two strings are anagram of each other", module: "Strings [Basic and Medium]", subModule: "Basic and Easy String Problems", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/valid-anagram/", gfgUrl: "https://www.geeksforgeeks.org/problems/anagram-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/anagram-pairs_626517", companies: ["Amazon", "Goldman Sachs"],
    statement: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    examples: [{ input: "s = 'anagram', t = 'nagaram'", output: "true" }], constraints: ["1 <= s.length, t.length <= 5 * 10^4"],
    hints: ["Count the frequency of each character in both strings using an array of size 26."],
    approach: "If lengths differ, return false. Create an array `freq[26]`. Iterate through both strings: `freq[s[i] - 'a']++` and `freq[t[i] - 'a']--`. Check if all elements in `freq` are 0. Time: O(N), Space: O(1)."
  },

  // Medium String Problems
  {
    id: "str-08", name: "Sort Characters by Frequency", module: "Strings [Basic and Medium]", subModule: "Medium String Problems", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/sort-characters-by-frequency/", gfgUrl: "https://www.geeksforgeeks.org/problems/sorting-elements-of-an-array-by-frequency-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/sort-characters-by-frequency_1263695", companies: ["Amazon", "Google"],
    statement: "Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.",
    examples: [{ input: "s = 'tree'", output: "'eert'" }], constraints: ["1 <= s.length <= 5 * 10^5"],
    hints: ["Use a HashMap to count frequencies.", "Use a PriorityQueue (Max Heap) or Bucket Sort to sort the characters by frequency."],
    approach: "Count frequencies using a map. Create buckets (array of strings/lists) where the index is the frequency. Iterate through the map and place characters into `bucket[freq]`. Rebuild the string from the highest bucket to the lowest. Time: O(N), Space: O(N)."
  },
  {
    id: "str-09", name: "Maximum Nesting Depth of the Parentheses", module: "Strings [Basic and Medium]", subModule: "Medium String Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-nesting-depth-of-the-parentheses/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-nesting-depth-of-the-parentheses_8144741", companies: ["Microsoft", "Meta"],
    statement: "A string is a valid parentheses string. Return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.",
    examples: [{ input: "s = '(1+(2*3)+((8)/4))+1'", output: "3" }], constraints: ["1 <= s.length <= 100"],
    hints: ["Increment when seeing '(', decrement when seeing ')'. The answer is the maximum value of the counter."],
    approach: "Maintain `current_depth = 0` and `max_depth = 0`. Iterate string. If `s[i] == '('`, `current_depth++`, `max_depth = max(max_depth, current_depth)`. If `s[i] == ')'`, `current_depth--`. Time: O(N), Space: O(1)."
  },
  {
    id: "str-10", name: "Roman to Integer", module: "Strings [Basic and Medium]", subModule: "Medium String Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/roman-to-integer/", gfgUrl: "https://www.geeksforgeeks.org/problems/roman-number-to-integer3201/1", cnUrl: "https://www.naukri.com/code360/problems/roman-number-to-integer_981308", companies: ["Amazon", "Google", "Facebook"],
    statement: "Given a roman numeral, convert it to an integer.",
    examples: [{ input: "s = 'MCMXCIV'", output: "1994", explanation: "M = 1000, CM = 900, XC = 90 and IV = 4." }], constraints: ["1 <= s.length <= 15"],
    hints: ["If a smaller numeral appears before a larger numeral, subtract it instead of adding it (e.g., IV = 5 - 1 = 4)."],
    approach: "Map numerals to values. Iterate from right to left. If current value >= previous value, add to total. Else subtract from total. Update previous value. Time: O(N), Space: O(1)."
  },
  {
    id: "str-11", name: "String to Integer (atoi)", module: "Strings [Basic and Medium]", subModule: "Medium String Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/string-to-integer-atoi/", gfgUrl: "https://www.geeksforgeeks.org/problems/implement-atoi/1", cnUrl: "https://www.naukri.com/code360/problems/string-to-integer-atoi_981313", companies: ["Amazon", "Microsoft", "Apple"],
    statement: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer. Handle leading whitespaces, sign characters, and overflow.",
    examples: [{ input: "s = '   -42'", output: "-42" }], constraints: ["0 <= s.length <= 200"],
    hints: ["Carefully read the exact sequence of rules. Whitespace -> Sign -> Digits -> Overflow clamp."],
    approach: "Trim spaces. Check sign. Read digits while valid. Multiply by 10 and add digit. If result exceeds `INT_MAX`, clamp to `INT_MAX` or `INT_MIN`. Time: O(N), Space: O(1)."
  },
  {
    id: "str-12", name: "Count Number of Substrings", module: "Strings [Basic and Medium]", subModule: "Medium String Problems", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/count-number-of-substrings4528/1", cnUrl: "https://www.naukri.com/code360/problems/count-substrings-with-k-distinct-characters_2859819", companies: ["Amazon"],
    statement: "Given a string of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly k distinct characters.",
    examples: [{ input: "S = 'aba', K = 2", output: "3", explanation: "The substrings are: 'ab', 'ba' and 'aba'." }], constraints: ["1 <= S.length <= 10^5", "1 <= K <= 26"],
    hints: ["Exactly K distinct characters = (At most K distinct) - (At most K-1 distinct)."],
    approach: "Write a helper function `atMostK(s, k)` using the sliding window technique. Return `atMostK(s, k) - atMostK(s, k - 1)`. Time: O(N), Space: O(1) (array of size 26)."
  },
  {
    id: "str-13", name: "Longest Palindromic Substring", module: "Strings [Basic and Medium]", subModule: "Medium String Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/longest-palindromic-substring/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-palindrome-in-a-string3411/1", cnUrl: "https://www.naukri.com/code360/problems/longest-palindromic-substring_758900", companies: ["Amazon", "Microsoft", "Meta"],
    statement: "Given a string s, return the longest palindromic substring in s.",
    examples: [{ input: "s = 'babad'", output: "'bab'" }], constraints: ["1 <= s.length <= 1000"],
    hints: ["A palindrome mirrors around its center. There are 2N-1 possible centers (a single character or between two characters)."],
    approach: "Expand Around Center: For each character, expand outward as long as it's a palindrome (check for both odd and even length centers). Keep track of the maximum length and start index. Time: O(N^2), Space: O(1)."
  },
  {
    id: "str-14", name: "Sum of Beauty of All Substrings", module: "Strings [Basic and Medium]", subModule: "Medium String Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/", gfgUrl: "https://www.geeksforgeeks.org/problems/sum-of-beauty-of-all-substrings-1662962118/1", cnUrl: "https://www.naukri.com/code360/problems/sum-of-beauty-of-all-substrings_8143656", companies: [],
    statement: "The beauty of a string is the difference in frequencies between the most frequent and least frequent characters. Given a string s, return the sum of beauty of all of its substrings.",
    examples: [{ input: "s = 'aabcb'", output: "5", explanation: "Substrings with non-zero beauty: 'aab'(1), 'aabc'(1), 'aabcb'(1), 'abcb'(1), 'bcb'(1). Total = 5." }], constraints: ["1 <= s.length <= 500"],
    hints: ["Since the string is short, you can check all O(N^2) substrings.", "Maintain a frequency array for each substring window."],
    approach: "Iterate all start indices. Initialize a freq array of size 26. Iterate end indices, updating the freq array. For each valid substring, find max and min non-zero freq and add `max - min` to sum. Time: O(N^2 * 26), Space: O(1)."
  },
  {
    id: "str-15", name: "Reverse every word in a string", module: "Strings [Basic and Medium]", subModule: "Medium String Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/reverse-words-in-a-string-iii/", gfgUrl: "https://www.geeksforgeeks.org/problems/reverse-each-word-in-a-given-string1001/1", cnUrl: "https://www.naukri.com/code360/problems/reverse-the-order-of-words-in-a-string_1264991", companies: ["Amazon"],
    statement: "Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.",
    examples: [{ input: "s = 'Let's take LeetCode contest'", output: "'s'teL ekat edoCteeL tsetnoc'" }], constraints: ["1 <= s.length <= 5 * 10^4"],
    hints: ["Use a two-pointer approach to find the start and end of each word.", "Reverse the characters within that specific range."],
    approach: "Iterate through the string. When a space is found or the end of the string is reached, reverse the characters from the `lastSpaceIndex + 1` to the current index. Time: O(N), Space: O(1) if mutable, O(N) if immutable string."
  },


  // ════════════════════════════════════════════════════════════════════════
  // LEARN LINKEDLIST
  // ════════════════════════════════════════════════════════════════════════

  // Learn 1D LinkedList
  {
    id: "ll-01", name: "Introduction to Singly LinkedList", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Learn 1D LinkedList", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/introduction-to-linked-list_8144737", companies: [],
    statement: "Given an array of integers, construct a singly linked list out of it and return the head.",
    examples: [{ input: "arr = [1, 2, 3, 4]", output: "1 -> 2 -> 3 -> 4" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Create a Node class with 'data' and 'next'. Loop through the array, appending new nodes to the tail."],
    approach: "Create `head = new Node(arr[0])`. Keep a `tail` pointer. Loop array from index 1. `tail.next = new Node(arr[i])`, `tail = tail.next`. Return `head`. Time: O(N)."
  },
  {
    id: "ll-02", name: "Insertion at the head of Linked List", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Learn 1D LinkedList", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/insert-node-at-the-beginning_8144739", companies: [],
    statement: "Given the head of a linked list and an integer `val`, insert a new node with data `val` at the head of the linked list and return the new head.",
    examples: [{ input: "head = [2, 3], val = 1", output: "1 -> 2 -> 3" }], constraints: ["0 <= N <= 10^5"],
    hints: ["Create a new node, point its next to the current head, and return the new node as the head."],
    approach: "`newNode = new Node(val); newNode.next = head; return newNode;`. Time: O(1)."
  },
  {
    id: "ll-03", name: "Deletion of the head of LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Learn 1D LinkedList", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/delete-head-of-linked-list_8160463", companies: [],
    statement: "Given the head of a linked list, delete the head node and return the new head.",
    examples: [{ input: "head = [1, 2, 3]", output: "2 -> 3" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Simply return the next node of the head."],
    approach: "If `head` is null, return null. Else, return `head.next`. Time: O(1)."
  },
  {
    id: "ll-04", name: "Find the length of the Linked List", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Learn 1D LinkedList", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/count-nodes-of-linked-list_8144736", companies: [],
    statement: "Given a singly linked list. The task is to find the length of the linked list, where length is defined as the number of nodes in the linked list.",
    examples: [{ input: "head = [1, 2, 3, 4]", output: "4" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Traverse the linked list and maintain a counter."],
    approach: "Initialize `count = 0` and `curr = head`. While `curr != null`, `count++`, `curr = curr.next`. Return count. Time: O(N)."
  },
  {
    id: "ll-05", name: "Search in Linked List", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Learn 1D LinkedList", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/search-in-linked-list-1664434326/1", cnUrl: "https://www.naukri.com/code360/problems/search-in-a-linked-list_975381", companies: [],
    statement: "Given a linked list and an integer key, return 1 if the key is present in the linked list, else return 0.",
    examples: [{ input: "head = [1, 2, 3], key = 2", output: "1" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Traverse the list and compare node values with the key."],
    approach: "Traverse list. If `curr.data == key`, return 1. If traversal finishes, return 0. Time: O(N)."
  },

  // Learn Doubly LinkedList
  {
    id: "ll-06", name: "Introduction to Doubly LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Learn Doubly LinkedList", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/introduction-to-doubly-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/introduction-to-doubly-linked-list_8160413", companies: [],
    statement: "Given an integer array arr, construct a Doubly Linked List from it and return the head.",
    examples: [{ input: "arr = [1, 2, 3]", output: "1 <-> 2 <-> 3" }], constraints: ["1 <= N <= 10^5"],
    hints: ["A doubly linked list node has 'prev' and 'next' pointers.", "Set `curr.next.prev = curr` when appending nodes."],
    approach: "Create `head = new Node(arr[0])`, `tail = head`. Loop array from 1. `temp = new Node(arr[i])`. `tail.next = temp`, `temp.prev = tail`, `tail = temp`. Return `head`. Time: O(N)."
  },
  {
    id: "ll-07", name: "Insert node before head in Doubly Linked List", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Learn Doubly LinkedList", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/insert-a-node-in-doubly-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/insert-at-end-of-doubly-linked-list_8160464", companies: [],
    statement: "Insert a node with given data before the head of a doubly linked list.",
    examples: [{ input: "head = 2 <-> 3, data = 1", output: "1 <-> 2 <-> 3" }], constraints: ["0 <= N <= 10^5"],
    hints: ["Create a new node, point its next to the current head. If head isn't null, point its prev to the new node."],
    approach: "`newNode = new Node(data); newNode.next = head; if (head != null) head.prev = newNode; return newNode;`. Time: O(1)."
  },
  {
    id: "ll-08", name: "Delete head of Doubly Linked List", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Learn Doubly LinkedList", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/delete-head-of-a-doubly-linked-list_8160461", companies: [],
    statement: "Delete the head node of a Doubly Linked List and return the new head.",
    examples: [{ input: "head = 1 <-> 2 <-> 3", output: "2 <-> 3" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Update the head to head.next. Then disconnect the previous pointer of the new head."],
    approach: "If `head` is null or `head.next` is null, return null. `newHead = head.next; newHead.prev = null; return newHead;`. Time: O(1)."
  },
  {
    id: "ll-09", name: "Reverse a Doubly Linked List", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Learn Doubly LinkedList", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/reverse-a-doubly-linked-list_1116098", companies: ["Amazon", "Microsoft"],
    statement: "Given a doubly linked list, reverse it in-place and return the new head.",
    examples: [{ input: "head = 1 <-> 2 <-> 3", output: "3 <-> 2 <-> 1" }], constraints: ["1 <= N <= 10^5"],
    hints: ["For every node, swap its 'prev' and 'next' pointers."],
    approach: "Maintain `curr = head` and `temp = null`. While `curr != null`, `temp = curr.prev`, `curr.prev = curr.next`, `curr.next = temp`, `curr = curr.prev`. Finally, `head = temp.prev`. Time: O(N), Space: O(1)."
  },

  // Medium Problems of LL
  {
    id: "ll-10", name: "Middle of a LinkedList [TortoiseHare Method]", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/middle-of-the-linked-list/", gfgUrl: "https://www.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/middle-of-linked-list_973250", companies: ["Amazon", "Microsoft", "Flipkart"],
    statement: "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
    examples: [{ input: "head = [1,2,3,4,5]", output: "Node 3" }, { input: "head = [1,2,3,4,5,6]", output: "Node 4" }], constraints: ["1 <= N <= 100"],
    hints: ["Use the Tortoise and Hare algorithm (slow and fast pointers)."],
    approach: "`slow = head`, `fast = head`. While `fast != null && fast.next != null`, `slow = slow.next`, `fast = fast.next.next`. Return `slow`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-11", name: "Reverse a LinkedList [Iterative]", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/reverse-linked-list/", gfgUrl: "https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/reverse-the-singly-linked-list_799897", companies: ["Amazon", "Microsoft", "Apple"],
    statement: "Given the head of a singly linked list, reverse the list iteratively, and return the reversed list.",
    examples: [{ input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" }], constraints: ["0 <= N <= 5000"],
    hints: ["Maintain three pointers: prev, curr, and next."],
    approach: "Iterative: `prev = null`, `curr = head`. While `curr`: `nxt = curr.next`, `curr.next = prev`, `prev = curr`, `curr = nxt`. Return `prev`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-12", name: "Reverse a LL [Recursive]", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/reverse-linked-list/", gfgUrl: "https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/reverse-the-singly-linked-list_799897", companies: ["Amazon", "Microsoft"],
    statement: "Given the head of a singly linked list, reverse the list recursively, and return the reversed list.",
    examples: [{ input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" }], constraints: ["0 <= N <= 5000"],
    hints: ["The recursive function should return the new head.", "Set `head.next.next = head` to reverse the pointer."],
    approach: "Recursive: Base case `if (head == null || head.next == null) return head`. `newHead = reverseList(head.next)`. `head.next.next = head; head.next = null;`. Return `newHead`. Time: O(N), Space: O(N) stack."
  },
  {
    id: "ll-13", name: "Detect a loop in LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/linked-list-cycle/", gfgUrl: "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/cycle-detection-in-a-singly-linked-list_628974", companies: ["Amazon", "Microsoft"],
    statement: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
    examples: [{ input: "head = [3,2,0,-4], pos = 1", output: "true" }], constraints: ["0 <= N <= 10^4"],
    hints: ["Use the Tortoise and Hare algorithm.", "If the fast pointer catches up to the slow pointer, there is a cycle."],
    approach: "Fast and slow pointers. If they meet, return true. If `fast == null` or `fast.next == null`, return false. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-14", name: "Find the starting point in LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/linked-list-cycle-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/find-the-first-node-of-loop-in-linked-list--170645/1", cnUrl: "https://www.naukri.com/code360/problems/first-node-of-loop_8230801", companies: ["Amazon", "Microsoft"],
    statement: "Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.",
    examples: [{ input: "head = [3,2,0,-4], pos = 1", output: "tail connects to node index 1" }], constraints: ["0 <= N <= 10^4"],
    hints: ["Once the slow and fast pointers meet, reset one pointer to head.", "Move both pointers one step at a time. They will meet at the start of the loop."],
    approach: "Fast and slow. When they meet, reset `slow = head`. Move both by 1 until they meet again. That node is the cycle start. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-15", name: "Length of loop in LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/find-length-of-loop/1", cnUrl: "https://www.naukri.com/code360/problems/find-length-of-loop_8160455", companies: ["Amazon"],
    statement: "Given a linked list of size N. The task is to complete the function countNodesinLoop() that checks whether a given Linked List contains a loop or not and if the loop is present then return the count of nodes in a loop or else return 0.",
    examples: [{ input: "head = 1->2->3->4->5, loop from 5 to 2", output: "4" }], constraints: ["1 <= N <= 10^4"],
    hints: ["Use Tortoise and Hare. Once they meet, freeze the slow pointer and move the fast pointer one step at a time, counting until they meet again."],
    approach: "Find the intersection using slow and fast. Then, keep slow fixed, move fast by one and increment a counter until `slow == fast` again. Return the counter. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-16", name: "Check if LL is palindrome or not", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/palindrome-linked-list/", gfgUrl: "https://www.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1", cnUrl: "https://www.naukri.com/code360/problems/palindrom-linked-list_799352", companies: ["Amazon", "Microsoft"],
    statement: "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
    examples: [{ input: "head = [1,2,2,1]", output: "true" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Find the middle. Reverse the second half. Compare both halves."],
    approach: "Find mid using slow/fast. Reverse list from `slow.next`. Compare `head` with `reversedHead`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-17", name: "Segregate odd and even nodes in Linked List", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/odd-even-linked-list/", gfgUrl: "https://www.geeksforgeeks.org/problems/rearrange-a-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/segregate-even-and-odd-nodes-in-a-linked-list_1116100", companies: ["Amazon"],
    statement: "Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list. The first node is considered odd, and the second node is even.",
    examples: [{ input: "head = [1,2,3,4,5]", output: "[1,3,5,2,4]" }], constraints: ["0 <= N <= 10^4"],
    hints: ["Use two pointers, one for odd nodes and one for even nodes.", "Maintain the head of the even list to append it at the end of the odd list."],
    approach: "If `head == null`, return. `odd = head`, `even = head.next`, `evenHead = even`. While `even && even.next`: `odd.next = odd.next.next; odd = odd.next; even.next = even.next.next; even = even.next;`. `odd.next = evenHead`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-18", name: "Remove Nth node from the back of the LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", gfgUrl: "https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/delete-kth-node-from-end_799912", companies: ["Amazon", "Microsoft"],
    statement: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    examples: [{ input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" }], constraints: ["1 <= N <= 30"],
    hints: ["Use a dummy node and two pointers, fast and slow.", "Move fast n steps ahead, then move both until fast reaches the end."],
    approach: "Create `dummy`. `slow = dummy`, `fast = dummy`. Move `fast` by n nodes. Move both until `fast.next == null`. `slow.next = slow.next.next`. Return `dummy.next`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-19", name: "Delete the middle node in LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/", gfgUrl: "https://www.geeksforgeeks.org/problems/delete-middle-of-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/delete-middle-node_763267", companies: ["Amazon"],
    statement: "You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.",
    examples: [{ input: "head = [1,3,4,7,1,2,6]", output: "[1,3,4,1,2,6]", explanation: "The middle node is 7." }], constraints: ["1 <= N <= 10^5"],
    hints: ["Use the fast and slow pointer technique.", "To delete the middle node, you need a pointer to the node strictly BEFORE the middle node."],
    approach: "If list has 1 node, return null. `slow = head`, `fast = head.next.next`. While `fast && fast.next`: `slow = slow.next`, `fast = fast.next.next`. `slow.next = slow.next.next`. Return `head`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-20", name: "Sort LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/sort-list/", gfgUrl: "https://www.geeksforgeeks.org/problems/sort-a-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/sort-linked-list_920517", companies: ["Amazon", "Microsoft"],
    statement: "Given the head of a linked list, return the list after sorting it in ascending order.",
    examples: [{ input: "head = [4,2,1,3]", output: "[1,2,3,4]" }], constraints: ["1 <= N <= 5 * 10^4"],
    hints: ["Use Merge Sort for O(N log N) time complexity."],
    approach: "Merge Sort. Split list in half using slow/fast pointer. Recursively call `sortList` on both halves. Merge the two sorted lists. Time: O(N log N), Space: O(log N) stack."
  },
  {
    id: "ll-21", name: "Sort a Linked List of 0's 1's and 2's", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1", cnUrl: "https://www.naukri.com/code360/problems/sort-linked-list-of-0s-1s-2s_1071937", companies: ["Amazon"],
    statement: "Given a linked list of N nodes where nodes can contain values 0s, 1s, and 2s only. The task is to segregate 0s, 1s, and 2s linked list such that all zeros segregate to head side, 2s at the end of the linked list, and 1s in the mid of 0s and 2s.",
    examples: [{ input: "head = [1,2,2,1,2,0,2,2]", output: "[0,1,1,2,2,2,2,2]" }], constraints: ["1 <= N <= 10^5"],
    hints: ["You can either count the frequencies and rewrite data, or create three separate dummy nodes for 0, 1, and 2, and then connect them."],
    approach: "Create 3 dummy nodes: `zeroHead`, `oneHead`, `twoHead`. Traverse original list, appending nodes to the respective lists. Finally, link `zeroTail.next` to `oneHead.next`, and `oneTail.next` to `twoHead.next`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-22", name: "Find the intersection point of Y LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/intersection-of-two-linked-lists/", gfgUrl: "https://www.geeksforgeeks.org/problems/intersection-of-two-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/intersection-of-two-linked-lists_630457", companies: ["Amazon", "Microsoft"],
    statement: "Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.",
    examples: [{ input: "intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]", output: "Reference to the node with value 8" }], constraints: ["1 <= N, M <= 3 * 10^4"],
    hints: ["Traverse both lists. If one reaches the end, reset it to the head of the other list."],
    approach: "`a = headA`, `b = headB`. While `a != b`: `a = a ? a.next : headB`, `b = b ? b.next : headA`. Return `a`. Time: O(N+M), Space: O(1)."
  },
  {
    id: "ll-23", name: "Add one to a number represented by LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/add-one-to-a-number-represented-as-linked-list_920557", companies: ["Amazon", "Microsoft"],
    statement: "A number N is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.",
    examples: [{ input: "head = 4 -> 5 -> 6", output: "4 -> 5 -> 7" }], constraints: ["1 <= N <= 10^4"],
    hints: ["Reverse the linked list. Add 1 to the new head. Propagate the carry. Reverse the list again.", "Or use recursion to propagate the carry backwards."],
    approach: "Reverse the list. Add 1 to head, track carry. While carry > 0, propagate to next nodes. If you run out of nodes and carry is 1, append a new node with value 1. Reverse again. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-24", name: "Add two numbers in Linked List", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/add-two-numbers/", gfgUrl: "https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1", cnUrl: "https://www.naukri.com/code360/problems/add-two-numbers_1170520", companies: ["Amazon", "Microsoft"],
    statement: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    examples: [{ input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]", explanation: "342 + 465 = 807." }], constraints: ["1 <= N, M <= 100"],
    hints: ["Iterate through both lists simultaneously, adding the values and maintaining a carry."],
    approach: "Use a `dummy` node. `carry = 0`. While `l1` or `l2` or `carry`: `sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0)`. `carry = sum / 10`. `curr.next = new Node(sum % 10)`. Time: O(max(N,M)), Space: O(max(N,M))."
  },

  // Medium Problems of DLL
  {
    id: "ll-25", name: "Delete all occurrences of a key in DLL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of DLL", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list_8160461", companies: [],
    statement: "You are given the head of a doubly Linked List and a Key. Your task is to delete all occurrences of the given key and return the new doubly linked list.",
    examples: [{ input: "head = 2<->2<->10<->8<->4<->2<->5<->2, key = 2", output: "10<->8<->4<->5" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Traverse the DLL. When you find the key, update the `next` pointer of the previous node and the `prev` pointer of the next node.", "Be careful when deleting the head node."],
    approach: "Initialize `curr = head`. If `curr.data == key`, handle pointers. If it's the head, `head = head.next`. Update `prev.next` and `next.prev`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-26", name: "Find Pairs with Given Sum in Doubly Linked List", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of DLL", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/find-pairs-with-given-sum-in-doubly-linked-list_1164172", companies: [],
    statement: "Given a sorted doubly linked list of positive distinct integers, find all pairs whose sum is equal to given target.",
    examples: [{ input: "head = 1 <-> 2 <-> 4 <-> 5 <-> 6 <-> 8 <-> 9, target = 7", output: "(1, 6), (2, 5)" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Since the DLL is sorted, you can use the two-pointer approach (like in a sorted array)."],
    approach: "Set `left` to head and `right` to tail. While `left != right && left.data < right.data`: Calculate sum. If sum == target, add pair to answer, `left = left.next`, `right = right.prev`. If sum < target, `left = left.next`. Else `right = right.prev`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-27", name: "Remove duplicates from sorted DLL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Medium Problems of DLL", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/remove-duplicates-from-a-sorted-doubly-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/remove-duplicates-from-a-sorted-doubly-linked-list_2420283", companies: [],
    statement: "Given a doubly linked list of n nodes sorted by values, the task is to remove duplicate nodes present in the linked list.",
    examples: [{ input: "head = 1 <-> 1 <-> 1 <-> 2 <-> 3 <-> 4 <-> 4", output: "1 <-> 2 <-> 3 <-> 4" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Traverse the list. If `curr.data == curr.next.data`, skip the `curr.next` node by adjusting the pointers."],
    approach: "`curr = head`. While `curr != null && curr.next != null`: if `curr.data == curr.next.data`, `nextNode = curr.next.next`, `curr.next = nextNode`. If `nextNode` exists, `nextNode.prev = curr`. Else, `curr = curr.next`. Time: O(N), Space: O(1)."
  },

  // Hard Problems of LL
  {
    id: "ll-28", name: "Reverse LL in group of given size K", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Hard Problems of LL", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/reverse-nodes-in-k-group/", gfgUrl: "https://www.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1", cnUrl: "https://www.naukri.com/code360/problems/reverse-list-in-k-groups_983644", companies: ["Amazon", "Microsoft"],
    statement: "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.",
    examples: [{ input: "head = [1,2,3,4,5], k = 2", output: "[2,1,4,3,5]" }], constraints: ["1 <= N <= 5000", "1 <= k <= N"],
    hints: ["Count the nodes. Reverse k nodes at a time iteratively.", "Keep track of the `prev` block's tail to connect it to the new head of the current reversed block."],
    approach: "Calculate total length. Use a `dummy` node. `pre = dummy`. Loop `length >= k`: `curr = pre.next`, `nex = curr.next`. Inner loop `k-1` times: `curr.next = nex.next`, `nex.next = pre.next`, `pre.next = nex`, `nex = curr.next`. Update `pre = curr`, `length -= k`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-29", name: "Rotate a LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Hard Problems of LL", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/rotate-list/", gfgUrl: "https://www.geeksforgeeks.org/problems/rotate-a-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/rotate-linked-list_920454", companies: ["Amazon", "Microsoft"],
    statement: "Given the head of a linked list, rotate the list to the right by k places.",
    examples: [{ input: "head = [1,2,3,4,5], k = 2", output: "[4,5,1,2,3]" }], constraints: ["0 <= N <= 500", "0 <= k <= 2 * 10^9"],
    hints: ["Find the length of the list and connect the tail to the head to form a circular list.", "Break the circle at the `length - (k % length)` node."],
    approach: "Find `length` and `tail`. `tail.next = head`. `k = k % length`. Go to `length - k` node. Set `head = node.next`, `node.next = null`. Time: O(N), Space: O(1)."
  },
  {
    id: "ll-30", name: "Flattening of LL", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Hard Problems of LL", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/flatten-a-linked-list_1112655", companies: ["Amazon", "Microsoft", "Goldman Sachs"],
    statement: "Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers: (i) a 'next' pointer to the next node, (ii) a 'bottom' pointer to a linked list where this node is head. Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order.",
    examples: [{ input: "5 -> 10 -> 19 -> 28\n|    |     |\n7    20    22\n|\n8\n|\n30", output: "5-> 7-> 8- > 10 -> 19-> 20-> 22-> 28-> 30" }], constraints: ["1 <= N <= 50", "1 <= Number of bottom nodes <= 50"],
    hints: ["Use recursion. Recursively flatten the `next` list, then merge the current list with the flattened `next` list using the `bottom` pointers."],
    approach: "Recursive function. Base case: `if (root == null || root.next == null) return root;`. Recursively call `root.next = flatten(root.next)`. Merge `root` and `root.next` (similar to merging two sorted lists). Return the merged list. Time: O(N * M), Space: O(N) recursive stack."
  },
  {
    id: "ll-31", name: "Clone a LL with random and next pointer", module: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", subModule: "Hard Problems of LL", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/copy-list-with-random-pointer/", gfgUrl: "https://www.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1", cnUrl: "https://www.naukri.com/code360/problems/clone-a-linked-list-with-random-pointers_983604", companies: ["Amazon", "Microsoft"],
    statement: "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list.",
    examples: [{ input: "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]", output: "[[7,null],[13,0],[11,4],[10,2],[1,0]]" }], constraints: ["0 <= N <= 1000"],
    hints: ["To do it in O(1) space, interweave the copied nodes immediately after the original nodes."],
    approach: "1) Insert copy node right after original node `A -> A' -> B -> B'`. 2) Set random pointers: `curr.next.random = curr.random ? curr.random.next : null`. 3) Separate the two lists, restoring the original and extracting the copy. Time: O(N), Space: O(1)."
  },


  // ═══ RECURSION [PATTERNWISE] ═══
  // Get a Strong Hold
  {
    id: "rec-10", name: "Recursive Implementation of atoi()", module: "Recursion [PatternWise]", subModule: "Get a Strong Hold", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/string-to-integer-atoi/", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/string-to-integer-atoi_981313", companies: ["Amazon", "Microsoft"],
    statement: "Implement the myAtoi(string s) function recursively, which converts a string to a 32-bit signed integer.",
    examples: [{ input: "s = '   -42'", output: "-42" }], constraints: ["0 <= s.length <= 200"],
    hints: ["Use a helper function with an index pointer.", "Handle whitespace and sign iteratively first, then use recursion for the digits."],
    approach: "Recursive `f(s, i, sign, res)`. Base: `i == s.length` or `!isdigit(s[i])`. Return `res * sign`. Recursive step: `res = res * 10 + (s[i] - '0')`. Handle overflow checks before multiplying. Time: O(N), Space: O(N) stack."
  },
  {
    id: "rec-11", name: "Pow(x, n)", module: "Recursion [PatternWise]", subModule: "Get a Strong Hold", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/powx-n/", gfgUrl: "https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/find-x-raised-to-power-n-_626560", companies: ["Google", "Amazon", "Microsoft"],
    statement: "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
    examples: [{ input: "x = 2.00000, n = 10", output: "1024.00000" }], constraints: ["-100.0 < x < 100.0", "-2^31 <= n <= 2^31-1"],
    hints: ["If n is even, x^n = (x*x)^(n/2).", "If n is odd, x^n = x * x^(n-1)."],
    approach: "Binary Exponentiation. Recursive `f(x, n)`: Base case `n == 0` returns 1. If `n < 0`, return `1.0 / f(x, -n)`. If `n` is even, `temp = f(x, n/2)`, return `temp * temp`. If odd, return `x * f(x, n-1)`. Time: O(log N), Space: O(log N)."
  },
  {
    id: "rec-12", name: "Count Good Numbers", module: "Recursion [PatternWise]", subModule: "Get a Strong Hold", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/count-good-numbers/", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/count-good-numbers_8165219", companies: ["Amazon"],
    statement: "A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7). Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 10^9 + 7.",
    examples: [{ input: "n = 4", output: "400" }], constraints: ["1 <= n <= 10^15"],
    hints: ["There are 5 even digits (0,2,4,6,8) and 4 prime digits (2,3,5,7).", "The number of choices is 5^(even positions) * 4^(odd positions)."],
    approach: "Even positions = `(n+1)/2`, Odd positions = `n/2`. Use Modular Binary Exponentiation `pow(x, y, mod)` to calculate `(5^even * 4^odd) % mod`. Time: O(log N), Space: O(log N)."
  },
  {
    id: "rec-13", name: "Sort a stack using recursion", module: "Recursion [PatternWise]", subModule: "Get a Strong Hold", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/sort-a-stack/1", cnUrl: "https://www.naukri.com/code360/problems/sort-a-stack_985275", companies: ["Amazon", "IBM"],
    statement: "Given a stack, the task is to sort it such that the top of the stack has the greatest element. You can only use standard stack operations.",
    examples: [{ input: "s = [11, 2, 32, 3, 41]", output: "[41, 32, 11, 3, 2]" }], constraints: ["1 <= s.size() <= 100"],
    hints: ["Pop all elements to empty the stack using recursion.", "Create an `insert` helper function that places an element in the sorted stack recursively."],
    approach: "Main function: `if (!s.empty()) { int x = s.pop(); sort(); insert(x); }`. Helper `insert(x)`: `if (s.empty() || s.top() < x) { s.push(x); } else { int temp = s.pop(); insert(x); s.push(temp); }`. Time: O(N^2), Space: O(N)."
  },
  {
    id: "rec-14", name: "Reverse a Stack", module: "Recursion [PatternWise]", subModule: "Get a Strong Hold", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/reverse-a-stack/1", cnUrl: "https://www.naukri.com/code360/problems/reverse-stack-using-recursion_631875", companies: ["Amazon"],
    statement: "You are given a stack. Reverse the elements of the stack without using any additional data structures.",
    examples: [{ input: "s = [3, 2, 1]", output: "[1, 2, 3]" }], constraints: ["1 <= s.size() <= 10^4"],
    hints: ["Hold all values in Function Call Stack until the stack becomes empty.", "Write an `insertAtBottom` helper."],
    approach: "Main: `if(!s.empty()) { int x = s.pop(); reverse(); insertAtBottom(x); }`. Helper: `if(s.empty()) s.push(x); else { int temp = s.pop(); insertAtBottom(x); s.push(temp); }`. Time: O(N^2), Space: O(N)."
  },

  // Subsequences Pattern
  {
    id: "rec-15", name: "Generate Binary Strings Without Consecutive 1s", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1", cnUrl: "https://www.naukri.com/code360/problems/binary-strings-with-no-consecutive-1s_8365437", companies: ["Paytm"],
    statement: "Given an integer N, generate all binary strings of length N such that there are no consecutive 1s in the string.",
    examples: [{ input: "N = 3", output: "000, 001, 010, 100, 101" }], constraints: ["1 <= N <= 20"],
    hints: ["If the last character placed was 0, you can place either 0 or 1 next.", "If the last character was 1, you can ONLY place 0 next."],
    approach: "Recursive `f(idx, currentStr)`. Base case: `idx == N`, add to ans. Recursive step: always call `f(idx+1, currentStr + '0')`. If `currentStr.back() == '0'`, also call `f(idx+1, currentStr + '1')`. Time: O(2^N)."
  },
  {
    id: "rec-16", name: "Generate Parentheses", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/generate-parentheses/", gfgUrl: "https://www.geeksforgeeks.org/problems/generate-all-possible-parentheses/1", cnUrl: "https://www.naukri.com/code360/problems/generate-all-parenthesis_920445", companies: ["Amazon", "Microsoft", "Facebook"],
    statement: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    examples: [{ input: "n = 3", output: "['((()))','(()())','(())()','()(())','()()()']" }], constraints: ["1 <= n <= 8"],
    hints: ["Keep track of the number of opening and closing parentheses used.", "You can add '(' if open < n. You can add ')' if close < open."],
    approach: "Recursive `f(open, close, str)`. Base: `if (str.len == 2*n) ans.push(str)`. If `open < n`, `f(open+1, close, str+'(')`. If `close < open`, `f(open, close+1, str+')')`. Time: Catalan Number O(4^n / n^(3/2))."
  },
  {
    id: "rec-17", name: "Power Set", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/subsets/", gfgUrl: "https://www.geeksforgeeks.org/problems/power-set4302/1", cnUrl: "https://www.naukri.com/code360/problems/subsequences-of-string_985087", companies: ["Amazon"],
    statement: "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
    examples: [{ input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }], constraints: ["1 <= nums.length <= 10"],
    hints: ["For each element, you have two choices: pick it or don't pick it."],
    approach: "Recursive `f(idx, currentList)`. Base: `idx == n`, push `currentList` to ans. 1) Exclude: call `f(idx+1, currentList)`. 2) Include: add `nums[idx]`, call `f(idx+1, currentList)`, remove `nums[idx]` (backtrack). Time: O(2^N)."
  },
  {
    id: "rec-18", name: "Learn All Patterns of Subsequences (Theory)", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
    statement: "Understand the general recursion tree for generating subsequences (Pick / Not Pick approach).",
    examples: [], constraints: [], hints: ["Visualize the decision tree for an array of size 3."],
    approach: "Theoretical learning concept."
  },
  {
    id: "rec-19", name: "Count all subsequences with sum K", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1", cnUrl: "https://www.naukri.com/code360/problems/subset-sum_630213", companies: ["Amazon"],
    statement: "Given an array arr[] of non-negative integers and an integer sum, the task is to count all subsets of the given array with a sum equal to a given sum.",
    examples: [{ input: "arr = [1, 2, 3, 3], sum = 6", output: "3", explanation: "Subsets are [1, 2, 3], [1, 2, 3], and [3, 3]." }], constraints: ["1 <= n <= 10^3"],
    hints: ["In recursion, return 1 if the condition is met at the base case, else return 0.", "Total count = `f(pick) + f(notPick)`."],
    approach: "Recursive `f(idx, sum)`. Base: `if (idx == n)` return `sum == target ? 1 : 0`. Return `f(idx+1, sum + arr[idx]) + f(idx+1, sum)`. (Requires DP for larger constraints). Time: O(2^N)."
  },
  {
    id: "rec-20", name: "Check if there exists a subsequence with sum K", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1", cnUrl: "https://www.naukri.com/code360/problems/subset-sum-equal-to-k_1550954", companies: ["Microsoft"],
    statement: "Given an array of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.",
    examples: [{ input: "arr = [3, 34, 4, 12, 5, 2], sum = 9", output: "true" }], constraints: ["1 <= n <= 10^3"],
    hints: ["Use a boolean return type.", "If `f(pick)` returns true, no need to check `f(notPick)`."],
    approach: "Recursive `f(idx, currSum)`. Base: `currSum == target` return true; `idx == n` return false. Return `f(idx+1, currSum + arr[idx]) || f(idx+1, currSum)`. Time: O(2^N)."
  },
  {
    id: "rec-21", name: "Combination Sum", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/combination-sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/combination-sum-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/combination-sum_981296", companies: ["Amazon", "Microsoft", "Airbnb"],
    statement: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may choose the same number from candidates an unlimited number of times.",
    examples: [{ input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" }], constraints: ["1 <= candidates.length <= 30"],
    hints: ["Since you can pick an element unlimited times, when you pick an element, DO NOT increment the index."],
    approach: "Recursive `f(idx, target, currentList)`. Base: `idx == n`, if `target == 0` add to ans, return. Pick: `if (arr[idx] <= target) { list.add; f(idx, target-arr[idx], list); list.remove; }`. Not Pick: `f(idx+1, target, list)`. Time: O(2^T) where T is target."
  },
  {
    id: "rec-22", name: "Combination Sum II", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/combination-sum-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/combination-sum-ii-1664263832/1", cnUrl: "https://www.naukri.com/code360/problems/combination-sum-ii_1112622", companies: ["Amazon", "Microsoft"],
    statement: "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once. The solution set must not contain duplicate combinations.",
    examples: [{ input: "candidates = [10,1,2,7,6,1,5], target = 8", output: "[[1,1,6],[1,2,5],[1,7],[2,6]]" }], constraints: ["1 <= candidates.length <= 100"],
    hints: ["Sort the array first to handle duplicates.", "Iterate with a loop inside the recursion. Skip `if(i > idx && arr[i] == arr[i-1])`."],
    approach: "Sort array. Recursive `f(idx, target, currentList)`. Base: `target == 0` add ans. Loop `i` from `idx` to `n-1`. Skip duplicates. `if(arr[i] > target) break`. Add to list, call `f(i+1, target-arr[i], list)`, backtrack. Time: O(2^N)."
  },
  {
    id: "rec-23", name: "Subsets I", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/subsets/", gfgUrl: "https://www.geeksforgeeks.org/problems/power-set4302/1", cnUrl: "https://www.naukri.com/code360/problems/subsequences-of-string_985087", companies: ["Amazon", "Microsoft"],
    statement: "Given an integer array nums of unique elements, return all possible subsets (the power set).",
    examples: [{ input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }], constraints: ["1 <= nums.length <= 10"],
    hints: ["Same as Power Set problem. Pick / Not Pick."],
    approach: "Recursive `f(idx, list)`. Base: `idx == n`, push `list`. Include: `list.push(arr[idx]); f(idx+1, list); list.pop();`. Exclude: `f(idx+1, list)`. Time: O(2^N)."
  },
  {
    id: "rec-24", name: "Subsets II", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/subsets-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/subsets-1613027340/1", cnUrl: "https://www.naukri.com/code360/problems/unique-subsets_3625236", companies: ["Amazon", "Microsoft"],
    statement: "Given an integer array nums that may contain duplicates, return all possible subsets. The solution set must not contain duplicate subsets.",
    examples: [{ input: "nums = [1,2,2]", output: "[[],[1],[1,2],[1,2,2],[2],[2,2]]" }], constraints: ["1 <= nums.length <= 10"],
    hints: ["Sort the array.", "Use a loop inside the recursive function. Avoid picking the same element twice at the same recursion depth."],
    approach: "Sort array. Recursive `f(idx, list)`. Add `list` to answer at the very beginning of the function. Loop `i` from `idx` to `n-1`. `if(i != idx && arr[i] == arr[i-1]) continue;`. `list.push(arr[i]); f(i+1, list); list.pop();`. Time: O(2^N)."
  },
  {
    id: "rec-25", name: "Combination Sum III", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/combination-sum-iii/", gfgUrl: "https://www.geeksforgeeks.org/problems/combination-sum-iii/1", cnUrl: "https://www.naukri.com/code360/problems/combination-sum-iii_5038357", companies: ["Google"],
    statement: "Find all valid combinations of k numbers that sum up to n such that only numbers 1 through 9 are used, and each number is used at most once.",
    examples: [{ input: "k = 3, n = 7", output: "[[1,2,4]]" }], constraints: ["2 <= k <= 9", "1 <= n <= 60"],
    hints: ["Recursion state needs to track the current number (1 to 9), current sum, and current count of elements."],
    approach: "Recursive `f(num, sum, list)`. Base: `if (sum == n && list.size == k)` add to ans, return. `if (list.size > k || num > 9 || sum > n)` return. Include `num`: `list.add; f(num+1, sum+num, list); list.remove`. Exclude `num`: `f(num+1, sum, list)`. Time: O(2^9)."
  },
  {
    id: "rec-26", name: "Letter Combinations of a Phone Number", module: "Recursion [PatternWise]", subModule: "Subsequences Pattern", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", gfgUrl: "https://www.geeksforgeeks.org/problems/possible-words-from-phone-digits-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/letter-combinations-of-a-phone-number_983623", companies: ["Amazon", "Microsoft", "Google"],
    statement: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
    examples: [{ input: "digits = '23'", output: "['ad','ae','af','bd','be','bf','cd','ce','cf']" }], constraints: ["0 <= digits.length <= 4"],
    hints: ["Map each digit to its corresponding letters.", "Iterate over the letters mapped to the current digit and recurse for the next digit."],
    approach: "Array mapping `map = ['', '', 'abc', 'def', ...]`. Recursive `f(idx, currStr)`. Base: `idx == digits.length`. Loop `char` in `map[digits[idx]]`: `f(idx+1, currStr + char)`. Time: O(4^N)."
  },

  // Trying out all Combos / Hard
  {
    id: "rec-27", name: "Palindrome partitioning", module: "Recursion [PatternWise]", subModule: "Trying out all Combos / Hard", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/palindrome-partitioning/", gfgUrl: "https://www.geeksforgeeks.org/problems/find-all-possible-palindromic-partitions-of-a-string/1", cnUrl: "https://www.naukri.com/code360/problems/palindrome-partitioning_799931", companies: ["Amazon", "Google"],
    statement: "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
    examples: [{ input: "s = 'aab'", output: "[['a','a','b'],['aa','b']]" }], constraints: ["1 <= s.length <= 16"],
    hints: ["Try cutting the string at every index. If the left part is a palindrome, recursively partition the right part."],
    approach: "Recursive `f(idx, path)`. Base: `if (idx == s.length)` add `path` to ans. Loop `i` from `idx` to `n-1`. `if (isPalindrome(s, idx, i)) { path.push(s[idx..i]); f(i+1, path); path.pop(); }`. Time: O(N * 2^N)."
  },
  {
    id: "rec-28", name: "Word Search", module: "Recursion [PatternWise]", subModule: "Trying out all Combos / Hard", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/word-search/", gfgUrl: "https://www.geeksforgeeks.org/problems/word-search/1", cnUrl: "https://www.naukri.com/code360/problems/word-search_892986", companies: ["Amazon", "Microsoft", "Bloomberg"],
    statement: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontal/vertical).",
    examples: [{ input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCCED'", output: "true" }], constraints: ["1 <= m, n <= 6"],
    hints: ["Run a DFS from every cell that matches the first letter of the word.", "Mark cells as visited by modifying the board temporarily (e.g., set to '#')."],
    approach: "Loop grid. If `board[i][j] == word[0]`, run `dfs(i, j, 0)`. DFS: Base `idx == len` return true. Check bounds and `board[i][j] == word[idx]`. Store char, set to `#`. DFS 4 directions. Restore char. Return true if any direction matches. Time: O(N * M * 4^L)."
  },
  {
    id: "rec-29", name: "N Queen", module: "Recursion [PatternWise]", subModule: "Trying out all Combos / Hard", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/n-queens/", gfgUrl: "https://www.geeksforgeeks.org/problems/n-queen-problem0315/1", cnUrl: "https://www.naukri.com/code360/problems/n-queens_759332", companies: ["Amazon", "Microsoft", "Adobe"],
    statement: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Return all distinct solutions to the n-queens puzzle.",
    examples: [{ input: "n = 4", output: "[[.Q..,...Q,Q...,..Q.], [..Q.,Q...,...Q,.Q..]]" }], constraints: ["1 <= n <= 9"],
    hints: ["Place a queen in each column one by one.", "Use Hash Arrays to check for safe placement in O(1) time (left row, lower diagonal, upper diagonal)."],
    approach: "Recursive `f(col, board)`. Base: `col == n`, add board. Loop `row` 0 to `n-1`. If safe, place 'Q', mark hashes, call `f(col+1)`, remove 'Q', unmark. `leftRow[row]`, `lowerDiag[row+col]`, `upperDiag[n-1 + col-row]`. Time: O(N!)."
  },
  {
    id: "rec-30", name: "Rat in a Maze", module: "Recursion [PatternWise]", subModule: "Trying out all Combos / Hard", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1", cnUrl: "https://www.naukri.com/code360/problems/rat-in-a-maze_1215030", companies: ["Amazon", "Microsoft"],
    statement: "Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination in lexicographical order (D, L, R, U).",
    examples: [{ input: "mat = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]", output: "DDRDRR DRDDRR" }], constraints: ["2 <= N <= 5"],
    hints: ["Use standard Backtracking DFS. Keep a visited array.", "Explore in lexicographical order: Down, Left, Right, Up."],
    approach: "DFS function `f(i, j, path)`. Base `i == n-1 && j == n-1` add path. Mark `visited[i][j] = 1`. Try D(i+1, j), L(i, j-1), R(i, j+1), U(i-1, j). If cell is 1 and not visited. Unmark visited (backtrack). Time: O(4^(N^2))."
  },
  {
    id: "rec-31", name: "Word Break", module: "Recursion [PatternWise]", subModule: "Trying out all Combos / Hard", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/word-break/", gfgUrl: "https://www.geeksforgeeks.org/problems/word-break1352/1", cnUrl: "https://www.naukri.com/code360/problems/word-break_1094901", companies: ["Amazon", "Google", "Facebook"],
    statement: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    examples: [{ input: "s = 'leetcode', wordDict = ['leet','code']", output: "true" }], constraints: ["1 <= s.length <= 300"],
    hints: ["Try cutting the string at every point. If the left prefix exists in the dict, recursively check the rest.", "Recursion alone is O(2^N). Memoize the result at each index."],
    approach: "Recursive `f(idx)`. Base: `idx == s.length` return true. Check memo array. Loop `i` from `idx` to `n-1`. `prefix = s.substring(idx, i+1)`. `if (dict.contains(prefix) && f(i+1))` return true. Time: O(N^3) with memoization."
  },
  {
    id: "rec-32", name: "M Coloring Problem", module: "Recursion [PatternWise]", subModule: "Trying out all Combos / Hard", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/m-coloring-problem_981273", companies: ["Amazon", "Microsoft"],
    statement: "Given an undirected graph and an integer M. The task is to determine if the graph can be colored with at most M colors such that no two adjacent vertices of the graph are colored with the same color.",
    examples: [{ input: "N = 4, M = 3, Edges = (0,1),(1,2),(2,3),(3,0),(0,2)", output: "true" }], constraints: ["1 <= N <= 20"],
    hints: ["Try to color vertex 0 with color 1. Check if it's safe. If yes, move to vertex 1."],
    approach: "Recursive `f(node)`. Base: `node == N` return true. Loop `c` from 1 to M. If `isSafe(node, color)` (check adjacent nodes), `color[node] = c`. If `f(node+1)` return true. `color[node] = 0` (backtrack). Return false. Time: O(M^N)."
  },
  {
    id: "rec-33", name: "Sudoku Solver", module: "Recursion [PatternWise]", subModule: "Trying out all Combos / Hard", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/sudoku-solver/", gfgUrl: "https://www.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/sudoku-solver_8416969", companies: ["Microsoft", "Amazon"],
    statement: "Write a program to solve a Sudoku puzzle by filling the empty cells. Empty cells are indicated by the character '.'.",
    examples: [{ input: "Valid 9x9 Sudoku grid with '.'", output: "Solved 9x9 Sudoku grid" }], constraints: ["board.length == 9"],
    hints: ["Iterate through the board. When you find an empty cell, try placing 1-9.", "Write an `isValid(board, row, col, c)` function that checks the row, col, and 3x3 sub-grid."],
    approach: "Recursive `solve(board)`. Loop `i` 0 to 8, `j` 0 to 8. If `board[i][j] == '.'`, loop `c` '1' to '9'. If `isValid`, `board[i][j] = c`. If `solve(board)` return true. `board[i][j] = '.'` (backtrack). Return false. Time: O(9^(empty_cells))."
  },
  {
    id: "rec-34", name: "Expression Add Operators", module: "Recursion [PatternWise]", subModule: "Trying out all Combos / Hard", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/expression-add-operators/", gfgUrl: "https://www.geeksforgeeks.org/problems/expression-add-operators/1", cnUrl: "https://www.naukri.com/code360/problems/expression-add-operators_1082506", companies: ["Facebook", "Google"],
    statement: "Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.",
    examples: [{ input: "num = '123', target = 6", output: "['1*2*3','1+2+3']" }], constraints: ["1 <= num.length <= 10"],
    hints: ["Keep track of the current evaluation value and the previous multiplied value to handle '*' precedence.", "Beware of numbers with leading zeros (e.g., '05')."],
    approach: "Recursive `f(idx, path, res, prevNum)`. Base: `idx == num.length`, if `res == target` add `path`. Loop `i` from `idx` to `len`. Extract `currStr`. If `currStr` has leading zero, break. `currNum = stoll(currStr)`. If `idx == 0`, `f(i+1, currStr, currNum, currNum)`. Else try `+`, `-`, `*`. Time: O(4^N)."
  },

  // ════════════════════════════════════════════════════════════════════════
  // BIT MANIPULATION [CONCEPTS & PROBLEMS]
  // ════════════════════════════════════════════════════════════════════════

  // Learn Bit Manipulation
  {
    id: "bit-01", name: "Introduction to Bits and Tricks", module: "Bit Manipulation [Concepts & Problems]", subModule: "Learn Bit Manipulation", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/bitwise-operators/1", cnUrl: "", companies: [],
    statement: "Understand the fundamentals of Bitwise AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), and Right Shift (>>).",
    examples: [], constraints: [], hints: ["Left shift by 1 is multiplication by 2. Right shift by 1 is integer division by 2."],
    approach: "Theoretical understanding."
  },
  {
    id: "bit-02", name: "Check if the i-th bit is Set or Not", module: "Bit Manipulation [Concepts & Problems]", subModule: "Learn Bit Manipulation", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/check-whether-k-th-bit-is-set-or-not_5026446", companies: ["Amazon"],
    statement: "Given a number N and a bit number K, check if Kth index bit of N is set or not. A bit is called set if it is 1.",
    examples: [{ input: "N = 4, K = 2", output: "Yes", explanation: "4 is 100. The 2nd bit from right (0-indexed) is 1." }], constraints: ["1 <= N <= 10^9"],
    hints: ["Use the left shift operator to create a mask with 1 at the Kth position.", "Perform Bitwise AND."],
    approach: "Mask = `1 << K`. Return `(N & Mask) != 0`. Alternatively, use right shift: `(N >> K) & 1`. Time: O(1)."
  },
  {
    id: "bit-03", name: "Check if a Number is Odd or Not", module: "Bit Manipulation [Concepts & Problems]", subModule: "Learn Bit Manipulation", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/odd-or-even3618/1", cnUrl: "https://www.naukri.com/code360/problems/odd-even_7993579", companies: [],
    statement: "Check if a number is odd or even using bitwise operations.",
    examples: [{ input: "N = 5", output: "odd" }], constraints: ["1 <= N <= 10^5"],
    hints: ["The rightmost bit (0th bit) of any odd number is always 1.", "The rightmost bit of any even number is always 0."],
    approach: "If `(N & 1) == 1`, it's odd. Else, it's even. Time: O(1)."
  },
  {
    id: "bit-04", name: "Check if a Number is Power of 2 or Not", module: "Bit Manipulation [Concepts & Problems]", subModule: "Learn Bit Manipulation", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/power-of-two/", gfgUrl: "https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/power-of-two_893061", companies: ["Amazon", "Microsoft", "Adobe"],
    statement: "Given an integer n, return true if it is a power of two. Otherwise, return false.",
    examples: [{ input: "n = 16", output: "true" }], constraints: ["-2^31 <= n <= 2^31 - 1"],
    hints: ["A power of 2 has exactly one bit set to 1.", "What happens when you do `N & (N - 1)`?"],
    approach: "If `N <= 0`, return false. If `(N & (N - 1)) == 0`, it's a power of 2. Time: O(1)."
  },
  {
    id: "bit-05", name: "Count the Number of Set Bits", module: "Bit Manipulation [Concepts & Problems]", subModule: "Learn Bit Manipulation", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/number-of-1-bits/", gfgUrl: "https://www.geeksforgeeks.org/problems/set-bits0143/1", cnUrl: "https://www.naukri.com/code360/problems/count-set-bits_696144", companies: ["Amazon", "Microsoft"],
    statement: "Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).",
    examples: [{ input: "n = 11", output: "3", explanation: "11 is 1011, which has 3 set bits." }], constraints: ["0 <= N <= 2^31 - 1"],
    hints: ["You can continuously right-shift and AND with 1.", "Brian Kernighan's algorithm: `N = N & (N-1)` clears the lowest set bit."],
    approach: "Initialize `count = 0`. While `n > 0`, `n = n & (n - 1)`, `count++`. Return `count`. Time: O(Set Bits)."
  },
  {
    id: "bit-06", name: "Set/Unset the rightmost unset bit", module: "Bit Manipulation [Concepts & Problems]", subModule: "Learn Bit Manipulation", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/set-the-rightmost-unset-bit4436/1", cnUrl: "https://www.naukri.com/code360/problems/set-the-rightmost-unset-bit_8160456", companies: ["Amazon"],
    statement: "Given a non-negative number N. The problem is to set the rightmost unset bit in the binary representation of N.",
    examples: [{ input: "N = 6", output: "7", explanation: "6 is 110. Rightmost unset is the 0th bit. Setting it makes 111 (7)." }], constraints: ["1 <= N <= 10^9"],
    hints: ["If all bits are already set, return the number as is.", "What does `N | (N + 1)` do?"],
    approach: "Check if all bits are set: `if ((N & (N+1)) == 0) return N`. Else return `N | (N + 1)`. Time: O(1)."
  },
  {
    id: "bit-07", name: "Swap Two Numbers", module: "Bit Manipulation [Concepts & Problems]", subModule: "Learn Bit Manipulation", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/swap-two-numbers3844/1", cnUrl: "https://www.naukri.com/code360/problems/swap-two-numbers_1380853", companies: [],
    statement: "Swap two numbers a and b without using a third temporary variable.",
    examples: [{ input: "a = 1, b = 2", output: "a = 2, b = 1" }], constraints: ["1 <= a, b <= 10^5"],
    hints: ["Use the XOR operator.", "a ^ a = 0, and a ^ 0 = a."],
    approach: "`a = a ^ b;` `b = a ^ b;` (which is now original a). `a = a ^ b;` (which is now original b). Time: O(1)."
  },
  {
    id: "bit-08", name: "Divide two numbers without multiplication and division", module: "Bit Manipulation [Concepts & Problems]", subModule: "Learn Bit Manipulation", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/divide-two-integers/", gfgUrl: "https://www.geeksforgeeks.org/problems/division-without-using-multiplication-division-and-mod-operator/0", cnUrl: "https://www.naukri.com/code360/problems/divide-two-integers_1112617", companies: ["Amazon", "Microsoft", "Bloomberg"],
    statement: "Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator. The integer division should truncate toward zero.",
    examples: [{ input: "dividend = 10, divisor = 3", output: "3" }], constraints: ["-2^31 <= dividend, divisor <= 2^31 - 1"],
    hints: ["Use left shifts to multiply the divisor by powers of 2.", "Find the largest `divisor * 2^x` that fits inside the dividend, subtract it, and add `2^x` to the quotient."],
    approach: "Handle signs. Take absolute values. Loop `i` from 31 down to 0. If `(divisor << i) <= dividend`, `dividend -= (divisor << i)`, `quotient |= (1LL << i)`. Apply sign. Handle `INT_MIN` / `-1` overflow. Time: O(log N)."
  },

  // Interview Problems
  {
    id: "bit-09", name: "Minimum Bit Flips to Convert Number", module: "Bit Manipulation [Concepts & Problems]", subModule: "Interview Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/", gfgUrl: "https://www.geeksforgeeks.org/problems/bit-difference-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-bit-flips-to-convert-number_7589762", companies: ["Amazon"],
    statement: "A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0. Given two integers start and goal, return the minimum number of bit flips to convert start to goal.",
    examples: [{ input: "start = 10, goal = 7", output: "3", explanation: "10 (1010) to 7 (0111) requires 3 flips." }], constraints: ["0 <= start, goal <= 10^9"],
    hints: ["XOR the two numbers. The set bits in the result represent the bits that differ."],
    approach: "`diff = start ^ goal`. Count the set bits in `diff` using Brian Kernighan's (`diff &= (diff - 1)`). Return the count. Time: O(Set Bits)."
  },
  {
    id: "bit-10", name: "Single Number - I", module: "Bit Manipulation [Concepts & Problems]", subModule: "Interview Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/single-number/", gfgUrl: "https://www.geeksforgeeks.org/problems/single-number1014/1", cnUrl: "https://www.naukri.com/code360/problems/find-the-single-element_6680465", companies: ["Amazon", "Microsoft"],
    statement: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
    examples: [{ input: "nums = [4,1,2,1,2]", output: "4" }], constraints: ["1 <= nums.length <= 3 * 10^4"],
    hints: ["XOR of a number with itself is 0."],
    approach: "Initialize `ans = 0`. Iterate through the array and XOR each element with `ans`. Return `ans`. Time: O(N), Space: O(1)."
  },
  {
    id: "bit-11", name: "Power Set Bit Manipulation", module: "Bit Manipulation [Concepts & Problems]", subModule: "Interview Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/subsets/", gfgUrl: "https://www.geeksforgeeks.org/problems/power-set4302/1", cnUrl: "https://www.naukri.com/code360/problems/subsequences-of-string_985087", companies: ["Amazon"],
    statement: "Given an integer array nums of unique elements, return all possible subsets. Use Bit Manipulation.",
    examples: [{ input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }], constraints: ["1 <= nums.length <= 10"],
    hints: ["There are 2^n subsets. Loop from 0 to (2^n - 1).", "The binary representation of each number tells you which elements to pick."],
    approach: "Loop `i` from 0 to `(1<<n)-1`. Loop `j` from 0 to `n-1`. If `(i & (1<<j))` is non-zero, include `nums[j]` in the current subset. Time: O(N * 2^N)."
  },
  {
    id: "bit-12", name: "XOR of numbers in a given range", module: "Bit Manipulation [Concepts & Problems]", subModule: "Interview Problems", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/find-xor-of-numbers-from-l-to-r/1", cnUrl: "https://www.naukri.com/code360/problems/find-xor-of-numbers-from-l-to-r_8160481", companies: [],
    statement: "You are given two integers L and R. Find the XOR of elements from the range [L, R].",
    examples: [{ input: "L = 4, R = 8", output: "8", explanation: "4 ^ 5 ^ 6 ^ 7 ^ 8 = 8" }], constraints: ["1 <= L <= R <= 10^9"],
    hints: ["Finding XOR from 1 to N has a repeating pattern every 4 numbers: N%4==0 -> N, N%4==1 -> 1, N%4==2 -> N+1, N%4==3 -> 0.", "XOR(L, R) = XOR(1, R) ^ XOR(1, L-1)."],
    approach: "Write a helper function `f(n)` that returns XOR from 1 to n based on `n%4`. Return `f(R) ^ f(L-1)`. Time: O(1)."
  },
  {
    id: "bit-13", name: "Single Number - III", module: "Bit Manipulation [Concepts & Problems]", subModule: "Interview Problems", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/single-number-iii/", gfgUrl: "https://www.geeksforgeeks.org/problems/two-numbers-with-odd-occurrences5846/1", cnUrl: "https://www.naukri.com/code360/problems/two-numbers-with-odd-occurrences_8160466", companies: ["Amazon", "Microsoft"],
    statement: "Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.",
    examples: [{ input: "nums = [1,2,1,3,2,5]", output: "[3,5]" }], constraints: ["2 <= nums.length <= 3 * 10^4"],
    hints: ["XOR all elements. The result is A ^ B.", "Find a set bit in A ^ B. This bit differentiates A and B.", "Divide the array into two groups based on this bit, and XOR each group."],
    approach: "`xr = 0`. XOR all elements to get `a ^ b`. Find rightmost set bit: `rmsb = xr & ~(xr - 1)`. `grp1 = 0, grp2 = 0`. Iterate array. If `(nums[i] & rmsb)`, `grp1 ^= nums[i]`, else `grp2 ^= nums[i]`. Return `[grp1, grp2]`. Time: O(N), Space: O(1)."
  },


  // Advanced Maths
  {
    id: "amath-01", name: "Print Prime Factors of a Number", module: "Bit Manipulation [Concepts & Problems]", subModule: "Advanced Maths", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/prime-factors5052/1", cnUrl: "https://www.naukri.com/code360/problems/prime-factorisation_1760849", companies: ["Amazon"],
    statement: "Given a number N. Find its unique prime factors in increasing order.",
    examples: [{ input: "N = 100", output: "2 5" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Divide N by 2 until it's odd.", "Then divide by odd numbers starting from 3 up to sqrt(N)."],
    approach: "Loop `i=2` to `sqrt(N)`. If `N % i == 0`, add `i` to list, while `N % i == 0` do `N /= i`. Finally, if `N > 1`, add `N` to list. Time: O(sqrt(N))."
  },
  {
    id: "amath-02", name: "Divisors of a Number", module: "Bit Manipulation [Concepts & Problems]", subModule: "Advanced Maths", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1", cnUrl: "https://www.naukri.com/code360/problems/print-all-divisors-of-a-number_1164188", companies: [],
    statement: "Print all divisors of a given number N.",
    examples: [{ input: "N = 36", output: "1 2 3 4 6 9 12 18 36" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Iterate up to sqrt(N)."],
    approach: "Loop `i` from 1 to `sqrt(N)`. If `N % i == 0`, push `i`. If `i != N/i`, push `N/i`. Sort and return. Time: O(sqrt(N))."
  },
  {
    id: "amath-03", name: "Count primes in range L to R", module: "Bit Manipulation [Concepts & Problems]", subModule: "Advanced Maths", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/count-primes/", gfgUrl: "https://www.geeksforgeeks.org/problems/count-primes-in-range1604/1", cnUrl: "https://www.naukri.com/code360/problems/count-primes_8230696", companies: ["Amazon", "Microsoft"],
    statement: "Given two integers L and R, find the number of primes in the range [L, R].",
    examples: [{ input: "L = 1, R = 10", output: "4", explanation: "2, 3, 5, 7" }], constraints: ["1 <= L <= R <= 10^6"],
    hints: ["Use Sieve of Eratosthenes to precompute primes up to R.", "Use a prefix sum array to quickly answer range queries in O(1) time."],
    approach: "Sieve array `isPrime` up to R. Set `isPrime[0] = isPrime[1] = 0`. For `i=2` to `sqrt(R)`, if `isPrime[i]`, mark all multiples as 0. Create `prefix[i] = prefix[i-1] + isPrime[i]`. Answer query: `prefix[R] - prefix[L-1]`. Time: O(R log log R) precomputation, O(1) per query."
  },
  {
    id: "amath-04", name: "Prime factorisation of a Number", module: "Bit Manipulation [Concepts & Problems]", subModule: "Advanced Maths", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/prime-factorization-using-sieve/1", cnUrl: "https://www.naukri.com/code360/problems/prime-factorisation_1760849", companies: [],
    statement: "Given a number N, find its prime factorization using Sieve of Eratosthenes. Useful for handling multiple Q queries efficiently.",
    examples: [{ input: "N = 12246", output: "2 3 13 157" }], constraints: ["1 <= N <= 2*10^5"],
    hints: ["Instead of marking true/false, store the Smallest Prime Factor (SPF) for each number in the sieve."],
    approach: "Precompute `spf` array up to MAX. `spf[i] = i`. For `i=2` to `sqrt(MAX)`, if `spf[i] == i`, loop `j` from `i*i` to MAX: `if (spf[j] == j) spf[j] = i`. To factorize `N`: `while (N > 1) { push(spf[N]); N /= spf[N]; }`. Time: O(N log log N) precomputation, O(log N) per query."
  },
  {
    id: "amath-05", name: "Pow(x,n)", module: "Bit Manipulation [Concepts & Problems]", subModule: "Advanced Maths", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/powx-n/", gfgUrl: "https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/find-x-raised-to-power-n-_626560", companies: ["Google", "Amazon"],
    statement: "Calculate x raised to the power n (x^n).",
    examples: [{ input: "x = 2.0, n = 10", output: "1024.0" }], constraints: ["-2^31 <= n <= 2^31-1"],
    hints: ["Use Binary Exponentiation iteratively."],
    approach: "`ans = 1`. `nn = abs(n)`. While `nn > 0`: If `nn % 2 == 1`, `ans *= x`, `nn--`. Else `x *= x`, `nn /= 2`. If `n < 0`, `ans = 1.0 / ans`. Time: O(log N), Space: O(1)."
  },

  // ════════════════════════════════════════════════════════════════════════
  // STACK AND QUEUES [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]
  // ════════════════════════════════════════════════════════════════════════

  // Learning
  {
    id: "stk-01", name: "Implement Stack using Arrays", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Learning", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1", cnUrl: "https://www.naukri.com/code360/problems/stack-implementation-using-array_3210209", companies: [],
    statement: "Implement a Stack using an Array. It should support push(), pop(), top(), and isEmpty() operations.",
    examples: [], constraints: ["1 <= Queries <= 10^4"],
    hints: ["Maintain a `top` variable initialized to -1."],
    approach: "`push`: Increment `top` and assign value to `arr[top]`. `pop`: Return `arr[top]` and decrement `top`. `top`: Return `arr[top]`. Time: O(1) per operation."
  },
  {
    id: "stk-02", name: "Implement Queue using Arrays", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Learning", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1", cnUrl: "https://www.naukri.com/code360/problems/implement-queue-using-arrays_8390825", companies: [],
    statement: "Implement a Queue using an Array. It should support push(), pop(), front(), and isEmpty() operations.",
    examples: [], constraints: ["1 <= Queries <= 10^4"],
    hints: ["Maintain a `front` and `rear` pointer.", "For a circular queue, use modulo arithmetic `(rear + 1) % size`."],
    approach: "`push`: Add element at `rear` and increment `rear`. `pop`: Extract element at `front` and increment `front`. If `front == rear`, reset to 0. Time: O(1) per operation."
  },
  {
    id: "stk-03", name: "Implement Stack using Queue", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Learning", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/implement-stack-using-queues/", gfgUrl: "https://www.geeksforgeeks.org/problems/stack-using-two-queues/1", cnUrl: "https://www.naukri.com/code360/problems/implement-stack-using-queue_795152", companies: ["Amazon", "Bloomberg"],
    statement: "Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack.",
    examples: [], constraints: ["1 <= calls <= 100"],
    hints: ["You can actually do it using a single queue.", "When you push an element, push it normally, then pop and push all preceding elements back to the queue."],
    approach: "Using 1 Queue: `push(x)`: `q.push(x)`. Loop `s = q.size() - 1` times: `q.push(q.front()); q.pop();`. `pop()`: `q.pop()`. Time: push is O(N), pop is O(1)."
  },
  {
    id: "stk-04", name: "Implement Queue using Stack", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Learning", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/implement-queue-using-stacks/", gfgUrl: "https://www.geeksforgeeks.org/problems/queue-using-two-stacks/1", cnUrl: "https://www.naukri.com/code360/problems/queue-using-two-stacks_1170062", companies: ["Amazon", "Microsoft"],
    statement: "Implement a first-in-first-out (FIFO) queue using only two stacks.",
    examples: [], constraints: ["1 <= calls <= 100"],
    hints: ["Use two stacks: `input` and `output`.", "Push all elements to `input`. When you need to pop, if `output` is empty, move everything from `input` to `output`."],
    approach: "`push`: `input.push(x)`. `pop/peek`: If `output` is empty, while `input` is not empty, `output.push(input.pop())`. Return `output.pop()/top()`. Time: push O(1), pop Amortized O(1)."
  },
  {
    id: "stk-05", name: "Implement stack using Linkedlist", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Learning", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/implement-stack-using-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/implement-stack-with-linked-list_1279905", companies: ["Amazon"],
    statement: "Let's implement a stack using a singly linked list.",
    examples: [], constraints: ["1 <= calls <= 100"],
    hints: ["Insert at the head for push.", "Delete at the head for pop."],
    approach: "`push`: `newNode.next = head; head = newNode`. `pop`: `temp = head; head = head.next; delete temp`. Time: O(1)."
  },
  {
    id: "stk-06", name: "Implement queue using Linkedlist", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Learning", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/implement-queue-using-linked-list_8161235", companies: ["Amazon"],
    statement: "Implement a Queue using a singly linked list.",
    examples: [], constraints: ["1 <= calls <= 100"],
    hints: ["Maintain two pointers, `front` and `rear` (or `head` and `tail`).", "Insert at `tail`, remove from `head`."],
    approach: "`push`: `if (head == null) { head = tail = newNode; } else { tail.next = newNode; tail = newNode; }`. `pop`: `head = head.next`. Time: O(1)."
  },
  {
    id: "stk-07", name: "Balanced Paranthesis", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Learning", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/valid-parentheses/", gfgUrl: "https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1", cnUrl: "https://www.naukri.com/code360/problems/valid-parenthesis_795104", companies: ["Amazon", "Microsoft", "Facebook"],
    statement: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [{ input: "s = '()[]{}'", output: "true" }], constraints: ["1 <= s.length <= 10^4"],
    hints: ["Use a Stack.", "Push opening brackets. When you see a closing bracket, check if the stack's top matches it."],
    approach: "Iterate string. If `c` is open bracket, `stack.push(c)`. If close bracket, if stack is empty or `stack.top()` is not matching open bracket, return false. Pop stack. At end, return `stack.empty()`. Time: O(N), Space: O(N)."
  },
  {
    id: "stk-08", name: "Implement Min Stack", module: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", subModule: "Learning", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/min-stack/", gfgUrl: "https://www.geeksforgeeks.org/problems/get-minimum-element-from-stack/1", cnUrl: "https://www.naukri.com/code360/problems/min-stack_3843991", companies: ["Amazon", "Microsoft", "Google"],
    statement: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    examples: [{ input: "push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()", output: "[-3, 0, -2]" }], constraints: ["-2^31 <= val <= 2^31 - 1"],
    hints: ["Approach 1: Use a stack of pairs `(value, current_minimum)`.", "Approach 2: O(1) space. If the new value is less than min, push `2*val - min` and update min."],
    approach: "O(1) Space: Track `minEle`. `push`: If stack empty, push `x`, `minEle = x`. If `x < minEle`, push `2LL*x - minEle`, `minEle = x`. Else push `x`. `pop`: If `top < minEle`, `minEle = 2LL*minEle - top`. Pop stack. `getMin`: return `minEle`. Time: O(1), Space: O(N) internal."
  }

];