//Almario Guzman III
//2075 - WCSERVER
//Creating a Functioin

module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function (){
    return this.firstName + '' + this.lastName;
  }
}