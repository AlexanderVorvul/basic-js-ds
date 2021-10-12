const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList( l, k ) {
  let nodeL = l;
  let result = null;
  let resultNode = null;
  while (nodeL) {    
    if (nodeL.value !== k){
      const newNode = new ListNode(nodeL.value);
      if (result === null) { result = newNode; resultNode = result; }
        else { resultNode.next = newNode; resultNode = newNode; }
    }
    nodeL = nodeL.next;
  }
  return result;
}
