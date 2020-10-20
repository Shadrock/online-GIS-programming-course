/* I begin the code-along by explaining the basics of JavaScript (below) and how they differ or are similar to Python, which is the main working language of the class. When the code is run, nothing will happen on the map: all outputs will appear in the Google Earth Engine console tab. */

// This is a comment. Below is a print statement.
print("Hello World!");

//  When you create a variable, you need to declare it with “var"
var a_number = 42;
var string = "Hello String!";
print(a_number, string)

// Making a list
var alist = ['pizza', 'salad', 'fries'];
print(alist[2]); // what is that [2] about? 

// Making a dictionary, woot!
var mydict = {'food':'apple', 'letterb':'b', 'color':'blue'};
print(mydict['color']);

// Syntax for a function is:
var str_function = function(string){
  return 'hello' + string + '!'
};
print(str_function('world'));

var num_function = function(x){
  return 42 + x
};
print(num_function(10));
