var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {}
  queue.length = 0;
  queue.tracker = 0; 

  _.extend(queue, queueMethods);
  
  return queue;
};

var queueMethods = {

  enqueue: function(value){
    this[this.length] = value;
    this.length++;
  },

  dequeue: function(){
    var dequeued = this[this.tracker];
    delete this[this.tracker];
    this.tracker++;
    return dequeued;
  },

  size: function(){
    return this.length - this.tracker > 0 ? this.length - this.tracker : 0;
  }

};
