// Here are the solutions for your Day 5 JavaScript Assignment:


// ---

// 1. Using Callbacks to Fetch User Details after 3 Seconds

function getUserDetails(callback) {
    setTimeout(() => {
        const user = { id: 1, name: "John Doe", email: "john@example.com" };
        callback(user);
    }, 3000);
}

function displayUser(user) {
    console.log("User Details:", user);
}

getUserDetails(displayUser);

// Explanation:

// The getUserDetails function simulates an API call using setTimeout to delay execution by 3 seconds.

// The callback function displayUser is used to log the user details.



// ---



