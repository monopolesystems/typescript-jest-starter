import cube from '../src/lib/cube'

const mockSquare = jest.fn().mockImplementation((x) => x * x)

jest.mock('../src/lib/square', () => (x: number) => mockSquare(x))

const { default: squareActual } = jest.requireActual('../src/lib/square')

describe('square', () => {
  it('should pass square', () => {
    expect(squareActual(9)).toEqual(81)
    expect(squareActual(0)).toEqual(0)
  })
})
describe('cube', () => {
  it('cube should call square', () => {
    cube(1)
    expect(mockSquare).toHaveBeenCalled()
    expect(mockSquare).toHaveBeenCalledWith(1)
  })
})
