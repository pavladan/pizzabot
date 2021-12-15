import calculateOptimalPath from './helpers/calculateOptimalPath'
import getInputValuesFromArgument from './helpers/getInputValuesFromArgument'

const args = process.argv.slice(2)
const inputArg = args[0]

if (!inputArg)
    throw new Error('No input data entered')

console.log(calculateOptimalPath(getInputValuesFromArgument(inputArg).points))




