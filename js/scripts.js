// I will write a write a function that says hello.
// This function will take an argument,
// Called name, which is string.
function sayHello(name){

//  console.log("Hello! " + name);
}
sayHello("Arunima");

//I will write a function that would greet a person.
//The person would be passed to the function as an object
// The function will parse that object and greet the person
function greetings(person){
// console.log("Hello, "+person.firstName+ ". "+ "You are "+person.age+ " years old.");


}

//I wll make an object that descrbes a person
var myObj = {
  firstName: "Arunima",
  lastName: "Gururani",
  age: 22
}

//I will call the greeting function passing myObj as its argument
//greetings(myObj);

//I will make another object that describes my friend.

var friendObj = {
  firstName: "Wamika",
  lastName: "Singh",
  age: 22
}
//greetings (friendObj);

//I will now make an array of objects. Each object will describe a person.

var myList = [
  {
     firstName: "Arunima",
     lastName: "Gururani",
     age: 22
},

{
  firstName: "Wamika",
  lastName: "Singh",
  age: 22
},
{
  firstName: "Hasit",
  lastName: "Nanda",
  age: 22
},
{
  firstName: "Shiv" ,
  lastName: "Vardhan",
  age: 23
},
{
  firstName: "Sneha" ,
  lastName:"Kler" ,
  age: 29
}
];

//console.log(myList);

//I will write a function that will greet people.
//I takes an array as its arument.
//Each array has an object that describes a person.

function greetmyList(list) {
  //console.log(list);
  //I will use a for loop to loop through my array of items.

   for (var i= 0; i< list.length; i++)
   {
     //This variable is the current item in the array that the for loop is iterating through.

     var Item= list[i];
     //console.log(Item);
     //Greet each person in turn.
    // console.log("Hey there "+Item.firstName+ " . You are "+Item.age+" years old. ");

   }

}

//Call the greetmyList function and pass myList as the argument.

greetmyList(myList);
//I will make a function to sort people by age.
//This function takes an argument called list.

function sorting(list){
  //Creae two arrays. One for older people and one for younger people.
  //These will be blank arays that we will populate with forEach loop.
  //Loop through array.

  var older= [];
  var younger=[];


  list.forEach(function(d,i){
  //  console.log("Hello, "+d.firstName+" "+d.lastName+". "+"You are "+d.age+" years old. ");
if (d.age<25)
{
  //console.log(d.firstName+ " is younger than 25. ");
  younger.push(d);
}
else
{
  //console.log(d.firstName+" is older than 25. ");
  older.push(d);

}

  })
//This function will return our arrays as an object.

var buckets = {
  oldList: older,
  youngList: younger
};
return buckets;

//console.log("The list of older people. ");
console.log(older);
//console.log("The list of younger people. ");
//console.log(younger);

}
//console.log(older);

//Call sorting and pass myLst to it.
sorting(myList);

//Make another array with more people.

var More= [
  {
    firstName: "Akshat",
    lastName: "Gururani",
    age:17
  },
  {
    firstName: "Akansha",
    lastName: "Tiwari",
    age: 26
  },
  {
    firstName: "Supriya",
    lastName:"Joshi",
    age: 23
  },
  {
    firstName: "Karttikeya",
    lastName: "Kandpal",
    age: 18
  },
];

//Run the function again with the new array.
sorting(More);

//Create two variables where sorting returns sorted lists of people.

var sorted= sorting(More);
//console.log(sorted);
var sortedList= sorting(myList);
//console.log(sortedList);
console.log(sorted+sortedList);
//sorts the younger people.

var isYounger = sortedList.youngList;
//console log the new list and old list.

console.log(isYounger);
console.log(myList);
