

let continueChecking = true;

while (continueChecking) {
    let mass = parseFloat(prompt("Enter mass in kg"));
    let height = parseFloat(prompt("Enter height in cm"));
    let bmi = mass / ((height / 100) ** 2);
    if (bmi < 18.5) {
        console.log("You are underweight");
    } else if (bmi < 25) {
        console.log("You have normal BMI");
    } else if (bmi < 30) {
        console.log("You are overweight");
    } else {
        console.log("Obese");
    }
let answer = prompt("Do you want to check BMI again? (yes/no)").toLowerCase();
    if (answer !== "yes") {
        continueChecking = false;
        console.log("Ok");
    }
}



