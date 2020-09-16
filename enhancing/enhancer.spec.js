const enhancer = require('./enhancer.js');
// test away!

describe("runs enhancement tests", () => {
        it("repair()", () => {
            const item = {
                name: 'pencil',
                durability: 3,
                enhancement: 10
            } 
            const newItem = enhancer.repair(item)
            expect(newItem.durability).toBe(100)
        })

        it('should add 1 to enhancement if less than 20', () => {
            expect(enhancer.success({
                name: 'pencil',
                durability: 3,
                enhancement: 14,
            })).toEqual({
                name: 'pencil',
                durability: 3,
                enhancement: 15
            })
        })

        it('should reduce durability by 5 if enhancement is < 15', () => {
            const item = {
                name: 'bike',
                durability: 14,
                enhancement: 12
            }

            const newItem = enhancer.fail(item)
            expect(newItem.durability).toBe(9)
        })
    })

