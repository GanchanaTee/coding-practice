# Blind 75 - LeetCode Practice

A comprehensive guide to mastering the 75 most frequently asked LeetCode problems in technical interviews.

## 📚 Quick Start

| Document | Purpose |
|----------|---------|
| [GETTING_STARTED.md](./GETTING_STARTED.md) | Complete guide on how to use this project |
| [PROGRESS.md](./PROGRESS.md) | Track your completion status |

### Get Started in 3 Steps

1. **Read the Guide**: Check out [GETTING_STARTED.md](./GETTING_STARTED.md) for detailed instructions
2. **Start Solving**: Begin with [Two Sum](./arrays-hashing/two-sum.js) - the first problem
3. **Track Progress**: Update [PROGRESS.md](./PROGRESS.md) as you complete problems

```bash
# Run tests for the first problem
npm test -- blind75/arrays-hashing/__spec__/two-sum.spec.js
```

## 🎯 What is Blind 75?

Blind 75 is a curated list of 75 LeetCode problems that cover essential data structures and algorithms commonly asked in technical interviews at top tech companies like Google, Amazon, Facebook, Microsoft, and more.

### Why These Problems?

- **High Frequency**: These problems appear most often in real interviews
- **Pattern-Based**: Learning these helps you recognize patterns in other problems
- **Comprehensive Coverage**: Covers all major data structures and algorithms
- **Proven Track Record**: Thousands of engineers have used this list to ace their interviews

## 📊 Current Progress

```
Total: 75 | Completed: 1 | In Progress: 0 | Remaining: 74
```

## 🎉 Recent Accomplishments

### Two Sum (2026-01-16)
- ✅ **Completed** with optimal O(n) time complexity
- **Approach**: Hash Map / Complement method
- **Key Learnings**:
  - Using `Map` for O(1) lookups instead of O(n) array searches
  - Complement technique: `target - num` to find matching pair
  - One-pass solution: check for complement before storing current value
- **Time Complexity**: O(n) - single iteration through array
- **Space Complexity**: O(n) - hash map stores up to n elements

## 📂 Problem Categories

| Category | Problems | Difficulty |
|----------|----------|------------|
| [Arrays & Hashing](./arrays-hashing/) | 8 | Easy-Medium |
| Two Pointers | 5 | Easy-Medium |
| Sliding Window | 4 | Medium |
| Binary Search | 4 | Medium-Hard |
| Linked List | 6 | Easy-Medium |
| Trees | 10 | Easy-Medium |
| Graphs | 9 | Medium-Hard |
| 1D Dynamic Programming | 10 | Medium |
| Intervals | 5 | Medium |
| Greedy | 7 | Medium |
| Backtracking | 8 | Medium-Hard |
| Bit Manipulation | 6 | Easy-Medium |
| Heap / Priority Queue | 3 | Medium |
| Advanced Graphs | 3 | Hard |
| 2D Dynamic Programming | 7 | Medium-Hard |

## 📋 Complete Problem List

### Arrays & Hashing (1/8 completed) 🎯 Currently Focusing
1. [Two Sum](./arrays-hashing/two-sum.js) ✅
2. [Contains Duplicate](./arrays-hashing/contains-duplicate.js)
3. [Valid Anagram](./arrays-hashing/valid-anagram.js)
4. [Group Anagrams](./arrays-hashing/group-anagrams.js)
5. [Top K Frequent Elements](./arrays-hashing/top-k-frequent.js)
6. [Product of Array Except Self](./arrays-hashing/product-except-self.js)
7. [Valid Sudoku](./arrays-hashing/valid-sudoku.js)
8. [Longest Consecutive Sequence](./arrays-hashing/longest-consecutive.js)

### Two Pointers
1. Valid Palindrome
2. Two Sum II - Input Array is Sorted
3. 3Sum
4. Container With Most Water
5. Trapping Rain Water

### Sliding Window
1. Best Time to Buy and Sell Stock
2. Longest Substring Without Repeating Characters
3. Longest Repeating Character Replacement
4. Permutation in String

### Binary Search
1. Search in Rotated Sorted Array
2. Find Minimum in Rotated Sorted Array
3. Search in Rotated Sorted Array II
4. Median of Two Sorted Arrays

### Linked List
1. Reverse Linked List
2. Merge Two Sorted Lists
3. Linked List Cycle
4. Reorder List
5. Remove Nth Node From End of List
6. Add Two Numbers

### Trees
1. Invert Binary Tree
2. Maximum Depth of Binary Tree
3. Same Tree
4. Subtree of Another Tree
5. Lowest Common Ancestor of a Binary Tree
6. Binary Tree Level Order Traversal
7. Validate Binary Search Tree
8. Kth Smallest Element in a BST
9. Construct Binary Tree from Preorder and Inorder Traversal
10. Serialize and Deserialize Binary Tree

### Graphs
1. Number of Islands
2. Clone Graph
3. Pacific Atlantic Water Flow
4. Surrounded Regions
5. Rotting Oranges
6. Course Schedule
7. Course Schedule II
8. Redundant Connection
9. Word Ladder

### 1D Dynamic Programming
1. Climbing Stairs
2. Min Cost Climbing Stairs
3. House Robber
4. House Robber II
5. Longest Palindromic Substring
6. Palindromic Substrings
7. Decode Ways
8. Coin Change
9. Maximum Product Subarray
10. Word Break

### Intervals
1. Non-overlapping Intervals
2. Meeting Rooms
3. Meeting Rooms II
4. Merge Intervals
5. Insert Interval

### Greedy
1. Maximum Subarray
2. Jump Game
3. Jump Game II
4. Gas Station
5. Hand of Straights
6. Merge Triplets to Form Target Triplet
7. Partition Labels

### Backtracking
1. Subsets
2. Subsets II
3. Permutations
4. Permutations II
5. Combination Sum
6. Combination Sum II
7. Word Search
8. Palindrome Partitioning

### Bit Manipulation
1. Single Number
2. Sum of Two Integers
3. Number of 1 Bits
4. Counting Bits
5. Missing Number
6. Reverse Bits

### Heap / Priority Queue
1. Kth Largest Element in an Array
2. Find Median from Data Stream
3. Task Scheduler

### Advanced Graphs
1. Kruskal's Algorithm - MST
2. Prim's Algorithm - MST
3. Dijkstra's Algorithm - Shortest Path

### 2D Dynamic Programming
1. Unique Paths
2. Unique Paths II
3. Longest Common Subsequence
4. Best Time to Buy and Sell Stock with Cooldown
5. Coin Change II
6. Target Sum
7. Interleaving String

## 🛠️ File Structure

```
blind75/
├── README.md                      # This file - main overview
├── GETTING_STARTED.md             # Detailed getting started guide
├── PROGRESS.md                    # Progress tracker
├── TEMPLATE.js                    # Template for solution files
├── TEMPLATE.spec.js              # Template for test files
├── arrays-hashing/                # Array and hash map problems (1/8)
│   ├── two-sum.js                # ✅ Completed
│   ├── contains-duplicate.js
│   └── __spec__/                 # Test files folder
│       ├── two-sum.spec.js      # Jest test for two-sum
│       └── ...
```
├── two-pointers/                  # Two pointer technique problems
│   └── __spec__/                 # Test files folder
├── sliding-window/               # Sliding window pattern problems
│   └── __spec__/                 # Test files folder
├── binary-search/                # Binary search problems
│   └── __spec__/                 # Test files folder
├── linked-list/                  # Linked list problems
│   └── __spec__/                 # Test files folder
├── trees/                        # Tree traversal and manipulation
│   └── __spec__/                 # Test files folder
├── graphs/                       # Graph algorithms
│   └── __spec__/                 # Test files folder
├── 1d-dp/                        # 1D dynamic programming
│   └── __spec__/                 # Test files folder
├── intervals/                    # Interval-based problems
│   └── __spec__/                 # Test files folder
├── greedy/                       # Greedy algorithm problems
│   └── __spec__/                 # Test files folder
├── backtracking/                 # Backtracking and recursion
│   └── __spec__/                 # Test files folder
├── bit-manipulation/             # Bit manipulation problems
│   └── __spec__/                 # Test files folder
├── heap/                         # Heap and priority queue
│   └── __spec__/                 # Test files folder
├── advanced-graphs/              # Advanced graph algorithms
│   └── __spec__/                 # Test files folder
└── 2d-dp/                        # 2D dynamic programming
    └── __spec__/                 # Test files folder
```

## 🎓 Learning Path

### Phase 1: Foundations (Week 1-2)
Start with Arrays & Hashing - these build the foundation for everything else.

### Phase 2: Core Patterns (Week 3-5)
Master Two Pointers, Sliding Window, and Binary Search.

### Phase 3: Linear Data Structures (Week 6-7)
Linked List problems - learn pointer manipulation.

### Phase 4: Tree Structures (Week 8-10)
Trees - recursion and tree traversal patterns.

### Phase 5: Graphs & Advanced Topics (Week 11-15)
Graph algorithms and dynamic programming.

### Phase 6: Specialized Topics (Week 16-20)
Bit manipulation, heaps, and 2D DP.

## 💡 Study Tips

### Before Starting a Problem
1. Read the problem statement carefully (2-3 minutes)
2. Look at examples and understand input/output format
3. Think about edge cases
4. Consider which data structures/algorithm patterns might apply

### While Solving
1. Write pseudocode if the solution is complex
2. Start with a brute-force approach, then optimize
3. Test your logic with small examples
4. Focus on correctness first, then optimize

### After Solving
1. Run all test cases
2. Analyze time and space complexity
3. Look for alternative solutions
4. Understand why the optimal solution works
5. Note the pattern for future reference

### Key Patterns to Master
- **Hash Map**: O(1) lookups, frequency counting
- **Two Pointers**: Sorted arrays, palindrome checking
- **Sliding Window**: Subarray/substring problems
- **Binary Search**: Finding elements in sorted data
- **Recursion/DFS**: Tree traversal, backtracking
- **BFS**: Level-order traversal, shortest path
- **Dynamic Programming**: Overlapping subproblems
- **Greedy**: Local optimal choices
- **Heap**: Top K elements, streaming data

## 📖 External Resources

### Video Explanations
- [NeetCode](https://www.youtube.com/@NeetCode) - Excellent explanations for most problems
- [Tech Dose](https://www.youtube.com/@TechDoseNitin) - Detailed algorithm walkthroughs

### Practice Platforms
- [LeetCode](https://leetcode.com) - Original source with discussion forums
- [CodeSignal](https://codesignal.com) - Interview-style practice

### Learning Materials
- [Blind 75 Original Discussion](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions)
- [Grokking the Coding Interview](https://www.educative.io/courses/grokking-the-coding-interview) - Pattern-based learning

## 📝 Project Usage

### Running Tests
Each problem has a corresponding Jest test file that you can run:

```bash
# Run tests for a specific problem
npm test -- [category]/__spec__/problem-name.spec.js

# Run all tests
npm test

# Run tests in watch mode (auto-reruns on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Creating a New Problem
Use the templates to start a new problem:

```bash
# Create solution file from template
cp TEMPLATE.js [category]/problem-name.js

# Create test file from template
cp TEMPLATE.spec.js [category]/__spec__/problem-name.spec.js
```

Then fill in:
- **problem-name.js**: Problem description, approach, and implementation
- **problem-name.spec.js**: Jest test cases

Example test output:
```
PASS  blind75/arrays-hashing/__spec__/two-sum.spec.js
  Two Sum
    ✓ Example 1: nums = [2,7,11,15], target = 9 (2 ms)
    ✓ Example 2: nums = [3,2,4], target = 6
    ✓ Example 3: nums = [3,3], target = 6
    ✓ should handle negative numbers
    ✓ should handle mix of positive and negative numbers
    ✓ should find solution with first and last elements
    ✓ should handle zero in the array
    ✓ should handle target of zero with non-zero elements
    ✓ should work with larger array
    ✓ should find solution when target is sum of middle elements
    ✓ should return indices in any order
    ✓ should handle duplicate target values

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Time:        0.456 s
```

## 🏆 Success Metrics

Track your progress towards interview readiness:

- ✅ **Beginner**: Can solve easy problems with hints
- ✅ **Intermediate**: Can solve medium problems independently
- ✅ **Advanced**: Can solve hard problems with good time complexity
- ✅ **Interview Ready**: Can explain solutions and optimize quickly

## 🤝 Contributing

Feel free to:
- Add your own solutions
- Improve existing solutions
- Add more test cases
- Update documentation
- Share your insights

## 📄 License

This project is for educational purposes. Practice problems are from LeetCode, which is © LeetCode.

---

**Ready to start?** Head over to [GETTING_STARTED.md](./GETTING_STARTED.md) and begin your journey to mastering these essential interview problems! 🚀