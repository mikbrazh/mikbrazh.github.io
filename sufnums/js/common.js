$(document).ready(function()
{
// -> ИНИЦИАЛИЗАТОРЫ
//Clipboard
var btnClipboard = new Clipboard('.btn-clipboard');
// <- ИНИЦИАЛИЗАТОРЫ

function showSuccessBtn()
{
	$('.glyphicon-copy').css('display', 'none');
	$('.glyphicon-ok').css('display', 'block');

	setTimeout(function()
	{
		$('.glyphicon-copy').css('display', 'block');
		$('.glyphicon-ok').css('display', 'none');
	}, 500);
}

btnClipboard.on('success', function(event)
{
	event.clearSelection();
	showSuccessBtn();
});

// -> ГОРЯЧИЕ КЛАВИШИ
document.onkeydown = function(e)
{
	if ( e.ctrlKey && e.keyCode == 'C'.charCodeAt(0) )
	{
		$('#output-btn').trigger('click');
	}
	if ( ( e.ctrlKey && e.keyCode == 'V'.charCodeAt(0) ) || ( !$('.toggle-mnu, .menu__href, .dropdown-toggle, .top-line-right-block__account-btn, .top-line-right-block__enter-btn').is(':focus') && e.keyCode == 13 ) )
	{
		$('#get-num-btn').trigger('click');
	}
};
// <- ГОРЯЧИЕ КЛАВИШИ

// -> BOOTSTRAP TOOLTIPS
//Установка времени задержки для подсказок
$('.output-btn__tooltip-zone').tooltip({

	'delay': { show: 1000, hide: 50 }

});

$('.white-tooltip').tooltip({

	'delay': { show: 1300, hide: 50 }

});
// <- BOOTSTRAP TOOLTIPS

//WAYPOINTS OPEN
// Анимация текста по путевым точкам при прокрутки вниз
$('.tracked').waypoint(function() 
{
	var opacity = $(this.element).css('opacity');
	// var cls = $(this.element).attr('class');

	if (opacity != 1) { $(this.element).css('opacity', '1').addClass('fadeIn'); }

	return;

},
{
	offset: '80%'
});

// Появление кнопки прокрутки экрана наверх
$('.show-scroll-btn-point').waypoint(
{
	handler: function(direction)
	{
			if (direction == 'down')
		{
			$('.arrow-scroll-to-top').css('opacity', 1);
		}
		else if (direction == 'up')
		{
			$('.arrow-scroll-to-top').css('opacity', 0);
		}
	},

	offset: '80%'
});

// Анимация кружков в первой секции при прокрутки вниз
$('.circle').waypoint(function()
{
	$('.circle').each(function(index)
	{
		var ths = $(this);

		setInterval(function()
		{
			var opacity = $(ths).css('opacity');

			if (opacity != 1) { ths.css('opacity', '1').addClass('flipInY').addClass('opt-animation'); }

			return;

		}, 100*index);

	});

// Анимация знаков плюс в первой секции при прокрутки вниз
	$('.plus').each(function(index)
	{
		var ths = $(this);

		setInterval(function()
		{
			var opacity = $(ths).css('opacity');

			if (opacity != 1) { ths.css('opacity', '1').addClass('flipInY').addClass('opt-animation'); }

			return;

		}, 200*index);

	});

},
{
	offset: '75%'
});
//WAYPOINTS CLOSED

//SETTINGS MENU OPENED
// Анимация кнопки меню настроек
$(".toggle-mnu").click(function()
{

	$(this).toggleClass("on");

	return false;
});

// Анимация меню настроек
$(".toggle-mnu").click(function()
{

	var display = $(".left-menu").css('display');

	if ( $(this).hasClass('on') )
	{
		$(".left-menu").fadeIn(400);
	}
	else
	{
		$(".left-menu").fadeOut(400);
	}

});
//SETTINGS MENU CLOSED

// АНИМАЦИЯ СТРЕЛОК ПРОКРУТКИ ВВЕРХ/ВНИЗ В СЕКЦИЯХ OPEND
$('.header-arrow-bottom').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height()

	}, 'slow');

	return false;

});

$('.section-1-arrow-top').click( function() {

	$('html, body').animate({

		scrollTop: 0

	}, 'slow');

	return false;

});

$('.section-1-arrow-bottom').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height()

	}, 'slow');

	return false;

});

$('.section-2-arrow-top').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height()

	}, 'slow');

	return false;

});

$('.section-2-arrow-bottom').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height() + $('.section-2').height()

	}, 'slow');

	return false;

});

$('.section-3-arrow-top').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height()

	}, 'slow');

	return false;

});

$('.section-3-arrow-bottom').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height() + $('.section-2').height() + $('.section-3').height()

	}, 'slow');

	return false;

});

$('.section-4-arrow-top').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height() + $('.section-2').height()

	}, 'slow');

	return false;

});

$('.section-4-arrow-bottom').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height() + $('.section-2').height() + $('.section-3').height() + $('.section-4').height() + 5

	}, 'slow');

	return false;

});

$('.section-5-arrow-top').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height() + $('.section-2').height() + $('.section-3').height()

	}, 'slow');

	return false;

});

$('.bottom-line-href-wrapper, .arrow-scroll-to-top').click( function() {

	$('html, body').animate({

		scrollTop: 0

	}, 'slow');

	return false;

});
// АНИМАЦИЯ СТРЕЛОК ПРОКРУТКИ ВВЕРХ/ВНИЗ В СЕКЦИЯХ CLOSED

// АНИМАЦИЯ ПУНКТОВ МЕНЮ OPEND
$('.menu__href-about-project').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height()

	}, 'slow');

	return false;

});

$('.menu__href-instraction').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height() + $('.section-2').height() + $('.section-3').height() + $('.section-4').height() + 10

	}, 'slow');

	return false;

});

$('.menu__href-account').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height() + $('.section-2').height() + $('.section-3').height()

	}, 'slow');

	return false;

});

$('.instraction').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height() + $('.section-2').height() + $('.section-3').height() + $('.section-4').height()

	}, 'slow');

	return false;

});

$('.menu__href-instraction-footer').click( function() {

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height() + $('.section-2').height() + $('.section-3').height()
	}, 'slow');

	$('html, body').animate({

		scrollTop: $('.header').height() + $('.section-1').height() + $('.section-2').height() + $('.section-3').height() + $('.section-4').height() + 10

	}, 'slow');

	setTimeout( function() {
		if( $('.how-to-use-header').hasClass('fadeIn') )
				{
					$('.how-to-use-header').removeClass('fadeIn').addClass('tada');
				}
		else if( $('.how-to-use-header').hasClass('tada') )
				{
					$('.how-to-use-header').removeClass('tada');
					setTimeout( function() { $('.how-to-use-header').addClass('tada'); }, 200)
				}

	}, 1500);


	return false;

});
// АНИМАЦИЯ ПУНКТОВ МЕНЮ CLOSED

// Изменение размера блока "Об авторе" и поменять местами кнопки меню при изменени размера экрана.
$(document).ready(function() {

	swapMenuElems();
	resizeAboutTheAuthorBlock();
	resizeAboutTheAuthorBtn();

	setScrollTopArrowPosition();

});

$(window).resize(function() {

	swapMenuElems();
	resizeAboutTheAuthorBlock();
	resizeAboutTheAuthorBtn();

	setScrollTopArrowPosition();

});

$('#alert-message__btn').click(function()
{
	$('#alert-message').fadeOut(500);
});

// ФУНКЦИИ

// Меняет местами кнопки меню при изменени размера экрана (float: right fix).
function swapMenuElems()
{
	if ($(window).width() < 768)
	{
		$('.dropdown-menu-sm').insertAfter( $('.dropdown-menu-sm').next() );
	}
	else if ( $(window).width() >= 768 )
	{
		$('.dropdown-menu-sm').insertBefore( $('.dropdown-menu-sm').prev() );
	}
}

// Изменение размера блока "Об авторе" при изменении размера экрана.
function resizeAboutTheAuthorBlock()
{
	if ($(window).width() < 831)
	{
		$('.modal-popup').css('width', $(window).width() - 30);
	}
	else if ($(window).width() >= 831 )
	{
		$('.modal-popup').css('width', '800');
	}
}

// Изменение размера кнопок в блоке "Об авторе" при изменении размера экрана.
function resizeAboutTheAuthorBtn()
{
	if ($(window).width() < 341)
	{
		$('.donate-btn').addClass('btn-sm');
		$('.message-to-the-author').addClass('btn-sm');
		$('.about-the-author-submit-btn').addClass('btn-sm');
	}
	else
	{
		if( $('.donate-btn').hasClass('btn-sm') )
		{
			$('.donate-btn').removeClass('btn-sm');
		}

		if( $('.message-to-the-author').hasClass('btn-sm') )
		{
			$('.message-to-the-author').removeClass('btn-sm');
		}

		if( $('.about-the-author-submit-btn').hasClass('btn-sm') )
		{
			$('.about-the-author-submit-btn').removeClass('btn-sm');
		}
	}
}

// Рассчитывает позиционирование Left для кнопки прокрутки наверх.
function setScrollTopArrowPosition()
{

	$('.arrow-scroll-to-top').css('left', $(window).width() - 120);

	if ($(window).width() < 1200 && $(window).width() > 767)
		{
			$('.arrow-scroll-to-top').css('left', $(window).width() - 90);
		}
	else if ($(window).width() < 768)
	{
		$('.arrow-scroll-to-top').css('left', $(window).width() - 70);
	}

}

// Появление попапа donate
$('.donate-btn').click(function()
{
	$('.donate-bg').css('visibility', 'visible').css('background', 'rgba(0, 0, 0, .8)');
	$('.donate').css('visibility', 'visible').css('opacity', '1');
});

$('.donate-bg').click(function()
{
	$('.donate-bg').css('visibility', 'hidden').css('background', 'rgba(0, 0, 0, 0)');
	$('.donate').css('visibility', 'hidden').css('opacity', '0');
});

//Ajax отправка формы обратной связи
$('#form-msg').submit(function()
	{

		$.ajax(
		{
			type: 'POST',
			url: '/php/mail.php',
			data: $(this).serialize()
		}).done(function()
		{
			var resText = $('#form-msg').attr('result-text');
			alert(resText);
		});

		return false;
	});

});
