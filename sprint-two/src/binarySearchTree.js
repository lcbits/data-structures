var BinarySearchTree = function(inputValue) {
  
  //object to store the properties
  var searchNode = {};

  searchNode.value = inputValue ;
  searchNode.left = undefined;
  searchNode.right = undefined;

  _.extend(searchNode, searchMethods);
  
  return searchNode;
};

var searchMethods = {};

//insert method
//takes in value (number to be inserted)
searchMethods.insert = function(newValue){
  //if there is no tree yet, insert it as the first node object
  if(this.value === undefined){
    this.value = newValue;
  } else {
  //otherwise, compare value to the node
   //if value is larger, go to node .right
   if(newValue > this.value) {
      //if node .right is empty, set node .right equal to BinarySearchTree(value)
      if(this.right === undefined){
        this.right = BinarySearchTree(newValue);
      //else run the same comparision on node .right
      } else { 
        this.right.insert(newValue);
      }

   } else { //if value is smaller, go to node .left
     //if node .left is empty, set node .left equal to BinarySearchTree(value)
     if(this.left === undefined){
       this.left= BinarySearchTree(newValue);
     } else {
     //else run the same comparison on node .left
       this.left.insert(newValue);
     }
   }
  }
};
  //contains method
  //takes in a value to be checked against the node's value property
searchMethods.contains = function(containValue){
  //compare the value against node value property
  //if the value is equal to the node's value property
  if(this.value === containValue){
    console.log(this.value);
    //return true
    return true;
    //otherwise check if greater or smaller
  } else {
    //if greater and node .right exists, run the comparison again on node .right's property value
      if(this.value < containValue){
        if(this.right !== undefined){
         return this.right.contains(containValue);         
        } 
      } else {
        if(this.value > containValue){
          if(this.left !== undefined){
            return this.left.contains(containValue);
          }
        }
      }
    return false;  
  }
}
    //if less and node .left exists, run the comparison again on node .left's property value
    //else return false


  //depthFirstLog method
searchMethods.depthFirstLog = function(func){
  //if(this.value !== undefined){
  func(this.value);
  if(this.left !== undefined){
    return this.left.depthFirstLog(func);
  }
  if(this.right !== undefined){
    return this.right.depthFirstLog(func);
  }
  
};




var checkTree = BinarySearchTree(5);
checkTree.insert(5);
checkTree.insert(6);
console.log(checkTree.contains(6));
console.log(checkTree);

/*
 * Complexity: What is the time complexity of the above functions?
 */
