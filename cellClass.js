
function Cell(locationX, locationY, value, possibleValueList) {
    this.locationX = locationX;
    this.locationY = locationY;
    this.value = value;
    this.possibleValueList = possibleValueList;
}

Cell.prototype.updateValue = function (val) {

    if (this.possibleValueList.indexOf(parseInt(val)) > -1) {
        this.value = val;
    } else {
        console.log("warning: wrong value ");
    }
};

Cell.prototype.setPosition = function (x, y) {
    this.locationX = x;
    this.locationY = y;
}

Cell.prototype.findBoxIndex = function (arraySize) {

    var xBox = this.locationX / arraySize;
    var yBox = this.locationY / arraySize;

    for (var i = 0; i < arraySize; i++) {
        if (xBox >= i && xBox < i + 1) {
            for (var j = 0; j < arraySize; j++) {
                if (yBox >= j && yBox < j + 1) {
                    var index = i + (j * arraySize);
                    return index;
                }
            }
        }
    }
}

Cell.prototype.findCellIndex = function (arraySize) {

    var xIndex = this.locationX;
    var yIndex = this.locationY;

    for (var i = 0; i < arraySize; i++) {
        if (xIndex >= i && xIndex < i + 1) {
            for (var j = 0; j < arraySize; j++) {
                if (yIndex >= j && yIndex < j + 1) {
                    var index = i + (j * arraySize);
                    return index;
                }
            }
        }
    }
}

Cell.prototype.calculatePossibleValueList = function (sudokuSize, arrayBox, arrayColumn, arrayRaw) {
    var boxIndex = this.findBoxIndex(Math.sqrt(sudokuSize));
    var possibleValues = [];
    for (var iter = 1; iter <=sudokuSize; iter++){
        possibleValues.push(iter);
    }
    
    for (var iter = 0; iter <arrayBox[boxIndex].length; iter++){
      
        var index = possibleValues.indexOf(parseInt(arrayBox[boxIndex][iter]));
        if (index > -1) {
            possibleValues.splice(index, 1);
        }
        
    }
    for (var iter = 1; iter <=arrayColumn[this.locationX].length; iter++){
        var index = possibleValues.indexOf(parseInt(arrayColumn[this.locationX][iter]));
        if (index > -1) {
            possibleValues.splice(index, 1);
        }
    }
    for (var iter = 1; iter <=arrayRaw[this.locationY].length; iter++){
        var index = possibleValues.indexOf(parseInt(arrayRaw[this.locationY][iter]));
        if (index > -1) {
            possibleValues.splice(index, 1);
        }
    }
    this.possibleValueList = possibleValues;
        
}

Cell.prototype.updateSudokuArrays = function (sudokuSize, arrayBox, arrayColumn, arrayRaw){
    var boxIndex = this.findBoxIndex(Math.sqrt(sudokuSize));
   
    
    // if the value does not already exist in the arrays then add it, 
    if (!arrayColumn[this.locationX].indexOf(parseInt(this.value))){
            
        arrayColumn[this.locationX].push(this.value);
    } 
    if (!arrayRaw[this.locationY].indexOf(parseInt(this.value)) <= -1){
        arrayRaw[this.locationY].push(this.value);
    } 
    if (!arrayBox[boxIndex].indexOf(parseInt(this.value)) <= -1){
        arrayBox[boxIndex].push(this.value);
    } 

    
    return ([arrayBox, arrayColumn, arrayRaw]);
}

module.exports = Cell;