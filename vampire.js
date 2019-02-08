class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }


  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVamp = 0;
    let currentVamp = this;

    while(currentVamp.creator){
      currentVamp = currentVamp.creator;
      numberOfVamp++;
    }

    return numberOfVamp;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (name === this.name)
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let amount = 0;
    for (var i = 0; i < offspring.length - 1; i++) {
      amount += amount;
    }
    return amount;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }
}

module.exports = Vampire;

