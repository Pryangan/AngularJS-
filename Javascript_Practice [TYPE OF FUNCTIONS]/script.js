// var d = new Date();
// document.body.innerHTML = "<h1>"+(d.getMonth() + 1)+"/"+d.getDate()+"/"+d.getFullYear()+"</h1>";

function findBiggestNum(a,b){
  var result;
  return a>b? result = ["Fisrt Number is Biggest :",a] : result = ["Second Number is Biggest : ",b];
}

var First_Num = 23/22;
var Second_Num = 4/3;

console.log(findBiggestNum(First_Num,Second_Num));

var biggestNum = function(a,b){
  var result;
  return a>b? result = ["Fisrt Number is Biggest :",a] : result = ["Second Number is Biggest : ",b];
}

console.log(biggestNum(First_Num,Second_Num));

var a = 10;
var b = 20;

var added = ( function(x,y){
  var sum = x + y;
  return "Sum is "+sum;
})(a,b);

console.log(added);
