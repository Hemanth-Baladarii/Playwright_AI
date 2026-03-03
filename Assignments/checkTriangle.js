
/*
*Write a program that classifies a triangle based on its side lengths. 
*Given three input values representing the lengths of the sides, determine if the triangle is equilateral
*(all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal).
*Use an if-else statement to classify the triangle.
*/

let equilateralTriangle = { a : 10, b : 10, c : 10};
let isoscelesTriangle = { a : 10, b : 20, c : 10};
let scaleneTriangle = { a : 10, b : 20, c : 30};

checkTriangleType(isoscelesTriangle);

function checkTriangleType(triangle){
    if(triangle.a === triangle.b && triangle.b === triangle.c){
        console.log("Equilateral Triangle");
    } else if(triangle.a === triangle.c || triangle.b === triangle.c || triangle.a === triangle.b){
        console.log("Isosceles Triangle");
    } else {
        console.log("Scalene Triangle");
    }
}
