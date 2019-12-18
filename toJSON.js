// This file creates the database tables for male names and female names using the lists from the .txt files NAMES-F and NAMES-M

var axios = require("axios");
var fs = require("fs");

var femaleNames
var maleNames

async function sendFemalenames() {
    femaleNames = await getFemaleNames();
    fs.appendFile('./femaleNames.json', JSON.stringify(femaleNames.data), err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}

async function sendMalenames() {
    maleNames = await getMaleNames();
    fs.appendFile("./maleNames.json", JSON.stringify(maleNames.data), err => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
}

async function runItAll() {
    sendFemalenames();
    sendMalenames();
    // const maleNames1 = await getMaleNames();
    // const femaleNames2 = await getFemaleNames();

    // console.log(maleNames1);
    // console.log(femaleNames2);
}

async function createString() {
    const maleNames = await getMaleNames();

}


runItAll();



async function getFemaleNames() {
    try {
        const response = await axios.get("http://localhost:5000/api/femaleNames");
        return response;
    } catch (error) {
        console.error(error);
    }
    
}

async function getMaleNames() {
  try {
    const response = await axios.get("http://localhost:5000/api/maleNames");
    return response;
  } catch (error) {
    console.error(error);
  }
}




// addFemaleName = async name => {
//   await axios
//     .post("http://localhost:5000/api/femaleNames", {
//       id: i,
//       name: name
//     })
//     .then(function(response) {
//       console.log(response);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// };
// addMaleName = async name => {
//   await axios
//     .post("http://localhost:5000/api/maleNames", {
//       id: j,
//       name: name
//     })
//     .then(function(response) {
//       console.log(response);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// };

