import { readFile } from 'fs'

readFile("input.txt", "utf8", (err, data) => {
  const games = data.split('\n')
  let sum = 0;

  for (const game of games) {
    const map = new Map()
    const values = game.substring(game.indexOf(":") + 1, game.length)
    const segments = values.split(";")

    let isGameValid = true;

    map.set("id", Number(game.substring(game.indexOf("Game") + "Game".length, game.indexOf(":")).trim()))

    for (const segment of segments) {
      const sub_game = segment.trim().split(",")

      for (const game of sub_game) {
        const [value, key] = game.trim().split(" ")
        map.set(key, Number(value))
      }

      const red = map.get('red')
      const green = map.get('green')
      const blue = map.get('blue')

      if (red > 12 || green > 13 || blue > 14) {
        isGameValid = false
      }
    }

    if (isGameValid) {
      sum += map.get('id')
    }

    map.clear()
  }

  console.log(sum)
})