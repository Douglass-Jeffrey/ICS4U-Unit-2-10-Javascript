/*
* This class creates a bicycle which is a type of vehicle.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-17
*/

// Importing the airplane class from another file
const Vehicle = require("./Vehicle.js");

class Bike extends Vehicle {
  /**
   * Setting field values with a constructor. Also assigns the pikes colour to
   * a constant in this file
   */
  constructor(bikeColour) {
    super(bikeColour);
    this.colour = bikeColour;
    this.cadence = 0;
    this.tireNum = 2;
  }

  /**
   * Method for finding cadence.
   * Using the number 8 as the modifier for cadence as theres no way to be 
   * accurate because we arent given tire pressure, which gear the bike is in
   * tire size, or tire type to accurately describe how many rotations per 
   * minute a bike rider would have at X speed.
   */
  getCadence() {
    this.cadence = (this.currentSpeed() * 8);
    return this.cadence;
  }
  
  /**
   * Method to tell the users how many tires a vehicle has
   */
  tireCall() {
    return this.tireNum;
  }
  
  callBell() {
    this.bell = ("Ring!");
    return this.bell;
  }
}

// Exporting the subclass
module.exports = Bike;