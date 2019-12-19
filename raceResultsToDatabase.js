var axios = require("axios");
var fs = require("fs");

var raceResults = "raceResults.txt"

function resultsToArray(results) {
  try {
    var data = fs.readFileSync(results, "utf8");
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
// console.log(finalResults);


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
