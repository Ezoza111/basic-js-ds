const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.number = null;
  }

  root() {
    return this.number;
  }

  add(data) {
  this.number = addNumber(this.number, data);

  function addNumber(binaryRoot, number) {
      if(!binaryRoot) {
        return new Node(data);
      }
      if (binaryRoot.data === number) {
        return binaryRoot;
      }
      if (binaryRoot.data > number) {
        binaryRoot.left = addNumber(binaryRoot.left, number);
      } else {
        binaryRoot.right = addNumber(binaryRoot.right, number);
      }
      return binaryRoot;
    }
  }

  has(data) {
    const result = hasData(this.number, data);
    function hasData (binaryRoot, number) {
      if(!binaryRoot) {
        return false;
      }
      if(binaryRoot.data === number) {
        return true;
      }
      if(binaryRoot.data> number) {
        if(binaryRoot.left !== null) {
          return hasData (binaryRoot.left, number)
        } else { return false}
      } else 
          {if(binaryRoot.right !== null) {
          return hasData (binaryRoot.right, number)
        } else { return false}
      }

    }
    return result;
  }

  find(data) {
    const result = findData(this.number, data)
    function findData (binaryRoot, number) {
      if(!binaryRoot) {
        return null;
      }
      if (binaryRoot.data === number) {
        return binaryRoot;
      }
      if (binaryRoot.data > number) {
        return findData(binaryRoot.left, number);
      } else {
        return findData(binaryRoot.right, number);
      }
    }
    return result;
  }

  remove(data) {
    return removeData (this.number, data)
    function removeData (binaryRoot, number) {
      if(!binaryRoot) {
        return null;
      }
      if(binaryRoot.data > number) {
        binaryRoot.left = removeData(binaryRoot.left, number)
        return binaryRoot;
      }
      else if (binaryRoot.data<number) {
        binaryRoot.right = removeData(binaryRoot.right,number)
        return binaryRoot;
      } else {
        if (!binaryRoot.right && !binaryRoot.left) {
          return null;
        }
        if(!binaryRoot.left) {
          binaryRoot = binaryRoot.right;
          return binaryRoot;
        }
        if(!binaryRoot.right) {
          binaryRoot = binaryRoot.left;
          return binaryRoot;
        }
        let minFromRight = binaryRoot.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        binaryRoot.data = minFromRight.data;
        binaryRoot.right = removeData(binaryRoot.right, minFromRight.data)
        return binaryRoot;
      }
    }
  }

  min() {
    const result = findMin(this.number);
    function findMin(binaryRoot) {
      if(!binaryRoot) {
        return null;
      }
      if(binaryRoot.left === null) {
        return binaryRoot.data
      }
      if(binaryRoot != null) {
        return findMin(binaryRoot.left);
      }
    }
    return result;
  }

  max() {
    const result = findMax(this.number);
    function findMax(binaryRoot) {
      if(!binaryRoot) {
        return null;
      }
      if(binaryRoot.right === null) {
        return binaryRoot.data;
      }
      if(binaryRoot.right != null) {
        return findMax(binaryRoot.right);
      }
    }
    return result;
  }
}

module.exports = {
  BinarySearchTree
};