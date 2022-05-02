const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

  constructor(data) {
    this.tree =  null;
  }

  root() {
    return this.tree;
  }




  add(data) {
    const newNode = new Node(data);
    if(!this.tree){
      this.tree = newNode;
      return;
    }

    let currentNode = this.tree;

    while(true){
      if( newNode.data<currentNode.data ){
        if(!currentNode.left){
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else if (newNode.data>currentNode.data) {
        if(!currentNode.right){
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;

      } else{
        return;
      }




    }

  }




  has(data) {
    return !!this.find(data)
  }

  find(data) {
    let currentNode = this.tree;
    
    while(true) {
      if (data === currentNode.data) return currentNode;
      if (data > currentNode.data) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return null;
        }
      }
      if (data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return null;
        }
      }
    }

  }

  remove(data) {
    this.deleteNode(this.tree, data);
  }

  deleteNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data);
      return node;
    } else if (data === node.data) {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      const newNode = this.searchMin(node.right);
      node.data = newNode.data;
      node.right = this.deleteNode(node.right, newNode.data);
      return node;
    }
  }

  searchMin(node) {
    if (node.left === null) return node;
    else return this.searchMin(node.left);
  }


  min() {
    let currentNode = this.tree;

    if (!currentNode) return null;
    
    while(1) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        return currentNode.data;
      }
    }
  }

  max() {
    let currentNode = this.tree;

    if (!currentNode) return null;
    
    while(1) {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        return currentNode.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};