class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports.BinarySearchTree = class {
  constructor() {
    this.root = null;
  }

  insert = (val) => {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  };

  find = (val) => {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (current.value === val) return current.value;
      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  };

  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.value === val) return true;
      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  BFS = () => {
    const data = [];
    const queue = [this.root];
    let node = null;

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    return data;
  };

  DFSPreOrder = () => {
    const data = [];
    function traverse(node) {
      data.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  };

  DFSInOrder = () => {
    const data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  };

  DFSPostOrder = () => {
    const data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  };
};
