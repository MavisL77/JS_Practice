let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);


let role = "Subscriber";
let serviceLevel;

if (role === "Employee") {
        serviceLevel = "Access granted: You can use the Dietary Services.";
    } 
    else if (role === "Enrolled Member") {
        serviceLevel = "Access granted: You can use the Dietary Services and have one-on-one interaction with a dietician.";
    } 
    else if (role === "Subscriber") {
        serviceLevel = "Access granted: You have partial access to Dietary Services.";
    } 
    else if (role === "Non-Subscriber") {
       serviceLevel = "Access denied: Please enroll or subscribe to avail this facility.";
    } 
    else {
       serviceLevel = "Invalid role entered. Please try again.";
    }

console.log("Service Level:", serviceLevel);