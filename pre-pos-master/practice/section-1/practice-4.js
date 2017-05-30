'use strict';

function collectSameElements(collectionA, objectB) {
  var arr=new Array;
  for(var i=0; i<collectionA.length; i++){
    for(var j=0; j<objectB.value.length;j++){
      if(objectB.value[j]==collectionA[i].key){
        arr.push(collectionA[i].key);
      }
    }
  }
  return arr;
}
