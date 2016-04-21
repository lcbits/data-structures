var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.length = 0;
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function(){
  var temp = this[this.length-1];
  delete this[this.length-1];
  this.length--;
  return temp;
};

stackMethods.size = function(){
  return this.length > 0 ? this.length : 0;
};
