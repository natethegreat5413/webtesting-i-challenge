const enhancer = require('./enhancer.js');
// test away!

describe('enhancer', () => {
    describe('repair()', () => {
        it ('should set the item.durability to 100', () => {
            const item = {
                name: 'motorcycle',
                durability: 1,
                enhancement: 0
            };

            const expectedItem = {
                name: 'motorcycle',
                durability: 100,
                enhancement: 0,
            };

            const actualItem = enhancer.repair(item)
            expect(actualItem.durability).toBe(expectedItem.durability)
        })
    })

    describe('succeed()', () => {
        it('should add 1 to item.enhancement if less than 20', () => {
            const itemOne = {
                name: 'motorcycle',
                durability: 53,
                enhancement: 20,
        };

        const itemTwo = {
            name: 'bicycle',
            durability: 17,
            enhancement: 0,
        };

        const itemThree = {
            name: 'item',
            durability: 59,
            enhancement: 15,
        };

        const expectedItemOne = {
            name: 'motorcycle',
            durability: 53,
            enhancement: 20,
        };

        const expectedItemTwo = {
            name: 'bicycle',
            durability: 17,
            enhancement: 1,
        };

        const expectedItemThree = {
            name: 'item',
            durability: 59,
            enhancement: 16
        };

        const actualItemOne = enhancer.succeed(itemOne)
        const actualItemTwo = enhancer.succeed(itemTwo)
        const actualItemThree = enhancer.succeed(itemThree);

        expect(expectedItemOne.enhancement).toBe(actualItemOne.enhancement)
        expect(expectedItemTwo.enhancement).toBe(actualItemTwo.enhancement)
        expect(expectedItemThree.enhancement).toBe(actualItemThree.enhancement)
    });
});

describe('fail()', () => {
    it('should reduce durability of an item and when enhancment is greater than 16 it takes one away from enhancement', () => {
        const itemOne = {
            name: 'motorcycle',
            durability: 72,
            enhancement: 20,
        };

        const itemTwo = {
            name: 'bicycle',
            durability: 17,
            enhancement: 0,
        };

        const itemThree = {
            name: 'item',
            durability: 59,
            enhancement: 15,
        };

        const expectedItemOne = {
            name: 'motorcycle',
            durability: 62,
            enhancement: 19,
        };

        const expectedItemTwo = {
            name: 'bicycle',
            durability: 12,
            enhancement: 0,
        };

        const expectedItemThree = {
            name: 'item',
            durability: 49,
            enhancement: 15,
        };

        const actualItemOne = enhancer.fail(itemOne)
        const actualItemTwo = enhancer.fail(itemTwo)
        const actualItemThree = enhancer.fail(itemThree)

        expect(expectedItemOne.enhancement).toBe(actualItemOne.enhancement)
        expect(expectedItemOne.durability).toBe(actualItemOne.durability)

        expect(expectedItemTwo.enhancement).toBe(actualItemTwo.enhancement)
        expect(expectedItemTwo.durability).toBe(actualItemTwo.durability)

        expect(expectedItemThree.enhancement).toBe(actualItemThree.enhancement)
        expect(expectedItemThree.durability).toBe(actualItemThree.durability)
        
    })
})

})
