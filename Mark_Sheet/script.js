var islamiat = +prompt("Enter Islamiat Number");
var math = +prompt("Enter Math Number");
var urdu = +prompt("Enter Urdu Number");
var science = +prompt("Enter Science Number");
var english = +prompt("Enter English Number");
var totalNumber = 500;
var achieveNumber = islamiat + math + urdu + science + english;
var percentage = (achieveNumber / totalNumber) * 100;
document.write(achieveNumber);
document.write("<br>");
// document.write(achieveNumber, totalNumber);
document.write(percentage);

document.write("<br>");
if (percentage >= 80 && percentage < 101) {
  document.write("A+");
} else if (percentage >= 70 && percentage < 80) {
  document.write("A");
} else if (percentage >= 60 && percentage < 70) {
  document.write("B");
} else if (percentage >= 50 && percentage < 60) {
  document.write("C");
} else if (percentage >= 40 && percentage < 50) {
  document.write("D");
} else {
  document.write("Not Valid");
}
