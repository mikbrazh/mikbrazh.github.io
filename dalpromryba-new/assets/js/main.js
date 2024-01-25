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

        /* ======= Custom video play button START ======= */
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

            $__sliderVideo.addEventListener('play', (event) => {
                $__sliderVideo.controls = true;
                if ($__stagesSwiper.classList.contains('stages-sprats-swiper')) {
                    stagesSpratsSwiper.disable();
                }
                else if ($__stagesSwiper.classList.contains('stages-tuna-swiper')) {
                    stagesTunaSwiper.disable();
                }

                $__sliderPoster.classList.toggle('elem--hidden');;
                $__sliderTitle.classList.toggle('elem--hidden');;
                $__sliderButtonPrev.classList.toggle('elem--hidden');;
                $__sliderButtonNext.classList.toggle('elem--hidden');;
                $__sliderPlayButton.classList.toggle('elem--hidden');;
                $__pagination.classList.toggle('elem--hidden');;
            });

            $__sliderVideo.addEventListener('pause', (event) => {
                $__sliderVideo.controls = false;
                stagesSpratsSwiper.enable();

                $__sliderPoster.classList.toggle('elem--hidden');;
                $__sliderTitle.classList.toggle('elem--hidden');;
                $__sliderButtonPrev.classList.toggle('elem--hidden');;
                $__sliderButtonNext.classList.toggle('elem--hidden');;
                $__sliderPlayButton.classList.toggle('elem--hidden');;
                $__pagination.classList.toggle('elem--hidden');;
            });

            $__sliderVideo.addEventListener('ended', (event) => {
                $__sliderVideo.pause();
                $__sliderVideo.controls = false;
            });

            slide.addEventListener('click', (event) => {
                if (event.target == $__sliderPlayButton) {
                    $__sliderVideo.play();
                }
            });
        });
        /* ======= Custom video play button END ======= */
    }
    /* ======= stages-slider END ======= */
});
