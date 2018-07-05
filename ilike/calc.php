<?php

if ($_POST['sfera']) $sfera = $_POST['sfera'];
if ($_POST['sfera_roznica']) $sfera .= ' - '.$_POST['sfera_roznica'];
if ($_POST['sfera_obsluzhivanie']) $sfera .= ' - '.$_POST['sfera_obsluzhivanie'];
if ($_POST['sfera_uslugi']) $sfera .= ' - '.$_POST['sfera_uslugi'];
if ($_POST['service']) $service = $_POST['service'];
if ($_POST['sotrudnikov']) $sotrudnikov = $_POST['sotrudnikov'];
if ($_POST['pokupka']) $pokupka = $_POST['pokupka'];
if ($_POST['obslokacii']) $obslokacii = $_POST['obslokacii'];
if ($_POST['imya']) $imya = $_POST['imya'];
if ($_POST['email']) $email = $_POST['email'];
if ($_POST['phone']) $phone = $_POST['phone'];



$to = 'mail@gmail.com';
$subject = 'Калькулятор с сайта';
$message = 'Калькулятор с сайта';
if($sfera) $message.='<br>Сфера деятельности:: '.$sfera;
if($service) $message.='<br>Интересующая услуга: '.$service;
if($sotrudnikov) $message.='<br>Количество сотрудников: '.$sotrudnikov;
if($pokupka) $message.='<br>Совершать покупку?: '.$pokupka;
if($obslokacii) $message.='<br>Локация проведения исследования: '.$obslokacii;
if($imya) $message.='<br>Имя: '.$imya;
if($email) $message.='<br>E-mail: '.$email;
if($phone) $message.='<br>Телефон: '.$phone;
$headers = 'Content-type: text/html; charset=utf-8' . "\r\n";
$mail = mail ( $to , $subject , $message, $headers );

if ($mail) {
    echo '<span class="form_result__green">Запрос успешно отправлен</span>';
} else
    echo '<span class="form_result__red">При отправке запроса возникла ошибка</span>';

?>