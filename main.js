// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, arrayDnaBases) => {
  const specObj = {
    "specimenNum": number,
    "dna": arrayDnaBases,
    mutate = () => {
      const randNum = Math.floor(Math.random() * this.arrayDnaBases.length);
      let newBase = returnRandBase();
      while (this.arrayDnaBases[randNum] === newBase) {
        newbase = returnRandBase;
      }
        this.arrayDnaBases[randNum] = newBase;
        return this.arrayDnaBases;
    }
  };
};

//console.log(pAequorFactory(1, mockUpStrand()));