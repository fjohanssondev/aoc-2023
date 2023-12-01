import { readFile } from 'fs'

// Part 1

readFile('./input.txt', 'utf8', (err, data) => {

  let sum = 0;
  const lines = data.split("\n")

  for (const line of lines) {

    let firstNum: number | null = null;
    let lastNum: number | null = null;

    for (const char of line) {
      const num = Number(char)

      if (!isNaN(num)) {
        if (firstNum === null) {
          firstNum = num
        }

        lastNum = num
      }

    }

    if (firstNum && lastNum) {
      const stringValue = firstNum.toString() + lastNum.toString()
      sum += Number(stringValue)
    }
  }

  console.log(sum)
})