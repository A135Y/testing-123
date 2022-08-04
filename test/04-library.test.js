const { expect } = require('expect')
const {Book, User} = require('../src/04-library')

test('should be assigning values correctly', () => {
    const newBook = new Book('HTGAWM', 123456, 'AK')
    expect (newBook.title).toBe('HTGAWM')
    expect (newBook.ISBN).toBe(123456)
    expect (newBook.author).toBe('AK')
    console.log(newBook)
   
})

test('should assigning values correctly', () => {
    const newUser = new User('myNewUserName','Password123')
    expect (newUser.username).toBe('myNewUserName')
    expect (newUser.password).toBe('Password123')
})

test('should update username correctly', () => {
    const newUser = new User('myNewUserName','Password123')
    newUser.updateUsername('myNextUsername', 'Password123')
    expect (newUser.username).toBe('myNextUsername')
})


test('should update username correctly', () => {
    const newUser = new User('myNewUserName','Password1234')
    newUser.updateUsername('myNextUsername', 'Password123')
    expect (newUser.username).toBe('myNewUserName')
})



test('should chechoutBook correctly', () => {
    const newUser2 = new User('myNewUserName','Password123')
    const newBook = new Book('HTGAWM', 123456, 'AK')
    newUser2.checkoutBook(newBook)
    expect(newBook.isAvailable).toBe(false)
    expect (newBook.currentOwner).toBe(newUser2.username)
    expect(newUser2.books.includes(newBook)).toBe(true)
})


test('should returnBook correctly', () => {
    const newUser2 = new User('myNewUserName','Password123')
    const newBook = new Book('HTGAWM', 123456, 'AK')
    newUser2.returnBook(newBook)
    expect(newBook.isAvailable).toBe(true)
    expect (newBook.currentOwner).toBe(null)
    expect(newUser2.books.includes(newBook)).toBe(false)
})

