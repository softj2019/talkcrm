<?php

$result = array();
$today = date('Y-m-d',time());

array_push($result,
    array(
    "resourceId"=> 'a',
    "title"=> '초진 김지훈',
    "start"=> $today.'T09:00:00',
    "end"=> $today.'T09:30:00',
    "description"=> '' .
        '<ul class="eventDescription">'.
        '    <li>' .
        '        <span class="popTh">상담일</span> : <span class="popTd">2020-03-04 수</span>'.
        '    </li>' .
        '    <li>' .
        '        <span class="popTh">상담사</span> : <span class="popTd">김진수</span>' .
        '    </li>' .
        '    <li>' .
        '        <span class="popTh">상담분류</span> : <span class="popTd">초진_이벤트</span>' .
        '    </li>' .
        '    <li>' .
        '        <span class="popTh">상담결과</span> : <span class="popTd">성공</span>' .
        '    </li>' .
        '    <li>' .
        '        <span class="popTh">표준금액</span> : <span class="popTd">900,000</span>' .
        '    </li>' .
        '    <li>' .
        '        <span class="popTh">할인금액</span> : <span class="popTd">100,000</span>' .
        '    </li>' .
        '    <li>' .
        '        <span class="popTh">견적금액</span> : <span class="popTd">800,000</span>' .
        '    </li>' .
        '    <li>' .
        '        <span class="popTh">할인사유</span> : <span class="popTd">지인소개</span>' .
        '    </li>' .
        '    <li>' .
        '        <span class="popTh">희망일자</span> : <span class="popTd"></span>' .
        '    </li>' .
        '    <li>' .
        '        <span class="popTh">메모</span> : <span class="popTd">메모를 입력합니다. 메모를 입력합니다. 메모를 입력합니다.</span>' .
        '    </li>' .
        '</ul>',
    )
);
array_push($result,
    array(
        "resourceId"=> 'a',
        "title"=> '초진 김지훈',
        "start"=> $today.'T09:00:00',
        "end"=> $today.'T09:30:00',
        "description"=> '' .
            '<ul class="eventDescription">'.
            '    <li>' .
            '        <span class="popTh">상담일</span> : <span class="popTd">2020-03-04 수</span>'.
            '    </li>' .
            '    <li>' .
            '        <span class="popTh">상담사</span> : <span class="popTd">김진수</span>' .
            '    </li>' .
            '    <li>' .
            '        <span class="popTh">상담분류</span> : <span class="popTd">초진_이벤트</span>' .
            '    </li>' .
            '    <li>' .
            '        <span class="popTh">상담결과</span> : <span class="popTd">성공</span>' .
            '    </li>' .
            '    <li>' .
            '        <span class="popTh">표준금액</span> : <span class="popTd">900,000</span>' .
            '    </li>' .
            '    <li>' .
            '        <span class="popTh">할인금액</span> : <span class="popTd">100,000</span>' .
            '    </li>' .
            '    <li>' .
            '        <span class="popTh">견적금액</span> : <span class="popTd">800,000</span>' .
            '    </li>' .
            '    <li>' .
            '        <span class="popTh">할인사유</span> : <span class="popTd">지인소개</span>' .
            '    </li>' .
            '    <li>' .
            '        <span class="popTh">희망일자</span> : <span class="popTd"></span>' .
            '    </li>' .
            '    <li>' .
            '        <span class="popTh">메모</span> : <span class="popTd">메모를 입력합니다. 메모를 입력합니다. 메모를 입력합니다.</span>' .
            '    </li>' .
            '</ul>',
    )
);
//return the json response :
header('Content-Type: application/json');  // <-- header declaration
echo json_encode($result, true);    // <--- encode
