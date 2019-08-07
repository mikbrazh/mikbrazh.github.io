// DOCUMENT READY OPENED
$(document).ready(function() {

// ИНИЦИАЛИЗАТОРЫ OPENED
// Инициализатор карусели jCarouselLite выбора хлеба в section-1
$(".nonCircular .section-1-carousel-items").jCarouselLite( {
	btnNext: ".section-1-carousel__next-btn",
	btnPrev: ".section-1-carousel__prev-btn",
	// circular: false,
	speed: 400,
	visible: 3
});

// Инициализатор карусели owlCarousel мастер-классов в section-4
$(".owl-carousel").owlCarousel( {
	loop: true,
	nav: true,
	smartSpeed: 800,
	// autoWidth: true,
	navText: ['<div href="#" class="section-1-carousel__prev-btn master-cls"><div class="section-1__arrow-left"></div></div>', '<div href="#" class="section-1-carousel__next-btn master-cls"><div class="section-1__arrow-right"></div></div>'],
	responsive:
	{
		0:
		{
			items: 1
		},
		768:
		{
			items: 2
		},
		1200:
		{
			items: 3
		}
	}
});

// Инициализатор скролбара корзины – mCustomScrollbar 
$('#scroll-aria-wrap').mCustomScrollbar( {
	axis: 'y',
	theme: 'rounded'
});

// Инициализатор бокового меню – mmenu
$('#menu-sm').mmenu({
	extensions: ['theme-black', 'fx-menu-slide', ],
	autoHeight: true,
	offCanvas:
	{
		position: 'right',
		moveBackground: true
	}
});

var API = $('#menu-sm').data('mmenu');

$('.hamburger').click(function()
{
	if( $(this).hasClass('is-active') )
	{
		API.close();
	}

		API.open();
});

API.bind('open:finish', function()
{
	$('.hamburger').toggleClass('is-active');
});

API.bind('close:finish', function()
{
	$('.hamburger').toggleClass('is-active');
});
// ИНИЦИАЛИЗАТОРЫ CLOSED

// ФУНКЦИИ OPENED
// Изменение html элемента при указанном разрешении экрана, используется для растановки переносов заголовков на др. строку
function wordWrap(elem, newHtml, oldHtml, resolution)
{
	if ($(window).width() < resolution)
	{
		$(elem).html(newHtml);
	}
	else if ($(window).width() >= resolution)
	{
		$(elem).html(oldHtml);
	}
}

// Прокрутка вниз на нужную высоту
function scroll(height)
{
	$('html, body').animate({

		scrollTop: height

	}, 'slow');

	return false;
}
// ФУНКЦИИ CLOSED

//АНИМАЦИИ OPENED
// Анимация заголовка секции в section-1 при прокрутки вниз
$('.main-screen .section-header').waypoint(function()
{
	$('.main-screen .section-header').css('opacity', '1');
},

{
	offset: '85%'
});

// Анимация кружков айтемов карусели в section-1 при прокрутки вниз
$('.section-1-carousel__circle').waypoint(function()
{
	// $('.section-1-carousel__circle').each(function(index)
	// {
	// 	var ths = $(this);

	// 	setInterval(function()
	// 	{
	// 		var opacity = $(ths).css('opacity');

	// 		if (opacity != 1)
	// 		{
	// 			ths.css('opacity', '1');
	// 		}
	// 		else if ($(ths).hasClass('animated'))
	// 		{
	// 			ths.addClass('flipInY');
	// 		}

	// 		return;

	// 	}, 250*index);

	// });

	$('.section-1-carousel__circle').css('opacity', '1');

},

{
	offset: '90%'
});

// Анимация текстовых блоков айтемов карусели в section-1 при прокрутки вниз
$('.sec-1-car-cont-wrap').waypoint(function()
{
	$('.sec-1-car-cont-wrap').css('opacity', '1');
},

{
	offset: '75%'
});

// Анимация заголовка секции в section-2 при прокрутки вниз
$('.section-2 .section-header').waypoint(function()
{
	$('.section-2 .section-header').css('opacity', '1');
},

{
	offset: '85%'
});

// Анимация текстового блока в section-2 при прокрутки вниз
$('.section-2-text p').waypoint(function()
{
	$('.section-2-text p').css('opacity', '1');
	$('.section-2-text-divider').css('opacity', '1');
},

{
	offset: '65%'
});

// Анимация изображения повара в section-2 при прокрутки вниз
// $('.section-2__baker').waypoint(function()
// {
// 	$('.section-2__baker').css('opacity', '1').addClass('slideInUp');
// },

// {
// 	offset: '60%'
// });

// Анимация изображения корзины с хлебом в section-2 при прокрутки вниз
// $('.section-2__breadbasket').waypoint(function()
// {
// 	$('.section-2__breadbasket').css('opacity', '1').addClass('pulse');
// },

// {
// 	offset: '75%'
// });

// Анимация заголовка секции в section-3 при прокрутки вниз
$('.section-3 .section-header').waypoint(function()
{
	$('.section-3 .section-header').css('opacity', '1');
},

{
	offset: '85%'
});

// Анимация фотогалереи в section-3 при прокрутки вниз
// $('.photo-overlay').waypoint(function()
// {
// 	$('.photo-overlay').each(function(index)
// 	{
// 		var ths = $(this);

// 		setInterval(function()
// 		{
// 			var opacity = $(ths).css('opacity');

// 			if (opacity != 1)
// 			{
// 				ths.css('opacity', '1').addClass('flipInY');
// 			}

// 			return;

// 		}, 500*index);

// 	});

// 	$('.photo-overlay').css('opacity', '1').addClass('fadeIn');
// },

// {
// 	offset: '55%'
// });

// Анимация фотогалереи в section-3 при прокрутки вниз
$('.ph-ov-1').waypoint(function()
{
	$('.ph-ov-1').css('opacity', '1').addClass('slideInLeft');
},

{
	offset: '65%'
});

$('.ph-ov-3').waypoint(function()
{
	$('.ph-ov-3').css('opacity', '1').addClass('slideInRight');
},

{
	offset: '65%'
});

$('.ph-ov-4').waypoint(function()
{
	$('.ph-ov-4').css('opacity', '1').addClass('slideInLeft');
},

{
	offset: '65%'
});

$('.ph-ov-6').waypoint(function()
{
	$('.ph-ov-6').css('opacity', '1').addClass('slideInRight');
},

{
	offset: '65%'
});

$('.ph-ov-2').waypoint(function()
{
	$('.ph-ov-2').css('opacity', '1').addClass('fadeIn');
},

{
	offset: '65%'
});

$('.ph-ov-5').waypoint(function()
{
	$('.ph-ov-5').css('opacity', '1').addClass('fadeIn');
},

{
	offset: '65%'
});

// Анимация заголовка секции в section-4 при прокрутки вниз
$('.section-4 .section-header').waypoint(function()
{
	$('.section-4 .section-header').css('opacity', '1');
},

{
	offset: '85%'
});

// Анимация текстового блока в section-4 при прокрутки вниз
$('.section-4-text p').waypoint(function()
{
	$('.section-4-text p').css('opacity', '1');
},

{
	offset: '85%'
});

// Анимация кружков айтемов карусели в section-4 при прокрутки вниз
$('.master-cls-item').waypoint(function()
{
	$('.master-cls-item').each(function(index)
	{
		var ths = $(this);

		setInterval(function()
		{
			var opacity = $(ths).css('opacity');

			if (opacity != 1)
			{
				ths.css('opacity', '1');
			}
			else if ($(ths).hasClass('animated'))
			{
				ths.addClass('flipInY');
			}

			return;

		}, 250*index);

	});
},

{
	offset: '90%'
});

// Анимация стрелок навигации в section-4 при прокрутки вниз
$('.section-1-carousel__prev-btn.master-cls').waypoint(function()
{
	$('.section-1-carousel__prev-btn.master-cls').css('opacity', '1');
	$('.section-1-carousel__next-btn.master-cls').css('opacity', '1');
},

{
	offset: '85%'
});

// Анимация заголовка секции в section-5 при прокрутки вниз
$('.s5-triangle-text .section-header').waypoint(function()
{
	$('.s5-triangle-text .section-header').css('opacity', '1');
},

{
	offset: '85%'
});

// Анимация текстового блока в section-5 при прокрутки вниз
$('.s5-triangle-text p').waypoint(function()
{
	$('.s5-triangle-text p').css('opacity', '1');
},

{
	offset: '75%'
});

// Анимация заголовка секции в section-5 при прокрутки вниз
$('.s5-content-2-wrap .section-header').waypoint(function()
{
	$('.s5-content-2-wrap .section-header').css('opacity', '1');
},

{
	offset: '85%'
});

// Анимация текстового блока в section-5 при прокрутки вниз
$('.s5-content-2-text').waypoint(function()
{
	$('.s5-content-2-text').css('opacity', '1');
},

{
	offset: '75%'
});

// Анимация формы обратной связи в section-5 при прокрутки вниз
$('.left-callback').waypoint(function()
{
	$('.left-callback').css('opacity', '1').addClass('fadeInLeftBig');;
	$('.right-callback').css('opacity', '1').addClass('fadeInRightBig');;
},

{
	offset: '65%'
});

// Анимация футера при прокрутки вниз
$('.main-footer .content .row').waypoint(function()
{
	$('.main-footer .content .row').css('opacity', '1').addClass('fadeIn');;
},

{
	offset: '65%'
});

// Выцветание оверлея на фотографиях при наведении мыши в section-3
$('.photo-overlay').mouseover(function() {
	$(this).find(":first").fadeOut(300);
});

$('.photo-overlay').mouseleave(function() {
	$(this).find(":first").fadeIn(300);
});

// Изменение курсора на grab при клике на изображение карусели в section-4
$('.master-cls-carousel img, .master-cls-carousel-btn').mousedown(function() {
	$(this).css('cursor', 'grab');
});

$('.master-cls-carousel img, .master-cls-carousel-btn').mouseup(function() {
	$(this).css('cursor', 'pointer');
});
//АНИМАЦИИ CLOSED

// Изменение bootstrap offset (отступа слева) телефонного номера в шапке
function changeOffset()
{
	if ( $(window).width() < 570 )
	{
		$('.phone').removeClass( 'col-xs-offset-6').addClass('col-xs-offset-1');
	}
	else if ( $(window).width() >= 570 )
	{
		$('.phone').removeClass( 'col-xs-offset-1').addClass('col-xs-offset-6');
	}
}

// Изменение числа отображения айтемов jCarouselLite в section-1
function changeCarouselItemsNums()
{
	if ($(window).width() < 768)
	{
		$(".nonCircular .section-1-carousel-items").jCarouselLite( {
			visible: 1
		});
	}
	else if ($(window).width() >= 768 && $(window).width() < 1200)
	{
		$(".nonCircular .section-1-carousel-items").jCarouselLite( {
			visible: 2
		});
	}
	else
	{
		$(".nonCircular .section-1-carousel-items").jCarouselLite( {
			visible: 3
		});
	}
}

wordWrap('.section-4 .section-header', 'НАШИ&nbsp;&nbsp;<br>МАСТЕР-КЛАССЫ', 'НАШИ&nbsp;&nbsp;МАСТЕР-КЛАССЫ', 440);
wordWrap('.s5-triangle-text .section-header', 'ОПЛАТА<br>И<br>ДОСТАВКА', 'ОПЛАТА&nbsp;&nbsp;И&nbsp;&nbsp;ДОСТАВКА', 440);

changeOffset();
changeCarouselItemsNums();

// Выполнить при изменении размера окна просмотра
$(window).resize(function() {
	changeOffset();
	changeCarouselItemsNums();
	wordWrap('.section-4 .section-header', 'НАШИ&nbsp;&nbsp;<br>МАСТЕР-КЛАССЫ', 'НАШИ&nbsp;&nbsp;МАСТЕР-КЛАССЫ', 440);
	wordWrap('.s5-triangle-text .section-header', 'ОПЛАТА<br>И<br>ДОСТАВКА', 'ОПЛАТА&nbsp;&nbsp;И&nbsp;&nbsp;ДОСТАВКА', 440);
	setScrollTopArrowPosition();
});

// Отключение автоматического показа слайдов на main-screen
$('#main-screen-carousel-generic').carousel({
	interval: 0
});

// Прокрутка вниз при нажатии на кнопку прокрутки вниз на гланом экране
$('.main-screen__arrow-down-wrap').on('click', function()
{
	scroll(780);
});

// Появление кнопки прокрутки экрана наверх
$('.show-scroll-btn-point').waypoint(
{
	handler: function(direction)
	{
			if (direction == 'down')
		{
			$('.arr-scroll-top-wrap').css('opacity', 1);
		}
		else if (direction == 'up')
		{
			$('.arr-scroll-top-wrap').css('opacity', 0);
		}
	},

	offset: '80%'
});

$('.arr-scroll-top-wrap').on('click', function()
{
	scroll(0);
});

// Появление дополнительной кнопки меню - гамбургера
$('.show-scroll-btn-point').waypoint(
{
	handler: function(direction)
	{
			if (direction == 'down')
		{
			$('button.add-hamb').css('opacity', 1);
		}
		else if (direction == 'up')
		{
			$('button.add-hamb').css('opacity', 0);
		}
	},

	offset: '80%'
});

// Рассчитывает позиционирование Left для кнопки прокрутки наверх.
function setScrollTopArrowPosition()
{
	$('.arr-scroll-top-wrap').css('left', $(window).width() - 120);

	if ($(window).width() < 1200 && $(window).width() > 767)
	{
		$('.arr-scroll-top-wrap').css('left', $(window).width() - 90);
	}
	else if ($(window).width() < 768)
	{
		$('.arr-scroll-top-wrap').css('left', $(window).width() - 60);
	}
}

setScrollTopArrowPosition();

// Прокрутка вниз при нажатии на пункты дополнительного - hamburger меню
// Нажатие на первый пункт меню
$('.item-1').click(function()
{

var API = $('#menu-sm').data('mmenu');

	var onFulfilled = setTimeout(function(){ API.close(); }, 500);
	var onRejected = function() { return false };

	var promise = new Promise(function(resolve, reject)
	{
		$('html, body').animate({

		scrollTop: $('.main-screen').height() - 50

	}, 'slow');
	});

	promise.then(onFulfilled, onRejected);
});

// Нажатие на второй пункт меню
$('.item-2').click(function()
{

var API = $('#menu-sm').data('mmenu');


	var onFulfilled = setTimeout(function(){ API.close(); }, 500);
	var onRejected = function() { return false };

	var promise = new Promise(function(resolve, reject)
	{
		$('html, body').animate({

		scrollTop: $('.main-screen').height() + $('.section-1').height()

	}, 'slow');
	});

	promise.then(onFulfilled, onRejected);
});

// Нажатие на третий пункт меню
$('.item-3').click(function()
{

var API = $('#menu-sm').data('mmenu');

	var onFulfilled = setTimeout(function(){ API.close(); }, 500);
	var onRejected = function() { return false };

	var promise = new Promise(function(resolve, reject)
	{
		$('html, body').animate({

		scrollTop: $('.main-screen').height() + $('.section-1').height() + $('.section-2').height() + 90

	}, 'slow');
	});

	promise.then(onFulfilled, onRejected);
});

// Нажатие на четвертый пункт меню
$('.item-4').click(function()
{

var API = $('#menu-sm').data('mmenu');

	var onFulfilled = setTimeout(function(){ API.close(); }, 500);
	var onRejected = function() { return false };

	var promise = new Promise(function(resolve, reject)
	{
		$('html, body').animate({

		scrollTop: $('.main-screen').height() + $('.section-1').height() + $('.section-2').height() + $('.section-3').height() + 120

	}, 'slow');
	});

	promise.then(onFulfilled, onRejected);
});

// Нажатие на пятый пункт меню
$('.item-5').click(function()
{

var API = $('#menu-sm').data('mmenu');

	var onFulfilled = setTimeout(function(){ API.close(); }, 500);
	var onRejected = function() { return false };

	var promise = new Promise(function(resolve, reject)
	{
		$('html, body').animate({

		scrollTop: $('.main-screen').height() + $('.section-1').height() + $('.section-2').height() + $('.section-3').height() + + $('.section-4').height() + 200

	}, 'slow');
	});

	promise.then(onFulfilled, onRejected);
});

});
// DOCUMENT READY CLOSED