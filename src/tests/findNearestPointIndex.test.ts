import findNearestPointIndex from "../helpers/findNearestPointIndex"

describe("Testing find nearest point index", () => {
    test('Success find index', () => {
        expect(findNearestPointIndex([0, 0], [[3, 4], [1, 2]])).toStrictEqual(1)
    })
    test('Throw an error when find index in emty array', () => {
        expect(() => findNearestPointIndex([0, 0], [])).toThrowError('Empty points array when find nearest point')
    })
    test('Throw an error when input points < 0', () => {
        expect(() => findNearestPointIndex([0, 0], [[3, 4], [-4, 5]])).toThrowError('Invalid number at input points')
    })
    test('Throw an error when input current point < 0', () => {
        expect(() => findNearestPointIndex([-5, 0], [[3, 4], [4, 5]])).toThrowError('Invalid number at input points')
    })
    test('Throw an error when input current point is Infinity', () => {
        expect(() => findNearestPointIndex([Infinity, 0], [[3, 4], [4, 5]])).toThrowError('Invalid number at input points')
    })
})