//TODO: Figure out how to add these: import { compress } from 'lz-string'; //RECENT import { decompress } from 'lz-string'; //RECENT
document.addEventListener('DOMContentLoaded', function() {
  gameData.quantity = 1;
  
});





document.getElementById("linePrestige").style.display = "none";
document.getElementById("squarePrestige").style.display = "none";
document.getElementById("cubePrestige").style.display = "none";
document.getElementById("prestigeDiceMenu").style.display = "none";
document.getElementById("onlineDiceRoller").style.display = "none";
document.getElementById("decreasedWaitingLine").style.display = "none";
document.getElementById("squaredRootSales").style.display = "none";
document.getElementById("decreaseUpgradeCostRatios").style.display = "none";
document.getElementById("linePoints").style.display = "none";
document.getElementById("squarePoints").style.display = "none";
document.getElementById("cubePoints").style.display = "none";
document.getElementById("variableChecker").style.display = "none";
document.getElementById("dicePointsBoostByDicePoints").style.display = "none";
document.getElementById("betterComboScore").style.display = "none";
document.getElementById("unlockedComboUpgrade").style.display = "none";
document.getElementById("myChart").style.display = "none";
document.getElementById("diceRollIntervalOverload").style.display = "none" //TODO: For some weird reason this upgrade doesn't become visbile, will need some more testing in the future, commenting this out fixes the problem so it's probably ui based.
const ctx = document.getElementById('myChart');

      // Initial data
      const initialData = {
        labels: [],
        datasets: [{
          label: 'My First Dataset', //TODO: Give this a different name, prefarbly something dynamically changeable.
          data: [],
          backgroundColor: [],
          hoverOffset: 4
        }]
      }

      const colors = [
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ];

      // Create the chart
      




const clonedIds = new Set();
var saveGame = localStorage.getItem('diceCubeSave');
var gameData = {
  dicePoints: 0,
  dicePointsTotal: 0,
  dicePointsPerClick:1,
  diceAmount: 1,
  diceSides: 6,
  dicePointsPerClickCost: 10,
  diceSideUpgradeCost: 50,
  diceAmountUpgradeCost: 100,
  diceRollIntervalUpgradeCost: 200,
  dicePointsPerClickCostRatio: 1.22,
  diceSideUpgradeCostRatio: 1.22,
  diceAmountUpgradeCostRatio: 1.22,
  diceRollIntervalUpgradeCostRatio: 1.22,
  lastTick: Date.now(),
  diceRollInterval: 1000,
  diceRollIntervalUpgradeTimeSize: 100,
  furthestDiceReached: 0,
  diceDimension: 6, //Altering this can increase the size of the cube, it is the length of the cube.
  linePoints: 0,
  squarePoints: 0,
  cubePoints: 0,
  squaredRootSalesActivated: false,
  onlineDiceRollerActivated: false,
  diceRollIntervalDecrease: 0.50,
  decreaseUpgradeCostRatiosCost: 1,
  decreaseUpgradeCostRatiosCostRatio: 1.25,
  onlineDiceRollerCost: 5,
  onlineDiceRollerCostRatio: 1.25,
  onlineDiceRollerCount: 0,
  squaredRootSalesCost: 1,
  decreasedWaitingLineCost: 1,
  decreasedWaitingLineCostRatio: 1.25,
  quantity: 0, //TODO: Check this interaction in the bulkbuying section, something is wrong with it, if you attempt to buy with 100 while you can't afford it everythign is permanently striked out and you can't buy anything.
  diceRollIntervalLimit: 10,
  allRatiosLimit: 1.01,
  quantityBought: 0,
  comboMessageLenghtLimit: 120,
  stopCheckCostDiceRollInterval : false,
  stopCheckCostLineUpgrades: true,
  dicePointsBoostByDicePointsActivated: false,
  dicePointsBoostByDicePointsCost: 3,
  betterComboScoreCost: 3,
  betterComboScoreActivated: false,
  unlockedComboUpgrade: 1, //This sets how much dice can combo with eachother, so if you have 3 6's and unlockedComboUpgrade 2 only 2 will combo
  //TODO: Still set a base cost and costratio for unlockedComboUpgrade upgrade, also properly make that button update via the update all function and put it in checkcost.
  unlockedComboUpgradeCost: 400,
  unlockedComboUpgradeCostRatio: 1.22,
  tempCurrencyType: "",
  stopCheckCostSquareUpgrades: true,
  diceRollIntervalOverloadCost: 5,
  diceRollIntervalOverloadActivated: false,
  diceRollIntervalOverloadTime: 0,
  diceRollIntervalOverloadAmount: 0,
  boughtShopMenuCurrencyType: "All",
  boughtShopMenuUpgradeType: "All",
  //TODO: Add all upgrades below and set their quantity, then put these everywhere that it is used to adnd make bulkbuy increase these with the upgradeincrement. Also make this appear in the bought button upgrades.
  diceSideUpgradeQuantity: 0, //Quantity shows you how many upgrades you have purchased.
  diceAmountUpgradeQuantity: 0,
  diceRollIntervalUpgradeQuantity: 0,
  unlockedComboUpgradeQuantity: 0,

  decreaseUpgradeCostRatiosQuantity: 0,
  diceRollIntervalOverloadQuantity: 0,
  onlineDiceRollerQuantity: 0,
  squaredRootSalesQuantity: 0,
  decreasedWaitingLineQuantity: 0,
  dicePointsBoostByDicePointsQuantity: 0,
  betterComboScoreQuantity: 0

  
  
  

  // Also add this for the other line and square upgrades, check code if you have to for example.
};
//gameData.quantity = parseInt(document.getElementById("quantityPicker").value); TODO Find a way to apply this from the start so all buttons are striked out at first if you can't afford them.

var selectElementQuantity = document.getElementById('quantityPicker');
selectElementQuantity.addEventListener('change', function() {
var selectedValueQuantity = parseInt(selectElementQuantity.value);
  gameData.quantity = selectedValueQuantity;
});
var selectElementCurrency = document.getElementById('boughtShopMenuCurrencyType');
selectElementCurrency.addEventListener('change', function() {
var selectedValueCurrency = selectElementCurrency.options[selectElementCurrency.selectedIndex].getAttribute('boughtShopMenuCurrency');//selectElementCurrency.boughtShopMenuCurrency
  gameData.boughtShopMenuCurrencyType = selectedValueCurrency;
});
var selectElementUpgrade = document.getElementById('boughtShopMenuUpgradeType');
selectElementUpgrade.addEventListener('change', function() {
var selectedValueUpgrade = selectElementUpgrade.options[selectElementUpgrade.selectedIndex].getAttribute('boughtShopMenuUpgrade');//selectElementCurrency.boughtShopMenuCurrency
  gameData.boughtShopMenuUpgradeType = selectedValueUpgrade;
});


function update(id, content) {
  document.getElementById(id).innerHTML = content;
  
}

function updateAll() {

  
  
  if (gameData.onlineDiceRollerActivated === true) { 
    //update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceAmount + " dice" + " x" + (gameData.onlineDiceRollerCount * 2) + " by online dice roller upgrade) Cost: " + format(Math.sqrt(gameData.diceAmountUpgradeCost), "scientific") + " dicePoints");
    update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceAmount + " dice" + " x" + (gameData.onlineDiceRollerCount * 2) + " by online dice roller upgrade) Cost: " + format(checkCost("diceAmountUpgrade", "dicePoints"), "scientific") + " dicePoints");
  } else {
    //update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceAmount + " dice" + ") Cost: " + format(Math.sqrt(gameData.diceAmountUpgradeCost), "scientific") + " dicePoints");
    update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceAmount + " dice" + ") Cost: " + format(checkCost("diceAmountUpgrade", "dicePoints"), "scientific") + " dicePoints");
  }

  
  if (!gameData.stopCheckCostDiceRollInterval ) {
    update("diceRollIntervalUpgrade", "Increase automatic dice-roll speed by " + Math.floor(gameData.diceRollIntervalUpgradeTimeSize) + "ms (Currently " + Math.floor(gameData.diceRollInterval) + "ms ) Cost: " + format(checkCost("diceRollIntervalUpgrade", "dicePoints"), "scientific") + " dicePoints");
  }
  update("diceSideUpgrade", "Upgrade Dice (Currently " + "d" + gameData.diceSides + ") Cost: " + format(checkCost("diceSideUpgrade", "dicePoints"), "scientific") + " dicePoints"); //Check this list to see by how much the sides need to be incremented to be a real dice: https://commons.wikimedia.org/wiki/Dice_by_number_of_sides#D9
  if (gameData.diceAmount >= 2) {
    document.getElementById("unlockedComboUpgrade").style.display = "inline-block";
    if (gameData.unlockedComboUpgrade === 1) {
      update("unlockedComboUpgrade", "Unlock the ability to combo dice (2x combo) Cost: "+ format(checkCost("unlockedComboUpgrade", "dicePoints"), "scientific") + " dicePoints"); //TODO: Make this adapt more based on what combo you unlocked etc.
    } else {
      update("unlockedComboUpgrade", "Increase max combo (" + (gameData.unlockedComboUpgrade + 1) + "x combo) Cost: "+ format(checkCost("unlockedComboUpgrade", "dicePoints"), "scientific") + " dicePoints");
    }
  }
  update("dicePoints", format(Math.floor(gameData.dicePoints), "scientific") + " Dice points");
  update("linePoints", "Line Points: " + round10(gameData.linePoints, -2));
  update("squarePoints", "Square Points: " + round10(gameData.squarePoints, -2));
  update("cubePoints", "Cube Points: " + round10(gameData.cubePoints, -2));
  update("diceProgress", "Currently reached dice " + format(gameData.furthestDiceReached, "scientific") + " of " + (Math.pow(gameData.diceDimension, 3)) +  " in dicecube");
  update ("diceProgress2", "Dice " + format(gameData.furthestDiceReached, "scientific") + " currently placed on " + Math.floor(gameData.dicePointsTotal/(Math.pow(5, (gameData.furthestDiceReached - 1)))));
  if (gameData.furthestDiceReached >= gameData.diceDimension) {
    update ("linePrestige", "Line prestige (for " + round10((gameData.furthestDiceReached/gameData.diceDimension), -2) + "LP)");
    document.getElementById("linePrestige").style.backgroundColor = "";
    document.getElementById("linePrestige").style.color = "";
  } else {
    document.getElementById("linePrestige").style.backgroundColor = "#808080"; // Dark grey background color for the button
    document.getElementById("linePrestige").style.color = "#FFFFFF"; // White text color
    document.getElementById("linePrestige").innerHTML = "You need to atleast reach dice " + gameData.diceDimension + " of " + Math.pow(gameData.diceDimension, 3) + " to Line Prestige.";
    document.getElementById("linePrestige").style.textDecoration = "";
  }
  if (gameData.furthestDiceReached >= Math.pow(gameData.diceDimension,2)) {
    update ("squarePrestige", "Square prestige (for " + round10((gameData.furthestDiceReached/Math.pow(gameData.diceDimension,2)), -2) + "SP)");
    document.getElementById("squarePrestige").style.backgroundColor = "";
    document.getElementById("squarePrestige").style.color = "";
  } else {
    document.getElementById("squarePrestige").style.backgroundColor = "#808080"; // Dark grey background color for the button
    document.getElementById("squarePrestige").style.color = "#FFFFFF"; // White text color
    document.getElementById("squarePrestige").innerHTML = "You need to atleast reach dice " + Math.pow(gameData.diceDimension,2) + " of " + Math.pow(gameData.diceDimension, 3) + " to Line Prestige.";
    document.getElementById("squarePrestige").style.textDecoration = "";
  }

  if (gameData.furthestDiceReached >= Math.pow(gameData.diceDimension)) {
    update ("cubePrestige", "Cube prestige (for " + round10((gameData.furthestDiceReached/Math.pow(gameData.diceDimension,3)), -2) + "CP)");
    document.getElementById("cubePrestige").style.backgroundColor = "";
    document.getElementById("cubePrestige").style.color = "";
  } else {
    document.getElementById("cubePrestige").style.backgroundColor = "#808080"; // Dark grey background color for the button
    document.getElementById("cubePrestige").style.color = "#FFFFFF"; // White text color
    document.getElementById("cubePrestige").innerHTML = "You need to atleast reach dice " + Math.pow(gameData.diceDimension,3) + " of " + Math.pow(gameData.diceDimension, 3) + " to Line Prestige."
    document.getElementById("cubePrestige").style.textDecoration = ""
  }
  if (!gameData.stopCheckCostLineUpgrades ) {
    update("decreaseUpgradeCostRatios", "Decrease the speed at which regular upgrades' cost grows Cost: " + format(checkCost("decreaseUpgradeCostRatios", "linePoints"), "scientific") + "LP");
    update("decreasedWaitingLine", "Decreased waiting line Cost: " + format(checkCost("decreasedWaitingLine", "linePoints"), "scientific") + "LP");
    update("onlineDiceRoller", "On-line dice roller (Currently " + (gameData.onlineDiceRollerCount * 2) + "x dice) Cost:" + format(checkCost("onlineDiceRoller", "linePoints"), "scientific") + "LP");
    
  }
  var clonedButtons = document.querySelectorAll(".cloned-button");
  
  clonedButtons.forEach(function(clonedButton) {
    clonedButton.style.backgroundColor = ""; // Reset background color
    clonedButton.style.color = ""; // Reset text color
    clonedButton.style.textDecoration = ""; // Reset text decoration
  });
  prestigeVisibility ();
  updateButtonStyles();
}


function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}


function rollDice() {
  var totalPoints = 0;
  var diceValues = [];
  var comboDice = []; // Initialize comboDice array here
  var loopCount = gameData.onlineDiceRollerActivated ? gameData.diceAmount * gameData.onlineDiceRollerCount * 2 : gameData.diceAmount; //This checks if you bought the online dice roller upgrade to double the dice it can roll.
  for (var i = 0; i < loopCount; i++) { //Test if this works properly.
    let value = rollDie(gameData.diceSides);
    totalPoints += value;
    diceValues.push(value);
  }
  // Check for duplicates
  var duplicates = {};
  diceValues.forEach(function(value) {
    duplicates[value] = (duplicates[value] || 0) + 1;
  });

  
  var highestComboValue = 0;
  var highestComboCount = 0;
  var mostCommonComboValue = 0;
  var mostCommonComboCount = 0;
  var comboMessage = "";

  // Apply score multiplier for duplicates
  var hasCombo = false;
  for (var value in duplicates) {
    if (duplicates[value] > 1 && gameData.unlockedComboUpgrade > 1) {
      if (duplicates[value] > gameData.unlockedComboUpgrade) {
        duplicates[value] = gameData.unlockedComboUpgrade
      };
      update("diceComboSystem", "Currently there is a combo!");
      if (gameData.betterComboScoreActivated !== true) {
        totalPoints += parseInt(value) * (duplicates[value] - 1); //This adds combo's like this "If you rolled 3 6's it would add 2x6 = 12 to the totalpoints" TODO: Add an upgrade that changes the formula (like on your notes.)
      } else {
        totalPoints += Math.pow( parseInt(value), (duplicates[value] -1)); 
      }
      //"totalPoints *= Math.pow(parseInt(value), duplicates[value]);" and "totalPoints *= parseInt(value) * (duplicates[value] -1)" //Implement an "evenbettercomboscore" that use this formula but nerf it slightly because the way this progrsses is waaay to powerful.
      hasCombo = true;
      comboDice.push({ value: value, count: duplicates[value] });
      if (parseInt(value) > highestComboValue) { // Check if the value is higher than the current highest combo value
        highestComboValue = parseInt(value);
        highestComboCount = duplicates[value];
      }
      if (duplicates[value] > mostCommonComboCount) { // Check if the value has more duplicates than the current most common combo value
        mostCommonComboValue = parseInt(value);
        mostCommonComboCount = duplicates[value];
    }
    }
  }

  // If no combo was found, update the message
  if (!hasCombo) {
    update("diceComboSystem", "No combo found.");
  } else {
    // Display combo dice and duplicate counts
    var comboMessage = "Combo dice: ";
    comboDice.forEach(function(dice) {
      comboMessage += dice.value + " (x" + dice.count + "), ";
      
    });
    var comboMessageLength = comboMessage.length;
    var comboMessageFix = false;
      if (comboMessageLength > gameData.comboMessageLenghtLimit) { //If the combo message is too long it picks the other system.
        comboMessageFix = true;
        if (highestComboCount == mostCommonComboCount) {
          comboMessage = "Highest And Most Common Combo: " + highestComboValue + " (x" + highestComboCount + ")";
        } else {
          comboMessage = "Highest Combo: " + highestComboValue + " (x" + highestComboCount + ") Most Common Combo: " + mostCommonComboValue + " (x" + mostCommonComboCount + ")";
        }
        
        
               
      }
    if (comboMessageFix === false) {
       update("diceComboSystem", comboMessage.slice(0, -2)); // Remove trailing comma and space
    } else {
      update("diceComboSystem", comboMessage);
    }
  }
  if (gameData.dicePointsBoostByDicePointsActivated === true) {
    totalPoints *= Math.log(gameData.dicePoints); //If this works properly it should multiply the totalPoints by the amount of 0's in dicePoints at that time.
  }
  gameData.dicePoints += totalPoints;
  gameData.dicePointsTotal += totalPoints;
  var currentLevel = Math.floor(getBaseLog(5, gameData.dicePointsTotal)) + 1;
  if (currentLevel > gameData.furthestDiceReached) {
    gameData.furthestDiceReached = currentLevel;
  }
  updateAll();
}



  
  
  
  

function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function increaseUnlockedComboUpgrade() {
  //TODO:  Implement a potential upgrade to the combo system here, maybe having two kinds of upgrades would be good, one for enabling duo, triple, quadruple etc combo's and one for increasing the combosystem math.
  if (gameData.quantity > 1 ) {
    // Loop through quantity times
    for (var i = 0; i < gameData.quantity; i++) {
        // Calculate cost with current ratio and add to totalCost
        totalCost += gameData.unlockedComboUpgradeCost * gameData.unlockedComboUpgradeCostRatio;
    }
  } else{
    totalCost = gameData.unlockedComboUpgradeCost * gameData.quantity;
  }
  if (gameData.squaredRootSalesActivated === true) {
    totalCost = Math.sqrt(totalCost); // Apply squared root sales if activated
  }
  if (gameData.dicePoints >= totalCost) {   
      bulkBuy("unlockedComboUpgrade", "dicePoints");
      if (gameData.quantityBought > 0) {
        gameData.unlockedComboUpgrade += gameData.quantityBought
        gameData.quantityBought = 0
        updateAll();
      }
      
    }
 
}

function buydicePointsPerClick() { //Change this upgrade into something else, probably the material quality upgrade that increases the points.
  if (gameData.dicePoints >= gameData.dicePointsPerClickCost) {
    gameData.dicePoints -= gameData.dicePointsPerClickCost;
    gameData.dicePointsPerClick += 1;
    gameData.dicePointsPerClickCost *= gameData.dicePointsPerClickCostRatio;
    updateAll();
  }
}

function buyDice() { //Add an upgrade once you have atleast 2 dice that lets you use combo's, for example, when the dice is a 6 and the other dice is also a 6 both of them get times two the points.
    //TODO currently I at the very least get this far.
    bulkBuy("diceAmountUpgrade", "dicePoints");
    if (gameData.quantityBought > 0) {
      gameData.diceAmount += gameData.quantityBought; // Increment dice count by the gameData.quantity purchased
      gameData.quantityBought = 0
      updateAll();
    }

  }


function upgradeDice() { //TODO: For some reason this upgrade is now the only one that is fully unaffected by whatever bug it is that stops me from buying regular upgrades
    bulkBuy("diceSideUpgrade", "dicePoints");
    if (gameData.quantityBought > 0) {
      gameData.diceSides += (gameData.quantityBought * 2); // Increment dice count by the gameData.quantity purchased
      updateAll();
  }
  
}

  



function upgradeDiceRollInterval() {
        if (gameData.diceRollInterval > gameData.diceRollIntervalLimit) { //This checks if the diceRollInterval isn't below it's limit
          
          bulkBuy("diceRollIntervalUpgrade", "dicePoints");
          //When the interval gets reset everything freezes and the automatic rolls just stop. Find a way to fix that.
          if (gameData.quantityBought > 0) {
            for (let i = 0; i < gameData.quantityBought; i++) {
              gameData.diceRollInterval -= gameData.diceRollIntervalUpgradeTimeSize;
              gameData.diceRollIntervalUpgradeTimeSize *= gameData.diceRollIntervalDecrease;
            }
            if (gameData.diceRollInterval < gameData.diceRollIntervalLimit) {
              gameData.diceRollInterval = gameData.diceRollIntervalLimit
            }
            clearInterval(mainGameLoop);
            mainGameLoop = setInterval(mainGameLoopFunction, gameData.diceRollInterval);
            updateAll();
          }
        } else if (gameData.diceRollIntervalOverloadActivated === true ) {
          bulkBuy("diceRollIntervalUpgrade", "dicePoints");
          
          
          //When the interval gets reset everything freezes and the automatic rolls just stop. Find a way to fix that.
          if (gameData.quantityBought > 0) {
            if (gameData.quantityBought === 1) {
              var diceRollIntervalOverloadDiminished = 0.80 //TODO Make this variable a regular gameData one
            } else {
              var diceRollIntervalOverloadDiminished = Math.pow(0.80, (gameData.quantityBought - 1))
            }

            for (let i = 0; i < gameData.quantityBought; i++) { //TODO, the math here is not yet fully perfect, check it out once again and look for something else than a loop to use.
              gameData.diceRollIntervalOverloadTime += gameData.diceRollIntervalUpgradeTimeSize;
              gameData.diceRollIntervalUpgradeTimeSize *= (gameData.diceRollIntervalDecrease *= diceRollIntervalOverloadDiminished);
            }
            
            gameData.diceRollIntervalOverloadAmount = (gameData.diceRollIntervalOverloadTime/ (1000 - gameData.diceRollIntervalLimit)) //This should set diceRollIntervalOverloadAmount to how many times it fits in the regular diceRollinterval probably add exponetial growth on the divided function but also instead of equalising it add onto it.
         }
       }
}


var mainGameLoop = window.setInterval(mainGameLoopFunction, gameData.diceRollInterval);
function mainGameLoopFunction() {
  diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now();
  gameData.dicePoints += gameData.dicePointsPerClick * (diff / gameData.diceRollInterval) // divide diff by how often (ms) mainGameLoop is ran
  gameData.dicePointsTotal += gameData.dicePointsPerClick * (diff / gameData.diceRollInterval) // divide diff by how often (ms) mainGameLoop is ran
  rollDice();
  updateAll();

}


var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('diceCubeSave', JSON.stringify(gameData));
}, 15000)

var savegame = JSON.parse(localStorage.getItem("diceCubeSave"))
//TODO: A few of these are duplicates, fix that.
if (savegame !== null) {
  gameData = savegame
  if (typeof saveGame.dicePoints !== "undefined") gameData.dicePoints = saveGame.dicePoints;
  if (typeof saveGame.dicePointsPerClick !== "undefined") gameData.dicePointsPerClick = saveGame.dicePointsPerClick;
  if (typeof saveGame.dicePointsPerClickCost !== "undefined") gameData.dicePointsPerClickCost = saveGame.dicePointsPerClickCost;
  if (typeof saveGame.lastTick !== "undefined") gameData.lastTick = saveGame.lastTick;
  if (typeof savegame.diceRollIntervalLimit === 'undefined') gameData.diceRollIntervalLimit = 10;
  if (typeof savegame.allRatiosLimit === 'undefined') gameData.allRatiosLimit = 1.01;
  if (typeof savegame.comboMessageLenghtLimit === 'undefined') gameData.comboMessageLenghtLimit = 120;
  if (typeof savegame.comboMessageLenghtLimit === 'undefined') gameData.diceRollIntervalUpgradeTimeSize = 100; //This is where it used to end, just so I can fix it if it goes wrong.
  if (typeof savegame.dicePoints !== "undefined") gameData.dicePoints = savegame.dicePoints;
  if (typeof savegame.dicePointsTotal !== "undefined") gameData.dicePointsTotal = savegame.dicePointsTotal;
  if (typeof savegame.dicePointsPerClick !== "undefined") gameData.dicePointsPerClick = savegame.dicePointsPerClick;
  if (typeof savegame.diceAmount !== "undefined") gameData.diceAmount = savegame.diceAmount;
  if (typeof savegame.diceSides !== "undefined") gameData.diceSides = savegame.diceSides;
  if (typeof savegame.dicePointsPerClickCost !== "undefined") gameData.dicePointsPerClickCost = savegame.dicePointsPerClickCost;
  if (typeof savegame.diceAmountUpgradeCost !== "undefined") gameData.diceAmountUpgradeCost = savegame.diceAmountUpgradeCost;
  if (typeof savegame.diceRollIntervalUpgradeCost !== "undefined") gameData.diceRollIntervalUpgradeCost = savegame.diceRollIntervalUpgradeCost;
  if (typeof savegame.dicePointsPerClickCostRatio !== "undefined") gameData.dicePointsPerClickCostRatio = savegame.dicePointsPerClickCostRatio;
  if (typeof savegame.diceSideUpgradeCostRatio !== "undefined") gameData.diceSideUpgradeCostRatio = savegame.diceSideUpgradeCostRatio;
  if (typeof savegame.diceAmountUpgradeCostRatio !== "undefined") gameData.diceAmountUpgradeCostRatio = savegame.diceAmountUpgradeCostRatio;
  if (typeof savegame.diceRollIntervalUpgradeCostRatio !== "undefined") gameData.diceRollIntervalUpgradeCostRatio = savegame.diceRollIntervalUpgradeCostRatio;
  if (typeof savegame.lastTick !== "undefined") gameData.lastTick = savegame.lastTick;
  if (typeof savegame.diceRollInterval === 'undefined') gameData.diceRollInterval = 1000;
  if (typeof savegame.diceRollIntervalUpgradeTimeSize === 'undefined') gameData.diceRollIntervalUpgradeTimeSize = 100;
  if (typeof savegame.furthestDiceReached === 'undefined') gameData.furthestDiceReached = 0;
  if (typeof savegame.diceDimension === 'undefined') gameData.diceDimension = 6;
  if (typeof savegame.linePoints === 'undefined') gameData.linePoints = 0;
  if (typeof savegame.squarePoints === 'undefined') gameData.squarePoints = 0;
  if (typeof savegame.cubePoints === 'undefined') gameData.cubePoints = 0;
  if (typeof savegame.squaredRootSalesActivated === 'undefined') gameData.squaredRootSalesActivated = false;
  if (typeof savegame.onlineDiceRollerActivated === 'undefined') gameData.onlineDiceRollerActivated = false;
  if (typeof savegame.diceRollIntervalDecrease === 'undefined') gameData.diceRollIntervalDecrease = 0.50;
  if (typeof savegame.decreaseUpgradeCostRatiosCost === 'undefined') gameData.decreaseUpgradeCostRatiosCost = 1;
  if (typeof savegame.decreaseUpgradeCostRatiosCostRatio === 'undefined') gameData.decreaseUpgradeCostRatiosCostRatio = 1.25;
  if (typeof savegame.onlineDiceRollerCost === 'undefined') gameData.onlineDiceRollerCost = 5;
  if (typeof savegame.onlineDiceRollerCostRatio === 'undefined') gameData.onlineDiceRollerCostRatio = 1.25;
  if (typeof savegame.onlineDiceRollerCount === 'undefined') gameData.onlineDiceRollerCount = 0;
  if (typeof savegame.squaredRootSalesCost === 'undefined') gameData.squaredRootSalesCost = 1;
  if (typeof savegame.decreasedWaitingLineCost === 'undefined') gameData.decreasedWaitingLineCost = 1;
  if (typeof savegame.decreasedWaitingLineCostRatio === 'undefined') gameData.decreasedWaitingLineCostRatio = 1.25;
  if (typeof savegame.quantity === 'undefined') gameData.quantity = 0;
  if (typeof savegame.diceRollIntervalLimit === 'undefined') gameData.diceRollIntervalLimit = 10;
  if (typeof savegame.allRatiosLimit === 'undefined') gameData.allRatiosLimit = 1.01;
  if (typeof savegame.quantityBought === 'undefined') gameData.quantityBought = 0;
  if (typeof savegame.comboMessageLenghtLimit === 'undefined') gameData.comboMessageLenghtLimit = 120;
  if (typeof savegame.stopCheckCostDiceRollInterval  === 'undefined') gameData.stopCheckCostDiceRollInterval  = false;
  if (typeof savegame.stopCheckCostLineUpgrades  === 'undefined') gameData.stopCheckCostLineUpgrades  = true;
  if (typeof savegame.dicePointsBoostByDicePointsCost  === 'undefined') gameData.dicePointsBoostByDicePointsCost  = 3;
  if (typeof savegame.dicePointsBoostByDicePointsActivated   === 'undefined')  gameData.dicePointsBoostByDicePointsActivated = false;
  if (typeof savegame.betterComboScoreCost  === 'undefined') gameData.betterComboScoreCost  = 3;
  if (typeof savegame.betterComboScoreActivated  === 'undefined')  gameData.betterComboScoreActivated = false;
  if (typeof savegame.unlockedComboUpgrade === 'undefined')  gameData.unlockedComboUpgrade = 1;
  if (typeof savegame.unlockedComboUpgradeCost === 'undefined')  gameData.unlockedComboUpgradeCost = 400;
  if (typeof savegame.unlockedComboUpgradeCostRatio === 'undefined')  gameData.unlockedComboUpgradeCostRatio = 1.22;
  if (typeof savegame.tempCurrencyType === 'undefined')  gameData.tempCurrencyType = "";
  if (typeof savegame.stopCheckCostSquareUpgrades === 'undefined')  gameData.stopCheckCostSquareUpgrades = false;
  if (typeof savegame.diceRollIntervalOverloadCost === 'undefined')  gameData.diceRollIntervalOverloadCost = 5;
  if (typeof savegame.diceRollIntervalOverloadActivated === 'undefined')  gameData.diceRollIntervalOverloadActivated = false;
  if (typeof savegame.boughtShopMenuCurrencyType === 'undefined')  gameData.boughtShopMenuCurrencyType = "All";
  if (typeof savegame.boughtShopMenuUpgradeType === 'undefined')  gameData.boughtShopMenuUpgradeType = "All";
  if (typeof savegame.diceSideUpgradeQuantity === 'undefined')  gameData.diceSideUpgradeQuantity = 0;
  if (typeof savegame.diceRollIntervalUpgradeQuantity === 'undefined')  gameData.diceRollIntervalUpgradeQuantity = 0;
  if (typeof savegame.diceAmountUpgradeQuantity === 'undefined')  gameData.diceAmountUpgradeQuantity = 0;
  if (typeof savegame.unlockedComboUpgradeQuantity === 'undefined')  gameData.unlockedComboUpgradeQuantity = 0;
  if (typeof savegame.decreaseUpgradeCostRatiosQuantity === 'undefined')  gameData.decreaseUpgradeCostRatiosQuantity = 0;
  if (typeof savegame.diceRollIntervalOverloadQuantity === 'undefined')  gameData.diceRollIntervalOverloadQuantity = 0;
  if (typeof savegame.onlineDiceRollerQuantity === 'undefined')  gameData.onlineDiceRollerQuantity = 0;
  if (typeof savegame.unlockedComboUpgradeQuantity === 'undefined')  gameData.unlockedComboUpgradeQuantity = 0;
  if (typeof savegame.squaredRootSalesQuantity === 'undefined')  gameData.squaredRootSalesQuantity = 0;
  if (typeof savegame.decreasedWaitingLineQuantity === 'undefined')  gameData.decreasedWaitingLineQuantity = 0;
  if (typeof savegame.dicePointsBoostByDicePointsQuantity === 'undefined')  gameData.dicePointsBoostByDicePointsQuantity = 0;
  if (typeof savegame.betterComboScoreQuantity === 'undefined')  gameData.betterComboScoreQuantity = 0;
  
}
  
    
  


function format(number, type) {
	let exponent = Math.floor(Math.log10(number));
	let mantissa = number / Math.pow(10, exponent);
  if (gameData.tempCurrencyType === "dicePoints") {
    currencyTypeFormatLogic = Math.floor(number.toFixed(0))
  } else {
    if (number % 1 === 0) {
      currencyTypeFormatLogic = number.toFixed(0)
    } else {
      currencyTypeFormatLogic = number.toFixed(2)
    }
  }
	if (exponent < 3) return currencyTypeFormatLogic;
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent;
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}





function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  document.getElementById("rollDiceMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById("prestigeMenu").style.display = "none"
  document.getElementById("boughtShopMenu").style.display = "none"
  document.getElementById("saveStuffMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
function prestigeReset() { //This is used to make sure all the stuff that should be reset from the normal upgrades gets reset.
    gameData.furthestDiceReached = 0;
    gameData.dicePoints = 0;
    gameData.dicePointsTotal = 0;
    gameData.dicePointsPerClick = 1;
    gameData.diceAmount = 1;
    gameData.diceSides = 6;
    gameData.dicePointsPerClickCost = 10;
    gameData.diceSideUpgradeCost = 50;
    gameData.diceAmountUpgradeCost = 100;
    gameData.diceRollIntervalUpgradeCost = 200;
    gameData.diceRollInterval = 1000;
    gameData.diceRollIntervalUpgradeTimeSize = 100;
    gameData.furthestDiceReached = 0;
    gameData.dicePoints = 0;
    gameData.dicePointsTotal = 0;
    gameData.unlockedComboUpgradeCost = 400;
    gameData.unlockedComboUpgradeCostRatio = 1.22;
    gameData.unlockedComboUpgrade = 1;
    gameData.diceSideUpgradeQuantity = 0, //Quantity shows you how many upgrades you have purchased.
    gameData.diceAmountUpgradeQuantity = 0,
    gameData.diceRollIntervalUpgradeQuantity = 0,
    gameData.unlockedComboUpgradeQuantity = 0
    
}
function prestigeLine() {
  if (gameData.furthestDiceReached/gameData.diceDimension >= 1) {
    gameData.linePoints += round10((gameData.furthestDiceReached/gameData.diceDimension), -2);
    
    
    prestigeReset();
    updateAll();
    
  }
}

function prestigeSquare() {
  //Add an upgrade you can buy with a square point that basically boosts proregess based on how many LP you have.
  if (gameData.furthestDiceReached/Math.pow(gameData.diceDimension,2) >= 1) {
    gameData.squarePoints += round10((gameData.furthestDiceReached/Math.pow(gameData.diceDimension,2)), -2);
    prestigeReset();
    gameData.linePoints = 0;
    gameData.diceSideUpgradeCostRatio = 1.22;
    gameData.diceAmountUpgradeCostRatio = 1.22;
    gameData.diceRollIntervalUpgradeCostRatio = 1.22;
    gameData.onlineDiceRollerActivated = false;
    gameData.onlineDiceRollerCostRatio = 1.25;
    gameData.onlineDiceRollerCount = 0;
    gameData.stopCheckCostDiceRollInterval = false;
    gameData.dicePointsBoostByDicePointsActivated = false;
    gameData.dicePointsBoostByDicePointsCost = 3;
    gameData.betterComboScoreCost =  3;
    gameData.betterComboScoreActivated = false;
    gameData.decreasedWaitingLineCost = 1;
    gameData.onlineDiceRollerCost = 5;
    gameData.diceRollIntervalOverloadCost = 5;
    gameData.diceRollIntervalOverloadActivated = false;
    gameData.decreaseUpgradeCostRatiosQuantity = 0,
    gameData.diceRollIntervalOverloadQuantity = 0,
    gameData.onlineDiceRollerQuantity = 0,
    gameData.decreasedWaitingLineQuantity = 0,
    gameData.dicePointsBoostByDicePointsQuantity = 0,
    gameData.betterComboScoreQuantity = 0
    updateAll();
  }
}


function prestigeCube() {
  if (gameData.furthestDiceReached/Math.pow(gameData.diceDimension,3) >= 1) {
    gameData.cubePoints += round10((gameData.furthestDiceReached/Math.pow(gameData.diceDimension,3)), -2)
    prestigeReset();
    gameData.linePoints = 0;
    gameData.squarePoints = 0;
    gameData.squaredRootSalesActivated = false;
    gameData.squaredRootSalesQuantity = 0
    updateAll();
  }
}

function lineUpgradeOnlineDiceRoller() {
    bulkBuy("onlineDiceRoller", "linePoints");
    //When the interval gets reset everything freezes and the automatic rolls just stop. Find a way to fix that.
    if (gameData.quantityBought > 0) {
      gameData.onlineDiceRollerCount += gameData.quantityBought
      gameData.onlineDiceRollerActivated = true
      }
      updateAll();
    }

function lineUpgradeDecreasedWaitingLine() {
    bulkBuy("decreasedWaitingLine", "linePoints");
    if (gameData.quantityBought > 0) {
      for (let i = 0; i < gameData.quantityBought; i++) {
        gameData.diceRollIntervalDecrease *= 1.50
      }
      updateAll();
    }
    
  }



function lineUpgradeDecreaseUpgradeCostRatios() {
    if (gameData.diceSideUpgradeCostRatio > gameData.allRatiosLimit) {
      bulkBuy("decreaseUpgradeCostRatios", "linePoints");
      
      if (gameData.quantityBought > 0) {
        for (let i = 0; i < gameData.quantityBought; i++) {
          //For now this will just set all the ratio's of the normal upgrades to a smaller number. I'd like to be able to pick specifically what ratio you want to decrease instead.
          gameData.dicePointsPerClickCostRatio *= 0.95;
          gameData.diceSideUpgradeCostRatio *= 0.95;
          gameData.diceAmountUpgradeCostRatio *= 0.95;
          gameData.diceRollIntervalUpgradeCostRatio *= 0.95;
          gameData.unlockedComboUpgradeCostRatio *= 0.95
        } 
        if (gameData.diceSideUpgradeCostRatio < gameData.allRatiosLimit) { 
          gameData.dicePointsPerClickCostRatio = 1.01;
          gameData.diceSideUpgradeCostRatio = 1.01;
          gameData.diceAmountUpgradeCostRatio = 1.01;
          gameData.diceRollIntervalUpgradeCostRatio = 1.01;
          gameData.unlockedComboUpgradeCostRatio = 1.01;
        }
      }
    }
    updateAll();
  }


function squareUpgradeSquaredRootSales() {
  //This should make it so that the cost of all regular upgrades that cost dicepoints is squared
  if (gameData.squarePoints >= Math.floor(gameData.squaredRootSalesCost)) {
    gameData.squarePoints -= Math.floor(gameData.squaredRootSalesCost)
    gameData.squaredRootSalesActivated = true
    document.getElementById("squaredRootSales").style.display = "none"
  updateAll();
  }
}



  function prestigeVisibility() {
    if (gameData.furthestDiceReached/gameData.diceDimension >= 1) {
      document.getElementById("prestigeDiceMenu").style.display = "inline-block"
      document.getElementById("linePrestige").style.display = "inline-block"
    }
    if (gameData.furthestDiceReached/Math.pow(gameData.diceDimension,2) >= 1) {
      document.getElementById("squarePrestige").style.display = "inline-block"
    }
    if (gameData.furthestDiceReached/Math.pow(gameData.diceDimension,3) >= 1) {
      document.getElementById("cubePrestige").style.display = "inline-block"
      
    }
    if (gameData.linePoints >= 1) {
      gameData.stopCheckCostLineUpgrades = false
      document.getElementById("linePoints").style.display = "inline-block";
      document.getElementById("onlineDiceRoller").style.display = "inline-block";
      document.getElementById("decreasedWaitingLine").style.display = "inline-block";
      document.getElementById("decreaseUpgradeCostRatios").style.display = "inline-block";
      if (gameData.dicePointsBoostByDicePointsActivated === false) {
      document.getElementById("dicePointsBoostByDicePoints").style.display = "inline-block"
      } else {
        document.getElementById("dicePointsBoostByDicePoints").style.display = "none"
      }
      if (gameData.betterComboScoreActivated === false) {
        document.getElementById("betterComboScore").style.display = "inline-block"
      } else {
        document.getElementById("betterComboScore").style.display = "none"
      }
      if (gameData.diceRollIntervalOverloadActivated === false) {
        document.getElementById("diceRollIntervalOverload").style.display = "inline-block"
      } else {
        document.getElementById("diceRollIntervalOverload").style.display = "none"
      }
    }
    
    if (gameData.squarePoints >= 1) {
      gameData.stopCheckCostSquareUpgrades = false
      document.getElementById("squarePoints").style.display = "inline-block";
      if (gameData.squaredRootSalesActivated === false) {
        document.getElementById("squaredRootSales").style.display = "inline-block"
      }
    }

    if (gameData.cubePoints >= 1) {
      document.getElementById("cubePoints").style.display = "inline-block";
      }
    

    //Add one for Cubepointsupgrades aswell
  
}

function bulkBuy(upgradeType, currencyType) {
  //TODO Check the bulkbuy, something is very wrong with it in my last changes
  gameData.quantity = parseInt(document.getElementById("quantityPicker").value); // Get selected gameData.quantity
  var upgradeCost = gameData[upgradeType + "Cost"];
  var upgradeCostRatio = gameData[upgradeType + "CostRatio"];
  var upgradeIncrement = 1; // Default increment value
  var totalCost = 0
  var totalCostTypeLogic = 0
  if (gameData.quantity === 1) {
    totalCost = upgradeCost
  } else {
    if (upgradeCost === 1) {
      totalCost = Math.pow((upgradeCost + 0.1), Math.pow(upgradeCostRatio, (gameData.quantity - 1)));
    } else {
      totalCost = Math.pow (upgradeCost , Math.pow(upgradeCostRatio, (gameData.quantity - 1))); //TODO: This formula doesn't properly work.Find a better formula for costs "var totalCost = upgradeCost * (Math.pow(upgradeCostRatio, gameData.quantity) - 1) / (upgradeCostRatio - 1);" this is the original one if something goes wrong
    }
  }
  if (gameData.squaredRootSalesActivated === true) {
    totalCost = Math.sqrt(totalCost); // Apply squared root sales if activated
  }
  if (currencyType === "dicePoints") { //This code makes sure that decimals are a thing for LP, SP and CP upgrades TODO: The game acts weird now with prices, probably because of the totalcosttypelogic
    totalCostTypeLogic = Math.floor(totalCost)
    
  } else {
    totalCostTypeLogic = round10(totalCost, -2)
    update("diceComboSystem", totalCostTypeLogic);
  }
  gameData.tempCurrencyType = currencyType
  if (gameData[currencyType] >= totalCostTypeLogic) {
    
    gameData[currencyType] -= totalCostTypeLogic; // Deduct cost from the specified currency
    gameData[upgradeType + "Quantity"] += (upgradeIncrement * gameData.quantity); // Increment the upgrade count
    if (upgradeCost === 1) {
      gameData[upgradeType + "Cost"] += 0.1
    }
    gameData[upgradeType + "Cost"] **= Math.pow(upgradeCostRatio, gameData.quantity); // Adjust the upgrade cost
    gameData.quantityBought = gameData.quantity
    return gameData.quantityBought;
    
  } else {
    gameData.quantityBought = 0
  }
}


// go to a tab for the first time, so not all show
tab("rollDiceMenu")

function resetSave() {
  localStorage.removeItem('diceCubeSave'); // Remove the saved game data from localStorage
  // Reset all game data to default values
  gameData.dicePoints = 0;
  gameData.dicePointsTotal = 0;
  gameData.dicePointsPerClick = 1;
  gameData.diceAmount = 1;
  gameData.diceSides = 6;
  gameData.dicePointsPerClickCost = 10;
  gameData.diceSideUpgradeCost = 50;
  gameData.diceAmountUpgradeCost = 100; //Rename this and all the other instances of it to diceAmountUpgradeCost
  gameData.diceRollIntervalUpgradeCost = 200;
  gameData.dicePointsPerClickCostRatio = 1.22;
  gameData.diceSideUpgradeCostRatio = 1.22;
  gameData.diceAmountUpgradeCostRatio = 1.22;
  gameData.diceRollIntervalUpgradeCostRatio = 1.22;
  //Add a way to better formulate the costratio thingies in the upgrades
  gameData.lastTick = Date.now();
  gameData.diceRollInterval = 1000;
  gameData.diceRollIntervalUpgradeTimeSize = 100;
  gameData.furthestDiceReached = 0;
  gameData.diceDimension = 6; //Altering this can increease the size of the cube, it is the length of the cube.
  gameData.linePoints = 0;
  gameData.squarePoints = 0;
  gameData.cubePoints = 0;
  gameData.squaredRootSalesActivated = false;
  gameData.onlineDiceRollerActivated = false;
  gameData.diceRollIntervalDecrease = 0.50;
  gameData.decreaseUpgradeCostRatiosCost = 1;
  gameData.decreaseUpgradeCostRatiosCostRatio = 1.25;
  gameData.onlineDiceRollerCost = 5;
  gameData.onlineDiceRollerCostRatio = 1.25;
  gameData.onlineDiceRollerCount = 0;
  gameData.decreaseUpgradeCostRatiosCostRatio = 1.25;
  gameData.squaredRootSalesCost = 1;
  gameData.decreasedWaitingLineCost = 1;
  gameData.decreasedWaitingLineCostRatio = 1.25;
  gameData.quantity = 0;
  gameData.diceRollIntervalLimit = 10;
  gameData.allRatiosLimit = 1.01;
  gameData.quantityBought = 0;
  gameData.comboMessageLenghtLimit = 120;
  gameData.stopCheckCostDiceRollInterval = false;
  gameData.stopCheckCostLineUpgrades = true;
  gameData.dicePointsBoostByDicePointsActivated = false;
  gameData.dicePointsBoostByDicePointsCost = 3;
  gameData.betterComboScoreCost = 3;
  gameData.betterComboScoreActivated = false;
  gameData.unlockedComboUpgrade = 1;
  gameData.unlockedComboUpgradeCost = 400;
  gameData.unlockedComboUpgradeCostRatio = 1.22;
  gameData.stopCheckCostSquareUpgrades = false;
  gameData.diceRollIntervalOverloadCost = 5;
  gameData.diceRollIntervalOverloadActivated = false;
  gameData.boughtShopMenuCurrencyType = "All"
  gameData.boughtShopMenuUpgradeType = "All"

  
  updateAll(); // Update the game interface to reflect the reset
}

function updateButtonStyles() {
  // Add this check to exclude cloned buttons from being updated
  var clonedButtons = document.querySelectorAll(".cloned-button");
  
  clonedButtons.forEach(function(clonedButton) {
    clonedButton.style.backgroundColor = ""; // Reset background color
    clonedButton.style.color = ""; // Reset text color
    clonedButton.style.textDecoration = ""; // Reset text decoration
  });
  // The code below checks to see if the diceRollinterval has met it's limit
  if (gameData.diceRollInterval === gameData.diceRollIntervalLimit) {
    var diceRollIntervalUpgradeButton = document.getElementById("diceRollIntervalUpgrade");
    diceRollIntervalUpgradeButton.style.backgroundColor = "#808080"; // Dark grey background color for the button
    diceRollIntervalUpgradeButton.style.color = "#FFFFFF"; // White text color
    if (!gameData.diceRollIntervalOverloadActivated) {
      diceRollIntervalUpgradeButton.innerHTML = "Dice Roll Interval Maxed (Currently " + Math.floor(gameData.diceRollInterval) + "ms)";
      gameData.stopCheckCostDiceRollInterval = true; //TODO: The problem here with the special dicerollinterval look (without lined through text) not working is probably because it doesn't get checked on time or something like that? Look into how I fixed the line pupgrades showijg up too soon to figure it out.
    
    } else {
      diceRollIntervalUpgradeButton.innerHTML = "PROTOTYPE: This will display the current overclocking of the dice roll interval. Overclocked " + gameData.diceRollIntervalOverloadAmount + " times" //TODO: Implement this
    }
    diceRollIntervalUpgradeButton.style.textDecoration = ""

  } else if (Math.floor(gameData.diceRollIntervalUpgradeTimeSize) === 0) {
      var diceRollIntervalUpgradeButton = document.getElementById("diceRollIntervalUpgrade");
      diceRollIntervalUpgradeButton.style.backgroundColor = "#808080"; // Dark grey background color for the button
      diceRollIntervalUpgradeButton.style.color = "#FFFFFF"; // White text color
      diceRollIntervalUpgradeButton.innerHTML = "Dice Roll Interval can currently not be decreased (Currently " + Math.floor(gameData.diceRollInterval) + "ms)";
      diceRollIntervalUpgradeButton.style.textDecoration = ""
      gameData.stopCheckCostDiceRollInterval = true;
  }
  
  checkCost("diceAmountUpgrade", "dicePoints", "unlimited");
  if (!gameData.stopCheckCostLineUpgrades) {
    checkCost("decreaseUpgradeCostRatios", "linePoints", "unlimited");
    checkCost("decreasedWaitingLine", "linePoints", "unlimited");
    checkCost("onlineDiceRoller", "linePoints", "unlimited");
    if (gameData.dicePointsBoostByDicePointsActivated !== true) {
    checkCost("dicePointsBoostByDicePoints", "linePoints", "oneTime")
    }
    if (gameData.betterComboScoreActivated !== true) {
      checkCost("betterComboScore", "linePoints", "oneTime")
    }
    if (gameData.diceRollIntervalOverloadActivated !== true) {
      checkCost("diceRollIntervalOverload", "linePoints", "oneTime")
    }
  }
  if (!gameData.stopCheckCostDiceRollInterval ) {
    checkCost("diceRollIntervalUpgrade", "dicePoints", "unlimited");
  }
  checkCost("diceSideUpgrade", "dicePoints", "unlimited");
   //Todo" add something that can see squaredrootsales is a one time upgrade
  checkCost("unlockedComboUpgrade", "dicePoints", "unlimited");
  if (!gameData.stopCheckCostSquareUpgrades) {
    checkCost("squaredRootSales", "squarePoints", "oneTime")
  }

}

function checkCost(upgradeType, currencyType, amountType) { //Amounttype can be unlimited, limited or oneTime
  // TODO: Instead of having both cost and ratio work with upgradeType and determine it like you already did a few functions ago, check that first.
  var upgradeCost = gameData[upgradeType + "Cost"];
  var totalCost = 0;
  var totalCostTypeLogic = 0;
  var upgradeCostRatio = "";
  if (amountType !== "oneTime") {
    upgradeCostRatio = gameData[upgradeType + "CostRatio"];
  } else {
    totalCost = upgradeCost;
  }
  if (gameData.quantity === 1) {
    totalCost = upgradeCost;
  } else {
    if (upgradeCost === 1) {
      totalCost = Math.pow((upgradeCost + 0.1), Math.pow(upgradeCostRatio, (gameData.quantity - 1)));
    } else {
      totalCost = Math.pow (upgradeCost , Math.pow(upgradeCostRatio, (gameData.quantity - 1))); //TODO: This formula doesn't properly work.Find a better formula for costs "var totalCost = upgradeCost * (Math.pow(upgradeCostRatio, gameData.quantity) - 1) / (upgradeCostRatio - 1);" this is the original one if something goes wrong
    }
  }
  
  if (gameData.squaredRootSalesActivated === true && currencyType === "dicePoints") {
      totalCost = Math.sqrt(totalCost); // Apply squared root sales if activated
  }
  if (currencyType === "dicePoints") { //This code makes sure that decimals are a thing for LP, SP and CP upgrades TODO: The game acts weird now with prices, probably because of the totalcosttypelogic
    totalCostTypeLogic = Math.floor(totalCost);
  } else {
    totalCostTypeLogic = round10(totalCost, -2);
  }
  gameData.tempCurrencyType = currencyType

  var buttonElement = document.getElementById(upgradeType);
  if (buttonElement.style.textDecoration !== "none") {
    if (gameData[currencyType] < totalCostTypeLogic) {
        buttonElement.style.display = "inline-block";
        buttonElement.style.backgroundColor = "#808080"; // Dark grey background color for the button
        buttonElement.style.color = "#FFFFFF"; // White text color
        buttonElement.style.textDecoration = "line-through"; // Strikethrough text
        
        
    } else {
        // TODO: Fix the prestigeupgrades that are invisible popping up again because of this. It's because of the style.textDecoration
        buttonElement.style.color = ""; // Reset color
        buttonElement.style.backgroundColor = ""; // Reset background color
        buttonElement.style.textDecoration = ""; // Reset text decoration
        
    }
  }
    return totalCostTypeLogic;
}

function checkVariables() {
    var textarea = document.getElementById("variableChecker");
    var json = JSON.stringify(gameData)
    var compressed = LZString.compressToEncodedURIComponent(json);
    console.log(compressed)
    textarea.value = ""
    textarea.style.display = "inline-block";
    textarea.value += compressed;
}
 
function lineUpgradeDicePointsBoostByDicePoints() {
  //TODO: Add something in the checkcost to see if it is a one time upgrade or not, that way I can put both the square root sales and this upgrade in that function and it can then be properly striked thrpugh and made darkgrey if you can't properly update it.
  
  if (gameData.linePoints >= Math.floor(gameData.dicePointsBoostByDicePointsCost)) {
    gameData.linePoints -= Math.floor(gameData.dicePointsBoostByDicePointsCost)
    gameData.dicePointsBoostByDicePointsActivated = true
    document.getElementById("dicePointsBoostByDicePoints").style.display = "none"
    updateAll();

  }
}

function lineUpgradeBetterComboScore() {
  //TODO: Make the upgrade more expensive and also nerf it a little more
  if (gameData.linePoints >= Math.floor(gameData.betterComboScoreCost)) {
    gameData.linePoints -= Math.floor(gameData.betterComboScoreCost)
    gameData.betterComboScoreActivated = true
    document.getElementById("betterComboScore").style.display = "none"
    updateAll();

  }

}

/**
 * Adjusts a number to the specified digit.
 *
 * @param {"round" | "floor" | "ceil"} type The type of adjustment.
 * @param {number} value The number.
 * @param {number} exp The exponent (the 10 logarithm of the adjustment base).
 * @returns {number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.",
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${+newExponent + exp}`);
}

// Decimal round
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// Decimal floor
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// Decimal ceil
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);

// Round
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// Floor

function lineUpgradeDiceRollIntervalOverload() {
  if (gameData.linePoints >= Math.floor(gameData.diceRollIntervalOverloadCost)) {
    gameData.linePoints -= Math.floor(gameData.diceRollIntervalOverloadCost)
    gameData.diceRollIntervalOverloadActivated = true
    gameData.diceRollIntervalOverloadTime = 1000
    document.getElementById("diceRollIntervalOverload").style.display = "none"
    updateAll();

  }
}

  function importGameDataPrompt() {
    var textarea = document.getElementById("variableChecker");
    textarea.style.display = "inline-block";
  }
  function importGameData() {
    var importData = document.getElementById("variableChecker").value;
    var original_json = LZString.decompressFromEncodedURIComponent(importData)
    console.log(importData)
    console.log(LZString.decompressFromBase64(importData))
    var loaded_game_data = JSON.parse(original_json)
    console.log(loaded_game_data)
    gameData = loaded_game_data

    
    
  }

  function exportGameDataClipboard() {
    var importData = document.getElementById("variableChecker").value;
    navigator.clipboard.writeText(importData);
    
    }




const upgrades = {
  unlimited: {
    dicePoints: ["diceAmountUpgrade", "diceRollIntervalUpgrade", "diceSideUpgrade", "unlockedComboUpgrade"],
    linePoints: ["onlineDiceRoller"], //TODO decreaseUpgradeCostRatios should be a limited upgrade.
    squarePoints: [],
    cubePoints: []
  },
  limited: {
    dicePoints: [],
    linePoints: ["decreaseUpgradeCostRatios", "decreasedWaitingLine"],
    squarePoints: [],
    cubePoints: []
  },
  oneTime: {
    dicePoints: [],
    linePoints: ["dicePointsBoostByDicePoints", "betterComboScore", "diceRollIntervalOverload"],
    squarePoints: ["squaredRootSales"],
    cubePoints: []
  }
};

// Function to list bought upgrades
function listBoughtUpgrades(currencyType, upgradeType) {
  myChart.data.labels = [];
  myChart.data.datasets[0].data = [];
  myChart.data.datasets[0].backgroundColor = [];
  colorIndex = 0
  console.log('TEST1')
  // Clear all cloned elements
  const clonedButtons = document.querySelectorAll('.cloned-button');
  clonedButtons.forEach(button => button.remove());//clonedButtons.forEach(button => button.parentNode.removeChild(button));

  // Iterate over upgrades
  clonedIds.clear();
  for (const type in upgrades) { //TODO: I think the problem here is that it loops over the upgrde constant three times if it isn't set to All since there ae three types? I might want to fix that.
    console.log(`Upgrades for ${type}:`);
    console.log('TEST2')
    
    // Filter upgrades based on currencyType
    if (gameData.boughtShopMenuCurrencyType === "All") {
      // List all upgrades
      
        if (gameData.boughtShopMenuUpgradeType === "All") {
          const upgradeTypes = ["limited", "unlimited", "oneTime"];
          let allUpgrades = [];

          for (let type of upgradeTypes) {
              allUpgrades = allUpgrades.concat(
                upgrades[type].dicePoints,
                upgrades[type].linePoints,
                upgrades[type].squarePoints,
                upgrades[type].cubePoints
              );
          }

          appendUpgradeButtons(allUpgrades);
        } else {
          const allUpgrades = upgrades[gameData.boughtShopMenuUpgradeType].dicePoints.concat(upgrades[gameData.boughtShopMenuUpgradeType].linePoints, upgrades[gameData.boughtShopMenuUpgradeType].squarePoints, upgrades[gameData.boughtShopMenuUpgradeType].cubePoints );
          appendUpgradeButtons(allUpgrades);
          
        }
      
    } else if (gameData.boughtShopMenuCurrencyType === "dicePoints" || gameData.boughtShopMenuCurrencyType === "linePoints" || gameData.boughtShopMenuCurrencyType === "squarePoints" || gameData.boughtShopMenuCurrencyType === "CubePoints") {
      // Only show the upgrades for specified currency type
      console.log(`Upgrades for ${gameData.boughtShopMenuCurrencyType}:`);
      //TODO: Make the below code also work on boughtshopmenucurrencytype "all" That should probably help update everything decently.
      if (gameData.boughtShopMenuUpgradeType === "All") {
        const allUpgrades = upgrades.unlimited[gameData.boughtShopMenuCurrencyType].concat(upgrades.limited[gameData.boughtShopMenuCurrencyType], upgrades.oneTime[gameData.boughtShopMenuCurrencyType]);
        console.log(allUpgrades.join(", "));
        appendUpgradeButtons(allUpgrades);
      } else {
        appendUpgradeButtons(upgrades[gameData.boughtShopMenuUpgradeType][gameData.boughtShopMenuCurrencyType]);
      }
    }
  }
}

function appendUpgradeButtons(upgradeIds) {
  console.log(`Upgrades for TEST ${upgradeIds}:`)
  for (const elementId of upgradeIds) {
    if (!clonedIds.has(elementId)) {
      const originalElement = document.getElementById(elementId);
      if (originalElement) {
        const clonedElement = originalElement.cloneNode(true);
        const clonedElementId = elementId + "-2"; // Add "-2" to the cloned ID
        clonedElement.id = clonedElementId; // Assign the new ID to the cloned element
        clonedElement.classList.add("cloned-button");

        if (originalElement.classList.contains("cloned-button")) { //USE SOMETHING LIKE THIS FOR UPDATE CHECK
          console.log("OH GOD NO")
        }
        else {
          console.log(`YES ${originalElement} ${clonedElement} `)
        }
        clonedElement.style.fontSize = "larger";
        clonedElement.removeAttribute("onclick");
        clonedElement.removeAttribute("href");
        clonedElement.style.backgroundColor = "";
        clonedElement.style.color = "";
        document.getElementById("boughtShopMenu").insertAdjacentElement("afterend", clonedElement); //This part of the code is the only part of it that is responsible for inserting the cloned button elements.
        clonedElement.innerHTML += (" (" + gameData[elementId + "Quantity"] + " Bought)"); 
        clonedIds.add(elementId);
        
        console.log(`Upgrades for ${clonedElement}:`);
        console.log(`Upgrades for ${originalElement}:`);
        console.log(`EE ${clonedIds}:`);
        addData(elementId, gameData[elementId + "Quantity"], getNextColor()); //TODO: This line puts all Ids in the list, even the ones you can't see yet, maybe I should slightly change that.
        console.log(`YES ${gameData[elementId + "Quantity"]}  `)
      }
    }
  }
  document.getElementById("myChart").style.display = "inline-block";
}

function addData(label, data, color) {
  // Add label to the labels array
  myChart.data.labels.push(label);
  // Add data to the data array
  myChart.data.datasets[0].data.push(data);
  // Add color to the backgroundColor array
  myChart.data.datasets[0].backgroundColor.push(color);
  // Update the chart
  myChart.update();
}

let colorIndex = 0; // Initialize color index to start from 0

function getNextColor() {
  const color = colors[colorIndex]; // Get the color at the current index
  colorIndex = (colorIndex + 1) % colors.length; // Increment index and reset if it exceeds the length of the colors array
  return color;
}

