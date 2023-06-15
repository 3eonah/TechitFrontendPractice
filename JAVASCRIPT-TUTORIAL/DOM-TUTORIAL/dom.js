var el=document.getElementById("title");
console.log(el);

console.log(el.innerHTML);
console.log(el.innerText);  //text 자체만 반환

el.innerText = "안녕하세요 :)";

var el2=document.getElementsByClassName('sub-title');
console.log(el2);