// 함수 표현식
var multiply=function(a, b){
    return a* b;

};
console.log(multiply(10,5));

// 호이스팅
console.log(word);
word="happy";
console.log(word);
var word;

// let
var a=10;
while(true){
    let a=1000;
    break;
}
console.log(a);

// const로 선언된 변수에 할당된 객체
const student = {
    grade: 1,
    class: 3
};
student.grade=2;    //const로 선언된 변수에 할당된 객체의 속성값 변경 가능
console.log(student);

//---- Error -> const로 선언된 변수에 새로운 객체 할당 불가
// student={
//     num:2012,
//     grade: 2
// }
// console.log(student);

// 화살표 함수
let plus = (a,b) => {
    return a + b;
};
console.log(plus(2,3));

let sub = (a,b) => a-b; 
console.log(sub(2,3));

let print = word => {
    // 매개변수가 1개인 경우
    console.log(word);
}
print("Hello");

let myfunc = () => {
    // 매개변수가 없는 경우
    return 1;
}
console.log(myfunc());