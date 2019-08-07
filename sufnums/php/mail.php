<?php

$method = $_SERVER['REQUEST_METHOD'];

$sitename = "sufnums.ru";
$to = "mikkorab@gmail.com";
$subject= "Письмо с сайта \"$sitename\"";

// Переключает чередование цветов ячеек таблицы
$color = true;

if ( $method === 'POST' )
{

	$email = trim($_POST["email"]);
	$name  = trim($_POST["name"]);
	$topic  = trim($_POST["topic"]);
	$text = trim($_POST["text"]);

	$message .= "" . ( ($color = !$color) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid; width: 15%'><b>Имя:</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
		</tr>";

	$message .= "" . ( ($color = !$color) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		<td style='padding: 10px; border: #e9e9e9 1px solid; width: 15%'><b>E-mail:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$email</td>
	</tr>";

	$message .= "" . ( ($color = !$color) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		<td style='padding: 10px; border: #e9e9e9 1px solid; width: 15%'><b>Тема:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$topic</td>
	</tr>";

	$message .= "" . ( ($color = !$color) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		<td style='padding: 10px; border: #e9e9e9 1px solid;vertical-align: top; width: 15%'><b>Текст сообщения:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$text</td>
	</tr>";

}
else if ( $method === 'GET' )
{

	$email = trim($_GET["email"]);
	$name  = trim($_GET["name"]);
	$topic  = trim($_GET["topic"]);
	$text = trim($_GET["text"]);

	$message .= "" . ( ($color = !$color) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid; width: 15%'><b>Имя:</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
		</tr>";

	$message .= "" . ( ($color = !$color) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		<td style='padding: 10px; border: #e9e9e9 1px solid; width: 15%'><b>E-mail:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$email</td>
	</tr>";

	$message .= "" . ( ($color = !$color) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		<td style='padding: 10px; border: #e9e9e9 1px solid; width: 15%'><b>Тема:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$topic</td>
	</tr>";

	$message .= "" . ( ($color = !$color) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		<td style='padding: 10px; border: #e9e9e9 1px solid;vertical-align: top; width: 15%'><b>Текст сообщения:</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$text</td>
	</tr>";

}

$message = "<table style='width: 100%;'>$message</table>";

// Кодирование в base64, чтобы небыло кракозябры :)
function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

// Заголовки письма
$headers = "MIME-Version: 1.0" . PHP_EOL .
					 "Content-Type: text/html; charset=utf-8" . PHP_EOL .
					 'From: '.adopt($name).' <'.$email.'>' . PHP_EOL .
					 'Reply-To: '.$email.'' . PHP_EOL;

mail($to, adopt($subject), $message, $headers );
