//Almario Guzman III
//2075 - WCSERVER
//Creating a Functioin

var log = {
  info: function(info) {
    console.log('Info:'+ info);
  },
  warning: function(warning) {
    console.log('Warning:'+ warning);
  },
  error: function(error) {
    console.log('Error:'+ error);
  },
}

module.exports = log