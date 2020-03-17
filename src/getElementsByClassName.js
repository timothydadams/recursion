// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // You should use document.body, element.childNodes and 
  //element.classList
  //children property is similar to childNodes, BUT ONLY CONTAINS
  //element (type 1) nodes!

  //array to store any node elements with className
  var matches = [];

  var search = function(node) {

    //search each element node's classList for className
    if (node.classList.contains(className)) {
      //push to matches array if it does
      matches.push(node);
    }

    //recursively search children if the node has children
    if (node.hasChildNodes()) {
      for (let i = 0; i < node.children.length; i++) {
        search(node.children[i]);
      }
    }
  };

  //start search at document.body node
  search(document.body);

  return matches;

};
