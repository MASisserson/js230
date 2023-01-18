# Tree Slicing

Rules:
1. sliceTree is similar to slice but different in the sense that `slice isn't inclusive on the right hand side.
2. End index doesn't have to be the "innermost" child id.
3. Only consider element nodes.
4. Only elements that have `body` as an ancestor (parent, grandparent, etc.) are sliceable.
5. If the `id` of either argument is not in the DOM, return `undefined`
6. If no path between the start element and end element, return `undefined`

Plan:
1. Handle `undefined` case of `id` not existing and case of not having `body` as an ancestor.
  a. Check to see if an element can be found with an id for both arguments. If not, return `undefined`.
  b. Use `Node.contains()` to determine if the body element contains the `childID` element
2. Start at the `childID` element and work up, capturing the childID element and every parent element henceforth as a string of its `tagName` and add it to the collection.
  a. Loop until either:
    1. The `parentID` element is found and added to the collection.
      -> In this case, return the collection after adding the `parentID` tagName
    2. The parent element is the `body` element.
      -> In this case, return `undefined`

# Coloring

Mental Model:
Write a function, `colorGeneration()`, that takes an integer and applies the "generation-color" class to elements at that level of indentation in the HTML.

input: integer
result: class applied to correct elements

Central Challenge:
Identifying elements at a specific indentation level.

Plan:
1. Find the elements at the desired indentation level
  a. Use an internal recursive function that takes an integer and an elementNode.
    -> The function either adds the "generation-color" class to the element if the function is passed 0,
    -> or calls itself with every elementChild of the elementNode and a decremented integer in sequence.

# Node Swap

Mental Model:
Write a function, `nodeSwap()` that takes 2 id integers and swaps the nodes that have those ids.

Rules:
1. Invalid Swap if...
  a. At least one of the id attributes doesn't exist.
  b. At least one of the nodes is a child of the other.
2. The whole node hierarchy from the node on is moved along with the node in the switch.

Plan:
1. Check if invalid arguments:
  a. if id attributes don't exist.
    `getElementById` returns null
  b. if one of the nodes is a child of the other
    `node.contains()`
2. Identify the location of the first node.
  a. Find the node.
  b. Find the node's parent.
  c. Find the node's index in `childNodes`
3. Save a reference to the second node.
  a. Set a variable to reference the second node
4. Replace the second node with the first node.
  a. `parent.replaceChild(node, targetNode)`
5. Place the second node where the first node was.
  a. `parent.insertBefore(secondNode, firstNodeOriginalIndex)`
