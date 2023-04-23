function tutorOvertimeWageCalculator(timeSheet, tutorLvel) {
    const overTimeHoursObj = { 'levelOne' : 0, 'levelTwo' : 0, 'levelThree' : 0 }

    let splitTimeSheet = timeSheet.split('-');
    // iterate starting from second last element
    for(let i = splitTimeSheet.length - 2; i < splitTimeSheet.length; i++) {
        console.log(splitTimeSheet[i]);
    }
}

let returnedValue = tutorOvertimeWageCalculator("8-8-8-8-8-9-5", 1);
console.log(returnedValue);