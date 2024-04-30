
/* Home Page Carousel*/
document.addEventListener("DOMContentLoaded", function () {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const swiperSlides = document.querySelectorAll('.swiper-slide');
    const paginationButtons = document.querySelectorAll('.swiper-pagination-button');
    const totalSlides = swiperSlides.length;
    let currentSlide = 0;

    function updateSlider() {
        swiperWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update slider
        swiperSlides.forEach((slides, index)=> {
            slides.classList.toggle('active', index === currentSlide)
        })
        // Update pagination buttons
        paginationButtons.forEach((button, index) => {
            button.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    // Automatic slide every 3 seconds
    setInterval(nextSlide, 3000)

    // Event listeners for manual navigation
    // document.querySelector('.swiper-button-prev').addEventListener('click', prevSlide);
    // document.querySelector('.swiper-button-next').addEventListener('click', nextSlide);

    // Event listeners for pagination buttons
    paginationButtons.forEach((button, index) => {
        button.addEventListener('click', () => goToSlide(index))
    })
})


// Custom Carousel
document.addEventListener("DOMContentLoaded", function () {
    const customCarouselWrapper = document.querySelector('.custom-carousel-wrapper');
    const customCarouselSlides = document.querySelectorAll('.custom-carousel-slide');
    const customPaginationButtons = document.querySelectorAll('.custom-pagination-button');
    const totalSlides = customCarouselSlides.length;
    let currentSlide = 0;

    function updateSlider() {
        customCarouselWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update slider
        customCarouselSlides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        // Update pagination buttons
        customPaginationButtons.forEach((button, index) => {
            button.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // function prevSlide() {
    //     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    //     updateSlider();
    // }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    // Automatic slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Event listeners for pagination buttons
    customPaginationButtons.forEach((button, index) => {
        button.addEventListener('click', () => goToSlide(index));
    });
});
