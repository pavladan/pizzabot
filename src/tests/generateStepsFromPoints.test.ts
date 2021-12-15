import generateStepsFromPoints from "../helpers/generateStepsFromPoints"

describe("Testing generate steps from points", () => {
    test('Success find steps string', () => {
        expect(generateStepsFromPoints([0, 0], [1, 2])).toStrictEqual('ENN')
    })
    test('Success find steps in one place', () => {
        expect(generateStepsFromPoints([0, 0], [0, 0])).toStrictEqual('')
    })
    test('Throw an error when find steps with invalid numbers', () => {
        expect(() => generateStepsFromPoints([-5, 0], [Infinity, 0])).toThrowError('Invalid number at input points')
    })
})