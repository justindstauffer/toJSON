// This file creates the database tables for male names and female names using the lists from the .txt files NAMES-F and NAMES-M

var axios = require("axios");
var fs = require("fs");

var raceResults = "raceResults.txt"

function resultsToArray(names) {
  try {
    var data = fs.readFileSync(names, "utf8");
    // console.log(data);
  } catch (e) {
    console.log("Error:", e.stack);
  }
  var namesArray = data.split(/\r?\n/);
  return namesArray;
}


var newRaceResults = resultsToArray(raceResults);
var i = 0;

finalResults = newRaceResults.map(result => {
    return result.split(" ");
})
console.log(finalResults);
// function resultsToArray2() {
//   var data = newRaceResults.split(" ");
//   return data;
// }
// var testResults = resultsToArray2();
// console.log(testResults);


addResult = async result => {
    await axios
        .post("http://localhost:5000/api/raceResults", {
            id: i,
            name: result[0],
            finishtime: parseInt(result[1])
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
}

finalResults.map(result => {
  addResult(result);
    // console.log(result);
  i++;
});
