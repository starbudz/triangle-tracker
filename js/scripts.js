var triangleTracker = function(triangle){
var triangle= new Array(3);

var dimmensions=0;

for (dimmensions=0; dimmensions<3; dimmensions++){
triangle[dimmensions]=(parseFloat(prompt('Enter the dimmensions in centimeters!',' ')));
}
if(triangle[0] === triangle[1] && triangle[0] === triangle[2] && triangle[1] === triangle[2]){
alert("This triangle is Equilateral");
}
else if(triangle[0] === triangle[1] || triangle[0]=== triangle[2] || triangle[1] === triangle[2]){
alert("This triangle is Isosceles");
}
else if((triangle[0] + triangle[1]) <= triangle[2] || (triangle[0] + triangle[2]) <= triangle[1] || (triangle[1] + triangle[2]) <= triangle[0]) {
alert("This is not a Triangle");
}
else if(triangle[0] !== triangle[1] && triangle[0] !== triangle[2] && triangle[1] !== triangle[2]){
alert("This is a Scalene triangle");
}
}
