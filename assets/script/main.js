document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sectionsNavbar = document.getElementById("sectionsNavbar");

    menuToggle.addEventListener("click", function () {
        sectionsNavbar.classList.toggle("show");
    });
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});




document.addEventListener("DOMContentLoaded", function () {
    var customSwiper = new Swiper(".custom-swiper", {
        wrapperClass: "custom-wrapper",
        slideClass: "custom-slide",
        navigation: {
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
        },
        slidesPerView: 1,
        loop: false,
    });

    const links = document.querySelectorAll(".cat-link");

    function showCategory(category) {
        customSwiper.slides.forEach(slide => {
            slide.classList.remove("active-slide");
            slide.style.display = "none";
        });

        const categorySlides = Array.from(customSwiper.slides).filter(
            slide => slide.dataset.category === category
        );

        categorySlides.forEach(slide => {
            slide.style.display = "block";
        });

        customSwiper.update();

        if (categorySlides.length > 0) {
            const index = customSwiper.slides.indexOf(categorySlides[0]);
            customSwiper.slideTo(index, 0);
        }
    }

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
            const category = this.dataset.tab;
            showCategory(category);
        });
    });

    if (links.length > 0) {
        links[0].classList.add("active");
        showCategory(links[0].dataset.tab);
    }
});




document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        const tabs = document.querySelectorAll(".cat-link");
        const contents = document.querySelectorAll(".categories-content");

        tabs.forEach((tab) => {
            tab.addEventListener("click", function (e) {
                e.preventDefault();

                tabs.forEach((t) => t.classList.remove("active"));
                this.classList.add("active");

                const category = this.getAttribute("data-tab");

                contents.forEach((content) => {
                    const slides = content.querySelectorAll(".custom-slide");

                    slides.forEach((slide) => {
                        if (slide.getAttribute("data-category") === category) {
                            slide.style.display = "block";
                        } else {
                            slide.style.display = "none";
                        }
                    });

                    const wrapper = content.querySelector(".custom-wrapper");
                    wrapper.style.transform = "translateX(0)";
                    wrapper.dataset.currentIndex = 0;
                });
            });
        });

        const wrapper = document.querySelector(".custom-wrapper");
        const slides = wrapper.querySelectorAll(".custom-slide");
        const prevBtn = document.querySelector(".custom-prev");
        const nextBtn = document.querySelector(".custom-next");

        let currentIndex = 0;

        function updateSlider() {
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        });

        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        });

        slides.forEach((slide, i) => {
            if (i !== 0) slide.style.display = "none";
        });
        updateSlider();

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                slides.forEach((slide) => (slide.style.display = "block"));
                wrapper.style.transform = "translateX(0)";
            }
        });
    }
});












