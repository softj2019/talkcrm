//네비게이션
/*200519 전체 삭제, 새로추가*/
$(document).on('click', '.main-navi:not(.sm) li.hassub button', function(){
    if($(this).hasClass('down-arrow')){
        $(this).parent('.hassub').addClass('on');
        $(this).attr('class', 'up-arrow');
        $(this).siblings('.dp2').slideDown();
    }else{
        $(this).parent('.hassub').removeClass('on');
        $(this).attr('class', 'down-arrow');
        $(this).siblings('.dp2').slideUp();
    }
});
$(document).on('mouseenter', '.main-navi.sm .hassub', function(){
    $(this).addClass('hover');
});
$(document).on('mouseleave', '.main-navi.sm .hassub', function(){
    $(this).removeClass('hover');
});
$(document).on('click', '.main-navi.sm .h1title', function(){
    $(this).parents('.main-navi').removeClass('sm');
});
$(document).on('click', '.main-navi .h1title .left-arrow', function(){
    $('.hassub.on .up-arrow').trigger('click');
    $(this).parents('.main-navi').addClass('sm');
});
//네비게이션

//탭
$('.tabUl li').click(function(){
    var tab_id = $(this).attr('data-id');

    $(this).siblings('li').removeClass('on');
    $(this).closest('.tabUl').next('.tabContent').children('.tabbox').removeClass('on');
    $(this).addClass('on');
    $("#"+tab_id).addClass('on');
});
$('.dp1 li').click(function(e){
    e.preventDefault();
    var tab_id = $(this).children('a').attr('data-id');

    $(this).siblings('li').children('a').removeClass('on');
    $(this).closest('.dp1').next('.dp2').children('table').removeClass('on');
    $('.dp2 table tr').removeClass('on');
    $(this).children('a').addClass('on');
    $("#"+tab_id).addClass('on');
});
//검색탭
$('.doc li').click(function(e){
   e.preventDefault();
    $(this).siblings('li').children('a').removeClass('on');
    $(this).children('a').addClass('on');
});
$('.dp2 table tr').click(function(){
    $('.dp2 table tr').removeClass('on');
    $(this).addClass('on');
});

$('.srcinput , .srcwrap').focusin(function(){
    $('.srcwrap').addClass('on');
});
//검색팝업
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popBtn = $tgPoint.hasClass('srcinput');
    var $popArea = $tgPoint.parents().hasClass('srcwrap');
    
    if ( !$popBtn && !$popArea ){
        $('.srcwrap').removeClass('on');
    }
});
//유입경로탭
$('.fnwrap .dp2 td').on('click', function(){
    var tab_id = $(this).parents('table').attr('id');
    var depth1 = $('a[data-id="' + tab_id + '"]').text();
    var depth2 = $(this).text();
    $(this).parents('.formwrap3').children('input.fninput').val(depth1 + '▶' + depth2);
});
//유입경로팝업
$('.fninput , .fnwrap').focusin(function(){
    $('.fnwrap').addClass('on');
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popBtn = $tgPoint.hasClass('fninput');
    var $popArea = $tgPoint.parents().hasClass('fnwrap');
    
    if ( !$popBtn && !$popArea ){
        $('.fnwrap').removeClass('on');
    }
});
//쿠폰검색팝업
$('.cpwrap a').on('click', function(){
    var cpName = $(this).text();
    $(this).parents('.formwrap3').children('input.cpinput').val(cpName);
});
$('.cpinput').on('propertychange change keyup paste input', function(){
    var currentVal = $(this).val();
    var oldVal;
    if(currentVal == oldVal){
        return;
    }
    oldVal = currentVal;
    $('.cpwrap').addClass('on');
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popBtn = $tgPoint.hasClass('cpinput');
    var $popArea = $tgPoint.parents().hasClass('cpwrap');
    
    if ( !$popBtn && !$popArea ){
        $('.cpwrap').removeClass('on');
    }
});
//선불금이체-고객검색팝업
$('.custsrc-btn').click(function(){
    $('#custSrc').addClass('on');
});

//페이지네이션
$('.pagination .page-item .page-link').click(function(e){
    e.preventDefault();
    $('.page-link').removeClass('active');
    $(this).addClass('active');
});

//고객검색
$('#custSrc .tableBody').click(function(){
    
    if($(this).hasClass('on')){
        $(this).removeClass('on');
    }else if($('#prepayment').hasClass('on')){
        $(this).removeClass('on');
        $('#custSrc').removeClass('on');
    }
    else{
    $('#custSrc .tableBody').removeClass('on');
    $(this).addClass('on'); 
}
});
$('#custSrc .modalClose').click(function(){
    $('#custSrc .tableBody').removeClass('on');
});
//중복고객 합병처리
$('#dupCustBtn').click(function(){
    $('#custSrc .tableBody').removeClass('on');
    $('#dupCust').addClass('on'); 
});
$('#dupCust td:not(.table-tit) a').click(function(e){
    e.preventDefault();
    $(this).closest('td').siblings('td').children('a').removeClass('on');
    $(this).toggleClass('on');
});
// 메뉴 2020.05.19 삭제
//$('.logo-right').click(function(){
//    $('.right-main').css('margin-left','70px');
//    $('.right-main').css("max-width","calc(100% - 70px)");
//});
//$('#sidebar li:nth-child(1) img').click(function(){
//    $('.right-main').css('margin-left','230px');
//});
// 메뉴R 2020.05.14 수정 ~481
$('.Rtab-pub').click(function(){
    $('.right-tab-box').css('right','0');
    $('.right-ul li').removeClass('on');
    $('.pub-on').trigger('click');
});
$('.Rtab-pri').click(function(){
    $('.right-tab-box').css('right','0');
    $('.right-ul li').removeClass('on');
    $('.pri-on').trigger('click');
});
$('.R-T-Close').click(function(){
    $('.right-tab-box').css('right','-800px');
});

// 모달
$('body').click(function(){
    if($('.modal').hasClass('on')){
        $('body').css('overflow', 'hidden');
    }
});
$(".call-btn").click(function(){
    $("#call").addClass('on');
});
$(".consult-btn").click(function(){
    $("#consult").addClass('on');
});
$(".consult-table tr").click(function(){
    $("#consult").addClass('on');
});
$(".package-add-btn").click(function(){
    $("#package-add").addClass('on');
});
$(".reserv-btn").click(function(){
    $("#reserv").addClass('on');
});
$(".payment-btn").click(function(){
    //저장후수납등록 클릭시 기존의 상담정보창 close
    $(".modal").removeClass('on');
    $("#payment").addClass('on');
});
$(".chart-btn").click(function(){
    $("#chart").addClass('on');
});
$(".custSrc-btn").click(function(){
    $("#custSrc").addClass('on');
});
$(".package-btn").click(function(){
    $("#package-add").addClass('on');
});
$(".coupon-btn").click(function(){
    $("#coupon").addClass('on');
});
$(".mileage-btn").click(function(){
    $("#mileage").addClass('on');
});
$(".prepayment-btn").click(function(){
    $("#prepayment").addClass('on');
});
$(".package-edit-btn").dblclick(function(){
    $("#package-edit").addClass('on');
});
$(".prescription-add-btn").click(function(){
    $("#prescription-add").addClass('on');
});
$(".prescription-edit-btn").click(function(){
    $("#prescription-edit").addClass('on');
});
$(".imgView-btn").click(function(){
    $("#imgView").addClass('on');
});
$(".imgUp-btn").click(function(){
    $("#imgUp").addClass('on');
});
$(".customerl-btn").click(function(){
    $("#customerl").addClass('on');
});
$(".msg-btn").click(function(){
    $("#msg").addClass('on');
});
$(".serviceSrc .blueTable tbody tr").dblclick(function(){
    $(".editpop").addClass('on'); 
});
$('.editpop-btn').on('click', function(e){
    e.preventDefault();
    $('.editpop').addClass('on');
});
$(".modalClose").click(function(){
    $(this).parents(".modal").removeClass('on');
    $('body').css('overflow', 'auto');
});

// 날짜 선택
$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    showMonthAfterYear:true, //년도 먼저 나오고, 뒤에 월 표시
    monthNames:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],//달력의 월 부분 텍스트
    dayNamesMin: ['일','월','화','수','목','금','토'], //달력의 요일 부분 텍스트
    dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'], //달력의 요일 부분 Tooltip 텍스트
    numberOfMonths: [1,1], // 1행 2열로 표시
});
//input을 datepicker로 선언
$(".date_pick").datepicker(); 

// 체크박스
$('#all-ck-1').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.body-t input').prop('checked',true);
     else $('.body-t input').prop('checked',false);
 });
 $('#all-ck-2').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.body-t2 input').prop('checked',true);
     else $('.body-t2 input').prop('checked',false);
 });
 $('#all-ck-3').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.body-t3 input').prop('checked',true);
     else $('.body-t3 input').prop('checked',false);
 });
 $('#all-ck-4').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.body-t4 input').prop('checked',true);
     else $('.body-t4 input').prop('checked',false);
 });
 $('#m-all-ck').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.mo-body-t input').prop('checked',true);
     else $('.mo-body-t input').prop('checked',false);
 });
 $('#m-all1-ck').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.mo-body-t2 input').prop('checked',true);
     else $('.mo-body-t2 input').prop('checked',false);
 });

//file upload
var uploadFile = $('.fileBox .uploadBtn');

uploadFile.on('change', function(){
    if(window.FileReader){
        var filename = $(this)[0].files[0].name;
    } else {
        var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.fileName').val(filename);
});

var uploadFile2 = $('.fileBox2 .uploadBtn2');
uploadFile2.on('change', function(){
    if(window.FileReader){
        var filename = $(this)[0].files[0].name;
    } else {
        var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.fileName2').val(filename);
});


//마우스오버 메뉴
  //메뉴보이기+위치
  $('.hoverpopList tbody tr').mouseenter(function(e){
    var tp = $(this).parents('.table-in');
    //Get window size:
    var winWidth = $(document).width();
    var winHeight = $(document).height();
    //Get pointer position:
    var RposX = e.pageX;
    var RposY = e.pageY;
    var posX = e.pageX - tp.offset().left;
    var posY = e.pageY - tp.offset().top;
    //Get contextmenu size:
    var menuWidth = tp.find('.hoverpop').width();
    var menuHeight = tp.find('.hoverpop').height();
    //Security margin:
    var secMargin = 10;
    //Prevent page overflow:
    if(RposX + menuWidth + secMargin >= winWidth
    && RposY + menuHeight + secMargin >= winHeight){
      //Case 1: right-bottom overflow:
      posLeft = posX - menuWidth - secMargin + "px";
      posTop = posY - menuHeight - secMargin + "px";
    }
    else if(RposX + menuWidth + secMargin >= winWidth){
      //Case 2: right overflow:
      posLeft = posX - menuWidth - secMargin + "px";
      posTop = posY + secMargin + "px";
    }
    else if(RposY + menuHeight + secMargin >= winHeight){
      //Case 3: bottom overflow:
      posLeft = posX + secMargin + "px";
      posTop = posY - menuHeight - secMargin + "px";
    }
    else {
      //Case 4: default values:
      posLeft = posX + secMargin + "px";
      posTop = posY + secMargin + "px";
    }
      
    tp.find('.hoverpop').removeClass('on');
    //Display menu:
    tp.find('.hoverpop').css({
       "left": posLeft,
       "top": posTop
    }).addClass('on');
    
    //Prevent browser default contextmenu.
    return false;
  });

  //메뉴사라지기
    $('body').on('mouseover', function(e){
        var $tgPoint = $(e.target);
        var $popArea = $tgPoint.parents().hasClass('hoverpopList');

        if ( !$popArea ){
            $('.hoverpop').removeClass('on');
        }
    });
 


//2020.05.14 수정 688 ~ 731
//우클릭메뉴
$(".serviceSrc .blueTable tbody tr").on("mousedown", function(e){
    //우클릭 기본메뉴 제거
    $(".serviceSrc .blueTable tbody tr").on('contextmenu', function() {
      return false;
    });
    //if 오른쪽클릭일경우
    if( e.which == 3 ){
        $('.rcpop').remove();//기존 팝업제거
        $(this).parents('.serviceSrc').append('<div class="rcpop"><ul><li><a href="#" class="editpop-btn">수정</a></li><li><a href="#" class="del-btn">삭제</a></li></ul</div>');
            //메뉴보이기+위치
            var tp = $(this).parents('.modalContent');
            //Get pointer position:
            var MposX = e.pageX - tp.offset().left;
            var MposY = e.pageY - tp.offset().top;
            posLeft = MposX + "px";
            posTop = MposY - 58 + "px";
            //Display menu:
            $('.rcpop').css({
               "left": posLeft,
               "top": posTop
            }).addClass('on');
        //수정,삭제 기능
        var thisTR = $(this);
        $(document).on('click', '.rcpop .editpop-btn', function(){
            $('.editpop').addClass('on'); 
            $('.rcpop').remove();
        });
        $(document).on('click', '.rcpop .del-btn', function(){
            $(thisTR).remove();
            $('.rcpop').remove();
        });
        //Prevent browser default contextmenu.
        return false;
    }
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popArea = $tgPoint.parents().hasClass('rcpop');
    if ( !$popArea ){
        $('.rcpop').remove();
    }
});

//패키지수정 - 처방수정 우클릭메뉴
$(".packpop-btn tr").on("mousedown", function(e){
    //우클릭 기본메뉴 제거
    $(".packpop-btn tr").on('contextmenu', function() {
      return false;
    });
    //if 오른쪽클릭일경우
    if( e.which == 3 ){
        $('.rcpop').remove();//기존 팝업제거
        $(this).closest('.pack-table').append('<div class="rcpop"><ul><li><a href="#" class="presAdd-btn">처방수정</a></li><li><a href="#" class="del-btn">처방삭제</a></li></ul</div>');
            //메뉴보이기+위치
            var tp = $(this).closest('.modalContent');
            //Get pointer position:
            var MposX = e.pageX - tp.offset().left;
            var MposY = e.pageY - tp.offset().top;
            posLeft = MposX + "px";
            posTop = MposY - 58 + "px";
            //Display menu:
            $('.rcpop').css({
               "left": posLeft,
               "top": posTop
            }).addClass('on');
        //수정,삭제 기능
        var thisTR = $(this);
        $(document).on('click', '.rcpop .presAdd-btn', function(){
            $('#prescription-add').addClass('on'); 
            $('.rcpop').remove();
        });
        $(document).on('click', '.rcpop .del-btn', function(){
            $(thisTR).remove();
            $('.rcpop').remove();
        });
        //Prevent browser default contextmenu.
        return false;
    }
});

//2020-05-14 추가 ~
//메시지 탭
$('#msg .top-tabul li').click(function(){
    var tab_id = $(this).attr('data-id');
    var tab_id2 = $(this).attr('data-id2');
    $(this).siblings('li').removeClass('on');
    $('.po-rel > .tabContent').children('.tabbox').removeClass('on');
    $(this).addClass('on');
    $("#"+tab_id).addClass('on');
    $("#"+tab_id2).addClass('on');
});


// 예약
//게시판
$("#board-list .wrap ul").click(function(){
    $("#board-view").addClass('on');
    $("#board-list").removeClass('on');
});
$(".board-write-btn").click(function(){
    $("#board-write").addClass('on');
    $(".modal:not(#board-write)").removeClass('on');
});
$(".list-btn").click(function(){
    $("#board-list").addClass('on');
    $(".modal:not(#board-list)").removeClass('on');
});
$(".list-x").click(function(){
    $(".modal").removeClass('on');
});
$('#help .tableBody').click(function(){
    $("#help-view").addClass('on');
    $(".modal:not(#help-view)").removeClass('on');
});
$('.help-btn').click(function(){
    $("#help").addClass('on');
    $(".modal:not(#help)").removeClass('on');
});

$('#num-ck').click(function(){
    var chk = $(this).is(':checked');//.attr('checked');
     if(chk) $('.tableBody input').prop('checked',true);
     else $('.tableBody input').prop('checked',false);
 });

// 05.19 추가
// 우클릭 빈셀메뉴
$(".reser-table tbody tr td").on("mousedown", function(e){
    //우클릭 기본메뉴 제거
    $(".reser-table tbody tr td").on('contextmenu', function() {
      return false;
    });
    //if 오른쪽클릭일경우
    if( e.which == 3 ){
        if($(this).hasClass('table-M')){ 
        }else{
        //실행내용
        $('.rcpop').remove();//기존 팝업제거
        $(this).parents('.reser-table').append('<div class="rcpop ver2"><ul class="w100px"><li><a href="#" class="reserv-btn">예약등록</a></li><li class="bor-b-g"><a href="#" class="memo-btn">메모등록</a></li><li><a href="#">휴진등록</a></li><li class="bor-b-g"><a href="#">휴진취소</a></li><li><a href="#">예약가져오기</a></li></ul></div>');
          //메뉴보이기+위치
            var tp = $(this).parents('.table-in');
            //Get window size:
            var winWidth = $(document).width();
            var winHeight = $(document).height();
            //Get pointer position:
            var RposX = e.pageX;
            var RposY = e.pageY;
            var posX = e.pageX - tp.offset().left;
            var posY = e.pageY - tp.offset().top;
            //Get contextmenu size:
            var menuWidth = $('.rcpop').width();
            var menuHeight = $('.rcpop').height();
            //Security margin:
            var secMargin = 10;
            //Prevent page overflow:
            posLeft = posX + 20 + "px";
             posTop = posY + 10 + "px";
            $('.rcpop').removeClass('on');
            //Display menu:
            $('.rcpop').css({
               "left": posLeft,
               "top": posTop
            }).addClass('on');

            //Prevent browser default contextmenu.
            return false;
          }
    }
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popArea = $tgPoint.parents().hasClass('rcpop');

    if ( !$popArea ){
        $('.rcpop').remove();
    }
});
// 우클릭 예약셀메뉴
$(".reser-table tbody tr td .table-M").on("mousedown", function(e){
    //우클릭 기본메뉴 제거
    $(".reser-table tbody tr td .table-M").on('contextmenu', function() {
      return false;
    });
    //if 오른쪽클릭일경우
    if( e.which == 3 ){
        //실행내용
        $('.rcpop').remove();//기존 팝업제거
        $(this).parents('.reser-table').append('<div class="rcpop ver2"><ul><li class="bor-b-g"><a href="#" class="editpop-btn">내원확인</a></li><li><a href="#" class="reserv-btn">예약등록</a></li><li class="bor-b-g"><a href="#" class="rc-add ">예약수정</a><ul class="top-80"><li><a href="#" class="reserved-btn">예약수정</a></li><li><a href="#">예약취소</a></li><li><a href="#">예약삭제</a></li></ul></li><li><a href="#">확인콜</a><ul class="top-120"><li><a href="#">완료</a></li><li><a href="#">부재</a></li><li><a href="#">취소</a></li></ul></li><li class="bor-b-g"><a href="#">해피콜</a><ul class="top-160"><li><a href="#">완료</a></li><li><a href="#">부재</a></li><li><a href="#">취소</a></li></ul></li><li><a href="#" class="msg-btn">문자발송</a></li><li class="bor-b-g"><a href="#">고객이동</a></li><li><a href="#">예약복사</a></li><li><a href="#">예약이동</a></li></ul></div>');
          //메뉴보이기+위치
        //   
            var tp = $(this).parents('.table-in');
            //Get window size:
            var winWidth = $(document).width();
            var winHeight = $(document).height();
            //Get pointer position:
            var RposX = e.pageX;
            var RposY = e.pageY;
            var posX = e.pageX - tp.offset().left;
            var posY = e.pageY - tp.offset().top;
            //Get contextmenu size:
            var menuWidth = $('.rcpop').width();
            var menuHeight = $('.rcpop').height();
            //Security margin:
            var secMargin = 10;
            //Prevent page overflow:
            posLeft = posX + 20 + "px";
             posTop = posY + 10 + "px";
            $('.rcpop').removeClass('on');
            //Display menu:
            $('.rcpop').css({
               "left": posLeft,
               "top": posTop
            }).addClass('on');

            //Prevent browser default contextmenu.
            return false;
          }
});
$('body').on('click', function(e){
    var $tgPoint = $(e.target);
    var $popArea = $tgPoint.parents().hasClass('rcpop');

    if ( !$popArea ){
        $('.rcpop').remove();
    }
});
$(document).on('click', '.rcpop a', function(){
    $('.rcpop').remove();
});

//마우스오버 팝업
$('.hoverpopList-res tbody .table-M, .table-M-h').mouseover(function(e){
    console.log('hi');
    var tp = $(this).parents('.table-in');
    //Get window size:
    var winWidth = $(document).width();
    var winHeight = $(document).height();
    //Get pointer position:
    var RposX = e.pageX;
    var RposY = e.pageY;
    var posX = e.pageX - tp.offset().left;
    var posY = e.pageY - tp.offset().top;
    //Get contextmenu size:
    var menuWidth = tp.find('.hoverpop').width();
    var menuHeight = tp.find('.hoverpop').height();
    //Security margin:
    var secMargin = 10;
    //Prevent page overflow:
    if(RposX + menuWidth + secMargin >= winWidth
    && RposY + menuHeight + secMargin >= winHeight){
      //Case 1: right-bottom overflow:
      posLeft = posX - menuWidth - secMargin + "px";
      posTop = posY - menuHeight - secMargin + "px";
    }
    else if(RposX + menuWidth + secMargin >= winWidth){
      //Case 2: right overflow:
      posLeft = posX - menuWidth - secMargin + "px";
      posTop = posY + secMargin + "px";
    }
    else if(RposY + menuHeight + secMargin >= winHeight){
      //Case 3: bottom overflow:
      posLeft = posX + secMargin + "px";
      posTop = posY - menuHeight - secMargin + "px";
    }
    else {
      //Case 4: default values:
      posLeft = posX + secMargin + "px";
      posTop = posY + secMargin + "px";
    }
      
    tp.find('.hoverpop').removeClass('on');
    //Display menu:
    tp.find('.hoverpop').css({
       "left": posLeft,
       "top": posTop
    }).addClass('on');
    
    //Prevent browser default contextmenu.
    return false;
  });



// 메모버튼
var txt_btn = true;
$('.reserv-con .left-f .tabContent textarea').focusin(function(){
        $(".area-btn").addClass('on');
        $(".reserv-con .left-f .tabContent textarea").css('height',"420px");
        txt_btn = false;
});
$('.reserv-con .left-f .tabContent textarea').focusout(function(){
        $(".area-btn").removeClass('on');
        $(".reserv-con .left-f .tabContent textarea").css('height',"460px");
        txt_btn = true;
});

// 설정ul
$(function () {
    var set_on = true
    $('.setup-b').click(function(){
        if(set_on){
            $('.setup-ul').addClass('on');
            set_on = false;
        }
        else{
            $('.setup-ul').removeClass('on');
            set_on = true;
        }
    });
});
// 셀렉트박스
$(document).ready(function () {
    $("div.select").click(function() {
        $(this).children("ul").toggle();
        
    });
    
    $("div.select > ul > li").click(function() {
        $(this).parent().hide().parent("div.select").children("a").text($(this).text()); 
    });
});

$('.bas-view').click(function(){
    $('.hor-view').removeClass('on');
    $('.bas-view').addClass('on');
    $('.con-left, .tab-btn, .res-f, .res-t').removeClass('on');

});
$('.hor-view').click(function(){
    $('.bas-view').removeClass('on');
    $('.hor-view').addClass('on');
    $('.con-left, .tab-btn, .res-f, .res-t').addClass('on');
});

// 일자,예약 버튼
$(document).ready(function(){
    $('.tab-btn button').click(function(){
        var gray_id = $(this).attr('data-id');
        $('.tab-btn button').removeClass('on');
        $('.r-reser').removeClass('on');
        $('.r-memo').removeClass('on');
        $(this).addClass('on');
        $("#"+gray_id).addClass('on');
    });
});
 //day,week,month
$(document).ready(function(){
    $('.ul-tab-box>ul>li').click(function(){
        var res_id = $(this).attr('res-id');
        $('.ul-tab-box>ul>li').removeClass('on');
        $(this).parents('.con-right').find('.tabContent .tabbox').removeClass('on');
        $(this).addClass('on');
        $("#"+res_id).addClass('on');
        //day-box
        if(res_id.indexOf('res-tab1') != -1){
            $('.day-box-text span').removeClass('on');
            $('.day-box-text span.day').addClass('on');
        }else if(res_id.indexOf('res-tab2') != -1){
            $('.day-box-text span').removeClass('on');
            $('.day-box-text span.week').addClass('on');
        }else if(res_id.indexOf('res-tab3') != -1){
            $('.day-box-text span').removeClass('on');
            $('.day-box-text span.month').addClass('on');
        }
    });
});

//모달창
$(".reser-table tbody tr td").on("dblclick", function(){
    if($(this).hasClass('table-M')){
    }else{
        $('#reserv').addClass('on');
    }
});
$(".reser-table tbody tr td .table-M, .table-M-h").on("dblclick", function(){
    $('#reserv-edit').addClass('on');
    setTimeout(function(){$('#reserv').removeClass('on');
    }, 10);
});
$(document).on('click', '.reserv-btn', function(){
    $('#reserv').addClass('on');
});
$(document).on('click', '.reserved-btn', function(){
    $('#reserv-edit').addClass('on');
});
$(document).on('click', '.memo-btn', function(){
    $('#mo-memo').addClass('on');
});
$(document).on('click', '.msg-btn', function(){
    $('#msg').addClass('on');
});
$(document).on('click', '.ex-btn', function(){
    $('#excel-save').addClass('on');
});
$(document).on('click', '.board-btn', function(){
    $('#board-list').addClass('on');
});
$(document).on('click', '.help-btn', function(){
    $('#help').addClass('on');
});
//펜차트 모달
var dbclick=false;
$(document).on('click', '.p-chart>div', function(){
    setTimeout(function(){
        if(dbclick ===false){
            $('#penchart3').addClass('on');
        }
    },300);
}).on('dblclick', '.p-chart>div', function(){
    dbclick = true;
    $('#penchart2').addClass('on');
    setTimeout(function(){
        dbclick = false;
    },500);
});
//
$(document).on('click', '.penchart1-btn', function(){
    $('#penchart1').addClass('on');
});
$(document).on('click', '.chartlist>div', function(){
    $('.modal:not(#penchart2)').removeClass('on');
    $('#penchart2').addClass('on');
});