// This file creates the database tables for male names and female names using the lists from the .txt files NAMES-F and NAMES-M

var axios = require('axios');
var fs = require("fs");


var femaleNames = "NAMES-F.TXT";
var maleNames = "NAMES-M.TXT";

function namesToArray(names) {
  try {
    var data = fs.readFileSync(names, "utf8");
    // console.log(data);
  } catch (e) {
    console.log("Error:", e.stack);
  }
  var namesArray = data.split(/\r?\n/);
  return namesArray;
}

var newMaleNames = namesToArray(maleNames);
var newFemaleNames = namesToArray(femaleNames);
var i = 0;
var j = 0;

addFemaleName = async (name) => {
    await axios
        .post("http://localhost:5000/api/femaleNames", {
            id: i,
            name: name
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
addMaleName = async name => {
  await axios
    .post("http://localhost:5000/api/maleNames", {
      id: j,
      name: name
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
newFemaleNames.map(name => {
    addFemaleName(name);
    i++;
})
newMaleNames.map(name => {
    addMaleName(name);
    j++;
})
