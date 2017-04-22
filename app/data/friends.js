// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friendsArray = [
  {
    name: "Ahmed",
    email: "ahmed@example.com",
    photo: " ",
    questions: [1,3,3,4,4,4,4,5,5,5]
  }
];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;