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