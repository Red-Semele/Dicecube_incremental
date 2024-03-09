document.getElementById("linePrestige").style.display = "none"
document.getElementById("squarePrestige").style.display = "none"
document.getElementById("cubePrestige").style.display = "none"
document.getElementById("prestigeDiceMenu").style.display = "none"
document.getElementById("onlineDiceRoller").style.display = "none"
document.getElementById("decreasedWaitingLine").style.display = "none"
document.getElementById("squaredRootSales").style.display = "none"
document.getElementById("decreaseUpgradeCostRatios").style.display = "none"




var saveGame = localStorage.getItem('diceCubeSave')
var gameData = {
  dicePoints: 0,
  dicePointsTotal: 0,
  dicePointsPerClick:1,
  diceCount: 1,
  diceSides: 6,
  dicePointsPerClickCost: 10,
  diceSideUpgradeCost: 50,
  diceAmountUpgradeCost: 100, //Rename this and all the other instances of it to diceCountUpgradeCost
  diceRollIntervalUpgradeCost: 200,
  dicePointsPerClickCostRatio: 1.25,
  diceSideUpgradeCostRatio: 1.25,
  diceAmountUpgradeCostRatio: 1.25,
  diceRollIntervalUpgradeCostRatio: 1.25,
  //Add a way to better formulate the costratio thingies in the upgrades
  lastTick: Date.now(),
  diceRollInterval: 1000,
  diceRollIntervalUpgradeRatio: 100,
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
  decreasedWaitingLineCostRatio: 1.15

  // Also add this for the other line and square upgrades, check code if you have to for example.
}


function update(id, content) {
  document.getElementById(id).innerHTML = content;
  
}

function updateAll() {
  if (gameData.squaredRootSalesActivated === true) {
    update("diceSideUpgrade", "Upgrade Dice (Currently " + "d" + gameData.diceSides + ") Cost: " + format(Math.sqrt(gameData.diceSideUpgradeCost), "scientific") + " dicePoints"); //Check this list to see by how much the sides need to be incremented to be a real dice: https://commons.wikimedia.org/wiki/Dice_by_number_of_sides#D9
    if (gameData.onlineDiceRollerActivated === true) { 
      update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceCount + " dice" + " x" + (gameData.onlineDiceRollerCount * 2) + " by online dice roller upgrade) Cost: " + format(Math.sqrt(gameData.diceAmountUpgradeCost), "scientific") + " dicePoints");
    } else {
      update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceCount + " dice" + ") Cost: " + format(Math.sqrt(gameData.diceAmountUpgradeCost), "scientific") + " dicePoints");
    }

    update("diceRollInterval", "Increase automatic dice-roll speed by " + Math.floor(gameData.diceRollIntervalUpgradeRatio) + "ms (Currently " + Math.floor (gameData.diceRollInterval) + "ms ) Cost: " + format(Math.sqrt(gameData.diceRollIntervalUpgradeCost), "scientific") + " dicePoints");
    
    
    
  
  } else {
    //update("perClickUpgrade", "Upgrade Pickaxe (Currently Level " + format(gameData.dicePointsPerClick, "scientific") + ") Cost: " + format(gameData.dicePointsPerClickCost, "scientific") + " dicePoints");
    update("diceSideUpgrade", "Upgrade Dice (Currently " + "d" + gameData.diceSides + ") Cost: " + format(gameData.diceSideUpgradeCost, "scientific") + " dicePoints"); //Check this list to see by how much the sides need to be incremented to be a real dice: https://commons.wikimedia.org/wiki/Dice_by_number_of_sides#D9
   
    if (gameData.onlineDiceRollerActivated === true) { 
      update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceCount + " dice" + " x" + (gameData.onlineDiceRollerCount * 2) + " by online dice roller upgrade) Cost: " + format(gameData.diceAmountUpgradeCost, "scientific") + " dicePoints");
    } else {
      update("diceAmountUpgrade", "Buy extra dice (Currently " + gameData.diceCount + " dice" + ") Cost: " + format(gameData.diceAmountUpgradeCost, "scientific") + " dicePoints");
    }
    update("diceRollInterval", "Increase automatic dice-roll speed by " + Math.floor(gameData.diceRollIntervalUpgradeRatio) + "ms (Currently " + Math.floor (gameData.diceRollInterval) + "ms ) Cost: " + format(gameData.diceRollIntervalUpgradeCost, "scientific") + " dicePoints");
    
  }
  update("dicePoints", format(Math.floor(gameData.dicePoints), "scientific") + " Dice points");
  update("linePoints", "Line Points: " + gameData.prestigeLinePoints);
  update("diceProgress", "Currently reached dice " + format(gameData.furthestDiceReached, "scientific") + " of " + (Math.pow(gameData.diceDimension, 3)) +  " in dicecube");
  update ("diceProgress2", "Dice " + format(gameData.furthestDiceReached, "scientific") + " currently placed on " + Math.floor(gameData.dicePointsTotal/(Math.pow(5, (gameData.furthestDiceReached - 1)))));
  update ("linePrestige", "Line prestige (for " + Math.floor (gameData.furthestDiceReached/gameData.diceDimension) + "LP)");
  update ("squarePrestige", "Square prestige (for " + Math.floor (gameData.furthestDiceReached/Math.pow(gameData.diceDimension, 2)) + "SP)");
  update ("cubePrestige", "Cube prestige (for " + Math.floor (gameData.furthestDiceReached/Math.pow(gameData.diceDimension, 3)) + "CP)")
  update ("decreaseUpgradeCostRatios", "Decrease the speed at which regular upgrades' cost grows Cost: " + Math.floor(gameData.decreaseUpgradeCostRatiosCost) + "LP")
  update ("decreasedWaitingLine", "Decreased waiting line: Improve the formula that calculates how close you can get to 0 with the automatic dice roll interval Cost: " + Math.floor(gameData.decreasedWaitingLineCost) + "LP")
  update ("onlineDiceRoller", "On-line dice roller: Roll twice as many dice with the power of technology (Currently " + (gameData.onlineDiceRollerCount * 2) + "x dice) Cost:" + Math.floor(gameData.onlineDiceRollerCost) + "LP")
  prestigeVisibility ();
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}


function rollDice() {
  var totalPoints = 0;
  var diceValues = [];
  var comboDice = []; // Initialize comboDice array here
  var loopCount = gameData.onlineDiceRollerActivated ? gameData.diceCount * gameData.onlineDiceRollerCount * 2 : gameData.diceCount; //This checks if you bought the online dice roller upgrade to double the dice it can roll.
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

  // Apply score multiplier for duplicates
  var hasCombo = false;
  for (var value in duplicates) {
    if (duplicates[value] > 1) {
      update("diceComboSystem", "Currently there is a combo!");
      totalPoints += parseInt(value) * (duplicates[value] - 1);
      hasCombo = true;
      comboDice.push({ value: value, count: duplicates[value] });
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
    update("diceComboSystem", comboMessage.slice(0, -2)); // Remove trailing comma and space
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
  if (gameData.squaredRootSalesActivated === true) {
    if (gameData.dicePoints >= Math.sqrt(gameData.diceAmountUpgradeCost)) {
      gameData.dicePoints -= Math.sqrt(gameData.diceAmountUpgradeCost);
      gameData.diceCount += 1;
      gameData.diceAmountUpgradeCost *= gameData.diceAmountUpgradeCostRatio;
      updateAll();
    }
  } else { //TODO: For some reason all upgrades when they are not math.sqrt can't be bought, when the square root sales upgrade is bought this problem is fixed. is it because it's the first buyable upgrade of the three in here?
    if (gameData.dicePoints >= gameData.diceAmountUpgradeCost) {
      gameData.dicePoints -= gameData.diceAmountUpgradeCost;
      gameData.diceCount += 1;
      gameData.diceAmountUpgradeCost *= gameData.diceAmountUpgradeCostRatio;
      updateAll();
    }
  }
}

function upgradeDice() { //TODO: For some reason this upgrade is now the only one that is fully unaffected by whatever bug it is that stops me from buying regular upgrades
  if (gameData.squaredRootSalesActivated === true) {
    if (gameData.dicePoints >= Math.sqrt(gameData.diceSideUpgradeCost)) {
      gameData.dicePoints -= Math.sqrt(gameData.diceSideUpgradeCost);
      gameData.diceSides += 2; // Upgrade to d8
      gameData.diceSideUpgradeCost *= gameData.diceSideUpgradeCostRatio;
      updateAll();
    }
  } else {
    if (gameData.dicePoints >= gameData.diceSideUpgradeCost) {
      gameData.dicePoints -= gameData.diceSideUpgradeCost;
      gameData.diceSides += 2; // Upgrade to d8
      gameData.diceSideUpgradeCost *= gameData.diceSideUpgradeCostRatio;
      updateAll();
      }
    }
  }



function upgradeDiceRollInterval() {
  //When the interval gets reset everything freezes and the automatic rolls just stop. Find a way to fix that.
  if (gameData.squaredRootSalesActivated === true) {
    if (gameData.dicePoints >= Math.sqrt(gameData.diceRollIntervalUpgradeCost)) {
      gameData.dicePoints -= Math.sqrt(gameData.diceRollIntervalUpgradeCost);
      gameData.diceRollInterval -= gameData.diceRollIntervalUpgradeRatio;
      gameData.diceRollIntervalUpgradeRatio *= gameData.diceRollIntervalDecrease;
      clearInterval(mainGameLoop); //It's this piece that kind of blocks things.
      mainGameLoop = setInterval(mainGameLoopFunction, gameData.diceRollInterval); //The porblem here seems to be that "mainGameLoopfunction does not exist."
      gameData.diceRollIntervalUpgradeCost *= gameData.diceRollIntervalUpgradeCostRatio;
      updateAll();
    }
  } else {
    if (gameData.dicePoints >= gameData.diceRollIntervalUpgradeCost) {
      gameData.dicePoints -= gameData.diceRollIntervalUpgradeCost;
      gameData.diceRollInterval -= gameData.diceRollIntervalUpgradeRatio;
      gameData.diceRollIntervalUpgradeRatio *= gameData.diceRollIntervalDecrease;
      clearInterval(mainGameLoop); //It's this piece that kind of blocks things.
      mainGameLoop = setInterval(mainGameLoopFunction, gameData.diceRollInterval); //The porblem here seems to be that "mainGameLoopfunction does not exist."
      gameData.diceRollIntervalUpgradeCost *= gameData.diceRollIntervalUpgradeCostRatio;
      updateAll();
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

function format(number, type) {
	let exponent = Math.floor(Math.log10(number));
	let mantissa = number / Math.pow(10, exponent);
	if (exponent < 3) return Math.floor(number.toFixed(0));
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent;
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}


if (typeof saveGame.dicePoints !== "undefined") gameData.dicePoints = saveGame.dicePoints;
if (typeof saveGame.dicePointsPerClick !== "undefined") gameData.dicePointsPerClick = saveGame.dicePointsPerClick;
if (typeof saveGame.dicePointsPerClickCost !== "undefined") gameData.dicePointsPerClickCost = saveGame.dicePointsPerClickCost;
if (typeof saveGame.lastTick !== "undefined") gameData.lastTick = saveGame.lastTick;
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
    gameData.diceCount = 1;
    gameData.dicePointsPerClickCost = 10;
    gameData.diceSideUpgradeCost = 50;
    gameData.diceAmountUpgradeCost = 100;
    gameData.diceRollIntervalUpgradeCost = 200;
    gameData.diceRollInterval = 1000;
    gameData.diceRollIntervalUpgradeRatio = 100;
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
  if (gameData.prestigeLinePoints >= Math.floor(gameData.onlineDiceRollerCost)) {
    gameData.onlineDiceRollerActivated = true
    gameData.prestigeLinePoints -= Math.floor(gameData.onlineDiceRollerCost)
    gameData.onlineDiceRollerCost *= gameData.onlineDiceRollerCostRatio
    gameData.onlineDiceRollerCount += 1
    updateAll();
  }
}

function lineUpgradeDecreasedWaitingLine() {
  if (gameData.prestigeLinePoints >= Math.floor(gameData.decreasedWaitingLineCost)) {
    gameData.prestigeLinePoints -= Math.floor(gameData.decreasedWaitingLineCost)
    gameData.decreasedWaitingLineCost *= gameData.decreasedWaitingLineCostRatio
    gameData.diceRollIntervalDecrease *= 1.50
    updateAll();
  }
  
}

function lineUpgradeDecreaseUpgradeCostRatios() {
  if (gameData.prestigeLinePoints >= Math.floor(gameData.decreaseUpgradeCostRatiosCost)) {
    gameData.prestigeLinePoints -= Math.floor(gameData.decreaseUpgradeCostRatiosCost);
    
    gameData.decreaseUpgradeCostRatiosCost *= gameData.decreaseUpgradeCostRatiosCostRatio;
  
    //For now this will just set all the ratio's of the normal upgrades to a smaller number. I'd like to be able to pick specifically what ratio you want to decrease instead.
    gameData.dicePointsPerClickCostRatio *= 0.95;
    gameData.diceSideUpgradeCostRatio *= 0.95;
    gameData.diceAmountUpgradeCostRatio *= 0.95;
    gameData.diceRollIntervalUpgradeCostRatio *= 0.95;
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
      document.getElementById("onlineDiceRoller").style.display = "inline-block"
      document.getElementById("decreasedWaitingLine").style.display = "inline-block"
      document.getElementById("decreaseUpgradeCostRatios").style.display = "inline-block"
    }
    
    if (gameData.prestigeSquarePoints >= 1) {
      if (gameData.squaredRootSalesActivated === false) {
      document.getElementById("squaredRootSales").style.display = "inline-block"
      }
    }

    //Add one for Cubepointsupgrades aswell
  
}

// go to a tab for the first time, so not all show
tab("rollDiceMenu")
