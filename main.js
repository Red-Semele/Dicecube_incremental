document.addEventListener('DOMContentLoaded', function() {
  gameData.quantity = 1
})



document.getElementById("linePrestige").style.display = "none"
document.getElementById("squarePrestige").style.display = "none"
document.getElementById("cubePrestige").style.display = "none"
document.getElementById("prestigeDiceMenu").style.display = "none"
document.getElementById("onlineDiceRoller").style.display = "none"
document.getElementById("decreasedWaitingLine").style.display = "none"
document.getElementById("squaredRootSales").style.display = "none"
document.getElementById("decreaseUpgradeCostRatios").style.display = "none"
document.getElementById("linePoints").style.display = "none";
document.getElementById("squarePoints").style.display = "none";
document.getElementById("cubePoints").style.display = "none";
document.getElementById("variableChecker").style.display = "none";




var saveGame = localStorage.getItem('diceCubeSave')
var gameData = {
  dicePoints: 0,
  dicePointsTotal: 0,
  dicePointsPerClick:1,
  diceAmount: 1,
  diceSides: 6,
  dicePointsPerClickCost: 10,
  diceSideUpgradeCost: 50,
  diceAmountUpgradeCost: 100, //Rename this and all the other instances of it to diceAmountUpgradeCost
  diceRollIntervalUpgradeCost: 200,
  dicePointsPerClickCostRatio: 1.25,
  diceSideUpgradeCostRatio: 1.25,
  diceAmountUpgradeCostRatio: 1.25,
  diceRollIntervalUpgradeCostRatio: 1.25,
  //Add a way to better formulate the costratio thingies in the upgrades
  lastTick: Date.now(),
  diceRollInterval: 1000,
  diceRollIntervalUpgradeTimeSize: 100,
  furthestDiceReached: 0,
  diceDimension: 6, //Altering this can increease the size of the cube, it is the length of the cube.
  prestigeLinePoints: 0,
  prestigeSquarePoints: 0,
  prestigeCubePoints: 0,
  squaredRootSalesActivated: false,
  onlineDiceRollerActivated: false,
  diceRollIntervalDecrease: 0.50,
  decreaseUpgradeCostRatiosCost: 1,
  decreaseUpgradeCostRatiosCostRatio: 2,
  onlineDiceRollerCost: 5,
  onlineDiceRollerCostRatio: 100,
  onlineDiceRollerCount: 0,
  decreaseUpgradeCostRatiosCostRatio: 2,
  squaredRootSalesCost: 1,
  decreasedWaitingLineCost: 1,
  decreasedWaitingLineCostRatio: 1.15,
  quantity: 0, //TODO: Check this interaction in the bulkbuying section, something is wrong with it, if you attempt to buy with 100 while you can't afford it everythign is permanently striked out and you can't buy anything.
  diceRollIntervalLimit: 10,
  allRatiosLimit: 1.1,
  quantityBought: 0,
  comboMessageLenghtLimit: 120
  

  // Also add this for the other line and square upgrades, check code if you have to for example.
}
//gameData.quantity = parseInt(document.getElementById("quantityPicker").value); TODO Find a way to apply this from the start so all buttons are striked out at first if you can't afford them.
var selectElement = document.getElementById('quantityPicker');
selectElement.addEventListener('change', function() {
var selectedValue = parseInt(selectElement.value);
  gameData.quantity = selectedValue;
});

function update(id, content) {
  document.getElementById(id).innerHTML = content;
  
}

function updateAll() {

  if (gameData.squaredRootSalesActivated === true) { //TODO: Dit mag waarschijnlijk weg omdat er ak gecheckt wordt of squaredRootsales atief is of niet en omdat de vierkantswortel dan al wordt genomen van de totalcost.
    //update("diceSideUpgrade", "Upgrade Dice (Currently " + "d" + gameData.diceSides + ") Cost: " + format(Math.sqrt(gameData.diceSideUpgradeCost), "scientific") + " dicePoints"); //Check this list to see by how much the sides need to be incremented to be a real dice: https://commons.wikimedia.org/wiki/Dice_by_number_of_sides#D9
    update("diceSideUpgrade", "Upgrade Dice (Currently " + "d" + gameData.diceSides + ") Cost: " + format(checkCost("diceSideUpgrade", "dicePoints"), "scientific") + " dicePoints");
    if (gameData.onlineDiceRollerActivated === true) { 
      //update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceAmount + " dice" + " x" + (gameData.onlineDiceRollerCount * 2) + " by online dice roller upgrade) Cost: " + format(Math.sqrt(gameData.diceAmountUpgradeCost), "scientific") + " dicePoints");
      update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceAmount + " dice" + " x" + (gameData.onlineDiceRollerCount * 2) + " by online dice roller upgrade) Cost: " + format(checkCost("diceAmountUpgrade", "dicePoints"), "scientific") + " dicePoints");
    } else {
      //update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceAmount + " dice" + ") Cost: " + format(Math.sqrt(gameData.diceAmountUpgradeCost), "scientific") + " dicePoints");
      update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceAmount + " dice" + ") Cost: " + format(checkCost("diceAmountUpgrade", "dicePoints"), "scientific") + " dicePoints");
    }

    //update("diceRollIntervalUpgrade", "Increase automatic dice-roll speed by " + Math.floor(gameData.diceRollIntervalUpgradeTimeSize) + "ms (Currently " + Math.floor (gameData.diceRollInterval) + "ms ) Cost: " + format(Math.sqrt(gameData.diceRollIntervalUpgradeCost), "scientific") + " dicePoints");
    update("diceRollIntervalUpgrade", "Increase automatic dice-roll speed by " + Math.floor(gameData.diceRollIntervalUpgradeTimeSize) + "ms (Currently " + Math.floor(gameData.diceRollInterval) + "ms ) Cost: " + format(checkCost("diceRollIntervalUpgrade", "dicePoints"), "scientific") + " dicePoints");
    
    
  
  } else {
    //update("perClickUpgrade", "Upgrade Pickaxe (Currently Level " + format(gameData.dicePointsPerClick, "scientific") + ") Cost: " + format(gameData.dicePointsPerClickCost, "scientific") + " dicePoints");
    //update("diceSideUpgrade", "Upgrade Dice (Currently " + "d" + gameData.diceSides + ") Cost: " + format(gameData.diceSideUpgradeCost, "scientific") + " dicePoints"); //Check this list to see by how much the sides need to be incremented to be a real dice: https://commons.wikimedia.org/wiki/Dice_by_number_of_sides#D9
    update("diceSideUpgrade", "Upgrade Dice (Currently " + "d" + gameData.diceSides + ") Cost: " + format(checkCost("diceSideUpgrade", "dicePoints"), "scientific") + " dicePoints"); //If something is wrong with thus the correct version is right above it.
   
    if (gameData.onlineDiceRollerActivated === true) { 
      update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceAmount + " dice" + " x" + (gameData.onlineDiceRollerCount * 2) + " by online dice roller upgrade) Cost: " + format(checkCost("diceAmountUpgrade", "dicePoints"), "scientific") + " dicePoints");
    } else {
      update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceAmount + " dice" + ") Cost: " + format(checkCost("diceAmountUpgrade", "dicePoints"), "scientific") + " dicePoints");
    }
    update("diceRollIntervalUpgrade", "Increase automatic dice-roll speed by " + Math.floor(gameData.diceRollIntervalUpgradeTimeSize) + "ms (Currently " + Math.floor(gameData.diceRollInterval) + "ms ) Cost: " + format(checkCost("diceRollIntervalUpgrade", "dicePoints"), "scientific") + " dicePoints");
    
  }
  update("dicePoints", format(Math.floor(gameData.dicePoints), "scientific") + " Dice points");
  update("linePoints", "Line Points: " + gameData.prestigeLinePoints);
  update("squarePoints", "Square Points: " + gameData.prestigeSquarePoints);
  update("cubePoints", "Cube Points: " + gameData.prestigeCubePoints);
  update("diceProgress", "Currently reached dice " + format(gameData.furthestDiceReached, "scientific") + " of " + (Math.pow(gameData.diceDimension, 3)) +  " in dicecube");
  update ("diceProgress2", "Dice " + format(gameData.furthestDiceReached, "scientific") + " currently placed on " + Math.floor(gameData.dicePointsTotal/(Math.pow(5, (gameData.furthestDiceReached - 1)))));
  update ("linePrestige", "Line prestige (for " + Math.floor (gameData.furthestDiceReached/gameData.diceDimension) + "LP)");
  update ("squarePrestige", "Square prestige (for " + Math.floor (gameData.furthestDiceReached/Math.pow(gameData.diceDimension, 2)) + "SP)");
  update ("cubePrestige", "Cube prestige (for " + Math.floor (gameData.furthestDiceReached/Math.pow(gameData.diceDimension, 3)) + "CP)")
  //update ("decreaseUpgradeCostRatios", "Decrease the speed at which regular upgrades' cost grows Cost: " + Math.floor(gameData.decreaseUpgradeCostRatiosCost) + "LP")
  //update ("decreasedWaitingLine", "Decreased waiting line Cost: " + Math.floor(gameData.decreasedWaitingLineCost) + "LP")
  //update ("onlineDiceRoller", "On-line dice roller (Currently " + (gameData.onlineDiceRollerCount * 2) + "x dice) Cost:" + Math.floor(gameData.onlineDiceRollerCost) + "LP")
  update("decreaseUpgradeCostRatios", "Decrease the speed at which regular upgrades' cost grows Cost: " + format(checkCost("decreaseUpgradeCostRatios", "linePoints"), "scientific") + "LP");
update("decreasedWaitingLine", "Decreased waiting line Cost: " + format(checkCost("decreasedWaitingLine", "linePoints"), "scientific") + "LP");
update("onlineDiceRoller", "On-line dice roller (Currently " + (gameData.onlineDiceRollerCount * 2) + "x dice) Cost:" + format(checkCost("onlineDiceRoller", "linePoints"), "scientific") + "LP");
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
    if (duplicates[value] > 1) {
      update("diceComboSystem", "Currently there is a combo!");
      totalPoints += parseInt(value) * (duplicates[value] - 1);
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
      update("diceComboSystem", comboMessage)
    }
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

function buyScoreMultiplierUpgrade() {
  // Implement a potential upgrade to the combo system here, maybe having two kinds of upgrades would be good, one for enabling duo, triple, quadruple etc combo's and one for increasing the combosystem math.
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
  if (gameData.quantity > 1 ) {
    // Loop through quantity times
    for (var i = 0; i < gameData.quantity; i++) {
        // Calculate cost with current ratio and add to totalCost
        totalCost += gameData.diceAmountUpgradeCost * gameData.diceAmountUpgradeCostRatio;
    }
  }else{
    totalCost = gameData.diceAmountUpgradeCost * gameData.quantity;
  }
  if (gameData.squaredRootSalesActivated === true) {
    totalCost = Math.sqrt(totalCost); // Apply squared root sales if activated
  }
  if (gameData.dicePoints >= totalCost) {
    //TODO currently I at the very least get this far.
    bulkBuy("diceAmountUpgrade", "dicePoints");
    
    
    if (gameData.quantityBought > 0) {
      gameData.diceAmount += gameData.quantityBought; // Increment dice count by the gameData.quantity purchased
      gameData.quantityBought = 0
      updateAll();
    }

  }
}
  //if (gameData.squaredRootSalesActivated === true) {
   // if (gameData.dicePoints >= Math.sqrt(gameData.diceAmountUpgradeCost)) {
      //gameData.dicePoints -= Math.sqrt(gameData.diceAmountUpgradeCost);
      //gameData.diceAmount += 1;
      //gameData.diceAmountUpgradeCost *= gameData.diceAmountUpgradeCostRatio;
      //updateAll();
    //}
  //} else { //TODO: For some reason all upgrades when they are not math.sqrt can't be bought, when the square root sales upgrade is bought this problem is fixed. is it because it's the first buyable upgrade of the three in here?
    //if (gameData.dicePoints >= gameData.diceAmountUpgradeCost) {
      //gameData.dicePoints -= gameData.diceAmountUpgradeCost;
      
      //gameData.diceAmountUpgradeCost *= gameData.diceAmountUpgradeCostRatio;
      //updateAll();
    //}
  //}
//}

function upgradeDice() { //TODO: For some reason this upgrade is now the only one that is fully unaffected by whatever bug it is that stops me from buying regular upgrades
  if (gameData.quantity > 1 ) {
    // Loop through quantity times
    for (var i = 0; i < gameData.quantity; i++) {
        // Calculate cost with current ratio and add to totalCost
        totalCost += gameData.diceSideUpgradeCost * gameData.diceSideUpgradeCostRatio;
    }
  }else{
    totalCost = gameData.diceSideUpgradeCost * gameData.quantity;
  }
  if (gameData.squaredRootSalesActivated === true) {
    totalCost = Math.sqrt(totalCost); // Apply squared root sales if activated
  }
  if (gameData.dicePoints >= totalCost) {   
  
      bulkBuy("diceSideUpgrade", "dicePoints");
      if (gameData.quantityBought > 0) {
        gameData.diceSides += (gameData.quantityBought * 2); // Increment dice count by the gameData.quantity purchased
        updateAll();
      }
      
    }
}
  



function upgradeDiceRollInterval() {
  if (gameData.quantity > 1 ) {
    // Loop through quantity times
    for (var i = 0; i < gameData.quantity; i++) {
        // Calculate cost with current ratio and add to totalCost
        totalCost += gameData.diceRollIntervalUpgradeCost * gameData.diceRollIntervalUpgradeCostRatio
    }
  }else{
    totalCost = gameData.diceSideUpgradeCost * gameData.quantity;
  }
  if (gameData.squaredRootSalesActivated === true) {
    totalCost = Math.sqrt(totalCost); // Apply squared root sales if activated
  }
  if (gameData.dicePoints >= totalCost) {   
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
if (savegame !== null) {
  gameData = savegame
  if (typeof saveGame.dicePoints !== "undefined") gameData.dicePoints = saveGame.dicePoints;
  if (typeof saveGame.dicePointsPerClick !== "undefined") gameData.dicePointsPerClick = saveGame.dicePointsPerClick;
  if (typeof saveGame.dicePointsPerClickCost !== "undefined") gameData.dicePointsPerClickCost = saveGame.dicePointsPerClickCost;
  if (typeof saveGame.lastTick !== "undefined") gameData.lastTick = saveGame.lastTick;
  if (typeof savegame.diceRollIntervalLimit === 'undefined') gameData.diceRollIntervalLimit = 10;
  if (typeof savegame.allRatiosLimit === 'undefined') gameData.allRatiosLimit = 1.1;
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
  if (typeof savegame.prestigeLinePoints === 'undefined') gameData.prestigeLinePoints = 0;
  if (typeof savegame.prestigeSquarePoints === 'undefined') gameData.prestigeSquarePoints = 0;
  if (typeof savegame.prestigeCubePoints === 'undefined') gameData.prestigeCubePoints = 0;
  if (typeof savegame.squaredRootSalesActivated === 'undefined') gameData.squaredRootSalesActivated = false;
  if (typeof savegame.onlineDiceRollerActivated === 'undefined') gameData.onlineDiceRollerActivated = false;
  if (typeof savegame.diceRollIntervalDecrease === 'undefined') gameData.diceRollIntervalDecrease = 0.50;
  if (typeof savegame.decreaseUpgradeCostRatiosCost === 'undefined') gameData.decreaseUpgradeCostRatiosCost = 1;
  if (typeof savegame.decreaseUpgradeCostRatiosCostRatio === 'undefined') gameData.decreaseUpgradeCostRatiosCostRatio = 2;
  if (typeof savegame.onlineDiceRollerCost === 'undefined') gameData.onlineDiceRollerCost = 5;
  if (typeof savegame.onlineDiceRollerCostRatio === 'undefined') gameData.onlineDiceRollerCostRatio = 100;
  if (typeof savegame.onlineDiceRollerCount === 'undefined') gameData.onlineDiceRollerCount = 0;
  if (typeof savegame.squaredRootSalesCost === 'undefined') gameData.squaredRootSalesCost = 1;
  if (typeof savegame.decreasedWaitingLineCost === 'undefined') gameData.decreasedWaitingLineCost = 1;
  if (typeof savegame.decreasedWaitingLineCostRatio === 'undefined') gameData.decreasedWaitingLineCostRatio = 1.15;
  if (typeof savegame.quantity === 'undefined') gameData.quantity = 0;
  if (typeof savegame.diceRollIntervalLimit === 'undefined') gameData.diceRollIntervalLimit = 10;
  if (typeof savegame.allRatiosLimit === 'undefined') gameData.allRatiosLimit = 1.1;
  if (typeof savegame.quantityBought === 'undefined') gameData.quantityBought = 0;
  if (typeof savegame.comboMessageLenghtLimit === 'undefined') gameData.comboMessageLenghtLimit = 120;
}
  
    
  


function format(number, type) {
	let exponent = Math.floor(Math.log10(number));
	let mantissa = number / Math.pow(10, exponent);
	if (exponent < 3) return Math.floor(number.toFixed(0));
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent;
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}



//Add the other variables here aswell

function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  document.getElementById("rollDiceMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById("prestigeMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
function prestigeReset() { //This is used to make sure all the stuff that should be reset from the normal upgrades gets reset.
    gameData.furthestDiceReached = 0;
    gameData.dicePoints = 0;
    gameData.dicePointsTotal = 0;
    gameData.dicePointsPerClick = 1;
    gameData.diceAmount = 1;
    gameData.diceSides = 6,
    gameData.dicePointsPerClickCost = 10;
    gameData.diceSideUpgradeCost = 50;
    gameData.diceAmountUpgradeCost = 100;
    gameData.diceRollIntervalUpgradeCost = 200;
    gameData.diceRollInterval = 1000;
    gameData.diceRollIntervalUpgradeTimeSize = 100;
    gameData.furthestDiceReached = 0;
}
function prestigeLine() {
  if (gameData.furthestDiceReached/gameData.diceDimension >= 1) {
    gameData.prestigeLinePoints += Math.floor (gameData.furthestDiceReached/gameData.diceDimension);
    prestigeReset();
    updateAll();
    
  }
}

function prestigeSquare() {
  //Add an upgrade you can buy with a square point that basically boosts proregess based on how many LP you have.
  if (gameData.furthestDiceReached/Math.pow(gameData.diceDimension,2) >= 1) {
    gameData.prestigeSquarePoints += Math.floor (gameData.furthestDiceReached/Math.pow(gameData.diceDimension,2))
    prestigeReset();
    gameData.prestigeLinePoints = 0
    updateAll();
  }
}


function prestigeCube() {
  if (gameData.furthestDiceReached/Math.pow(gameData.diceDimension,3) >= 1) {
    gameData.prestigeCubePoints += Math.floor (gameData.furthestDiceReached/Math.pow(gameData.diceDimension,3))
    prestigeReset();
    gameData.prestigeLinePoints = 0
    gameData.prestigeSquarePoints = 0
    updateAll();
  }
}

function lineUpgradeOnlineDiceRoller() {
  if (gameData.quantity > 1 ) {
    // Loop through quantity times
    for (var i = 0; i < gameData.quantity; i++) {
        // Calculate cost with current ratio and add to totalCost
        totalCost += gameData.onlineDiceRollerCost * gameData.onlineDiceRollerCostRatio;
    }
  }else{
    totalCost = gameData.onlineDiceRollerCost * gameData.quantity;
  }
  if (gameData.prestigeLinePoints >= totalCost) {   
    bulkBuy("onlineDiceRoller", "prestigeLinePoints");
    //When the interval gets reset everything freezes and the automatic rolls just stop. Find a way to fix that.
    if (gameData.quantityBought > 0) {
      gameData.onlineDiceRollerCount += gameData.quantityBought
      gameData.onlineDiceRollerActivated = true
      }
      updateAll();
    }
}

function lineUpgradeDecreasedWaitingLine() {
  if (gameData.quantity > 1 ) {
    // Loop through quantity times
    for (var i = 0; i < gameData.quantity; i++) {
        // Calculate cost with current ratio and add to totalCost
        totalCost += gameData.decreasedWaitingLineCost * gameData.decreasedWaitingLineCostRatio;
    }
  }else{
    totalCost = gameData.decreasedWaitingLineCost * gameData.quantity;
  }
  if (gameData.prestigeLinePoints >= totalCost) {   
    bulkBuy("decreasedWaitingLine", "prestigeLinePoints");
    if (gameData.quantityBought > 0) {
      for (let i = 0; i < gameData.quantityBought; i++) {
        gameData.diceRollIntervalDecrease *= 1.50
      }
      updateAll();
    }
    
  }
}


function lineUpgradeDecreaseUpgradeCostRatios() {
  if (gameData.quantity > 1 ) {
    // Loop through quantity times
    for (var i = 0; i < gameData.quantity; i++) {
        // Calculate cost with current ratio and add to totalCost
        totalCost += gameData.decreaseUpgradeCostRatiosCost * gameData.decreaseUpgradeCostRatiosCostRatio;
    }
  }else{
    totalCost = gameData.decreaseUpgradeCostRatiosCost * gameData.quantity;
  }
  if (gameData.prestigeLinePoints >= totalCost) {   
    if (gameData.diceSideUpgradeCostRatio > gameData.allRatiosLimit) {
      bulkBuy("decreaseUpgradeCostRatios", "prestigeLinePoints");
      
      if (gameData.quantityBought > 0) {
        for (let i = 0; i < gameData.quantityBought; i++) {
          //For now this will just set all the ratio's of the normal upgrades to a smaller number. I'd like to be able to pick specifically what ratio you want to decrease instead.
          gameData.dicePointsPerClickCostRatio *= 0.95;
          gameData.diceSideUpgradeCostRatio *= 0.95;
          gameData.diceAmountUpgradeCostRatio *= 0.95;
          gameData.diceRollIntervalUpgradeCostRatio *= 0.95;
        } 
        if (gameData.diceSideUpgradeCostRatio < gameData.allRatiosLimit) {
          gameData.dicePointsPerClickCostRatio = 1.1;
          gameData.diceSideUpgradeCostRatio = 1.1;
          gameData.diceAmountUpgradeCostRatio = 1.1;
          gameData.diceRollIntervalUpgradeCostRatio = 1.1;
        }
      }
    }
    updateAll();
  }
}

function squareUpgradeSquaredRootSales() {
  //This should make it so that the cost of all regular upgrades that cost dicepoints is squared
  if (gameData.prestigeSquarePoints >= Math.floor(gameData.squaredRootSalesCost)) {
    gameData.prestigeSquarePoints -= Math.floor(gameData.squaredRootSalesCost)
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
    if (gameData.prestigeLinePoints >= 1) {
      document.getElementById("linePoints").style.display = "inline-block";
      document.getElementById("onlineDiceRoller").style.display = "inline-block"
      document.getElementById("decreasedWaitingLine").style.display = "inline-block"
      document.getElementById("decreaseUpgradeCostRatios").style.display = "inline-block"
    }
    
    if (gameData.prestigeSquarePoints >= 1) {
      document.getElementById("squarePoints").style.display = "inline-block";
      if (gameData.squaredRootSalesActivated === false) {
      document.getElementById("squaredRootSales").style.display = "inline-block"
      }
    }

    if (gameData.prestigeCubePoints >= 1) {
      document.getElementById("cubePoints").style.display = "inline-block";
      }
    

    //Add one for Cubepointsupgrades aswell
  
}

function bulkBuy(upgradeType, currencyType) {
  //TODO When attempting to buy something while you can I at the very least get this far.
  gameData.quantity = parseInt(document.getElementById("quantityPicker").value); // Get selected gameData.quantity
  var upgradeCost = gameData[upgradeType + "Cost"];
  var upgradeCostRatio = gameData[upgradeType + "CostRatio"];
  var upgradeIncrement = 1; // Default increment value

  

  

  var totalCost = upgradeCost * (Math.pow(upgradeCostRatio, gameData.quantity) - 1) / (upgradeCostRatio - 1); // Calculate total cost
  if (gameData.squaredRootSalesActivated === true) {
    totalCost = Math.sqrt(totalCost); // Apply squared root sales if activated
  }

  if (gameData[currencyType] >= totalCost) {
    gameData[currencyType] -= totalCost; // Deduct cost from the specified currency
    gameData[upgradeType] += upgradeIncrement * gameData.quantity; // Increment the upgrade count
    gameData[upgradeType + "Cost"] *= Math.pow(upgradeCostRatio, gameData.quantity); // Adjust the upgrade cost
    gameData.quantityBought = gameData.quantity
    return gameData.quantityBought;
    
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
  gameData.dicePointsPerClickCostRatio = 1.25;
  gameData.diceSideUpgradeCostRatio = 1.25;
  gameData.diceAmountUpgradeCostRatio = 1.25;
  gameData.diceRollIntervalUpgradeCostRatio = 1.25;
  //Add a way to better formulate the costratio thingies in the upgrades
  gameData.lastTick = Date.now();
  gameData.diceRollInterval = 1000;
  gameData.diceRollIntervalUpgradeTimeSize = 100;
  gameData.furthestDiceReached = 0;
  gameData.diceDimension = 6; //Altering this can increease the size of the cube, it is the length of the cube.
  gameData.prestigeLinePoints = 0;
  gameData.prestigeSquarePoints = 0;
  gameData.prestigeCubePoints = 0;
  gameData.squaredRootSalesActivated = false;
  gameData.onlineDiceRollerActivated = false;
  gameData.diceRollIntervalDecrease = 0.50;
  gameData.decreaseUpgradeCostRatiosCost = 1;
  gameData.decreaseUpgradeCostRatiosCostRatio = 2;
  gameData.onlineDiceRollerCost = 5;
  gameData.onlineDiceRollerCostRatio = 100;
  gameData.onlineDiceRollerCount = 0;
  gameData.decreaseUpgradeCostRatiosCostRatio = 2;
  gameData.squaredRootSalesCost = 1;
  gameData.decreasedWaitingLineCost = 1;
  gameData.decreasedWaitingLineCostRatio = 1.15;
  gameData.quantity = 0;
  gameData.diceRollIntervalLimit = 10;
  gameData.allRatiosLimit = 1.1;
  gameData.quantityBought = 0;
  gameData.comboMessageLenghtLimit = 120;
  
  updateAll(); // Update the game interface to reflect the reset
}

function updateButtonStyles() {
   // Check the cost for each button TODO: Make these correctly updated
   checkCost("diceAmountUpgrade", "dicePoints"); 
   checkCost("decreaseUpgradeCostRatios", "prestigeLinePoints");
   checkCost("decreasedWaitingLine", "prestigeLinePoints");
   checkCost("onlineDiceRoller", "prestigeLinePoints");
   checkCost("diceRollIntervalUpgrade", "dicePoints");
   checkCost("diceSideUpgrade", "dicePoints");
   checkCost("squaredRootSales", "squarePoints") //Todo" add something that can see squaredrootsales is a one time upgrade
}

   function checkCost(upgradeType, currencyType) { //TODO: Instead of having both cost and ratio work with upgradetype and determine it like you already did a few funcitions ago, check that first.
    var upgradeCost = gameData[upgradeType + "Cost"];
    var upgradeCostRatio = gameData[upgradeType + "CostRatio"];
    var totalCost = upgradeCost * (Math.pow(upgradeCostRatio, gameData.quantity) - 1) / (upgradeCostRatio - 1);
    if (gameData.squaredRootSalesActivated === true && currencyType === "dicePoints") {
      totalCost = Math.sqrt(totalCost); // Apply squared root sales if activated
    }
    //TODO add some code here that basically adds the totalcost at the end of the update text of the shopupgrades, also make it check what currency it is to either add "dicepoints" "LP" "SP" or "CP" at the end to showcase what the cost is. 
    // Check if the player has enough currency
    if (gameData[currencyType] < totalCost) {
      var buttonElement = document.getElementById(upgradeType);
      buttonElement.style.display = "inline-block";
      buttonElement.style.backgroundColor = "#808080"; // Dark grey background color for the button
      buttonElement.style.color = "#FFFFFF"; // White text color
      //buttonElement.style.color = "#808080"; // Dark grey color for text
      buttonElement.style.textDecoration = "line-through"; // Strikethrough text
    } else {
      var buttonElement = document.getElementById(upgradeType);
      buttonElement.style.color = ""; // Reset color
      buttonElement.style.backgroundColor = ""; // Reset background color
      buttonElement.style.textDecoration = ""; // Reset text decoration
    }
    return totalCost;
  }

function checkVariables() {
  
  variableMessage =
    "gameData.dicePoints: " + gameData.dicePoints + "\n" +
    "gameData.dicePointsTotal: " + gameData.dicePointsTotal + "\n" +
    "gameData.dicePointsPerClick: " + gameData.dicePointsPerClick + "\n" +
    "gameData.diceAmount: " + gameData.diceAmount + "\n" +
    "gameData.diceSides: " + gameData.diceSides + "\n" +
    "gameData.dicePointsPerClickCost: " + gameData.dicePointsPerClickCost + "\n" +
    "gameData.diceSideUpgradeCost: " + gameData.diceSideUpgradeCost + "\n" +
    "gameData.diceAmountUpgradeCost: " + gameData.diceAmountUpgradeCost + "\n" +
    "gameData.diceRollIntervalUpgradeCost: " + gameData.diceRollIntervalUpgradeCost + "\n" +
    "gameData.dicePointsPerClickCostRatio: " + gameData.dicePointsPerClickCostRatio + "\n" +
    "gameData.diceSideUpgradeCostRatio: " + gameData.diceSideUpgradeCostRatio + "\n" +
    "gameData.diceAmountUpgradeCostRatio: " + gameData.diceAmountUpgradeCostRatio + "\n" +
    "gameData.diceRollIntervalUpgradeCostRatio: " + gameData.diceRollIntervalUpgradeCostRatio + "\n" +
    "gameData.lastTick: " + gameData.lastTick + "\n" +
    "gameData.diceRollInterval: " + gameData.diceRollInterval + "\n" +
    "gameData.diceRollIntervalUpgradeTimeSize: " + gameData.diceRollIntervalUpgradeTimeSize + "\n" +
    "gameData.furthestDiceReached: " + gameData.furthestDiceReached + "\n" +
    "gameData.diceDimension: " + gameData.diceDimension + "\n" +
    "gameData.prestigeLinePoints: " + gameData.prestigeLinePoints + "\n" +
    "gameData.prestigeSquarePoints: " + gameData.prestigeSquarePoints + "\n" +
    "gameData.prestigeCubePoints: " + gameData.prestigeCubePoints + "\n" +
    "gameData.squaredRootSalesActivated: " + gameData.squaredRootSalesActivated + "\n" +
    "gameData.onlineDiceRollerActivated: " + gameData.onlineDiceRollerActivated + "\n" +
    "gameData.diceRollIntervalDecrease: " + gameData.diceRollIntervalDecrease + "\n" +
    "gameData.decreaseUpgradeCostRatiosCost: " + gameData.decreaseUpgradeCostRatiosCost + "\n" +
    "gameData.decreaseUpgradeCostRatiosCostRatio: " + gameData.decreaseUpgradeCostRatiosCostRatio + "\n" +
    "gameData.onlineDiceRollerCost: " + gameData.onlineDiceRollerCost + "\n" +
    "gameData.onlineDiceRollerCostRatio: " + gameData.onlineDiceRollerCostRatio + "\n" +
    "gameData.onlineDiceRollerCount: " + gameData.onlineDiceRollerCount + "\n" +
    "gameData.decreasedWaitingLineCost: " + gameData.decreasedWaitingLineCost + "\n" +
    "gameData.decreasedWaitingLineCostRatio: " + gameData.decreasedWaitingLineCostRatio + "\n" +
    "gameData.quantity: " + gameData.quantity + "\n" +
    "gameData.diceRollIntervalLimit: " + gameData.diceRollIntervalLimit + "\n" +
    "gameData.allRatiosLimit: " + gameData.allRatiosLimit + "\n" +
    "gameData.quantityBought: " + gameData.quantityBought + "\n" +
    "gameData.comboMessageLenghtLimit: " + gameData.comboMessageLenghtLimit + "\n";
    document.getElementById("variableChecker").style.display = "inline-block";
    update("variableChecker", variableMessage);
}
 

