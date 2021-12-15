import { InputFormat } from "../types"

const getInputValuesFromArgument = (arg: string) : InputFormat | Error=>{
    const validRegExp = /^(\d+)x(\d+)((?:\s+\(\d+,\s*\d+\))+)\s*$/m
    const match = arg.match(validRegExp)
    if (!match) return new Error('No valid input string')
    const res = {
        x: +match[1],
        y: +match[2],
        points: [...match[3].matchAll(/\((\d+),\s?(\d+)\)/g)].map(m=>[+m[1],+m[2]])
    }
    if (res.points.some(point=>point[0] >= res.x || point[1] >= res.y))
        return new Error('One of the points goes out of the field')
    return res
}

export default getInputValuesFromArgument