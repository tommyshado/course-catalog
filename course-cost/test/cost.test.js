describe('courseCost function', () => {
    describe('testing for invalid day or invalid codes', () => {
        it('when courseCost is passed in an invalid course code, it returns an object', () => {
            let returnedValue = courseCost('H2', '2023-05-21');
            assert.deepEqual(returnedValue, { status : "Invalid code" });
        });
        it('when courseCost is passed in anything other than a day as a string, it returns an object', () => {
            let returnedValue = courseCost('p1', '24');
            assert.deepEqual(returnedValue, { status: "Invalid day" });
        });
        it();
    })
})