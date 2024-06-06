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
document.getElementById("hideGraph").style.display = "none"; //TODO:Should this really be set to none?
document.getElementById("importData").style.display = "none";
document.getElementById("exportToClipboard").style.display = "none";
document.getElementById("diceThermometer").style.display = "none";
document.getElementById("linePointsUpgrades").style.display = "none";
document.getElementById("squarePointsUpgrades").style.display = "none";
document.getElementById("cubePointsUpgrades").style.display = "none";
document.getElementById("lineUpgrades").style.display = "none";
document.getElementById("squareUpgrades").style.display = "none";
document.getElementById("cubeUpgrades").style.display = "none";

const rollButton = document.getElementById('rollDice');
let holdTimer;
const X = 7; // Size of the board (X x X)
const pieces = [
    // Row 1
    { effect: 'Start', moves: ['right'] },
    { effect: 'Move 1', moves: ['right'] },
    { effect: 'Move 3', moves: ['right'] },
    { effect: 'Move 4', moves: ['right'] },
    { effect: 'Move 1', moves: ['right'] },
    { effect: 'Start', moves: ['right'] },
    { effect: 'Start', moves: ['down'] },
    //Row 2
    { effect: 'Move 1', moves: ['up'] },
    { effect: 'Move 2', moves: ['down'] },
    { effect: 'Move 3', moves: ['left'] },
    { effect: 'Move 4', moves: ['up', 'left', 'down'] },
    { effect: 'Move 1', moves: ['left'] },
    { effect: 'Start', moves: ['left'] },
    { effect: 'Move 1', moves: ['down'] },
    //Row 3
    { effect: 'Move 2', moves: ['up'] },
    { effect: 'Move 3', moves: ['down'] },
    { effect: 'Move 4', moves: ['right'] },
    { effect: 'Move 1', moves: ['right'] },
    { effect: 'Start', moves: ['down'] },
    { effect: 'Move 1', moves: ['up'] },
    { effect: 'Move 2', moves: ['down'] },
    //Row 4
    { effect: 'Move 3', moves: ['up', 'right'] },
    { effect: 'Move 4', moves: ['down',] },
    { effect: 'Move 1', moves: ['right', 'up', 'left'] },
    { effect: 'Start', moves: ['down', 'up'] },
    { effect: 'Move 1', moves: ['down', 'left', 'right'] },
    { effect: 'Move 2', moves: ['up'] },
    { effect: 'Move 3', moves: ['down', 'left'] },
    //Row 5
    { effect: 'Move 4', moves: ['up'] },
    { effect: 'Move 1', moves: ['down'] },
    { effect: 'Start', moves: ['up'] },
    { effect: 'Move 1', moves: ['left'] },
    { effect: 'Move 2', moves: ['left'] },
    { effect: 'Move 3', moves: ['up'] },
    { effect: 'Move 4', moves: ['down'] },
    //Row 6
    { effect: 'Move 1', moves: ['up'] },
    { effect: 'Start', moves: ['right'] },
    { effect: 'Move 1', moves: ['right'] },
    { effect: 'Move 2', moves: ['right', 'down', 'up'] },
    { effect: 'Move 3', moves: ['right'] },
    { effect: 'Move 4', moves: ['up'] },
    { effect: 'Move 1', moves: ['down'] },
    //Row 7
    { effect: '150% DP boost', moves: ['up'] },
    { effect: 'Increase luck temporarily', moves: ['left'] },
    { effect: 'Dice lottery', moves: ['left'] },
    { effect: 'Gain 1 random DP upgrade', moves: ['left'] },
    { effect: 'Gain random points', moves: ['left'] },
    { effect: '', moves: ['left'] },
    { effect: 'Finish', moves: ['left'] },
    // Add more rules for the remaining squares...
  ];
  const boardSize = X * X;
  const boardElement = document.getElementById('board');
  let currentPlayerPosition = 0; // Player starts at the first square

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
  biggerTimeSizeQuantity: 0,
  biggerTimeSizeCost: 5,
  biggerTimeSizeCostRatio: 1.25,
  blowOnDiceQuantity: 0,
  blowOnDiceCost: 7,
  blowOnDiceCostRatio: 1.25,
  blowOnDiceTriggerChance: 0, // Ranges From 0-1 (Percentage for lucky dice.)
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
  betterComboScoreQuantity: 0,
  diceRollIntervalOverloadDiminished: 1.11,
  diceRollIntervalOverload: 0,
  diceRollIntervalOverloadRequirement: 0,
  diceRollIntervalOverloadHeatPerLoop: 0,
  diceRollIntervalOverloadHeat: 0,
  diceThermometer: 0,
  iceCubeDimension: 5, //This size is in cm, it's the length of an icecube.
  totalIceCubeDimension: 1,
  iceCubeNextUpgrade: 1,
  iceCubePointsNeeded:10, //This is how many points you need to achieve with the heat to melt the ice.
  

  // Also add this for the other line and square upgrades, check code if you have to for example.
};
var originalGameData = Object.assign({}, gameData);
var saveGame = localStorage.getItem('diceCubeSave');
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

  if (gameData.diceRollIntervalOverloadHeat > 0) {
    document.getElementById("diceThermometer").style.display = "";
    update("diceThermometer", "Dice thermometer: Dice " + gameData.diceThermometer + " currently placed on " + Math.floor(gameData.diceRollIntervalOverloadHeat/(Math.pow(5, (gameData.diceThermometer - 1)))))
  }
  
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
    document.getElementById("linePrestige").classList.add('prestige-button');
    
  } else {
    document.getElementById("linePrestige").style.backgroundColor = "#808080"; // Dark grey background color for the button
    document.getElementById("linePrestige").style.color = "#FFFFFF"; // White text color
    document.getElementById("linePrestige").innerHTML = "You need to atleast reach dice " + gameData.diceDimension + " of " + Math.pow(gameData.diceDimension, 3) + " to Line Prestige.";
    document.getElementById("linePrestige").style.textDecoration = "";
    document.getElementById("linePrestige").classList.remove('prestige-button');
  }
  if (gameData.furthestDiceReached >= Math.pow(gameData.diceDimension,2)) {
    update ("squarePrestige", "Square prestige (for " + round10((gameData.furthestDiceReached/Math.pow(gameData.diceDimension,2)), -2) + "SP)");
    document.getElementById("squarePrestige").style.backgroundColor = "";
    document.getElementById("squarePrestige").style.color = "";
    document.getElementById("squarePrestige").classList.add('prestige-button');
  } else {
    document.getElementById("squarePrestige").style.backgroundColor = "#808080"; // Dark grey background color for the button
    document.getElementById("squarePrestige").style.color = "#FFFFFF"; // White text color
    document.getElementById("squarePrestige").innerHTML = "You need to atleast reach dice " + Math.pow(gameData.diceDimension,2) + " of " + Math.pow(gameData.diceDimension, 3) + " to Line Prestige.";
    document.getElementById("squarePrestige").style.textDecoration = "";
    document.getElementById("squarePrestige").classList.remove('prestige-button');
  }

  if (gameData.furthestDiceReached >= Math.pow(gameData.diceDimension,3)) {
    update ("cubePrestige", "Cube prestige (for " + round10((gameData.furthestDiceReached/Math.pow(gameData.diceDimension,3)), -2) + "CP)");
    document.getElementById("cubePrestige").style.backgroundColor = "";
    document.getElementById("cubePrestige").style.color = "";
    document.getElementById("cubePrestige").classList.remove('prestige-button');
  } else {
    document.getElementById("cubePrestige").style.backgroundColor = "#808080"; // Dark grey background color for the button
    document.getElementById("cubePrestige").style.color = "#FFFFFF"; // White text color
    document.getElementById("cubePrestige").innerHTML = "You need to atleast reach dice " + Math.pow(gameData.diceDimension,3) + " of " + Math.pow(gameData.diceDimension, 3) + " to Line Prestige."
    document.getElementById("cubePrestige").style.textDecoration = ""
    document.getElementById("cubePrestige").classList.remove('prestige-button');
  }
  if (!gameData.stopCheckCostLineUpgrades ) {
    update("decreaseUpgradeCostRatios", "Decrease the speed at which regular upgrades' cost grows Cost: " + format(checkCost("decreaseUpgradeCostRatios", "linePoints"), "scientific") + "LP");
    update("decreasedWaitingLine", "Decreased waiting line Cost: " + format(checkCost("decreasedWaitingLine", "linePoints"), "scientific") + "LP");
    update("onlineDiceRoller", "On-line dice roller (Currently " + (gameData.onlineDiceRollerCount * 2) + "x dice) Cost: " + format(checkCost("onlineDiceRoller", "linePoints"), "scientific") + "LP");
    update("biggerTimeSize", "Increase interval | Cost: " + format(checkCost("biggerTimeSize", "linePoints"), "scientific") + "LP");
    update("blowOnDice", "Blow on dice | Cost: " + format(checkCost("blowOnDice", "linePoints"), "scientific") + "LP");
    
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

function startRolling() {
  rollDice('manual');
  holdTimer = setInterval(() => rollDice('manual'), 333);
}

function stopRolling() {
  clearInterval(holdTimer);
}

rollButton.addEventListener('mousedown', startRolling);
rollButton.addEventListener('mouseup', stopRolling);
rollButton.addEventListener('mouseleave', stopRolling);
rollButton.addEventListener('touchstart', startRolling);
rollButton.addEventListener('touchend', stopRolling);
rollButton.addEventListener('touchcancel', stopRolling);

rollButton.addEventListener('click', () => {
  if (!holdTimer) {
      rollDice('manual');
  }
});

function rollDice(rollStyle) {
  var totalPoints = 0;
  var diceValues = [];
  var comboDice = []; // Initialize comboDice array here
  var loopCount = gameData.diceAmount; //This checks if you bought the online dice roller upgrade to double the dice it can roll.
  if (rollStyle === 'automatic') {
    console.log("Automatic roll detected")
    if (gameData.diceRollIntervalOverloadActivated === true) {
      if (gameData.diceRollIntervalOverloadAmount > 1) {
        loopCount *= (gameData.diceRollIntervalOverloadAmount + 1) 
        console.log("Overload boost aplied, boosted by" + (gameData.diceRollIntervalOverloadAmount + 1) + "times.")
      //TODO: Still add the balacing act where each overload starts to multiply the loopcount less and less, I should probably make the efficiency be an exponent or something? 2: Probably not a good idea, just make it harder and harder to reach the next level of overload. It's way more intuitive to have diceoverload X boost the production X times.
      //Maybe set each loopCount to be multiplied by a different value that's based on the diceRollIntervalOverloadAmount, it should be multiplied by efficiency based on how many varibales you have.
      //Multiply the version by the diminsihed value, add on this when you used each diceRollIntervalOverloadAmount. this should not happen hereit should be happening when diceRollIntervalOverloadAmount increases based on the normal function.
      }
    }
  } else {
    console.log("Manual roll detected")
    if (gameData.onlineDiceRollerActivated === true) {
      loopCount *= (gameData.onlineDiceRollerCount * 2); //Recently added, check if onlinediceroller only doubles the manual rollstyle
      console.log("Online diceroller boost aplied, boosted by" + (gameData.onlineDiceRollerCount * 2) + "times.")
      
    }
  }
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
          //TODO: Make sure that the function gives an extra benefit to having the highest and most common combo be the same. A better formula to calculate the effect.
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
  let rollResult = Math.floor(Math.random() * sides) + 1;
  if (gameData.blowOnDiceTriggerChance > 0) {
    console.log ("Luck check works" + gameData.blowOnDiceTriggerChance)
    while (Math.random() <= gameData.blowOnDiceTriggerChance && rollResult < gameData.diceSides) {
      rollResult += 1;
      console.log ("Lucky you! Your dice was boosted.")
    }
  }
    return rollResult
}

function increaseUnlockedComboUpgrade() {
  //TODO:  Implement a potential upgrade to the combo system here, maybe having two kinds of upgrades would be good, one for enabling duo, triple, quadruple etc combo's and one for increasing the combosystem math.
  if (gameData.quantity > 1 ) {
    // Loop through quantity times
    for (var i = 0; i < gameData.quantity; i++) {
        // Calculate cost with current ratio and add to totalCost
        totalCost += gameData.unlockedComboUpgradeCost * gameData.unlockedComboUpgradeCostRatio;
    }
  } else {
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
        limitOverloadFix()
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
            //TODO: Use the diceRollIntervalOverloadDiminished code a bit below the for loop
            for (let i = 0; i < gameData.quantityBought; i++) { //TODO, the math here is not yet fully perfect, check it out once again. TRY THIS, HOPEFULLY IT WORKS
              //gameData.diceRollIntervalOverload += (gameData.diceRollIntervalUpgradeTimeSize **= (gameData.diceRollIntervalOverloadDiminished *= gameData.diceRollIntervalDecrease));
              
             
              //TODO: Instead of the above code use something like this adapted to your needs:
              gameData.diceRollIntervalOverload -= gameData.diceRollIntervalUpgradeTimeSize;
              gameData.diceRollIntervalUpgradeTimeSize *= gameData.diceRollIntervalDecrease
              if (gameData.diceRollIntervalOverload <= 0) {
                gameData.diceRollIntervalOverloadAmount += 1
                gameData.diceRollIntervalDecrease **= gameData.diceRollIntervalOverloadDiminished
                gameData.diceRollIntervalOverloadRequirement **= 1.1
                gameData.diceRollIntervalOverload = gameData.diceRollIntervalOverloadRequirement
                console.log("New overload")
              }
            }
            gameData.diceRollIntervalOverloadHeatPerLoop = (Math.log(gameData.diceRollIntervalOverload * 2));
            console.log(gameData.diceRollIntervalOverloadHeatPerLoop + " Heatloop");
            //TODO: Check this math to make sure the cost keeps growing more and more demanding. The requirements for the next overloadamount should probably grow more and more exponentially.
            console.log ("Requirement " + gameData.diceRollIntervalOverloadRequirement)
            console.log ("intervalOverload " + gameData.diceRollIntervalOverload)
            console.log ("Next full overload reached in: " + (gameData.diceRollIntervalOverloadRequirement - gameData.diceRollIntervalOverload))
          }
       }
}


var mainGameLoop = window.setInterval(mainGameLoopFunction, gameData.diceRollInterval);
function mainGameLoopFunction() {
  diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now();
  gameData.dicePoints += gameData.dicePointsPerClick * (diff / gameData.diceRollInterval) // divide diff by how often (ms) mainGameLoop is ran
  gameData.dicePointsTotal += gameData.dicePointsPerClick * (diff / gameData.diceRollInterval) // divide diff by how often (ms) mainGameLoop is ran
  if (gameData.diceRollIntervalOverloadHeatPerLoop > 0) {
    gameData.diceRollIntervalOverloadHeat += gameData.diceRollIntervalOverloadHeatPerLoop;
    console.log("Helloheat" + gameData.diceRollIntervalOverloadHeat)
    gameData.diceThermometer = (Math.floor(getBaseLog(5, gameData.diceRollIntervalOverloadHeat)) + 1)
    console.log ("Dice thermometer: dice " + gameData.diceThermometer + " on " + Math.floor(gameData.diceRollIntervalOverloadHeat/(Math.pow(5, (gameData.diceThermometer - 1)))))
    dIceCubeCode()
  }
  rollDice('automatic');
  updateAll();

}


var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('diceCubeSave', JSON.stringify(gameData));
}, 15000)

var savegame = JSON.parse(localStorage.getItem("diceCubeSave"))
//TODO: A few of these are duplicates, fix that.
if (savegame !== null) {
  gameData = savegame
  for (var key in originalGameData) {
      //if (originalGameData.hasOwnProperty(key)) {
      //gameData[key] = originalGameData[key];
      if (typeof savegame[key] === 'undefined') gameData[key] = originalGameData[key];
      //}
  }
  
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
  document.getElementById("helpMenu").style.display = "none"
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
    gameData.diceSideUpgradeQuantity = 0; //Quantity shows you how many upgrades you have purchased.
    gameData.diceAmountUpgradeQuantity = 0;
    gameData.diceRollIntervalUpgradeQuantity = 0;
    gameData.unlockedComboUpgradeQuantity = 0;
    gameData.diceRollIntervalOverloadDiminished = 1;
    gameData.diceRollIntervalOverload = 0;
    gameData.diceRollIntervalOverloadHeatPerLoop = 0;
    gameData.diceRollIntervalOverloadHeat = 0;
    gameData.diceThermometer = 0;
    gameData.iceCubeDimension = 5;
    gameData.totalIceCubeDimension = 1;
    gameData.iceCubeNextUpgrade = 1;
    gameData.iceCubePointsNeeded = 10
    
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
    gameData.betterComboScoreQuantity = 0,
    gameData.biggerTimeSizeQuantity = 0,
    gameData.biggerTimeSizeCost = 5,
    gameData.biggerTimeSizeCostRatio = 1.25,
    gameData.blowOnDiceQuantity = 0,
    gameData.blowOnDiceCost = 7,
    gameData.blowOnDiceCostRatio = 1.25,
    gameData.blowOnDiceTriggerChance = 0,
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
      limitOverloadFix();
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
          //TODO: Put this logic in the limitfix function.
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
      
      document.getElementById("lineUpgrades").style.display = "inline-block";
      document.getElementById("linePoints").style.display = "inline-block";
      document.getElementById("onlineDiceRoller").style.display = "inline-block";
      document.getElementById("decreasedWaitingLine").style.display = "inline-block";
      document.getElementById("decreaseUpgradeCostRatios").style.display = "inline-block";
      document.getElementById("linePointsUpgrades").style.display = "inline-block";
      
      

      //TODO: Maybe instead of making the line upgrades visible I should make the div that contains them visible to make all of them visible in one go, do the same thing for square and cube
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
      document.getElementById("squarePointsUpgrades").style.display = "inline-block";
      document.getElementById("squareUpgrades").style.display = "inline-block";
      
      
      gameData.stopCheckCostSquareUpgrades = false
      document.getElementById("squarePoints").style.display = "inline-block";
      if (gameData.squaredRootSalesActivated === false) {
        document.getElementById("squaredRootSales").style.display = "inline-block"
      }
    }

    if (gameData.cubePoints >= 1) {
      document.getElementById("cubePointsUpgrades").style.display = "inline-block";
      document.getElementById("cubePoints").style.display = "inline-block";
      document.getElementById("cubeUpgrades").style.display = "inline_block";
      
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
  for (var key in originalGameData) {
    if (originalGameData.hasOwnProperty(key)) {
      gameData[key] = originalGameData[key];
    }
  }


  
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
      diceRollIntervalUpgradeButton.innerHTML = "PROTOTYPE: This will display the current overclocking of the dice roll interval. Overclocked " + gameData.diceRollIntervalOverloadAmount + " times." + (gameData.diceRollIntervalOverloadRequirement - gameData.diceRollIntervalOverload) + " of " + gameData.diceRollIntervalOverloadRequirement + " for next full overload." //TODO: Implement this
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
    checkCost("biggerTimeSize", "linePoints", "unlimited");
    checkCost("blowOnDice", "linePoints", "unlimited"); //TODO: Set this to limited
    
    
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
    document.getElementById("importData").style.display = "none";
    document.getElementById("exportToClipboard").style.display = "";
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
    gameData.diceRollIntervalOverloadRequirement = (1000 ** 1.1);
    gameData.diceRollIntervalOverload = gameData.diceRollIntervalOverloadRequirement
    document.getElementById("diceRollIntervalOverload").style.display = "none"
    updateAll();

  }
}

  function importGameDataPrompt() {
    var textarea = document.getElementById("variableChecker");
    textarea.style.display = "inline-block";
    document.getElementById("importData").style.display = "";
    document.getElementById("exportToClipboard").style.display = "none";

  }
  function importGameData() {
    var importData = document.getElementById("variableChecker").value;
    var original_json = LZString.decompressFromEncodedURIComponent(importData)
    console.log(importData)
    console.log(LZString.decompressFromBase64(importData))
    var loaded_game_data = JSON.parse(original_json)
    console.log(loaded_game_data)
    gameData = loaded_game_data
    document.getElementById("importData").style.display = "none";
    document.getElementById("variableChecker").style.display = "none";


    
    
  }

  function exportGameDataClipboard() {
    var importData = document.getElementById("variableChecker").value;
    navigator.clipboard.writeText(importData);
    
    }




const upgrades = {
  unlimited: {
    dicePoints: ["diceAmountUpgrade", "diceRollIntervalUpgrade", "diceSideUpgrade", "unlockedComboUpgrade"],
    linePoints: ["onlineDiceRoller", "biggerTimeSize"], 
    squarePoints: [],
    cubePoints: []
  },
  limited: {
    dicePoints: [],
    linePoints: ["decreaseUpgradeCostRatios", "decreasedWaitingLine", "blowOnDice"],
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
  // Clear all cloned elements
  const clonedButtons = document.querySelectorAll('.cloned-button');
  clonedButtons.forEach(button => button.remove());//clonedButtons.forEach(button => button.parentNode.removeChild(button));

  // Iterate over upgrades
  clonedIds.clear();
  for (const type in upgrades) { //TODO: I think the problem here is that it loops over the upgrde constant three times if it isn't set to All since there ae three types? I might want to fix that.
    console.log(`Upgrades for ${type}:`);
    
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
  const clonedBoughtButtons = document.getElementById("clonedBoughtButtons"); // Get the container for cloned buttons
  //clonedBoughtButtons.innerHTML = ''
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
      
        clonedElement.style.fontSize = "larger"; //This isn't the problem that makes the chart bigger
        clonedElement.removeAttribute("onclick");
        clonedElement.removeAttribute("href");
        clonedElement.style.backgroundColor = "";
        clonedElement.style.color = "";
        clonedBoughtButtons.appendChild(clonedElement); // Append cloned button to the container
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
  myChart.update();
}

function addData(label, data, color) {
  // Add label to the labels array
  myChart.data.labels.push(label);
  // Add data to the data array
  myChart.data.datasets[0].data.push(data);
  // Add color to the backgroundColor array
  myChart.data.datasets[0].backgroundColor.push(color);
  // Update the chart
  
}

let colorIndex = 0; // Initialize color index to start from 0

function getNextColor() {
  const color = colors[colorIndex]; // Get the color at the current index
  colorIndex = (colorIndex + 1) % colors.length; // Increment index and reset if it exceeds the length of the colors array
  return color;
}

function showboughtUpgradesButton() {
  document.getElementById("myChart").style.display = "";
  document.getElementById("showGraph").style.display = "none";
  document.getElementById("hideGraph").style.display = "";
  myChart.update();
}

function hideboughtUpgradesButton() {
  document.getElementById("showGraph").style.display = "";
  document.getElementById("hideGraph").style.display = "none";
  document.getElementById("myChart").style.display = "none";
}

function limitOverloadFix() {
  //TODO: Place all the limits here that shouldn't go above a certain number so I can more easily fix them.
  if (gameData.diceRollIntervalDecrease >= 1) {
    gameData.diceRollIntervalDecrease = 0.95
  }
}
//TODO: Inspect the function below to see flaws.
function dIceCubeCode() {
  
  
  
  if (gameData.diceRollIntervalOverloadHeat >= gameData.iceCubePointsNeeded) {
    gameData.iceCubePointsNeeded *= 8
    gameData.iceCubePointsNeeded **= 1.11
    gameData.iceCubeNextUpgrade += 1
    console.log("The next icecube should be melted.")
    console.log("For the next one you'll need " + gameData.iceCubePointsNeeded + " points.")
    
    
    applyUpgradeEffect(gameData.iceCubeNextUpgrade);
  }

}



function applyUpgradeEffect(upgrade) {
  // Determine current and next upgrade numbers
  let currentUpgrade = parseInt(upgrade.number);
  let nextUpgrade = currentUpgrade + 1;

  // Display current and next upgrade
  console.log(`You are applying Upgrade ${currentUpgrade}. The next upgrade will be Upgrade ${nextUpgrade}.`);

  // Apply the effect of the upgrade
  switch (upgrade.number) {
    case "1":
      // Implement effect for Upgrade 1
      gameData.diceAmount += 5;
      console.log("You have been given 5 additional dice!");
      break;
    case "2":
      // Implement effect for Upgrade 2
      gameData.diceSides += 10; // Example effect: Increase player's damage
      console.log("Your dice now all have 10 extra sides!");
      break;
    // Add cases for more upgrades as needed
    default:
      if (upgrade.number % 10 === 0) {
        console.log(`Upgrade ${upgrade.number} is divisible by 10.`);
        gameData.diceAmount += 10
        console.log("You have been given 10 additional dice! (The end point for each row of 10 upgrades.")
      } else if (upgrade.number % 5 === 0) {
        console.log('Upgrade is divisible by 5 (The halfway point for each "special" upgrade')
        gameData.diceAmount += 5
      } else {
        gameData.diceSides += 4
        console.log("Your dice now all have 4 extra sides! (This is the current failback for if no upgrades are set and you don't get any special upgrades.")
      }
      //Here you should code it so that this basically gives set upgrades based on a number, for example, every tenth upgrade should be something specific etc. That way I can add repeating upgrades instead of having to make thousands of upgrades.
  }
}
 

function lineUpgradeBiggerTimeSize() {
  bulkBuy("biggerTimeSize", "linePoints");
    if (gameData.quantityBought > 0) {
      gameData.diceRollIntervalUpgradeTimeSize *= (gameData.quantityBought * 2) //TODO: Probably change the 2 to a variable that is changeable.
      gameData.quantityBought = 0
      updateAll();
    }
}

function lineUpgradeBlowOnDice() {
  bulkBuy("blowOnDice", "linePoints");
  if (gameData.quantityBought > 0) {
    gameData.blowOnDiceTriggerChance += (0.01 * gameData.quantityBought) //Check to see if this is too powerful or not, might need more balancing.
    gameData.quantityBought = 0
    updateAll();
  }
}

function passivePath() {
  gameData.chosenPath = "passive"
  clearPathsAfterChoice()
}

function activePath() {
  gameData.chosenPath = "active"
  clearPathsAfterChoice()
  boardGameTurn() //TODO: This shouldn't be here but for now (testing) it is
}

function idlePath() {
  gameData.chosenPath = "idle"
  clearPathsAfterChoice()
}

function clearPathsAfterChoice() {
  document.getElementById("passivePath").style.display = "none";
  document.getElementById("idlePath").style.display = "none";
  document.getElementById("activePath").style.display = "none";
}

function boardGameTurn() {
  createBoard(X, pieces);     
} 

function createBoard(size, pieces) {
  //TODO: The highlight function seems to not highlight anymore, fix this.
  boardElement.style.gridTemplateColumns = `repeat(${size}, 50px)`;
  boardElement.style.gridTemplateRows = `repeat(${size}, 50px)`;
  console.log ("Board" + boardElement)

  for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.dataset.index = i;
      if (pieces[i]) {
          const { effect, moves } = pieces[i];
          square.innerText = effect;
          switch(effect) {
            case 'Start':
                square.style.backgroundColor = 'green';
                break;
            case 'Move 1':
                square.style.backgroundColor = 'blue';
                break;
            case 'Move 2':
                square.style.backgroundColor = 'orange';
                break;
            case 'Move 3':
                square.style.backgroundColor = 'purple';
                break;
            case 'Finish':
                square.style.backgroundColor = 'red';
                break;
            default:
                square.style.backgroundColor = 'lightgrey';
        }
          moves.forEach(move => {
              const arrow = document.createElement('div');
              arrow.classList.add('arrow', move);
              square.appendChild(arrow);
          });
      }
      boardElement.appendChild(square);
  }

  const playerPiece = document.createElement('div');
  playerPiece.classList.add('player');
  boardElement.children[currentPlayerPosition].appendChild(playerPiece);
}

function rollBoardGameDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getPossibleMoves(currentPosition, roll) {
  const possibleMoves = [];
  const directions = {
      'up': -X,
      'down': X,
      'left': -1,
      'right': 1
  };

  function traverse(position, remainingSteps, path) {
      if (remainingSteps === 0) {
          possibleMoves.push(position);
          return;
      }
      const { moves } = pieces[position] || {};
      if (!moves) return;

      moves.forEach(move => {
          const newPosition = position + directions[move];
          if (newPosition >= 0 && newPosition < boardSize && !path.includes(newPosition)) {
              traverse(newPosition, remainingSteps - 1, [...path, newPosition]);
          }
      });
  }

  traverse(currentPosition, roll, [currentPosition]);
  return possibleMoves;
}

function highlightPossibleMoves(moves) {
  moves.forEach(index => {
      document.querySelector(`.square[data-index='${index}']`).classList.add('highlight');
  });
}

function clearHighlights() {
  document.querySelectorAll('.square.highlight').forEach(square => {
      square.classList.remove('highlight');
  });
}

function movePlayer(targetIndex) {
  clearHighlights();
  const boardElement = document.getElementById('board');
  const playerPiece = document.querySelector('.player');
  boardElement.children[targetIndex].appendChild(playerPiece);
  currentPlayerPosition = targetIndex;
  handleEffect(pieces[targetIndex]?.effect);
}

function handleEffect(effect) {
  switch(effect) {
      case 'Start':
          alert('You are at the start.');
          break;
      case 'Move 1':
          alert('You landed on Move 1!');
          break;
      case 'Move 2':
          alert('You landed on Move 2!');
          break;
      case 'Move 3':
          alert('You landed on Move 3!');
          break;
      case 'Finish':
          alert('You reached the finish!');
          break;
      default:
          alert('Nothing happens.');
  }
}

document.getElementById('rollButton').addEventListener('click', () => {
  const roll = rollBoardGameDice();
  console.log(`Rolled: ${roll}`);
  const possibleMoves = getPossibleMoves(currentPlayerPosition, roll);
  highlightPossibleMoves(possibleMoves);

  document.querySelectorAll('.square').forEach(square => {
      square.addEventListener('click', function handleMove() {
          const targetIndex = parseInt(this.dataset.index);
          if (possibleMoves.includes(targetIndex)) {
              movePlayer(targetIndex);
          }
          square.removeEventListener('click', handleMove);
      });
  });
});

function helpSystem(neededHelp) {
  var systemTips = "";
  switch (neededHelp) {
    case "points":
      systemTips = "You have four kinds of points: basic dice-points (DP), which are unlocked by rolling normal dice either manually or automatically. " +
                   "Then you have the prestige-based points: line-points (LP), square-points (SP), and cube-points (CP). " +
                   "All three of these get unlocked by reaching at least a certain number of dice in your dice-cube, which happens by gaining more DP. " +
                   "Line-points unlock after you reach one full line in the cube, square points unlock after a full square, and you'll never guess when cube points unlock.";
      break;
    default:
      systemTips = "If you are reading this, chances are I named a variable or two wrong."
  }
  console.log(systemTips); // TODO: Later make this append in the game.
  update("helpMenuSystem", systemTips);
}