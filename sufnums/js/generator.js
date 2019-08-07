;(function() {

// -> ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
// Включение / отключение элементов формы, установка / снятие чекбоксов
	var elemsStateSwitcher = function(elems, property, value)
{
	var max = arguments.length;
	var val = arguments[max - 1];
	var prop = arguments[max - 2];

	for (var i = 0;  i < max - 2; i++)
	{
		arguments[i].prop(prop, val);
	}
};

var makeMonospace = function(elem)
{
	elem.addClass('monospace');
}

var makeFont
// <- ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
// ---------------------------

// -> ОБЪЯВЛЕНИЕ ФУНКЦИЙ
// Генерирация случайного числа, диапазон не установлен
function getRandNum(min, max)
{
	var randNum = min + Math.floor( Math.random() * (max + 1 - min) );
	return randNum;
}

// Точная проверка переменной на число - не считает числом пробельную строку, логические, специальные значения, а также "отсекает" Infinity
function isNum(n)
{
	return !isNaN( parseFloat(n) ) && isFinite(n);
}

// Появление подсказок для незаполненных форм
function showAlertPopover(elem, messageText)
{
	// Добавляем дополнительную проверку на открытое меню, чтобы избежать бага появляющихся поповеров в левом углу при закрытом меню
	if ( !$('#toggle-mnu').hasClass('on') ) 
	{
		return;
	}
	else
	{
		if(messageText) { elem.attr('data-content', messageText); }

		// $(elem).popover();
		$(elem).popover('show');
	}
}

// Проверка установки определенных интервалов
function checkStaticIntervals(sufCheck, extCheck)
	{
		var minVal = $('#select-min').val();
		var maxVal = $('#select-max').val();

		var selectMinMsgAlrtTxt = $('#select-min').attr('select-min_msg-alrt-txt');
		var selectMaxMsgAlrtTxt = $('#select-max').attr('select-max_msg-alrt-txt');

		var selectMinMsgErrTxt = $('#select-min').attr('select-min_msg-err-txt');

		if ( isNum(maxVal) && !isNum(minVal) )
		{
			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента меньше 2px, то делаем return
			if ( !( $('#select-min').offset().top - $(window).scrollTop() <= 2 ) )
			{
				showAlertPopover( $('#select-min'), selectMinMsgAlrtTxt );
			}

			res = outputMsgErrTxt;
			makeMonospace( $('output') );

			return;
		}
		else if ( !isNum(maxVal) && isNum(minVal) )
		{
			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента меньше 2px, то делаем return
			if ( !( $('#select-max').offset().top - $(window).scrollTop() <= 2 ) )
			{
				showAlertPopover( $('#select-max'), selectMaxMsgAlrtTxt );
			}

			res = outputMsgErrTxt;
			makeMonospace( $('output') );

			return;
		}
		else if (+minVal >= +maxVal)
		{
			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента меньше 2px, то делаем return
			if ( !( $('#select-min').offset().top - $(window).scrollTop() <= 2 ) )
			{
				showAlertPopover( $('#select-min'), selectMinMsgErrTxt );
			}

			res = outputMsgErrTxt;
			makeMonospace( $('output') );

			return;
		}
		else if ( isNum(minVal) && isNum(maxVal) )
		{
			defaultMinVal = +minVal;
			defaultMaxVal = +maxVal;
		}

		res = getRandNum( defaultMinVal, defaultMaxVal );
		sufCheck();
		extCheck();
	}

// Проверка установки пользовательских интервалов
function checkUserIntervals(sufCheck, extCheck)
{
	var minVal = $('#min-val').val();
	var maxVal = $('#max-val').val();

	if ( isNum(maxVal) && !isNum(minVal) )
	{
		// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента меньше 2px, то делаем return
		if ( !( $('#min-val').offset().top - $(window).scrollTop() <= 2 ) )
		{
			showAlertPopover( $('#min-val'), minValMsgAlrtTxt );
		}

		res = outputMsgErrTxt;
		makeMonospace( $('output') );

		return;
	}
	else if ( !isNum(maxVal) && isNum(minVal) )
	{
		// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента меньше 2px, то делаем return
		if ( !( $('#max-val').offset().top - $(window).scrollTop() <= 2 ) )
		{
			showAlertPopover( $('#max-val'), maxValMsgAlrtTxt );
		}

		res = outputMsgErrTxt;
		makeMonospace( $('output') );

		return;
	}
	else if ( !isNum(maxVal) && !isNum(minVal) )
	{
		if ( $('#user-suffix-checkbox').prop('checked') && $('#user-suffix-value').val() == '' && $('#user-extension-checkbox').prop('checked') && $('#user-extension-value').val() == '' )
		{
			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента больше 2px, то запускаем функцию
			if ( !($('#min-val').offset().top - $(window).scrollTop() <= 2) )
			{
				showAlertPopover( $('#min-val'), minValMsgAlrtTxt );
			}

			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента больше 2px, то запускаем функцию
			if ( !($('#max-val').offset().top - $(window).scrollTop() <= 2) )
			{
				showAlertPopover( $('#max-val'), maxValMsgAlrtTxt );
			}

			showAlertPopover( $('#user-suffix-value'), userSuffixValueMsgAlrtTxt );
			showAlertPopover( $('#user-extension-value'), userExtensionValueMsgAlrtTxt );
		}
		else if ( $('#user-suffix-checkbox').prop('checked') && $('#user-suffix-value').val() == '' )
		{
			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента больше 2px, то запускаем функцию
			if ( !($('#min-val').offset().top - $(window).scrollTop() <= 2) )
			{
				showAlertPopover( $('#min-val'), minValMsgAlrtTxt );
			}

			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента больше 2px, то запускаем функцию
			if ( !($('#max-val').offset().top - $(window).scrollTop() <= 2) )
			{
				showAlertPopover( $('#max-val'), maxValMsgAlrtTxt );
			}

			showAlertPopover( $('#user-suffix-value'), userSuffixValueMsgAlrtTxt );
		}
		else if ( $('#user-extension-checkbox').prop('checked') && $('#user-extension-value').val() == '' )
		{
			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента больше 2px, то запускаем функцию
			if ( !($('#min-val').offset().top - $(window).scrollTop() <= 2) )
			{
				showAlertPopover( $('#min-val'), minValMsgAlrtTxt );
			}

			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента больше 2px, то запускаем функцию
			if ( !($('#max-val').offset().top - $(window).scrollTop() <= 2) )
			{
				showAlertPopover( $('#max-val'), minValMsgAlrtTxt );
			}

			showAlertPopover( $('#user-extension-value'), userExtensionValueMsgAlrtTxt );
		}
		else
		{
			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента больше 2px, то запускаем функцию
			if ( !($('#min-val').offset().top - $(window).scrollTop() <= 2) )
			{
				showAlertPopover( $('#min-val'), minValMsgAlrtTxt );
			}

			// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента больше 2px, то запускаем функцию
			if ( !($('#max-val').offset().top - $(window).scrollTop() <= 2) )
			{
				showAlertPopover( $('#max-val'), minValMsgAlrtTxt );
			}

			res = outputMsgErrTxt;
			makeMonospace( $('output') );

			return;
		}
	}
	else if ( +minVal >= +maxVal )
	{
		// Проверка расcтояния от верха окна до элемента. Если расcтояние до элемента меньше 2px, то делаем return
		if ( !( $('#min-val').offset().top - $(window).scrollTop() <= 2 ) )
		{
			showAlertPopover( $('#min-val'), minValMsgErrTxt );
		}

		res = outputMsgErrTxt;
		makeMonospace( $('output') );

		return;
	}
	else if ( isNum(minVal) && isNum(maxVal) )
	{
		defaultMinVal = +minVal;
		defaultMaxVal = +maxVal;
	}

	res = getRandNum( defaultMinVal, defaultMaxVal );
	sufCheck();
	extCheck();
}

function checkStaticSuffixVal()
{
	if ( $('#suf-radio-1').prop('checked') )
	{
		res = res + '.a';
	}
	else if ( $('#suf-radio-2').prop('checked') )
	{
		res = res + '.b';
	}
	else if ( $('#suf-radio-3').prop('checked') )
	{
		res = res + '.s';
	}
		return res;
}

function checkUserSuffixVal()
{
	var val = $('#user-suffix-value').val();


	if ( $('#user-suffix-checkbox').prop('checked') && $('#user-suffix-value').val() == '' && $('#user-extension-checkbox').prop('checked') && $('#user-extension-value').val() == '' )
	{
		showAlertPopover( $('#user-suffix-value'), userSuffixValueMsgAlrtTxt );
		showAlertPopover( $('#user-extension-value'), userExtensionValueMsgAlrtTxt );
	}

	else if ( $('#user-suffix-value').val() == '' )
	{
		showAlertPopover( $('#user-suffix-value'), userSuffixValueMsgAlrtTxt );

		res = outputMsgErrTxt;
		makeMonospace( $('output') );

		return;
	}
	else
	{
		res = res + '.' + val;

		return res;
	}
}

function checkStaticExtensionVal()
{
	if ( $('#user-suffix-checkbox').prop('checked') && ( $('#user-suffix-value').val() == '' ) )
	{
			res = outputMsgErrTxt;
			makeMonospace( $('output') );

			return;
	}
	else if ( $('#ext-radio-1').prop('checked') )
	{
		res = res + '.jpg';
	}
	else if ( $('#ext-radio-2').prop('checked') )
	{
		res = res + '.png';
	}
	else if ( $('#ext-radio-3').prop('checked') )
	{
		res = res + '.svg';
	}
		return res;
}

function checkUserExtensionVal()
{
	if ( $('#user-suffix-checkbox').prop('checked') && ( $('#user-suffix-value').val() == '' ) )
	{
			res = outputMsgErrTxt;
			makeMonospace( $('output') );

			return;
	}
	else if ( $('#user-extension-value').val() == '' )
	{
		showAlertPopover( $('#user-extension-value'), userExtensionValueMsgAlrtTxt );

		res = outputMsgErrTxt;
		makeMonospace( $('output') );

		return;
	}
	else
	{
		var val = $('#user-extension-value').val();

		res = res + '.' + val;

		return res;
	}
}

// Центрирование элемента на экране
// function centerElement(elem)
// {
// 	elem.css('left', $(window).width() / 2 - elem.width() / 2 );
// }

// Покрасить элемент в другой цвет
// function colorElement(elem, color)
// {
// 	elem.css('color', color);
// }

// Удаление всплывающих подсказок на определенных инпутах
function destroyAlarmPopover(clickedElem, elemWithPopover)
{

	var args = arguments;
	var maxArgs = arguments.length;

	clickedElem.click(function()
	{
		for (var i = 1; i < maxArgs; i++)
		{
			if (args[i].attr('aria-describedby'))
			{
				setTimeout(function(args)
				{
					args[i].popover('destroy');
				}.call(null, args), 500);
			}
		}
	});

	return;
}
// <- ОБЪЯВЛЕНИЕ ФУНКЦИЙ

// -> ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
var defaultMinVal = 100000,
		defaultMaxVal = 999999;

var res;

// Вытягиваем текст сообщения об ошибках для popup-ов из html
var minValMsgAlrtTxt = $('#min-val').attr('min-val_msg-alrt-txt');
var maxValMsgAlrtTxt = $('#max-val').attr('max-val_msg-alrt-txt');

var minValMsgErrTxt = $('#min-val').attr('min-val_msg-err-txt');

var outputMsgErrTxt = $('#output').attr('output_msg-err-txt');
var userSuffixValueMsgAlrtTxt = $('#user-suffix-value').attr('user-suffix-value_msg-alrt-txt');

var userExtensionValueMsgAlrtTxt = $('#user-extension-value').attr('user-extension-value_msg-alrt-txt');
// <- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ

// -> СБРОС НАСТРОЕК ПРИ ОБНОВЛЕНИИ СТРАНИЦЫ И ГЕНЕРАЦИЯ ЦИСЛА
$(document).ready(function()
{
	// Генерация случайного шестизначного числа при загрузки страницы
	$('output').prop( 'value', getRandNum(defaultMinVal, defaultMaxVal) );

	$('input[type=checkbox], input[type=radio]').prop('disabled', false).prop('checked', false);
	$('#min-val, #max-val, .user-suffix-value, .user-extension-value').prop('disabled', true);
});
// <- СБРОС НАСТРОЕК ПРИ ОБНОВЛЕНИИ СТРАНИЦЫ

// -> АКТИВАЦИЯ ФОРМ ПРИ НАЖАТИИ НА ЧЕКБОКСЫ
$('#user-value-checkbox').click(function()
{
	if (this.checked)
	{
		$('#min-val, #max-val').prop('disabled', false);
		$('.left-menu-select').prop('disabled', true);
	}
	else
	{
		$('#min-val, #max-val').prop('disabled', true);
		$('.left-menu-select').prop('disabled', false);
	}
});

$('.user-suffix-checkbox').click(function()
{
	if (this.checked)
	{
		$('.user-suffix-value').prop('disabled', false);
		$('#suf-radio-1, #suf-radio-2, #suf-radio-3').prop('disabled', true);
	}
	else
	{
		$('.user-suffix-value').prop('disabled', true);
		$('#suf-radio-1, #suf-radio-2, #suf-radio-3').prop('disabled', false);
	}
});

$('.user-extension-checkbox').click(function()
{
	if (this.checked)
	{
		$('.user-extension-value').prop('disabled', false);
		$('#ext-radio-1, #ext-radio-2, #ext-radio-3').prop('disabled', true);


	}
	else
	{
		$('.user-extension-value').prop('disabled', true);
		$('#ext-radio-1, #ext-radio-2, #ext-radio-3').prop('disabled', false);
	}
});

$('input[type=radio]').click(function()
{
	if ( $(this).attr('checked') )
	{
		$(this).removeAttr('checked');
	}
	else
	{
		$(this).attr('checked', 'checked');
	}
});
// <- АКТИВАЦИЯ ФОРМ ПРИ НАЖАТИИ НА ЧЕКБОКСЫ

// -> ГЕНЕРАЦИЯ СЛУЧАЙНОГО ЧИСЛА
$('#get-num-btn').click(function()
{
	if ( $('output').hasClass('monospace') ) { $('output').removeClass('monospace'); }

	defaultMinVal = 100000;
	defaultMaxVal = 999999;

	res = getRandNum( defaultMinVal, defaultMaxVal );

	if ( $('#user-value-checkbox').prop('checked') ) /*Включить пользовательские значения - ВКЛ.*/
	{

		if ( $('#user-suffix-checkbox').prop('checked') ) /*Добавить произвольный суффикс - ВКЛ.*/
		{
			if ( $('#user-extension-checkbox').prop('checked') ) /*Добавить произвольное расширение - ВКЛ.*/
			{
				checkUserIntervals(checkUserSuffixVal, checkUserExtensionVal);
			}
			else /*Добавить произвольное расширение - ВЫКЛ.*/
			{
				checkUserIntervals(checkUserSuffixVal, checkStaticExtensionVal);
			}
		}

		else /*Добавить произвольный суффикс - ВЫКЛ.*/
		{
			if ( $('#user-extension-checkbox').prop('checked') ) /*Добавить произвольное расширение - ВКЛ.*/
			{
				checkUserIntervals(checkStaticSuffixVal, checkUserExtensionVal);
			}
			else /*Добавить произвольное расширение - ВЫКЛ.*/
			{
				checkUserIntervals(checkStaticSuffixVal, checkStaticExtensionVal);
			}
		}
	}

	else
	{
		if ( $('#user-suffix-checkbox').prop('checked') ) /*Добавить произвольный суффикс - ВКЛ.*/
		{
			if ( $('#user-extension-checkbox').prop('checked') ) /*Добавить произвольное расширение - ВКЛ.*/
			{
				checkStaticIntervals(checkUserSuffixVal, checkUserExtensionVal);
			}
			else
			{
				checkStaticIntervals(checkUserSuffixVal, checkStaticExtensionVal);
			}
		}
		else /*Добавить произвольный суффикс - ВЫКЛ.*/
		{
			if ( $('#user-extension-checkbox').prop('checked') ) /*Добавить произвольное расширение - ВКЛ.*/
			{
				checkStaticIntervals(checkStaticSuffixVal, checkUserExtensionVal);
			}
			else /*Добавить произвольное расширение - ВЫКЛ.*/
			{
				checkStaticIntervals(checkStaticSuffixVal, checkStaticExtensionVal);
			}
		}
	}

	$('output').html(res);

});

// <- ГЕНЕРАЦИЯ СЛУЧАЙНОГО ЧИСЛА

// Удаление всплывающих подсказок на незаполненных инпутах
$('#left-menu').click(function(event)
{
	var target = event.target;

	if ($(target).attr('aria-describedby'))
	{
		setTimeout(function()
		{
			$(target).popover('destroy');
		}, 500);
	}

	return;
});

// Удаление всплывающей подсказки "Минимальное число должно быть меньше максимального" при нажатии на #select-max
$('#select-max').click(function()
{
	if ( $('#select-min').attr('data-content') == 'Минимальное значение должно быть меньше максимального!' )
	{
		setTimeout(function()
		{
			$('#select-min').popover('destroy');
		}, 500);
	}
});

// Удаление всплывающей подсказки "Минимальное число должно быть меньше максимального" при нажатии на #select-max
$('#max-val').click(function()
{
	if ( $('#min-val').attr('data-content') == 'Минимальное значение должно быть меньше максимального!' )
	{
		setTimeout(function()
		{
			$('#min-val').popover('destroy');
		}, 500);
	}
});

// Сброс значений меню при нажатии на кнопку "По умолчанию"
$('#left-menu-set-to-default-btn').click(function()
{
	$('input[type=checkbox], input[type=radio]').prop('disabled', false).prop('checked', false);
	$('#min-val, #max-val, .user-suffix-value, .user-extension-value').prop('disabled', true).val('');
	$('#option-min-text, #option-max-text').prop('selected', 'selected');
});

// Удаление всплывающих подсказок на определенных инпутах
destroyAlarmPopover( $('#user-suffix-checkbox'), $('#user-suffix-value') );
destroyAlarmPopover( $('#user-extension-checkbox'), $('#user-extension-value') );
destroyAlarmPopover( $('#user-value-checkbox'), $('#min-val'), $('#max-val'), $('#select-min'), $('#select-max'));
destroyAlarmPopover( $('#toggle-mnu'), $('#min-val'), $('#max-val'), $('#select-min'), $('#select-max'), $('#user-suffix-value'), $('#user-extension-value') );
destroyAlarmPopover( $('#left-menu-set-to-default-btn'), $('#min-val'), $('#max-val'), $('#select-min'), $('#select-max'), $('#user-suffix-value'), $('#user-extension-value') );

})();

