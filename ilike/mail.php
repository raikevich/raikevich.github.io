<?php

$n=$p=$e=$m=0;

if($_POST['name']) { $name = $_POST['name']; $n=1}
if($_POST['phone']) { $phone = $_POST['phone']; $p=1}
if($_POST['mail']) { $mail = $_POST['mail']; $e=1}
if($_POST['message']) { $mes = $_POST['message']; $m=1}
$form = $_POST['form'];

$error = '';

if (!$name && $n==1) {
    $error .= '<span class="form_result__red">Введите свое имя</span><br>';
}
if (!$mail && $e==1) {
    $error .= '<span class="form_result__red">Введите свой e-mail</span><br>';
}

if ($error)
    echo $error;
else {
    $to = 'mail@gmail.com';
    $subject = 'Обратная связь с формы '.$form;
    $message = 'Обратная связь с формы '.$form;
    if($n==1) $message.='<br>Имя: '.$name;
    if($p==1) $message.='<br>Телефон: '.$phone;
    if($e==1) $message.='<br>E-mail: '.$mail;
    if($m==1) $message.='<br>Имя: '.$mes;
    $headers = 'Content-type: text/html; charset=utf-8' . "\r\n";
    $mail = mail ( $to , $subject , $message, $headers );

    if ($mail) {
        echo '<span class="form_result__green">Письмо успешно отправлено</span>';
    } else
        echo '<span class="form_result__red">При отправке письма возникла ошибка</span>';
}
?>