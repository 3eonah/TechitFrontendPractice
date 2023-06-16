let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date(); //오늘 날짜

function calculateAge() {

    let birthDate = new Date(el.value);
    let age;

    if (today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate())
    ) {
        //생일이 지난 상황이라면
        age = today.getFullYear() - birthDate.getFullYear();

    }
    else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    elResult.innerText = `${age} 세 입니다.`;

}

elSubmit.addEventListener("click",calculateAge);






