/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let counter = 0;
  const answer = [];
  while (counter < l1.length && counter < l2.length) {
    let newSum = l1[counter] + l2[counter] + carry;
    if (newSum >= 10) {
      carry = 1;
      newSum -= 10;
    } else carry = 0;
    answer.push(newSum);
    counter++;
  }
  if (counter < l1.length) {
    if (carry > 0) {
      answer.push(l1[counter] + carry);
      counter++;
    }
    answer.push(...l1.slice(counter));
  }
  if (counter < l2.length) {
    if (carry > 0) {
      answer.push(l2[counter] + carry);
      counter++;
    }
    answer.push(...l2.slice(counter));
  }
  return answer;
};

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

const result = addTwoNumbers(l1, l2);
console.log(result);
