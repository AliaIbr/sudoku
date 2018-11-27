var value;
var locationX;
var locationY; 
var possibleValueList = [];


// methods to define the values 

exports.setValue = function(val){
    if (val == "x"){

    } else {
        this.value = val;
        updateArrayList(val);
    }
}

exports.setPosition = function (x,y){
    this.x = x;
    this.y = y;
}

exports.updatePossibleValues = function (takenValue){
    possibleValueList.splice( possibleValueList.indexOf(takenValue), 1 );

    if (possibleValueList.length === 1) {
        this.setValue(possibleValueList[0]);
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





