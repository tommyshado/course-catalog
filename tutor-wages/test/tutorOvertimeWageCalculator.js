function tutorOvertimeWageCalculator(timeSheet, tutorLvel) {
    const overTimeHoursObj = { 'levelOne' : 0, 'levelTwo' : 0, 'levelThree' : 0 }

    let splitTimeSheet = timeSheet.split('-');
    // iterate starting from second last element
    for(let i = splitTimeSheet.length - 2; i < splitTimeSheet.length; i++) {
        const currentHours = Number(splitTimeSheet[i]);

        if (tutorLvel === 1) {
            overTimeHoursObj.levelOne += currentHours;
        } else if (tutorLvel === 2) {
            overTimeHoursObj.levelTwo += currentHours;
        } else {
            overTimeHoursObj.levelThree += currentHours;
        }
    }
}

let returnedValue = tutorOvertimeWageCalculator("8-8-8-8-8-9-5", 1);
console.log(returnedValue);