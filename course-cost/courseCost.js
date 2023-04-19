function courseCost(courseCode, startDateStr){
    const startDate = new Date(startDateStr);

    const courses = {
        "p1" : {
            courseName : "",
            cost : 0.00
        },
        "p2" : {
            courseName : "",
            cost : 0.00
        }, 
        "r1" : {
            courseName : "",
            cost : 0.00
        }
    }

    const course = courses[courseCode];
    if (!course) {
        return {
            status : "Invalid code"
        }
    }

    const day = startDate.getDay();

    let discountRate = 0;
    let courseCost = course.cost;
    let discount = 0;

    if ( day >=20 && day <=25) {
        discountRate = 0.4
    } else if ( day >=10 && day <=15) {
        discountRate = 0.2;
    }

    if (discountRate > 0) {
        courseCost = course.cost * (1-discountRate)
        discount = courseCost * discountRate;
    }

    return {
        status : "success",
        code: "r1",
	    description : course.courseName,
	    cost : course.cost,
	    discount, 
	    amountDue : courseCost
    }
}