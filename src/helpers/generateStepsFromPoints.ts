import {Point} from "../types"

const generateStepsFromPoints = (currentPoint: Point, nextPoint: Point) => {
    let xMoves = ''
    let yMoves = ''
    const drop = 'D'
    const xPoints = nextPoint[0] - currentPoint[0]
    const xSign = Math.sign(xPoints)
    if (xSign === 1) {
        xMoves += [...new Array(xPoints)].map(p => 'E').join('')
    } else if (xSign === -1) {
        xMoves += [...new Array(-1 * xPoints)].map(p => 'W').join('')
    }
    const yPoints = nextPoint[1] - currentPoint[1]
    const ySign = Math.sign(yPoints)
    if (ySign === 1) {
        yMoves += [...new Array(yPoints)].map(p => 'N').join('')
    } else if (ySign === -1) {
        yMoves += [...new Array(-1 * yPoints)].map(p => 'S').join('')
    }
    return xMoves + yMoves + drop
}

export default generateStepsFromPoints