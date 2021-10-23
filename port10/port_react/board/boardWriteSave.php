<?php
    include "../../connect/connect.php";
    include "../../connect/session.php";
    include '../../connect/sessionCheck.php';  //로그인이 안되어있으면 로그인하세여~라는 창

    //form에 데이터 가져오기
    $boardTitle = $_POST['boardTitle']; 
    $boardContent = $_POST['boardContent'];
    //해킹 막기
    $boardTitle = $connect -> real_escape_string($boardTitle);
    $boardContent = $connect -> real_escape_string($boardContent);

    $boardView = 0; //조회수
    $regTime = time();
    $memberID = $_SESSION['studyMemberID'];

    $sql = "INSERT INTO studyBoard(studyMemberID,boardTitle,boardContent,boardView,regTime) VALUES('$memberID','$boardTitle','$boardContent','$boardView','$regTime')";    //게시판쓸 때 이 항목이 들어가야함!
    $result = $connect -> query($sql);

    
?>

<script>
    location.href = "board.html";
</script>