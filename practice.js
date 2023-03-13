//! Problem 8.1 :

// Reverse the Linked listGiven a linked list of N nodes.

// The task is to reverse this list.
// Example 1:Input:
// LinkedList: 1->2->3->4->5->6
// Output: 6 5 4 3 2 1Explanation:
//  After reversing the list,
//  elements are 6->5->4->3->2->1.

//  Example 2:

//  Input:
//  LinkedList: 2->7->8->9->10
//  Output: 10 9 8 7 2
//  Explanation: After reversing the list,
//  elements are 10->9->8->7->2.

//  Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).

//  Constraints: 1 <= N <= 104

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// create the linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// print the original list
console.log("Original list:");
let curr = head;
while (curr) {
  console.log(curr.data);
  curr = curr.next;
}

// reverse the list
head = reverseList(head);

// print the reversed list
console.log("Reversed list:");
curr = head;
while (curr) {
  console.log(curr.data);
  curr = curr.next;
}

//! Problem 8.2: Rotate Linked List
//  Given a singly linked list of size N.
//  The task is to left-shift the linked list by k nodes,
//  where k is a given positive integer smaller than or equal to length of the linked list.
//  Example 1:
//  Input:
//  N = 5
//  value[] = {2, 4, 7, 8, 9}
//  k = 3
//  Output: 8 9 2 4 7
//  Explanation:
//  Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
//  Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

// Example 2:

// Input:
// N = 8
// value[] = {1, 2, 3, 4, 5, 6, 7, 8}
// k = 4
// Output: 5 6 7 8 1 2 3 4

// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).

// Constraints: 1 <= N <= 103 1 <= k <= N

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function leftShiftLinkedList(head, k) {
  if (!head || k <= 0) {
    return head;
  }

  // Find the kth node from the beginning of the list
  let current = head;
  let count = 1;
  while (count < k && current) {
    current = current.next;
    count++;
  }

  // If k is greater than the length of the list, wrap around
  if (!current) {
    current = head;
  }

  // Set the next pointer of the last node to the head of the list
  let lastNode = current;
  while (lastNode.next) {
    lastNode = lastNode.next;
  }
  lastNode.next = head;

  // Set the head of the list to the kth node
  let newHead = current;

  // Set the next pointer of the node immediately before the kth node to null
  while (current.next !== newHead) {
    current = current.next;
  }
  current.next = null;

  return newHead;
}

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(7);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(9);

let k = 3;

let newHead = leftShiftLinkedList(head, k);

// Traverse the linked list and print the data of each node
let current = newHead;
while (current) {
  console.log(current.data);
  current = current.next;
}

//! Problem 8.3: Detect loop in a linked list

// Given a linked list of N nodes.
//  The task is to check if the linked list has a loop.
//  Linkedlist can contain self loop.

//  Example 1:
//  Input:
//  N = 3
//  value[] = {1,3,4}
//  x = 2
//  Output: True
//  Explanation: In above test case N = 3.
//  The linked list with nodes N = 3 is given.Then value of x=2 is given
//  which means last node is connected with xth node of linked list. Therefore, there exists a loop.

//  Example 2:
//  Input:
//  N = 4
//  value[] = {1,8,3,4}
//  x = 0
//  Output: False

//  Explanation: For N = 4 ,x = 0 means then lastNode->next = NULL, then the Linked list does not contain sany loop.

//  Expected Time Complexity: O(N) Expected Auxiliary Space: O(1)

//  Constraints: 1 ≤ N ≤ 104 1 ≤ Data on Node ≤ 103

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function hasLoop(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

let head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = head.next; // Create a loop

let hasLoop = hasLoop(head);

console.log(hasLoop); // Output: true

//! Stack and Queue Problem
//! 8.4: Parenthesis Checker

// Given an expression string x. Examine whether the pairs and the orders of
// “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for exp= “[()]{}{()()}”
//  and 'false' for exp = “[(])”.

//  Example 1:
//  Input:{([])}
//  Output:true

//  Explanation:
//  { ( [ ] ) }. Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.

//  Example 2:
//  Input:
//  ()
//  Output:true
//  Explanation:
//  (). Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balanced way.

//  Example 3:
//  Input:
//  ([]
// Output:false
// Explanation:
// ([]. Here square bracket is balanced but the small bracket is not balanced and Hence , the output will be unbalanced.

// Expected Time Complexity: O(|x|) Expected Auixilliary Space: O(|x|)

// Constraints: 1 ≤ |x| ≤ 32000

function isBalanced(x) {
  const stack = [];
  for (let i = 0; i < x.length; i++) {
    const c = x.charAt(i);
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else if (c === ")" || c === "}" || c === "]") {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (
        (c === ")" && top !== "(") ||
        (c === "}" && top !== "{") ||
        (c === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

//! Problem 8.5: Next Greater ELement

//   Given an array arr{} of size N having distinct elements, the task is to find the next
//   greater element for each element of the array in order of their appearance in the array.

// Next greater element of an element in the array is the nearest element on the right

// which is greater than the current element. If there does not exist next greater of current

// element, then next greater element for current element is -1. For example, next greater

// of the last element is always -1.

// Example 1:
// Input:
// N = 4, arr[] = [1 3 2 4]
// Output:
// 3 4 4 -1
// Explanation:
// In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.

// Example 2:

// Input:
// N = 5, arr[] [6 8 0 1 3]
// Output:
// 8 -1 1 3 -1
// Explanation:
// In the array, the next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 ,
// for 1 it is 3 and then for 3 there is no larger element on right and hence -1.

// Expected Time Complexity : O(N) Expected Auxilliary Space : O(N)

// Constraints: 1 ≤ N ≤ 106 1 ≤ Ai ≤ 1018


function findNextGreater(arr) {
    const stack = [];
    const result = new Array(arr.length).fill(-1);
    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
      }
      stack.push(arr[i]);
    }
    return result;
  }
  

//! Problem 8.6: Implement a Queue using 2 stack

// Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query
//     of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop
//         element from queue and print the poped element)
    
//         Example 1:
//         Input:
//         5
//         1 2 1 3 2 1 4 2
        
//         Output:
//         2 3
        
//         Explanation:
//         In the first testcase
//         1 2 the queue will be {2}


// 1 3 the queue will be {2 3}
// 2   poped element will be 2 the queue will be {3}
// 1 4 the queue will be {3 4}
// 2   poped element will be 3.

// Example 2:
// Input:
// 4
// 1 2 2 2 1 4
// Output:
// 2 -1
// Explanation:
// In the second testcase
// 1 2 the queue will be {2}
// 2  poped element will be 2 and then the queue will be empty 2 the queue is empty and hence -1
// 1 4 the queue will be {4}.

// Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() andO(1) for pop()

// Expected Auxilliary Space : O(1).

// Constraints: 1 <= Q <= 100 1 <= x <= 100


class Queue {
    constructor() {
      this.s1 = []; // main stack
      this.s2 = []; // auxiliary stack
    }
  
    push(x) {
      this.s1.push(x);
    }
  
    pop() {
      if (this.s2.length === 0) {
        while (this.s1.length > 0) {
          this.s2.push(this.s1.pop());
        }
      }
  
      if (this.s2.length === 0) {
        return -1; // queue is empty
      }
  
      return this.s2.pop();
    }
  }
  
