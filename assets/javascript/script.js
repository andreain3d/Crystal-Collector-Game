var wins = 0;
var losses = 0;

var game = function() {
  var targetNumber = 0;
  var totalValue = 0;
  $(".snackTotal").text(totalValue);
  $(".wins").text(wins);
  $(".losses").text(losses);

  //Sets target value and write to page
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

  //Defining functions to execute when win/loss conditions are met
  var youWin = function() {
    setTimeout(function() {
      alert("you win!");
    }, 500);
    wins += 1;
    $(".wins").text(wins);
  };

  var youLose = function() {
    setTimeout(function() {
      alert("you lose!");
    }, 100);
    losses += 1;
    $(".losses").text(losses);
  };

  //When user clicks on food items, their value is added to the total and written to
  //the page.  Then, winning and losing conditions are checked, and if met will
  //execute win/loss function
  $("#hotdog").on("click", function() {
    totalValue += hotDogValue;
    $(".snackTotal").text(totalValue);
    if (totalValue == targetNumber) {
      youWin();
    } else if (totalValue > targetNumber) {
      youLose();
    }
  });

  $("#cookie").on("click", function() {
    totalValue += cookieValue;
    $(".snackTotal").text(totalValue);
    if (totalValue == targetNumber) {
      youWin();
    } else if (totalValue > targetNumber) {
      youLose();
    }
  });

  $("#iceCream").on("click", function() {
    totalValue += iceCreamValue;
    $(".snackTotal").text(totalValue);
    if (totalValue == targetNumber) {
      youWin();
    } else if (totalValue > targetNumber) {
      youLose();
    }
  });

  $("#apple").on("click", function() {
    totalValue += appleValue;
    $(".snackTotal").text(totalValue);
    if (totalValue == targetNumber) {
      youWin();
    } else if (totalValue > targetNumber) {
      youLose();
    }
  });

  //Restart functionality
};

game();
