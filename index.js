// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a.constructor === Array);
console.log(b.constructor === Array);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function multiply(arr){
    for (var i=0; i<=arr.length-1; i++){
        arr[i] = arr[i] * 2;  
    }
    console.log(arr);
}
multiply(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
// case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.toString().replace(/,/g, ' '));
console.log(colors.toString().replace(/,/g, '+'));
console.log(colors.toString());



// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort(function(a, b){return b-a}));


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var x = 0;
var y = 0;
var elmnt;
for (var i=0; i<=a.length-1; i++){
    for (var j=i; j<a.length; j++){
        if (a[i] == a[j]){
            y++;
        }
        if (x<y){
            x=y; 
            elmnt = a[i];
        }
    }
    y=0;
}
console.log(elmnt);