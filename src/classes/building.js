/*------------------
You will be equally evaluated on the
quality of tests you write for this!

1. Create a class named Building. (already done for you)
2. Add two properties (your choice) and test them.
3. Add two methods (your choice) and test them.
You should test that they exist and that they work correctly.
You can add as many tests as you see fit.
------------------*/
/* Psudocode: //properties of building: (1) name; (3) purpose; (3) floors; (4) fire exit
- methods:-purposes should include: residential; business; and recreation
         -#floors; for residential building = 2; for buisness building = 3; 
        -fire exits = 3*#of floors 
------------------*/

class Building {
  constructor(purpose, floors, fireExits) {
    this.purpose = purpose;
    this.floors = 1;
    this.fireExits = 0;
  }
  floors() {
    return (this.floors += 1);
  }
  fireExits() {
    return this.floors * 3;
  }
}

module.exports = Building;
