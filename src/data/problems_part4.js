// src/data/problems_part4.js
export const PROBLEMS_PART4 = [
    // ════════════════════════════════════════════════════════════════════════
    // BINARY TREES [Medium Problems]
    // ════════════════════════════════════════════════════════════════════════
    {
        id: "bt-13", name: "Maximum Depth in BT", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-depth-of-binary-tree/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-depth-of-binary-tree_8414441", companies: ["Amazon", "Microsoft", "LinkedIn"],
        statement: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
        examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "3" }], constraints: ["0 <= nodes <= 10^4"],
        hints: ["Use recursion to find the depth of the left and right subtrees.", "The depth of the current node is 1 + max(left_depth, right_depth)."],
        approach: "Recursive DFS. Base case: `if (!root) return 0;`. Return `1 + max(maxDepth(root.left), maxDepth(root.right))`. Time: O(N), Space: O(H) for recursion stack."
    },
    {
        id: "bt-14", name: "Check for balanced binary tree", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/balanced-binary-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/check-for-balanced-tree/1", cnUrl: "https://www.naukri.com/code360/problems/is-height-balanced-binary-tree_975454", companies: ["Amazon", "Google"],
        statement: "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
        examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "true" }], constraints: ["0 <= nodes <= 5000"],
        hints: ["Modify the 'Maximum Depth' function to return -1 if a subtree is unbalanced.", "If either left or right returns -1, propagate -1 upwards."],
        approach: "DFS function `check(root)`. Base: `if (!root) return 0`. `lh = check(root.left)`, `rh = check(root.right)`. If `lh == -1 || rh == -1` or `abs(lh - rh) > 1`, return -1. Return `1 + max(lh, rh)`. Final answer: `check(root) != -1`. Time: O(N), Space: O(H)."
    },
    {
        id: "bt-15", name: "Diameter of Binary Tree", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Easy",
        lcUrl: "https://leetcode.com/problems/diameter-of-binary-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/diameter-of-binary-tree/1", cnUrl: "https://www.naukri.com/code360/problems/diameter-of-the-binary-tree_920552", companies: ["Amazon", "Microsoft", "Facebook"],
        statement: "Given the root of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
        examples: [{ input: "root = [1,2,3,4,5]", output: "3", explanation: "3 is the length of the path [4,2,1,3] or [5,2,1,3]." }], constraints: ["1 <= nodes <= 10^4"],
        hints: ["The longest path passing through a node is the sum of the heights of its left and right subtrees.", "Keep track of the maximum diameter found so far while calculating heights."],
        approach: "Global `maxi = 0`. DFS function `height(root)`. Base: `if (!root) return 0`. `lh = height(root.left)`, `rh = height(root.right)`. `maxi = max(maxi, lh + rh)`. Return `1 + max(lh, rh)`. Time: O(N), Space: O(H)."
    },
    {
        id: "bt-16", name: "Maximum path sum", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-path-sum-from-any-node/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-path-sum-between-two-leaves_794950", companies: ["Amazon", "Google", "Microsoft"],
        statement: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
        examples: [{ input: "root = [-10,9,20,null,null,15,7]", output: "42", explanation: "The optimal path is 15 -> 20 -> 7 with a sum of 15 + 20 + 7 = 42." }], constraints: ["1 <= nodes <= 3 * 10^4"],
        hints: ["Similar to Diameter, but we track the maximum sum instead of height.", "Ignore negative path sums returning from children by taking `max(0, dfs(child))`."],
        approach: "Global `maxi = INT_MIN`. DFS `maxPathDown(root)`. Base: `if (!root) return 0`. `left = max(0, maxPathDown(root.left))`, `right = max(0, maxPathDown(root.right))`. `maxi = max(maxi, root.val + left + right)`. Return `root.val + max(left, right)`. Time: O(N), Space: O(H)."
    },
    {
        id: "bt-17", name: "Check if two trees are identical or not", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/same-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/determine-if-two-trees-are-identical/1", cnUrl: "https://www.naukri.com/code360/problems/identical-trees_799364", companies: ["Amazon", "Microsoft"],
        statement: "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
        examples: [{ input: "p = [1,2,3], q = [1,2,3]", output: "true" }], constraints: ["0 <= nodes <= 100"],
        hints: ["Traverse both trees simultaneously.", "Check if current values match and recursively check left subtrees and right subtrees."],
        approach: "Recursive `isSameTree(p, q)`. If `p == null || q == null`, return `p == q`. Return `(p.val == q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)`. Time: O(N), Space: O(H)."
    },
    {
        id: "bt-18", name: "Zig Zag or Spiral Traversal", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/zigzag-tree-traversal/1", cnUrl: "https://www.naukri.com/code360/problems/zigzag-binary-tree-traversal_920532", companies: ["Amazon", "Microsoft"],
        statement: "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).",
        examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "[[3],[20,9],[15,7]]" }], constraints: ["0 <= nodes <= 2000"],
        hints: ["Use normal Level Order Traversal (BFS) with a Queue.", "Keep a boolean flag `leftToRight`. Reverse the level array before pushing to the answer if the flag is false."],
        approach: "Queue BFS. `leftToRight = true`. While queue not empty, `size = q.size()`, create `row` array of size `size`. Loop `i` from 0 to `size-1`: pop node, index = `leftToRight ? i : (size - 1 - i)`, `row[index] = node.val`. Push left/right to queue. Toggle `leftToRight`. Push `row` to ans. Time: O(N), Space: O(N)."
    },
    {
        id: "bt-19", name: "Boundary Traversal", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/boundary-of-binary-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1", cnUrl: "https://www.naukri.com/code360/problems/boundary-traversal-of-binary-tree_790725", companies: ["Amazon", "Google", "Microsoft"],
        statement: "Given a Binary Tree, find its Boundary Traversal. The traversal should be in the following order: Left boundary nodes (excluding leaf nodes), Leaf nodes (from left to right), Right boundary nodes (excluding leaf nodes, in reverse order).",
        examples: [{ input: "root = [1,2,3,4,5,6,7]", output: "[1,2,4,5,6,7,3]" }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["Divide the problem into 3 parts: Add Left Boundary, Add Leaves, Add Right Boundary in reverse."],
        approach: "1) `addLeftBoundary`: Go left if possible, else go right. Add node before moving. Exclude leaves. 2) `addLeaves`: Simple inorder/preorder that adds nodes with no children. 3) `addRightBoundary`: Go right if possible, else go left. Add to a temp stack/list, then reverse and add to result. Exclude leaves. Time: O(N), Space: O(H)."
    },
    {
        id: "bt-20", name: "Vertical Order Traversal", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/print-a-binary-tree-in-vertical-order/1", cnUrl: "https://www.naukri.com/code360/problems/vertical-order-traversal_920533", companies: ["Amazon", "Facebook", "Bloomberg"],
        statement: "Given the root of a binary tree, calculate the vertical order traversal of the binary tree. For each node at position (row, col), its left and right children will be at (row + 1, col - 1) and (row + 1, col + 1). Sort by col, then row, then value.",
        examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "[[9],[3,15],[20],[7]]" }], constraints: ["1 <= nodes <= 1000"],
        hints: ["Use a map of `col -> map<row, multiset<int>>` to automatically sort the elements.", "Perform a BFS or DFS keeping track of the row and col for each node."],
        approach: "Queue BFS storing `pair<Node*, pair<int, int>>` for `(node, {row, col})`. Push `{root, {0, 0}}`. Extract and add to `map[col][row].insert(node.val)`. Iterate through the map to build the final 2D array. Time: O(N log N) due to map/multiset, Space: O(N)."
    },
    {
        id: "bt-21", name: "Top View of BT", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1", cnUrl: "https://www.naukri.com/code360/problems/top-view-of-binary-tree_799401", companies: ["Amazon"],
        statement: "Given below is a binary tree. The task is to print the top view of binary tree. Top view of a binary tree is the set of nodes visible when the tree is viewed from the top.",
        examples: [{ input: "root = [1,2,3,4,5,6,7]", output: "[4,2,1,3,7]" }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["Use a map of `col -> node.val`.", "Perform BFS (Level Order) and only add the first node you see for each column."],
        approach: "Queue BFS storing `pair<Node*, int>` for `(node, col)`. `map<int, int> mpp`. Push `{root, 0}`. Pop `(curr, col)`. If `col` not in `mpp`, `mpp[col] = curr.val`. Push left child with `col-1`, right child with `col+1`. Iterate map to get result. Time: O(N), Space: O(N)."
    },
    {
        id: "bt-22", name: "Bottom view of BT", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1", cnUrl: "https://www.naukri.com/code360/problems/bottom-view-of-binary-tree_893110", companies: ["Amazon", "Paytm"],
        statement: "Given a binary tree, print the bottom view from left to right. A node is included in bottom view if it can be seen when we look at the tree from bottom.",
        examples: [{ input: "root = [1,2,3,4,5,6,7]", output: "[4,2,6,3,7]" }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["Exactly the same as Top View, but you overwrite the map entry every time you visit a column."],
        approach: "Queue BFS storing `pair<Node*, int>`. `map<int, int> mpp`. Push `{root, 0}`. Pop `(curr, col)`. Update `mpp[col] = curr.val` (always overwrite). Push left `col-1`, right `col+1`. Time: O(N), Space: O(N)."
    },
    {
        id: "bt-23", name: "Right/Left View of Binary Tree", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/binary-tree-right-side-view/", gfgUrl: "https://www.geeksforgeeks.org/problems/right-view-of-binary-tree/1", cnUrl: "https://www.naukri.com/code360/problems/right-view_764605", companies: ["Amazon", "Microsoft", "Samsung"],
        statement: "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
        examples: [{ input: "root = [1,2,3,null,5,null,4]", output: "[1,3,4]" }], constraints: ["0 <= nodes <= 100"],
        hints: ["Use Reverse Preorder Traversal (Root -> Right -> Left).", "Keep track of the current depth. Add the node's value if the depth matches the size of the result array."],
        approach: "Recursive `dfs(root, level)`. Base: `if(!root) return`. If `level == ans.size()`, `ans.push(root.val)`. Call `dfs(root.right, level+1)`, then `dfs(root.left, level+1)`. (For Left View, swap the recursive calls). Time: O(N), Space: O(H)."
    },
    {
        id: "bt-24", name: "Symmetric Binary Tree", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Medium Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/symmetric-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/symmetric-tree/1", cnUrl: "https://www.naukri.com/code360/problems/symmetric-tree_981177", companies: ["Amazon", "Microsoft", "Google"],
        statement: "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
        examples: [{ input: "root = [1,2,2,3,4,4,3]", output: "true" }], constraints: ["1 <= nodes <= 1000"],
        hints: ["Write a helper function that takes two node pointers (left and right).", "Compare the left child of the left node with the right child of the right node."],
        approach: "Helper `isMirror(node1, node2)`. If both null, true. If one null or values differ, false. Return `isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)`. Initial call: `isMirror(root.left, root.right)`. Time: O(N), Space: O(H)."
    },

    // Hard Problems
    {
        id: "bt-25", name: "Print root to leaf path in BT", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/binary-tree-paths/", gfgUrl: "https://www.geeksforgeeks.org/problems/root-to-leaf-paths/1", cnUrl: "https://www.naukri.com/code360/problems/all-root-to-leaf-paths-in-binary-tree._983599", companies: ["Amazon", "Microsoft"],
        statement: "Given the root of a binary tree, return all root-to-leaf paths in any order.",
        examples: [{ input: "root = [1,2,3,null,5]", output: "['1->2->5','1->3']" }], constraints: ["1 <= nodes <= 100"],
        hints: ["Use a recursive DFS function that keeps track of the current path string or array."],
        approach: "Recursive `dfs(root, currentStr)`. Base `if (!root) return`. If `!root.left && !root.right`, append `root.val` to `currentStr` and push to `ans`. Else, append `root.val + '->'` and call DFS on left and right. Time: O(N), Space: O(H)."
    },
    {
        id: "bt-26", name: "LCA in BT", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1", cnUrl: "https://www.naukri.com/code360/problems/lca-of-binary-tree_920541", companies: ["Amazon", "Microsoft", "Facebook"],
        statement: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
        examples: [{ input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1", output: "3" }], constraints: ["2 <= nodes <= 10^5"],
        hints: ["If the current node is p or q, return the current node.", "Recursively find LCA in the left and right subtrees. If both return non-null, the current node is the LCA."],
        approach: "Recursive `lca(root, p, q)`. If `!root || root == p || root == q`, return `root`. `left = lca(root.left, p, q)`, `right = lca(root.right, p, q)`. If `left == null`, return `right`. If `right == null`, return `left`. If both non-null, return `root`. Time: O(N), Space: O(H)."
    },
    {
        id: "bt-27", name: "Maximum Width of BT", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/maximum-width-of-binary-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-width-of-tree/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-width-in-binary-tree_763671", companies: ["Amazon", "Bloomberg"],
        statement: "Given the root of a binary tree, return the maximum width of the given tree. The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes are also counted.",
        examples: [{ input: "root = [1,3,2,5,3,null,9]", output: "4", explanation: "The maximum width exists in the third level with length 4 (5,3,null,9)." }], constraints: ["1 <= nodes <= 3000"],
        hints: ["Use indexing exactly like a segment tree/array representation: left child is 2*i + 1, right is 2*i + 2.", "To prevent integer overflow, subtract the index of the first node at each level from all nodes in that level."],
        approach: "Queue BFS storing `pair<Node*, long long>` for `(node, index)`. Push `{root, 0}`. `ans = 0`. While queue not empty, `size = q.size()`, `mMin = q.front().second`. `first = 0`, `last = 0`. Loop `size` times: `curr_id = q.front().second - mMin`, `node = q.front().first`, pop. If `i == 0` `first = curr_id`. If `i == size - 1` `last = curr_id`. Push left `{node.left, curr_id*2+1}`, right `{node.right, curr_id*2+2}`. `ans = max(ans, last - first + 1)`. Time: O(N), Space: O(N)."
    },
    {
        id: "bt-28", name: "Children Sum Property in Binary Tree", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/children-sum-parent/1", cnUrl: "https://www.naukri.com/code360/problems/children-sum-property_8357239", companies: ["Intuit"],
        statement: "Change the values of the nodes such that every node's value is equal to the sum of the values of its children. You can only increment node values.",
        examples: [{ input: "root = [2,35,10,2,3,5,2]", output: "All parent nodes correctly equal children sum." }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["Traverse downwards: If the sum of children is < root, set both children to root's value.", "Traverse upwards: Update the root's value to the sum of its children."],
        approach: "DFS `changeTree(root)`. If `!root` return. `child = 0`. If `root.left` `child += root.left.val`. If `root.right` `child += root.right.val`. If `child >= root.val`, `root.val = child`. Else if `root.left` `root.left.val = root.val`, if `root.right` `root.right.val = root.val`. Recursively call left and right. Finally, `tot = 0`, if `root.left` `tot += root.left.val`, if `root.right` `tot += root.right.val`, if `root.left || root.right` `root.val = tot`. Time: O(N), Space: O(H)."
    },
    {
        id: "bt-29", name: "Print all nodes at a distance of K in BT", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/nodes-at-given-distance-in-binary-tree/1", cnUrl: "https://www.naukri.com/code360/problems/print-nodes-at-distance-k-from-a-given-node_8420073", companies: ["Amazon", "Microsoft", "Facebook"],
        statement: "Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.",
        examples: [{ input: "root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2", output: "[7,4,1]" }], constraints: ["1 <= nodes <= 500"],
        hints: ["Since you need to travel upwards from the target, first do a traversal to map each node to its parent.", "Perform a BFS starting from the target node, treating the tree as an undirected graph."],
        approach: "1) BFS/DFS to build `unordered_map<Node*, Node*> parentMap`. 2) Queue BFS from `target`. `unordered_map<Node*, bool> visited`. Push `target`, mark visited. While `q` not empty, `if (curr_level == k)` break; `size = q.size()`. Loop `size`: pop `curr`, push `curr.left`, `curr.right`, and `parentMap[curr]` if they exist and aren't visited, mark visited. 3) Remaining elements in Queue are answer. Time: O(N), Space: O(N)."
    },
    {
        id: "bt-30", name: "Minimum time taken to burn the BT from a given Node", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/burning-tree/1", cnUrl: "https://www.naukri.com/code360/problems/time-to-burn-tree_630563", companies: ["Amazon", "Flipkart"],
        statement: "Given a binary tree and a node data called target. Find the minimum time required to burn the complete binary tree if the target is set on fire. It takes 1 second to burn adjacent nodes.",
        examples: [{ input: "root = [1,2,3,4,5,null,6,null,null,7,8], target = 8", output: "7" }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["This is exactly the same as 'All Nodes Distance K'.", "Instead of stopping at distance K, keep running the BFS until the queue is empty, tracking the maximum depth."],
        approach: "1) BFS to map parents and find the target node pointer. 2) BFS from target node. `visited` map. Track `time = 0`. While queue not empty, `size = q.size()`, `fl = 0`. Loop `size`: pop `curr`, try to push left, right, and parent if not visited, set `fl = 1` if any pushed. `if (fl) time++`. Return `time`. Time: O(N), Space: O(N)."
    },
    {
        id: "bt-31", name: "Count total nodes in a complete BT", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Easy",
        lcUrl: "https://leetcode.com/problems/count-complete-tree-nodes/", gfgUrl: "https://www.geeksforgeeks.org/problems/count-number-of-nodes-in-a-binary-tree/1", cnUrl: "https://www.naukri.com/code360/problems/count-complete-tree-nodes_2200385", companies: ["Google", "Amazon"],
        statement: "Given the root of a complete binary tree, return the number of the nodes in the tree in less than O(N) time.",
        examples: [{ input: "root = [1,2,3,4,5,6]", output: "6" }], constraints: ["0 <= nodes <= 5 * 10^4", "Tree is guaranteed to be complete."],
        hints: ["Find the leftmost height and rightmost height.", "If left_height == right_height, it's a perfect binary tree, and nodes = 2^h - 1."],
        approach: "Recursive `countNodes(root)`. Base `if(!root) return 0`. Find `lh = getLeftHeight(root)` and `rh = getRightHeight(root)`. If `lh == rh`, return `(1 << lh) - 1`. Else, return `1 + countNodes(root.left) + countNodes(root.right)`. Time: O(log^2 N), Space: O(log N)."
    },
    {
        id: "bt-32", name: "Requirements needed to construct a unique BT", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/unique-binary-tree-requirements/1", cnUrl: "https://www.naukri.com/code360/problems/unique-binary-tree_8180906", companies: [],
        statement: "Given two traversal sequences, determine if they are sufficient to construct a unique binary tree.",
        examples: [{ input: "a = 1 (preorder), b = 2 (inorder)", output: "true" }], constraints: ["1 <= a, b <= 3"],
        hints: ["You need Inorder traversal along with either Preorder or Postorder to uniquely identify a Binary Tree."],
        approach: "If `(a == 2 || b == 2) && (a != b)`, return true. Else return false. (Assuming 1=Pre, 2=In, 3=Post). Time: O(1)."
    },
    {
        id: "bt-33", name: "Construct a BT from Preorder and Inorder", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/construct-tree-1/1", cnUrl: "https://www.naukri.com/code360/problems/construct-binary-tree-from-inorder-and-postorder-traversal_8165684", companies: ["Amazon", "Microsoft"],
        statement: "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
        examples: [{ input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]", output: "[3,9,20,null,null,15,7]" }], constraints: ["1 <= nodes <= 3000"],
        hints: ["The first element in preorder is always the root.", "Find this root in the inorder array. The elements to its left form the left subtree, and to its right form the right subtree."],
        approach: "Hash Map to store inorder indices `map[inorder[i]] = i`. Recursive `build(pre, preStart, preEnd, in, inStart, inEnd, map)`. `root = new Node(pre[preStart])`. `inRoot = map[root.val]`. `numsLeft = inRoot - inStart`. `root.left = build(preStart+1, preStart+numsLeft, inStart, inRoot-1)`. `root.right = build(preStart+numsLeft+1, preEnd, inRoot+1, inEnd)`. Time: O(N), Space: O(N)."
    },
    {
        id: "bt-34", name: "Construct the Binary Tree from Postorder and Inorder", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/tree-from-postorder-and-inorder/1", cnUrl: "https://www.naukri.com/code360/problems/construct-binary-tree-from-inorder-and-postorder-traversal_8165684", companies: ["Amazon"],
        statement: "Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.",
        examples: [{ input: "inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]", output: "[3,9,20,null,null,15,7]" }], constraints: ["1 <= nodes <= 3000"],
        hints: ["The LAST element in postorder is the root.", "Very similar to Preorder+Inorder construction."],
        approach: "Hash Map for inorder indices. Recursive `build(post, postStart, postEnd, in, inStart, inEnd, map)`. `root = new Node(post[postEnd])`. `inRoot = map[root.val]`. `numsLeft = inRoot - inStart`. `root.left = build(postStart, postStart+numsLeft-1, inStart, inRoot-1)`. `root.right = build(postStart+numsLeft, postEnd-1, inRoot+1, inEnd)`. Time: O(N), Space: O(N)."
    },
    {
        id: "bt-35", name: "Serialize and De-serialize BT", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/serialize-and-deserialize-a-binary-tree/1", cnUrl: "https://www.naukri.com/code360/problems/serialize-and-deserialize-binary-tree_920328", companies: ["Amazon", "Microsoft", "Google", "Facebook"],
        statement: "Design an algorithm to serialize and deserialize a binary tree. Serialization is the process of converting a data structure into a string. Deserialization reconstructs it.",
        examples: [{ input: "root = [1,2,3,null,null,4,5]", output: "String: '1,2,3,#,#,4,5,#,#,#,#' -> Tree: [1,2,3,null,null,4,5]" }], constraints: ["0 <= nodes <= 10^4"],
        hints: ["Use a Level Order Traversal (BFS) using a queue.", "Represent null nodes with a specific character like '#'."],
        approach: "Serialize: Queue BFS. If `curr == null`, append `#,`. Else append `curr.val,` and push left, right to queue. Deserialize: Split string by `,`. Use a queue. `root = new Node(stoi(tokens[0]))`, push to queue. Loop through tokens, popping parent from queue. If token is not `#`, create left child, push to queue. Next token for right child. Time: O(N), Space: O(N)."
    },
    {
        id: "bt-36", name: "Morris Preorder Traversal of a Binary Tree", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/preorder-traversal-iterative/1", cnUrl: "https://www.naukri.com/code360/problems/preorder-traversal_1092859", companies: ["Microsoft"],
        statement: "Return the Preorder Traversal of a Binary Tree using Morris Traversal algorithm (O(1) auxiliary space).",
        examples: [{ input: "root = [1,null,2,3]", output: "[1,2,3]" }], constraints: ["0 <= nodes <= 10^5"],
        hints: ["Use threading: connect the rightmost node of the left subtree to the current node.", "In Preorder, add the node to the answer BEFORE moving to the left child (when creating the thread)."],
        approach: "Morris Preorder: `curr = root`. While `curr`: If `!curr.left`, `ans.push(curr.val)`, `curr = curr.right`. Else find `prev = curr.left`, while `prev.right && prev.right != curr`, `prev = prev.right`. If `!prev.right`, `prev.right = curr`, `ans.push(curr.val)`, `curr = curr.left`. If `prev.right == curr`, `prev.right = null`, `curr = curr.right`. Time: O(N), Space: O(1)."
    },
    {
        id: "bt-37", name: "Morris Inorder Traversal of a Binary Tree", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/binary-tree-inorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/inorder-traversal-iterative/1", cnUrl: "https://www.naukri.com/code360/problems/inorder-traversal_3839605", companies: ["Google", "Amazon"],
        statement: "Return the Inorder Traversal of a Binary Tree using Morris Traversal algorithm (O(1) auxiliary space).",
        examples: [{ input: "root = [1,null,2,3]", output: "[1,3,2]" }], constraints: ["0 <= nodes <= 10^5"],
        hints: ["Use threading.", "In Inorder, add the node to the answer AFTER returning from the left child (when breaking the thread)."],
        approach: "Morris Inorder: Same as Preorder, but `ans.push(curr.val)` happens when `!curr.left` OR when `prev.right == curr` (breaking the thread). Time: O(N), Space: O(1)."
    },
    {
        id: "bt-38", name: "Flatten Binary Tree to Linked List", module: "Binary Trees [Traversals, Medium and Hard Problems]", subModule: "Hard Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", gfgUrl: "https://www.geeksforgeeks.org/problems/flatten-binary-tree-to-linked-list/1", cnUrl: "https://www.naukri.com/code360/problems/flatten-binary-tree-to-linked-list_1112615", companies: ["Amazon", "Microsoft"],
        statement: "Given the root of a binary tree, flatten the tree into a 'linked list': The 'linked list' should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null. Should be in the same order as a pre-order traversal.",
        examples: [{ input: "root = [1,2,5,3,4,null,6]", output: "[1,null,2,null,3,null,4,null,5,null,6]" }], constraints: ["0 <= nodes <= 2000"],
        hints: ["O(1) space approach: Can be done similarly to Morris Traversal by rewiring the `right` pointers of the rightmost nodes of the left subtrees."],
        approach: "Morris-like approach. `curr = root`. While `curr`: If `curr.left`, find rightmost node of left subtree (`prev = curr.left`, while `prev.right` `prev = prev.right`). `prev.right = curr.right`. `curr.right = curr.left`. `curr.left = null`. `curr = curr.right`. Time: O(N), Space: O(1)."
    },


    // ════════════════════════════════════════════════════════════════════════
    // BINARY SEARCH TREES [Concept and Problems]
    // ════════════════════════════════════════════════════════════════════════

    // Concepts
    {
        id: "bst-01", name: "Introduction to BST", module: "Binary Search Trees [Concept and Problems]", subModule: "Concepts", difficulty: "Easy",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/binary-search-trees/1", cnUrl: "", companies: [],
        statement: "Understand the properties of a Binary Search Tree: The left subtree contains nodes with values less than the root, and the right subtree contains nodes with values greater than the root.",
        examples: [], constraints: [], hints: ["Inorder traversal of a BST always yields a sorted array."],
        approach: "Theoretical understanding of BST properties."
    },
    {
        id: "bst-02", name: "Search in a Binary Search Tree", module: "Binary Search Trees [Concept and Problems]", subModule: "Concepts", difficulty: "Easy",
        lcUrl: "https://leetcode.com/problems/search-in-a-binary-search-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/search-a-node-in-bst/1", cnUrl: "https://www.naukri.com/code360/problems/search-in-bst_1402878", companies: ["Amazon", "Microsoft"],
        statement: "Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.",
        examples: [{ input: "root = [4,2,7,1,3], val = 2", output: "[2,1,3]" }], constraints: ["1 <= nodes <= 5000"],
        hints: ["If val < root.val, search the left subtree. Otherwise, search the right subtree."],
        approach: "While `root != null && root.val != val`, `root = val < root.val ? root.left : root.right;`. Return `root`. Time: O(log N) avg, Space: O(1)."
    },
    {
        id: "bst-03", name: "Find Min/Max in BST", module: "Binary Search Trees [Concept and Problems]", subModule: "Concepts", difficulty: "Easy",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-element-in-bst_8160462", companies: [],
        statement: "Given the root of a Binary Search Tree, find the minimum and maximum values in the tree.",
        examples: [{ input: "root = [5,4,6,3,null,null,7]", output: "Min: 3, Max: 7" }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["The minimum value is the leftmost node. The maximum value is the rightmost node."],
        approach: "Min: `while(root.left) root = root.left; return root.val`. Max: `while(root.right) root = root.right; return root.val`. Time: O(log N) avg, Space: O(1)."
    },

    // Practice Problems
    {
        id: "bst-04", name: "Ceil in a BST", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Easy",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/implementing-ceil-in-bst/1", cnUrl: "https://www.naukri.com/code360/problems/ceil-from-bst_920464", companies: ["Amazon"],
        statement: "Given a BST and a number X, find Ceil of X. Ceil(X) is a number that is either equal to X or is immediately greater than X.",
        examples: [{ input: "root = [5,1,7,null,2,null,null,null,3], X = 3", output: "3" }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["If root.val == X, return root.val. If root.val < X, go right. If root.val > X, this could be the answer (save it), then go left to find a tighter bound."],
        approach: "`ans = -1`. While `root`: if `root.val == key`, return `root.val`. If `root.val < key`, `root = root.right`. If `root.val > key`, `ans = root.val`, `root = root.left`. Return `ans`. Time: O(log N) avg, Space: O(1)."
    },
    {
        id: "bst-05", name: "Floor in a Binary Search Tree", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Easy",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/floor-in-bst/1", cnUrl: "https://www.naukri.com/code360/problems/floor-from-bst_920457", companies: ["Amazon"],
        statement: "Given a Binary search tree and a value X, find the greatest value in the BST which is smaller than or equal to X.",
        examples: [{ input: "root = [8,5,10,2,6,null,12], X = 7", output: "6" }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["Symmetrical logic to Ceil. If root.val < X, this could be the answer (save it), then go right."],
        approach: "`ans = -1`. While `root`: if `root.val == key`, return `root.val`. If `root.val > key`, `root = root.left`. If `root.val < key`, `ans = root.val`, `root = root.right`. Return `ans`. Time: O(log N) avg, Space: O(1)."
    },
    {
        id: "bst-06", name: "Insert a given node in BST", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/insert-into-a-binary-search-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/insert-a-node-in-a-bst/1", cnUrl: "https://www.naukri.com/code360/problems/insert-into-a-binary-search-tree_1279913", companies: ["Amazon", "Microsoft"],
        statement: "You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion.",
        examples: [{ input: "root = [4,2,7,1,3], val = 5", output: "[4,2,7,1,3,5]" }], constraints: ["0 <= nodes <= 10^4"],
        hints: ["Find the correct leaf node to attach the new value based on BST properties."],
        approach: "If `!root`, return `new Node(val)`. `curr = root`. While `true`: If `val < curr.val`, if `curr.left` `curr = curr.left`, else `curr.left = new Node(val); break;`. Else `if (curr.right) curr = curr.right`, else `curr.right = new Node(val); break;`. Return `root`. Time: O(log N) avg, Space: O(1)."
    },
    {
        id: "bst-07", name: "Delete a node in BST", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/delete-node-in-a-bst/", gfgUrl: "https://www.geeksforgeeks.org/problems/delete-a-node-from-bst/1", cnUrl: "https://www.naukri.com/code360/problems/delete-node-in-bst_920381", companies: ["Amazon", "Microsoft"],
        statement: "Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.",
        examples: [{ input: "root = [5,3,6,2,4,null,7], key = 3", output: "[5,4,6,2,null,null,7]" }], constraints: ["0 <= nodes <= 10^4"],
        hints: ["Find the node. If it has one child, just attach it to the parent.", "If it has two children, connect its left child to its parent, and attach its right child to the rightmost node of its left child."],
        approach: "Find node. Helper `deleteNode(node)`: if `!node.left` return `node.right`. If `!node.right` return `node.left`. Else `rightChild = node.right`, `lastRight = findLastRight(node.left)`. `lastRight.right = rightChild`. Return `node.left`. Time: O(H), Space: O(1)."
    },
    {
        id: "bst-08", name: "Kth Smallest and Largest element in BST", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", gfgUrl: "https://www.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1", cnUrl: "https://www.naukri.com/code360/problems/kth-smallest-node-in-bst_920441", companies: ["Amazon", "Google", "Facebook"],
        statement: "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
        examples: [{ input: "root = [3,1,4,null,2], k = 1", output: "1" }], constraints: ["1 <= k <= nodes <= 10^4"],
        hints: ["An Inorder Traversal of a BST processes the nodes in sorted (ascending) order.", "Keep a counter and return the node when count == k."],
        approach: "Recursive `inorder(root)`. If `!root` return. `inorder(root.left)`. `count++`, if `count == k` `ans = root.val`. `inorder(root.right)`. Reverse inorder (Right, Root, Left) for Kth Largest. Time: O(N), Space: O(H)."
    },
    {
        id: "bst-09", name: "Check if a tree is a BST or not", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/validate-binary-search-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/check-for-bst/1", cnUrl: "https://www.naukri.com/code360/problems/validate-bst_799483", companies: ["Amazon", "Microsoft", "Facebook"],
        statement: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
        examples: [{ input: "root = [2,1,3]", output: "true" }], constraints: ["1 <= nodes <= 10^4"],
        hints: ["A node must fall within a valid range (min, max).", "When going left, update the max bound. When going right, update the min bound."],
        approach: "Recursive `isValid(root, minVal, maxVal)`. Base `if(!root) return true`. If `root.val <= minVal || root.val >= maxVal`, return false. Return `isValid(root.left, minVal, root.val) && isValid(root.right, root.val, maxVal)`. Time: O(N), Space: O(H)."
    },
    {
        id: "bst-10", name: "LCA in BST", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1", cnUrl: "https://www.naukri.com/code360/problems/lca-in-a-bst_981280", companies: ["Amazon", "Microsoft"],
        statement: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
        examples: [{ input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8", output: "6" }], constraints: ["2 <= nodes <= 10^5"],
        hints: ["Utilize the BST property. If both p and q are less than root, LCA is in the left subtree.", "The first node whose value is between p and q is the LCA."],
        approach: "Iterative: `curr = root`. While `curr`: If `curr.val > p.val && curr.val > q.val`, `curr = curr.left`. Else if `curr.val < p.val && curr.val < q.val`, `curr = curr.right`. Else return `curr`. Time: O(H), Space: O(1)."
    },
    {
        id: "bst-11", name: "Construct a BST from a preorder traversal", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/", gfgUrl: "https://www.geeksforgeeks.org/problems/preorder-to-postorder4423/1", cnUrl: "https://www.naukri.com/code360/problems/bst-from-preorder_2689307", companies: ["Amazon", "Microsoft"],
        statement: "Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.",
        examples: [{ input: "preorder = [8,5,1,7,10,12]", output: "[8,5,10,1,7,null,12]" }], constraints: ["1 <= preorder.length <= 100"],
        hints: ["Use a max bound to construct the tree in O(N) time.", "Iterate array, if value is > maxBound, return null. Else create node, update maxBound for left child."],
        approach: "Recursive `build(pre, i, bound)`. If `i == pre.size() || pre[i] > bound`, return null. `root = new Node(pre[i++])`. `root.left = build(pre, i, root.val)`. `root.right = build(pre, i, bound)`. Return `root`. Time: O(N), Space: O(N)."
    },
    {
        id: "bst-12", name: "Inorder Successor/Predecessor in BST", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/inorder-successor-in-bst/", gfgUrl: "https://www.geeksforgeeks.org/problems/predecessor-and-successor/1", cnUrl: "https://www.naukri.com/code360/problems/predecessor-and-successor-in-bst_893049", companies: ["Amazon", "Microsoft"],
        statement: "Given a BST, and a reference to a Node x in the BST. Find the Inorder Successor of the given node in the BST. If there is no successor, return null.",
        examples: [{ input: "root = [2,1,3], x = 1", output: "2" }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["Successor is the smallest node that is strictly greater than x.", "Traverse. If root.val > x, this could be successor, go left. Else go right."],
        approach: "`succ = null`, `curr = root`. While `curr`: If `curr.val <= x.val`, `curr = curr.right`. Else `succ = curr`, `curr = curr.left`. Predecessor logic is symmetrical. Time: O(H), Space: O(1)."
    },
    {
        id: "bst-13", name: "Merge 2 BST's", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/merge-two-bst-s/1", cnUrl: "https://www.naukri.com/code360/problems/merge-two-bsts_920474", companies: ["Amazon", "Google"],
        statement: "Given two BSTs, merge them into a single sorted list (or single BST).",
        examples: [{ input: "root1 = [5,3,6], root2 = [2,1,3,7,6]", output: "[1,2,3,3,5,6,6,7]" }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["Do an inorder traversal of both BSTs to get two sorted arrays.", "Merge the two sorted arrays into one."],
        approach: "1) `arr1 = inorder(root1)`, `arr2 = inorder(root2)`. 2) Merge arrays using two pointers. 3) Optional: Convert sorted array back to balanced BST using `build(left, right)`. Time: O(N+M), Space: O(N+M)."
    },
    {
        id: "bst-14", name: "Two Sum In BST", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/", gfgUrl: "https://www.geeksforgeeks.org/problems/find-a-pair-with-given-target-in-bst/1", cnUrl: "https://www.naukri.com/code360/problems/two-sum-in-a-bst_1062631", companies: ["Amazon"],
        statement: "Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.",
        examples: [{ input: "root = [5,3,6,2,4,null,7], k = 9", output: "true" }], constraints: ["1 <= nodes <= 10^4"],
        hints: ["You can store the inorder traversal in an array and use two pointers.", "To do it in O(H) space, implement a BST Iterator (one for normal inorder, one for reverse inorder)."],
        approach: "BST Iterator `l` (next()) and `r` (before()). `i = l.next()`, `j = r.next()`. While `i < j`: if `i + j == k` return true. If `i + j < k`, `i = l.next()`. Else `j = r.next()`. Time: O(N), Space: O(H)."
    },
    {
        id: "bst-15", name: "Correct BST with two nodes swapped", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/recover-binary-search-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/fixed-two-nodes-of-a-bst/1", cnUrl: "https://www.naukri.com/code360/problems/recover-bst_8230806", companies: ["Amazon", "Microsoft"],
        statement: "You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.",
        examples: [{ input: "root = [1,3,null,null,2]", output: "[3,1,null,null,2]" }], constraints: ["2 <= nodes <= 1000"],
        hints: ["In an inorder traversal, the sequence should be strictly increasing.", "Keep track of `prev`. When `prev.val > curr.val`, a violation occurred. Find the 1st and 2nd violations."],
        approach: "Maintain `prev`, `first`, `middle`, `last` pointers. Inorder traversal. If `prev && prev.val > root.val`: if `!first`, `first = prev`, `middle = root`. Else `last = root`. Swap `first.val` and `(last ? last.val : middle.val)`. Time: O(N), Space: O(H)."
    },
    {
        id: "bst-16", name: "Largest BST in Binary Tree", module: "Binary Search Trees [Concept and Problems]", subModule: "Practice Problems", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/largest-bst/1", cnUrl: "https://www.naukri.com/code360/problems/largest-bst-subtree_893103", companies: ["Amazon"],
        statement: "Given a binary tree. Find the size of its largest subtree that is a Binary Search Tree. Here, Size is equal to the number of nodes in the subtree.",
        examples: [{ input: "root = [10,5,15,1,8,null,7]", output: "3", explanation: "The largest BST is rooted at 5 with nodes [5,1,8]." }], constraints: ["1 <= nodes <= 10^5"],
        hints: ["Perform a postorder traversal.", "Return an object containing `{size, maxNode, minNode}` from the child to the parent to validate the BST property in O(1) time at each step."],
        approach: "Postorder `f(root)`. Base `if(!root) return {0, INT_MIN, INT_MAX}`. `left = f(root.left)`, `right = f(root.right)`. If `left.max < root.val && right.min > root.val`: it is a BST. Return `{left.size + right.size + 1, max(root.val, right.max), min(root.val, left.min)}`. Else return `{max(left.size, right.size), INT_MAX, INT_MIN}` (invalidate parent checks). Time: O(N), Space: O(H)."
    },


    // ════════════════════════════════════════════════════════════════════════
    // GRAPHS [Concepts & Problems]
    // ════════════════════════════════════════════════════════════════════════

    // Learning
    {
        id: "graph-01", name: "Introduction to Graph", module: "Graphs [Concepts & Problems]", subModule: "Learning", difficulty: "Easy",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/graph-and-vertices/1", cnUrl: "https://www.naukri.com/code360/problems/counting-graphs_8357237", companies: [],
        statement: "Given an integer n representing number of vertices. Find out how many undirected graphs can be constructed out of a given n number of vertices.",
        examples: [{ input: "n = 2", output: "2", explanation: "2 vertices can either be connected by an edge or disconnected." }], constraints: ["1 <= n <= 10"],
        hints: ["Maximum number of edges in a graph with n vertices is `n * (n - 1) / 2`.", "Each edge can either be present or absent (2 choices)."],
        approach: "Calculate max edges `e = n * (n - 1) / 2`. Return `2^e`. Time: O(1), Space: O(1)."
    },
    {
        id: "graph-02", name: "Graph Representation | C++", module: "Graphs [Concepts & Problems]", subModule: "Learning", difficulty: "Easy",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/create-a-graph-and-print-it_1214551", companies: [],
        statement: "Given an undirected graph with V nodes and E edges, create and return an adjacency list of the graph.",
        examples: [{ input: "V = 5, edges = [[0,1], [0,4], [1,2], [1,3], [1,4], [2,3], [3,4]]", output: "Adjacency list mapping each node to its neighbors." }], constraints: ["1 <= V, E <= 10^5"],
        hints: ["Initialize a 2D array or list of lists of size V.", "For every edge `(u, v)`, add `v` to `adj[u]` and `u` to `adj[v]`."],
        approach: "Create `vector<vector<int>> adj(V)`. Iterate through edges. `adj[u].push_back(v); adj[v].push_back(u);`. Time: O(E), Space: O(V + E)."
    },
    {
        id: "graph-03", name: "Graph Representation | Java", module: "Graphs [Concepts & Problems]", subModule: "Learning", difficulty: "Easy",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1", cnUrl: "", companies: [],
        statement: "Learn to represent a graph in Java using an ArrayList of ArrayLists.",
        examples: [], constraints: [], hints: ["Equivalent to the C++ vector of vectors."],
        approach: "Initialize `ArrayList<ArrayList<Integer>> adj = new ArrayList<>()`. For `i` to V, `adj.add(new ArrayList<>())`. Add edges. Time: O(E)."
    },
    {
        id: "graph-04", name: "Connected Components", module: "Graphs [Concepts & Problems]", subModule: "Learning", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", gfgUrl: "https://www.geeksforgeeks.org/problems/connected-components-in-an-undirected-graph/1", cnUrl: "https://www.naukri.com/code360/problems/find-the-number-of-states_1377943", companies: ["Amazon", "Microsoft"],
        statement: "Given an undirected graph, find the number of connected components.",
        examples: [{ input: "n = 5, edges = [[0, 1], [1, 2], [3, 4]]", output: "2", explanation: "Component 1: {0,1,2}, Component 2: {3,4}." }], constraints: ["1 <= n <= 10^5"],
        hints: ["Run DFS/BFS. Every time you start a new traversal from an unvisited node, you have found a new component."],
        approach: "Keep a `visited` array. Loop `i` from 0 to N-1. If `!visited[i]`, increment `count` and call `DFS(i)` to mark all reachable nodes as visited. Return `count`. Time: O(V + E), Space: O(V)."
    },
    {
        id: "graph-05", name: "Traversal Techniques (BFS)", module: "Graphs [Concepts & Problems]", subModule: "Learning", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1", cnUrl: "https://www.naukri.com/code360/problems/bfs-in-graph_973002", companies: ["Amazon", "Flipkart"],
        statement: "Given a directed graph. The task is to do Breadth First Traversal of this graph starting from 0.",
        examples: [{ input: "V = 5, adj = [[1,2,3], [], [4], [], []]", output: "0 1 2 3 4" }], constraints: ["1 <= V, E <= 10^4"],
        hints: ["Use a Queue and a visited array."],
        approach: "Queue BFS. Push starting node, mark visited. While queue not empty: pop node, add to answer. Iterate its neighbors. If neighbor not visited, mark visited and push to queue. Time: O(V + E), Space: O(V)."
    },
    {
        id: "graph-06", name: "DFS", module: "Graphs [Concepts & Problems]", subModule: "Learning", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1", cnUrl: "https://www.naukri.com/code360/problems/dfs-traversal_630462", companies: ["Amazon", "Microsoft"],
        statement: "Given a connected undirected graph. Perform a Depth First Traversal of the graph starting from vertex 0.",
        examples: [{ input: "V = 5, adj = [[1,2,4], [0], [0], [4], [0,3]]", output: "0 1 2 4 3" }], constraints: ["1 <= V, E <= 10^4"],
        hints: ["Use Recursion and a visited array."],
        approach: "Recursive `dfs(node, adj, vis)`. Mark `vis[node] = true`. Add `node` to answer. For each `neighbor` in `adj[node]`, if `!vis[neighbor]`, call `dfs(neighbor)`. Time: O(V + E), Space: O(V)."
    },

    // Problems on BFS/DFS
    {
        id: "graph-07", name: "Number of provinces", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/number-of-provinces/", gfgUrl: "https://www.geeksforgeeks.org/problems/number-of-provinces/1", cnUrl: "https://www.naukri.com/code360/problems/find-the-number-of-states_1377943", companies: ["Amazon", "Microsoft", "Google"],
        statement: "There are n cities. Some of them are connected, while some are not. A province is a group of directly or indirectly connected cities. You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected. Return the total number of provinces.",
        examples: [{ input: "isConnected = [[1,1,0],[1,1,0],[0,0,1]]", output: "2" }], constraints: ["1 <= n <= 200"],
        hints: ["This is exactly finding the number of connected components.", "Convert the adjacency matrix to an adjacency list or iterate over the matrix directly."],
        approach: "Visited array `vis`. `provinces = 0`. Loop `i` from 0 to n-1. If `!vis[i]`, `provinces++`, start DFS. In DFS, loop `j` from 0 to n-1: if `isConnected[node][j] == 1 && !vis[j]`, mark `vis[j]=1` and call `dfs(j)`. Time: O(N^2), Space: O(N)."
    },
    {
        id: "graph-08", name: "Connected Components Problem in Matrix", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/find-the-number-of-islands/1", cnUrl: "https://www.naukri.com/code360/problems/find-number-of-islands_630512", companies: ["Amazon"],
        statement: "Given a grid of size n*m (n is the number of rows and m is the number of columns in the grid) consisting of '0's (Water) and '1's(Land). Find the number of islands. (An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically or diagonally).",
        examples: [{ input: "grid = [[0,1],[1,0],[1,1],[1,0]]", output: "1" }], constraints: ["1 <= n, m <= 500"],
        hints: ["Iterate through the grid. When you see a '1' that is not visited, increment island count and run BFS/DFS to mark all connected '1's as visited."],
        approach: "Iterate grid. If `grid[i][j] == '1' && !vis[i][j]`, `count++`, trigger BFS. BFS: push `{i, j}`, mark visited. Loop 8 directions (nested loops -1 to 1). If valid bounds, not visited, and is '1', push to queue and mark visited. Time: O(N*M), Space: O(N*M)."
    },
    {
        id: "graph-09", name: "Rotten Oranges", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/rotting-oranges/", gfgUrl: "https://www.geeksforgeeks.org/problems/rotten-oranges2536/1", cnUrl: "https://www.naukri.com/code360/problems/rotting-oranges_701655", companies: ["Amazon", "Microsoft", "Samsung"],
        statement: "You are given an m x n grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), or 2 (rotten orange). Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.",
        examples: [{ input: "grid = [[2,1,1],[1,1,0],[0,1,1]]", output: "4" }], constraints: ["1 <= m, n <= 10"],
        hints: ["Use multi-source BFS.", "Push all initially rotten oranges into a queue with time=0."],
        approach: "Queue stores `{{r, c}, time}`. Push all cells with '2' to queue, count total fresh oranges `freshCount`. While queue not empty, pop, `maxTime = max(maxTime, time)`. Check 4 directions. If neighbor is '1', change to '2', `freshCount--`, push `{{nr, nc}, time+1}`. If `freshCount > 0`, return -1. Else return `maxTime`. Time: O(N*M), Space: O(N*M)."
    },
    {
        id: "graph-10", name: "Flood fill algorithm", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/flood-fill/", gfgUrl: "https://www.geeksforgeeks.org/problems/flood-fill-algorithm1856/1", cnUrl: "https://www.naukri.com/code360/problems/flood-fill-algorithm_893103", companies: ["Amazon", "Google", "Microsoft"],
        statement: "An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image. You are given a coordinate (sr, sc) and a color. Perform a flood fill on the image.",
        examples: [{ input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2", output: "[[2,2,2],[2,2,0],[2,0,1]]" }], constraints: ["1 <= m, n <= 50"],
        hints: ["Use DFS or BFS starting from (sr, sc).", "Only color the cells that have the exact same starting color as image[sr][sc]."],
        approach: "Store `initColor = image[sr][sc]`. If `initColor == color`, return image. DFS/BFS from `(sr, sc)`. Change color. Explore 4 directions if they match `initColor`. Time: O(N*M), Space: O(N*M) recursion stack."
    },
    {
        id: "graph-11", name: "Cycle Detection in Undirected Graph (bfs)", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1", cnUrl: "https://www.naukri.com/code360/problems/detect-cycle-in-an-undirected-graph_758967", companies: ["Amazon", "Microsoft", "Samsung"],
        statement: "Given an undirected graph with V vertices and E edges, check whether it contains any cycle or not using BFS.",
        examples: [{ input: "V = 5, E = 5, adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]", output: "1" }], constraints: ["1 <= V, E <= 10^5"],
        hints: ["During BFS, keep track of the parent node.", "If you encounter a visited node that is NOT the parent of the current node, a cycle exists."],
        approach: "Visited array. Iterate all components. `bfs(src)`: Push `{src, -1}` (node, parent) to queue. Mark visited. Pop. Loop neighbors. If not visited, push `{neighbor, curr}` and mark visited. If visited and `neighbor != parent`, cycle detected (return true). Time: O(V+E), Space: O(V)."
    },
    {
        id: "graph-12", name: "Detect a cycle in an undirected graph (dfs)", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1", cnUrl: "https://www.naukri.com/code360/problems/detect-cycle-in-an-undirected-graph_758967", companies: ["Amazon"],
        statement: "Given an undirected graph with V vertices and E edges, check whether it contains any cycle or not using DFS.",
        examples: [{ input: "V = 5, E = 5, adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]", output: "1" }], constraints: ["1 <= V, E <= 10^5"],
        hints: ["Pass the parent node in the DFS recursive call."],
        approach: "DFS function `dfs(node, parent, vis, adj)`. Mark `vis[node] = true`. Loop neighbors. If `!vis[adjNode]`, call `dfs(adjNode, node)`. If it returns true, return true. Else if `adjNode != parent`, return true. Return false. Call for all components. Time: O(V+E), Space: O(V)."
    },
    {
        id: "graph-13", name: "Distance of nearest cell having one (01 matrix)", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/01-matrix/", gfgUrl: "https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/distance-of-nearest-cell-having-1-in-a-binary-matrix_1169913", companies: ["Google", "Amazon"],
        statement: "Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell. The distance between two adjacent cells is 1.",
        examples: [{ input: "mat = [[0,0,0],[0,1,0],[1,1,1]]", output: "[[0,0,0],[0,1,0],[1,2,1]]" }], constraints: ["1 <= m, n <= 10^4"],
        hints: ["Use multi-source BFS.", "Start BFS from all 0s simultaneously with distance 0."],
        approach: "Create `dist` matrix initialized to infinity. Queue stores `pair<int, int>`. Push all '0's to queue, set `dist[i][j] = 0`. While queue not empty, pop `(r, c)`. Check 4 directions. If `dist[r][c] + 1 < dist[nr][nc]`, update `dist[nr][nc] = dist[r][c] + 1` and push `(nr, nc)` to queue. Time: O(N*M), Space: O(N*M)."
    },
    {
        id: "graph-14", name: "Surrounded Regions", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/surrounded-regions/", gfgUrl: "https://www.geeksforgeeks.org/problems/replace-os-with-xs0052/1", cnUrl: "https://www.naukri.com/code360/problems/replace-o-with-x_1115354", companies: ["Amazon", "Microsoft", "Google"],
        statement: "Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'. A region is captured by flipping all 'O's into 'X's in that surrounded region.",
        examples: [{ input: "board = [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']]", output: "[['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']]" }], constraints: ["1 <= m, n <= 200"],
        hints: ["Any 'O' connected to the boundary cannot be captured.", "Start DFS/BFS from all 'O's on the boundary and mark them as safe."],
        approach: "Traverse boundaries (row 0, row n-1, col 0, col m-1). If `board[i][j] == 'O'`, run DFS to mark it and connected 'O's with a temporary character (e.g., '#'). Then iterate entire board. Change all remaining 'O's to 'X's. Change all '#'s back to 'O'. Time: O(N*M), Space: O(N*M)."
    },
    {
        id: "graph-15", name: "Number of enclaves", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/number-of-enclaves/", gfgUrl: "https://www.geeksforgeeks.org/problems/number-of-enclaves/1", cnUrl: "https://www.naukri.com/code360/problems/matrix-traps_8365440", companies: ["Google", "Amazon"],
        statement: "You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell. Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.",
        examples: [{ input: "grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]", output: "3", explanation: "There are three 1s that are enclosed by 0s." }], constraints: ["1 <= m, n <= 500"],
        hints: ["This is exactly the same logic as 'Surrounded Regions'."],
        approach: "Traverse boundaries. Run DFS from all '1's on boundary and mark them visited (or change to '0'). Iterate entire grid and count the remaining '1's. Time: O(N*M), Space: O(N*M)."
    },
    {
        id: "graph-16", name: "Word ladder I", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/word-ladder/", gfgUrl: "https://www.geeksforgeeks.org/problems/word-ladder/1", cnUrl: "https://www.naukri.com/code360/problems/word-ladder_1102319", companies: ["Amazon", "Google", "Facebook"],
        statement: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair differs by a single letter. Return the number of words in the shortest transformation sequence.",
        examples: [{ input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']", output: "5", explanation: "hit -> hot -> dot -> dog -> cog" }], constraints: ["1 <= beginWord.length <= 10"],
        hints: ["Shortest path in an unweighted graph -> BFS.", "For the current word, try replacing every character with 'a' to 'z' and check if the new word is in the dictionary."],
        approach: "Store `wordList` in a HashSet. Queue BFS storing `pair<string, int>` (word, steps). Push `{beginWord, 1}`. Erase `beginWord` from set. While queue not empty: pop `(word, steps)`. If `word == endWord` return steps. Loop each char in `word`, try 'a'-'z'. If `newWord` exists in set, push `{newWord, steps+1}`, erase from set. Time: O(N * L * 26) where L is word length, Space: O(N)."
    },
    {
        id: "graph-17", name: "Word ladder II", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/word-ladder-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/word-ladder-ii/1", cnUrl: "https://www.naukri.com/code360/problems/word-ladder-ii_8366158", companies: ["Amazon", "Google"],
        statement: "Return all the shortest transformation sequences from beginWord to endWord. Each sequence should be returned as a list of words.",
        examples: [{ input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']", output: "[['hit','hot','dot','dog','cog'],['hit','hot','lot','log','cog']]" }], constraints: ["1 <= wordList.length <= 100"],
        hints: ["Since you need ALL paths, standard BFS storing the whole path in the queue will get a Memory Limit Exceeded.", "Optimized Approach: BFS to find the shortest distance from beginWord to every word, then DFS backtracking from endWord to beginWord to construct paths."],
        approach: "BFS: Map `mpp[word] = steps`. Push `beginWord` with step 1. For each node, try 'a'-'z'. If in dict and `mpp.find(newWord) == mpp.end()`, `mpp[newWord] = steps+1`, push to queue. DFS: start from `endWord`. Try 'a'-'z'. If `mpp[newWord] == mpp[currWord] - 1`, append to path and recurse. Add to answer when `currWord == beginWord`. Time: O(N * L * 26 + Paths * L)."
    },
    {
        id: "graph-18", name: "Number of islands", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/number-of-islands/", gfgUrl: "https://www.geeksforgeeks.org/problems/find-the-number-of-islands/1", cnUrl: "https://www.naukri.com/code360/problems/find-number-of-islands_630512", companies: ["Amazon", "Microsoft", "Google", "Facebook"],
        statement: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
        examples: [{ input: "grid = [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]", output: "3" }], constraints: ["1 <= m, n <= 300"],
        hints: ["Iterate over the matrix. When you find a '1', increment the island count and start a DFS/BFS to sink the island (turn '1's to '0's)."],
        approach: "Loop grid. If `grid[i][j] == '1'`, `count++`, call `dfs(i, j)`. DFS checks bounds and `grid[r][c] == '1'`, then sets `grid[r][c] = '0'` and recursively calls 4 directions. Time: O(N*M), Space: O(N*M)."
    },
    {
        id: "graph-19", name: "Bipartite Graph (DFS/BFS)", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/is-graph-bipartite/", gfgUrl: "https://www.geeksforgeeks.org/problems/bipartite-graph/1", cnUrl: "https://www.naukri.com/code360/problems/bipartite-graph_920551", companies: ["Amazon", "Google", "Microsoft"],
        statement: "There is an undirected graph with n nodes. A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge connects a node in A and a node in B. Determine if the graph is bipartite.",
        examples: [{ input: "graph = [[1,3],[0,2],[1,3],[0,2]]", output: "true" }], constraints: ["1 <= graph.length <= 100"],
        hints: ["Use Graph Coloring with 2 colors (0 and 1).", "If you color a node 0, all its neighbors must be colored 1."],
        approach: "Array `color` initialized to -1. Loop components. For uncolored node, `color[i] = 0`, queue push. BFS: pop `node`, loop neighbors. If `color[neighbor] == -1`, `color[neighbor] = 1 - color[node]`, push. Else if `color[neighbor] == color[node]`, return false. Return true at end. Time: O(V+E), Space: O(V)."
    },
    {
        id: "graph-20", name: "Cycle Detection in Directed Graph (DFS)", module: "Graphs [Concepts & Problems]", subModule: "Problems on BFS/DFS", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/course-schedule/", gfgUrl: "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1", cnUrl: "https://www.naukri.com/code360/problems/detect-cycle-in-a-directed-graph_1062626", companies: ["Amazon", "Microsoft"],
        statement: "Given a Directed Graph with V vertices and E edges, check whether it contains any cycle or not.",
        examples: [{ input: "V = 4, E = 4, edges = [[0,1], [1,2], [2,3], [3,1]]", output: "1" }], constraints: ["1 <= V, E <= 10^5"],
        hints: ["In a directed graph, a cross-edge doesn't necessarily mean a cycle.", "You must keep track of the nodes in the CURRENT recursion path. If you revisit a node in the same path, there's a cycle."],
        approach: "DFS. Maintain `vis` array and `pathVis` array. `dfs(node)`: `vis[node] = 1`, `pathVis[node] = 1`. Loop neighbors. If `!vis[neighbor]`, if `dfs(neighbor)` return true. Else if `pathVis[neighbor] == 1`, return true. End of DFS: `pathVis[node] = 0`. Time: O(V+E), Space: O(V)."
    },

    // Topo Sort and Problems
    {
        id: "graph-21", name: "Topo Sort", module: "Graphs [Concepts & Problems]", subModule: "Topo Sort and Problems", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/topological-sort/1", cnUrl: "https://www.naukri.com/code360/problems/topological-sorting_973003", companies: ["Amazon", "Microsoft", "Google"],
        statement: "Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph. (A linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v in the ordering).",
        examples: [{ input: "V = 4, edges = [[1,0], [2,0], [3,0]]", output: "[1, 2, 3, 0]" }], constraints: ["1 <= V <= 10^4"],
        hints: ["Use DFS and a Stack.", "Only push the node to the stack AFTER all its neighbors have been fully explored."],
        approach: "DFS. `dfs(node)`: `vis[node] = 1`. Loop neighbors. If `!vis[neighbor]`, `dfs(neighbor)`. End of DFS: `stack.push(node)`. Finally, pop all from stack to form answer. Time: O(V+E), Space: O(V)."
    },
    {
        id: "graph-22", name: "Topological sort or Kahn's algorithm", module: "Graphs [Concepts & Problems]", subModule: "Topo Sort and Problems", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/topological-sort/1", cnUrl: "https://www.naukri.com/code360/problems/topological-sorting_973003", companies: ["Amazon", "Flipkart"],
        statement: "Implement Topological Sort using BFS (Kahn's Algorithm).",
        examples: [{ input: "V = 4, edges = [[1,0], [2,0], [3,0]]", output: "[1, 2, 3, 0]" }], constraints: ["1 <= V <= 10^4"],
        hints: ["Compute the indegree (number of incoming edges) for each node.", "Nodes with 0 indegree have no dependencies. Push them to the queue first."],
        approach: "Compute `indegree` array. Push all nodes with `indegree == 0` to a queue. While queue not empty: pop `node`, add to `topo` array. Loop neighbors: `indegree[neighbor]--`. If `indegree[neighbor] == 0`, push to queue. Time: O(V+E), Space: O(V)."
    },
    {
        id: "graph-23", name: "Detect a cycle in a directed graph (using Kahn)", module: "Graphs [Concepts & Problems]", subModule: "Topo Sort and Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/course-schedule/", gfgUrl: "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1", cnUrl: "https://www.naukri.com/code360/problems/detect-cycle-in-a-directed-graph_1062626", companies: ["Amazon"],
        statement: "Detect a cycle in a directed graph using Kahn's algorithm (BFS Topo Sort).",
        examples: [{ input: "V = 4, edges = [[0,1], [1,2], [2,3], [3,1]]", output: "1" }], constraints: ["1 <= V <= 10^4"],
        hints: ["Topological sort is only possible for Directed Acyclic Graphs (DAG).", "If Kahn's algorithm produces an array of length < V, a cycle exists."],
        approach: "Apply Kahn's BFS Algorithm. Maintain a `count` of popped nodes. If `count == V`, no cycle (return false). If `count < V`, cycle exists (return true). Time: O(V+E), Space: O(V)."
    },
    {
        id: "graph-24", name: "Course Schedule I", module: "Graphs [Concepts & Problems]", subModule: "Topo Sort and Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/course-schedule/", gfgUrl: "https://www.geeksforgeeks.org/problems/prerequisite-tasks/1", cnUrl: "https://www.naukri.com/code360/problems/course-schedule_2120011", companies: ["Amazon", "Google", "Facebook"],
        statement: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses.",
        examples: [{ input: "numCourses = 2, prerequisites = [[1,0]]", output: "true" }], constraints: ["1 <= numCourses <= 2000"],
        hints: ["This is a direct application of cycle detection in a directed graph.", "If there's a cycle of dependencies, you can't finish the courses."],
        approach: "Build adjacency list from prerequisites. Use Kahn's Algorithm (BFS) or DFS cycle detection. If cycle exists, return false. Time: O(V+E), Space: O(V+E)."
    },
    {
        id: "graph-25", name: "Course Schedule II", module: "Graphs [Concepts & Problems]", subModule: "Topo Sort and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/course-schedule-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/course-schedule/1", cnUrl: "https://www.naukri.com/code360/problems/course-schedule-ii_1069243", companies: ["Amazon", "Microsoft"],
        statement: "Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.",
        examples: [{ input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]", output: "[0,2,1,3]" }], constraints: ["1 <= numCourses <= 2000"],
        hints: ["This is a direct application of Topological Sort.", "Kahn's Algorithm naturally outputs the correct valid order."],
        approach: "Build adj list. Compute indegrees. Push 0 indegree nodes to queue. BFS: pop, add to `ans`, reduce neighbor indegrees, push if 0. If `ans.size() == numCourses`, return `ans`. Else return `[]`. Time: O(V+E), Space: O(V+E)."
    },
    {
        id: "graph-26", name: "Find eventual safe states", module: "Graphs [Concepts & Problems]", subModule: "Topo Sort and Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/find-eventual-safe-states/", gfgUrl: "https://www.geeksforgeeks.org/problems/eventual-safe-states/1", cnUrl: "https://www.naukri.com/code360/problems/safe-nodes-in-a-graph_1376703", companies: ["Amazon"],
        statement: "A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node). Return an array containing all the safe nodes of the graph in ascending order.",
        examples: [{ input: "graph = [[1,2],[2,3],[5],[0],[5],[],[]]", output: "[2,4,5,6]" }], constraints: ["1 <= graph.length <= 10^4"],
        hints: ["Nodes that are part of a cycle, or point to a cycle, are NOT safe.", "You can use DFS (pathVis detects cycles) or BFS (Kahn's algorithm on the REVERSED graph)."],
        approach: "BFS (Kahn's): Reverse all edges in the graph. Terminal nodes now have indegree 0. Run Kahn's algorithm. All nodes that get popped from the queue are safe nodes. Sort the result. Time: O(V+E), Space: O(V+E)."
    },
    {
        id: "graph-27", name: "Alien Dictionary", module: "Graphs [Concepts & Problems]", subModule: "Topo Sort and Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/alien-dictionary/", gfgUrl: "https://www.geeksforgeeks.org/problems/alien-dictionary/1", cnUrl: "https://www.naukri.com/code360/problems/alien-dictionary_316939", companies: ["Amazon", "Facebook", "Microsoft"],
        statement: "Given a sorted dictionary of an alien language having N words and k starting alphabets of standard dictionary. Find the order of characters in the alien language.",
        examples: [{ input: "N = 5, K = 4, dict = {'baa','abcd','abca','cab','cad'}", output: "b d a c" }], constraints: ["1 <= N <= 10^4"],
        hints: ["Compare adjacent words in the dictionary to find precedence rules.", "If `word1` comes before `word2` and `word1[i] != word2[i]`, then `word1[i]` comes before `word2[i]` in the alphabet."],
        approach: "Create directed graph. Compare `dict[i]` and `dict[i+1]`. First differing char: add edge `u -> v` and break. Run Kahn's Algorithm to get Topological Sort. Return string. Edge case: If `word1` is prefix of `word2` but `word1` > `word2` in length, order is invalid. Time: O(N * L + K), Space: O(K + E)."
    },


    // Shortest Path Algorithms and Problems
    {
        id: "graph-28", name: "Shortest path in undirected graph with unit weights", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1", cnUrl: "https://www.naukri.com/code360/problems/shortest-path-in-an-unweighted-graph_981297", companies: ["Amazon", "Microsoft"],
        statement: "You are given an Undirected Graph having unit weight, Find the shortest path from src to all the vertex and if it is unreachable to reach any vertex, then return -1 for that vertex.",
        examples: [{ input: "N = 9, M = 10, edges = [[0,1],[0,3],[3,4],[4,5],[5,6],[1,2],[2,6],[6,7],[7,8],[6,8]], src = 0", output: "0 1 2 1 2 3 3 4 4" }], constraints: ["1 <= N <= 10^4", "1 <= M <= 10^4"],
        hints: ["Since all edges have unit weight, simple BFS is guaranteed to find the shortest path."],
        approach: "Queue BFS. Create `dist` array initialized to infinity. `dist[src] = 0`. Push `src` to queue. While queue not empty, pop `node`. Loop neighbors. If `dist[node] + 1 < dist[neighbor]`, update `dist[neighbor] = dist[node] + 1` and push `neighbor` to queue. Time: O(V+E), Space: O(V+E)."
    },
    {
        id: "graph-29", name: "Shortest path in DAG", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1", cnUrl: "https://www.naukri.com/code360/problems/shortest-path-in-dag_8381897", companies: ["Amazon"],
        statement: "Given a Directed Acyclic Graph of N vertices and M edges. Find the shortest path from vertex 0 to all the vertices. If impossible, return -1.",
        examples: [{ input: "N = 6, M = 7, edges = [[0,1,2],[0,4,1],[4,5,4],[4,2,2],[1,2,3],[2,3,6],[5,3,1]]", output: "0 2 3 6 1 5" }], constraints: ["1 <= N <= 10^4"],
        hints: ["Since it's a DAG, you can find the Topological Sort first.", "Process vertices in topological order to relax their edges."],
        approach: "Find Topological Sort using DFS (store in stack). Create `dist` array initialized to infinity, `dist[src] = 0`. Pop nodes from stack. If `dist[node] != inf`, loop neighbors. If `dist[node] + wt < dist[neighbor]`, update `dist[neighbor]`. Time: O(V+E), Space: O(V+E)."
    },
    {
        id: "graph-30", name: "Djisktra's Algorithm", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1", cnUrl: "https://www.naukri.com/code360/problems/dijkstra-s-shortest-path_920469", companies: ["Amazon", "Microsoft", "Google"],
        statement: "Given a weighted, undirected and connected graph of V vertices and E edges, Find the shortest distance of all the vertex's from the source vertex S.",
        examples: [{ input: "V = 2, E = 1, edges = [[0,1,9]], S = 0", output: "0 9" }], constraints: ["1 <= V <= 1000", "0 <= wt <= 1000"],
        hints: ["Use a Min-Heap (Priority Queue) to always process the node with the current shortest distance.", "Dijkstra's does not work with negative weight edges."],
        approach: "Min-Heap storing `pair<dist, node>`. `dist` array initialized to inf. `dist[S] = 0`, push `{0, S}`. While PQ not empty: pop `{d, u}`. Loop neighbors `v` with weight `w`. If `d + w < dist[v]`, `dist[v] = d + w`, push `{dist[v], v}` to PQ. Time: O(E log V), Space: O(V+E)."
    },
    {
        id: "graph-31", name: "Why priority Queue is used in Djisktra's Algorithm", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Easy",
        lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
        statement: "Theory: Understand why Dijkstra uses a Priority Queue instead of a normal Queue.",
        examples: [], constraints: [], hints: ["Using a normal queue requires exploring all paths, leading to O(V^2) or worse.", "PQ ensures we process the shortest known path first, locking in the minimum distance."],
        approach: "Theoretical concept: PQ guarantees that the first time we visit a node, we have found its absolute shortest path (assuming non-negative edges)."
    },
    {
        id: "graph-32", name: "Shortest Distance in a Binary Maze", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", gfgUrl: "https://www.geeksforgeeks.org/problems/shortest-path-in-a-binary-maze-1655453161/1", cnUrl: "https://www.naukri.com/code360/problems/shortest-path-in-a-binary-maze_893065", companies: ["Amazon", "Facebook"],
        statement: "Given an n x n binary matrix grid, return the length of the shortest clear path from the top-left to the bottom-right. A clear path is a sequence of 0s connected 8-directionally.",
        examples: [{ input: "grid = [[0,0,0],[1,1,0],[1,1,0]]", output: "4" }], constraints: ["1 <= n <= 100", "grid[i][j] is 0 or 1"],
        hints: ["Since edge weights are essentially 1 (each step is 1), use a standard Queue for BFS instead of a Priority Queue.", "Check all 8 directions."],
        approach: "Queue BFS storing `pair<dist, pair<r, c>>`. `dist` matrix initialized to inf. If `grid[0][0] == 1` return -1. Push `{1, {0,0}}`. Loop 8 directions. If valid, `grid[nr][nc] == 0`, and `dist + 1 < distMat[nr][nc]`, update `distMat`, push to queue. Time: O(N^2), Space: O(N^2)."
    },
    {
        id: "graph-33", name: "Path with minimum effort", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/path-with-minimum-effort/", gfgUrl: "https://www.geeksforgeeks.org/problems/path-with-minimum-effort/1", cnUrl: "https://www.naukri.com/code360/problems/path-with-minimum-effort_1380958", companies: ["Google", "Amazon"],
        statement: "You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). The effort of a path is the maximum absolute difference in heights between two consecutive cells of the path. Return the minimum effort required.",
        examples: [{ input: "heights = [[1,2,2],[3,8,2],[5,3,5]]", output: "2" }], constraints: ["1 <= rows, columns <= 100", "1 <= heights[i][j] <= 10^6"],
        hints: ["Use Dijkstra's Algorithm.", "Instead of adding weights, the new effort to reach a neighbor is `max(current_effort, abs(height_diff))`."],
        approach: "Min-Heap storing `{effort, {r, c}}`. `effortMat` initialized to inf. Push `{0, {0,0}}`. Pop `{eff, {r, c}}`. If `r == N-1 && c == M-1` return `eff`. Loop 4 dirs. `newEffort = max(eff, abs(heights[r][c] - heights[nr][nc]))`. If `newEffort < effortMat[nr][nc]`, update and push. Time: O(E log V) -> O(N*M log(N*M)), Space: O(N*M)."
    },
    {
        id: "graph-34", name: "Cheapest flight within K stops", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", gfgUrl: "https://www.geeksforgeeks.org/problems/cheapest-flights-within-k-stops/1", cnUrl: "https://www.naukri.com/code360/problems/cheapest-flights-within-k-stops_8230713", companies: ["Amazon", "Google", "Airbnb"],
        statement: "There are n cities connected by some number of flights. You are given an array flights where flights[i] = [from_i, to_i, price_i]. Return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.",
        examples: [{ input: "n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1", output: "200" }], constraints: ["1 <= n <= 100"],
        hints: ["Use BFS with a normal Queue. Sort the queue by number of STOPS, not by distance.", "If you use a Priority Queue sorting by distance, you might reach a node with fewer distance but too many stops."],
        approach: "Queue storing `{stops, {node, dist}}`. `dist` array initialized to inf. Push `{0, {src, 0}}`. While queue not empty, pop `{stops, {u, d}}`. If `stops > k` continue. Loop neighbors `v` with weight `w`. If `d + w < dist[v]`, `dist[v] = d + w`, push `{stops+1, {v, dist[v]}}`. Return `dist[dst]`. Time: O(E), Space: O(V+E)."
    },
    {
        id: "graph-35", name: "Network Delay Time", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/network-delay-time/", gfgUrl: "https://www.geeksforgeeks.org/problems/network-delay-time/1", cnUrl: "https://www.naukri.com/code360/problems/network-delay-time_1380945", companies: ["Amazon", "Google", "Microsoft"],
        statement: "You are given a network of n nodes, labeled from 1 to n. You are given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel. Return the minimum time it takes for all n nodes to receive the signal.",
        examples: [{ input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2", output: "2" }], constraints: ["1 <= n <= 100", "1 <= times.length <= 6000"],
        hints: ["This is a direct application of Dijkstra's Algorithm.", "The answer is the maximum distance among all shortest paths from the source node."],
        approach: "Dijkstra's Algo. `dist` array initialized to inf. Min-Heap. After running Dijkstra, find the max value in the `dist` array. If any node has `dist == inf`, return -1. Else return max. Time: O(E log V), Space: O(V+E)."
    },
    {
        id: "graph-36", name: "Number of ways to arrive at destination", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/", gfgUrl: "https://www.geeksforgeeks.org/problems/number-of-ways-to-arrive-at-destination/1", cnUrl: "https://www.naukri.com/code360/problems/number-of-ways-to-arrive-at-destination_1483864", companies: ["Amazon", "Microsoft"],
        statement: "You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads. Return the number of ways you can travel from intersection 0 to intersection n - 1 in the shortest amount of time modulo 10^9 + 7.",
        examples: [{ input: "n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]", output: "4" }], constraints: ["1 <= n <= 200"],
        hints: ["Use Dijkstra's Algorithm.", "Maintain a `ways` array along with the `dist` array."],
        approach: "`dist` array to inf, `ways` array to 0. `dist[0] = 0`, `ways[0] = 1`. Min-Heap `{d, u}`. Loop neighbors `{v, w}`. If `d + w < dist[v]`: `dist[v] = d + w`, `ways[v] = ways[u]`, push to PQ. Else if `d + w == dist[v]`: `ways[v] = (ways[v] + ways[u]) % MOD`. Return `ways[n-1]`. Time: O(E log V), Space: O(V+E)."
    },
    {
        id: "graph-37", name: "Minimum multiplications to reach end", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-multiplications-to-reach-end/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-operations_8360665", companies: ["Amazon"],
        statement: "Given start, end and an array arr of n numbers. At each step, start is multiplied with any number in the array and then modulo 100000 is taken. Find the minimum steps to reach end.",
        examples: [{ input: "arr = [2, 5, 7], start = 3, end = 30", output: "2", explanation: "3 * 2 = 6. 6 * 5 = 30. (2 steps)." }], constraints: ["1 <= arr.length <= 10^4", "0 <= start, end <= 99999"],
        hints: ["Use BFS with a queue. The nodes are the numbers from 0 to 99999.", "The edges are the multiplications modulo 100000. Weight of every edge is 1."],
        approach: "Queue storing `{steps, node}`. `dist` array of size 100000 initialized to inf. `dist[start] = 0`. Push `{0, start}`. While queue not empty, pop `{steps, node}`. If `node == end` return `steps`. Loop `x` in `arr`. `nxt = (node * x) % 100000`. If `steps + 1 < dist[nxt]`, `dist[nxt] = steps + 1`, push `{steps+1, nxt}`. Time: O(100000 * N), Space: O(100000)."
    },
    {
        id: "graph-38", name: "Bellman Ford Algorithm", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1", cnUrl: "https://www.naukri.com/code360/problems/bellman-ford_2041977", companies: ["Amazon", "Microsoft"],
        statement: "Given a weighted, directed and connected graph of V vertices and E edges, Find the shortest distance of all the vertex's from the source vertex S. If the graph contains a negative weight cycle, return a list containing -1.",
        examples: [{ input: "V = 3, edges = [[0,1,5],[1,0,3],[1,2,-1],[2,0,1]], S = 2", output: "1 6 0" }], constraints: ["1 <= V <= 500", "1 <= E <= V*(V-1)"],
        hints: ["Dijkstra fails on negative weights. Bellman Ford relaxes ALL edges V-1 times.", "If the distances update on the V-th relaxation, a negative cycle exists."],
        approach: "`dist` array initialized to inf. `dist[S] = 0`. Loop `V-1` times: for each edge `(u, v, wt)`, if `dist[u] != inf && dist[u] + wt < dist[v]`, `dist[v] = dist[u] + wt`. N-th iteration: if any distance updates, return `{-1}` (Negative Cycle). Time: O(V*E), Space: O(V)."
    },
    {
        id: "graph-39", name: "Floyd warshall algorithm", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1", cnUrl: "https://www.naukri.com/code360/problems/floyd-warshall_2041979", companies: ["Samsung", "Amazon", "Microsoft"],
        statement: "The problem is to find shortest distances between every pair of vertices in a given edge weighted directed Graph. The Graph is represented as an adjacency matrix, and the matrix denotes the weight of the edges. -1 means no edge.",
        examples: [{ input: "matrix = [[0,25],[-1,0]]", output: "[[0,25],[-1,0]]" }], constraints: ["1 <= V <= 100"],
        hints: ["Multi-source shortest path algorithm.", "Try routing the path between every pair of nodes `i` and `j` via an intermediate node `k`."],
        approach: "Convert `-1` in matrix to `1e9`. Loop `k` from 0 to V-1. Loop `i` from 0 to V-1. Loop `j` from 0 to V-1. `matrix[i][j] = min(matrix[i][j], matrix[i][k] + matrix[k][j])`. Convert `1e9` back to `-1`. If `matrix[i][i] < 0`, negative cycle exists. Time: O(V^3), Space: O(V^2)."
    },
    {
        id: "graph-40", name: "Find the city with the smallest number of neighbors", module: "Graphs [Concepts & Problems]", subModule: "Shortest Path Algorithms and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/", gfgUrl: "https://www.geeksforgeeks.org/problems/city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/1", cnUrl: "https://www.naukri.com/code360/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance_1171173", companies: ["Amazon", "Microsoft"],
        statement: "There are n cities numbered from 0 to n-1. Given the array edges where edges[i] = [fromi, toi, weighti] and an integer distanceThreshold. Return the city with the smallest number of cities that are reachable through some path and whose distance is at most distanceThreshold. If there are multiple such cities, return the city with the greatest number.",
        examples: [{ input: "n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4", output: "3" }], constraints: ["2 <= n <= 100"],
        hints: ["Run Floyd-Warshall to find the shortest path between all pairs of cities.", "Count how many cities are within the threshold for each city."],
        approach: "Floyd Warshall to populate `dist` matrix. Iterate `i` from 0 to `n-1`. Count reachable cities `cnt`. If `cnt <= minReachable`, `minReachable = cnt`, `ansNode = i`. Return `ansNode`. Time: O(V^3), Space: O(V^2)."
    },

    // MinimumSpanningTree/Disjoint Set and Problems
    {
        id: "graph-41", name: "MST theory", module: "Graphs [Concepts & Problems]", subModule: "MinimumSpanningTree/Disjoint Set and Problems", difficulty: "Easy",
        lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
        statement: "Understand the definition of a Minimum Spanning Tree (MST): A spanning tree is a subgraph that contains all the vertices and is a tree. A minimum spanning tree is a spanning tree with the minimum possible total edge weight.",
        examples: [], constraints: [], hints: ["A graph with V vertices has an MST with exactly V-1 edges."],
        approach: "Theoretical understanding of Prim's and Kruskal's algorithms."
    },
    {
        id: "graph-42", name: "Prim's Algorithm", module: "Graphs [Concepts & Problems]", subModule: "MinimumSpanningTree/Disjoint Set and Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", cnUrl: "https://www.naukri.com/code360/problems/prim-s-mst_1095633", companies: ["Amazon", "Microsoft"],
        statement: "Given a weighted, undirected and connected graph of V vertices and E edges. Find the sum of weights of the edges of the Minimum Spanning Tree.",
        examples: [{ input: "V = 3, E = 3, edges = [[0,1,5], [1,2,3], [0,2,1]]", output: "4" }], constraints: ["2 <= V <= 1000"],
        hints: ["Use a Min-Heap storing `(weight, node)`.", "Start with node 0, add it to MST, push its edges to the heap, and repeatedly pick the minimum weight edge that leads to an unvisited node."],
        approach: "Min-Heap `{wt, node}`. `vis` array. `sum = 0`. Push `{0, 0}`. While PQ not empty: pop `{wt, node}`. If `vis[node]` continue. `vis[node] = 1`. `sum += wt`. Loop neighbors `(v, edgeWt)`. If `!vis[v]`, push `{edgeWt, v}`. Time: O(E log E), Space: O(V+E)."
    },
    {
        id: "graph-43", name: "Disjoint Set", module: "Graphs [Concepts & Problems]", subModule: "MinimumSpanningTree/Disjoint Set and Problems", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1", cnUrl: "https://www.naukri.com/code360/problems/disjoint-set_8358245", companies: ["Amazon", "Google", "Microsoft"],
        statement: "Implement a Disjoint Set Data Structure supporting `findParent` and `unionBySize` (or `unionByRank`) with Path Compression.",
        examples: [], constraints: ["1 <= queries <= 10^5"],
        hints: ["Path Compression: `if (node == parent[node]) return node; return parent[node] = findUPar(parent[node])`.", "Union by Rank/Size ensures the tree stays shallow."],
        approach: "Initialize `parent` and `size` arrays. `findUPar(node)`: Recursive with path compression. `unionBySize(u, v)`: `ul_u = findUPar(u), ul_v = findUPar(v)`. If `ul_u == ul_v` return. If `size[ul_u] < size[ul_v]`, `parent[ul_u] = ul_v`, `size[ul_v] += size[ul_u]`. Else swap logic. Time: O(4 * alpha) ~ O(1) per query."
    },
    {
        id: "graph-44", name: "Find the MST weight (Kruskal's Algorithm)", module: "Graphs [Concepts & Problems]", subModule: "MinimumSpanningTree/Disjoint Set and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/min-cost-to-connect-all-points/", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1", cnUrl: "https://www.naukri.com/code360/problems/kruskal-s-minimum-spanning-tree-algorithm_1082553", companies: ["Amazon", "Microsoft"],
        statement: "Find the Minimum Spanning Tree weight using Kruskal's algorithm.",
        examples: [{ input: "V = 3, edges = [[0,1,5], [1,2,3], [0,2,1]]", output: "4" }], constraints: ["2 <= V <= 1000"],
        hints: ["Sort all edges by weight.", "Use a Disjoint Set. Iterate sorted edges, if `u` and `v` belong to different sets, add the edge weight to total and union them."],
        approach: "Store edges as `(wt, u, v)`. Sort edges by `wt`. Initialize Disjoint Set. `mstWt = 0`. Loop edges: `if (ds.findUPar(u) != ds.findUPar(v))` -> `mstWt += wt`, `ds.unionBySize(u, v)`. Time: O(E log E), Space: O(V+E)."
    },
    {
        id: "graph-45", name: "Number of operations to make network connected", module: "Graphs [Concepts & Problems]", subModule: "MinimumSpanningTree/Disjoint Set and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/", gfgUrl: "https://www.geeksforgeeks.org/problems/connecting-the-graph/1", cnUrl: "https://www.naukri.com/code360/problems/connecting-the-graph_1368940", companies: ["Amazon", "Microsoft"],
        statement: "There are n computers numbered from 0 to n - 1 connected by ethernet cables. You can extract certain cables between two directly connected computers, and place them between any pair. Return the minimum number of times you need to do this in order to make all the computers connected. If it's not possible, return -1.",
        examples: [{ input: "n = 4, connections = [[0,1],[0,2],[1,2]]", output: "1", explanation: "Remove cable between 1 and 2 and place between 1 and 3." }], constraints: ["1 <= n <= 10^5", "1 <= connections.length <= 10^5"],
        hints: ["If `edges < n - 1`, it's impossible to connect all nodes, return -1.", "Every 'extra' edge within a component can be used to connect disconnected components."],
        approach: "Initialize DSU. `extraEdges = 0`. Iterate connections. If `u` and `v` have same parent, `extraEdges++`. Else `union(u, v)`. Count number of connected components `C` by counting nodes where `parent[i] == i`. Minimum operations needed is `C - 1`. If `extraEdges >= C - 1`, return `C - 1`. Else return -1. Time: O(E * alpha), Space: O(V)."
    },
    {
        id: "graph-46", name: "Most stones removed with same row or column", module: "Graphs [Concepts & Problems]", subModule: "MinimumSpanningTree/Disjoint Set and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-stone-removal-1662179442/1", cnUrl: "https://www.naukri.com/code360/problems/remove-most-stones-with-same-row-or-column_1381335", companies: ["Google", "Amazon"],
        statement: "On a 2D plane, we place n stones at some integer coordinate points. A stone can be removed if it shares either the same row or the same column as another stone that has not been removed. Given an array stones, return the largest possible number of stones that can be removed.",
        examples: [{ input: "stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]", output: "5" }], constraints: ["1 <= stones.length <= 1000"],
        hints: ["Think of rows and columns as nodes in a graph. A stone connects a row-node and a col-node.", "Total stones removed = Total stones - Number of connected components."],
        approach: "Treat rows 0..maxRow and cols maxRow+1..maxRow+maxCol as nodes. Initialize DSU. For each stone `(r, c)`, union `r` and `c + maxRow + 1`. Insert both nodes into a set `validNodes`. Total connected components = sum of `findParent(i) == i` for `i` in `validNodes`. Answer = `n - components`. Time: O(N * alpha), Space: O(MaxRow + MaxCol)."
    },
    {
        id: "graph-47", name: "Accounts merge", module: "Graphs [Concepts & Problems]", subModule: "MinimumSpanningTree/Disjoint Set and Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/accounts-merge/", gfgUrl: "https://www.geeksforgeeks.org/problems/account-merge/1", cnUrl: "https://www.naukri.com/code360/problems/accounts-merge_3177372", companies: ["Amazon", "Facebook", "Google"],
        statement: "Given a list of accounts where each element accounts[i] is a list of strings, where the first element is a name, and the rest are emails. Merge accounts that share at least one email.",
        examples: [{ input: "accounts = [['John','johnsmith@mail.com','john_newyork@mail.com'],['John','johnsmith@mail.com','john00@mail.com'],['Mary','mary@mail.com']]", output: "[['John','john00@mail.com','john_newyork@mail.com','johnsmith@mail.com'],['Mary','mary@mail.com']]" }], constraints: ["1 <= accounts.length <= 1000"],
        hints: ["Use a DSU. The nodes are the indices of the accounts (0 to N-1).", "Use a hash map to map each email to the account index that first introduced it."],
        approach: "DSU size N. `map<string, int> mailNode`. Loop accounts. Loop emails. If email in map, `union(i, map[email])`. Else `map[email] = i`. Create `vector<string> mergedMails[N]`. Loop map, `node = findUPar(map[email])`, `mergedMails[node].push_back(email)`. Format final answer, sorting emails. Time: O(N*M log(N*M)), Space: O(N*M)."
    },
    {
        id: "graph-48", name: "Number of islands II", module: "Graphs [Concepts & Problems]", subModule: "MinimumSpanningTree/Disjoint Set and Problems", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/number-of-islands/1", cnUrl: "https://www.naukri.com/code360/problems/number-of-islands-ii_1266048", companies: ["Google", "Amazon"],
        statement: "You are given a grid of size n x m. Initially, all cells are water. You are given Q queries. In each query, a cell (r, c) is turned into land. Return an array containing the number of islands after each query.",
        examples: [{ input: "n = 3, m = 3, queries = [[0,0], [0,1], [1,2], [2,1]]", output: "[1, 2, 3, 4] -> actual answer logic varies based on adjacencies" }], constraints: ["1 <= n, m <= 10^4", "1 <= Q <= 10^4"],
        hints: ["Use a Disjoint Set to dynamically track connected components as new lands are added."],
        approach: "DSU size N*M. `vis` 2D array. `count = 0`. For each query `(r, c)`: If `vis[r][c]` continue. `vis[r][c] = 1`, `count++`. Loop 4 dirs. If `nr, nc` valid and `vis[nr][nc] == 1`: `node = r*M + c`, `adjNode = nr*M + nc`. If `findUPar(node) != findUPar(adjNode)`, `union(node, adjNode)`, `count--`. Push `count` to ans. Time: O(Q * alpha), Space: O(N*M)."
    },
    {
        id: "graph-49", name: "Making a large island", module: "Graphs [Concepts & Problems]", subModule: "MinimumSpanningTree/Disjoint Set and Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/making-a-large-island/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-connected-group/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-connected-group_3142880", companies: ["Microsoft", "Facebook"],
        statement: "You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1. Return the size of the largest island in grid after applying this operation.",
        examples: [{ input: "grid = [[1,0],[0,1]]", output: "3", explanation: "Change one 0 to 1 and connect two 1s, then we get an island with area = 3." }], constraints: ["n == grid.length == grid[i].length", "1 <= n <= 500"],
        hints: ["First pass: connect all 1s using DSU and calculate the size of each component.", "Second pass: for each 0, check its 4 neighbors, sum the sizes of their unique parent components, and add 1."],
        approach: "DSU size N*N. Pass 1: Loop grid. If 1, check 4 dirs. If neighbor is 1, `union(node, adjNode)`. Pass 2: `maxi = 0`. Loop grid. If 0, check 4 dirs. For valid 1 neighbors, store their `findUPar` in a `set` (to avoid duplicates). `size = 1 + sum(size[parents])`. `maxi = max(maxi, size)`. Edge case: If grid is all 1s, `maxi = N*N`. Time: O(N^2), Space: O(N^2)."
    },
    {
        id: "graph-50", name: "Swim in Rising Water", module: "Graphs [Concepts & Problems]", subModule: "MinimumSpanningTree/Disjoint Set and Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/swim-in-rising-water/", gfgUrl: "https://www.geeksforgeeks.org/problems/swim-in-rising-water/1", cnUrl: "https://www.naukri.com/code360/problems/swim-in-rising-water_1381333", companies: ["Google", "Amazon"],
        statement: "You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point. Water levels rise to `t` at time `t`. You can swim to a 4-directionally adjacent cell if its elevation is <= `t`. Return the minimum time until you can reach the bottom-right square from the top-left square.",
        examples: [{ input: "grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]", output: "16" }], constraints: ["n == grid.length == grid[i].length", "1 <= n <= 50", "0 <= grid[i][j] < n^2"],
        hints: ["This is a shortest path problem where the path cost is the MAXIMUM edge weight along the path.", "Use Dijkstra's algorithm with a Min-Heap."],
        approach: "Min-Heap storing `{max_height, {r, c}}`. `vis` array. Push `{grid[0][0], {0,0}}`. Mark visited. While PQ not empty: pop `{t, {r, c}}`. If `r == n-1 && c == n-1` return `t`. Loop 4 dirs. If valid and `!vis`, `new_t = max(t, grid[nr][nc])`, mark visited, push `{new_t, {nr, nc}}`. Time: O(N^2 log N), Space: O(N^2)."
    },

    // Other Algorithms
    {
        id: "graph-51", name: "Bridges in graph", module: "Graphs [Concepts & Problems]", subModule: "Other Algorithms", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/critical-connections-in-a-network/", gfgUrl: "https://www.geeksforgeeks.org/problems/bridge-edge-in-graph/1", cnUrl: "https://www.naukri.com/code360/problems/bridges-in-graph_893026", companies: ["Amazon", "Microsoft", "Facebook"],
        statement: "Given an undirected graph, find all the bridges. A bridge is any edge whose removal increases the number of connected components.",
        examples: [{ input: "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]", output: "[[1,3]]" }], constraints: ["1 <= n <= 10^5", "1 <= connections.length <= 10^5"],
        hints: ["Use Tarjan's Algorithm.", "Maintain `timeOfInsertion` and `lowestTimeOfInsertion` arrays."],
        approach: "DFS. Maintain `timer`. `tin[node] = low[node] = timer++`. Loop neighbors. If `neighbor == parent` continue. If `vis[neighbor]`, `low[node] = min(low[node], low[neighbor])`. Else: `dfs(neighbor)`. `low[node] = min(low[node], low[neighbor])`. If `low[neighbor] > tin[node]`, the edge `(node, neighbor)` is a bridge. Time: O(V+E), Space: O(V)."
    },
    {
        id: "graph-52", name: "Articulation point in graph", module: "Graphs [Concepts & Problems]", subModule: "Other Algorithms", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/articulation-point-1/1", cnUrl: "https://www.naukri.com/code360/problems/articulation-point_1092820", companies: ["Amazon", "Microsoft"],
        statement: "Given an undirected connected graph, find all articulation points. An articulation point is a vertex whose removal increases the number of connected components.",
        examples: [{ input: "V = 5, edges = [[0,1],[1,4],[2,4],[2,3],[3,4]]", output: "4" }], constraints: ["1 <= V <= 10^4"],
        hints: ["Similar to Tarjan's for Bridges, but condition changes to `low[neighbor] >= tin[node]`.", "Handle the starting node of DFS separately: it's an AP if it has >1 independent children."],
        approach: "DFS. `tin[node] = low[node] = timer++`. `child = 0`. Loop neighbors. If `neighbor == parent` continue. If `vis[neighbor]`, `low[node] = min(low[node], tin[neighbor])` (Notice `tin` instead of `low`). Else: `dfs(neighbor)`, `low[node] = min(low[node], low[neighbor])`, `if (low[neighbor] >= tin[node] && parent != -1)` mark `node` as AP. `child++`. If `parent == -1 && child > 1`, mark `node` as AP. Time: O(V+E), Space: O(V)."
    },
    {
        id: "graph-53", name: "Kosaraju's algorithm", module: "Graphs [Concepts & Problems]", subModule: "Other Algorithms", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1", cnUrl: "https://www.naukri.com/code360/problems/strongly-connected-components-tarjan-s-algo_1313981", companies: ["Amazon", "Google", "Facebook"],
        statement: "Given a Directed Graph, find the number of Strongly Connected Components (SCCs). An SCC is a maximal subgraph where every vertex is reachable from every other vertex.",
        examples: [{ input: "V = 5, edges = [[1,0],[0,2],[2,1],[0,3],[3,4]]", output: "3" }], constraints: ["1 <= V <= 5000"],
        hints: ["Use Kosaraju's Algorithm. Step 1: Sort nodes by finishing time. Step 2: Reverse the graph. Step 3: Do DFS according to the sorted finishing time."],
        approach: "1) DFS on original graph, push nodes to a `stack` on finishing. 2) Reverse all edges to form a transposed graph `adjT`. 3) Reset `vis`. While stack not empty: pop `node`. If `!vis[node]`, `sccCount++`, run DFS on `adjT` starting from `node`. Time: O(V+E), Space: O(V+E)."
    },



    // ════════════════════════════════════════════════════════════════════════
    // DYNAMIC PROGRAMMING [Patterns and Problems]
    // ════════════════════════════════════════════════════════════════════════

    // Introduction to DP
    {
        id: "dp-01", name: "Introduction to DP", module: "Dynamic Programming [Patterns and Problems]", subModule: "Introduction to DP", difficulty: "Easy",
        lcUrl: "https://leetcode.com/problems/fibonacci-number/", gfgUrl: "https://www.geeksforgeeks.org/problems/nth-fibonacci-number1335/1", cnUrl: "https://www.naukri.com/code360/problems/nth-fibonacci-number_74156", companies: ["Amazon", "Microsoft"],
        statement: "Understand the core concepts of Dynamic Programming: Memoization (Top-Down) and Tabulation (Bottom-Up) by solving the Fibonacci sequence.",
        examples: [{ input: "n = 5", output: "5", explanation: "F(5) = F(4) + F(3) = 3 + 2 = 5." }], constraints: ["0 <= n <= 30"],
        hints: ["Overlapping subproblems can be cached using an array.", "To optimize space to O(1), just keep track of the last two computed values."],
        approach: "Tabulation: `dp[i] = dp[i-1] + dp[i-2]`. Space Optimization: `prev2 = 0, prev = 1`. Loop: `curr = prev + prev2; prev2 = prev; prev = curr;`. Time: O(N), Space: O(1)."
    },

    // 1D DP
    {
        id: "dp-02", name: "Climbing stairs", module: "Dynamic Programming [Patterns and Problems]", subModule: "1D DP", difficulty: "Easy",
        lcUrl: "https://leetcode.com/problems/climbing-stairs/", gfgUrl: "https://www.geeksforgeeks.org/problems/count-ways-to-reach-the-nth-stair-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/count-ways-to-reach-nth-stairs_798650", companies: ["Amazon", "Google", "Microsoft"],
        statement: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        examples: [{ input: "n = 3", output: "3", explanation: "1+1+1, 1+2, 2+1" }], constraints: ["1 <= n <= 45"],
        hints: ["This is exactly the Fibonacci sequence, just shifted by one index."],
        approach: "Same as Fibonacci. `dp[i] = dp[i-1] + dp[i-2]`. Space Optimization: `prev2 = 1, prev = 1`. `curr = prev + prev2`. Time: O(N), Space: O(1)."
    },
    {
        id: "dp-03", name: "Frog Jump", module: "Dynamic Programming [Patterns and Problems]", subModule: "1D DP", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/geek-jump/1", cnUrl: "https://www.naukri.com/code360/problems/frog-jump_3621012", companies: ["Amazon"],
        statement: "Given an array of heights of stairs. A frog is at stair 1 and wants to reach stair N. It can jump 1 or 2 stairs at a time. The energy lost is `abs(height[i] - height[j])`. Find the minimum total energy used.",
        examples: [{ input: "heights = [10, 20, 30, 10]", output: "20" }], constraints: ["1 <= n <= 10^5"],
        hints: ["`dp[i]` represents the minimum energy to reach step i.", "`dp[i] = min(dp[i-1] + abs(h[i]-h[i-1]), dp[i-2] + abs(h[i]-h[i-2]))`."],
        approach: "Space Optimization: Track `prev1` (energy to reach i-1) and `prev2` (energy to reach i-2). `jumpOne = prev1 + abs(h[i] - h[i-1])`. `jumpTwo = prev2 + abs(h[i] - h[i-2])`. `curr = min(jumpOne, jumpTwo)`. Time: O(N), Space: O(1)."
    },
    {
        id: "dp-04", name: "Frog jump with K distances", module: "Dynamic Programming [Patterns and Problems]", subModule: "1D DP", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/minimal-cost/1", cnUrl: "https://www.naukri.com/code360/problems/minimal-cost_8180930", companies: ["Amazon"],
        statement: "Similar to Frog Jump, but the frog can jump up to K steps. Find the minimum energy required to reach the Nth stair.",
        examples: [{ input: "heights = [10, 30, 40, 50, 20], k = 3", output: "30" }], constraints: ["1 <= n <= 10^4", "1 <= k <= 100"],
        hints: ["Since K can be large, you can't just use `prev1` and `prev2`.", "Use a `dp` array. For each step `i`, run a loop `j` from 1 to K to check previous steps."],
        approach: "`dp[i]` is min energy. Loop `i` from 1 to N-1. `minEnergy = INF`. Loop `j` from 1 to K. If `i-j >= 0`, `jump = dp[i-j] + abs(h[i] - h[i-j])`, `minEnergy = min(minEnergy, jump)`. `dp[i] = minEnergy`. Time: O(N * K), Space: O(N)."
    },
    {
        id: "dp-05", name: "Maximum sum of non adjacent elements", module: "Dynamic Programming [Patterns and Problems]", subModule: "1D DP", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/house-robber/", gfgUrl: "https://www.geeksforgeeks.org/problems/max-sum-without-adjacents2430/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-non-adjacent-sum_843261", companies: ["Amazon", "Google", "Microsoft"],
        statement: "Given an array of integers, find the maximum sum of a subsequence such that no two elements of the subsequence are adjacent in the array.",
        examples: [{ input: "nums = [1,2,3,1]", output: "4", explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3)." }], constraints: ["1 <= nums.length <= 100", "0 <= nums[i] <= 400"],
        hints: ["For each element, you have two choices: Pick it (and add `dp[i-2]`) or Don't Pick it (take `dp[i-1]`)."],
        approach: "Space Optimization: `prev1 = nums[0]`, `prev2 = 0`. Loop `i` from 1 to N-1. `pick = nums[i] + (i>1 ? prev2 : 0)`. `notPick = prev1`. `curr = max(pick, notPick)`. `prev2 = prev1`, `prev1 = curr`. Time: O(N), Space: O(1)."
    },
    {
        id: "dp-06", name: "House robber II", module: "Dynamic Programming [Patterns and Problems]", subModule: "1D DP", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/house-robber-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/stickler-theif-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/house-robber_839733", companies: ["Amazon", "Microsoft"],
        statement: "You are a professional robber planning to rob houses along a street. All houses at this place are arranged in a CIRCULAR line. That means the first house is the neighbor of the last one. Find the max money you can rob without alerting police (no two adjacent houses).",
        examples: [{ input: "nums = [2,3,2]", output: "3", explanation: "You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent." }], constraints: ["1 <= nums.length <= 100"],
        hints: ["Since the array is circular, the answer is the max of two scenarios:", "Scenario 1: Rob from index 0 to N-2.", "Scenario 2: Rob from index 1 to N-1."],
        approach: "If `n == 1` return `nums[0]`. Run the standard House Robber (Maximum sum of non-adjacent elements) algorithm twice. Once omitting the first element, once omitting the last. Return the maximum of both runs. Time: O(N), Space: O(1)."
    },

    // 2D/3D DP and DP on Grids
    {
        id: "dp-07", name: "Ninja's training", module: "Dynamic Programming [Patterns and Problems]", subModule: "2D/3D DP and DP on Grids", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/geeks-training/1", cnUrl: "https://www.naukri.com/code360/problems/ninja-s-training_3621003", companies: ["Amazon"],
        statement: "Ninja is planning this 'N' days-long training schedule. Each day, he can perform any one of these three activities (Running, Fighting Practice, or Learning New Moves). Each activity has some merit points. A Ninja cannot do the same activity on two consecutive days. Find the maximum merit points Ninja can earn.",
        examples: [{ input: "points = [[1,2,5], [3,1,1], [3,3,3]]", output: "11", explanation: "Day 0: Activity 2 (5). Day 1: Activity 0 (3). Day 2: Activity 1 (3). Total = 11." }], constraints: ["1 <= N <= 10^5"],
        hints: ["The DP state requires the current day AND the activity performed on the previous day.", "dp[day][last_activity] = max(points[day][i] + dp[day-1][i]) for all i != last_activity."],
        approach: "Space Optimization: Maintain a `prev` array of size 4 (index 3 handles the 'no previous activity' case for day 0). For each day, compute a `temp` array of size 4. For `last = 0..3`, loop `task = 0..2`. If `task != last`, `temp[last] = max(temp[last], points[day][task] + prev[task])`. `prev = temp`. Time: O(N * 3 * 4), Space: O(4) -> O(1)."
    },
    {
        id: "dp-08", name: "Grid Unique Paths", module: "Dynamic Programming [Patterns and Problems]", subModule: "2D/3D DP and DP on Grids", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/unique-paths/", gfgUrl: "https://www.geeksforgeeks.org/problems/number-of-unique-paths5339/1", cnUrl: "https://www.naukri.com/code360/problems/total-unique-paths_1081470", companies: ["Amazon", "Microsoft", "Google"],
        statement: "A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right. Return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
        examples: [{ input: "m = 3, n = 7", output: "28" }], constraints: ["1 <= m, n <= 100"],
        hints: ["DP State: `dp[i][j]` is the number of ways to reach cell `(i,j)`.", "`dp[i][j] = dp[i-1][j] + dp[i][j-1]`."],
        approach: "Space Optimization: Instead of an N*M matrix, use a 1D array `prev` of size N representing the previous row. Loop rows, loop cols. `curr[j] = prev[j] + curr[j-1]`. `prev = curr`. Or use combinatorics: `(m+n-2) C (m-1)`. Time: O(M*N), Space: O(N)."
    },
    {
        id: "dp-09", name: "Unique paths II", module: "Dynamic Programming [Patterns and Problems]", subModule: "2D/3D DP and DP on Grids", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/unique-paths-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/ways-to-reach-the-nth-stair-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/maze-obstacles_977241", companies: ["Amazon", "Microsoft"],
        statement: "You are given an m x n integer array grid. There is a robot initially located at the top-left corner. An obstacle and space are marked as 1 or 0 respectively in grid. Return the number of possible unique paths.",
        examples: [{ input: "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]", output: "2" }], constraints: ["1 <= m, n <= 100"],
        hints: ["Same as Unique Paths, but if `grid[i][j] == 1`, `dp[i][j] = 0`."],
        approach: "Space Optimization: Use a 1D `prev` array. If `grid[i][j] == 1`, `curr[j] = 0`. Else if `i==0 && j==0`, `curr[j] = 1`. Else `curr[j] = (i>0 ? prev[j] : 0) + (j>0 ? curr[j-1] : 0)`. Time: O(M*N), Space: O(N)."
    },
    {
        id: "dp-10", name: "Minimum Falling Path Sum", module: "Dynamic Programming [Patterns and Problems]", subModule: "2D/3D DP and DP on Grids", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/minimum-falling-path-sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/path-in-matrix3805/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-path-sum-in-the-matrix_797998", companies: ["Amazon"],
        statement: "Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix. A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right.",
        examples: [{ input: "matrix = [[2,1,3],[6,5,4],[7,8,9]]", output: "13", explanation: "1 -> 5 -> 7 = 13" }], constraints: ["1 <= n <= 100"],
        hints: ["Start from the second row and compute the minimum path to reach each cell from the row above.", "`dp[i][j] = matrix[i][j] + min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1])`."],
        approach: "Space Optimization: Keep a 1D `prev` array for the previous row. For the current row, compute `curr[j]`. Handle out-of-bounds carefully (use `INT_MAX`). Time: O(N^2), Space: O(N)."
    },
    {
        id: "dp-11", name: "Triangle", module: "Dynamic Programming [Patterns and Problems]", subModule: "2D/3D DP and DP on Grids", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/triangle/", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/triangle_1229398", companies: ["Amazon", "Microsoft"],
        statement: "Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.",
        examples: [{ input: "triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]", output: "11", explanation: "2 -> 3 -> 5 -> 1" }], constraints: ["1 <= triangle.length <= 200"],
        hints: ["Top-down approach is tricky because the state expands. Try Bottom-Up!", "Start from the second to last row and move upwards. `dp[i][j] = triangle[i][j] + min(dp[i+1][j], dp[i+1][j+1])`."],
        approach: "Bottom-Up Space Optimization: Initialize a `front` array with the values of the last row. Loop from row `n-2` down to 0. For each column `j`, `curr[j] = triangle[i][j] + min(front[j], front[j+1])`. Time: O(N^2), Space: O(N)."
    },
    {
        id: "dp-12", name: "Ninja and his Friends (Cherry Pickup II)", module: "Dynamic Programming [Patterns and Problems]", subModule: "2D/3D DP and DP on Grids", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/cherry-pickup-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/chocolates-pickup/1", cnUrl: "https://www.naukri.com/code360/problems/ninja-and-his-friends_3125884", companies: ["Amazon", "Google", "Microsoft"],
        statement: "You are given a rows x cols matrix grid representing a field of cherries. Robot #1 is at (0, 0) and Robot #2 is at (0, cols - 1). Return the maximum number of cherries collection using both robots. They move simultaneously down, down-left, or down-right.",
        examples: [{ input: "grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]", output: "24" }], constraints: ["2 <= rows, cols <= 70"],
        hints: ["Since they move synchronously down, they will always be on the same row. State is `(row, col1, col2)`.", "If they land on the same cell, only add the cherry once."],
        approach: "3D DP Memoization: `dp[i][j1][j2]`. For a given state, try all 9 combinations of moves for both robots (`d1` in {-1,0,1}, `d2` in {-1,0,1}). If `j1 == j2`, cherries = `grid[i][j1]`, else `grid[i][j1] + grid[i][j2]`. Add `dfs(i+1, j1+d1, j2+d2)`. Time: O(N * M * M * 9), Space: O(N * M * M)."
    },

    // DP on Subsequences
    {
        id: "dp-13", name: "Subset sum equal to target", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1", cnUrl: "https://www.naukri.com/code360/problems/subset-sum-equal-to-k_1550954", companies: ["Amazon", "Microsoft"],
        statement: "Given an array of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.",
        examples: [{ input: "arr = [3, 34, 4, 12, 5, 2], sum = 9", output: "true" }], constraints: ["1 <= N <= 10^3"],
        hints: ["State: `dp[ind][target]` = true if it's possible to make `target` using items from index 0 to `ind`.", "Pick/Not Pick logic."],
        approach: "Space Optimization: Maintain a `prev` boolean array of size `target+1`. Base case: `prev[0] = true` and `prev[arr[0]] = true`. Loop `i` from 1 to N-1. Loop `tar` from 1 to Target. `notTake = prev[tar]`. `take = false; if(arr[i] <= tar) take = prev[tar - arr[i]]`. `curr[tar] = take | notTake`. Time: O(N * Target), Space: O(Target)."
    },
    {
        id: "dp-14", name: "Partition equal subset sum", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/partition-equal-subset-sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1", cnUrl: "https://www.naukri.com/code360/problems/partition-equal-subset-sum_892980", companies: ["Amazon", "Microsoft"],
        statement: "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.",
        examples: [{ input: "nums = [1,5,11,5]", output: "true", explanation: "The array can be partitioned as [1, 5, 5] and [11]." }], constraints: ["1 <= nums.length <= 200"],
        hints: ["If the total sum of the array is odd, it's impossible to partition.", "If it's even, the problem reduces to finding if there exists a subset with sum = `total_sum / 2`."],
        approach: "Calculate `totalSum`. If `totalSum % 2 != 0`, return false. Run the 'Subset Sum Equal to Target' algorithm with `target = totalSum / 2`. Time: O(N * Target), Space: O(Target)."
    },
    {
        id: "dp-15", name: "Partition set into two subsets with min diff", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-sum-partition3317/1", cnUrl: "https://www.naukri.com/code360/problems/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum_842494", companies: ["Amazon", "Google"],
        statement: "Given an array arr of size n, partition the array into two subsets such that the absolute difference of their sums is minimized. (Note: LeetCode requires subsets of equal size, GFG/CN does not. The GFG approach is standard DP).",
        examples: [{ input: "arr = [1, 6, 11, 5]", output: "1", explanation: "Subset1 = [1, 5, 6], sum = 12. Subset2 = [11], sum = 11. Diff = 1." }], constraints: ["1 <= N <= 10^3"],
        hints: ["Run the 'Subset Sum Equal to Target' algorithm for `target = totalSum`.", "The last row of the DP table (`prev` array) will tell you which subset sums are possible. Iterate possible sums to find the minimum difference."],
        approach: "Run Tabulation DP for `target = totalSum`. Iterate `s1` from 0 to `totalSum / 2`. If `prev[s1]` is true, `diff = abs(s1 - (totalSum - s1))`. Track `minDiff`. Time: O(N * Sum), Space: O(Sum)."
    },
    {
        id: "dp-16", name: "Count subsets with sum K", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1", cnUrl: "https://www.naukri.com/code360/problems/number-of-subsets_3952532", companies: ["Amazon", "Microsoft"],
        statement: "Given an array arr[] of non-negative integers and an integer target, the task is to count all subsets of the given array with a sum equal to the given target.",
        examples: [{ input: "arr = [1, 2, 2, 3], target = 3", output: "3", explanation: "[1,2], [1,2], [3]" }], constraints: ["1 <= N <= 10^3"],
        hints: ["Same DP state as Subset Sum, but instead of logical OR (`|`), use addition (`+`).", "Beware of zeros in the array! Base cases change if zeros are present."],
        approach: "Tabulation with Space Optimization. Initialize `prev` with 0. `prev[0] = 1`. If `arr[0] == 0`, `prev[0] = 2`. If `arr[0] != 0 && arr[0] <= target`, `prev[arr[0]] = 1`. Loop `i` from 1 to N-1. `notTake = prev[tar]`. `take = arr[i] <= tar ? prev[tar - arr[i]] : 0`. `curr[tar] = (take + notTake) % MOD`. Time: O(N * Target), Space: O(Target)."
    },
    {
        id: "dp-17", name: "Count partitions with given difference", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1", cnUrl: "https://www.naukri.com/code360/problems/partitions-with-given-difference_3751628", companies: ["Amazon"],
        statement: "Given an array arr, partition it into two subsets (S1 and S2) such that S1 - S2 = D and S1 >= S2. Count the number of such partitions.",
        examples: [{ input: "arr = [5, 2, 6, 4], D = 3", output: "1", explanation: "S1=[6,5], S2=[4,2]. S1-S2 = 11-6 = 5. Wait, specific partition S1-S2=3? Example logic varies. Total sum = 17. S1-S2=3 -> S1=(17+3)/2=10. Subsets with sum 10: [6,4]." }], constraints: ["1 <= N <= 1000"],
        hints: ["We know `S1 + S2 = totalSum` and `S1 - S2 = D`.", "Therefore, `S1 = (totalSum + D) / 2`. The problem reduces to finding the number of subsets with sum exactly S1."],
        approach: "Calculate `totalSum`. If `(totalSum + D)` is odd or `totalSum - D < 0`, return 0. Target = `(totalSum + D) / 2`. Run 'Count subsets with sum K' algorithm for this target. Time: O(N * Target), Space: O(Target)."
    },
    {
        id: "dp-18", name: "0/1 Knapsack (Assign Cookies equivalent ID)", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1", cnUrl: "https://www.naukri.com/code360/problems/0-1-knapsack_920542", companies: ["Amazon", "Microsoft", "Google"],
        statement: "You are given weights and values of N items. Put these items in a knapsack of capacity W to get the maximum total value in the knapsack. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).",
        examples: [{ input: "W = 4, wt = [1, 2, 4, 5], val = [5, 4, 8, 6]", output: "13" }], constraints: ["1 <= N <= 10^3", "1 <= W <= 10^3"],
        hints: ["DP State: `dp[ind][W]` = max value considering items up to `ind` with remaining capacity `W`.", "Can be space-optimized to a single 1D array by iterating right-to-left."],
        approach: "Space Optimization: `prev` array of size `W+1`. Base case: loop `w` from `wt[0]` to `W`, `prev[w] = val[0]`. Loop `i` from 1 to N-1. Loop `w` backwards from `W` down to 0. `notTake = prev[w]`. `take = INT_MIN`. If `wt[i] <= w`, `take = val[i] + prev[w - wt[i]]`. `prev[w] = max(take, notTake)`. Time: O(N * W), Space: O(W)."
    },
    {
        id: "dp-19", name: "Minimum Coins", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/coin-change/", gfgUrl: "https://www.geeksforgeeks.org/problems/number-of-coins1824/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-elements_3843091", companies: ["Amazon", "Microsoft"],
        statement: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. Infinite supply of coins.",
        examples: [{ input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1" }], constraints: ["1 <= coins.length <= 12", "0 <= amount <= 10^4"],
        hints: ["Since there is an infinite supply, when you 'pick' a coin, you stay at the same index `i`.", "Initialize DP array with `amount + 1` (or infinity) to handle unreachable states."],
        approach: "Space Optimization: `prev` array of size `amount+1`. Base case for `i=0`: `prev[T] = T % coins[0] == 0 ? T / coins[0] : 1e9`. Loop `i` from 1 to N-1. Loop `T` from 0 to amount. `notTake = prev[T]`. `take = 1e9`. If `coins[i] <= T`, `take = 1 + curr[T - coins[i]]` (Note: using `curr` because we stay on same index). Time: O(N * Amount), Space: O(Amount)."
    },
    {
        id: "dp-20", name: "Target sum", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/target-sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/target-sum-1626326450/1", cnUrl: "https://www.naukri.com/code360/problems/target-sum_4127362", companies: ["Amazon", "Microsoft", "Google"],
        statement: "You are given an integer array nums and an integer target. You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers. Return the number of different expressions that evaluate to target.",
        examples: [{ input: "nums = [1,1,1,1,1], target = 3", output: "5" }], constraints: ["1 <= nums.length <= 20", "0 <= sum(nums) <= 1000"],
        hints: ["Assigning '+' to a subset S1 and '-' to a subset S2 means `S1 - S2 = target`.", "This is literally the exact same problem as 'Count partitions with given difference'."],
        approach: "Math conversion: `totalSum = sum(nums)`. If `totalSum - target < 0` or `(totalSum - target) % 2 != 0`, return 0. `s2 = (totalSum - target) / 2`. Find subsets with sum `s2` using the standard DP approach. Time: O(N * Sum), Space: O(Sum)."
    },
    {
        id: "dp-21", name: "Coin Change 2", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/coin-change-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/coin-change2448/1", cnUrl: "https://www.naukri.com/code360/problems/ways-to-make-coin-change_630471", companies: ["Amazon", "Microsoft"],
        statement: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount. Infinite supply of coins.",
        examples: [{ input: "amount = 5, coins = [1,2,5]", output: "4", explanation: "5=5, 5=2+2+1, 5=2+1+1+1, 5=1+1+1+1+1" }], constraints: ["1 <= coins.length <= 300", "0 <= amount <= 5000"],
        hints: ["Similar to Minimum Coins, but we are COUNTING ways instead of minimizing.", "`take` = `curr[T - coins[i]]` and `notTake` = `prev[T]`. Add them."],
        approach: "Space Optimization: `prev` array. Base case `i=0`: `prev[T] = (T % coins[0] == 0) ? 1 : 0`. Loop `i` from 1 to N-1. Loop `T` from 0 to amount. `notTake = prev[T]`. `take = 0`. If `coins[i] <= T`, `take = curr[T - coins[i]]`. `curr[T] = take + notTake`. Time: O(N * Amount), Space: O(Amount)."
    },
    {
        id: "dp-22", name: "Unbounded knapsack", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1", cnUrl: "https://www.naukri.com/code360/problems/unbounded-knapsack_790729", companies: ["Amazon", "Google"],
        statement: "Given a knapsack weight W and a set of n items with certain value val[i] and weight wt[i], we need to calculate the maximum amount that could make up this quantity exactly. You have an infinite supply of each item.",
        examples: [{ input: "W = 100, val = [1, 30], wt = [1, 50]", output: "100" }], constraints: ["1 <= N, W <= 1000"],
        hints: ["This is a blend of 0/1 Knapsack (max value) and Coin Change (infinite supply).", "Because of infinite supply, when you `take` an item, you stay at the same index."],
        approach: "Space Optimization: `prev` array of size `W+1`. Base `i=0`: `prev[w] = (w / wt[0]) * val[0]`. Loop `i` from 1 to N-1. Loop `w` from 0 to W. `notTake = prev[w]`. `take = INT_MIN`. If `wt[i] <= w`, `take = val[i] + curr[w - wt[i]]`. `curr[w] = max(take, notTake)`. Time: O(N * W), Space: O(W)."
    },
    {
        id: "dp-23", name: "Rod Cutting Problem", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Subsequences", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/rod-cutting0840/1", cnUrl: "https://www.naukri.com/code360/problems/rod-cutting-problem_800284", companies: ["Amazon", "Microsoft"],
        statement: "Given a rod of length N inches and an array of prices, price[i] denotes the value of a piece of length i. Determine the maximum value obtainable by cutting up the rod and selling the pieces.",
        examples: [{ input: "N = 8, price = [1, 5, 8, 9, 10, 17, 17, 20]", output: "22", explanation: "Cut rod into 2 pieces of length 2 and 6. 5 + 17 = 22." }], constraints: ["1 <= N <= 1000"],
        hints: ["Lengths are represented by indices (1-indexed).", "This is an exact replica of the Unbounded Knapsack problem, where weight capacity is N and item weights are lengths."],
        approach: "Use Unbounded Knapsack DP. 1D Array Optimization: `dp[N+1]`. Base case `dp[L] = L * price[0]`. Loop `i` from 1 to N-1. Loop `L` from 0 to N. `notTake = prev[L]`. `take = INT_MIN`. If `rodLength <= L`, `take = price[i] + curr[L - rodLength]`. Time: O(N^2), Space: O(N)."
    },

    // DP on Strings
    {
        id: "dp-24", name: "Longest common subsequence", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Strings", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/longest-common-subsequence/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/longest-common-subsequence_624879", companies: ["Amazon", "Microsoft", "Google"],
        statement: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
        examples: [{ input: "text1 = 'abcde', text2 = 'ace'", output: "3", explanation: "The LCS is 'ace'." }], constraints: ["1 <= text1.length, text2.length <= 1000"],
        hints: ["If the characters match, `1 + f(i-1, j-1)`. If they don't, `max(f(i-1, j), f(i, j-1))`."],
        approach: "Space Optimization: Maintain `prev` row of size M+1. Base case all 0s. Loop `i` from 1 to N. Loop `j` from 1 to M. If `s1[i-1] == s2[j-1]`, `curr[j] = 1 + prev[j-1]`. Else `curr[j] = max(prev[j], curr[j-1])`. `prev = curr`. Time: O(N*M), Space: O(M)."
    },
    {
        id: "dp-25", name: "Print Longest Common Subsequence", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Strings", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1", cnUrl: "https://www.naukri.com/code360/problems/print-longest-common-subsequence_8416383", companies: [],
        statement: "Given two strings s1 and s2, find the longest common subsequence and print it.",
        examples: [{ input: "s1 = 'abcde', s2 = 'ace'", output: "'ace'" }], constraints: ["1 <= length <= 1000"],
        hints: ["Construct the full 2D DP table for LCS.", "Start from `dp[N][M]`. If chars match, add to answer and go diagonally `(i-1, j-1)`. Else, move to the maximum of `(i-1, j)` or `(i, j-1)`."],
        approach: "Backtracking on DP Table: Build N x M matrix for LCS. String `ans`. `i = n, j = m`. While `i > 0 && j > 0`: If `s1[i-1] == s2[j-1]`, `ans += s1[i-1]`, `i--`, `j--`. Else if `dp[i-1][j] > dp[i][j-1]`, `i--`. Else `j--`. Reverse `ans` at the end. Time: O(N*M), Space: O(N*M)."
    },
    {
        id: "dp-26", name: "Longest common substring", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Strings", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-common-substring1452/1", cnUrl: "https://www.naukri.com/code360/problems/longest-common-substring_1235207", companies: ["Amazon", "Microsoft"],
        statement: "Given two strings. Find the length of the longest common substring.",
        examples: [{ input: "S1 = 'ABCDGH', S2 = 'ACDGHR'", output: "4", explanation: "The longest common substring is 'CDGH'." }], constraints: ["1 <= lengths <= 1000"],
        hints: ["If characters match, `dp[i][j] = 1 + dp[i-1][j-1]`. If they do not match, `dp[i][j] = 0` (because a substring must be contiguous)."],
        approach: "Space Optimization: `prev` array of size M+1. Track `maxLen = 0`. Loop `i` from 1 to N. Loop `j` from 1 to M. If `s1[i-1] == s2[j-1]`, `curr[j] = 1 + prev[j-1]`, `maxLen = max(maxLen, curr[j])`. Else `curr[j] = 0`. `prev = curr`. Time: O(N*M), Space: O(M)."
    },
    {
        id: "dp-27", name: "Longest palindromic subsequence", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Strings", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/longest-palindromic-subsequence/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-palindromic-subsequence-1612327878/1", cnUrl: "https://www.naukri.com/code360/problems/longest-palindromic-subsequence_842787", companies: ["Amazon", "LinkedIn", "Microsoft"],
        statement: "Given a string s, find the longest palindromic subsequence's length in s.",
        examples: [{ input: "s = 'bbbab'", output: "4", explanation: "One possible longest palindromic subsequence is 'bbbb'." }], constraints: ["1 <= s.length <= 1000"],
        hints: ["A palindrome reads the same backwards.", "The Longest Palindromic Subsequence is simply the Longest Common Subsequence of `s` and `reverse(s)`."],
        approach: "Create `s2 = reverse(s)`. Run the standard LCS algorithm on `s` and `s2`. Time: O(N^2), Space: O(N)."
    },
    {
        id: "dp-28", name: "Minimum insertions to make string palindrome", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Strings", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/", gfgUrl: "https://www.geeksforgeeks.org/problems/form-a-palindrome1455/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-insertions-to-make-palindrome_985293", companies: ["Google", "Amazon"],
        statement: "Given a string s. In one step you can insert any character at any index of the string. Return the minimum number of steps to make s palindrome.",
        examples: [{ input: "s = 'mbadm'", output: "2", explanation: "String can be 'mbdadbm' or 'mdbabdm'." }], constraints: ["1 <= s.length <= 500"],
        hints: ["Keep the longest palindromic subsequence intact.", "Any character not part of the LPS needs a matching character inserted."],
        approach: "Find the length of the Longest Palindromic Subsequence (LPS) of the string. Answer = `s.length() - LPS`. Time: O(N^2), Space: O(N)."
    },
    {
        id: "dp-29", name: "Minimum insertions or deletions to convert string A to B", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Strings", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/delete-operation-for-two-strings/", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-number-of-deletions-and-insertions0209/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-number-of-deletions-and-insertions_4244510", companies: ["Amazon"],
        statement: "Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same. In one step, you can delete exactly one character in either string.",
        examples: [{ input: "word1 = 'sea', word2 = 'eat'", output: "2", explanation: "Delete 's' from 'sea', insert 't' to get 'eat'." }], constraints: ["1 <= length <= 500"],
        hints: ["Keep the Longest Common Subsequence (LCS) intact.", "You must delete all characters in word1 not in the LCS. You must insert all characters in word2 not in the LCS."],
        approach: "Find the length of the LCS of `word1` and `word2`. `Deletions = len(word1) - LCS`. `Insertions = len(word2) - LCS`. `Answer = Deletions + Insertions`. Time: O(N*M), Space: O(M)."
    },
    {
        id: "dp-30", name: "Shortest common supersequence", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Strings", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/shortest-common-supersequence/", gfgUrl: "https://www.geeksforgeeks.org/problems/shortest-common-supersequence0322/1", cnUrl: "https://www.naukri.com/code360/problems/shortest-supersequence_4244493", companies: ["Amazon", "Microsoft"],
        statement: "Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.",
        examples: [{ input: "str1 = 'abac', str2 = 'cab'", output: "'cabac'" }], constraints: ["1 <= str1.length, str2.length <= 1000"],
        hints: ["The shortest supersequence length is `len(str1) + len(str2) - LCS`.", "Build the DP table for LCS. Backtrack to construct the string, making sure to include unmatched characters from both strings."],
        approach: "Build N x M DP table for LCS. Backtrack: `i = N, j = M`. If `s1[i-1] == s2[j-1]`, add to string, `i--, j--`. Else if `dp[i-1][j] > dp[i][j-1]`, add `s1[i-1]`, `i--`. Else add `s2[j-1]`, `j--`. Add remaining chars. Reverse string. Time: O(N*M), Space: O(N*M)."
    },
    {
        id: "dp-31", name: "Distinct subsequences", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Strings", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/distinct-subsequences/", gfgUrl: "https://www.geeksforgeeks.org/problems/number-of-distinct-subsequences0909/1", cnUrl: "https://www.naukri.com/code360/problems/distinct-subsequences_981254", companies: ["Google"],
        statement: "Given two strings s and t, return the number of distinct subsequences of s which equals t.",
        examples: [{ input: "s = 'rabbbit', t = 'rabbit'", output: "3" }], constraints: ["1 <= s.length, t.length <= 1000"],
        hints: ["If `s[i] == t[j]`, you can either match them `dp[i-1][j-1]` or ignore the char in `s` `dp[i-1][j]`.", "If they don't match, you MUST ignore the char in `s` `dp[i-1][j]`."],
        approach: "Space Optimization: `prev` array of size M+1. `prev[0] = 1`. Loop `i` from 1 to N. Loop `j` backwards from M to 1. If `s[i-1] == t[j-1]`, `prev[j] = prev[j-1] + prev[j]`. Else `prev[j] = prev[j]`. Time: O(N*M), Space: O(M)."
    },
    {
        id: "dp-32", name: "Edit distance", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Strings", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/edit-distance/", gfgUrl: "https://www.geeksforgeeks.org/problems/edit-distance3702/1", cnUrl: "https://www.naukri.com/code360/problems/edit-distance_630420", companies: ["Amazon", "Microsoft", "Google"],
        statement: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following 3 operations permitted on a word: Insert, Delete, Replace.",
        examples: [{ input: "word1 = 'horse', word2 = 'ros'", output: "3", explanation: "horse -> rorse (replace h with r). rorse -> rose (remove r). rose -> ros (remove e)." }], constraints: ["0 <= word1.length, word2.length <= 500"],
        hints: ["If chars match, cost is 0. Move both pointers.", "If they don't match, try all 3 ops: 1 + min(Insert `f(i, j-1)`, Delete `f(i-1, j)`, Replace `f(i-1, j-1)`)."],
        approach: "Space Optimization: `prev` array size M+1. Base case: `prev[j] = j`. Loop `i` from 1 to N. `curr[0] = i`. Loop `j` from 1 to M. If `s1[i-1] == s2[j-1]`, `curr[j] = prev[j-1]`. Else `curr[j] = 1 + min({curr[j-1], prev[j], prev[j-1]})`. `prev = curr`. Time: O(N*M), Space: O(M)."
    },
    {
        id: "dp-33", name: "Wildcard matching", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Strings", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/wildcard-matching/", gfgUrl: "https://www.geeksforgeeks.org/problems/wildcard-pattern-matching/1", cnUrl: "https://www.naukri.com/code360/problems/wildcard-pattern-matching_701650", companies: ["Amazon", "Microsoft", "Facebook"],
        statement: "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'. '?' Matches any single character. '*' Matches any sequence of characters (including empty).",
        examples: [{ input: "s = 'aa', p = '*'", output: "true" }], constraints: ["0 <= s.length, p.length <= 2000"],
        hints: ["If `p[j] == '*'`, it can match empty string (`f(i, j-1)`) OR match the current character and stay active (`f(i-1, j)`)."],
        approach: "Space Optimization: `prev` array. Base: `prev[0] = true`. `curr[0]` is true only if the pattern prefix is all `*`. Loop `i` to N, `j` to M. If `p[j-1] == s[i-1]` or `?`, `curr[j] = prev[j-1]`. Else if `p[j-1] == '*'`, `curr[j] = prev[j] || curr[j-1]`. Else `curr[j] = false`. Time: O(N*M), Space: O(M)."
    },



    // DP on Stocks
    {
        id: "dp-34", name: "Best Time to Buy and Sell Stock", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Stocks", difficulty: "Easy",
        lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", gfgUrl: "https://www.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1", cnUrl: "https://www.naukri.com/code360/problems/stocks-are-profitable_893405", companies: ["Amazon", "Microsoft"],
        statement: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
        examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6)." }], constraints: ["1 <= prices.length <= 10^5"],
        hints: ["Keep track of the minimum price seen so far."],
        approach: "Iterate array. Track `minPrice = min(minPrice, prices[i])`. Track `maxProfit = max(maxProfit, prices[i] - minPrice)`. Time: O(N), Space: O(1)."
    },
    {
        id: "dp-35", name: "Best Time to Buy and Sell Stock II", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Stocks", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/stock-buy-and-sell2615/1", cnUrl: "https://www.naukri.com/code360/problems/selling-stock_630282", companies: ["Amazon", "Bloomberg"],
        statement: "You are given an integer array prices where prices[i] is the price of a given stock on the ith day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. Find the maximum profit.",
        examples: [{ input: "prices = [7,1,5,3,6,4]", output: "7", explanation: "Buy on day 2 (1), sell on day 3 (5), profit = 4. Buy on day 4 (3), sell on day 5 (6), profit = 3. Total = 7." }], constraints: ["1 <= prices.length <= 3 * 10^4"],
        hints: ["Since you can do unlimited transactions, add the profit every time `prices[i] > prices[i-1]`."],
        approach: "Greedy/Space Optimized DP: `profit = 0`. Iterate `i` from 1 to N-1. If `prices[i] > prices[i-1]`, `profit += prices[i] - prices[i-1]`. Time: O(N), Space: O(1)."
    },
    {
        id: "dp-36", name: "Best Time to Buy and Sell Stock III", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Stocks", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", gfgUrl: "https://www.geeksforgeeks.org/problems/buy-and-sell-a-share-at-most-twice/1", cnUrl: "https://www.naukri.com/code360/problems/buy-and-sell-stock_1071012", companies: ["Amazon", "Microsoft"],
        statement: "You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve. You may complete at most two transactions.",
        examples: [{ input: "prices = [3,3,5,0,0,3,1,4]", output: "6", explanation: "Buy on day 4 (0), sell on day 6 (3), profit=3. Buy on day 7 (1), sell on day 8 (4), profit=3." }], constraints: ["1 <= prices.length <= 10^5"],
        hints: ["DP State: `dp[ind][buy][cap]` where cap is the remaining transactions (2, 1, 0)."],
        approach: "Space Optimization: Maintain a 2D array `curr[2][3]` and `next[2][3]`. Loop `i` from N-1 down to 0. Loop `buy` from 0 to 1. Loop `cap` from 1 to 2. If `buy==1`: `curr[buy][cap] = max(-prices[i] + next[0][cap], 0 + next[1][cap])`. If `buy==0`: `curr[buy][cap] = max(prices[i] + next[1][cap-1], 0 + next[0][cap])`. Time: O(N), Space: O(1)."
    },
    {
        id: "dp-37", name: "Best Time to Buy and Sell Stock IV", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Stocks", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-profit4657/1", cnUrl: "https://www.naukri.com/code360/problems/best-time-to-buy-and-sell-stock-iv_1082601", companies: ["Amazon", "Google"],
        statement: "You are given an integer array prices and an integer k. Find the maximum profit you can achieve. You may complete at most k transactions.",
        examples: [{ input: "k = 2, prices = [3,2,6,5,0,3]", output: "7" }], constraints: ["0 <= k <= 100", "0 <= prices.length <= 1000"],
        hints: ["Exactly the same as Stock III, but the loop for capacity runs from 1 to K."],
        approach: "Space Optimization: Maintain `curr[2][K+1]` and `next[2][K+1]`. Same transition as Stock III. Time: O(N*K), Space: O(K)."
    },
    {
        id: "dp-38", name: "Best Time to Buy and Sell Stock with Cooldown", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Stocks", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", gfgUrl: "https://www.geeksforgeeks.org/problems/buy-stock-with-cooldown/1", cnUrl: "https://www.naukri.com/code360/problems/highway-billboards_3125905", companies: ["Amazon", "Facebook"],
        statement: "Find the maximum profit you can achieve with unlimited transactions, with the restriction: After you sell your stock, you cannot buy stock on the next day (i.e., cooldown 1 day).",
        examples: [{ input: "prices = [1,2,3,0,2]", output: "3", explanation: "Buy at 1, Sell at 3, Cooldown, Buy at 0, Sell at 2." }], constraints: ["1 <= prices.length <= 5000"],
        hints: ["When you sell at index `i`, the next valid state is `i + 2` instead of `i + 1`."],
        approach: "Space Optimization: Need 3 arrays/variables for `curr`, `front1` (i+1), and `front2` (i+2). `curr[1] = max(-prices[i] + front1[0], front1[1])`. `curr[0] = max(prices[i] + front2[1], front1[0])`. Time: O(N), Space: O(1)."
    },
    {
        id: "dp-39", name: "Best Time to Buy and Sell Stock with Transaction Fee", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Stocks", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/", gfgUrl: "https://www.geeksforgeeks.org/problems/buy-stock-with-transaction-fee/1", cnUrl: "https://www.naukri.com/code360/problems/rahul-and-his-chocolates_3116361", companies: ["Amazon"],
        statement: "Find the maximum profit you can achieve with unlimited transactions, but you must pay a transaction fee for each transaction (buying and selling counts as one transaction).",
        examples: [{ input: "prices = [1,3,2,8,4,9], fee = 2", output: "8" }], constraints: ["1 <= prices.length <= 5 * 10^4"],
        hints: ["Exactly like Stock II, but subtract `fee` when you sell the stock."],
        approach: "Space Optimization: `currBuy = max(-prices[i] + nextNotBuy, nextBuy)`. `currNotBuy = max(prices[i] - fee + nextBuy, nextNotBuy)`. Time: O(N), Space: O(1)."
    },

    // DP on LIS
    {
        id: "dp-40", name: "Longest Increasing Subsequence", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on LIS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/longest-increasing-subsequence/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1", cnUrl: "https://www.naukri.com/code360/problems/longest-increasing-subsequence_630459", companies: ["Amazon", "Microsoft", "Google"],
        statement: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
        examples: [{ input: "nums = [10,9,2,5,3,7,101,18]", output: "4", explanation: "The longest increasing subsequence is [2,3,7,101]." }], constraints: ["1 <= nums.length <= 2500"],
        hints: ["O(N^2) DP approach: `dp[i]` is LIS ending at `i`.", "O(N log N) approach: Maintain a sorted array `temp` and use binary search (lower_bound) to replace elements."],
        approach: "Binary Search: Create `temp` array. Push `nums[0]`. Iterate from 1 to N-1. If `nums[i] > temp.back()`, `temp.push_back(nums[i])`. Else find `ind = lower_bound(temp, nums[i])` and replace `temp[ind] = nums[i]`. Return `temp.size()`. Time: O(N log N), Space: O(N)."
    },
    {
        id: "dp-41", name: "Print Longest Increasing Subsequence", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on LIS", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/1", cnUrl: "https://www.naukri.com/code360/problems/printing-longest-increasing-subsequence_8360670", companies: ["Amazon"],
        statement: "Find the Longest Increasing Subsequence of an array and return it. If multiple exist, return any.",
        examples: [{ input: "nums = [10,9,2,5,3,7,101,18]", output: "[2,3,7,101]" }], constraints: ["1 <= N <= 10^3"],
        hints: ["Use the O(N^2) DP approach.", "Keep a `hash` array where `hash[i]` stores the index of the previous element in the LIS."],
        approach: "`dp` initialized to 1, `hash[i] = i`. Track `maxi` and `lastIndex`. Loop `i` from 1 to N. Loop `prev` from 0 to i-1. If `nums[prev] < nums[i] && 1 + dp[prev] > dp[i]`, `dp[i] = 1 + dp[prev]`, `hash[i] = prev`. Backtrack using `hash` from `lastIndex`, then reverse the result. Time: O(N^2), Space: O(N)."
    },
    {
        id: "dp-42", name: "Largest Divisible Subset", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on LIS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/largest-divisible-subset/", gfgUrl: "https://www.geeksforgeeks.org/problems/largest-divisible-subset--170647/1", cnUrl: "https://www.naukri.com/code360/problems/divisible-set_3754960", companies: ["Google", "Amazon"],
        statement: "Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) satisfies answer[i] % answer[j] == 0 or answer[j] % answer[i] == 0.",
        examples: [{ input: "nums = [1,2,3]", output: "[1,2]" }, { input: "nums = [1,2,4,8]", output: "[1,2,4,8]" }], constraints: ["1 <= nums.length <= 1000"],
        hints: ["Sort the array first. If the array is sorted, we only need to check if `nums[i] % nums[j] == 0` for `j < i`.", "This reduces directly to the 'Print LIS' problem."],
        approach: "Sort array. Use Print LIS logic. Condition changes from `nums[prev] < nums[i]` to `nums[i] % nums[prev] == 0`. Backtrack using the `hash` array and return the subset. Time: O(N^2), Space: O(N)."
    },
    {
        id: "dp-43", name: "Longest String Chain", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on LIS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/longest-string-chain/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-string-chain/1", cnUrl: "https://www.naukri.com/code360/problems/longest-string-chain_3752111", companies: ["Amazon", "Google", "Bloomberg"],
        statement: "You are given an array of words where each word consists of lowercase English letters. wordA is a predecessor of wordB if we can insert exactly one letter anywhere in wordA to equal wordB. Return the length of the longest possible word chain.",
        examples: [{ input: "words = ['a','b','ba','bca','bda','bdca']", output: "4", explanation: "One of the longest chains is 'a' -> 'ba' -> 'bda' -> 'bdca'." }], constraints: ["1 <= words.length <= 1000"],
        hints: ["Sort the words by their length first.", "Use the LIS DP logic. To check if `wordA` and `wordB` are valid, write a helper function that checks if they differ by exactly one character."],
        approach: "Sort `words` by length. `dp` array initialized to 1. `maxi = 1`. Loop `i` from 0 to N-1. Loop `prev` from 0 to i-1. If `compare(words[i], words[prev]) && 1 + dp[prev] > dp[i]`, `dp[i] = 1 + dp[prev]`. Return `maxi`. `compare` function uses two pointers to verify a single insertion. Time: O(N^2 * L), Space: O(N)."
    },
    {
        id: "dp-44", name: "Longest Bitonic Subsequence", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on LIS", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence0824/1", cnUrl: "https://www.naukri.com/code360/problems/longest-bitonic-sequence_1062688", companies: ["Amazon", "Microsoft"],
        statement: "Given an array of positive integers. Find the maximum length of a Bitonic subsequence. A subsequence is Bitonic if it is first strictly increasing and then strictly decreasing.",
        examples: [{ input: "nums = [1, 2, 5, 3, 2]", output: "5", explanation: "The entire array is bitonic." }], constraints: ["1 <= N <= 1000"],
        hints: ["Calculate LIS from left to right (`dp1`).", "Calculate LIS from right to left (`dp2`).", "The bitonic length at pivot `i` is `dp1[i] + dp2[i] - 1`."],
        approach: "Compute `dp1` (LIS ending at each index). Compute `dp2` (LIS starting at each index, scanning from right to left). `maxi = 0`. Loop `i` from 0 to N-1: `maxi = max(maxi, dp1[i] + dp2[i] - 1)`. Time: O(N^2), Space: O(N)."
    },
    {
        id: "dp-45", name: "Number of Longest Increasing Subsequence", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on LIS", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/", gfgUrl: "https://www.geeksforgeeks.org/problems/number-of-longest-increasing-subsequence/1", cnUrl: "https://www.naukri.com/code360/problems/number-of-longest-increasing-subsequence_3751627", companies: ["Amazon", "Facebook"],
        statement: "Given an integer array nums, return the number of longest increasing subsequences.",
        examples: [{ input: "nums = [1,3,5,4,7]", output: "2", explanation: "The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7]." }], constraints: ["1 <= nums.length <= 2000"],
        hints: ["Maintain a `count` array alongside the `dp` array.", "If you find a new longest path (`1 + dp[prev] > dp[i]`), `count[i] = count[prev]`. If you find another path of the SAME max length (`1 + dp[prev] == dp[i]`), `count[i] += count[prev]`."],
        approach: "Array `dp` initialized to 1, `cnt` initialized to 1. Track `maxi`. Inner loop `prev`. If `nums[prev] < nums[i]` and `1 + dp[prev] > dp[i]`: `dp[i] = 1 + dp[prev]`, `cnt[i] = cnt[prev]`. Else if `1 + dp[prev] == dp[i]`: `cnt[i] += cnt[prev]`. Sum all `cnt[i]` where `dp[i] == maxi`. Time: O(N^2), Space: O(N)."
    },

    // MCM DP | Partition DP
    {
        id: "dp-46", name: "Matrix Chain Multiplication", module: "Dynamic Programming [Patterns and Problems]", subModule: "MCM DP | Partition DP", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1", cnUrl: "https://www.naukri.com/code360/problems/matrix-chain-multiplication_975344", companies: ["Amazon", "Microsoft", "Google"],
        statement: "Given a sequence of matrices, find the most efficient way to multiply these matrices together. The cost of multiplying an `A x B` matrix by a `B x C` matrix is `A * B * C`. Return the minimum number of multiplications.",
        examples: [{ input: "arr = [40, 20, 30, 10, 30]", output: "26000" }], constraints: ["2 <= N <= 100"],
        hints: ["Matrices are defined by `arr[i-1] x arr[i]`.", "Partition DP: Try placing a parenthesis at every index `k` between `i` and `j-1`."],
        approach: "Memoization `f(i, j)`. Base `if(i == j) return 0`. Loop `k` from `i` to `j-1`. `steps = arr[i-1]*arr[k]*arr[j] + f(i, k) + f(k+1, j)`. `minSteps = min(minSteps, steps)`. Time: O(N^3), Space: O(N^2)."
    },
    {
        id: "dp-47", name: "Minimum cost to cut the stick", module: "Dynamic Programming [Patterns and Problems]", subModule: "MCM DP | Partition DP", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", gfgUrl: "https://www.geeksforgeeks.org/problems/find-minimum-cost-to-cut-the-stick/1", cnUrl: "https://www.naukri.com/code360/problems/cost-to-cut-a-chocolate_3208460", companies: ["Google", "Amazon"],
        statement: "Given a wooden stick of length n units, and an array cuts where cuts[i] is the position you should perform a cut. The cost of a cut is the length of the stick segment being cut. Return the minimum total cost of the cuts.",
        examples: [{ input: "n = 7, cuts = [1,3,4,5]", output: "16" }], constraints: ["1 <= n <= 10^6", "1 <= cuts.length <= 100"],
        hints: ["Add 0 and n to the `cuts` array and sort it.", "Partition DP: The cost of cutting segment `(i, j)` at `k` is `cuts[j+1] - cuts[i-1] + f(i, k-1) + f(k+1, j)`."],
        approach: "Modify cuts: `push(0)`, `push(n)`, `sort`. Memoization `f(i, j)` where `i` and `j` are indices of the cuts. Base `if(i > j) return 0`. Loop `k` from `i` to `j`. Cost = `cuts[j+1] - cuts[i-1] + f(i, k-1) + f(k+1, j)`. Return min cost. Time: O(M^3), Space: O(M^2) where M is cuts length."
    },
    {
        id: "dp-48", name: "Burst Balloons", module: "Dynamic Programming [Patterns and Problems]", subModule: "MCM DP | Partition DP", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/burst-balloons/", gfgUrl: "https://www.geeksforgeeks.org/problems/burst-balloons/1", cnUrl: "https://www.naukri.com/code360/problems/mining-diamonds_3112713", companies: ["Amazon", "Google", "Samsung"],
        statement: "You are given n balloons, indexed from 0 to n - 1. If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. Return the maximum coins you can collect by bursting the balloons wisely.",
        examples: [{ input: "nums = [3,1,5,8]", output: "167" }], constraints: ["1 <= n <= 300"],
        hints: ["If you think about the first balloon to burst, the subproblems become dependent.", "Reverse the logic: Think about the LAST balloon to burst in the segment `(i, j)`. Because it's the last, its adjacent balloons are `nums[i-1]` and `nums[j+1]`."],
        approach: "Add 1 to front and back of `nums`. Memoization `f(i, j)`. Base `if(i > j) return 0`. Loop `k` from `i` to `j` (representing the LAST balloon bursting). Coins = `nums[i-1]*nums[k]*nums[j+1] + f(i, k-1) + f(k+1, j)`. Return max. Time: O(N^3), Space: O(N^2)."
    },
    {
        id: "dp-49", name: "Evaluate Boolean Expression to True", module: "Dynamic Programming [Patterns and Problems]", subModule: "MCM DP | Partition DP", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1", cnUrl: "https://www.naukri.com/code360/problems/problem-name-boolean-evaluation_1214650", companies: ["Amazon", "Microsoft"],
        statement: "Given a boolean expression with symbols T, F, and operators &, |, ^. Find the number of ways to parenthesize the expression such that it evaluates to True.",
        examples: [{ input: "S = 'T|T&F^T'", output: "4" }], constraints: ["1 <= length <= 200"],
        hints: ["Partition DP. Split at every operator `k`.", "Return the number of ways to make it True AND False from both halves, and multiply them according to the operator."],
        approach: "Memoization `f(i, j, isTrue)`. Base `if(i==j)` return `isTrue ? (S[i]=='T') : (S[i]=='F')`. Loop `k` from `i+1` to `j-1` step 2. Get `lT = f(i, k-1, 1)`, `lF = f(i, k-1, 0)`, `rT = f(k+1, j, 1)`, `rF = f(k+1, j, 0)`. Accumulate total ways based on operator at `S[k]` and `isTrue`. Time: O(N^3), Space: O(N^2)."
    },
    {
        id: "dp-50", name: "Palindrome Partitioning - II", module: "Dynamic Programming [Patterns and Problems]", subModule: "MCM DP | Partition DP", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/palindrome-partitioning-ii/", gfgUrl: "https://www.geeksforgeeks.org/problems/palindromic-patitioning4845/1", cnUrl: "https://www.naukri.com/code360/problems/palindrome-partitioning_873266", companies: ["Amazon", "Google"],
        statement: "Given a string s, partition s such that every substring of the partition is a palindrome. Return the minimum cuts needed for a palindrome partitioning of s.",
        examples: [{ input: "s = 'aab'", output: "1", explanation: "The palindrome partitioning ['aa','b'] could be produced using 1 cut." }], constraints: ["1 <= s.length <= 2000"],
        hints: ["Use a 1D DP `f(i)` representing the min cuts from index `i` to the end.", "Check all prefixes `s[i..j]`. If it's a palindrome, the cost is `1 + f(j+1)`."],
        approach: "Memoization `f(i)`. Base `if(i == n) return 0`. Loop `j` from `i` to `n-1`. If `isPalindrome(i, j)`, cost = `1 + f(j+1)`. Min over all valid `j`. Final answer is `f(0) - 1` (since the last cut at the end of the string is unnecessary). Time: O(N^2) if palindrome checking is precomputed/O(1) amortized, Space: O(N)."
    },
    {
        id: "dp-51", name: "Partition Array for Maximum Sum", module: "Dynamic Programming [Patterns and Problems]", subModule: "MCM DP | Partition DP", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/partition-array-for-maximum-sum/", gfgUrl: "https://www.geeksforgeeks.org/problems/partition-array-for-maximum-sum/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-subarray_3755255", companies: ["Amazon"],
        statement: "Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray. Return the largest sum of the given array after partitioning.",
        examples: [{ input: "arr = [1,15,7,9,2,5,10], k = 3", output: "84", explanation: "arr becomes [15,15,15,9,10,10,10]" }], constraints: ["1 <= arr.length <= 500", "1 <= k <= arr.length"],
        hints: ["Use a 1D DP. `f(i)` returns the max sum for the suffix starting at `i`.", "Try all partitions of size `len` from 1 to `k`. The score for the current partition is `len * max_element_in_partition`."],
        approach: "Memoization `f(i)`. Base `if(i == n) return 0`. `maxVal = 0`, `maxAns = 0`, `len = 0`. Loop `j` from `i` to `min(n-1, i+k-1)`. `len++`. `maxVal = max(maxVal, arr[j])`. `sum = (len * maxVal) + f(j+1)`. `maxAns = max(maxAns, sum)`. Time: O(N * K), Space: O(N)."
    },

    // DP on Squares
    {
        id: "dp-52", name: "Maximum Rectangle Area with all 1's", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Squares", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/maximal-rectangle/", gfgUrl: "https://www.geeksforgeeks.org/problems/max-rectangle/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-size-rectangle-sub-matrix-with-all-1-s_893017", companies: ["Amazon", "Microsoft"],
        statement: "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
        examples: [{ input: "matrix = [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]", output: "6" }], constraints: ["1 <= row, cols <= 200"],
        hints: ["This problem is best solved using the 'Largest Rectangle in Histogram' technique (Stack approach) rather than pure DP."],
        approach: "Treat each row as the base of a histogram. Create a 1D array `heights`. For each row, if cell is '1', `heights[j]++`, else `heights[j] = 0`. Pass `heights` to the `largestRectangleArea` function. Track max area. Time: O(N*M), Space: O(M)."
    },
    {
        id: "dp-53", name: "Count Square Submatrices with All Ones", module: "Dynamic Programming [Patterns and Problems]", subModule: "DP on Squares", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/", gfgUrl: "https://www.geeksforgeeks.org/problems/count-square-submatrices-with-all-ones/1", cnUrl: "https://www.naukri.com/code360/problems/count-square-submatrices-with-all-ones_3125962", companies: ["Google", "Amazon"],
        statement: "Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.",
        examples: [{ input: "matrix = [[0,1,1,1],[1,1,1,1],[0,1,1,1]]", output: "15" }], constraints: ["1 <= m, n <= 300"],
        hints: ["`dp[i][j]` represents the side length of the maximum square whose bottom right corner is at `(i, j)`.", "It also represents the number of squares ending at `(i, j)`."],
        approach: "Create a 2D `dp` array. Copy first row and first column from matrix. Loop `i` from 1 to N-1, `j` from 1 to M-1. If `matrix[i][j] == 1`, `dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]})`. Sum all elements in `dp`. Time: O(N*M), Space: O(N*M)."
    },
    {
        id: "dp-54", name: "Boolean Parenthesization", module: "Dynamic Programming [Patterns and Problems]", subModule: "MCM DP | Partition DP", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1", cnUrl: "https://www.naukri.com/code360/problems/problem-name-boolean-evaluation_1214650", companies: ["Amazon", "Microsoft"],
        statement: "Given a boolean expression with symbols T, F, and operators &, |, ^. Find the number of ways to parenthesize the expression such that it evaluates to True.",
        examples: [{ input: "S = 'T|T&F^T'", output: "4" }], constraints: ["1 <= length <= 200"],
        hints: ["Partition DP. Split at every operator `k`.", "Return the number of ways to make it True AND False from both halves."],
        approach: "Memoization `f(i, j, isTrue)`. Base `if(i==j)` return `isTrue ? (S[i]=='T') : (S[i]=='F')`. Loop `k` from `i+1` to `j-1` step 2. Get `lT, lF, rT, rF`. Combine counts based on operator. Time: O(N^3), Space: O(N^2)."
    },
    {
        id: "dp-55", name: "Frog Jump with K Distances (Alternative Index Check)", module: "Dynamic Programming [Patterns and Problems]", subModule: "1D DP", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/minimal-cost/1", cnUrl: "https://www.naukri.com/code360/problems/minimal-cost_8180930", companies: ["Amazon"],
        statement: "Minimal Cost: Given an array height[] of size N and an integer K, where height[i] denotes the height of the i th stair. A frog starts at stair 0 and wants to reach stair N-1. From a stair i, the frog can jump to stair i + j where 1 <= j <= K. Find the minimum cost to reach stair N-1.",
        examples: [{ input: "k = 3, height = [10, 30, 40, 50, 20]", output: "30" }], constraints: ["1 <= N <= 10^4", "1 <= K <= 100"],
        hints: ["Use a DP array of size N where `dp[i]` stores the min cost to reach index `i`."],
        approach: "Tabulation: `dp[0] = 0`. For `i` from 1 to N-1, loop `j` from 1 to K: `if(i-j >= 0) dp[i] = min(dp[i], dp[i-j] + abs(h[i] - h[i-j]))`. Time: O(N * K), Space: O(N)."
    },

    // ════════════════════════════════════════════════════════════════════════
    // TRIES
    // ════════════════════════════════════════════════════════════════════════
    {
        id: "tr-01", name: "Implement Trie (Prefix Tree)", module: "Tries", subModule: "Trie", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/implement-trie-prefix-tree/", gfgUrl: "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1", cnUrl: "https://www.naukri.com/code360/problems/implement-trie_631356", companies: ["Amazon", "Microsoft", "Google"],
        statement: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the Trie class: insert(word), search(word), and startsWith(prefix).",
        examples: [{ input: "insert('apple'), search('apple'), search('app'), startsWith('app')", output: "[null, true, false, true]" }], constraints: ["1 <= word.length <= 2000"],
        hints: ["Create a `Node` class containing an array of 26 child Node pointers and a boolean `isEnd` flag."],
        approach: "Insert: Traverse chars. If child pointer is null, create new Node. Move to child. Set `isEnd = true` at the end. Search: Traverse chars. If child null, return false. Return `isEnd` at the end. startsWith: Same as search, but return true if loop completes. Time: O(L) per operation, Space: O(N*L)."
    },
    {
        id: "tr-02", name: "Implement Trie II", module: "Tries", subModule: "Trie", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/trie-delete/1", cnUrl: "https://www.naukri.com/code360/problems/implement-trie_1387095", companies: ["Amazon"],
        statement: "Implement Trie to support insert, countWordsEqualTo, countWordsStartingWith, and erase operations.",
        examples: [{ input: "insert('apple'), insert('apple'), countWordsEqualTo('apple'), countWordsStartingWith('app')", output: "2, 2" }], constraints: ["1 <= word.length <= 2000"],
        hints: ["Instead of a boolean flag, use two integer counters in the Node: `countEndWith` and `countPrefix`."],
        approach: "Node struct: `links[26]`, `cntEndWith=0`, `cntPrefix=0`. Insert: Increment `cntPrefix` at every node, increment `cntEndWith` at the last node. Erase: Decrement `cntPrefix` at every node, decrement `cntEndWith` at the last. Search/Count functions simply return the respective counter values. Time: O(L) per operation."
    },
    {
        id: "tr-03", name: "Longest String with All Prefixes", module: "Tries", subModule: "Trie", difficulty: "Hard",
        lcUrl: "", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/complete-string_2687860", companies: ["Google"],
        statement: "Given an array of strings, find the longest string for which all of its prefixes are also present in the array. If there are multiple, return the lexicographically smallest. If none exists, return 'None'.",
        examples: [{ input: "words = ['n', 'ni', 'nin', 'ninj', 'ninja', 'ninga']", output: "'ninja'" }], constraints: ["1 <= N <= 10^5"],
        hints: ["Insert all words into a Trie.", "A word has all prefixes present if EVERY node on its path in the Trie has `isEnd == true`."],
        approach: "Insert all words to Trie. Iterate through `words`. For each word, traverse the Trie. Check if `isEnd` is true for every character. Keep track of the longest valid string (and lexicographically smallest on tie). Time: O(N * L), Space: O(N * L)."
    },
    {
        id: "tr-04", name: "Number of Distinct Substrings in a String", module: "Tries", subModule: "Trie", difficulty: "Medium",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/count-of-distinct-substrings/1", cnUrl: "https://www.naukri.com/code360/problems/count-distinct-substrings_985292", companies: ["Amazon"],
        statement: "Given a string, find the number of distinct substrings of it. Include the empty string in the count if instructed (some platforms do, some don't).",
        examples: [{ input: "s = 'abab'", output: "7", explanation: "'', 'a', 'b', 'ab', 'ba', 'aba', 'abab'" }], constraints: ["1 <= s.length <= 1000"],
        hints: ["Generate all substrings by exploring all (i, j) pairs.", "Instead of storing them in a HashSet (which takes O(N^3) time overall), insert them into a Trie. Every time you create a new Node in the Trie, it's a new distinct substring."],
        approach: "Nested loops `i` and `j`. `count = 0`. For a fixed `i`, start from Trie `root`. For `j` from `i` to N-1, if `node.links[s[j] - 'a'] == null`, create new node, `count++`. Move to child. Time: O(N^2), Space: O(N^2)."
    },
    {
        id: "tr-05", name: "Bit Pre-requisites for Trie", module: "Tries", subModule: "Trie", difficulty: "Easy",
        lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
        statement: "Theory: Understand how to represent 32-bit integers in a Trie (Bit Trie) to solve XOR-related queries.",
        examples: [], constraints: [], hints: ["Instead of an array of 26 children, a Bit Trie Node only needs an array of 2 children (0 and 1).", "Store the bits of the number from MSB (bit 31) to LSB (bit 0)."],
        approach: "Conceptual understanding of `(num >> i) & 1` to extract bits and route through the Trie."
    },
    {
        id: "tr-06", name: "Maximum XOR of Two Numbers in an Array", module: "Tries", subModule: "Trie", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", gfgUrl: "https://www.geeksforgeeks.org/problems/maximum-xor-of-two-numbers-in-an-array/1", cnUrl: "https://www.naukri.com/code360/problems/maximum-xor_973113", companies: ["Amazon", "Google", "Microsoft"],
        statement: "Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.",
        examples: [{ input: "nums = [3,10,5,25,2,8]", output: "28", explanation: "The maximum result is 5 XOR 25 = 28." }], constraints: ["1 <= nums.length <= 2 * 10^5"],
        hints: ["Insert all numbers into a Bit Trie (storing bits from MSB 31 down to 0).", "For each number, find its 'best match' in the Trie to maximize XOR. To maximize XOR, you want the opposite bit at every step."],
        approach: "Trie Node has `links[2]`. Insert all numbers. Loop `num` in array: `maxXOR = 0`, `node = root`. Loop `i` from 31 down to 0: `bit = (num >> i) & 1`. If `node->containsKey(1 - bit)`, `maxXOR |= (1 << i)`, `node = node->get(1 - bit)`. Else `node = node->get(bit)`. Track overall max. Time: O(N * 32), Space: O(N * 32)."
    },
    {
        id: "tr-07", name: "Maximum XOR With an Element From Array", module: "Tries", subModule: "Trie", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/", gfgUrl: "", cnUrl: "https://www.naukri.com/code360/problems/max-xor-queries_1382020", companies: ["Google", "Amazon"],
        statement: "You are given an array nums and a 2D array queries, where queries[i] = [xi, mi]. The answer to the ith query is the maximum bitwise XOR of xi and any element of nums that does not exceed mi. If all elements in nums are larger than mi, then the answer is -1.",
        examples: [{ input: "nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]", output: "[3,3,7]" }], constraints: ["1 <= nums.length, queries.length <= 10^5"],
        hints: ["Sort the queries offline based on `mi`.", "Sort `nums`. Iteratively insert elements into the Trie as long as `nums[idx] <= mi` for the current query."],
        approach: "Store queries with original indices. Sort queries by `mi`. Sort `nums`. `idx = 0`. Iterate sorted queries. While `idx < nums.length` and `nums[idx] <= mi`, insert `nums[idx]` into Bit Trie, `idx++`. If Trie is empty (`idx == 0`), answer for query is -1. Else use the 'Max XOR' logic from the previous problem. Time: O(N log N + Q log Q + Q*32), Space: O(N*32 + Q)."
    },


    // ═══ STRINGS (ADVANCED) ═══
    {
        id: "advstr-01", name: "Minimum number of bracket reversals to make an expression balanced", module: "Strings", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-reversals1043/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-bracket-reversals_1115684", companies: ["Amazon", "Microsoft"],
        statement: "Given a string S consisting of only characters '{' and '}'. Find the minimum number of reversals required to make the expression balanced.",
        examples: [{ input: "S = '}{{'", output: "2", explanation: "Change '}' to '{' at index 0 and '{' to '}' at index 3 -> '{} {}'." }], constraints: ["1 <= S.length <= 10^5"],
        hints: ["If the length of the string is odd, it's impossible to balance, return -1.", "Use a stack to remove balanced pairs '()', then count the remaining unmatched brackets."],
        approach: "If `S.length() % 2 != 0`, return -1. Use a stack or two counters to remove all valid `}{` or `}}{{` pairs. Remaining open `}` as `l` and close `{` as `r`. Result = `(l + 1) / 2 + (r + 1) / 2`. Time: O(N), Space: O(1)."
    },
    {
        id: "advstr-02", name: "Count and say", module: "Strings", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/count-and-say/", gfgUrl: "https://www.geeksforgeeks.org/problems/decode-the-pattern1138/1", cnUrl: "https://www.naukri.com/code360/problems/count-and-say_6581898", companies: ["Amazon", "Microsoft", "Facebook"],
        statement: "The count-and-say sequence is a sequence of digit strings. Given a positive integer n, return the nth term of the count-and-say sequence.",
        examples: [{ input: "n = 4", output: "'1211'" }], constraints: ["1 <= n <= 30"],
        hints: ["Iterate n-1 times, building the next string from the previous one."],
        approach: "Start with `ans = '1'`. Loop `n-1` times. Count consecutive identical characters and build the new string frequency + character. Time: O(N * L), Space: O(L)."
    },
    {
        id: "advstr-03", name: "Hashing In Strings | Theory", module: "Strings", subModule: "Hard Problems", difficulty: "Easy",
        lcUrl: "", gfgUrl: "", cnUrl: "", companies: [],
        statement: "Understand polynomial rolling hashing for strings, collision avoidance, and prime modulus.",
        examples: [], constraints: [], hints: ["Hash = (s[0]*p^0 + s[1]*p^1 + ... + s[n-1]*p^(n-1)) % m."],
        approach: "Theoretical learning task on string hashing fundamentals."
    },
    {
        id: "advstr-04", name: "Rabin Karp Algorithm", module: "Strings", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm--141631/1", cnUrl: "https://www.naukri.com/code360/problems/string-match-rabin-karp_1115738", companies: ["Amazon", "Microsoft"],
        statement: "Given text and pattern strings, find all occurrences of pattern in text using Rabin-Karp Rolling Hash Algorithm.",
        examples: [{ input: "text = 'geeksforgeeks', pattern = 'eek'", output: "1, 9" }], constraints: ["1 <= text.length, pattern.length <= 10^5"],
        hints: ["Use rolling hash to slide over text in O(1) per window."],
        approach: "Compute hash for pattern and text window. Slide window using rolling hash arithmetic, verify characters on hash match. Time: O(N+M) avg, Space: O(1)."
    },
    {
        id: "advstr-05", name: "Z function", module: "Strings", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", gfgUrl: "https://www.geeksforgeeks.org/problems/search-pattern-z-algorithm--141631/1", cnUrl: "https://www.naukri.com/code360/problems/z-algorithm_3114407", companies: ["Google", "Amazon"],
        statement: "Construct the Z-array for string matching and prefix searching.",
        examples: [{ input: "s = 'aabxaabxca'", output: "Z-array values" }], constraints: ["1 <= s.length <= 10^5"],
        hints: ["Z[i] is the length of the longest substring starting from i which is also a prefix of the string."],
        approach: "Maintain [L, R] window bounds to compute Z-values in linear time. Time: O(N+M), Space: O(N+M)."
    },
    {
        id: "advstr-06", name: "KMP Algorithm or LPS array", module: "Strings", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "", gfgUrl: "https://www.geeksforgeeks.org/problems/search-pattern0205/1", cnUrl: "https://www.naukri.com/code360/problems/pattern-searching-using-kmp-algorithm_893004", companies: ["Amazon", "Microsoft", "Google"],
        statement: "Implement the Knuth-Morris-Pratt string matching algorithm using the LPS (Longest Prefix Suffix) array.",
        examples: [{ input: "text = 'ababcabcabababd', pattern = 'ababd'", output: "Found at index 10" }], constraints: ["1 <= text.length, pattern.length <= 10^4"],
        hints: ["Precompute LPS array to skip redundant comparisons."],
        approach: "Build LPS array, then scan text matching against pattern pointer updates. Time: O(N+M), Space: O(M)."
    },
    {
        id: "advstr-07", name: "Shortest Palindrome", module: "Strings", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/shortest-palindrome/", gfgUrl: "https://www.geeksforgeeks.org/problems/minimum-characters-to-be-added-at-front-to-make-string-palindrome/1", cnUrl: "https://www.naukri.com/code360/problems/minimum-characters-for-palindrome_893000", companies: ["Google", "Amazon"],
        statement: "Find the shortest palindrome by adding characters in front of a given string s.",
        examples: [{ input: "s = 'aacecaaa'", output: "'aaacecaaa'" }], constraints: ["0 <= s.length <= 5 * 10^4"],
        hints: ["Use KMP LPS array on `s + '#' + reverse(s)`."],
        approach: "Concatenate `s + '#' + reverse(s)`, compute LPS tail value, and prepend missing reversed suffix. Time: O(N), Space: O(N)."
    },
    {
        id: "advstr-08", name: "Longest happy prefix", module: "Strings", subModule: "Hard Problems", difficulty: "Hard",
        lcUrl: "https://leetcode.com/problems/longest-happy-prefix/", gfgUrl: "https://www.geeksforgeeks.org/problems/longest-prefix-suffix2527/1", cnUrl: "https://www.naukri.com/code360/problems/longest-prefix-suffix_1235213", companies: ["Microsoft", "Google"],
        statement: "Return the longest happy prefix (non-empty prefix which is also a suffix) of a string s.",
        examples: [{ input: "s = 'level'", output: "'l'" }], constraints: ["1 <= s.length <= 10^5"],
        hints: ["The answer is given directly by the last entry of the KMP LPS array."],
        approach: "Compute LPS array for s, return substring of length `lps.back()`. Time: O(N), Space: O(N)."
    },
    {
        id: "advstr-09", name: "Count Palindromic Subsequences", module: "Strings", subModule: "Hard Problems", difficulty: "Medium",
        lcUrl: "https://leetcode.com/problems/count-different-palindromic-subsequences/", gfgUrl: "https://www.geeksforgeeks.org/problems/count-palindromic-subsequences/1", cnUrl: "https://www.naukri.com/code360/problems/count-palindromic-subsequences_839735", companies: ["Google", "Amazon"],
        statement: "Given a string str of length N, find the total number of palindromic subsequences (can be non-contiguous) modulo 10^9+7.",
        examples: [{ input: "str = 'aab'", output: "4", explanation: "Palindromic subsequences: 'a', 'a', 'b', 'aa'." }], constraints: ["1 <= N <= 1000"],
        hints: ["Use 2D Dynamic Programming. `dp[i][j]` represents palindromic subsequences in substring from index i to j."],
        approach: "2D DP Memoization/Tabulation. If `s[i] == s[j]`, `dp[i][j] = dp[i+1][j] + dp[i][j-1] + 1`. Else `dp[i][j] = dp[i+1][j] + dp[i][j-1] - dp[i+1][j-1]`. Time: O(N^2), Space: O(N^2)."
    }
];