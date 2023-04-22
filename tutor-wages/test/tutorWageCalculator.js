// Create a function called tutorWageCalculator that calculates how much a course tutor will earn 
// based on this hourly rate and hours worked. Each tutor got a level. The level details are below. 
// It takes a timesheet string & the tutor level of the tutor as parameters. And returns tutor wage.

function tutorWageCalculator(string, level) {
    const hoursObj = { 'levelOne' : 0, 'levelTwo' : 0, 'levelThree' : 0};

    let splitStr = string.split('-');

    if (splitStr.length >= 5 || splitStr.length <= 7) {
        for (let i = 0; i < splitStr.length; i++) {
            const currentHours = Number(splitStr[i]);
    
            if (currentHours !== 0 && level === 1) {
                hoursObj.levelOne += currentHours;
            }
    
            if (currentHours !== 0 && level === 2) {
                hoursObj.levelTwo += currentHours;
            }
    
            if (currentHours !== 0 && level === 3) {
                hoursObj.levelThree += currentHours;
            }
        }
    } else {
        return 'invalid'
    }

    // compare the hours of level 1 to 40 hours
    if(level === 1) {
        if (hoursObj.levelOne <= 40) {
            return hoursObj.levelOne * 75;
        } else if (hoursObj.levelOne > 40) {
            return (hoursObj.levelOne * 75) * 7 / 100;
        } else {
            return 'invalid';
        }
    }

    if(level === 2) {
        if (hoursObj.levelTwo <= 40) {
            return hoursObj.levelTwo * 90;
        } else if (hoursObj.levelTwo > 40) {
            return (hoursObj.levelTwo * 90) * 9 / 100;
        } else {
            return 'invalid';
        }
    }

    if(level === 3) {
        if (hoursObj.levelThree <= 40) {
            return hoursObj.levelThree * 105;
        } else if (hoursObj.levelThree > 40) {
            return (hoursObj.levelThree * 105) * 12 / 100;
        } else {
            return 'invalid';
        }
    }
}

console.log(tutorWageCalculator("4-4-4-8-5", 2));