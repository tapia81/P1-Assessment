console.log('Question 1 Anwser');
// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
	{ brand: 'Ford', model: 'mustang', type: 'convertible' },
	{ brand: 'Toyota', model: 'camry', type: 'sedan' },
	{ brand: 'Ram', model: '1500', type: 'pickup' },
	{ brand: 'Hyundai', model: 'Sonata', type: 'sedan' },
	{ brand: 'Jeep', model: 'wrangler', type: 'suv' },
	{ brand: 'Nissan', model: 'frontier', type: 'pickup' }
];

filterCarBrands = (cars) => {
	return cars.type == 'sedan';
};

let filteredCars = carBrands.filter(filterCarBrands);
console.log(filteredCars);

console.log('\nQuestion 2 Anwser');
/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
reverseTheString = (str) => {
	let reversedString = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversedString += str[i];
	}
	console.log(reversedString);
};
reverseTheString('next');

// 3.
console.log('\nQuestion 3 Anwser');
// Write a function that takes an array of strings,
// and returns the longest string in the array
let arrOfStrings = [ 'one', 'two', 'three', 'four', 'five', 'six' ];
let longestSring = arrOfStrings[0];

function returnLongesString(arrOfStrings) {
	if (longestSring.length < arrOfStrings.length) {
		return (longestSring = arrOfStrings);
	}
}
arrOfStrings.forEach(returnLongesString);
console.log(longestSring);

// 4.
console.log('\nQuestion 4 Anwser');
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
let wishlist = [
	{ title: 'tesla', price: 90000 },
	{ title: 'tesla', price: 45000 },
	{ title: 'tesla', price: 5 },
	{ title: 'tesla', price: 2000 },
	{ title: 'tesla', price: 90000 }
];
function shop(arr) {
	let sum = arr.reduce((accumatalor, current) => accumatalor + current.price, 0);
	return sum;
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
console.log('\nQuestion 5 Anwser');
console.log(
	'Recursion is a process similar to a while loop. Recursion is when a function is called by itself which will continously run each time with a new input unitl it has exit which is also called the base case'
);

function countDownFrom(number) {
	if (number === 0) {
		return;
	}

	console.log(number);
	countDownFrom(number - 1);
}

countDownFrom(8);
console.log(
	'The function countDownFrom takes a parameter number, when countDownFrom is called it will check if the number paramter is equal to 0. If it is not 0 it will countDownFrom function before the closing bracket of its own function. This time when it calls itself it will have a different input. Instead of the pervious number paramter it will have number parameter minus 1 until it reachs the base case which is when number = 0'
);

//6. OOP has 4 pillars and we learned about each in this phase.
//Choose the pillar you are most comfortable with
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as
//instructors and you will be banished to the nether realms.

console.log('\nQuestion 7 Anwser');
/*  7.
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */

let arr = [ true, false, true, true ];
const flipBool = (arr) => {
	let newValues = arr.map((currentValue) => {
		if (currentValue == true) {
			return (currentValue = false);
		} else if (currentValue == false) {
			return (currentValue = true);
		} else {
			console.log(currentValue);
		}
	});
	console.log(newValues);
};
flipBool(arr);

// 8.
console.log('\nQuestion 8 Anwser');
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

newFunc = (animal, food) => {
	if (animal[0] !== food[0] && animal[animal.length - 1] !== food[food.length - 1]) {
		return false;
	} else {
		return animal[0] + animal[animal.length - 1];
	}
};

console.log(newFunc('great blue heron', 'garlic naan'));
console.log(newFunc('lion', 'pizza'));

// Extra Credit

// For this you have to write a through explanation explaining the interview process below
// Interview Scenario:
// Two people, Person1 and Person2 are interviewing at Google.

// Now they are both given the same interview questions by the same interviewers,

// Imagine they are given certain algorithmic whiteboarding questions that generally difficult.

// Person1 happens to know the answer to it and from their head they are able to solve the algorithm, and even explain it to the interviewers.

// Person2 does not know the answer off the top of their head, but knows certain elements of how to solve this interview question.
// For example Person2 knows how to find resources, a great debugger. To which in the interview Person2, asks the interviewers if they can google some resources (not the answer directly).

// Person2 took more time to explain their answer but also explained the process of how they solved this problem.

// Person1 knew the answer and took less time to answer the question.

// Now, which of the two interviewees would Google consider for the next round of interviews?
// Why did you pick this person?
// What is Google looking for in this interview from any candidate, and what did Google learn from the candidate that you choose and the other one that you think did not get to the next round?

// Give a thorough answer.

console.log('\nExtra Credit Anwser');
console.log(
	"Google would choose person 2 for the next round of interviews. I say person 2 because while person 1 knew the immediate anwser there is no real way to evaulate person 1's skills. Person 2 wasn't clueless and had an idea of getting the anwser and while it will take him longer to anwser he is able to demonstrate his ability to use his current knowledge and research to solve the problem. This will give person 2 a chance to demonstrate his thought process and reasoning. If person 1 is hired just because he was able to immeditately anwser questions he fully knows the anwsers to in an interview, google wouldn't know person 1's reaction when he is challenged by a question he isn't able to immediately solve. Google is looking for someone to not just solve issues but be able to explain them aswell. Google learned to be open to new ways of thinking, from the other candidate google learned it also shouldn't automatically disqualify him just because he knows the anwser to an interview question. What is important, is not to just anwser but have each candiate explain how they came to their conclusion."
);
