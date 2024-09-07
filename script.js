// script.js

document.querySelector(".hamburger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".navbar ul").classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const speed = 500; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 1 });

        observer.observe(counter);
    });
});
