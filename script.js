var acc = document.querySelectorAll(".accordion");

acc.forEach(function(el) {
    el.addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
document.getElementById("showForm").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("contactForm").style.display = "block";
});

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
});

