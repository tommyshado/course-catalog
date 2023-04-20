describe('courseCost function', () => {
    describe('testing for invalid day or invalid codes', () => {
        it('when courseCost is passed in an invalid course code, it returns an object with a status property', () => {
            let returnedValue = courseCost('H2', '2023-05-21');
            assert.deepEqual(returnedValue, { status : "Invalid code" });
        });

        it('when courseCost is passed in an invalid course code, it returns an object with a status property', () => {
            let returnedValue = courseCost('p4', "2023-05-21");
            assert.deepEqual(returnedValue, { status : "Invalid code" })
        });

        it('when courseCost is passed in anything other than a day as a string, it returns an object with a status property', () => {
            let returnedValue = courseCost('p1', '24');
            assert.deepEqual(returnedValue, { status: "Invalid day" });
        });

        it('when courseCost is passed in anything other than a day as a string, it returns an object with a status property', () => {
            let returnedValue = courseCost('p1', '25');
            assert.deepEqual(returnedValue, { status: "Invalid day" });
        });
    })

    describe('testing for when the user starts on the discount days', () => {
        it('when the user starts on the 20th of march and selects `p1` for the course, they will get a discount of 40%', () => {
            let returnedValue = courseCost('p1', '2023-05-20');
            let expectedValue = {
                                    status : "success",
                                    code: "r1",
                                    description : 'Python',
                                    cost : 7850,
                                    discount: 3140,
                                    amountDue : 4710
                                }
        

            assert.deepEqual(returnedValue, expectedValue);
        })

        it('when the user starts on the 25th of march and selects `p2` for the course, they will get a discount of 40%', () => {
            let returnedValue = courseCost('p2', '2023-05-25');
            let expectedValue = {
                                    status : "success",
                                    code: "r1",
                                    description : "Intro to PHP course",
                                    cost : 8990,
                                    discount: 3596,
                                    amountDue : 5394
                                }

            assert.deepEqual(returnedValue, expectedValue);
        })

        it('when the user starts on the 23th of march and selects `p2` for the course, they will get a discount of 40%', () => {
            let returnedValue = courseCost('r1', '2023-05-23');
            let expectedValue = {
                                    status : "success",
                                    code: "r1",
                                    description : "Ruby on Rails intro",
                                    cost : 5675,
                                    discount: 2270,
                                    amountDue : 3405
                                }
            assert.deepEqual(returnedValue, expectedValue);
        })
        it('when the user starts on the 10th and selects `r1` they will get 20% discount', () => {
            let returnedValue = courseCost('r1', '2023-05-10');
            let expectedValue = {
                                    status : "success",
                                    code: "r1",
                                    description : "Ruby on Rails intro",
                                    cost : 5675,
                                    discount: 1135,
                                    amountDue : 4540
                                }
            assert.deepEqual(returnedValue, expectedValue)
        });

        it('when the user starts on the 10th and selects `p2` they will get 20% discount', () => {
            let returnedValue = courseCost('p2', '2023-05-10');
            let expectedValue = {
                                    status : "success",
                                    code: "r1",
                                    description : "Intro to PHP course",
                                    cost : 8990,
                                    discount: 1798,
                                    amountDue : 7192
                                }
            assert.deepEqual(returnedValue, expectedValue)
        });

        it('when the user starts on the 15th and selects `p1 they will get 20% discount`', () => {
            let returnedValue = courseCost('p1', '2023-05-10');
            let expectedValue = {
                                    status : "success",
                                    code: "r1",
                                    description : "Python",
                                    cost : 7850,
                                    discount: 1570,
                                    amountDue : 6280
                                }
                                console.log(returnedValue);
            assert.deepEqual(returnedValue, expectedValue)
        });

        it('when the user starts on the 15th and selects `p2` they will get 20% discount', () => {
            let returnedValue = courseCost('p2', '2023-05-10');
            let expectedValue = {
                                    status : "success",
                                    code: "r1",
                                    description : "Intro to PHP course",
                                    cost : 8990,
                                    discount: 1798,
                                    amountDue : 7192
                                }
            assert.deepEqual(returnedValue, expectedValue)
        });
    });
})