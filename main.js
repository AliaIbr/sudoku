var cell = require("./cellClass.js");
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
            
            // find the cell that needs update
            var insertCell = new cell(chunk[0], chunk[1], chunk[2], [1,2,3,4]);
            var index = insertCell.findCellIndex(sudokuSize);
            var boxIndex = insertCell.findBoxIndex(Math.sqrt(sudokuSize));

            cellList[index].setPosition(chunk[0], chunk[1]);  
            cellList[index].updateValue(chunk[2]);  
            var updatedList = [];
            updatedList = cellList[index].updateSudokuArrays(sudokuSize ,arrayBox, arrayColumn, arrayRaw);
            arrayBox = updatedList[0];
            arrayColumn = updatedList[1];
            arrayRaw = updatedList[2];

            cellList[index].calculatePossibleValueList(sudokuSize, arrayBox, arrayColumn, arrayRaw);


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

            var sudokoCellIndex = 0;
            for (var xIter = 0; xIter < sudokuSize; xIter++){
                for (var yIter = 0; yIter < sudokuSize; yIter ++){
                    cellList[sudokoCellIndex] = new cell(xIter, yIter, 0, initialPossibleValues);
                    sudokoCellIndex ++;
                }
            }

            callback();
        });
    },
    function (callback) {

        recursiveAsyncReadLine(function (err) {
            if (err) {

            } else {
                callback()

            }
        });

    },

], function (err) {
    if (err) {

    } else {
        rl.close()
    }
});


