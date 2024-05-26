var number = 10
document.write(++number , '<br>')
var num1 = 10
document.write(num1++ , '<br>')
var num2 = 10
document.write(--num2 , '<br>')
var num3 = 10
document.write(num3-- , '<br>')
var a = 2, b = 1;
//             1  -  0 +  2 + 1 = 3
var result = --a - --b + ++b + b--;
document.write(result)
document.write('Subject Totalmark Obtainmark Percentage ,<br>')
var subject1 = "English "
var subject2 = "Urdu "
var subject3 = "Math "
var mark =  100 
var obtainmark = prompt('enter your english marks')
var obtainmark1 = prompt('enter your urdu marks')
var obtainmark2 = prompt('enter your math marks')
document.write(subject1 , mark , obtainmark*mark/100 ,'<br>')
document.write(subject2 , mark , obtainmark1*mark/100 ,'<br>')
document.write(subject3 , mark , obtainmark2*mark/100 ,'<br>')

