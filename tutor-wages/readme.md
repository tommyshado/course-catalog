# Tutor wages

Create a function called tutorWageCalculator that calculates how much a course tutor will earn based on this day rate and days work. Each tutor got a level the level details are below.

If you have time. Create a function called tutorOvertimeWageCalculator that will calculate how much overtime a given tutor will earn.

Each tutor have a different pay rate:


Level | Hourly rate | Overtime rate (above 40 hours)
Level 1  
R75
+7%
Level 2
R90
+9%
Level 3  
R105
+12%

 
The weekly timesheet format string looks like this:  “5-0-0-6-6-8-0” each number in the string is a number of hours worked for a day.

Timesheets with less than 5 and more than 7 entries are invalid:

This is invalid : “0-6-0-4”
This is also invalid : “5-0-0-6-6-8-0-9-1”

A work week got 40 hours anything above that is overtime
The max overtime hours allowed is 25 hours

Make the tests pass in `tutorWageCalculator.test.js`.
