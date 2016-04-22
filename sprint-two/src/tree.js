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
    if(node.value === target){
      return true;
    }

    //recursive case: if the node's children array has nodes, loop through each node
    if(node.children.length > 0){
      for(var i=0; i<node.children.length; i++){
        recurseFunc(node.children[i], target);
      }
      return false;
    }

  };

  return recurseFunc(this,target);




  // var recurseFunc = function(childrenObj, target){
   
  //  if(childrenObj.value === target){
  //   return true;
  //  }

  //  for(var i=0; i<childrenObj.children.length; i++){
  //   return  recurseFunc(childrenObj.children[i].children, target);
  //  }

  // };
    
  // recurseFunc(this.children, target);


  // return _.reduce(this.children, function(passedTest, curr){ //curr = this.children[i] which is an object
  //   if(curr.value === target){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }, false);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 // var testTree = Tree();
 // testTree.addChild(5);
 // testTree.addChild(6);
 // testTree.addChild(7);
 // testTree.children[0].addChild(7);
 // testTree.children[1].addChild(9);
 // console.log('this.children', this.children);
 // console.log(testTree.contains(6));
 // console.log(testTree);
