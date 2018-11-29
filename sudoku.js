var cell = require("./cell.js");
var utils = require("./utils.js");
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


var recursiveAsyncReadLine = function () {
    rl.question('insert cell location and value as x,y,value: ', function (answer) {
      if (answer == 'finish') //we need some base case, for recursion
        return rl.close(); //closing RL and returning from function.
        
        var cellCoordinate = answer;
            var chunk = cellCoordinate.split(",");
           // cell.setPosition(chunk[0], chunk[1]);
            cell.setValue(chunk[2]);
      
      recursiveAsyncReadLine(); //Calling this function again to ask new question
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
            cellList = new Array();
            var initialPossibleValues = [];
            for (var i=0; i <sudokuSize; i++){
                initialPossibleValues.push(i+1);
            }
            for (var initiateIter = 0; initiateIter < numberOfCells; initiateIter++){
                cellList[initiateIter] = new cell.Cell(0,0,0,initialPossibleValues);
            }
            console.log(cellList);

            callback();
        });
    },
    function (callback) {

        recursiveAsyncReadLine(function(err){
            if (err){

            } else {
                callback();
            }
        });


    },

], function (err) {
    if (err) {

    } else {
        rl.close();
        console.log(cellList);

        
    }
});


