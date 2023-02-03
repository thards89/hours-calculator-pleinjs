const calculateButton = document.querySelector("#calculate");
const results = document.querySelector('#result');
const addMoreButton = document.querySelector("#add-more");
const clearButton = document.querySelector('#clear');

const getTotal = () => {
	const hoursInputs = document.querySelectorAll('.hours');
    const minutesInputs = document.querySelectorAll('.minutes');
    
    // Total Hours
	let hours = [...hoursInputs].map(item => {
		if (item.value) {
			return parseInt(item.value);
		} else {
			return 0;
		}
	});
	console.log("hours",hours)
	
    let sumOfHours = hours.reduce((a, b) => a + b, 0);
    console.log("total hours", sumOfHours)

	// Total Minutes
	let minutes = [...minutesInputs].map(item => {
		if (item.value) {
			return parseInt(item.value);
		} else {
			return 0;
		}
	});
    console.log("minutes",minutes)

	const totalMinutes = () => {
		let sumOfMinutes = minutes.reduce((a, b) => a + b, 0);
        console.log("total minutes", sumOfMinutes)
		if (sumOfMinutes >= 60) {
			sumOfHours = sumOfHours + Math.floor(sumOfMinutes / 60);
			if (sumOfMinutes % 60 === 0) {
				return "00";
			} else {
				return sumOfMinutes % 60;
			}
		} else if (sumOfMinutes == 0) {
			return "00";
		} else {
			return sumOfMinutes;
		}
	};
	totalMinutes();
	results.value = `${sumOfHours} : ${totalMinutes()}`;

}
const addMore = () => {
	const moreLevel = document.querySelector('#more-level');
	let oneMore = document.createRange().createContextualFragment(`
	<input type="number" class="hours" placeholder="Hours"> :
	<input type="number" class="minutes" placeholder="Minutes">
	`);
	moreLevel.appendChild(oneMore);
};

const clear = () => {
	const moreLevel = document.querySelector('#more-level');
	const hoursInputs = document.querySelectorAll('.hours');
    const minutesInputs = document.querySelectorAll('.minutes');
	for (var i = 0, max = hoursInputs.length; i < max; i++) { // loop through input elements and make value '' 
		hoursInputs[i].value = ''
	  }
	  for (var i = 0, max = minutesInputs.length; i < max; i++) { // loop through input elements and make value '' 
		minutesInputs[i].value = ''
	  }
	  results.value = ""
	  moreLevel.remove()
	  
	}

calculateButton.addEventListener("click", getTotal);
addMoreButton.addEventListener("click", addMore);
clearButton.addEventListener("click", clear)

