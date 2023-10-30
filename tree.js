/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    // if(!this.root) return sum;
    // let toVisitQueue = [this.root]
    // while(toVisitQueue.length){
    //   console.log(toVisitQueue)
    //   let current = toVisitQueue.shift()
    //   sum += current.val
    //   for(let child of current.children){
    //     toVisitQueue.push(child)
    //   }
    // }

    let toVisitStack = [this.root]
    while(toVisitStack.length){
      let current = toVisitStack.pop()
      sum += current.val
      for(let child of current.children){
        toVisitStack.push(child)
      }
    }

    return sum;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    if(!this.root) return count;
    // let toVisitQueue = [this.root]
    // while(toVisitQueue.length){
    //   let current= toVisitQueue.shift();
    //   if(current.val % 2===0) count++;
    //   for(let child of current.children){
    //     toVisitQueue.push(child);
    //   }
    // }

    let toVisitStack = [this.root]
    while(toVisitStack.length){
      let current = toVisitStack.pop()
      if(current.val % 2 ===0 )count++;
      for(let child of current.children){
        toVisitStack.push(child)
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    if(!this.root) return count;
    // let toVisitQueue = [this.root]
    // while(toVisitQueue.length){
    //   let current= toVisitQueue.shift();
    //   if(current.val > lowerBound) count++;
    //   for(let child of current.children){
    //     toVisitQueue.push(child);
    //   }
    // }

    let toVisitStack = [this.root]
    while(toVisitStack.length){
      let current = toVisitStack.pop()
      if(current.val > lowerBound )count++;
      for(let child of current.children){
        toVisitStack.push(child)
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
