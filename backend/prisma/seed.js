const { PrismaClient } = require('@prisma/client')
const { resolve } = require('path')
const csv = require('csvtojson')
const groupBy = require('json-groupby')

const prisma = new PrismaClient()
const csvFilePath = resolve('./input.csv')

const main = async () => {
  const json = await csv().fromFile(csvFilePath)
  const groups = groupBy(json, ['Image ID'])
  const array = Object.keys(groups).map((key) => ({
    id: Number(key),
    data: groups[key].map((el) => ({
      col: el['X Location'],
      row: el['Y Location'],
      fill: `#${el['Fill Color']}`
    }))
  }))

  await prisma.pixel.createMany({
    data: array
  })

  console.log('seed done')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })