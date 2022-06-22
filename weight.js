// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
// "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// If all digits are the same aside from subsequent zeros, the shorter digit comes before.
// In this case, 18 comes before 180.

// All numbers in the list are positive numbers and the list can be empty.

const orderWeight = (string) => {
  const numStrngArray = string.split(" ")
  let weightScores = {}
  
  for (let i = 0; i < numStrngArray.length; i++) {
    const digitArray = numStrngArray[i].split("")
    let sum = 0
    
    digitArray.forEach((digit) => sum += Number(digit))
    
    weightScores[i] = {
      weight: numStrngArray[i],
      score: sum
    }
  }
  
  const sortedArray = Object.keys(weightScores).sort((a, b) => {
    if (weightScores[a].score === weightScores[b].score) {
      const weightA = String(weightScores[a].weight)
      const weightB = String(weightScores[b].weight)
      let differenceFound = false

      if (weightA.length > weightB.length) {
        for (let i = 0; i < weightA.length; i++) {
          if (weightA[i] !== weightB[i] && weightB[i]) {
            differenceFound = true
            return weightScores[a].weight[i] - weightScores[b].weight[i]
          }
        }
      } else {
        for (let i = 0; i < weightB.length; i++) {
          if (weightA[i] !== weightB[i] && weightA[i]) {
            differenceFound = true
            return weightScores[a].weight[i] - weightScores[b].weight[i]
          }
        }
      }
      
      if (differenceFound === false) {
        return weightScores[a].weight.length - weightScores[b].weight.length
      }
    } else {
      return weightScores[a].score - weightScores[b].score
    } 
  })
  const sortedWeights = sortedArray.map((key) => weightScores[key].weight)

  return sortedWeights.join(" ")
}

orderWeight("36972 38 291836 180 307485 138 205955 153 48873 132 96808 1 384124 18 434398 184 224935 182 405048 29 11")