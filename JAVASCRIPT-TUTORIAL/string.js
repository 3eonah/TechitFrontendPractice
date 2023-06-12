// 템플릿 리터럴 - 멀티라인 텍스트 작업 가능
var a=`Hello
Everyone :)`;
console.log(a);

var price=1000;
var b = '이 물건은' + price + 1000 + '원 입니다';   //10001000원
var c = `이 물건은 ${price+1000}원 입니다.`; //2000원
console.log(b);
console.log(c);

//slice
var abc ="I am Iron Man";
console.log(abc.slice(0,4));    //0~n-1까지 표현

//startsWith
var efg='This is my cat.';
console.log(efg.startsWith('Th'));
console.log(efg.startsWith('th'));  //대소문자 구분
//endWith
console.log(efg.endsWith('cat.'));
//inclueds
console.log(efg.includes('is'));