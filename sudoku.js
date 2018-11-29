var cell = require("./cell.js");
// var utils = require("./utils.js");
var async = require('async');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var sudokuSize;
var cellList;
var arrayBox, arrayColumn, arrayRaw;
var ListeIter = [];
var cellList = new Array();



var recursiveAsyncReadLine = function () {
    rl.question('insert cell location and value as x,y,value: ', function (answer) {
        if (answer == 'finish'){
            console.log(cellList);            
            return rl.close(); //closing RL and returning from function.
        } else {
            var cellCoordinate = answer;
            var chunk = cellCoordinate.split(",");
            
            var insertCell = new cell.Cell(chunk[0], chunk[1], chunk[2], [1, 2, 3, 4, 5, 6, 7, 8,9]);
            var possibleValues = cell.possibleValueList(insertCell, sudokuSize, arrayColumn, arrayRaw, arrayBox);
            console.log("possible values ")
            console.log("the value will be " + chunk[2])
            var index = cell.findCellIndex(insertCell, sudokuSize);
            console.log("the cell index is " + index);
            var boxIndex = cell.findBoxIndex(insertCell, Math.sqrt(sudokuSize));
            console.log("the box index is " + boxIndex);
            cellList[index] = insertCell;
            console.log("the list now is ");
            console.log(cellList);
    
            recursiveAsyncReadLine(); //Calling this function again to ask new question
        }   
    });
};


async.series([
    function (callback) {
        rl.question('insert sudoku size (example size 4 means 4x4) ', (answer) => {
            sudokuSize = answer;

            arrayRaw = new Array();
            arrayColumn = new Array();
            arrayBox = new Array();
            for (var arrayIter = 0; arrayIter < sudokuSize; arrayIter++) {
                arrayRaw[arrayIter] = new Array();
                arrayColumn[arrayIter] = new Array();
                arrayBox[arrayIter] = new Array();
            }

            var numberOfCells = sudokuSize * sudokuSize;

            var initialPossibleValues = [];
            for (var i = 0; i < sudokuSize; i++) {
                initialPossibleValues.push(i + 1);
            }
            for (var initiateIter = 0; initiateIter < numberOfCells; initiateIter++) {
                cellList[initiateIter] = new cell.Cell(0, 0, 0, initialPossibleValues);
            }
           // console.log(cellList);

            callback();
        });
    },
    function (callback) {

        recursiveAsyncReadLine(function (err) {
            if (err) {

            } else {
                callback();
            }
        });


    },

], function (err) {
    if (err) {

    } else {
        console.log(cellList);
        rl.close();
    }
});


