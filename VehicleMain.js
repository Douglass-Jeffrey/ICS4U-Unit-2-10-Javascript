/*
* This program receives and outputs information about a car when prompted
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-17
*/

// Imports airplane class and jet subclass from their respective files
const Bike = require("./Bike.js");
const Truck = require("./Truck.js");

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

/**
* This program receives and outputs information about a car when prompted.
*/
    
try {
  // accepts input on bike colour
  const bcolourChoice = prompt("Enter the colour you wish your bike to be: ");

  
  // initializing bike with colour choice
  let userBike = new Bike(bcolourChoice);
  
  // accepts input on truck colour
  const tcolourChoice = prompt("Enter the colour you wish your truck to be: ");

  
  //initializing truck with colour choice
  let userTruck = new Truck(tcolourChoice);
  
  //printing bike and truck colours also says tire amount
  console.log();
  console.log("Your bikes colour is: " + userBike.getColour());
  console.log("Your trucks colour is: " + userTruck.getColour());
  console.log();
  console.log("Your bikes amount of tires is: " + userBike.tireCall());
  console.log("Your trucks amount of tires is: " + userTruck.tireCall());
  console.log();
  
  //honking horns
  console.log("Honking the horns of the bike and the truck...");
  console.log();
  console.log("Truck: " + userTruck.callHonk());
  console.log("Bike: " + userBike.callBell());
  console.log();
  
  //riding the bike
  const bikeSpeed = prompt("You go for a bike ride. How fast would you like"
                           + " to bike (km/h): ");
  userBike.accelerate(bikeSpeed);
  
  // printing speed (parsefloat prevents addition of 0 before 2 digit numbers)
  console.log("You accelerate to " +  parseFloat(userBike.currentSpeed()) 
                     + " km/h");
  
  // printing speed
  console.log("Current cadence: " +  parseFloat(userBike.getCadence()) 
                     + " RPM");
  
  // slow down
  console.log();
  const bikeSlow = prompt("You begin to decelerate. How many km/h's do you "
                          + "slow down by?: ");
  userBike.decelerate(bikeSlow);
  
  // printing speed
  console.log("Your current speed: " +  userBike.currentSpeed() 
              + " km/h");
  // printing cadence
  console.log("Current cadence: " +  userBike.getCadence() 
                     + " RPM");
  // begin truck sequence
  console.log();
  const truckSpeed = prompt("You reach your home and begin to drive your truck."
                     + " How much do you accelerate by? ");
  userTruck.accelerate(truckSpeed);
  
  // printing speed
  console.log("You accelerate to " +  parseFloat(userTruck.currentSpeed())
                     + " km/h");
  // slow down
  console.log();
  const truckSlow = prompt("You begin to decelerate. How many km/h's do you "
                     + "slow down by?: ");
  userTruck.decelerate(truckSlow);
  
  // printing speed
  console.log("Your current speed: " +  parseFloat(userTruck.currentSpeed())
                     + " km/h");
  
  // sequence end
  console.log();
  console.log("You arrive back home and stop the truck.");

// catch for general problems like bad user inputs
} catch (err) {
  console.log("Invalid Input");
}
  

