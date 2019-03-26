function checkUsersValid(goodUsers) {

    // allUsersValid is a functioistn that compares ls of users against each other
    // if they do not match exactly return false if they do match return true 
  
    return function allUsersValid(submittedUsers) {
  
      // .every checks to see if every element in array passes a test
      // defined by the following function if every element passes
      // it will return true, and if not return false
      return submittedUsers.every(function(submittedUser) {
  
      // .some is a function that tests to see if any elements pass the
      // test defined by the function I.E. does this submitted user.id
      // match any of the goodUsers ids if so pass true else false
      // if all return true then .every returns true if any of them
      // return false then .every will return false
        return goodUsers.some(function(goodUser) {
          return goodUser.id === submittedUser.id;
        });
      });
    };
  }
  
  module.exports = checkUsersValid;