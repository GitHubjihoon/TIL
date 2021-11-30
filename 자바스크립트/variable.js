// 1. Use strict
// added is ES 5
// use this for Vanila Javascript.
'use strict';

// 2. variable (변수)
// let (added in ES6)

let name = 'JJang Gu';
자바스크립트 3. 데이터 타입, data types, let VS var, hoisting




01. use strict


자바스크립트는

다소 자유분방한 모습이 있습니다.

그래서 간혹 개발자들을 당황시키기도 합니다.

"예를들어 선언한적 없는 변수에 값을 할당한다던가 하는 것을 통해서 말이죠."


이 문제를 해결하기 위해 ECMA에서 ES5 부터

단, 코드 한줄을 통하여 자바스크립트 만의 튀는 모습들을

어느정도 통제하는 방법을 적용하였습니다.


사용 방법은 자바스크립트 파일 상단에


'use strict';
내용을 입력하세요.
'use strict'; 라고 작성하는 것이죠


아주 간단하게 strict 파일을 생성할 수 있습니다 ㅎㅎㅎ



02. Variable


Variable, 한국말로 변수

어떠한 값을 할당하고 그 값이 변할 수 있는 데이터 형태


자바스크립트는

let이라는 키워드를 통하여 변수를 선언할 수 있습니다.

ex)


let name = 'JJang Gu';
console.log(name);  // 결과로 콘솔에 'JJang Gu'가 출력된다

name = 'hello';
console.log(name);   // 결과로 콘솔에 'hello'가 출력된다
내용을 입력하세요.
let name 을 통해서 name 이라는 이름의 변수를 선언(생성)합니다

그 다음 = 'JJang Gu'; 를 통해서 생성한 변수(name)에 JJang Gu 이라는 값을 할당했습니다.


아래에 보면 name = 'hello'; 를 통해서 JJang Gu 라는 값이 담겨있는 변수 (name)에 새로운 값을

덮어 씌운걸 볼 수 있습니다.

이렇게 값이 변하는 수 라서 변수 입니다.


값이 변하는 구조는

1. 어플리케이션을 실행하면 사용 가능한 방들(메모리)을 할당받게 됩니다.

(어플리케이션 마다 메모리는 제한되어 할당됩니다.)

2. 변수를 선언한다 라는건 사용 가능한 방(메모리)의 열쇠가(하나를 가르키는 포인터가) 생성된다는 것 입니다.

3. 변수에 값을 할당한다 라는건 방(메모리)에 값을 넣어두는 것 입니다.


변수_선언_메모리.png대표이미지 삭제
변수에_값을_할당.png대표이미지 삭제
사진 설명을 입력하세요.



2. Block scope



﻿
console.log(name);

name = 'hello';
console.log(name);


