/* 
* This class holds information about a vehicle.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-17
*/

class Vehicle {
  /**
   * Setting field values with a constructor. Also assigns colour input from
   * user to a value
   */
  constructor(colourInput) {
    
    // Preventing vehicle class from becoming instanciated 
    if (this.constructor === Vehicle) {
      throw new TypeError('Abstract class "Vehicle" cannot be instantiated'
                          + ' directly.');
    }

    this.colour = colourInput;
    this.speed = 0;
    this.maxSpeed = 150;
  }

  // setter for colour
  setColour(userColour) {
    this.colour = userColour;
  }

  // getter for colour
  getColour() {
    return this.colour;
  }

  
  // Method for getting speed 
  currentSpeed() {
    
    return this.speed;
  }

  /**
   * Method for accellerating.
   */

  accelerate(accSpeed) {
    if ((this.speed + accSpeed) < this.maxSpeed) {
      this.speed = this.speed + accSpeed; 
    } else if ((this.speed + accSpeed) > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      throw null;
    }
    return this.speed;
  }
  
  /**
   * Method for decellerating.
   */

  decelerate(brakeSpeed) {
    if ((this.speed - brakeSpeed) > 0) {
      this.speed = this.speed - brakeSpeed; 
    } else if ((this.speed - brakeSpeed) < 0) {
      this.speed = 0;
    } else {
      throw null;
    }
    return this.speed;
  }
}

// Exporting the class
module.exports = Vehicle;