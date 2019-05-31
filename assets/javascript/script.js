var wins = 0;
var losses = 0;

var game = function() {
  //Sets target value and write to page
  var targetNumber = 0;
  do {
    targetNumber = Math.floor(Math.random() * 121);
  } while (targetNumber < 19);
  $(".targetNumber").text(targetNumber);

  //Gives each food item a value between 1 and 12, unique from the value of the other food items
  var hotDogValue = 0;
  do {
    hotDogValue = Math.ceil(Math.random() * 12);
  } while (hotDogValue === 0);
  console.log(hotDogValue);

  var cookieValue = 0;
  do {
    cookieValue = Math.ceil(Math.random() * 12);
  } while (cookieValue === 0 || cookieValue === hotDogValue);
  console.log(cookieValue);

  var iceCreamValue = 0;
  do {
    iceCreamValue = Math.ceil(Math.random() * 12);
  } while (
    iceCreamValue === 0 ||
    iceCreamValue === hotDogValue ||
    iceCreamValue === cookieValue
  );
  console.log(iceCreamValue);

  var appleValue = 0;
  do {
    appleValue = Math.ceil(Math.random() * 12);
  } while (
    appleValue === 0 ||
    appleValue === hotDogValue ||
    appleValue === cookieValue ||
    appleValue === iceCreamValue
  );
  console.log(appleValue);
};

game();
