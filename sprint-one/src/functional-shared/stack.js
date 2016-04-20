var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  var length = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  size: function(){
    return length > 0 ? length : 0;
  },

  push: function(value){
    this[length] = value;
    length++;
  },

  pop: function(){
    var popped = this[length-1];
    delete this[length-1];
    length--;
    return popped;
  }
};

length = 0
created stack[0] = value
length = 1
created stack[1] = b
length = 2
removed stack[1]
length = 1

