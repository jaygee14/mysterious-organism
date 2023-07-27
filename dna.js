/* author: Jaygee
   For: codecademy prokect 'Mysterious Organism'
*/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

  const pAquerFactory = (_specimenNum, _dna) => {
   //returns a new object
    return {
      _specimenNum,
      _dna,

      // takes in a set of dna, picks a random strand, changes it using returnRandBase() and returns the changed set
      mutate() {
        randomPick = Math.floor(Math.random() * 15)
        const strand = this._dna[randomPick]
        let newStrand = strand

        while (strand === newStrand) {
          newStrand = returnRandBase()
        }

        this._dna[randomPick] = newStrand;
        return this._dna
      },
      
       //compares two sets of dna and returns how closely identical the two sets are in a percentage
      compareDNA(strand) {
        
        sameDNA = []
        for (let i = 0; i < 15; i++){
          if (strand[i] === this._dna[i]) {
            sameDNA.push(strand[i])
          }
        }

        percentageDNA = (sameDNA.length / 15) * 100
        console.log(`The two specimen share %${percentageDNA} of their dna.`)
      },

      // takes a set of DNA and finds out what percentage of DNA are C and G strands. Returns a boolean if subject is likely to survive
      willLikelySurvive(){
        cGPercentage = []
        for (item of this._dna) {
          if (item == 'C' || item === 'G') {
            cGPercentage.push(item)
          }
        }
        if ((cGPercentage.length / 15) * 100 > 60) {
          return true
        }
        else {
          return false
        }
      }
    }
  
  };
  
//console.log(idk.mutate('T'))

//const squirrel = pAquerFactory(1, mockUpStrand())

//console.log(squirrel.mutate())

willSurvive = []
count = 0

while (willSurvive.length < 30) {
  let kettle = pAquerFactory(count, mockUpStrand());
  if (kettle.willLikelySurvive() === true) {
    willSurvive.push(kettle)
  }
  count++
}

console.log(willSurvive)




