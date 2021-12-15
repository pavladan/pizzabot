import {InputFormat, Point} from "../types"
import findNearestPointIndex from "./findNearestPointIndex"
import generateStepsFromPoints from "./generateStepsFromPoints"

const calculateOptimalPath = (points: InputFormat['points'], position: Point = [0, 0]): string => {
    if (points.length === 0) return ''
    const nextPointIndex = findNearestPointIndex(position, points)
    if (nextPointIndex === -1) throw new Error('No find optimal path')
    const nextPoint = points[nextPointIndex]
    const path = generateStepsFromPoints(position, nextPoint)
    const newPoints = [...points]
    newPoints.splice(nextPointIndex,1)
    return path + calculateOptimalPath(newPoints, nextPoint)
}

export default calculateOptimalPath