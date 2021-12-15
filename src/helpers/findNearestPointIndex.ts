import {Point} from "../types"

const findNearestPointIndex = (currentPoint: Point, points: Point[]) => {
    return points.reduce<{ point: Point | null, pointIndex: number, length: number }>((acc, point, pointIndex) => {
        const length = Math.abs(currentPoint[0] - point[0]) + Math.abs(currentPoint[1] - point[1])
        if (length < acc.length) return {point, length, pointIndex}
        return acc
    }, {point: null, pointIndex: -1, length: Infinity}).pointIndex
}

export default findNearestPointIndex

