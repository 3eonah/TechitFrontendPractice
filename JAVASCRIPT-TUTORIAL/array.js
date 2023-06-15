//스프레드 문법
var mbti=['ENFP','ISTJ','INTP'];
var newmbti=[...mbti, 'CUTE','SEXY'];
console.log(mbti);
console.log(newmbti);

//unshift
var newnewmbti=mbti.unshift('ESFJ');
console.log(newnewmbti);    // ['ESFJ','ENFP','ISTJ','INTP']

//join
console.log(mbti.join());
console.log(mbti.join('-'));
console.log(mbti.join(''));



