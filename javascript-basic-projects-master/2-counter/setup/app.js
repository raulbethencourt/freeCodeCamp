// Launch app
document.addEventListener("readystatechange", (evt) => {
	if (evt.target.readyState === "complete") {
		initApp();
	}
});

const initApp = () => {
	const valueCase = document.getElementById("value");
	const buttons = document.querySelectorAll(".btn");
	let value = 0;
	valueCase.innerText = value;

	buttons.forEach((btn) => {
		btn.addEventListener("click", () => {
			switch (btn.getAttribute("data-target")) {
				case "decrease":
					value--;
					break;
				case "increase":
					value++;
					break;
				default:
					value = 0;
					break;
			}
			valueCase.innerText = value;

			if (value < 0) {
				valueCase.style.color = "red";
			} else if (value > 0) {
				valueCase.style.color = "green";
			} else {
				valueCase.style.color = "#102a42";
			}
		});
	});
};
