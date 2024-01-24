function scrollProduct() {
    let offsetTop = document.getElementById('product').offsetTop;
    $('body,html').animate({ scrollTop: offsetTop }, 1000);
}

$(document).ready(() => {
    /* ======= stages-slider START ======= */
    if (document.querySelector('.stages-slider')) {

        /* ======= swiper START ======= */
        const stagesSpratsSwiper = new Swiper('.stages-sprats-swiper', {
            // Default parameters
            direction: 'horizontal',
            loop: true,
            speed: 500,
            slidesPerView: 1,
            navigation: {
                nextEl: '.stages-sprats-swiper-button-prev',
                prevEl: '.stages-sprats-swiper-button-next',
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
        });

        const stagesTunaSwiper = new Swiper('.stages-tuna-swiper', {
            // Default parameters
            direction: 'horizontal',
            loop: true,
            speed: 500,
            slidesPerView: 1,
            navigation: {
                nextEl: '.stages-tuna-swiper-button-prev',
                prevEl: '.stages-tuna-swiper-button-next',
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
        });
        /* ======= swiper END ======= */

        // Написать для всех видео
        // Убираем полоску при проигрывании, при паузе возращаем обратно
        // Убираем кнопку плей при проигрывании, при паузе возращаем обратно 
        // Убираем постер при проигрывании, при паузе возращаем обратно
        // Делаем пагинацию
        // ПОстер на все ширину свайпера

        const $__stagesSlides = document.querySelectorAll('.stages-slider__slide');

        $__stagesSlides.forEach((slide) => {
            const $__stagesSwiper = slide.parentElement.parentElement;
            const $__sliderVideo = slide.querySelector('.stages-slider__video');
            const $__sliderPoster = slide.querySelector('.stages-slider__video-poster');
            const $__sliderTitle = slide.querySelector('.stages-slider__title');
            const $__sliderButtonPrev = $__stagesSwiper.querySelector('.stages-slider__button-prev');
            const $__sliderButtonNext = $__stagesSwiper.querySelector('.stages-slider__button-next');
            const $__sliderPlayButton = slide.querySelector('.stages-slider__play-button');
            const $__pagination = $__stagesSwiper.querySelector('.swiper-pagination');

            slide.addEventListener('click', (event) => {
                if (event.target == $__sliderPlayButton && $__sliderVideo.paused == true) {
                    $__sliderVideo.play();

                    $__sliderVideo.controls = true;

                    $__sliderPoster.style.display = 'none';
                    $__sliderTitle.style.display = 'none';
                    $__sliderButtonPrev.style.display = 'none';
                    $__sliderButtonNext.style.display = 'none';
                    $__sliderPlayButton.style.display = 'none';
                    $__pagination.style.display = 'none';


                    $__sliderVideo.addEventListener('ended', (event) => {
                        $__sliderPoster.style.display = 'block';
                        $__sliderTitle.style.display = 'flex';
                        $__sliderButtonPrev.style.display = 'block';
                        $__sliderButtonNext.style.display = 'block';
                        $__sliderPlayButton.style.display = 'block';
                        $__pagination.style.display = 'block';
                    }, false);
                } else {
                    $__sliderVideo.pause();
                    $__sliderVideo.controls = false;
                    $__sliderButtonPrev.style.display = 'block';
                    $__sliderButtonNext.style.display = 'block';
                    $__sliderPlayButton.style.display = 'block';
                }
            }, false);
        });
    }
});
/* ======= stages-slider END ======= */
