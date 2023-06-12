var name1="김멋사";
var name2="김멋사";

console.log(name1==name2);  //true

var name3=Symbol("테킷");
var name4=Symbol("테킷");
console.log(name3==name4);  //false

var myclass={
    //속성명은 같지만 다르게 취급
    [Symbol("테킷")]:1,
    [Symbol("테킷")]:2,
}
