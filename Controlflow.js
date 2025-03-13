//---

//2. Control Flow Exercise

function classifyAge(age) {
    if (age >= 0 && age <= 12) {
        console.log("Child");
    } else if (age >= 13 && age <= 19) {
        console.log("Teenager");
    } else if (age >= 20) {
        console.log("Adult");
    } else {
        console.log("Invalid age");
    }
}

classifyAge(10);  // Output: Child
classifyAge(15);  // Output: Teenager
classifyAge(25);  // Output: Adult
