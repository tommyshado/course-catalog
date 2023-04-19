# Tutor wages

Create a function called **tutorWageCalculator** that calculates how much a course tutor will earn based on this hourly rate and hours worked. Each tutor got a level. The level details are below. It takes a `timesheet string` & the tutor `level` of the tutor as parameters. And returns tutor wage

> **If you have time.** Create a function called `tutorOvertimeWageCalculator` that calculates how much a given tutor will earn for working overtime for a given `timesheet string` & the tutor `level`.

## Files given

* `tutorWageCalculator.js` - function needs to be written in here
* `tutorOvertimeWageCalculator.js` - function needs to be written in here
* `test/tutorWageCalculator.test.js` - test written already - **don't change** this file.
* `test/tutorOvertimeWageCalculator.test.js` - test written already - **don't change** this file.
* `test/index.html` - mocha is configured in here to run the above tests - **don't change** this file.

## Background


Each tutor has a different pay rate:


| Level       |  Hourly rate  | Overtime rate(above 40 hours)|
|:------------|:-------------:|-----------------------------:|
| Level 1     | R75           | +7%                          |
| Level 2     | R90           | +9%                          |
| Level 3     | R105          | +12                          |

 
The weekly timesheet format string looks like this:

`“5-0-0-6-6-8-0”` each number in the string is a number of hours worked for a day seperated by a dash `-`

These are all valid timesheets:

* `7-2-3-6-7` (25 hours)
* `4-6-9-6-8` (33 hours)
* `0-3-4-5-0` (12 hours)

Timesheets with **less than 5 and more than 7** entries are **invalid**:

These are invalid timesheets:

* `0-6-0-4`
* `5-0-0-6-6-8-0-9-1`

## Overtime

A work week got **`40 hours`** anything above that is overtime

The overtime rates are listed above

## Make tests pass

Make the tests pass in `tutorWageCalculator.test.js` and `tutorOvertimeWageCalculator.js` by implementing the `tutorWageCalculator` & `tutorOvertimeWageCalculator` functions. Do the `tutorWageCalculator` function first. And if you have time do the `tutorOvertimeWageCalculator` function.






