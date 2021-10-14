"use strict";

let add;
/*
function sum(x, y) {

    add = x +y;
    return add;
}
*/
function sum(...nums) {

    add = 0;
    for (var num of nums ){
        add += num;
    }
    return add;
}

let addition = sum(1,2,3,4);

console.log(addition);
/*
function studentDetails(...courses) {

    let sub;
    for(sub = 0; sub < courses.length; sub++ ) {

        console.log(courses[sub]);
    }
    
}
function studentDetails(name, ...courses) {

    console.log("Name of the student is : " + name);

    let sub;
    for(sub = 0; sub < courses.length; sub++ ) {

        console.log(courses[sub]);
    }
    
}
*/
function studentDetails(...courses, name) {

    console.log("Name of the student is : " + name);

    let sub;
    for(sub = 0; sub < courses.length; sub++ ) {

        console.log(courses[sub]);
    }
    
}

studentDetails("Chris", "JavaScript", "Python", "Scala");






















