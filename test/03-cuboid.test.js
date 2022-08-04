const {Cuboid } = require('../src/03-cuboid')

test('should assing width height and depth correctly', () => {
    const c1 = new Cuboid(5,7,3)
    expect (c1.width).toBe(5)
    expect (c1.height).toBe(7)
    expect (c1.depth).toBe(3)
})