const {Point} = require('../src/02-point')

test('should assing x and y co-ordinates correctly', () => {
    const p1 = new Point(5,7)
    expect (p1.x).toBe(5)
    expect (p1.y).toBe(7)
})


test('should move points  correctly', ()=>{
     const p2 = new Point(3,9)
     p2.move(2,5)
     expect (p2).toEqual({x:5, y:14})
 })

 test('should reflect points  correctly', ()=>{
    const p2 = new Point(3,9)
    p2.reflect()
    expect ([p2.x,p2.y]).toEqual([9, 3])
})


test('should stretch points  correctly', ()=>{
    const p2 = new Point(3,9)
    p2.stretch(3)
    expect ([p2.x,p2.y]).toEqual([9,27])
})
