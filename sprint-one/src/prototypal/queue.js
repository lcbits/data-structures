var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(queueMethods);
  stack.length = 0;
  stack.tracker = 0;
  return stack;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.length] = value;
  this.length++;
}

queueMethods.dequeue = function(){
  var temp = this[this.tracker];
  delete this[this.tracker];
  this.tracker++;
  return temp;
}

queueMethods.size = function(){
  return this.length - this.tracker > 0 ? this.length - this.tracker : 0;
}

