export const PROBLEMS_PART1 = [
  // ═══ LEARN THE BASICS ═══
  // Things to Know in C++/Java/Python or any language
  {
    id: "bas-01", name: "Input Output", module: "Learn the basics", subModule: "Things to Know in C++/Java/Python or any language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/find-character-case_58513", companies: [],
    statement: "Write a program that takes a character as input and prints 1, 0, or -1 according to the following rules.\n1, if the character is an uppercase alphabet (A - Z).\n0, if the character is a lowercase alphabet (a - z).\n-1, if the character is not an alphabet.",
    examples: [{ input: "v", output: "0" }, { input: "V", output: "1" }, { input: "#", output: "-1" }],
    constraints: ["Input can be any single character."], hints: ["Use standard language input/output functions.", "Use ASCII values or built-in char functions."],
    approach: "Read the character. Check if it falls between 'A' and 'Z' (return 1), 'a' and 'z' (return 0), or neither (return -1). Time: O(1), Space: O(1)."
  },
  {
    id: "bas-02", name: "Data Types", module: "Learn the basics", subModule: "Things to Know in C++/Java/Python or any language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/data-type-1666706751/1", cnUrl: "https://www.naukri.com/code360/problems/data-type_8357232", companies: [],
    statement: "Data types specify the different sizes and values that can be stored in the variable. Given a string representing a data type (Integer, Long, Float, Double, Character), return the size of the data type in bytes.",
    examples: [{ input: "Integer", output: "4" }, { input: "Character", output: "1" }],
    constraints: ["Input string is one of the valid data types."], hints: ["Use simple conditional statements (if-else or switch) to map the string to its byte size."],
    approach: "Map 'Integer' and 'Float' to 4, 'Long' and 'Double' to 8, and 'Character' to 1. Return the mapped value. Time: O(1)."
  },
  {
    id: "bas-03", name: "If ElseIf", module: "Learn the basics", subModule: "Things to Know in C++/Java/Python or any language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/java-if-else-decision-making0924/0", cnUrl: "https://www.naukri.com/code360/problems/if-else-decision-making_8357235", companies: [],
    statement: "Programming languages have some conditional statements that allow us to check a condition and execute certain parts of code depending on whether the condition is true or false. Given two integers a and b, return 'greater', 'smaller', or 'equal' depending on whether a > b, a < b, or a == b.",
    examples: [{ input: "a = 5, b = 3", output: "greater" }],
    constraints: ["-10^5 <= a, b <= 10^5"], hints: ["Use standard if, else if, else branching logic."],
    approach: "Compare a and b using standard relational operators and return the corresponding string. Time: O(1)."
  },
  {
    id: "bas-04", name: "Switch Case", module: "Learn the basics", subModule: "Things to Know in C++/Java/Python or any language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/java-switch-case-statement3529/1", cnUrl: "https://www.naukri.com/code360/problems/switch-case-statement_8357244", companies: [],
    statement: "Given an integer choice denoting the choice of the user and a list containing the single value R or two values L and B depending on the choice. If choice is 1, calculate the area of a circle with radius R. If choice is 2, calculate the area of a rectangle with length L and breadth B.",
    examples: [{ input: "choice = 1, arr = [5]", output: "78.5398" }],
    constraints: ["1 <= choice <= 2", "1 <= R, L, B <= 100"], hints: ["Use a switch case to branch between choice 1 and 2."],
    approach: "In case 1, return Math.PI * arr[0] * arr[0]. In case 2, return arr[0] * arr[1]. Time: O(1)."
  },
  {
    id: "bas-05", name: "What are arrays, strings?", module: "Learn the basics", subModule: "Things to Know in C++/Java/Python or any language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/sum-of-even-odd_624650", companies: [],
    statement: "Write a program to input an integer N and print the sum of all its even digits and sum of all its odd digits separately.",
    examples: [{ input: "132456", output: "12 9", explanation: "Even digits: 2+4+6=12. Odd digits: 1+3+5=9." }],
    constraints: ["0 <= N <= 10^8"], hints: ["Extract digits using modulo 10 and integer division."],
    approach: "Extract the last digit using N % 10. If digit % 2 == 0, add to even sum, else add to odd sum. N = N / 10. Repeat until N is 0. Time: O(log10(N))."
  },
  {
    id: "bas-06", name: "For loops", module: "Learn the basics", subModule: "Things to Know in C++/Java/Python or any language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/nth-fibonacci-number_74156", companies: [],
    statement: "The n-th term of Fibonacci series F(n) is calculated using the following formula - F(n) = F(n-1) + F(n-2). Given n, find the n-th Fibonacci number. Implement it using a for loop.",
    examples: [{ input: "6", output: "8" }],
    constraints: ["1 <= n <= 10000"], hints: ["Use a loop to avoid the exponential time complexity of basic recursion."],
    approach: "Maintain two variables for the previous two numbers (a=1, b=1). Iterate from 3 to n, updating variables sequentially. Time: O(N), Space: O(1)."
  },
  {
    id: "bas-07", name: "While loops", module: "Learn the basics", subModule: "Things to Know in C++/Java/Python or any language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/sum-of-even-odd_624650", companies: [],
    statement: "While loop practice: Create a logic that repeatedly executes a block of code while a specified condition is true. (Often combined with digit extraction problems).",
    examples: [{ input: "N/A", output: "N/A" }],
    constraints: [], hints: ["Make sure the loop condition eventually becomes false to avoid infinite loops."],
    approach: "Standard application of `while(condition) { ... update condition }` loop constructs."
  },
  {
    id: "bas-08", name: "Functions (Pass by Reference and Value)", module: "Learn the basics", subModule: "Things to Know in C++/Java/Python or any language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/pass-by-reference-and-value/1", cnUrl: "https://www.naukri.com/code360/problems/pass-by-reference-and-value_8357913", companies: [],
    statement: "Given two variables a and b, your task is to write a function that takes these two variables and returns an array containing their values modified such that 'a' is increased by 1 (pass by value concept) and 'b' is increased by 2 (pass by reference concept).",
    examples: [{ input: "a = 1, b = 2", output: "[2, 4]" }],
    constraints: ["1 <= a, b <= 10^5"], hints: ["Just return the modified values in an array/list as instructed."],
    approach: "Return an array `[a + 1, b + 2]`. This illustrates the conceptual difference requested by the problem. Time: O(1)."
  },
  {
    id: "bas-09", name: "Theory with examples", module: "Learn the basics", subModule: "Things to Know in C++/Java/Python or any language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
    statement: "Read and understand the theoretical concepts behind language constraints, memory limits, and basic debugging.",
    examples: [], constraints: [], hints: [], approach: "Self-study reading task."
  },


  // Build-up Logical Thinking
  {
    id: "bas-10", name: "Logical Thinking: Easy and Medium", module: "Learn the basics", subModule: "Build-up Logical Thinking", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
    statement: "Solve foundational logical puzzles and trace variable states mentally.",
    examples: [], constraints: [], hints: [], approach: "Practice variable tracing and dry-running code on paper."
  },
  {
    id: "bas-11", name: "Logical Thinking: Hard", module: "Learn the basics", subModule: "Build-up Logical Thinking", difficulty: "Medium",
    lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
    statement: "Solve complex nested logic and state management puzzles.",
    examples: [], constraints: [], hints: [], approach: "Master nested loops and edge case handling."
  },


  // ════════════════════════════════════════════════════════════════════════
  // 3. PATTERNS
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "pat-01", name: "Pattern 1: Rectangular Star", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/n-forest_6570177", companies: [],
    statement: "Sam is making a forest visualizer. Print an N x N grid of stars.",
    examples: [{ input: "N = 3", output: "* * *\n* * *\n* * *" }], constraints: ["1 <= N <= 20"], hints: ["Use a nested loop. Outer loop runs N times, inner loop runs N times."],
    approach: "For i from 0 to N-1: for j from 0 to N-1: print '*'. Print newline after inner loop. Time: O(N^2)."
  },
  {
    id: "pat-02", name: "Pattern 2: Right-Angled Triangle", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/n-2-forest_6570178", companies: [],
    statement: "Print a right-angled triangle pattern of stars with N rows.",
    examples: [{ input: "N = 3", output: "*\n* *\n* * *" }], constraints: ["1 <= N <= 20"], hints: ["The number of stars in row 'i' is exactly equal to 'i' (if 1-indexed)."],
    approach: "For i from 0 to N-1: for j from 0 to i: print '*'. Time: O(N^2)."
  },
  {
    id: "pat-03", name: "Pattern 3: Right-Angled Number Pyramid", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/n-triangles_6573689", companies: [],
    statement: "Print a right-angled triangle pattern of numbers from 1 to N.",
    examples: [{ input: "N = 3", output: "1\n1 2\n1 2 3" }], constraints: ["1 <= N <= 20"], hints: ["Print the column index (j) instead of a star."],
    approach: "For i from 1 to N: for j from 1 to i: print j. Time: O(N^2)."
  },
  {
    id: "pat-04", name: "Pattern 4: Right-Angled Number Pyramid II", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/triangle_6573690", companies: [],
    statement: "Print a right-angled triangle pattern of numbers where every row 'i' contains the number 'i'.",
    examples: [{ input: "N = 3", output: "1\n2 2\n3 3 3" }], constraints: ["1 <= N <= 20"], hints: ["Print the row index (i) instead of the column index."],
    approach: "For i from 1 to N: for j from 1 to i: print i. Time: O(N^2)."
  },
  {
    id: "pat-05", name: "Pattern 5: Inverted Right Pyramid", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/seeding_6581892", companies: [],
    statement: "Print an inverted right-angled triangle pattern of stars.",
    examples: [{ input: "N = 3", output: "* * *\n* *\n*" }], constraints: ["1 <= N <= 20"], hints: ["The first row has N stars, the last row has 1."],
    approach: "For i from 0 to N-1: for j from 0 to N-i-1: print '*'. Time: O(N^2)."
  },
  {
    id: "pat-06", name: "Pattern 6: Inverted Numbered Right Pyramid", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/reverse-number-triangle_6581889", companies: [],
    statement: "Print an inverted right-angled triangle pattern of numbers from 1 to N.",
    examples: [{ input: "N = 3", output: "1 2 3\n1 2\n1" }], constraints: ["1 <= N <= 20"], hints: ["Combine the inverted loop logic with printing column numbers."],
    approach: "For i from 1 to N: for j from 1 to N-i+1: print j. Time: O(N^2)."
  },
  {
    id: "pat-07", name: "Pattern 7: Star Pyramid", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/star-triangle_6573671", companies: [],
    statement: "Print a centered pyramid of stars with N rows.",
    examples: [{ input: "N = 3", output: "  *  \n *** \n*****" }], constraints: ["1 <= N <= 20"], hints: ["Each row has spaces, then stars, then spaces. For row i, stars = 2*i + 1."],
    approach: "For i from 0 to N-1: print (N-i-1) spaces, then (2*i+1) stars, then (N-i-1) spaces. Time: O(N^2)."
  },
  {
    id: "pat-08", name: "Pattern 8: Inverted Star Pyramid", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/reverse-star-triangle_6573685", companies: [],
    statement: "Print an inverted centered pyramid of stars with N rows.",
    examples: [{ input: "N = 3", output: "*****\n *** \n  *  " }], constraints: ["1 <= N <= 20"], hints: ["Row 0 has 2*N - 1 stars, Row 1 has 2*N - 3 stars, etc."],
    approach: "For i from 0 to N-1: print `i` spaces, then `2*(N-i)-1` stars, then `i` spaces. Time: O(N^2)."
  },
  {
    id: "pat-09", name: "Pattern 9: Diamond Star Pattern", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/star-diamond_6573686", companies: [],
    statement: "Print a full diamond shape of stars with 2*N rows.",
    examples: [{ input: "N = 3", output: "  *  \n *** \n*****\n*****\n *** \n  *  " }], constraints: ["1 <= N <= 20"], hints: ["Combine the logic of Pattern 7 and Pattern 8."],
    approach: "First loop: Print erect pyramid of size N. Second loop: Print inverted pyramid of size N. Time: O(N^2)."
  },
  {
    id: "pat-10", name: "Pattern 10: Half Diamond Star Pattern", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/rotated-triangle_6573688", companies: [],
    statement: "Print a sideways pointing half-diamond of stars.",
    examples: [{ input: "N = 3", output: "*\n**\n***\n**\n*" }], constraints: ["1 <= N <= 20"], hints: ["You can do this with a single loop from 1 to 2N-1."],
    approach: "For i from 1 to 2N-1: The number of stars `stars = i`. If `i > N`, `stars = 2*N - i`. Print `stars` stars. Time: O(N^2)."
  },
  {
    id: "pat-11", name: "Pattern 11: Binary Number Triangle", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/binary-number-triangle_6581890", companies: [],
    statement: "Print a right-angled triangle of alternating 1s and 0s. The first element of row i is 1 if i is odd, and 0 if i is even.",
    examples: [{ input: "N = 3", output: "1\n0 1\n1 0 1" }], constraints: ["1 <= N <= 20"], hints: ["Look at the sum of row index and column index. If (i+j) is even, print 1."],
    approach: "For i from 0 to N-1: for j from 0 to i: if `(i+j) % 2 == 0` print 1 else print 0. Time: O(N^2)."
  },
  {
    id: "pat-12", name: "Pattern 12: Number Crown", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/number-crown_6581894", companies: [],
    statement: "Print a 'crown' pattern using numbers from 1 to N with spaces in the middle.",
    examples: [{ input: "N = 3", output: "1    1\n12  21\n123321" }], constraints: ["1 <= N <= 20"], hints: ["Track the number of middle spaces. Initially it is 2*(N-1)."],
    approach: "For i from 1 to N: Print numbers 1 to i. Print `space` times spaces. Print numbers i down to 1. `space -= 2`. Time: O(N^2)."
  },
  {
    id: "pat-13", name: "Pattern 13: Increasing Number Triangle", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/increasing-number-triangle_6581893", companies: [],
    statement: "Print a right-angled triangle filled with a continuously increasing counter.",
    examples: [{ input: "N = 3", output: "1\n2 3\n4 5 6" }], constraints: ["1 <= N <= 20"], hints: ["Maintain a global counter variable that increments inside the inner loop."],
    approach: "Initialize `num = 1`. For i from 1 to N: for j from 1 to i: print `num++`. Time: O(N^2)."
  },
  {
    id: "pat-14", name: "Pattern 14: Increasing Letter Triangle", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/increasing-letter-triangle_6581897", companies: [],
    statement: "Print a right-angled triangle using uppercase letters of the alphabet, starting from 'A' on each row.",
    examples: [{ input: "N = 3", output: "A\nA B\nA B C" }], constraints: ["1 <= N <= 26"], hints: ["Use character math. 'A' + 0 is 'A', 'A' + 1 is 'B'."],
    approach: "For i from 0 to N-1: for j from 0 to i: print character cast of `('A' + j)`. Time: O(N^2)."
  },
  {
    id: "pat-15", name: "Pattern 15: Reverse Letter Triangle", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/reverse-letter-triangle_6581906", companies: [],
    statement: "Print an inverted right-angled triangle of alphabet characters.",
    examples: [{ input: "N = 3", output: "A B C\nA B\nA" }], constraints: ["1 <= N <= 26"], hints: ["Same as Pattern 14, but inner loop bounds decrease."],
    approach: "For i from 0 to N-1: for j from 0 to N-i-1: print character `('A' + j)`. Time: O(N^2)."
  },
  {
    id: "pat-16", name: "Pattern 16: Alpha-Ramp Pattern", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/alpha-ramp_6581888", companies: [],
    statement: "Print a right-angled triangle where the entire row is filled with the same letter, advancing the letter per row.",
    examples: [{ input: "N = 3", output: "A\nB B\nC C C" }], constraints: ["1 <= N <= 26"], hints: ["Print `('A' + i)` in the inner loop."],
    approach: "For i from 0 to N-1: for j from 0 to i: print character `('A' + i)`. Time: O(N^2)."
  },
  {
    id: "pat-17", name: "Pattern 17: Alpha-Hill Pattern", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/alpha-hill_6581921", companies: [],
    statement: "Print a centered pyramid of alphabet characters. Letters increase until the center of the pyramid, then decrease.",
    examples: [{ input: "N = 3", output: "  A  \n ABA \nABCBA" }], constraints: ["1 <= N <= 26"], hints: ["Track the spaces like a regular pyramid. Use an ascending/descending counter for the letters."],
    approach: "For i from 0 to N-1: print `N-i-1` spaces. Then, for `j=0` to `2*i`: letter is `j <= i ? 'A'+j : 'A'+(2*i-j)`. Print letter. Print spaces. Time: O(N^2)."
  },
  {
    id: "pat-18", name: "Pattern 18: Alpha-Triangle Pattern", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/alpha-triangle_6581429", companies: [],
    statement: "Print a right-angled triangle using letters starting from the highest letter corresponding to N, moving downwards.",
    examples: [{ input: "N = 3", output: "C\nC B\nC B A" }], constraints: ["1 <= N <= 26"], hints: ["The starting letter for each row is `(char)('A' + N - 1)`."],
    approach: "For i from 0 to N-1: for j from 0 to i: print `(char)('A' + N - 1 - j)`. Time: O(N^2)."
  },
  {
    id: "pat-19", name: "Pattern 19: Symmetric Void Pattern", module: "Learn the basics", subModule: "Patterns", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/symmetric-void_6581919", companies: [],
    statement: "Print a square composed of an upper inverted double pyramid and a lower erect double pyramid, leaving a diamond void in the middle.",
    examples: [{ input: "N = 3", output: "******\n**  **\n*    *\n*    *\n**  **\n******" }], constraints: ["1 <= N <= 20"], hints: ["Treat it as two halves. Calculate the number of stars and spaces dynamically."],
    approach: "Top half (N rows): `stars = N-i`, `spaces = 2*i`. Bottom half (N rows): `stars = i+1`, `spaces = 2*(N-i-1)`. Time: O(N^2)."
  },
  {
    id: "pat-20", name: "Pattern 20: Symmetric Butterfly Pattern", module: "Learn the basics", subModule: "Patterns", difficulty: "Medium",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/symmetry_6581914", companies: [],
    statement: "Print a butterfly pattern using stars.",
    examples: [{ input: "N = 3", output: "*    *\n**  **\n******\n**  **\n*    *" }], constraints: ["1 <= N <= 20"], hints: ["Number of rows is 2*N - 1. Spaces in middle = 2*(N-i-1)."],
    approach: "For i from 1 to 2N-1: `stars = i <= N ? i : 2N - i`. `spaces = 2*(N - stars)`. Print `stars`, `spaces`, `stars`. Time: O(N^2)."
  },
  {
    id: "pat-21", name: "Pattern 21: Hollow Rectangle Pattern", module: "Learn the basics", subModule: "Patterns", difficulty: "Medium",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/ninja-and-the-star-pattern-i_6581920", companies: [],
    statement: "Print a hollow N x N square pattern using stars.",
    examples: [{ input: "N = 4", output: "****\n*  *\n*  *\n****" }], constraints: ["1 <= N <= 20"], hints: ["Print a star only if i == 0, i == N-1, j == 0, or j == N-1."],
    approach: "Loop i from 0 to N-1, Loop j from 0 to N-1. Check boundaries to print `*`, otherwise print ` `. Time: O(N^2)."
  },
  {
    id: "pat-22", name: "Pattern 22: The Number Pattern", module: "Learn the basics", subModule: "Patterns", difficulty: "Medium",
    lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/ninja-and-the-number-pattern-i_6581959", companies: [],
    statement: "Print an overlapping concentric number square pattern of size (2N-1) x (2N-1).",
    examples: [{ input: "N = 3", output: "33333\n32223\n32123\n32223\n33333" }], constraints: ["1 <= N <= 20"], hints: ["The value at any cell (i, j) is `N - min(distance to top, distance to bottom, distance to left, distance to right)`."],
    approach: "For i from 0 to 2N-2, for j from 0 to 2N-2: `top = i, bottom = (2N-2)-i, left = j, right = (2N-2)-j`. Print `N - min(top, bottom, left, right)`. Time: O(N^2)."
  },


  // Learn STL/Java-Collections
  {
    id: "stl-01", name: "C++ STL Theory and Practice", module: "Learn the basics", subModule: "Learn STL/Java-Collections or similar thing in your language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
    statement: "Understand Vectors, Maps, Sets, Queues, Stacks, Priority Queues, and standard algorithms like sorting and binary search.",
    examples: [], constraints: [], hints: ["Familiarize yourself with memory complexity and internal implementations (e.g., Map vs Unordered Map)."],
    approach: "Use comprehensive documentation like cppreference or Striver's STL video."
  },
  {
    id: "stl-02", name: "Java Collections Framework", module: "Learn the basics", subModule: "Learn STL/Java-Collections or similar thing in your language", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
    statement: "Understand ArrayList, HashMap, HashSet, LinkedList, Stack, PriorityQueue, and custom comparators.",
    examples: [], constraints: [], hints: ["Understand wrapper classes vs primitives and hashing mechanics in Java."],
    approach: "Use comprehensive documentation like Oracle Java Docs or Striver's Java video."
  },


  // ═══ KNOW BASIC MATHS ═══
  {
    id: "mth-01", name: "Count all Digits of a Number", module: "Learn the basics", subModule: "Know Basic Maths", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/count-digits5716/1", cnUrl: "https://www.naukri.com/code360/problems/count-digits_8416387", companies: ["Amazon"],
    statement: "Given a number N. Count the number of digits in N which evenly divide N.",
    examples: [{ input: "N = 12", output: "2", explanation: "1, 2 both divide 12 evenly" }],
    constraints: ["1 <= N <= 10^5"], hints: ["Use modulo 10 to extract digits.", "Make sure to handle division by zero if a digit is 0."],
    approach: "Extract digits one by one using `N % 10`. Check if the original number modulo the digit equals 0. Time: O(log10(N))."
  },
  {
    id: "mth-02", name: "Reverse a number", module: "Learn the basics", subModule: "Know Basic Maths", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/reverse-integer/", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/reverse-of-a-number_624652", companies: ["Apple", "Bloomberg"],
    statement: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
    examples: [{ input: "x = 123", output: "321" }, { input: "x = -123", output: "-321" }],
    constraints: ["-2^31 <= x <= 2^31 - 1"], hints: ["Can you do it without converting to a string?", "Watch out for integer overflow when multiplying by 10."],
    approach: "Repeatedly extract the last digit using `x % 10` and add it to `rev = rev * 10 + digit`. Check for overflow before multiplying by 10. Time: O(log10(x))."
  },
  {
    id: "mth-03", name: "Palindrome Number", module: "Learn the basics", subModule: "Know Basic Maths", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/palindrome-number/", gfgUrl: "https://www.geeksforgeeks.org/problems/palindrome0746/1", cnUrl: "https://www.naukri.com/code360/problems/palindrome-number_624662", companies: ["Amazon", "Microsoft", "Facebook"],
    statement: "Given an integer x, return true if x is a palindrome, and false otherwise.",
    examples: [{ input: "x = 121", output: "true" }, { input: "x = -121", output: "false", explanation: "Reads 121- from right to left." }],
    constraints: ["-2^31 <= x <= 2^31 - 1"], hints: ["Negative numbers are never palindromes.", "You only need to reverse half of the number to check."],
    approach: "If x < 0 or (x % 10 == 0 && x != 0), return false. Reverse the second half of the number and compare it to the first half. Time: O(log10(x))."
  },
  {
    id: "mth-04", name: "GCD of Two Numbers", module: "Learn the basics", subModule: "Know Basic Maths", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/find-greatest-common-divisor-of-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1", cnUrl: "https://www.naukri.com/code360/problems/gcd_22277", companies: ["Amazon"],
    statement: "Calculate the Greatest Common Divisor (GCD) of two numbers using the Euclidean Algorithm.",
    examples: [{ input: "a = 4, b = 8", output: "4" }],
    constraints: ["1 <= a, b <= 10^5"], hints: ["Euclidean algorithm states GCD(a, b) = GCD(b, a % b)."],
    approach: "Use Euclidean Algorithm `gcd(a, b) { return b == 0 ? a : gcd(b, a % b); }`. Time: O(log(min(a,b)))."
  },
  {
    id: "mth-05", name: "Check if the Number is Armstrong", module: "Learn the basics", subModule: "Know Basic Maths", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/armstrong-number/", gfgUrl: "https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1", cnUrl: "https://www.naukri.com/code360/problems/check-armstrong_589", companies: ["TCS", "Infosys"],
    statement: "Given an integer N, return true if it is an Armstrong number otherwise return false. An Armstrong number of 3 digits is an integer such that the sum of the cubes of its digits is equal to the number itself.",
    examples: [{ input: "N = 153", output: "true", explanation: "1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153." }],
    constraints: ["100 <= N < 1000"], hints: ["Extract digits, cube them, and sum them up."],
    approach: "Extract digits using `% 10`. Cube each digit and add to a running sum. Compare sum to original number. Time: O(log10(N))."
  },
  {
    id: "mth-06", name: "Print all Divisors", module: "Learn the basics", subModule: "Know Basic Maths", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1", cnUrl: "https://www.naukri.com/code360/problems/print-all-divisors-of-a-number_1164188", companies: [],
    statement: "Given a positive integer N. Print all its divisors in ascending order.",
    examples: [{ input: "N = 36", output: "1 2 3 4 6 9 12 18 36" }],
    constraints: ["1 <= N <= 10^5"], hints: ["You only need to loop up to the square root of N."],
    approach: "Loop i from 1 to sqrt(N). If N % i == 0, add `i`. If `i != N/i`, also add `N/i`. Sort the resulting array before printing. Time: O(sqrt(N))."
  },
  {
    id: "mth-07", name: "Check for Prime Number", module: "Learn the basics", subModule: "Know Basic Maths", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/count-primes/", gfgUrl: "https://www.geeksforgeeks.org/problems/prime-number2314/1", cnUrl: "https://www.naukri.com/code360/problems/check-prime_624934", companies: ["Amazon", "Microsoft"],
    statement: "For a given number N check if it is prime or not. A prime number is a number which is only divisible by 1 and itself.",
    examples: [{ input: "N = 5", output: "true" }],
    constraints: ["1 <= N <= 10^9"], hints: ["You only need to check for divisors up to the square root of N."],
    approach: "If N <= 1, return false. Iterate from 2 to sqrt(N). If N is divisible by any number in this range, return false. Otherwise, return true. Time: O(sqrt(N))."
  },

  // Learn Basic Recursion
  {
    id: "rec-01", name: "Understand recursion by print something N times", module: "Learn the basics", subModule: "Learn Basic Recursion", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/print-n-times_8380707", companies: [],
    statement: "Print a specific string 'Coding Ninjas' N times without using any loops.",
    examples: [{ input: "N = 3", output: "Coding Ninjas Coding Ninjas Coding Ninjas" }],
    constraints: ["1 <= N <= 10^4"], hints: ["Use a helper function that takes the current count as a parameter."],
    approach: "Base case: if `N == 0` return. Print the string, then recursively call the function with `N - 1`. Time: O(N)."
  },
  {
    id: "rec-02", name: "Print name N times using recursion", module: "Learn the basics", subModule: "Learn Basic Recursion", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/print-gfg-n-times/1", cnUrl: "https://www.naukri.com/code360/problems/print-n-times_8380707", companies: [],
    statement: "Similar to the previous problem, use a recursive mathematical function to print your name N times.",
    examples: [{ input: "N = 2", output: "Name Name" }], constraints: ["1 <= N <= 10^4"], hints: ["Keep a count variable passing recursively."],
    approach: "Function `f(i, n)`. If `i > n`, return. Print name, call `f(i+1, n)`. Time: O(N)."
  },
  {
    id: "rec-03", name: "Print 1 to N using Recursion", module: "Learn the basics", subModule: "Learn Basic Recursion", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/print-1-to-n_628290", companies: [],
    statement: "Print numbers from 1 to N without the help of loops.",
    examples: [{ input: "N = 5", output: "1 2 3 4 5" }], constraints: ["1 <= N <= 10^4"], hints: ["Print the current number then make the recursive call."],
    approach: "Function takes `i` and `N`. Base case `i > N`. Print `i`, call `f(i+1, N)`. Time: O(N)."
  },
  {
    id: "rec-04", name: "Print N to 1 using Recursion", module: "Learn the basics", subModule: "Learn Basic Recursion", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1", cnUrl: "https://www.naukri.com/code360/problems/print-n-to-1-using-recursion_8365424", companies: [],
    statement: "Print numbers from N down to 1 without the help of loops.",
    examples: [{ input: "N = 5", output: "5 4 3 2 1" }], constraints: ["1 <= N <= 10^4"], hints: ["Make the recursive call first, then print (Backtracking) or print first then call with N-1."],
    approach: "Function `f(n)`. Base case `n < 1`. Print `n`, call `f(n-1)`. Time: O(N)."
  },
  {
    id: "rec-05", name: "Sum of First N Numbers", module: "Learn the basics", subModule: "Learn Basic Recursion", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1", cnUrl: "https://www.naukri.com/code360/problems/sum-of-first-n-numbers_8876068", companies: [],
    statement: "Given an integer n, calculate the sum of the first N natural numbers using recursion.",
    examples: [{ input: "n = 5", output: "15" }], constraints: ["1 <= N <= 10^4"], hints: ["Return N + f(N-1)"],
    approach: "Recursive function: if n == 0 return 0. Else return n + f(n-1). Time: O(N)."
  },
  {
    id: "rec-06", name: "Factorial of a given number", module: "Learn the basics", subModule: "Learn Basic Recursion", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0", cnUrl: "https://www.naukri.com/code360/problems/factorial-numbers-not-greater-than-n_8365435", companies: [],
    statement: "Find the factorial of a given number N recursively.",
    examples: [{ input: "N = 5", output: "120" }], constraints: ["1 <= N <= 20"], hints: ["Return N * f(N-1)"],
    approach: "Recursive function: if n == 0 or n == 1 return 1. Else return n * f(n-1). Time: O(N)."
  },
  {
    id: "rec-07", name: "Reverse an array", module: "Learn the basics", subModule: "Learn Basic Recursion", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/reverse-string/", gfgUrl: "https://www.geeksforgeeks.org/problems/reverse-an-array/0", cnUrl: "https://www.naukri.com/code360/problems/reverse-an-array_8365444", companies: ["Apple"],
    statement: "Write a function that reverses an array in-place using recursion.",
    examples: [{ input: "s = [1, 2, 3, 4]", output: "[4, 3, 2, 1]" }], constraints: ["1 <= s.length <= 10^5"], hints: ["Use two pointers, left and right. Swap them recursively."],
    approach: "Recursive function `f(left, right)`. If left >= right, return. Swap `s[left]` and `s[right]`. Call `f(left+1, right-1)`. Time: O(N/2)."
  },
  {
    id: "rec-08", name: "Check if String is Palindrome or Not", module: "Learn the basics", subModule: "Learn Basic Recursion", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/valid-palindrome/", gfgUrl: "https://www.geeksforgeeks.org/problems/palindrome-string0817/1", cnUrl: "https://www.naukri.com/code360/problems/check-palindrome-recursive_8360235", companies: ["Facebook", "Microsoft"],
    statement: "Return true if the given string is a palindrome. Use recursion to check.",
    examples: [{ input: "s = 'MADAM'", output: "true" }], constraints: ["1 <= s.length <= 10^5"], hints: ["Compare first and last characters recursively."],
    approach: "Function `f(i)`. If `i >= n/2` return true. If `s[i] != s[n-i-1]` return false. Else return `f(i+1)`. Time: O(N)."
  },
  {
    id: "rec-09", name: "Fibonacci Number", module: "Learn the basics", subModule: "Learn Basic Recursion", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/fibonacci-number/", gfgUrl: "https://www.geeksforgeeks.org/problems/print-first-n-fibonacci-numbers1002/1", cnUrl: "https://www.naukri.com/code360/problems/print-fibonacci-series_7421617", companies: ["Amazon", "Microsoft"],
    statement: "Generate the Nth Fibonacci number recursively.",
    examples: [{ input: "n = 4", output: "3", explanation: "F(4) = F(3) + F(2) = 2 + 1 = 3." }], constraints: ["0 <= n <= 30"], hints: ["Use the recurrence relation: f(n) = f(n-1) + f(n-2)."],
    approach: "Base cases: if `n <= 1` return `n`. Recursive call: `return f(n-1) + f(n-2)`. Time: O(2^N) without memoization."
  },


  // Learn Basic Hashing
  {
    id: "hsh-01", name: "Basic Hashing Theory", module: "Learn the basics", subModule: "Learn Basic Hashing", difficulty: "Easy",
    lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
    statement: "Understand the concept of Hashing, collision resolution, and internal implementations of Unordered Map / HashMap in your language.",
    examples: [], constraints: [], hints: ["Division method, folding method, mid-square method."],
    approach: "Theoretical understanding of hash functions and time complexity (O(1) average, O(N) worst case)."
  },
  {
    id: "hsh-02", name: "Counting Frequencies of Array Elements", module: "Learn the basics", subModule: "Learn Basic Hashing", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/count-frequency-in-a-range_8365446", companies: ["Amazon"],
    statement: "Given an array arr[] of N positive integers which can contain integers from 1 to P where elements can be repeated or can be absent from the array. Count the frequency of all numbers from 1 to N.",
    examples: [{ input: "N = 5, arr = [2, 3, 2, 3, 5]", output: "1:0, 2:2, 3:2, 4:0, 5:1" }], constraints: ["1 <= N <= 10^5"], hints: ["You can use a Hash Map or array substitution to solve this in O(N)."],
    approach: "Create a hash map. Traverse the array and store the counts `map[arr[i]]++`. Time: O(N), Space: O(N)."
  },
  {
    id: "hsh-03", name: "Highest Occurring Element in an Array", module: "Learn the basics", subModule: "Learn Basic Hashing", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/sort-array-by-increasing-frequency/", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/highest-lowest-frequency-elements_6613895", companies: ["Amazon"],
    statement: "Given an array of size N, find the highest and lowest frequency elements. If there are multiple elements with the same frequency, select the smaller element.",
    examples: [{ input: "arr = [1, 2, 2, 3, 3, 3]", output: "Highest: 3, Lowest: 1" }], constraints: ["1 <= N <= 10^5"], hints: ["Use a map to count frequencies, then iterate through the map to find min/max counts."],
    approach: "Count frequencies in a map. Maintain `maxFreq` and `minFreq` alongside `maxEle` and `minEle`. Iterate through the map to update these trackers. Time: O(N), Space: O(N)."
  },

  // ═══ LEARN IMPORTANT SORTING TECHNIQUES ═══
  {
    id: "srt-01", name: "Selection Sort", module: "Learn Important Sorting Techniques", subModule: "Sorting-I", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/selection-sort/1", cnUrl: "https://www.naukri.com/code360/problems/selection-sort_923226", companies: ["Amazon"],
    statement: "Given an unsorted array of size N, use selection sort to sort arr[] in increasing order.",
    examples: [{ input: "N = 5, arr = [4, 1, 3, 9, 7]", output: "1 3 4 7 9" }], constraints: ["1 <= N <= 10^3"],
    hints: ["Find the minimum element in the unsorted part and swap it with the first unsorted element."],
    approach: "Loop `i` from 0 to N-1. Assume `min_idx = i`. Loop `j` from i+1 to N. If `arr[j] < arr[min_idx]`, update `min_idx`. Swap `arr[i]` with `arr[min_idx]`. Time: O(N^2), Space: O(1)."
  },
  {
    id: "srt-02", name: "Bubble Sort", module: "Learn Important Sorting Techniques", subModule: "Sorting-I", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/bubble-sort/1", cnUrl: "https://www.naukri.com/code360/problems/bubble-sort_980524", companies: ["Microsoft", "Wipro"],
    statement: "Given an Integer N and a list arr. Sort the array using bubble sort algorithm.",
    examples: [{ input: "N = 5, arr = [4, 1, 3, 9, 7]", output: "1 3 4 7 9" }], constraints: ["1 <= N <= 10^3"],
    hints: ["Repeatedly swap adjacent elements if they are in the wrong order."],
    approach: "Loop `i` from N-1 down to 0. Loop `j` from 0 to i-1. If `arr[j] > arr[j+1]`, swap them. Add a `swapped` boolean to break early if the array becomes sorted. Time: O(N^2), Space: O(1)."
  },
  {
    id: "srt-03", name: "Insertion Sorting", module: "Learn Important Sorting Techniques", subModule: "Sorting-I", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/insertion-sort/0", cnUrl: "https://www.naukri.com/code360/problems/insertion-sort_3155179", companies: ["TCS", "Infosys"],
    statement: "The task is to complete the insert() function which is used to implement Insertion Sort.",
    examples: [{ input: "N = 5, arr = [4, 1, 3, 9, 7]", output: "1 3 4 7 9" }], constraints: ["1 <= N <= 10^3"],
    hints: ["Pick an element and insert it into its correct position in the sorted part of the array."],
    approach: "Loop `i` from 1 to N-1. Set `key = arr[i]` and `j = i-1`. While `j >= 0` and `arr[j] > key`, shift `arr[j]` to `arr[j+1]` and decrement `j`. Finally, place `key` at `arr[j+1]`. Time: O(N^2), Space: O(1)."
  },

  // Sorting-II
  {
    id: "srt-04", name: "Merge Sorting", module: "Learn Important Sorting Techniques", subModule: "Sorting-II", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/sort-an-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/merge-sort/1", cnUrl: "https://www.naukri.com/code360/problems/merge-sort_920442", companies: ["Amazon", "Microsoft", "Qualcomm"],
    statement: "Given an array of integers nums, sort the array in ascending order and return it. You must solve the problem without using any built-in functions in O(nlog(n)) time complexity.",
    examples: [{ input: "nums = [5,2,3,1]", output: "[1,2,3,5]" }], constraints: ["1 <= nums.length <= 5 * 10^4", "-5 * 10^4 <= nums[i] <= 5 * 10^4"],
    hints: ["Divide the array into two halves, recursively sort them, and merge the two sorted halves."],
    approach: "Divide array at `mid = (left+right)/2`. Call mergeSort on both halves. Merge the two sorted arrays back together using a temporary array. Time: O(N log N), Space: O(N)."
  },
  {
    id: "srt-05", name: "Recursive Bubble Sort", module: "Learn Important Sorting Techniques", subModule: "Sorting-II", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/bubble-sort/1", cnUrl: "https://www.naukri.com/code360/problems/bubble-sort_980524", companies: [],
    statement: "Implement Bubble Sort using recursion.",
    examples: [{ input: "N = 5, arr = [4, 1, 3, 9, 7]", output: "1 3 4 7 9" }], constraints: ["1 <= N <= 10^3"],
    hints: ["Base case: if array size is 1, return.", "Do one pass of normal bubble sort, then recursively call for array of size n-1."],
    approach: "One pass of bubble sort puts the largest element at the end. Recursive call `bubbleSort(arr, n-1)`. Time: O(N^2), Space: O(N) due to recursion stack."
  },
  {
    id: "srt-06", name: "Recursive Insertion Sort", module: "Learn Important Sorting Techniques", subModule: "Sorting-II", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/insertion-sort/0", cnUrl: "https://www.naukri.com/code360/problems/insertion-sort_3155179", companies: [],
    statement: "Implement Insertion Sort using recursion.",
    examples: [{ input: "N = 5, arr = [4, 1, 3, 9, 7]", output: "1 3 4 7 9" }], constraints: ["1 <= N <= 10^3"],
    hints: ["Sort the first n-1 elements recursively, then insert the nth element in its correct position."],
    approach: "Base case `n <= 1`. Recursively sort `n-1` elements. Then, insert the last element at its correct position in the sorted array. Time: O(N^2), Space: O(N)."
  },
  {
    id: "srt-07", name: "Quick Sorting", module: "Learn Important Sorting Techniques", subModule: "Sorting-II", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/sort-an-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/quick-sort/1", cnUrl: "https://www.naukri.com/code360/problems/quick-sort_983625", companies: ["Amazon", "Microsoft", "Goldman Sachs"],
    statement: "Implement Quick Sort, a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot.",
    examples: [{ input: "nums = [5,2,3,1]", output: "[1,2,3,5]" }], constraints: ["1 <= nums.length <= 5 * 10^4"],
    hints: ["Pick the first, last, or random element as a pivot. Place it in its correct sorted position."],
    approach: "Partition step: Pick pivot. Use two pointers `i` and `j` to find elements greater than pivot on left, and smaller on right. Swap them. Place pivot in correct position. Recursively call on left and right partitions. Time: O(N log N) avg, Space: O(1) auxiliary."
  },


  // ═══ SOLVE PROBLEMS ON ARRAYS ═══
  // Easy
  {
    id: "arr-01", name: "Largest Element in an Array", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/largest-element-in-array/1", cnUrl: "https://www.naukri.com/code360/problems/largest-element-in-the-array-largest-element-in-the-array_5026279", companies: ["TCS", "Wipro"],
    statement: "Given an array A[] of size n. The task is to find the largest element in it.",
    examples: [{ input: "n = 5, A[] = {1, 8, 7, 56, 90}", output: "90" }], constraints: ["1 <= n <= 10^5"],
    hints: ["Maintain a variable max_val, initialize it to arr[0], and iterate through the array."],
    approach: "Traverse the array, updating `max_val` if the current element is strictly greater. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-02", name: "Second Largest Element", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/second-largest3735/1", cnUrl: "https://www.naukri.com/code360/problems/ninja-and-the-second-order-elements_6581960", companies: ["Amazon", "TCS"],
    statement: "Given an array of positive integers arr[] of size n, return the second largest element from the array. If the second largest element doesn't exist, return -1.",
    examples: [{ input: "arr[] = {12, 35, 1, 10, 34, 1}", output: "34" }], constraints: ["2 <= n <= 10^5"],
    hints: ["Keep track of the largest and the second largest elements simultaneously in a single pass."],
    approach: "Maintain `largest = arr[0]` and `second_largest = -1`. If `arr[i] > largest`, `second_largest = largest` and `largest = arr[i]`. If `arr[i] > second_largest` AND `arr[i] != largest`, update `second_largest`. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-03", name: "Check if the Array is Sorted and Rotated", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/", gfgUrl: "https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted-and-rotated-using-binary-search/1", cnUrl: "https://www.naukri.com/code360/problems/check-if-array-is-sorted-and-rotated_8365452", companies: ["Amazon", "Microsoft"],
    statement: "Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions. Otherwise, return false.",
    examples: [{ input: "nums = [3,4,5,1,2]", output: "true" }], constraints: ["1 <= nums.length <= 100"],
    hints: ["In a rotated sorted array, there is at most one point where nums[i] > nums[i+1]."],
    approach: "Iterate array. Count drops where `nums[i] > nums[(i + 1) % n]`. If count <= 1, return true. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-04", name: "Remove duplicates from Sorted array", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1", cnUrl: "https://www.naukri.com/code360/problems/remove-duplicates-from-sorted-array_1102307", companies: ["Google", "Microsoft"],
    statement: "Remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements in nums.",
    examples: [{ input: "nums = [1,1,2]", output: "2, nums = [1,2,_]" }], constraints: ["1 <= nums.length <= 3 * 10^4"],
    hints: ["Use two pointers. Let one pointer iterate through the array and the other point to the position of the next unique element."],
    approach: "Two Pointers: Maintain a pointer `i` starting at 0. Iterate `j`. If `nums[j] != nums[i]`, increment `i` and set `nums[i] = nums[j]`. Return i+1. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-05", name: "Left Rotate Array by One", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1", cnUrl: "https://www.naukri.com/code360/problems/left-rotate-an-array-by-one_5026278", companies: [],
    statement: "Given an array, rotate the array to the left by one position.",
    examples: [{ input: "arr[] = {1, 2, 3, 4, 5}", output: "{2, 3, 4, 5, 1}" }], constraints: ["1 <= n <= 10^5"],
    hints: ["Store the first element in a temp variable, shift everything left, put temp at the end."],
    approach: "temp = arr[0]. For i from 1 to N-1: arr[i-1] = arr[i]. arr[N-1] = temp. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-06", name: "Left Rotate Array by K Places", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/rotate-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements/0", cnUrl: "https://www.naukri.com/code360/problems/rotate-array_1230543", companies: ["Amazon", "Apple"],
    statement: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative. (Or left by K, logic is symmetrical).",
    examples: [{ input: "nums = [1,2,3,4,5,6,7], k = 3", output: "[5,6,7,1,2,3,4]" }], constraints: ["1 <= nums.length <= 10^5"],
    hints: ["Could you do it in-place with O(1) extra space? Think about reversing the array."],
    approach: "k = k % n. Reverse the entire array. Then reverse the first k elements. Finally, reverse the remaining n-k elements. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-07", name: "Move Zeros to End", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/move-zeroes/", gfgUrl: "https://www.geeksforgeeks.org/problems/move-all-zeroes-to-end-of-array0751/1", cnUrl: "https://www.naukri.com/code360/problems/ninja-and-the-zero-s_6581958", companies: ["Facebook", "Amazon"],
    statement: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
    examples: [{ input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" }], constraints: ["1 <= nums.length <= 10^4"],
    hints: ["Keep track of the index of the last non-zero element found. Swap non-zeros to this index."],
    approach: "Two Pointers: Let `i` track the next non-zero position. Iterate `j`. When `nums[j] != 0`, swap `nums[i]` and `nums[j]`, increment `i`. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-08", name: "Linear Search", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Easy",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/linear-search_6922070", companies: [],
    statement: "Given an array arr[] sorted in strictly increasing order and an integer K, find the index of K in the array.",
    examples: [{ input: "arr[] = {1, 2, 3, 4, 5}, K = 4", output: "3" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Iterate through the array and compare each element to K."],
    approach: "Loop i from 0 to N-1. If `arr[i] == K`, return `i`. Return -1 if not found. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-09", name: "Union of two sorted arrays", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/sorted-array_6613259", companies: ["Amazon", "Google"],
    statement: "Union of two arrays can be defined as the common and distinct elements in the two arrays. Given two sorted arrays of size n and m respectively, return their union.",
    examples: [{ input: "n = 5, arr1[] = {1, 2, 3, 4, 5}\nm = 3, arr2 [] = {1, 2, 3}", output: "{1, 2, 3, 4, 5}" }], constraints: ["1 <= n, m <= 10^5"],
    hints: ["Use two pointers like the merge step in Merge Sort.", "Skip duplicates while traversing."],
    approach: "Two Pointers `i` and `j`. If `arr1[i] <= arr2[j]`, add `arr1[i]` to union array if it's not a duplicate, increment `i`. Vice versa for `j`. Time: O(M+N), Space: O(M+N)."
  },
  {
    id: "arr-10", name: "Find missing number", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/missing-number/", gfgUrl: "https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1", cnUrl: "https://www.naukri.com/code360/problems/missing-number_6680467", companies: ["Microsoft", "Amazon"],
    statement: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    examples: [{ input: "nums = [3,0,1]", output: "2" }], constraints: ["1 <= n <= 10^4"],
    hints: ["What is the sum of the first n natural numbers?", "Can you do it using Bit Manipulation (XOR)?"],
    approach: "Math: Expected sum = `n*(n+1)/2`. Difference between expected and actual array sum is the missing number. Alternatively, XOR all indices and values. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-11", name: "Maximum Consecutive Ones", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/max-consecutive-ones/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximize-number-of-1s0905/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-consecutive-ones_892994", companies: ["Google"],
    statement: "Given a binary array nums, return the maximum number of consecutive 1's in the array.",
    examples: [{ input: "nums = [1,1,0,1,1,1]", output: "3" }], constraints: ["1 <= nums.length <= 10^5"],
    hints: ["Keep a counter of current consecutive 1s and a max_counter.", "Reset the counter to 0 when you encounter a 0."],
    approach: "Iterate. If `nums[i] == 1`, `count++`. Update `max_count = max(max_count, count)`. If 0, `count = 0`. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-12", name: "Find the number that appears once", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/single-number/", gfgUrl: "https://www.geeksforgeeks.org/problems/single-number1014/1", cnUrl: "https://www.naukri.com/code360/problems/find-the-single-element_6680465", companies: ["Amazon", "Microsoft"],
    statement: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
    examples: [{ input: "nums = [4,1,2,1,2]", output: "4" }], constraints: ["1 <= nums.length <= 3 * 10^4"],
    hints: ["Think about the XOR bitwise operator.", "XOR of a number with itself is 0."],
    approach: "Initialize `ans = 0`. Iterate through the array and XOR each element with `ans` (`ans ^= nums[i]`). Duplicates cancel out to 0. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-13", name: "Longest subarray with given sum K (positives)", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1", cnUrl: "https://www.naukri.com/code360/problems/longest-subarray-with-sum-k_6682399", companies: ["Amazon", "Google"],
    statement: "Given an array containing N integers and an integer K. Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value K. (Array contains ONLY positives).",
    examples: [{ input: "A[] = {10, 5, 2, 7, 1, 9}, K = 15", output: "4", explanation: "Subarray [5, 2, 7, 1] has sum 15." }], constraints: ["1 <= N <= 10^5"],
    hints: ["Since all elements are positive, can you use a sliding window (Two Pointers)?"],
    approach: "Two Pointers (Sliding Window): `left` and `right`. Add `arr[right]` to `sum`. If `sum > K`, subtract `arr[left]` and `left++`. If `sum == K`, `maxLen = max(maxLen, right-left+1)`. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-14", name: "Longest subarray with sum K (Positives + Negatives)", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Easy", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/subarray-sum-equals-k/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1", cnUrl: "https://www.naukri.com/code360/problems/longest-subarray-with-sum-k_5713505", companies: ["Amazon", "Google"],
    statement: "Given an array containing N integers and an integer K. Find the length of the longest Sub-Array with the sum of elements equal to K. (Array contains positive and negative integers).",
    examples: [{ input: "A[] = {-1, 2, 3}, K = 6", output: "0" }], constraints: ["1 <= N <= 10^5"],
    hints: ["Sliding window fails with negatives. Use a Hash Map to store prefix sums."],
    approach: "Hash Map: Store `(prefixSum, index)`. If `prefixSum == K`, `maxLen = i + 1`. If `map.contains(prefixSum - K)`, `maxLen = max(maxLen, i - map.get(prefixSum - K))`. Only insert `prefixSum` to map if it doesn't already exist (to maximize length). Time: O(N), Space: O(N)."
  },

  // Medium
  {
    id: "arr-15", name: "Two Sum", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/two-sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/key-pair5616/1", cnUrl: "https://www.naukri.com/code360/problems/reading_6845742", companies: ["Amazon", "Google", "Facebook"],
    statement: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]" }], constraints: ["2 <= nums.length <= 10^4"],
    hints: ["Try to use a hash map to store the elements and their indices as you traverse."],
    approach: "Hash Map: Store elements as `map[nums[i]] = i`. For each element, check if `target - nums[i]` exists in the map. Time: O(N), Space: O(N)."
  },
  {
    id: "arr-16", name: "Sort an array of 0's, 1's and 2's", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/sort-colors/", gfgUrl: "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1", cnUrl: "https://www.naukri.com/code360/problems/sort-an-array-of-0s-1s-and-2s_892977", companies: ["Microsoft", "Amazon"],
    statement: "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent. (Represented by 0, 1, 2).",
    examples: [{ input: "nums = [2,0,2,1,1,0]", output: "[0,0,1,1,2,2]" }], constraints: ["1 <= n <= 300"],
    hints: ["Think about the Dutch National Flag algorithm.", "Use three pointers: low, mid, and high."],
    approach: "Dutch National Flag: Pointers `low=0`, `mid=0`, `high=n-1`. If `nums[mid]==0`, swap low/mid, low++, mid++. If `nums[mid]==1`, mid++. If `nums[mid]==2`, swap mid/high, high--. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-17", name: "Majority Element-I", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/majority-element/", gfgUrl: "https://www.geeksforgeeks.org/problems/majority-element-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/majority-element_6783241", companies: ["Google", "Amazon"],
    statement: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.",
    examples: [{ input: "nums = [2,2,1,1,1,2,2]", output: "2" }], constraints: ["1 <= n <= 5 * 10^4"],
    hints: ["To do it in O(1) space, look into Moore's Voting Algorithm."],
    approach: "Moore's Voting Algorithm: `count = 0`, `el = 0`. Iterate array. If `count == 0`, `el = nums[i]`. If `nums[i] == el`, `count++`, else `count--`. Return `el`. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-18", name: "Kadane's Algorithm", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/maximum-subarray/", gfgUrl: "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-subarray-sum_630526", companies: ["Amazon", "Microsoft"],
    statement: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    examples: [{ input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "Subarray [4,-1,2,1] has the largest sum 6." }], constraints: ["1 <= nums.length <= 10^5"],
    hints: ["If the running sum becomes negative, reset it to 0."],
    approach: "Track `sum = 0` and `maxi = INT_MIN`. Iterate array. `sum += nums[i]`. `maxi = max(maxi, sum)`. If `sum < 0`, `sum = 0`. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-19", name: "Print subarray with maximum subarray sum", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-sub-array5443/1", cnUrl: "", companies: [],
    statement: "Find the subarray with the maximum sum and print/return the actual subarray.",
    examples: [{ input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "[4,-1,2,1]" }], constraints: ["1 <= nums.length <= 10^5"],
    hints: ["Modify Kadane's algorithm to keep track of the start and end indices of the max sum."],
    approach: "In Kadane's, when you reset `sum = 0`, also update `tempStart = i + 1`. When `sum > maxi`, set `maxi = sum`, `ansStart = tempStart`, `ansEnd = i`. Extract subarray from `ansStart` to `ansEnd`. Time: O(N)."
  },
  {
    id: "arr-20", name: "Stock Buy and Sell", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", gfgUrl: "https://www.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/best-time-to-buy-and-sell-stock_6194560", companies: ["Amazon", "Bloomberg"],
    statement: "You are given an array prices where prices[i] is the price of a given stock on the ith day. Maximize your profit by choosing a single day to buy and a future day to sell.",
    examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5" }], constraints: ["1 <= prices.length <= 10^5"],
    hints: ["Keep track of the minimum price seen so far."],
    approach: "Track `minPrice = prices[0]` and `maxProfit = 0`. Iterate array. Calculate `profit = prices[i] - minPrice`. `maxProfit = max(maxProfit, profit)`. `minPrice = min(minPrice, prices[i])`. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-21", name: "Rearrange array elements by sign", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/rearrange-array-elements-by-sign/", gfgUrl: "https://www.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1", cnUrl: "https://www.naukri.com/code360/problems/alternate-numbers_6783445", companies: ["Amazon"],
    statement: "You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers. Rearrange the elements such that every consecutive pair of integers have opposite signs, beginning with a positive integer.",
    examples: [{ input: "nums = [3,1,-2,-5,2,-4]", output: "[3,-2,1,-5,2,-4]" }], constraints: ["2 <= nums.length <= 2 * 10^5"],
    hints: ["Use a separate array to place positive elements at even indices and negative at odd indices."],
    approach: "Create `ans` array. Set `pos = 0`, `neg = 1`. Iterate original array. If `arr[i] > 0`, `ans[pos] = arr[i]`, `pos += 2`. Else `ans[neg] = arr[i]`, `neg += 2`. Time: O(N), Space: O(N)."
  },
  {
    id: "arr-22", name: "Next Permutation", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/next-permutation/", gfgUrl: "https://www.geeksforgeeks.org/problems/next-permutation5226/1", cnUrl: "https://www.naukri.com/code360/problems/next-greater-permutation_6929564", companies: ["Amazon", "Microsoft"],
    statement: "Given an array of integers nums, find the next lexicographically greater permutation of nums in-place.",
    examples: [{ input: "nums = [1,2,3]", output: "[1,3,2]" }, { input: "nums = [3,2,1]", output: "[1,2,3]" }], constraints: ["1 <= nums.length <= 100"],
    hints: ["Find the first adjacent pair from the right where nums[i] < nums[i+1].", "Swap it with the smallest number larger than it to its right, then reverse the right half."],
    approach: "1) Find break point `i` from back where `arr[i] < arr[i+1]`. 2) If no break point, reverse array. 3) Find element > `arr[i]` from back, swap them. 4) Reverse array from `i+1` to end. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-23", name: "Leaders in an Array", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/superior-elements_6783446", companies: ["Amazon"],
    statement: "Given an array A of positive integers. Your task is to find the leaders in the array. An element is a leader if it is greater than or equal to all the elements to its right side.",
    examples: [{ input: "A[] = {16,17,4,3,5,2}", output: "17 5 2" }], constraints: ["1 <= n <= 10^5"],
    hints: ["Traverse the array from right to left.", "Keep track of the maximum element seen so far from the right."],
    approach: "Iterate from right to left. Track `maxRight`. If current element > `maxRight`, it's a leader. Add to result, update `maxRight`. Reverse the result list at the end. Time: O(N), Space: O(N)."
  },
  {
    id: "arr-24", name: "Longest Consecutive Sequence in an Array", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/longest-consecutive-sequence/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1", cnUrl: "https://www.naukri.com/code360/problems/longest-successive-elements_6811740", companies: ["Amazon", "Microsoft"],
    statement: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
    examples: [{ input: "nums = [100,4,200,1,3,2]", output: "4", explanation: "The longest consecutive elements sequence is [1, 2, 3, 4]." }], constraints: ["0 <= nums.length <= 10^5"],
    hints: ["Use a HashSet.", "Only start counting the sequence if `num - 1` is not in the set (this ensures it's the start of a sequence)."],
    approach: "Insert all elements into a HashSet. Iterate the set. If `num - 1` does not exist, it's a start. Loop checking if `num + 1`, `num + 2` exist and count the streak. Maximize streak. Time: O(N), Space: O(N)."
  },
  {
    id: "arr-25", name: "Set Matrix Zeroes", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/set-matrix-zeroes/", gfgUrl: "https://www.geeksforgeeks.org/problems/make-zeroes-in-a-matrix/1", cnUrl: "https://www.naukri.com/code360/problems/zero-matrix_1171153", companies: ["Amazon", "Microsoft"],
    statement: "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.",
    examples: [{ input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,0,1],[0,0,0],[1,0,1]]" }], constraints: ["1 <= m, n <= 200"],
    hints: ["Can you do it in O(1) space? Use the first row and first column of the matrix to mark the zeroes."],
    approach: "Use `matrix[0][..]` and `matrix[..][0]` as markers. Keep `col0` for the 0th column. If `matrix[i][j] == 0`, mark `matrix[i][0] = 0` and `matrix[0][j] = 0`. Iterate backwards to set zeroes to avoid overwriting markers. Time: O(M*N), Space: O(1)."
  },
  {
    id: "arr-26", name: "Rotate matrix by 90 degrees", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/rotate-image/", gfgUrl: "https://www.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/rotate-the-matrix_6825090", companies: ["Amazon", "Microsoft"],
    statement: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
    examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" }], constraints: ["n == matrix.length", "1 <= n <= 20"],
    hints: ["Transpose the matrix, then reverse every row."],
    approach: "1) Transpose: swap `matrix[i][j]` with `matrix[j][i]`. 2) Reverse each row using two pointers. Time: O(N^2), Space: O(1)."
  },
  {
    id: "arr-27", name: "Print the matrix in spiral manner", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/spiral-matrix/", gfgUrl: "https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/spiral-matrix_6922069", companies: ["Amazon", "Microsoft"],
    statement: "Given an m x n matrix, return all elements of the matrix in spiral order.",
    examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" }], constraints: ["1 <= m, n <= 10"],
    hints: ["Maintain 4 boundaries: top, bottom, left, right.", "Simulate the spiral boundary by shrinking it inward."],
    approach: "Loop while `top <= bottom && left <= right`. Traverse left->right (top++). Traverse top->bottom (right--). Traverse right->left (bottom--). Traverse bottom->top (left++). Time: O(M*N), Space: O(M*N) to return result."
  },
  {
    id: "arr-28", name: "Count subarrays with given sum", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Medium", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/subarray-sum-equals-k/", gfgUrl: "https://www.geeksforgeeks.org/problems/subarrays-with-sum-k/1", cnUrl: "https://www.naukri.com/code360/problems/subarray-sums-i_1467103", companies: ["Amazon", "Google"],
    statement: "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
    examples: [{ input: "nums = [1,1,1], k = 2", output: "2" }], constraints: ["1 <= nums.length <= 2 * 10^4", "-1000 <= nums[i] <= 1000"],
    hints: ["Use a Hash Map to store the frequency of prefix sums."],
    approach: "Initialize map `map[0] = 1`. Track `preSum`. Iterate array. `preSum += nums[i]`. `count += map[preSum - k]`. `map[preSum]++`. Time: O(N), Space: O(N)."
  },

  // Hard
  {
    id: "arr-29", name: "Pascal's Triangle I", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Easy",
    lcUrl: "https://leetcode.com/problems/pascals-triangle/", gfgUrl: "https://www.geeksforgeeks.org/problems/pascal-triangle0652/1", cnUrl: "https://www.naukri.com/code360/problems/print-pascal-s-triangle_6917910", companies: ["Amazon", "Microsoft"],
    statement: "Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it.",
    examples: [{ input: "numRows = 5", output: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]" }], constraints: ["1 <= numRows <= 30"],
    hints: ["Each row can be computed using the combinations formula nCr."],
    approach: "Generate row by row. For a row `r`, element `c` is `nCr(r, c)`. Optimize: `ans = ans * (r - c) / c`. Time: O(N^2), Space: O(N^2)."
  },
  {
    id: "arr-30", name: "Majority Element-II", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/majority-element-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/majority-vote/1", cnUrl: "https://www.naukri.com/code360/problems/majority-element_6915220", companies: ["Google", "Amazon"],
    statement: "Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.",
    examples: [{ input: "nums = [3,2,3]", output: "[3]" }], constraints: ["1 <= nums.length <= 5 * 10^4"],
    hints: ["There can be at most two majority elements.", "Use an extended Moore's Voting Algorithm."],
    approach: "Extended Moore's: Track `el1, el2` and `cnt1, cnt2`. Iterate array. If `num == el1`, `cnt1++`. Else if `num == el2`, `cnt2++`. Else if `cnt1 == 0`, `el1 = num, cnt1 = 1`. Else if `cnt2 == 0`, `el2 = num, cnt2 = 1`. Else `cnt1--, cnt2--`. Verify counts of el1 and el2 at the end. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-31", name: "3 Sum", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/3sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/three-sum_6922091", companies: ["Amazon", "Microsoft", "Facebook"],
    statement: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    examples: [{ input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }], constraints: ["3 <= nums.length <= 3000"],
    hints: ["Sort the array first.", "Fix one pointer `i` and use two pointers `j` and `k` for the remaining elements. Skip duplicates."],
    approach: "Sort array. Loop `i` from 0 to n-3. Skip duplicate `i`. `j = i+1, k = n-1`. If `sum == 0`, push to ans, advance `j` and `k`, skip duplicates for both. If `sum < 0`, `j++`. Else `k--`. Time: O(N^2), Space: O(1)."
  },
  {
    id: "arr-32", name: "4 Sum", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/4sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/find-all-four-sum-numbers1732/1", cnUrl: "https://www.naukri.com/code360/problems/4sum_5713771", companies: ["Amazon", "Microsoft"],
    statement: "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that the sum is target.",
    examples: [{ input: "nums = [1,0,-1,0,-2,2], target = 0", output: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" }], constraints: ["1 <= nums.length <= 200"],
    hints: ["Same approach as 3Sum, but with two nested loops for the first two elements."],
    approach: "Sort array. Loop `i`. Skip dupes. Loop `j = i+1`. Skip dupes. Set `left = j+1, right = n-1`. Two pointers to find remaining sum. Time: O(N^3), Space: O(1)."
  },
  {
    id: "arr-33", name: "Largest Subarray with Sum 0", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Medium",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1", cnUrl: "https://www.naukri.com/code360/problems/longest-subset-zero-sum_920321", companies: ["Amazon"],
    statement: "Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.",
    examples: [{ input: "A[] = {15,-2,2,-8,1,7,10,23}", output: "5", explanation: "The largest subarray with sum 0 is -2 2 -8 1 7." }], constraints: ["1 <= n <= 10^5"],
    hints: ["Use a HashMap to store the prefix sums and their first occurrence index."],
    approach: "Hash Map: Store `(prefixSum, index)`. Iterate array. `sum += arr[i]`. If `sum == 0`, `maxLen = i+1`. If `sum` exists in map, `maxLen = max(maxLen, i - map[sum])`. Else `map[sum] = i`. Time: O(N), Space: O(N)."
  },
  {
    id: "arr-34", name: "Count subarrays with given xor K", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/count-subarrays-with-given-xor/1", cnUrl: "https://www.naukri.com/code360/problems/subarrays-with-xor-k_6826258", companies: [],
    statement: "Given an array of integers A and an integer B. Find the total number of subarrays having bitwise XOR of all elements equal to B.",
    examples: [{ input: "A = [4, 2, 2, 6, 4], B = 6", output: "4", explanation: "The subarrays having XOR of their elements as 6 are: [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]." }], constraints: ["1 <= A.length <= 10^5"],
    hints: ["Similar to 'Subarray Sum Equals K'. Use a hash map.", "If X ^ Y = B, then X ^ B = Y."],
    approach: "Hash Map: Store frequency of prefix XORs. Track `xr`. For each element, `xr ^= arr[i]`. We need `x = xr ^ B`. Add `map[x]` to count. Then `map[xr]++`. Time: O(N), Space: O(N)."
  },
  {
    id: "arr-35", name: "Merge Overlapping Subintervals", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/merge-intervals/", gfgUrl: "https://www.geeksforgeeks.org/problems/overlapping-intervals--170633/1", cnUrl: "https://www.naukri.com/code360/problems/merge-all-overlapping-intervals_6783452", companies: ["Amazon", "Microsoft", "Google"],
    statement: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals.",
    examples: [{ input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" }], constraints: ["1 <= intervals.length <= 10^4"],
    hints: ["Sort the intervals by their start times.", "If the start time of the current interval is <= the end time of the previous, they overlap."],
    approach: "Sort by start times. Iterate intervals. If `ans` is empty or `ans.last.end < curr.start`, push `curr`. Else update `ans.last.end = max(ans.last.end, curr.end)`. Time: O(N log N), Space: O(N)."
  },
  {
    id: "arr-36", name: "Merge two sorted arrays without extra space", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Medium",
    lcUrl: "https://leetcode.com/problems/merge-sorted-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/merge-two-sorted-arrays-without-extra-space_6898839", companies: ["Microsoft", "LinkedIn"],
    statement: "Merge nums1 and nums2 into a single array sorted in non-decreasing order. You are given the lengths m and n. nums1 has a total size of m + n.",
    examples: [{ input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]" }], constraints: ["nums1.length == m + n", "nums2.length == n"],
    hints: ["Since nums1 has empty space at the end, try filling the array backwards from the end."],
    approach: "Three Pointers: `p1 = m-1`, `p2 = n-1`, `p = m+n-1`. Compare `nums1[p1]` and `nums2[p2]`, place the larger at `nums1[p]`. Decrement the respective pointers. Time: O(M+N), Space: O(1)."
  },
  {
    id: "arr-37", name: "Find the repeating and missing number", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1", cnUrl: "https://www.naukri.com/code360/problems/missing-and-repeating-numbers_6828164", companies: ["Amazon", "Samsung"],
    statement: "Given an unsorted array of size n. Array elements are in the range from 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.",
    examples: [{ input: "arr = [3, 1, 3]", output: "Missing = 2, Repeating = 3" }], constraints: ["2 <= n <= 10^5"],
    hints: ["Math approach: Form equations using sum of N numbers and sum of N^2 numbers.", "XOR approach: XOR all numbers with 1 to N, then find the rightmost set bit to separate them into two buckets."],
    approach: "Math: `S - Sn = x - y` and `S2 - S2n = x^2 - y^2`. Solve for x and y. Alternatively, use XOR logic to bucket the elements. Time: O(N), Space: O(1)."
  },
  {
    id: "arr-38", name: "Count Inversions", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Hard",
    lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/number-of-inversions_6840276", companies: ["Amazon", "Flipkart"],
    statement: "Given an array of integers. Find the Inversion Count in the array. Two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.",
    examples: [{ input: "N = 5, arr[] = {2, 4, 1, 3, 5}", output: "3", explanation: "The inversions are (2,1), (4,1), (4,3)." }], constraints: ["1 <= N <= 5 * 10^5"],
    hints: ["Use a modification of Merge Sort.", "During the merge step, if left array element > right array element, it forms inversions with all remaining elements in the left array."],
    approach: "Merge Sort. In `merge()`, if `arr[i] > arr[j]`, `count += (mid - i + 1)`, and push `arr[j]` to temp. Time: O(N log N), Space: O(N)."
  },
  {
    id: "arr-39", name: "Reverse Pairs", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/reverse-pairs/", gfgUrl: "https://www.geeksforgeeks.org/problems/count-reverse-pairs/1", cnUrl: "https://www.naukri.com/code360/problems/team-contest_6840309", companies: ["Google", "Amazon"],
    statement: "Given an integer array nums, return the number of reverse pairs in the array. A reverse pair is a pair (i, j) where: 0 <= i < j < nums.length and nums[i] > 2 * nums[j].",
    examples: [{ input: "nums = [13,2,3,1,5]", output: "3" }, { input: "nums = [2,4,3,5,1]", output: "3" }], constraints: ["1 <= nums.length <= 5 * 10^4"],
    hints: ["This is a modified inversion count problem.", "You cannot just count during the merge step. You must count BEFORE merging the two sorted arrays."],
    approach: "Merge Sort. In the `mergeSort` function, before merging, add a loop to count reverse pairs: for `i` in left half, while `j` in right half and `nums[i] > 2LL * nums[j]`, `j++`. `count += (j - (mid+1))`. Then perform standard merge. Time: O(N log N), Space: O(N)."
  },
  {
    id: "arr-40", name: "Maximum Product Subarray in an Array", module: "Solve Problems on Arrays [Easy -> Medium -> Hard]", subModule: "Hard", difficulty: "Hard",
    lcUrl: "https://leetcode.com/problems/maximum-product-subarray/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-product-subarray3604/1", cnUrl: "https://www.naukri.com/code360/problems/subarray-with-maximum-product_6890008", companies: ["Amazon", "Microsoft", "LinkedIn"],
    statement: "Given an integer array nums, find a subarray that has the largest product, and return the product.",
    examples: [{ input: "nums = [2,3,-2,4]", output: "6", explanation: "[2,3] has the largest product 6." }, { input: "nums = [-2,0,-1]", output: "0" }], constraints: ["1 <= nums.length <= 2 * 10^4"],
    hints: ["A negative number multiplied by a negative becomes positive.", "Maintain a running prefix product and suffix product. Handle 0s by resetting the product to 1."],
    approach: "Track `pre = 1`, `suff = 1`, `max_prod = INT_MIN`. Iterate array from left to right. `pre *= nums[i]`, `suff *= nums[n-i-1]`. `max_prod = max({max_prod, pre, suff})`. If `pre == 0`, `pre = 1`. If `suff == 0`, `suff = 1`. Time: O(N), Space: O(1)."
  }, 
];