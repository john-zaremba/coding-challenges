//Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

const myArray = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
]

const snail = (array) => {
  const snailArray = []
  const rows = array.length
  const cols = array[0].length
  let startingRow = 0
  let startingCol = 0
  let endingRow = rows - 1
  let endingCol = cols - 1

  while (snailArray.length < rows * cols) {
    const upper = []
    const outerLeft = []
    const outerRight = []
    const lower = []

    for (let i = startingRow; i <= endingRow; i++) {
      if (i === startingRow) {
        for (let j = startingCol; j <= endingCol; j++) {
          upper.push(array[i][j])
        }
      } else if (i > startingRow && i < endingRow) {
        outerLeft.push(array[i][startingCol])
        outerRight.push(array[i][endingCol])
      } else if (i === endingRow) {
        for (let j = endingCol; j >= startingCol; j--) {
          lower.push(array[i][j])
        }
      }
    }  

    const first = upper.concat(outerRight)
    const second = lower.concat(outerLeft.reverse())
    const final = first.concat(second)

    final.forEach((element) => {
      snailArray.push(element)
    })

    startingRow++
    startingCol++
    endingRow--
    endingCol--
  }

  return snailArray
}

console.log(snail(myArray))