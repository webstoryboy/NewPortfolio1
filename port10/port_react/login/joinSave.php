<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>

	<link rel="stylesheet" href="../../assets/css/reset.css">
	<link rel="stylesheet" href="../../assets/css/font.css">
	<link rel="stylesheet" href="css/php.css">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
   <header id="header">
	  <h1>
			<a href="../index.html" class="page__click">YOON.</a>
	  </h1>
	  <div class="member">
			<ul>
			<?php
// isset 있는 지 없는 지 확인 js는 contain jquery는 hasclass
    if(isset($_SESSION['studyMemberID'])){?>
       <li><a href="" class="">Board</a></li>
       <li><a href="#"><?=$_SESSION['youName']?>님 환영합니다.</a></li>
       <li><a href="logout.php" class="page__click">Logout</a></li>
    <?php }else{ ?>
		<li><a href="" class="">Board</a></li>
		<li><a href="login.html" class="page__click">Login</a></li>
		<li><a href="join.html" class="page__click">Join</a></li>
  <?php } ?>
			</ul>
	  </div>
	</header>
	<!--//header-->
   
    <div id="wrap">
        <main>
            <section id="mainContent" class="gray">
                <h2 class="screen_out">회원가입 컨텐츠</h2>
                <article class="content-article">
                    <div class="login-form">
                        <h2>안내</h2>
<?php
    include "../../connect/connect.php";

    $youEmail = $_POST['youEmail'];
    $youPass = $_POST['youPass'];
    $youPassC = $_POST['youPassC'];
    $youName = $_POST['youName'];
    $youBirth = $_POST['youBirth'];
    $youPhone = $_POST['youPhone'];
    $regTime = time();


    //메세지 출력
    function msg($alert){
        echo "<p class='sub'>{$alert}</p>";
    }

    //유효성 검사

    //이메일 검사
    $check_email = filter_var($youEmail, FILTER_VALIDATE_EMAIL);

    if( $check_email == false ){
        msg("이메일이 잘못되었습니다. <br> 올바른 이메일을 적어주세요!");
        exit;
    }

    //비밀번호 검사
    if( $youPass !== $youPassC ){
        msg("비밀번호가 일치하지 않습니다. <br> 다시 한번 확인해주세요!");
        exit;
    }

    //이름 검사
    $check_name = preg_match("/^[가-힣]{1,}$/", $youName);

    if( $check_name == false ){
        msg("이름이 정확하지 않습니다. <br> 한글로 적어주세요!");
        exit;
    }  

    //생년월일 유효성 검사
    $check_birth = preg_match("/^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/", $youBirth);

    if( $check_birth == false ){
        msg("생년월일이 잘못되었습니다. <br> 올바른 생년월일(YYYY-MM-DD) 적어주세요!");
        exit;
    }

    //휴대폰 번호 유효성 검사
    $check_number = preg_match("/^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/", $youPhone);

    if( $check_number == false ){
        msg("번호가 잘못되었습니다. <br> 올바른 번호(000-0000-0000)를 적어주세요!");
        exit;
    }

    //이메일 중복 검사
    $isEmailCheck = false;

    $sql = "SELECT youEmail FROM studyMember  WHERE youEmail = '$youEmail'";
    $result = $connect -> query($sql);

    if( $result ){
        $count = $result -> num_rows;

        //echo $count;

        if( $count == 0 ){
            $isEmailCheck = true;
        } else {
            msg("회원가입을 했었네요!. 로그인을 해주세요!!");
            exit;
        }
    } else {
        msg("에러발생01 (youEmail) : 관리자에 문의하세요! ");
        exit;
    }


    //핸드폰 중복 검사
    $isPhoneCheck = false;

    $sql = "SELECT youPhone FROM studyMember WHERE youPhone = '$youPhone'";
    $result = $connect -> query($sql);

    if( $result ){
        $count = $result -> num_rows;

        if( $count == 0 ){
            $isPhoneCheck = true;
        } else {
            msg("회원가입을 했었네요!!!. 로그인을 해주세요!!");
        }
    } else {
        msg("에러발생02 (youPhone) : 관리자에 문의하세요!");
        exit;
    }

    //회원 가입
    if( $isEmailCheck == true && $isPhoneCheck == true ){
        $sql = "INSERT INTO studyMember(youEmail, youName, youPass, youBirth, youPhone, regTime) VALUES('$youEmail', '$youName', '$youPass', '$youBirth', '$youPhone', '$regTime')";
    
        $result = $connect -> query($sql);

        if( $result ){
            msg("회원가입을 축하합니다. 로그인 해주세요!!!");
            // $_SESSION[]
        } else {
            msg("에러발생03 : 관리자에게 문의하세요! ");
            exit;
        }
    } else {
        msg("다시 한번 확인하고 회원가입해주세요!!");
        exit;
    }

?>
                    </div>
                </article>
            </section>
        </main> 
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
    <script>
//		 window.onload = function () {
//            function start(callback) {
//                setTimeout(() => {
//                document.querySelector(".loader").classList.remove("loader--active");
//                }, 100);
//            };
//            start();
//
//            function pageClick() {
//                document.querySelectorAll(".page__click").forEach((elem) => {
//                    elem.addEventListener("click", (e) => {
//                        e.preventDefault();
//                        const dataName = elem.getAttribute('href');
//                        document.querySelector(".loader").classList.add("loader--active");
//                        setTimeout(() => {
//                            window.location.href = dataName;
//                        }, 2000);
//                    });
//                });
//            };
//            pageClick();
//            
//        };
		 
			//footer nav
			Splitting();
    </script>
</body>
</html>