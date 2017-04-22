// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friends = require("../data/friends");
// var obj = require("..public")
// var waitListData = require("../data/waitinglistData");
// ===============================================================================
// ROUTING
// ===============================================================================

// Function to find the smallest element in an array
Array.prototype.minArray = function() {
    return Math.min.apply(Math, this);
};
 
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate Javascript array
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
 
    // console.log(userInfo);

      // 1. add user data to friends array
      //console.log(res.questions);
      // 2. Loop through all users
      
      // 3. compare POST user Q's and A's with each user in loop
      // 3.a do the maths

      // 4. compare numbers ain array and store in another array
     
      // var data = req.body;
      // var match = {}; 
      // var friendFoundArray = [];
      friends.push(req.body);
      res.json(true);



      // for (var i = 0; i < friends.length; i++) {
      //       var checkMatch = friends[i];
      //       var finalScore = 0;
      //       for (var d = 0; d < checkMatch.questions.length; d++) {
      //           var difference = Math.abs(checkMatch.questions[d]- data.questions[d]);
      //           finalScore += difference;
      //       }
      //       friendFoundArray.push(finalScore);
      //       console.log(friendFoundArray + " " + finalScore);
      // }

      //   var minDifference = friendFoundArray.minArray();
      //   var friendIndex = friendFoundArray.indexOf(minDifference);
      //   match.name = friends[friendIndex].name;
      //   match.image = friends[friendIndex].photo;

      //   res.json(match);

//*************************************************************************
      // //Get the last index choice
      var userChoicesArray = friends.slice(-1)[0].questions;
      //console.log(friends.slice(-1)[0].name + " "  + userChoicesArray);
      var match = {};
      var friendFoundArray = [];
      for (var i =0; i < friends.length - 1; i++) {
        var matchChoicesArray = friends[i].questions;

        var nameArray = friends[i].name;
        console.log(nameArray + " " + matchChoicesArray);
        //itterate through the choices and add
        for (var j=0; j < matchChoicesArray.length -1; j++){
          var choiceDiff =  Math.abs(matchChoicesArray[j] - userChoicesArray[j]);
          friendFoundArray.push(choiceDiff);
        } 
      }
        var finalScore = friendFoundArray.reduce(function(a, b) { return a + b; }, 0);

        console.log(friendFoundArray + " " + finalScore);
    });
};
//***********************************************************************************

  //add the arrays absolute value 

        //ittirate through each friends questions array
        //get the difference at each array from the usersinput
        //
        //pussh to new array
        //get the index of the lowest value
        //this is the match
        //append the modal match  
      // console.log(userInfo);
      // console.log(friends[i].questions);
      // }


      
    
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
 
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
  
