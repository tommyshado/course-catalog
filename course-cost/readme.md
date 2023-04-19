# Total Course Cost

As part of creating the Course Catalogue Web App you need to create a function that can calculate course cost discount if applicable.

* Get a 40% discount for a course starting between the 20 and 25th of the month.
* Get a 20% discount for a course starting between the 10th and 15th of the month.
* Otherwise no discounts

The course costs are as follows:

Course name | Code | Cost
------------|-----|----------
Ruby on Rails intro| r1	|R5675.00
Python     		| p1 |R7850.00
Intro to PHP course   	| p2	|R8990.00


**Note:** You only need to write the Unit Tests

Only focus on:

  * The **Mocha set-up** 
  * and **writing** unit tests

Files given:

* `courseCost.test.js` - empty file
* `courseCost.js` - working function
* `index.html` - empty file

The working `courseCost` function is provided see it in the `courseCost.js` file.

Write some Unit tests that:

* Ensure that courses get different prices across discount windows
* Ensure different courses has different prices
* Ensure that invalid course codes are handled correctly


To get the cost for a `Ruby on Rails` course starting on `21 May 2023` use this function call

```	
const cost = courseCost(“r1”, “21-05-2023”);
console.log(cost);
```

I will return something like this:

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

For an invalid course code: status is “Invalid Code”

