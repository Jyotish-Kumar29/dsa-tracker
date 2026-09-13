import { PROBLEMS_PART1 } from './problems_part1'
import { PROBLEMS_PART2 } from './problems_part2'
import { PROBLEMS_PART3 } from './problems_part3'
import { PROBLEMS_PART4 } from './problems_part4'

export const MODULES = [
  "Learn the basics",
  "Learn Important Sorting Techniques",
  "Solve Problems on Arrays [Easy -> Medium -> Hard]",
  "Binary Search [1D, 2D Arrays, Search Space]",
  "Strings [Basic and Medium]",
  "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]",
  "Recursion [PatternWise]",
  "Bit Manipulation [Concepts & Problems]",
  "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]",
  "Sliding Window & Two Pointer Combined Problems",
  "Heaps [Learning, Medium, Hard Problems]",
  "Greedy Algorithms [Easy, Medium/Hard]",
  "Binary Trees [Traversals, Medium and Hard Problems]",
  "Binary Search Trees [Concept and Problems]",
  "Graphs [Concepts & Problems]",
  "Dynamic Programming [Patterns and Problems]",
  "Tries",
  "Strings"
]

export const PROBLEMS = [...PROBLEMS_PART1, ...PROBLEMS_PART2, ...PROBLEMS_PART3, ...PROBLEMS_PART4]

export const MODULE_STATS = {
  totalProblems: PROBLEMS.length,
  byModule: MODULES.reduce((acc, m) => {
    acc[m] = PROBLEMS.filter(p => p.module === m).length
    return acc
  }, {}),
}

export const DIFFICULTY_STATS = {
  Easy: PROBLEMS.filter(p => p.difficulty === "Easy").length,
  Medium: PROBLEMS.filter(p => p.difficulty === "Medium").length,
  Hard: PROBLEMS.filter(p => p.difficulty === "Hard").length,
}

// Problems with no native LeetCode problem (lcUrl === "") — surfaced here so the
// UI/tooling can flag them instead of silently rendering a dead link.
export const NO_LEETCODE_MATCH = PROBLEMS.filter(p => !p.lcUrl).map(p => p.id)

// Problems that require a LeetCode Premium subscription to view.
export const PREMIUM_ONLY = PROBLEMS.filter(p => p.premium).map(p => p.id)
