const { blue, red } = require('color-name')
const {Cuboid } = require('../src/03-cuboid')

test('should assing width height and depth correctly', () => {
    const c1 = new Cuboid(5,7,3)
    expect (c1.width).toBe(5)
    expect (c1.height).toBe(7)
    expect (c1.depth).toBe(3)
})

test('volume should be calculated correctly', () => {
    const c2 = new Cuboid(5,7,3)
    expect (c2.volume()).toBe(105)
})


test('paint funciton should change color of cuboid', () => {
    const c3 = new Cuboid(5,7,3)
    c3.paint('red')
    expect(c3.colour).toBe('red')
})