export function initHomeAnimations() {

    // ==============================
    // HERO GLOW
    // ==============================

    const hero = document.querySelector(".hero-section");
    const glow = document.querySelector(".image-glow");

    if (hero && glow) {

        const handleMouseMove = (e) => {

            const rect = hero.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            glow.style.left = `${x - 210}px`;
            glow.style.top = `${y - 210}px`;
            glow.style.opacity = "1";
        };

        const handleMouseLeave = () => {
            glow.style.opacity = "0.6";
        };

        hero.addEventListener("mousemove", handleMouseMove);
        hero.addEventListener("mouseleave", handleMouseLeave);
    }


    // ==============================
    // BANK BENEFIT CARDS
    // ==============================

    const cards = document.querySelectorAll(
        ".bank-benefit-card"
    );

    if (cards.length) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        cards.forEach(function (card, index) {

            card.style.transitionDelay =
                `${index * 0.08}s`;

            observer.observe(card);
        });
    }


    // ==============================
    // PROCESS STEPS
    // ==============================

    const steps = document.querySelectorAll(
        ".process-step"
    );

    if (steps.length) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "process-visible"
                        );

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        steps.forEach(function (step, index) {

            step.style.transitionDelay =
                `${index * 0.12}s`;

            observer.observe(step);
        });
    }
}