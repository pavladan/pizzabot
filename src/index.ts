import getInputValuesFromArgument from './helpers/getInputValuesFromArgument'

const args = process.argv.slice(2)
const inputArg = args[0]

if (!inputArg)
    throw new Error('No pizza points entered')

console.log(inputArg, getInputValuesFromArgument(inputArg))




