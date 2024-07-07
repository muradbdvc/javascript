// var x=10;
// {
//     var x=20;
//     console.log(x);
// }
// console.log(x);

// for(let i=0; i<10; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000);
// }
// function requiredArg(){
//     throw new Error("Required parameter");
// }
// function person(height=requiredArg(), age=requiredArg()){
//     this.height=height;
//     this.age=age;
//     console.log(height);
//     console.log(age);
// }
// person(170,30)

/*** JavaScript Variable
const person = {name:"Hasan",age:30,address:{city:"Dhaka"}};

let {name,age,gende:sex="male",address:{city}}=person;
console.log(name)
console.log(age)
console.log(sex)
console.log(city)
*/

/*Area in javaScript
var base = parseFloat(prompt("Enter Base = :" ));
var height = parseFloat(prompt("Enter Height = :" ));
var area = base * height;
document.write("Area = "+area);
*/

/* temparuture calculator
var farn =parseFloat(prompt("enter Fahrenhit : " ));
var cels = (farn - 32) * (5 / 9);
document.write("Celsius = "+cels);
*/
/*Ternary Operator
var number = prompt("Enter a number :");
var result = number >0 ? "positive" : "Negative";
document.write(result)
 */
/*
var num =parseFloat(prompt('put a number : '));
var result= num<=100 && num>=80 ? 'A+' : num<80&&num>=70 ? 'A' : num<70&&num>=60 ? "A-" : num<60&&num>=50 ? "B" : num<50&&num>=40 ? "C" : num<400&&num>=33 ? "D" : "Fails";
console.log(result); */
/*
const images = ["assets/land.png","assets/landing.png","assets/website.png"];
const imgTag = document.querySelector("img");

let count = 0;

function next(){
    count ++;
    if (count >= images.length){
        count=0;
        imgTag.src = images[count];
    }
    else{
        imgTag.src = images[count];
    }
}
function prev(){
    count --;
    if (count<0){
        count=images.length-1;
        imgTag.src = images[count];
    }
    else{
        imgTag.src = images[count];
    }
}   

var date = new Date();
console.log(date);
var year = date.getFullYear();
console.log(year); 
document.getElementById("h1").innerHTML="hello";
var js=document.getElementById("js");
js.innerHTML="LoveScropt";

document.getElementsByTagName("h2")[0].innerHTML="hello";
document.getElementsByClassName("h3")[0].innerHTML="Hi"; */
document.querySelector("#pid").innerHTML="Hello";
function myMessage(){
    // alert("hello");
    var changePa=document.querySelector("#para");
    changePa.innerHTML='This is test paragraph. This is test paragraph. This is test paragraph. This is test paragraph. This is test paragraph.';
};