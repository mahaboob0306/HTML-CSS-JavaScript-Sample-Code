//2. Using Promises to Simulate an API Call with Success & Failure Handling

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Simulate success or failure randomly
            if (success) {
                resolve({ id: 1, name: "Jane Doe", email: "jane@example.com" });
            } else {
                reject("Error: Failed to fetch user data");
            }
        }, 3000);
    });
}

fetchUserData()
    .then(user => console.log("User Data:", user))
    .catch(error => console.error(error));

// Explanation:

// The fetchUserData function returns a Promise that simulates an API call.

// It randomly determines success or failure using Math.random().

// resolve() returns user data in case of success.

// reject() returns an error message in case of failure.

// .then() handles the success case, while .catch() handles the error case.
