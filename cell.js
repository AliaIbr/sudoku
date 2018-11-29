

exports.Cell = function (locationX, locationY, value, possibleValueList) {
    this.locationX = setPosition(locationX);
    this.locationY = setPosition(locationY);
    this.value = setValue(value, possibleValueList);
    this.possibleValueList = setPossibleValues(possibleValueList);
    //this.setValue = setValue();
}

function setValue(val, possibleValueList) {
    console.log("updating the values " + val)
    console.log(possibleValueList);

    if (possibleValueList.indexOf(parseInt(val)) > -1) {
        console.log("true");
        return val;
        //updateArrayList(val);
        //return true;
    } else {
        console.log("false")
        // the values is not in the list of possible values
        return false; // the value was not added 
    }
}

function setPosition(x) {
    return x;
}


function setPossibleValues(values) {
    return values;
}


exports.possibleValueList = function (cell, sudokuSize, columnList, rawList, boxList) {
    var boxIndex = findBoxIndex(cell, Math.sqrt(sudokuSize));
    var possibleValues = [];
    for (var i=1; i <= sudokuSize; i++){
        if (columnList[cell.locationY].indexOf(parseInt(i)) > -1 || rawList[cell.locationX].indexOf(parseInt(i)) > -1  || boxList[boxIndex].indexOf(parseInt(i)) > -1) {

        } else {
            possibleValues.push[i];
        }
    }
        
}


exports.updatePossibleValues = function (takenValue) {
    possibleValueList.splice(possibleValueList.indexOf(takenValue), 1);

    if (possibleValueList.length === 1) {
        setValue(possibleValueList[0]);
    }
}

// exports.calculatePossibleValues = function (columnList, rawList, boxList) {

//     for (var columnIter = 0; columnIter < columnList.length; columnIter++) {
//         if (possibleValueList.indexOf(columnList[columnIter]) > -1) {
//             // if a valur exist in a columnt it needs to be remove from the possible list
//             possibleValueList.splice(possibleValueList.indexOf(columnList[columnIter]), 1);
//         }
//     }

//     for (var rawIter = 0; rawIter < rawList.length; rawIter++) {
//         if (possibleValueList.indexOf(rawList[rawIter]) > -1) {
//             // if a valur exist in a columnt it needs to be remove from the possible list
//             possibleValueList.splice(possibleValueList.indexOf(crawList[rawIter]), 1);
//         }
//     }

//     for (var boxIter = 0; boxIter < boxList.length; boxIter++) {
//         if (possibleValueList.indexOf(boxList[boxIter]) > -1) {
//             // if a valur exist in a columnt it needs to be remove from the possible list
//             possibleValueList.splice(possibleValueList.indexOf(boxList[boxIter]), 1);
//         }
//     }
// }



exports.updateArrayList = function (value) {
}

var findBoxIndex = exports.findBoxIndex = function (cell, arraySize) {

    var xBox = cell.locationX / arraySize;
    var yBox = cell.locationY / arraySize;

    for (var i = 0; i < arraySize; i++) {
        if (xBox >= i && xBox < i + 1) {
            for (var j = 0; j < arraySize; j++) {
                if (yBox >= j && yBox < j + 1) {
                    //console.log("the  number is " + i + " + " + j + " * " + arraySize);
                    //console.log("the  number is " + (i + (j * arraySize)));
                    var index = i + (j * arraySize);
                    return index;
                }
            }
        }
    }
}


exports.findCellIndex = function (cell, arraySize) {

    var xIndex = cell.locationX;
    var yIndex = cell.locationY;

    for (var i = 0; i < arraySize; i++) {
        if (xIndex >= i && xIndex < i + 1) {
            for (var j = 0; j < arraySize; j++) {
                if (yIndex >= j && yIndex < j + 1) {
                    //console.log("the  number is " + i + " + " + j + " * " + arraySize);
                    //console.log("the  number is " + (i + (j * arraySize)));
                    var index = i + (j * arraySize);
                    return index;
                }
            }
        }
    }
}


exports.updateSudokuArrays = function (cell, sudokuSize, arrayBox, arrayColumn, arrayRaw){
    var boxIndex = cell.findBoxIndex(cell, Math.sqrt(sudokuSize));
    console.log("the box index is " + boxIndex);
    // if the value does not already exist in the arrays then add it, 
    // else maybe send a message ??
    if (arrayColumn[cell.locationY].indexOf(parseInt(i)) > -1){
        arrayColumn[cell.locationY].push(cell.value);
    } 
    if (arrayRaw[cell.locationX].indexOf(parseInt(i)) > -1){
        arrayRaw[cell.locationX].push(cell.value);
    } 
    if (arrayBox[boxIndex].indexOf(parseInt(i)) > -1){
        arrayBox[boxIndex].push(cell.value);
    } 
    
    return ([arrayBox, arrayColumn, arrayRaw]);
}


function updateArray(array, value) {
    return (array.push(value));
}




// exports.setValue = function(val){
//     value = val;
//     if (possibleValueList.indexOf(val) > -1 ){
//         // the value is in the list of possible values
//         value = val;
//         updateArrayList(val);
//         return true; // the value was added
//     } else {
//         // the values is not in the list of possible values
//         return false; // the value was not added 
//         u
//     }
// }

// exports.setPosition = function (x,y){
//     locationX = x;
//     locationY = y;
// }