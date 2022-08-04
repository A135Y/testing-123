const { Rectangle } = require('../src/01-rectangle')

    test('should assign width and height correctly', () => {
        const r1 = new Rectangle(12,18)
        expect(r1.width).toBe(12),
        expect(r1.height).toBe(18)
    })

    test('should calculate area  correctly', ()=>{
        const r1 = new Rectangle(12,18)
        expect (r1.area()).toBe(216)
       
    })

    test('should calculate perimeter  correctly', ()=>{
        const r1 = new Rectangle(12,18)
        expect (r1.perimeter()).toBe(60)
       
    })