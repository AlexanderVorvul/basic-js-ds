const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() { this.treeRoot = null; }

  root() { return this.treeRoot; }

  add( data ) {

    let newNode = new Node(data);

    if(this.treeRoot === null) this.treeRoot = newNode;
    else insertNode(this.treeRoot, newNode);

    function insertNode(parentNode, newNode) {
      if(newNode.data < parentNode.data)
        if(parentNode.left === null) parentNode.left = newNode;
          else insertNode(parentNode.left, newNode);
      else
        if(parentNode.right === null) parentNode.right = newNode;
          else insertNode(parentNode.right, newNode);           
    }
  }

  has( data ) {
    let node = this.find(data);    
    return ! (node === null);
  }

  find( data ) {
    return search(this.treeRoot, data)
        
    function search(node, data) {           
      if(node === null) return null;
        else if(data < node.data) return search(node.left, data);
          else if(data > node.data) return search(node.right, data);
            else return node;
        }
  }

  remove( data ) {
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, key) {
      if(node === null) return null;
      else if(key < node.data) {
          node.left = removeNode(node.left, key);
          return node;
      } else if(key > node.data) {
        node.right = removeNode(node.right, key);
        return node;
      } else {

        if(node.left === null && node.right === null) {
            node = null;
            return node;
        } 

        if(node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }

        let minNode = findMinNode(node.right);

        function findMinNode(node) {
          if(node.left === null) return node;
          else return findMinNode(node.left);
        }

        node.data = minNode.data; 
        node.right = removeNode(node.right, minNode.data);
        return node;
      }
    }
  }
  
  min() {
    let m = findMinNode(this.treeRoot);
    
    function findMinNode(node) {
      if(node.left === null) return node;
      else return findMinNode(node.left);
    }

    return m.data;
  }

  max() {
    let m = findMaxNode(this.treeRoot);
    
    function findMaxNode(node) {
      if(node.right === null) return node;
      else return findMaxNode(node.right);
    }

    return m.data;
  }

}
