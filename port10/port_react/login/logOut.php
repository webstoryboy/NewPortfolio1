<?php
    include '../../connect/session.php';

    unset($_SESSION['studyMemberID']);
    unset($_SESSION['youEmail']);
    unset($_SESSION['youName']);
?>
<script>
    location.href = "../index.html"; //메인페이지로 넘어가기
</script>