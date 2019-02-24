function calc() {
	let value1 = parseInt(document.querySelector("#value1").value);
	let value2 = parseInt(document.querySelector("#value2").value);
	let operator = document.querySelector("#operator").value;
	let calculatedValue;

	switch(operator){
		case "add":
			calculatedValue = (value1+value2);
			break;
		case "min":
			calculatedValue = (value1-value2);
			break;
		case "div":
			calculatedValue = (value1/value2);
			break;
		case "mul":
			calculatedValue = (value1*value2);
			break;
		default:
			console.log("ERROR")
	}

	document.querySelector("#results").innerHTML = calculatedValue;
}