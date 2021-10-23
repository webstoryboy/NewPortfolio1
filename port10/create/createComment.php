<?php
    include "../connect/connect.php";

   $sql = "CREATE TABLE myComment ("; //.= 더하기 기능
	$sql .= "commentID int(10) unsigned NOT NULL AUTO_INCREMENT,";
	$sql .= "youName varchar(20) NOT NULL,";
	$sql .= "youText varchar(50) NOT NULL,";
	$sql .= "regTime int(11) NOT NULL,";
	$sql .= "PRIMARY KEY (commentID)";
   $sql .= ") CHARSET=utf8";
    
    $result = $connect -> query($sql);

    if($result){
        echo "Create Comment True";
    }else{
        echo "Create Comment False";
    }
    // true확인 됐음
?>