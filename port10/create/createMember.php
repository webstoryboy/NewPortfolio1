<?php
    include "../connect/connect.php";

    $sql = "CREATE TABLE studyMember (";
    $sql .= "studyMemberID int(10) unsigned NOT NULL AUTO_INCREMENT,";
    $sql .= "youEmail varchar(40) NOT NULL,";
    $sql .= "youName varchar(10) NOT NULL,";
    $sql .= "youPass varchar(20) NOT NULL,";
    $sql .= "youBirth varchar(10) NOT NULL,";
    $sql .= "youPhone varchar(15) NOT NULL,";
    $sql .= "regTime int(15) NOT NULL,";
    $sql .= "PRIMARY KEY (studyMemberID)) CHARSET=utf8";

    $result = $connect -> query($sql);

    if( $result ){  
        echo "Create Table Complete";
    } else {
        echo "Create table false";
    }
?>