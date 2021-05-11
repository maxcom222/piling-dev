import randomInt from 'utils/randomInt'

const dummyPixel = [...new Array(randomInt(1, 20))].map((_, key) => {
  const col = randomInt(5, 20)
  const row = randomInt(1, 6)
  const fill = `#${Math.floor(Math.random() * 16777215).toString(16)}`

  return { col, row, fill }
}).reduce((acc, current) => {
  const x = acc.find(item => (item.col === current.col && item.row === current.row));
  if (!x) {
    return acc.concat([current]);
  } 
  return acc;
}, [])

export default dummyPixel