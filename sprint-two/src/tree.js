var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  //this array is made up of newTree "nodes"

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  var recurseFunc = function (node, target){

    //base case: if all nodes have been searched, array is empty 
        //return false

    //if the node's value contains target, return true
    if(node.value === target){ // node.value
      return true;
    }

    //recursive case: if the node's children array has nodes, loop through each node
    if(node.children.length > 0){
      for(var i=0; i<node.children.length; i++){
        if(recurseFunc(node.children[i], target)){
          return true;
        }
      }
      
    }
    //if the node has no children, 
    return false;
  };

  return recurseFunc(this, target);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
