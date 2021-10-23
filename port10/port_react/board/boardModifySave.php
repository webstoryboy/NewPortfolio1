<?php
    include "../../connect/connect.php";
    include "../../connect/session.php";
    include '../../connect/sessionCheck.php';  //로그인이 안되어있으면 로그인하세여~라는 창
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $boardID = $_POST['boardID'];
        $boardTitle = $_POST['boardTitle'];//name값!!
        $boardContent = $_POST['boardContent']; 
        $boardPass = $_POST['boardPass'];
        $memberID = $_SESSION['studyMemberID'];//비번 아이디 일치한지 확인해야하기 때문에!!

        $boardTitle = $connect -> real_escape_string($boardTitle);
        $boardContent = $connect -> real_escape_string($boardContent);

        $sql = "SELECT * FROM studyMember WHERE studyMemberID = {$memberID}";
        $result = $connect -> query($sql);

        if($result){
            $info = $result -> fetch_array(MYSQLI_ASSOC);

            // echo "<pre>";
            // var_dump($info);
            // echo "</pre>";

            //비밀번호 확인
            if($info['youPass'] == $boardPass){
                $sql = "UPDATE studyBoard SET boardTitle = '{$boardTitle}',boardContent = '{$boardContent}' WHERE studyBoardID = '{$boardID}'";
                $result = $connect -> query($sql);
            }else{
                echo "
                    <script>
                        alert('비밀번호를 입력하지 않았거나 틀렸습니다.');
                        history.back(1); //되돌아간다잉?
                        
                    </script>
                ";
            }
        }
    ?>
    <script>
        location.href = "board.html";
    </script>
</body>
</html>
    
