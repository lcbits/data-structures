

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.holder = [];
  this.nodeHolder = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.holder.push(node);
  this.nodeHolder[node] = {};
  this.nodeHolder[node].value = node;
  this.nodeHolder[node].destination = 0;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var key in this.nodeHolder){
    if(this.nodeHolder[key].value === node){
      return true;
    }
  }
  return false;
  // for(var i=0; i<this.holder.length; i++){
  //   if(this.holder[i] === node){
  //     return true;
  //   }
  // }
  // return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // this.holder.splice(this.holder.indexOf(node),1);
  delete this.nodeHolder[node];

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  
//Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check if destination is not null
  if(this.nodeHolder[fromNode].destination !== undefined){
    if(this.nodeHolder[fromNode].destination.value === toNode){
      return true;
    } else {
        return false;
      } 
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeHolder[fromNode].destination = this.nodeHolder[toNode];
  this.nodeHolder[toNode].destination = this.nodeHolder[fromNode];
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodeHolder[fromNode].destination = 0;
  this.nodeHolder[toNode].destination = 0;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.nodeHolder){
     cb(key);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


