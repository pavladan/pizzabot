import getInputValuesFromArgument from "../helpers/getInputValuesFromArgument"

describe("Testing parse input argument", () => {
    test('Throw an error when Empty input string', () => {
        expect(()=>getInputValuesFromArgument('')).toThrowError('No valid input string')
    })
    test('Throw an error when Input string without points', () => {
        expect(()=>getInputValuesFromArgument('5x5')).toThrowError('No valid input string')
    })
    test('Throw an error when the number of points is greater than the size of the field', () => {
        expect(()=>getInputValuesFromArgument('5x5 (5,3)')).toThrowError('One of the points goes out of the field')
    })
    test('Input string with point', () => {
        expect(getInputValuesFromArgument('5x5 (1, 2)')).toEqual({x:5, y:5, points: [[1,2]]})
    })
    test('Input string with invalid spaces', () => {
        expect(getInputValuesFromArgument('5x5(1,2) ')).toEqual({x:5, y:5, points: [[1,2]]})
    })
    test('Input string with 3 points', () => {
        expect(getInputValuesFromArgument('5x5 (1,2) (3,4)(2,1)')).toEqual({x:5, y:5, points: [[1,2],[3,4],[2,1]]})
    })
})