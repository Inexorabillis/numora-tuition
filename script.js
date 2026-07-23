

const themeToggle = document.getElementById("theme-toggle");

console.log(themeToggle);

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    console.log("clicked");

});