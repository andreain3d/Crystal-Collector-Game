var wins = 0;
var losses = 0;

var game = function() {
  var totalValue = 0;
  var targetNumber = 0;
  var hotDogValue = 0;
  var cookieValue = 0;
  var iceCreamValue = 0;
  var appleValue = 0;
  $(".snackTotal").text(totalValue);
  $(".wins").text(wins);
  $(".losses").text(losses);

  //Sets target value and write to page
  var generateTargetNumber = function() {
    do {
      targetNumber = Math.floor(Math.random() * 121);
    } while (targetNumber < 19 || targetNumber === 0);
    $(".targetNumber").text(targetNumber);
  };

  //Gives each food item a value between 1 and 12, unique from the value of the other food items
  var generateFoodValues = function() {
    do {
      hotDogValue = Math.ceil(Math.random() * 12);
    } while (hotDogValue === 0);
    console.log(hotDogValue);

    do {
      cookieValue = Math.ceil(Math.random() * 12);
    } while (cookieValue === 0 || cookieValue === hotDogValue);
    console.log(cookieValue);

    do {
      iceCreamValue = Math.ceil(Math.random() * 12);
    } while (
      iceCreamValue === 0 ||
      iceCreamValue === hotDogValue ||
      iceCreamValue === cookieValue
    );
    console.log(iceCreamValue);

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

  //On win, alerts user to win, adds to win count
  var youWin = function() {
    setTimeout(function() {
      $("#normalPigeon").hide();
      $("#happyPigeon").fadeIn();
      $(".gameText").hide();
      $(".winningText").fadeIn();
      $("#hotdog").off("click");
      $("#cookie").off("click");
      $("#iceCream").off("click");
      $("#apple").off("click");
    }, 100);
    wins += 1;
    $(".wins").text(wins);
  };
  //On loss, alerts user to loss, adds to loss count
  var youLose = function() {
    setTimeout(function() {
      $("#normalPigeon").hide();
      $("#unhappyPigeon").fadeIn();
      $(".gameText").hide();
      $(".losingText").fadeIn();
      $("#hotdog").off("click");
      $("#cookie").off("click");
      $("#iceCream").off("click");
      $("#apple").off("click");
    }, 100);
    losses += 1;
    $(".losses").text(losses);
  };

  //When user clicks on food items, their value is added to the total and written to
  //the page.  Then, winning and losing conditions are checked, and if met will
  //execute win/loss function

  var foodButtons = function() {
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
  };

  //Calls functions to generate the target number and food values, and for button behavior
  generateTargetNumber();
  generateFoodValues();
  foodButtons();

  //Restart functionality
  $(".playAgain").on("click", function() {
    totalValue = 0;
    $("#normalPigeon").show();
    $("#unhappyPigeon").hide();
    $("#happyPigeon").hide();
    $(".gameText").show();
    $(".losingText").hide();
    $(".winningText").hide();
    $(".snackTotal").text(totalValue);
    targetNumber = 0;
    generateTargetNumber();
    generateFoodValues();
    foodButtons();
  });
};

$(document).ready(function() {
  game();
});
