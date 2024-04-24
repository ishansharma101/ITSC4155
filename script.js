/*--- Reset to Home Page When Save is Clicked ---*/
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let bio = document.getElementById("bio").value;
    let email = document.getElementById("email").value;
    let darkMode = document.getElementById("darkMode").checked;
    let notifications = document.getElementById("notifications").checked;


    // Send this data to the server to update the user profile
    console.log("Name: " + name);
    console.log("Bio: " + bio);
    console.log("Email: " + email);
    console.log("Dark Mode: " + darkMode);
    console.log("Notifications: " + notifications);

     // Redirect to the home page
window.location.href = "homepage1.html"; // Change "home.html" to the actual home page URL
});

/*--- Slideshow Images ---*/
