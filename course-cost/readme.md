# Total Course Cost

As part of creating the Course Catalogue Web App project you need to tests for the **courseCost** function that can calculate course cost & apply discount if applicable.

Course cost is calculated as follows:

* Get a 40% discount for a course starting between the 20 and 25th of the month.
* Get a 20% discount for a course starting between the 10th and 15th of the month.
* Otherwise no discounts

The course costs are as follows:

Course name | Code | Cost
------------|-----|----------
Ruby on Rails intro| r1	|R5675.00
Python     		| p1 |R7850.00
Intro to PHP course   	| p2	|R8990.00

The **courseCost** function:

* already implements the above logic
* take 2 parameters the **course code** & the **courseStart** date

**Note:** You only need to write the Unit Tests

Only focus on:

  * The **Mocha set-up** 
  * and **writing** unit tests

Files given:

* `courseCost.test.js` - empty file
* `test/courseCost.js` - working function
* `index.html` - empty file

The working `courseCost` function is provided see it in the `courseCost.js` file.

Study the **courseCost** function and then create the unit tests.


Write unit tests that:

* Ensure that courses get different prices across discount windows
* Ensure different courses has different prices
* Ensure that invalid course codes are handled correctly


## Function details

To get the cost for a `Ruby on Rails` course starting on `21 May 2023` use this function call

```js
const cost = courseCost(“r1”, “21-05-2023”);
console.log(cost);
```

The function returns an object like this:

```json
{
	"status" : "success",
	"code": "r1",
	"description" : "",
	"cost" : "",
	"discount" : "", 
	"amountDue" : ""
}
```

For an invalid course code: status is “Invalid code”

