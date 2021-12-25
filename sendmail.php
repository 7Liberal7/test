<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  // от кого
  $mail->setFrom('andrushaweb@gmail.com', 'Разработчик');
  // кому
  $mail->addAddress('andreytennis66@gmail.com');
  // тема письма
  $mail->Subject = '"Новая форма пользователя"';

  $body = '<h1>Встречайте письмо!</h1>';

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
  }

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
  }

  $mail->Body = $body;

  // отправка
  if(!$mail->send()) {
    $message = 'Ошибка';
  }
  else {
    $message = 'Данные отправлены!';
  }

  $responce = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($responce);
?>