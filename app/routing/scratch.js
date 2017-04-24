  var userChoicesArray = friends.slice(-1)[0].questions;
  var userScore = userChoicesArray.reduce(function(a, b) { return a + b; }, 0);
  var friendFoundArray = [];
    for (var i =0; i < friends.length - 1; i++) {
      var matchChoicesArray = friends[i].questions;
      var matchScore = matchChoicesArray[i].reduce(function(a, b) { return a + b; }, 0);
      var totalScore = Math.abs(matchScore - userScore);
      var nameArray = friends[i].name;
      friendFoundArray.push(totalScore);
    } 

        console.log(nameArray + " " + matchChoicesArray);
        //itterate through the choices and add
        for (var j=0; j < matchChoicesArray.length -1; j++){
          var choiceDiff =  Math.abs(matchChoicesArray[j] - userChoicesArray[j]);
          
         
      }
        var finalScore = friendFoundArray.reduce(function(a, b) { return a + b; }, 0);

        console.log(friendFoundArray + " " + finalScore);
        res.json(true);

    });
};

// ******************************************************
//  var userChoicesArray = friends.slice(-1)[0].questions;
//       //console.log(friends.slice(-1)[0].name + " "  + userChoicesArray);
//       //var match = {};
//       var friendFoundArray = [];
//       for (var i =0; i < friends.length - 1; i++) {
//         var matchChoicesArray = friends[i].questions;
        
//         var nameArray = friends[i].name;
//         console.log(nameArray + " " + matchChoicesArray);
//         //itterate through the choices and add
//         for (var j=0; j < matchChoicesArray.length -1; j++){
//           var choiceDiff =  Math.abs(matchChoicesArray[j] - userChoicesArray[j]);
          
//           friendFoundArray.push(choiceDiff);
//         } 
//       }
//         var finalScore = friendFoundArray.reduce(function(a, b) { return a + b; }, 0);

//         console.log(friendFoundArray + " " + finalScore);
//         res.json(true);

//     });
// };

//Original code  *******************************************************     
//       var userChoicesArray = friends.slice(-1)[0].questions;
//       //console.log(friends.slice(-1)[0].name + " "  + userChoicesArray);
//       //var match = {};
//       var friendFoundArray = [];
//       for (var i =0; i < friends.length - 1; i++) {
//         var matchChoicesArray = friends[i].questions;
//         var nameArray = friends[i].name;
//         console.log(nameArray + " " + matchChoicesArray);
//         //itterate through the choices and add
//         for (var j=0; j < matchChoicesArray.length -1; j++){
//           var choiceDiff =  Math.abs(matchChoicesArray[j] - userChoicesArray[j]);
          
//           friendFoundArray.push(choiceDiff);
//         } 
//       }
//         var finalScore = friendFoundArray.reduce(function(a, b) { return a + b; }, 0);

//         console.log(friendFoundArray + " " + finalScore);
//         res.json(true);

//     });
// };
//******************************************************