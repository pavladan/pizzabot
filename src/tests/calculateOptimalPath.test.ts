import calculateOptimalPath from "../helpers/calculateOptimalPath"

describe("Testing calculate optimal path", () => {
    test('Success calculate for (1,3)(4,4)', () => {
        expect(calculateOptimalPath([[1, 3], [4, 4]])).toStrictEqual('ENNNDEEEND')
    })
    test('Success calculate for double drop (0,0)(0,0)', () => {
        expect(calculateOptimalPath([[0, 0], [0, 0]])).toStrictEqual('DD')
    })
    test('Success calculate for reverse from (3,3) to (0,0)', () => {
        expect(calculateOptimalPath([[0, 0]], [3, 3])).toStrictEqual('WWWSSSD')
    })
    test('Success calculate for empty array of points', () => {
        expect(calculateOptimalPath([])).toStrictEqual('')
    })
    test('Throw an Error with when calculate for Infinity number', () => {
        expect(()=>calculateOptimalPath([[Infinity, 4]])).toThrow('Invalid number at input points')
    })
    test('Throw an Error with when calculate for number < 0', () => {
        expect(()=>calculateOptimalPath([[-9, 4]])).toThrow('Invalid number at input points')
    })
})