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

document.querySelectorAll('.accordion').forEach((button) => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        panel.classList.toggle('active');
    });
});

document.querySelectorAll('.nav-box').forEach((box) => {
    box.addEventListener('mouseenter', () => {
        box.style.width = '150px';
        box.style.height = '150px';
        box.style.backgroundColor = '#f30404';
        box.style.fontSize = '20px';
    });

    box.addEventListener('mouseleave', () => {
        box.style.width = '100px';
        box.style.height = '100px';
        box.style.backgroundColor = '#050404';
        box.style.fontSize = '16px';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const testimonialSlides = document.querySelectorAll(".testimonial-slide");
    let slideIndex = 0;

    function showSlides() {
        for (let i = 0; i < testimonialSlides.length; i++) {
            testimonialSlides[i].classList.remove("active");
        }
        slideIndex++;
        if (slideIndex > testimonialSlides.length) {
            slideIndex = 1;
        }
        testimonialSlides[slideIndex - 1].classList.add("active");
        setTimeout(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
    }

    showSlides();
});
