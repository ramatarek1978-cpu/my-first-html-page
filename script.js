// 1. Welcome Button
document.getElementById("welcomeButton").addEventListener("click", function() {
    alert("Hello! Welcome to my webpage!");
});

// 2. Change Heading
document.getElementById("changeHeadingButton").addEventListener("click", function() {
    document.querySelector("h1").textContent = "Thanks for visiting my page!";
});

// 3. Show and Hide Hobbies
document.getElementById("toggleHobbiesButton").addEventListener("click", function() {
    const hobbies = document.getElementById("hobbies");

    if (hobbies.style.display === "none") {
        hobbies.style.display = "block";
        this.textContent = "Hide Hobbies";
    } else {
        hobbies.style.display = "none";
        this.textContent = "Show Hobbies";
    }
});

// 4. Change Background
document.getElementById("changeBackgroundButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
