

exports.Cell = function (locationX, locationY, value, possibleValueList){
    this.locationX = locationX;
    this.locationY = locationY;
    this.value = value;
    this.possibleValueList = possibleValueList;
    //this.setValue = setValue();
}

// function setValue(val){
//     if (possibleValueList.indexOf(val) > -1 ){
//         value = val;
//         updateArrayList(val);
//         return true; 
//     } else {
//         // the values is not in the list of possible values
//         return false; // the value was not added 
//         u
//     }
// }


exports.setValue = function(val){
    value = val;
    // if (possibleValueList.indexOf(val) > -1 ){
    //     // the value is in the list of possible values
    //     value = val;
    //     updateArrayList(val);
    //     return true; // the value was added
    // } else {
    //     // the values is not in the list of possible values
    //     return false; // the value was not added 
    //     u
    // }
}

exports.setPosition = function (x,y){
    locationX = x;
    locationY = y;
}

exports.updatePossibleValues = function (takenValue){
    possibleValueList.splice( possibleValueList.indexOf(takenValue), 1 );

    if (possibleValueList.length === 1) {
        setValue(possibleValueList[0]);
    }
}

exports.calculatePossibleValues = function (columnList, rawList, boxList){
    
    for (var columnIter = 0; columnIter < columnList.length; columnIter++){
        if (possibleValueList.indexOf(columnList[columnIter]) > -1 ){
            // if a valur exist in a columnt it needs to be remove from the possible list
            possibleValueList.splice( possibleValueList.indexOf(columnList[columnIter]), 1 );
        } 
    }

    for (var rawIter = 0; rawIter < rawList.length; rawIter++){
        if (possibleValueList.indexOf(rawList[rawIter]) > -1 ){
            // if a valur exist in a columnt it needs to be remove from the possible list
            possibleValueList.splice( possibleValueList.indexOf(crawList[rawIter]), 1 );
        } 
    }

    for (var boxIter = 0; boxIter < boxList.length; boxIter++){
        if (possibleValueList.indexOf(boxList[boxIter]) > -1 ){
            // if a valur exist in a columnt it needs to be remove from the possible list
            possibleValueList.splice( possibleValueList.indexOf(boxList[boxIter]), 1 );
        } 
    }
}



exports.updateArrayList = function(value){

}


exports.findBoxIndex = function (cell, sudokuSize){

    var xBox = cell.x / sudokuSize;
    var yBox = cell.y / sudokuSize;

    for (var i =0; i < sudokuSize; i++){
        if  (xBox >= i && xBox < i+1){
            for (var j = 0;  j < sudokuSize; j++){
                if (yBox >= j && yBox < j+1){
                    console.log("the box number is " + (i + (j*sudokuSize) ));
                    boxNumber = i + (j*sudokuSize);
                    return boxNumber;
                }
            }
        }
    }

}


function updateArray(array, value){
    return (array.push(value));
}





