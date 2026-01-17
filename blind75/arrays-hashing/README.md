# Arrays & Hashing

This directory contains solutions for the Arrays & Hashing problems from the Blind 75 LeetCode problem set. These problems focus on array manipulation and hash map usage, which are fundamental data structures in programming.

## 📚 Problems

| # | Problem | Difficulty | Status | LeetCode |
|---|---------|------------|--------|----------|
| 1 | [Two Sum](./two-sum.js) | Easy | ✅ | [1](https://leetcode.com/problems/two-sum/) |
| 2 | [Contains Duplicate](./contains-duplicate.js) | Easy | ✅ | [217](https://leetcode.com/problems/contains-duplicate/) |
| 3 | [Valid Anagram](./valid-anagram.js) | Easy | ⬜ | [242](https://leetcode.com/problems/valid-anagram/) |
| 4 | [Group Anagrams](./group-anagrams.js) | Medium | ⬜ | [49](https://leetcode.com/problems/group-anagrams/) |
| 5 | [Top K Frequent Elements](./top-k-frequent-elements.js) | Medium | ✅ | [347](https://leetcode.com/problems/top-k-frequent-elements/) |
| 6 | [Product of Array Except Self](./product-of-array-except-self.js) | Medium | ⬜ | [238](https://leetcode.com/problems/product-of-array-except-self/) |
| 7 | [Valid Sudoku](./valid-sudoku.js) | Medium | ⬜ | [36](https://leetcode.com/problems/valid-sudoku/) |
| 8 | [Longest Consecutive Sequence](./longest-consecutive-sequence.js) | Medium | ⬜ | [128](https://leetcode.com/problems/longest-consecutive-sequence/) |

## 📊 Progress

```
Total: 8 | Completed: 3 | In Progress: 0 | Remaining: 5
```

## 📂 File Structure

```
arrays-hashing/
├── README.md                                  # This file
├── two-sum.js                                # Solution for Two Sum
├── contains-duplicate.js                      # Solution for Contains Duplicate
├── valid-anagram.js                          # Solution for Valid Anagram
├── group-anagrams.js                         # Solution for Group Anagrams
├── top-k-frequent-elements.js                # Solution for Top K Frequent Elements
├── product-of-array-except-self.js            # Solution for Product of Array Except Self
├── valid-sudoku.js                          # Solution for Valid Sudoku
├── longest-consecutive-sequence.js            # Solution for Longest Consecutive Sequence
└── __spec__/                                # Test files folder
    ├── two-sum.spec.js                       # Jest tests for Two Sum
    ├── contains-duplicate.spec.js             # Jest tests for Contains Duplicate
    ├── valid-anagram.spec.js                 # Jest tests for Valid Anagram
    ├── group-anagrams.spec.js                # Jest tests for Group Anagrams
    ├── top-k-frequent-elements.spec.js       # Jest tests for Top K Frequent Elements
    ├── product-of-array-except-self.spec.js   # Jest tests for Product of Array Except Self
    ├── valid-sudoku.spec.js                 # Jest tests for Valid Sudoku
    └── longest-consecutive-sequence.spec.js   # Jest tests for Longest Consecutive Sequence
```

## 🎯 Key Concepts

### Arrays
- **Access**: O(1) time complexity for index-based access
- **Insert/Delete**: O(n) time complexity (requires shifting elements)
- **Suitable for**: Sequential data, indexing, caching

### Hash Maps / Hash Tables
- **Lookup**: O(1) average time complexity
- **Insert/Delete**: O(1) average time complexity
- **Suitable for**: Fast lookups, frequency counting, caching

### Common Patterns

1. **Two Sum Pattern**
   - Use a hash map to store complement values
   - One pass through the array
   - Time: O(n), Space: O(n)

2. **Frequency Counting**
   - Count occurrences of elements
   - Use hash map to track frequencies
   - Time: O(n), Space: O(n)

3. **Sliding Window with Hash Map**
   - Track elements in current window
   - Use hash map for quick lookups
   - Time: O(n), Space: O(n)

4. **Hash Map for Relationships**
   - Map one value to another
   - Track relationships between elements
   - Time: O(n), Space: O(n)

## 💡 Tips for Solving

### General Approach

1. **Understand the Problem**
   - Read the problem carefully
   - Identify input/output format
   - Note constraints

2. **Consider Data Structures**
   - When you need quick lookups → Hash Map
   - When you need to track frequency → Hash Map
   - When you need to check existence → Set or Hash Map

3. **Analyze Constraints**
   - Time limit considerations
   - Memory limit considerations
   - Edge cases (empty array, single element, duplicates)

4. **Start with Brute Force**
   - Understand the naive approach
   - Identify inefficiencies
   - Optimize with hash maps

### Common Tricks

- **Complement Method**: Instead of finding two numbers that sum to target, find if complement exists
- **Frequency Arrays**: Use arrays instead of hash maps when values are limited
- **Two Pointers**: Sort array and use two pointers (if allowed)
- **Early Termination**: Exit early when solution is found

### Time Complexity Guide

| Operation | Time Complexity |
|-----------|-----------------|
| Array access by index | O(1) |
| Array search (linear) | O(n) |
| Array search (binary) | O(log n) - requires sorted |
| Hash map lookup/insert | O(1) average |
| Array iteration | O(n) |

## 🧪 Running Tests

Each problem has a corresponding test file in the `__spec__` folder:

```bash
# Run tests for a specific problem
npm test -- blind75/arrays-hashing/__spec__/two-sum.spec.js

# Run all tests in this category
npm test -- blind75/arrays-hashing/__spec__

# Run tests in watch mode
npm run test:watch
```

## 📖 Problem-Solving Strategy

### Phase 1: Brute Force (5-10 minutes)
- Solve the problem with the most straightforward approach
- Understand the problem deeply
- Identify the bottlenecks

### Phase 2: Optimization (15-20 minutes)
- Think about how to improve time/space complexity
- Consider hash maps for O(1) operations
- Look for patterns to avoid nested loops

### Phase 3: Implementation (10-15 minutes)
- Write clean, readable code
- Add comments for complex logic
- Handle edge cases

### Phase 4: Testing (5-10 minutes)
- Run provided test cases
- Add more test cases if needed
- Verify time/space complexity

## 🔗 Resources

### Articles
- [Hash Map Explained](https://en.wikipedia.org/wiki/Hash_table)
- [Array Data Structure](https://en.wikipedia.org/wiki/Array_data_structure)

### Practice
- [LeetCode Arrays Tag](https://leetcode.com/tag/array/)
- [LeetCode Hash Table Tag](https://leetcode.com/tag/hash-table/)

## 📝 Notes

- Hash maps provide O(1) average time complexity for lookups, insertions, and deletions
- Trade-off: O(n) space complexity
- Be aware of hash collisions (though rare in practice)
- Consider using arrays instead of hash maps when value range is small and known

## 🎓 Learning Checklist

- [ ] Understand when to use hash maps vs arrays
- [ ] Master the Two Sum pattern (complement method)
- [ ] Practice frequency counting problems
- [ ] Learn to handle edge cases with arrays
- [ ] Understand time vs space trade-offs
- [ ] Be able to implement common hash map operations from scratch

## 🚀 Next Steps

1. Complete all 8 problems in this category
2. Review solutions and understand the patterns
3. Move on to Two Pointers category
4. Revisit these problems after a week for reinforcement

---

**Legend:**
- ✅ = Completed
- 🔄 = In Progress
- ⬜ = Not Started

Happy coding! 🎯
