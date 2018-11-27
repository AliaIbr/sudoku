var cell = require("./cell.js");
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

var innerBoxSize ;

async.series([
    function (callback) {
        rl.question('insert sudoku size  ', (answer) => {
            sudokuSize = answer;

            innerBoxSize = Math.pow(sudokuSize, 0.5);
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
            for (var initiateIter = 0; initiateIter < cellList; initiateIter++){
                cellList[initiateIter] = new cell;
            }

            callback();
        });
    },
    function (callback) {

        ListeIter.length = sudokuSize;
        var iter = 0;

        async.forEachSeries(ListeIter, function (lineNumber, callbackForeach) {
            
            rl.question("insert raw" + iter + " ", function (answer) {

                for (var arraychunk = 0; arraychunk < answer.length; arraychunk++) {
                    temparray = answer.slice(arraychunk, arraychunk + 1);
                    if (temparray == "x") {
                        

                    } else {
                        arrayRaw[iter].push(temparray);
                        arrayColumn[arraychunk].push(temparray);

                    }

                }
                iter = iter + 1;
                callbackForeach();

            });
        },
            function (err) {
                if (err) {
                    callback(err);
                } else {
               
                    callback();
                }
            });


    },

], function (err) {
    if (err) {

    } else {
        rl.close();
        console.log("check what is added to the arrays ");
        
    }
});