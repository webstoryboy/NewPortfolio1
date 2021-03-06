<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YOON REACT PORT</title>

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
                <h2 class="screen_out">로그인 컨텐츠</h2>
                <article class="content-article">
                    <div class="login-form">
                        <h2>안내</h2>
<?php
    include '../../connect/connect.php';
    include '../../connect/session.php';

    $youEmail = $_POST['youEmail'];
    $youPass = $_POST['youPass'];

    //메세지 출력
    function msg($alert){
        echo "<p class='sub'>{$alert}</p>";
    }

    //이메일 검사
    if( !filter_var($youEmail, FILTER_VALIDATE_EMAIL) ){
        msg("이메일이 잘못되었습니다. <br> 올바른 이메일을 적어주세요!");
        exit;
    }

    //비밀번호 검사 
    if($youPass == null || $youPass == ''){
        msg('비밀번호를 입력해 주세요.');
        exit;
    }

    //데이터 조회
    $sql = "SELECT studyMemberID, youEmail, youName, youPass FROM studyMember WHERE youEmail = '$youEmail' AND youPass = '$youPass'";
    $result = $connect -> query($sql);

    if($result){
        $count = $result -> num_rows;

        if($count == 0){
            msg("로그인 정보가 없습니다. 회원가입 해주세요!!");
            exit;
        } else {
            $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);

//             echo "<pre>";
//             var_dump($memberInfo);
//             echo "</pre>";

            $_SESSION['studyMemberID'] = $memberInfo['studyMemberID'];
            $_SESSION['youEmail'] = $memberInfo['youEmail'];
            $_SESSION['youName'] = $memberInfo['youName'];
			

            Header("Location: ../index.html");
        }
    } else {
        msg("에러발생 : 관리자에게 문의하세요!!");
    }
?>
                    </div>
                </article>
            </section>
        </main>
    </div>
	<footer id="footer">
        <div class="footer">
            <h1 class="ir_su">footer</h1>
            <!-- <h2 class="text">You can go wherever you want.</h2> -->
            <div class="f_top">
                <!-- <div class="ask">
                    
                </div>
                 -->
                <div class="btn">
                    <nav>
                        <a href="../project/" class="nav__link page__click">
                            <span class="nav__link--text" data-splitting>Project</span>
                            <span class="nav__link--text" data-splitting>Project</span>
                        </a>
                        <a href="#" class="nav__link page__click">
                            <span class="nav__link--text" data-splitting>Contact</span>
                            <span class="nav__link--text" data-splitting>Contact</span>
                        </a>
                    </nav>
                    <div class="line"></div>
                </div>
                <div class="arrow prev">
                    <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" viewBox="0 0 120 180" style="enable-background:new 0 0 120 180;" xml:space="preserve">
                    <line class="st0" x1="61" y1="17" x2="61" y2="165"/>
                    <path class="st1" d="M15.47,117.52c0,0,45.53,0,45.53,47.48"/>
                    <path class="st1" d="M106.53,117.52c0,0-45.53,0-45.53,47.48"/>
                    </svg>
                </div>
                <div class="arrow next">
                    <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" viewBox="0 0 120 180" style="enable-background:new 0 0 120 180;" xml:space="preserve">
                    <line class="st0" x1="61" y1="17" x2="61" y2="165"/>
                    <path class="st1" d="M15.47,117.52c0,0,45.53,0,45.53,47.48"/>
                    <path class="st1" d="M106.53,117.52c0,0-45.53,0-45.53,47.48"/>
                    </svg>
                </div>
            </div>
            <div class="f_bottom">
                <div class="logo">
                    <a href="../" class="page__click">YOON.</a>
                </div>
                <div class="info">
                    <em>Front-end Developer : LEE KANG YOON</em>
                    <em>PHONE : 010.9198.4389</em>
                    <em>E-MAIL : rkddb1031@naver.com</em>
                </div>
                <div class="right">
                    <div class="social">
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/kxun_ii/?hl=ko" target="_blank">
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 14.5C0 6.49187 6.49187 0 14.5 0C22.5081 0 29 6.49187 29 14.5C29 22.5081 22.5081 29 14.5 29C6.49187 29 0 22.5081 0 14.5ZM14.5007 6.76667C12.4005 6.76667 12.1369 6.77585 11.312 6.81339C10.4887 6.85109 9.92673 6.98143 9.43502 7.17267C8.92638 7.3702 8.49492 7.63442 8.06507 8.06443C7.6349 8.49428 7.37068 8.92574 7.17251 9.43421C6.98079 9.92609 6.85028 10.4882 6.81323 11.3112C6.77633 12.1361 6.76667 12.3998 6.76667 14.5001C6.76667 16.6003 6.77601 16.8631 6.81339 17.688C6.85125 18.5113 6.98159 19.0733 7.17267 19.565C7.37036 20.0736 7.63458 20.5051 8.06459 20.9349C8.49428 21.3651 8.92574 21.63 9.43405 21.8275C9.92609 22.0187 10.4882 22.1491 11.3113 22.1868C12.1362 22.2243 12.3997 22.2335 14.4998 22.2335C16.6002 22.2335 16.863 22.2243 17.6879 22.1868C18.5111 22.1491 19.0738 22.0187 19.5658 21.8275C20.0743 21.63 20.5051 21.3651 20.9348 20.9349C21.3649 20.5051 21.6292 20.0736 21.8273 19.5651C22.0174 19.0733 22.1479 18.5111 22.1866 17.6882C22.2237 16.8633 22.2333 16.6003 22.2333 14.5001C22.2333 12.3998 22.2237 12.1362 22.1866 11.3113C22.1479 10.4881 22.0174 9.92609 21.8273 9.43437C21.6292 8.92574 21.3649 8.49428 20.9348 8.06443C20.5046 7.63426 20.0744 7.37003 19.5653 7.17267C19.0723 6.98143 18.51 6.85109 17.6867 6.81339C16.8618 6.77585 16.5992 6.76667 14.4983 6.76667H14.5007Z" fill="#969086"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.807 8.16029C14.0129 8.15997 14.2426 8.16029 14.5007 8.16029C16.5655 8.16029 16.8103 8.1677 17.6257 8.20476C18.3797 8.23924 18.7889 8.36523 19.0615 8.47108C19.4224 8.61125 19.6797 8.7788 19.9502 9.04947C20.2209 9.32014 20.3884 9.57792 20.5289 9.93882C20.6348 10.2111 20.7609 10.6203 20.7952 11.3743C20.8323 12.1896 20.8404 12.4345 20.8404 14.4983C20.8404 16.5622 20.8323 16.8071 20.7952 17.6223C20.7608 18.3763 20.6348 18.7855 20.5289 19.0578C20.3888 19.4187 20.2209 19.6757 19.9502 19.9462C19.6795 20.2168 19.4226 20.3844 19.0615 20.5246C18.7892 20.6309 18.3797 20.7566 17.6257 20.7911C16.8104 20.8281 16.5655 20.8362 14.5007 20.8362C12.4357 20.8362 12.191 20.8281 11.3758 20.7911C10.6218 20.7563 10.2125 20.6303 9.93978 20.5244C9.57889 20.3842 9.32111 20.2167 9.05044 19.946C8.77977 19.6753 8.61221 19.4182 8.47172 19.0572C8.36587 18.7849 8.23972 18.3756 8.2054 17.6216C8.16835 16.8064 8.16094 16.5615 8.16094 14.4964C8.16094 12.4312 8.16835 12.1876 8.2054 11.3724C8.23988 10.6184 8.36587 10.2092 8.47172 9.93656C8.61189 9.57567 8.77977 9.31789 9.05044 9.04722C9.32111 8.77655 9.57889 8.60899 9.93978 8.4685C10.2124 8.36217 10.6218 8.2365 11.3758 8.20186C12.0892 8.16964 12.3657 8.15997 13.807 8.15836V8.16029ZM18.6288 9.44436C18.1164 9.44436 17.7007 9.85955 17.7007 10.372C17.7007 10.8844 18.1164 11.3001 18.6288 11.3001C19.1411 11.3001 19.5568 10.8844 19.5568 10.372C19.5568 9.85971 19.1411 9.44436 18.6288 9.44436ZM14.5007 10.5287C12.3075 10.5287 10.5293 12.3069 10.5293 14.5001C10.5293 16.6933 12.3075 18.4707 14.5007 18.4707C16.694 18.4707 18.4715 16.6933 18.4715 14.5001C18.4715 12.3069 16.694 10.5287 14.5007 10.5287Z" fill="#969086"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5007 11.9223C15.9243 11.9223 17.0785 13.0763 17.0785 14.5001C17.0785 15.9237 15.9243 17.0779 14.5007 17.0779C13.077 17.0779 11.9229 15.9237 11.9229 14.5001C11.9229 13.0763 13.077 11.9223 14.5007 11.9223Z" fill="#969086"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/rkddbs1031" target="_blank">
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5259 0.108398C6.53363 0.108398 0.0527344 6.69859 0.0527344 14.8286C0.0527344 21.3325 4.19973 26.8504 9.95036 28.7969C10.6737 28.9331 10.9392 28.4775 10.9392 28.0887C10.9392 27.7377 10.9258 26.5781 10.9196 25.3481C6.89314 26.2386 6.04351 23.6113 6.04351 23.6113C5.38514 21.9098 4.43653 21.4574 4.43653 21.4574C3.12338 20.5437 4.53551 20.5625 4.53551 20.5625C5.98887 20.6661 6.75413 22.0794 6.75413 22.0794C8.04499 24.3299 10.1399 23.6793 10.9658 23.3031C11.0957 22.352 11.4708 21.7021 11.8847 21.3347C8.67005 20.9625 5.29071 19.7003 5.29071 14.0598C5.29071 12.4527 5.85609 11.1395 6.78193 10.1086C6.63166 9.73761 6.13626 8.24065 6.92214 6.21301C6.92214 6.21301 8.1375 5.81738 10.9033 7.72192C12.0578 7.39576 13.2959 7.23219 14.5259 7.22659C15.7559 7.23219 16.995 7.39576 18.1516 7.72192C20.914 5.81738 22.1277 6.21301 22.1277 6.21301C22.9155 8.24065 22.4199 9.73761 22.2696 10.1086C23.1976 11.1395 23.7592 12.4527 23.7592 14.0598C23.7592 19.7137 20.3733 20.9586 17.1505 21.323C17.6696 21.7799 18.1322 22.6757 18.1322 24.0491C18.1322 26.0184 18.1154 27.6036 18.1154 28.0887C18.1154 28.4805 18.3759 28.9395 19.1096 28.7949C24.8571 26.8463 28.9988 21.3304 28.9988 14.8286C28.9988 6.69859 22.5189 0.108398 14.5259 0.108398Z" fill="#969086"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.53445 21.2436C5.50258 21.3169 5.38945 21.3386 5.28639 21.2884C5.18142 21.2404 5.12246 21.1407 5.15649 21.0673C5.18765 20.992 5.30101 20.9713 5.40575 21.0213C5.51097 21.0695 5.57088 21.1702 5.53445 21.2436Z" fill="#969086"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.12068 21.9086C6.05166 21.9736 5.91673 21.9434 5.82517 21.8406C5.7305 21.7379 5.71277 21.6007 5.78275 21.5346C5.85393 21.4695 5.98479 21.5 6.0797 21.6026C6.17437 21.7065 6.19282 21.8427 6.12068 21.9086Z" fill="#969086"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69134 22.7564C6.60266 22.819 6.45766 22.7603 6.36802 22.6294C6.27935 22.4985 6.27935 22.3415 6.36994 22.2786C6.45982 22.2157 6.60266 22.2723 6.69349 22.4022C6.78193 22.535 6.78193 22.6923 6.69134 22.7564Z" fill="#969086"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.47314 23.5754C7.39381 23.6644 7.22484 23.6405 7.10117 23.5191C6.97463 23.4004 6.9394 23.232 7.01897 23.143C7.09925 23.0538 7.26918 23.0789 7.39381 23.1993C7.5194 23.3178 7.55774 23.4874 7.47314 23.5754Z" fill="#969086"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55165 24.051C8.51666 24.1663 8.35392 24.2187 8.18999 24.1697C8.0263 24.1193 7.91916 23.9842 7.95224 23.8677C7.98627 23.7517 8.14973 23.6971 8.31486 23.7495C8.47831 23.7997 8.58568 23.9338 8.55165 24.051Z" fill="#969086"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.7361 24.1393C9.74017 24.2607 9.60116 24.3613 9.42908 24.3633C9.25604 24.3674 9.11607 24.2692 9.11416 24.1497C9.11416 24.0271 9.25005 23.9274 9.42309 23.9245C9.59517 23.9211 9.7361 24.0186 9.7361 24.1393Z" fill="#969086"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8383 23.9484C10.8589 24.0669 10.7394 24.1885 10.5685 24.2207C10.4005 24.2521 10.2449 24.179 10.2236 24.0615C10.2027 23.9401 10.3245 23.8185 10.4923 23.787C10.6634 23.7568 10.8165 23.828 10.8383 23.9484Z" fill="#969086"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://codepen.io/rkddbs1031" target="_blank">
                                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 14.5C0 6.49187 6.71573 0 15 0C23.2843 0 30 6.49187 30 14.5C30 22.5081 23.2843 29 15 29C6.71573 29 0 22.5081 0 14.5ZM22.9772 12.2933C22.9612 12.246 22.9559 12.2306 22.9496 12.2151C22.9278 12.1687 22.9206 12.1547 22.9118 12.1411C22.8842 12.0976 22.875 12.0845 22.8649 12.0718C22.8314 12.032 22.8203 12.0203 22.8087 12.0091C22.7699 11.9735 22.7573 11.9632 22.7447 11.9534C22.7108 11.929 22.7074 11.9257 22.7036 11.9234L15.6196 7.35816C15.3958 7.21395 15.1047 7.21395 14.8804 7.35816L7.79692 11.9234C7.77512 11.9384 7.76544 11.9459 7.75575 11.9534C7.74267 11.9632 7.73008 11.9735 7.71797 11.9843C7.6797 12.0203 7.66856 12.032 7.65839 12.0442C7.62545 12.0845 7.61625 12.0976 7.60753 12.1112C7.57992 12.1547 7.57266 12.1687 7.56539 12.1837C7.54408 12.2306 7.53875 12.246 7.53342 12.2619C7.51841 12.3106 7.51502 12.3289 7.51163 12.3471C7.50242 12.4024 7.5 12.4305 7.5 12.4591V17.0243C7.5 17.0524 7.50242 17.0805 7.5063 17.1086C7.51502 17.1545 7.51841 17.1722 7.52325 17.19C7.53875 17.2369 7.54408 17.2528 7.55086 17.2687C7.57266 17.3141 7.57992 17.3282 7.58816 17.3427C7.61625 17.3858 7.62545 17.3984 7.63514 17.411C7.66856 17.4508 7.6797 17.463 7.69133 17.4738C7.73008 17.5098 7.74267 17.5201 7.75575 17.53C7.78966 17.5543 7.79305 17.5576 7.79692 17.5599L14.8804 22.1252C14.9923 22.1973 15.1212 22.2333 15.25 22.2333C15.3788 22.2333 15.5077 22.1973 15.6196 22.1252L22.7036 17.5599C22.7249 17.545 22.7346 17.5375 22.7447 17.53C22.7573 17.5201 22.7699 17.5098 22.7825 17.4991C22.8203 17.463 22.8314 17.4508 22.8421 17.4391C22.875 17.3984 22.8842 17.3858 22.893 17.3722C22.9206 17.3282 22.9278 17.3141 22.9346 17.2996C22.9559 17.2528 22.9612 17.2369 22.9666 17.2214C22.9821 17.1722 22.9855 17.1545 22.9889 17.1362C22.9981 17.0805 23 17.0524 23 17.0243V12.4591C23 12.4305 22.9981 12.4024 22.9942 12.3752C22.9855 12.3289 22.9821 12.3106 22.9772 12.2933Z" fill="#969086"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 16.2648L12.8945 14.7417L15.25 13.2185L17.606 14.7417L15.25 16.2648ZM15.916 9.09716L21.1347 12.46L18.8039 13.9672L15.916 12.0999V9.09716ZM15.916 20.3862V17.3834L18.8039 15.5166L21.1347 17.0233L15.916 20.3862ZM21.668 15.8191L20.0017 14.7417L21.668 13.6643V15.8191ZM14.584 20.3862L9.36533 17.0233L11.6966 15.5166L14.584 17.3834V20.3862ZM8.83203 13.6643L10.4988 14.7417L8.83203 15.8191V13.6643ZM14.584 9.09716V12.0999L11.6966 13.9672L9.36533 12.46L14.584 9.09716Z" fill="#969086"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="copyright">
                        ⓒ YOON’S REACT PORTFOLIO 2021
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--//footer-->
    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
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