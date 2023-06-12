// object
var student = {
    grade: 1,
    school: "lion school"
}

console.log(student);
console.log(typeof(student));

// 객체의 값 호출
var gradeInfo=student.grade;
console.log(gradeInfo);
console.log(student['grade']);

// 객체의 키 호출
var key=Object.keys(student)[0];
console.log(key);

// 객체에 속성 추가
student.class=3;
console.log(student);

// 비어있는 객체
var teacher = new Object(); //생성자 사용
var teacher={
    
};

