

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var indexArray = [];
  var keyValuePair = [key,value];
  //go into storage[index]
  // if(this._storage.get(index) !== []){
  //   var newIndexArray = this._storage.get(index).push(keyValuePair);
  //   this._storage.set(index, newIndexArray);
  // } else {
  //     indexArray.push(keyValuePair);
  //     this._storage.set(index, indexArray);
  // }
  
// if empty, set index to the first value
  if(this._storage.get(index) === undefined){
    indexArray.push(keyValuePair);
    this._storage.set(index, indexArray);
  }
  // if not empty,
  if(this._storage.get(index) !== undefined){
    //get the value, store it in a variable
    var temp = this._storage.get(index);
    // //push the variable into the indexArray
    // indexArray.push(temp);
    //push the new value into the indexArray
    temp.push([key, value]);
    //set the indexArray into index
    this._storage.set(index, temp);
  // console.log(this._storage.get(index));
}
  // console.log(index, value);
  // console.log(this._storage.get(index));
  // console.log(indexArray);


};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  
  var bigArrayOfKeyValuePairs = this._storage.get(index);

  for(var i=0; i<bigArrayOfKeyValuePairs.length; i++){
    if(bigArrayOfKeyValuePairs[i][0] === key){
      console.log(bigArrayOfKeyValuePairs);
      return bigArrayOfKeyValuePairs[i][1];
    } else {
      return value;
    }
  }
 

};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  
  var bigArrayOfKeyValuePairs = this._storage.get(index);

  for(var i=0; i<bigArrayOfKeyValuePairs.length; i++){
    if(bigArrayOfKeyValuePairs[i][0] === key){
      bigArrayOfKeyValuePairs[i][1] = undefined;
    }
  }
  
  // this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// var newTable = new HashTable();
// console.log(newTable.insert('Steven', 'Seagal'));
// console.log(newTable.insert('St', 'Sgal'));
// console.log(newTable.insert('ven', 'Sgal'));
// // console.log(newTable.remove('Steven'));
// // console.log(newTable.retrieve('Steven'));
// console.log(newTable.retrieve('Steven'));
//   console.log(newTable.retrieve('St'));
//     console.log(newTable.retrieve('ven'));
