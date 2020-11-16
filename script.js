//function constructor

// class Person {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;

//     }
// }
// //prototype in usage

// Person.prototype.calculateAge=
//     function () {
//         console.log(2020 - this.yearOfBirth);
//     };

//     Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'Teacher');
// var jane = new Person('Jane', 1998, 'Designer');
// var mark = new Person('Mark', 1970, 'Soldier');

// mark.calculateAge();
// jane.calculateAge();
// john.calculateAge();

// console.log(john.lastName);

// var personProto = {
//     calculateAge: function(){

//         2020- this.yearOfBirth;
//     }
// }

// var milan = Object.create(personProto);

//passing functions as an argument

var years = [1990, 1992, 1994, 1996, 1998];


function arrCalc(arr, fn){
    arrRes = [];
    for(var i =0; i< arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;

}


function calculateAge(el){
    return 2020 -el;
}



var ages = arrCalc(years, calculateAge);
console.log(ages);

var full = arrCalc(ages, fullAge);
console.log(full);



function fullAge(el){

    return el >=18;
}


function heartBeat(el){

    if(el >=18 && el <=81){
        return Math.round(206 - (0.67*el));
    }
    else {
        return -1;
    }
}


var heart = arrCalc(ages, heartBeat);
console.log(heart)  ;


























