import {Point} from "../types"

const findNearestPointIndex = (currentPoint: Point, points: Point[]) => {
    if (points.length === 0) throw new Error('Empty points array when find nearest point')
    if ([...points, currentPoint].flat().some(p => p < 0 || p === Infinity)) throw new Error('Invalid number at input points')
    return points.reduce<{ point: Point | null, pointIndex: number, length: number }>((acc, point, pointIndex) => {
        const length = Math.abs(currentPoint[0] - point[0]) + Math.abs(currentPoint[1] - point[1])
        if (length < acc.length) return {point, length, pointIndex}
        return acc
    }, {point: null, pointIndex: -1, length: Infinity}).pointIndex
}

export default findNearestPointIndex

