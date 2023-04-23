function tutorOvertimeWageCalculator(timeSheet, tutorLvel) {
    const overTimeHoursObj = { 'levelOne' : 0, 'levelTwo' : 0, 'levelThree' : 0 }

    let splitTimeSheet = timeSheet.split('-');
    // iterate starting from second last element
    for(let i = 0; i < splitTimeSheet.length; i++) {
        const currentHours = Number(splitTimeSheet[i]);

        if (currentHours > 8 || splitTimeSheet.indexOf(5) || splitTimeSheet.indexOf(6)) {
            if (tutorLvel === 1) {
                overTimeHoursObj.levelOne += currentHours;
            }  else if (tutorLvel === 2) {
                overTimeHoursObj.levelTwo += currentHours;
            } else {
                overTimeHoursObj.levelThree += currentHours;
            }
        }
    }
    // iterate over the length of the object
    for (let currentLevel in overTimeHoursObj) {
        if (overTimeHoursObj[currentLevel] > 0) {
            // hours per week supposed to be 40
            return ((overTimeHoursObj[currentLevel] - 40) * (75)) * 7 / 100 + (overTimeHoursObj[currentLevel] - 40) * (75);
        }
    }
}

let returnedValue = tutorOvertimeWageCalculator("8-8-8-8-8-9-5", 1);
console.log(returnedValue);