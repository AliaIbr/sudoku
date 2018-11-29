var size = 9;
var cell ={x:0, y:3};
var boxNumber;

var smallBoxSize = Math.sqrt(size);
var array =[]; 

findBoxIndex(cell, smallBoxSize);

function findBoxIndex(cell, sudokuSize){

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


// everytime we insert a value 
// 1- find the index of the box array based on the location of the cell
// 2- check if it exist in the corresponding arrays (column(y), raw(x) and box arrays(index))
// if it exist send a warning 
// 3- if it does not exist update all corresponding arrays by pushing the value to the arrays (column(y), raw(x) and box arrays(index))


//1- insert size 
//2- rather thank inserting input -> then solve
// do the following 

// insert cell location 
// inset cell value
// all checks in term of raw and coloumn and box will happen, if success it will set the value and update corresponding column raw annd box
// fail can happen in two cases 
// 1- the cell already has a value in which case you have the option to overright with a msg and all checks will happen 
// 2- the value is taken by raw or column or box