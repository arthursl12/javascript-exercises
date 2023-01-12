const convertToCelsius = function(Tf) {
  let Tc = Tf - 32;
  Tc = Tc * 5 / 9;
  return Math.round(Tc * 10) / 10;

};

const convertToFahrenheit = function(Tc) {
  let Tf = Tc * 9 / 5;
  Tf = Tf + 32;
  return Math.round(Tf * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
