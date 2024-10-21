// Description
// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.



// Syntax
// array.splice(index, count, item1, ....., itemX)
// Parameters
// Parameter	Description


// index	Required.
// The index (position) to add or remove items.
// A negative value counts from the end of the array.
// count	Optional.


// Number of items to be removed.
// item1, ...,	Optional.
// The new elements(s) to be added.
// Return Value
// Type	Description
// Array	An array containing the removed items (if any).




// SPLICE(): Adds or removes elements from the array. 

// splice method se ham remove b kr skte add b kr skte or replace b kr skte hen array k bch m kahin se b 

// SYNTEX .................  array.SPLICE (index, count , item , ...... , itemX) item and count are optional


                //////////////////////////////////remove method /////////////////////////////////////////

// cars.splice(1,1);  1 is a index and second 1 is a count

// let cars = ["audi", "BMW", "porsche", "Mercedes banz","land cruiser", "ferrari"];
// cars.splice(1,1);
// console.log(cars);

// OUTPUT (5) ['audi', 'porsche', 'Mercedes banz', 'land cruiser', 'ferrari']


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let stdname = ["sobia","zeeshan", "mahnoor","adil", "maria" , "iqra",];
// stdname.splice(4,5);
// console.log(stdname);

// OUTPUT (4) ['sobia', 'zeeshan', 'mahnoor', 'adil']

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let numbers = [1 , 2 , 3 , 4 , 5 , 6]
// numbers.splice(2,1)
// console.log(numbers);

// OUTPUT (5) [1, 2, 4, 5, 6]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let fruits = ["apple", "mango" , "orange" , "kiwi", "watermelon", ];
// fruits.splice(3,1);
// console.log(fruits);


// OUTPUT (4) ['apple', 'mango', 'orange', 'watermelon']

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                  //////////////////////////  REPLACE METHOD ///////////////////////////////////////

// let fruits = ["apple", "mango" , "orange" , "kiwi", "watermelon", ];
// fruits.splice(3,1, "pineapple");
//  console.log(fruits);


// (5) ['apple', 'mango', 'orange', 'pineapple', 'watermelon']

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





                  //////////////////////////  ADD METHOD ///////////////////////////////////////

// let fruits2 = ["apple", "mango" , "orange" , "kiwi", "watermelon" ];
// fruits2.splice(3,0, "pineapple");
//  console.log(fruits2);


//  ['apple', 'mango', 'orange', 'pineapple', 'kiwi', 'watermelon'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let fruits2 = ["apple", "mango" , "orange" , "kiwi", "watermelon" ];
// fruits2.splice(0,0, "pineapple");
//  console.log(fruits2);

//  (6) ['pineapple', 'apple', 'mango', 'orange', 'kiwi', 'watermelon']

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// - slice(): Returns a new array with a subset of elements.

// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.



// Syntax
// array.slice(start, end)


// Parameters
// Parameter	Description
// start	Optional.
// Start position. Default is 0.
// Negative numbers select from the end of the array.


// end	Optional.
// End position. Default is last element.
// Negative numbers select from the end of the array.
// Return Value
// A new array containing the selected elements.



///////////////////////////////////////////////////////////////////////////////////


// let animal = ["fly" , "dog" , "cat", "fox", "wolf"];
// let pet = animal.slice(1,3);
// console.log(pet);


// OUTPUT (2) ['dog', 'cat']



/////////////////////////////////////////////////////////////////////////////////////////////


