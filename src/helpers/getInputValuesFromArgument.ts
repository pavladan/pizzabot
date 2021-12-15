import { InputFormat, Point } from "../types"

const getInputValuesFromArgument = (arg: string) : InputFormat=>{
    const validRegExp = /^(\d+)x(\d+)((?:\s*\(\d+,\s*\d+\))+)\s*$/m
    const match = arg.match(validRegExp)
    if (!match) throw new Error('No valid input string')
    const res = {
        x: +match[1],
        y: +match[2],
        points: [...match[3].matchAll(/\((\d+),\s?(\d+)\)/g)].map<Point>(m=>[+m[1],+m[2]])
    }
    if (res.points.some(point=>point[0] >= res.x || point[1] >= res.y))
        throw new Error('One of the points goes out of the field')
    return res
}

export default getInputValuesFromArgument