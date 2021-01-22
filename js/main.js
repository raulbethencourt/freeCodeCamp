const contacts = [
	{
		firstName: "Akira",
		lastName: "Laine",
		number: "0242115222",
		likes: ["pizza", "codinig"],
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		number: "688744552",
		likes: ["galletas", "magia"],
	},
];

function lookUpProfile(name, prop) {
	// Only change code below this line
	let response;
	for (let i = 0; i < contacts.length; i++) {
		const contact = contacts[i];
		const nameAndProperty =
			contact.firstName == name && contact[prop] !== undefined;
		const propNotExist =
			contact.firstName == name && contact[prop] === undefined;

		switch (true) {
			case nameAndProperty:
				response = contact[prop];
				return response;
			case propNotExist:
				response = "No such property";
				return response;
			default:
				response = "No such contact";
		}
	}
	return response;
}

console.log(lookUpProfile("Akira", "lastName"));
console.log(Math.random() * 10);
function countDown(n) {
	if (n < 1) {
		return [];
	} else {
		const countArray = countDown(n - 1);
		countArray.unshift(n);
		return countArray;
	}
}
console.log(countDown(10)); // [ 1, 2, 3, 4, 5 ]

function rangeOfNumbers(startNum, endNum) {
	if (startNum > endNum) {
		return [];
	} else {
        const countArray = rangeOfNumbers((startNum + 1), endNum);
		countArray.unshift(startNum);
		return countArray;
	}
}

console.log(rangeOfNumbers(6, 15));


const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
	// Only change code below this line
	const failureItems = [];
	arr.forEach((fail) => {
		failureItems.push(`<li class="text-warning">${fail}</li>`);
	});
	// Only change code above this line

	return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);


// class, constructor, getters and setters
class Thermostat {
	constructor(fahrenheit) {
		this._fahrenheit = fahrenheit;
	}

	// getters
	get temperature() {
		return (5 / 9) * (this._fahrenheit - 32);
	}

	// setters
	set temperature(c) {
		this._fahrenheit = (c * 9.0) / 5 + 32;
	}
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in
console.log(temp);
