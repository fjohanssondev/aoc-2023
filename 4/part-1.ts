import { readFile } from 'fs'

readFile('input.txt', 'utf8', (err, data) => {
  const scratchcards = data.split('\n')
  let sum = 0;
  for (const card of scratchcards){
    let points = 0;
    let firstIteration = true

    const winningNumbers = card.substring(card.indexOf(':') + 1, card.indexOf('|')).replace(/\s+/g, ' ').trim().split(' ')
    const yourNumbers = card.substring(card.length, card.indexOf('|') + 1).replace(/\s+/g, ' ').trim().split(' ')
    
    for (let n = 0; n < yourNumbers.length; n++){
      // @ts-ignore next line
      if (winningNumbers.includes(yourNumbers[n])){
        if (firstIteration){
          points += 1
          firstIteration = false
        } else {
          points = points + points
        }
      }
    }
    
    sum += points
  }

  console.log(sum)
})