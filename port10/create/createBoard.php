<?php
	include "../connect/connect.php";

	$sql = "CREATE TABLE studyBoard (";
	$sql .= "studyBoardID int(10) unsigned NOT NULL AUTO_INCREMENT,";
	$sql .= "studyMemberID int(10) unsigned NOT NULL,";
	$sql .= "boardTitle varchar(50) NOT NULL,";
	$sql .= "boardContent longtext NOT NULL,";
	$sql .= "boardView int(10) unsigned NOT NULL,";
	$sql .= "regTime int(15) unsigned NOT NULL,";
	$sql .= "PRIMARY KEY (studyBoardID)) CHARSET=utf8";

	$result = $connect -> query($sql);

	if($result){
		echo "Create Board Complete";
	} else {
		echo "Create Board False";
	}
?>