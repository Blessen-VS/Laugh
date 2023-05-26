const axios = require('axios');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const fs = require('fs');
let jokes = [];
jokeToWrite =[];

  


function extractValue(arr) {
    
    arr.forEach(element => {
        let extractedValue = element?.setup.concat(element?.punchline);
        jokes.push(extractedValue)
      });

      readline.question('How many jokes you would prefer?', countOfJoke => {
        let jokeNos = countOfJoke;

        for(i = 1; i<= jokeNos; i++) {

            fs.appendFileSync("jokes.txt", jokes[i] +'\r\n', "UTF-8", {'flags':'a+'})

        }
        console.log("jokes written successfully")
      });  // extract value from property

}

axios.get('https://official-joke-api.appspot.com/jokes/programming/ten')
.then(result => {
   
    extractValue((result.data))
   
})
.catch(error => {
    console.log(error);
});




