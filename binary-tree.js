/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
  
    const queue = [this.root];
    let depth = 1;
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        // Check if the current node is a leaf node
        if (!currentNode.left && !currentNode.right) {
          return depth;
        }
  
        // Add child nodes to the queue
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
  
      // Move to the next level
      depth++;
    }

    return 0;
  }
  

 
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let depth = 0;
    if(!this.root) return depth;

    let toVisitStack = [this.root]
    while(toVisitStack.length){
      let current = toVisitStack.pop()
      if(current.left || current.right){
          depth++;
          if(current.left) toVisitStack.push(current.left)
          if(current.right) toVisitStack.push(current.right)
      }
      if(toVisitStack.length===0) return depth;
    }

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let smallestVal = null;
    if(!this.root) return smallestVal;

    let toVisitStack = [this.root]
    while(toVisitStack.length){
      let current = toVisitStack.pop()
      if(smallestVal === null && lowerBound < current.val ) {
        smallestVal = current.val
      } else if(lowerBound < current.val && current.val < smallestVal){
        smallestVal = current.val
      }
      if(current.left) toVisitStack.push(current.left)
      if(current.right) toVisitStack.push(current.right)
    }
    return smallestVal
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (!this.root || !node1 || !node2) return false;

    const queue = [this.root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        let foundNode1 = false;
        let foundNode2 = false;

        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift();

            if (current.left && (current.left === node1 || current.left === node2)) {
                if (foundNode1 || foundNode2) {
                    // If we've already found one of the nodes at this level, but not both, they can't be cousins.
                    return false;
                }
                foundNode1 = current.left === node1;
                foundNode2 = current.left === node2;
            }

            if (current.right && (current.right === node1 || current.right === node2)) {
                if (foundNode1 || foundNode2) {
                    // If we've already found one of the nodes at this level, but not both, they can't be cousins.
                    return false;
                }
                foundNode1 = current.right === node1;
                foundNode2 = current.right === node2;
            }

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        if (foundNode1 && foundNode2) {
            // If we've found both nodes at this level, they are cousins.
            return true;
        }

        if (foundNode1 || foundNode2) {
          // If we've found one of the nodes at this level, but not both, they can't be cousins.
          return false;
      }

    }

    // If we reach this point, the nodes are not in the tree or are not at the same level.
    return false;
}


  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, currentNode=this.root) {
    // base case 1: empty tree
    if (currentNode === null) return null;

    // base case 2: root is one of the target nodes
    if (currentNode === node1 || currentNode === node2) return currentNode;

    // recursively search the left sub-tree
    const left = this.lowestCommonAncestor(node1, node2, currentNode.left);

    // recursively search the right sub-tree
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);

    // if neither left nor right is null, currentNode is the ancestor
    if (left !== null && right !== null) return currentNode;
    
    // if one node is not null, return it
    if (left !== null || right !== null) return left || right;
    
    // left and right are both null, return null
    if (left === null && right === null) return null;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
