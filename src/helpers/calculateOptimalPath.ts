import {InputFormat, Point} from "../types"
import findNearestPointIndex from "./findNearestPointIndex"
import generateStepsFromPoints from "./generateStepsFromPoints"

const calculateOptimalPath = (points: InputFormat['points'], position: Point = [0, 0]): string => {
    if ([...points, position].flat().some(p => p < 0 || p === Infinity)) throw new Error('Invalid number at input points')
    if (points.length === 0) return ''
    const nextPointIndex = findNearestPointIndex(position, points)
    const nextPoint = points[nextPointIndex]
    const path = generateStepsFromPoints(position, nextPoint)
    const newPoints = [...points]
    newPoints.splice(nextPointIndex, 1)
    return path + "D" + calculateOptimalPath(newPoints, nextPoint)
}

export default calculateOptimalPath