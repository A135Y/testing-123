const {Point} = require('../src/02-point')

test('should assing x and y co-ordinates correctly', () => {
    const p1 = new Point(5,7)
    expect (p1.x).toBe(5)
    expect (p1.y).toBe(7)
})

// test('should move points  correctly', ()=>{
//     const p2 = new Point(3,9)
//     expect (p2.move(2,5)).toBe(5,14)
// })
