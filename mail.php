<?php

if ($_POST) {
    $title = (string) $_POST['customer']; //substr(htmlspecialchars(trim($_POST['customer'])), 0, 50); 
    $phone = (string) $_POST['phone']; //substr(htmlspecialchars(trim($_POST['phone'])), 0, 50); 
    $message = 'Name - ' . $title . '; Tel.: ' . $phone;
    $to = 'super-tovary@ukr.net';
    $from = 'super-tovary@ukr.net';
    mail($to, $title, $message, 'From:' . $from);
    header("Location: ./index.php?sent");
}
?>