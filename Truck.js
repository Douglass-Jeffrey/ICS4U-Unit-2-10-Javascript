/*
* This class creates a truck which is a type of vehicle.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-17
*/

// Importing the airplane class from another file
const Vehicle = require("./Vehicle.js");

class Truck extends Vehicle {
  /**
   * Setting field values with a constructor. Also assigns the trucks colour
   * to a constant in this subclass
   */
  constructor(truckColour) {
    super(truckColour);
    this.colour = truckColour;
    this.plateNum = "";
    this.tireNum = 4;
  }

  /**
   * This setter sets the plate number of the truck.
   */
  setPlates(userPlateNum) {
    this.plateNum = userPlateNum;
  }

  /**
   * This getter gets the plate number of the truck.
   */
  getPlates() {
    return this.plateNum;
  }
  
  /**
   * Method to tell the users how many tires a vehicle has
   */
  tireCall() {
    return this.tireNum;
  }
  
  /**
   * method to return the honking noise of the truck.
   */
  callHonk() {
    let honkNoise = ("HONK!");
    return honkNoise;
  }
}

// Exporting the subclass
module.exports = Truck;