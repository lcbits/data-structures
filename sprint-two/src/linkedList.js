var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(list.tail === null){
      list.tail = Node(value); //1. set tail to the value being passed in
      list.head = list.tail; //2. set the head and tail to the same value
      list.head.next = Node(value);
    } else {
       // list[list.tail.value] = list.tail; 
        list.tail.next = Node(value); //setting old list.tail's pointer to the new tail node
        list[list.tail.value] = list.tail; //making a new list node for the former ta
        list.tail = Node(value); //1. set tail to the new node

         
    }
    list[value] = Node(value);
  };

  list.removeHead = function() {

    var temp = list.head.next;  
    var headValue = list.head.value;  //1. set temp to hold current head value
     delete list[list.head.value];
     delete list.head; // 2. delete head value
    list.head = temp;  // 3. reset head value to the next value
    return headValue; // 4. return 

  };

  list.contains = function(target) {
    //loop through list using for in loop
    return list.hasOwnProperty(target) ? true : false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


// var checkList = LinkedList();
// checkList.addToTail(4);
// checkList.addToTail(5);
// checkList.addToTail(6);
// checkList.addToTail(7)
// checkList.removeHead()
// console.log(checkList);
// console.log(checkList.contains(5));
// console.log(checkList.contains(7));

/*
 * Complexity: What is the time complexity of the above functions?
 */
