function checkNum(x,y) {
    return Math.max(x,y)
}

test('checkNum function should return 8', () => {
 expect(checkNum(4,8)).toBe(8)
})

test('checkNum function should return 1', () => {
 expect(checkNum(1, -5)).toBe(1)
})

test('checkNum function should return 20', () => {
 expect(checkNum(20,19)).toBe(20)
})



