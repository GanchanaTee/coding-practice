# Getting Started with Blind 75

Welcome to your Blind 75 coding practice journey! This guide will help you understand how to use this structured approach to mastering the most common LeetCode interview problems.

## What is Blind 75?

Blind 75 is a curated list of 75 LeetCode problems that cover essential data structures and algorithms commonly asked in technical interviews at top tech companies. It was created by a LeetCode user who collected problems that appeared most frequently in interview experiences shared on the "Blind" app.

## Project Structure

```
blind75/
├── README.md                 # Overview and complete problem list
├── GETTING_STARTED.md        # This file - your guide to getting started
├── PROGRESS.md               # Track your completion status
├── TEMPLATE.js               # Template for solution files
├── TEMPLATE.spec.js          # Template for test files
└── [category]/              # Organized by topic
    ├── problem-name.js       # Solution file
    ├── __spec__/            # Test folder
    │   └── problem-name.spec.js  # Jest test file
    └── ...
```

## How to Use This Project

### 1. Start with the First Problem

Begin with **Two Sum** in the `arrays-hashing` folder:
```bash
npm test -- blind75/arrays-hashing/__spec__/two-sum.spec.js
```

This will run the test cases and show you if your solution is correct.

### 2. Recommended Learning Path

Follow this order for optimal learning:

1. **Arrays & Hashing** (8 problems) - Foundation
2. **Two Pointers** (5 problems) - Build on arrays
3. **Sliding Window** (4 problems) - Pattern recognition
4. **Binary Search** (4 problems) - Search algorithms
5. **Linked List** (6 problems) - Pointer manipulation
6. **Trees** (10 problems) - Recursion and tree traversal
7. **Graphs** (9 problems) - BFS/DFS, graph algorithms
8. **1D Dynamic Programming** (10 problems) - DP fundamentals
9. **Intervals** (5 problems) - Interval manipulation
10. **Greedy** (7 problems) - Greedy algorithms
11. **Backtracking** (8 problems) - Exhaustive search
12. **Bit Manipulation** (6 problems) - Bit operations
13. **Heap / Priority Queue** (3 problems) - Heap operations
14. **Advanced Graphs** (3 problems) - MST, shortest path
15. **2D Dynamic Programming** (7 problems) - Advanced DP

### 3. Working on a Problem

For each problem, follow this approach:

#### Step 1: Understand the Problem (5-10 minutes)
- Read the problem description carefully
- Look at the examples
- Identify the input/output format
- Note any constraints

#### Step 2: Think About the Approach (10-15 minutes)
- What data structures could help?
- What algorithm patterns match?
- What is the time/space complexity target?
- Draw diagrams if helpful

#### Step 3: Solve on Your Own (15-30 minutes)
- Try to implement without looking at solutions
- Write pseudocode first if needed
- Focus on correctness first, optimize later

#### Step 4: Review and Optimize (10-15 minutes)
- Check time and space complexity
- Look for edge cases you might have missed
- Compare with alternative approaches

#### Step 5: Run Test Cases
```bash
npm test -- [category]/__spec__/problem-name.spec.js
```

#### Step 6: Update Progress
- Update `PROGRESS.md` when you complete a problem
- Add notes about any difficulties or insights

### 4. Using the Template

When starting a new problem, use both template files:

```bash
cd coding-practice/blind75
cp TEMPLATE.js [category]/your-problem.js
cp TEMPLATE.spec.js [category]/__spec__/your-problem.spec.js
```

Then fill in:
- **your-problem.js**: Problem name, description, approach, and implementation
- **your-problem.spec.js**: Test cases using Jest framework

### 5. Running Your Solutions

Each problem has a corresponding test file that you can run with Jest:

```bash
# Run specific test file
npm test -- [category]/__spec__/problem-name.spec.js

# Run all tests
npm test

# Run tests in watch mode (auto-reruns on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

Expected output:
```
PASS  [category]/__spec__/problem-name.spec.js
  [Problem Name]
    ✓ Example 1: Basic example (2 ms)
    ✓ Example 2: Another example
    ✓ should handle edge case (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Time:        0.456 s
```

## Study Tips

### Time Management
- **First attempt**: Spend 30-45 minutes per problem
- **Review**: After solving, spend 15-20 minutes understanding optimal solutions
- **Spaced repetition**: Revisit problems after 3 days, then 1 week, then 1 month

### What to Focus On

For each problem, understand:
1. **The Pattern**: Recognize when to apply this approach to other problems
2. **Time Complexity**: Why it's O(n), O(n²), O(log n), etc.
3. **Space Complexity**: Memory usage and trade-offs
4. **Edge Cases**: Empty input, single element, duplicates, etc.
5. **Alternatives**: Are there other ways to solve it?

### Common Patterns to Master

1. **Hash Map**: Quick lookups, frequency counting
2. **Two Pointers**: Sorted arrays, palindrome checking
3. **Sliding Window**: Subarray/substring problems
4. **Binary Search**: Finding elements in sorted data
5. **Recursion**: Trees, backtracking, divide and conquer
6. **BFS/DFS**: Graph traversal, level-order problems
7. **Dynamic Programming**: Overlapping subproblems, optimal substructure
8. **Greedy**: Make locally optimal choices
9. **Heap**: Find top K elements, streaming data

## Tracking Your Progress

### Update PROGRESS.md
After completing a problem, update your progress:

```markdown
| Problem | Status | Date Completed |
|---------|--------|----------------|
| Two Sum | ✅ | 2024-01-15 |
| Contains Duplicate | 🔄 | - |
```

**Completion criteria:**
- Solution file is implemented and correct
- All test cases pass
- You understand the approach and complexity

### Legend:
- ⬜ = Not Started
- 🟡 = In Progress (currently working on it)
- ✅ = Completed
- 🔄 = Reviewing (revisiting for practice)

## Additional Resources

### Video Explanations
- [NeetCode](https://www.youtube.com/@NeetCode) - Excellent explanations for most Blind 75 problems
- [Tech Dose](https://www.youtube.com/@TechDoseNitin) - Detailed algorithm explanations

### Practice Platforms
- [LeetCode](https://leetcode.com) - Original source, has discussion forums
- [CodeSignal](https://codesignal.com) - Practice with interview-style questions

### Learning Resources
- [LeetCode Discuss](https://leetcode.com/discuss/) - Community solutions and discussions
- [Grokking the Coding Interview](https://www.educative.io/courses/grokking-the-coding-interview) - Pattern-based learning

## Common Mistakes to Avoid

1. **Rushing to see solutions**: Spend at least 15-20 minutes thinking before looking at answers
2. **Ignoring time complexity**: Always analyze and understand your solution's complexity
3. **Not reviewing**: After solving, look at better solutions and understand why they're better
4. **Skipping test cases**: Always run through edge cases mentally and in code
5. **Memorizing without understanding**: Focus on the pattern, not the exact code
6. **Not revisiting**: Spaced repetition is key to retention

## Setting Up a Study Schedule

### Intensive (1-2 problems/day): 6-8 weeks
Best if you're preparing for interviews soon.

### Moderate (3-4 problems/week): 5-6 months
Good balance for consistent learning.

### Casual (1-2 problems/week): 9-12 months
Gradual approach for long-term skill building.

### Sample Weekly Schedule (Moderate pace)

**Day 1 (Monday)**: Start 2 new problems
- Morning: Read problems, think about approaches
- Evening: Implement solutions, run tests

**Day 2 (Wednesday)**: Review and practice
- Review solutions from Day 1
- Re-solve 1 problem from previous week

**Day 3 (Friday)**: Complete and reflect
- Finish any incomplete problems
- Update progress
- Note patterns learned

**Day 4 (Weekend)**: Optional - Explore related problems or relax

## Troubleshooting

### "Solution doesn't work on LeetCode"
- Check that you're using the exact same function signature
- LeetCode uses different test cases; ensure your solution handles edge cases
- Some problems have different input/output formats

### "I can't figure out the pattern"
- That's okay! Look at the solution category to get hints
- Try to understand the approach before reading the code
- Note what made it difficult for future reference
- Check similar problems in the same category for pattern recognition

### "I keep forgetting solutions"
- This is normal and part of the learning process
- Revisit problems after a few days
- Create flashcards or notes about patterns
- Focus on understanding rather than memorizing

## Next Steps

1. ✅ Read this guide
2. ✅ Start with "Two Sum" problem
3. ✅ Run tests with Jest to verify your solution
4. ✅ Complete at least 3 problems from Arrays & Hashing
5. ✅ Update your progress in PROGRESS.md
6. ✅ Reflect on patterns you're noticing

Remember: Consistency beats intensity. It's better to solve 1-2 problems every week than to cram 10 problems in a weekend and then stop.

Good luck with your coding practice! 🚀

If you have questions or need help, feel free to revisit this guide or seek help from the community resources listed above.