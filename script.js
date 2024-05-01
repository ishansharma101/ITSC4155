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

/*--- Profile Script ---*/
let cnt1 = 1000;
let cnt2 = 100;
let cnt3 = 111;
function followersFn() {
    cnt1 += 1;
    document.getElementById('followersCount').innerText = cnt1;
}
function followingFn() {
    cnt2 += 1;
    document.getElementById('followingCount').innerText = cnt2;
}
function articlesFn() {
    cnt3 += 1;
    document.getElementById('articlesCount').innerText = cnt3;
}
