<?php
    $host = "localhost";
    $user = "annazoo1028";
    $pw = "dksduswn97!";
    $db = "annazoo1028";
    $connect = new mysqli($host, $user, $pw, $db);
    $connect -> set_charset("utf8");

    if( mysqli_connect_errno() ){
        echo "database Connect False";
    } else {
        //echo "database Connect True";
    }
?>