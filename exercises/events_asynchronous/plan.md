# Randomizer

# Reverse Engineer

Original Behavior:
`event.stopPropagation` stops the propagation of the code

# Bold Element + Custom

input: element, callback function acting on element
return: n/a
result: The element gets styled to "bold" and the callback is applied to the element as well. The callback should be optional.

Rules:
1. The callback is optional.

# Context Menus

1. Have both main and sub halt propagation
2. Establish a context-menu event in both. Stop the default behavior in both. Instead:
  a. display an alert box that displays the name of the respective area.

# Selection Filters

1. Grab the two select elements.
2. Grab the options and convert them to 2 respective arrays so they aren't live.
3. Set the events to the clicking of one of the select fields (and any of its options).
4. Determine the value of the select field, from that change the options in the other select field.

# Article Highlighter

1. toggleHighlight function that takes an element and turns highlight to opposite value.
2. helper function to turn off highlight in all values
  Recursively move down. If HTMLElement, turn .highlight off. When childNodes.length === 0 return.
3. Add event to each part that needs it.
  a. Document - highlight `main`
  b. Link - highlight element with id === link.href value after #
  c. Article - highlight article.

# Delegate Event Function

input: parentElement (element), selector (string), eventType (string), callback (function)

1. Implement the recursive callback function used in an earlier assignment.
  ```javascript
  const toChildren = function toChildren(element, selector, eventType, callback) {
    let listenerAdded = undefined;

    if (isMatch(element, selector)) {
      element.addEventListener(eventType, callback);
      listenerAdded = true;
    }

    Array.from(element.children).forEach(child => {
      let childAdded = toChildren(callback, child);

      if (childAdded) {
        listenerAdded = true;
      }
    });

    return listenerAdded;
  };
  ```
2. Make the change to `toChildren`:
  a. the callback should only be called if the child is of the given selector type.
    Check type with the following
      ```javascript
      // Get parent's querySelectorAll for given selector and see if element is present
      const isMatch = function isMatch(element, selector) {
        return Array.from(element.parent.querySelectorAll(selector)).some(ele => {
          return ele === element;
        });
      };
      ```
3. Return true if succeeded
  a. To do so, wrap `toChildren` in a function that returns `toChildren` and keeps track of an array 
