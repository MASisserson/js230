# Traversing Nodes

*Walking the Tree* is a term that describes the process of visiting every node that has a child, grandchild, etc. relationship with a given node, and doing something with each of them.

You can walk the tree with the following function that takes a callback specifying what to do at each node:

```javascript
function walk(node, callback) {
  callback(node);
  for (let idx = 0; idx < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

// An example of it in action:
walk(document.body, node => {
  console.log(node.nodeName);
});
```
