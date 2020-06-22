<?php

$result = array();
array_push($result,array(
    "resourceId"=> 'a',
    "title"=> '초진 김지훈',
    "start"=> '2020-06-22T09:00:00',
    "end"=> '2020-06-22T09:30:00',
    "description"=> '' .
        '<ul class="eventDescription">\n'.
        '    <li>\n' .
        '        <span class="popTh">상담일</span> : <span class="popTd">2020-03-04 수</span>\n'.
        '    </li>\n' .
        '    <li>\n' .
        '        <span class="popTh">상담사</span> : <span class="popTd">김진수</span>\n' .
        '    </li>\n' .
        '    <li>\n' .
        '        <span class="popTh">상담분류</span> : <span class="popTd">초진_이벤트</span>\n' .
        '    </li>\n' .
        '    <li>\n' .
        '        <span class="popTh">상담결과</span> : <span class="popTd">성공</span>\n' .
        '    </li>\n' .
        '    <li>\n' .
        '        <span class="popTh">표준금액</span> : <span class="popTd">900,000</span>\n' .
        '    </li>\n' .
        '    <li>\n' .
        '        <span class="popTh">할인금액</span> : <span class="popTd">100,000</span>\n' .
        '    </li>\n' .
        '    <li>\n' .
        '        <span class="popTh">견적금액</span> : <span class="popTd">800,000</span>\n' .
        '    </li>\n' .
        '    <li>\n' .
        '        <span class="popTh">할인사유</span> : <span class="popTd">지인소개</span>\n' .
        '    </li>\n' .
        '    <li>\n' .
        '        <span class="popTh">희망일자</span> : <span class="popTd"></span>\n' .
        '    </li>\n' .
        '    <li>\n' .
        '        <span class="popTh">메모</span> : <span class="popTd">메모를 입력합니다. 메모를 입력합니다. 메모를 입력합니다.</span>\n' .
        '    </li>\n' .
        '</ul>',
));

//return the json response :
header('Content-Type: application/json');  // <-- header declaration
echo json_encode($result, true);    // <--- encode
