// Class Review

// Working with nested objects

// Creating Object
// you can create objects using the following ways
const obj1 = {};
const obj2 = new Object();

// every object has properties, properties are key-value pairs, colon separated.
// so, the properties of an are like dictionaries you call the key,
// and you get the value back

// Getting and Setting object properties
// to set object properties

// setting them while you are declaring them
const person1 = { name: "Amy", occupation: "student", address: "Vancouver BC" };
// Initializing object then setting their properties

// a. using dot-notation
const person2 = {};
person2.name = "Selim";
person2.occupation = "Student";
person2.address = "Burnaby";

// b. using bracket-notation
const person3 = {};
person3["name"] = "Helga";
person3["occupation"] = "Student";
person3["address"] = "Coquitlam";

// for getting object properties, we can either use dot-notation or bracket-notation

person1.name; // Amy
person2["address"]; // Burnaby

// Looping through objects

// We can use for ... in to loop through objects

for (let key in person1) {
  /* what that does is, going through person1 object and each iteration gets the key key */
  //console.log(key); // key is a placeholder variable in each iteration it has a different value
  // { name: "Amy", occupation: "student", address: "Vancouver BC" };
  // Iterations (Note: the number iterations is equal to the number of properties so, for the above object, we have 3 iterations)
  /*
    iterations         property key in each iteration
    ----------      ----------------------------------
        1               name
        2               occupation
        3               address
  */

  //  Now let's check how we access those key values and see the difference between
  //  dot-notation and bracket-notation to get and set object properties

  //   console.log(key);
  // we to access an object, we can either use dot-notation or bracket-notation, so what comes to our mind is:
  // console.log(person1.key); // while key is a variable changes to key of each property in each iteration
  // the above will look for a property named key in person1 object and it doesn't find it so, we get back undefined

  // So, the solution for that is bracket without quotations
  console.log(`${key}: ${person1[key]}`); // Now we are ok because the square brackets besides strings and symbols, also accept variables
}

// Nested Objects
const school = {
  departments: [
    { id: 1, name: "Computer Science" },
    { id: 2, name: "Mathematical" },
    { id: 3, name: "Biology" },
    { id: 4, name: "Geology" }
  ],
  centers: [
    { id: 1, name: "Languages Center" },
    { id: 2, name: "Art Center" }
  ],
  info: { id: "a809dfsjLJg08@#kjfdl", location: "Vancouver BC, Canada" }
};

const departments = school.departments; // returns an array of all the keys of departments ['id', 'name']

for (let department of departments) {
  console.log(department.id);
  console.log(department.name);
}

// department = [ {id: 1}, {id: 2}, 2, 'hello' ];

// department[0]

// SQL Associations and JOINS

/*

Get all students with their associated projects in the same 
query. Order the results by the students's first_name

SELECT 
    students.id,
    first_name,
    title AS project_title
    FROM students
    INNER JOIN projects ON students.id = projects.student_id
    ORDER BY first_name;



List all students that are enrolled in a course whose
title contains 'dedicated'

SELECT students.id, students.first_name, courses.title, score
FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id
INNER JOIN courses ON courses.id = enrolments.course_id
WHERE courses.title ILIKE '%dedicated%';
*/
