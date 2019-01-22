var b1 = document.getElementById("but1");
b1.addEventListener("click",function(){
    //document.querySelector("body").style.backgroundImage ="http://clipart-library.com/images/kiMKrGeLT.png";
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var sum=parseInt(num1)+parseInt(num2);
    document.querySelector("h2").innerHTML=`<h3>The Addition is <em>${parseInt(sum)}</em></h3>`;

})
var b2 = document.getElementById("but2");
b2.addEventListener("click", function () {
    document.querySelector("body").style.backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrhT549ei1wwkF1KJP7Pb-DpRHng5xFUTEPKT3wWqdmdKjoEi";
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var sum = parseInt(num1) - parseInt(num2);
    document.querySelector("h2").innerHTML = `<h3>The Subtraction is <em>${parseInt(sum)}</em></h3>`;

})
var b3 = document.getElementById("but3");
b3.addEventListener("click", function () {
    document.querySelector("body").style.backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiVpLe4kXdB0YcVdxjC9fZw7tN9nL3s9BQZs8ljEhqAsEH0G_Cg";
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var sum = parseInt(num1) * parseInt(num2);
    document.querySelector("h2").innerHTML = `<h3>The Multiplication is <em>${parseInt(sum)}</em></h3>`;

})
var b4 = document.getElementById("but4");
b4.addEventListener("click", function () {
    document.querySelector("body").style.backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZiGQmM0X7aIqB8GlnLmlCBSxqrJLDo7cnaOV_gBXowBulSoC";
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var sum1 = parseFloat(num1) / parseFloat(num2);
    var sum2 = parseFloat(num1) % parseFloat(num2);
    var s =""+sum1+"."+sum2+"";
    document.querySelector("h2").innerHTML = `<h3>The Division is <em>${parseFloat(s)}</em></h3>`;

})
var b5 = document.getElementById("but5");
b5.addEventListener("click", function () {
    document.querySelector("body").style.backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZiGQmM0X7aIqB8GlnLmlCBSxqrJLDo7cnaOV_gBXowBulSoC";
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var sum2 = parseFloat(num1) % parseFloat(num2);
    document.querySelector("h2").innerHTML = `<h3>The Modulo is <em>${parseFloat(sum2)}</em></h3>`;

})
var b6 = document.getElementById("but6");
b6.addEventListener("click", function () {
    document.querySelector("body").style.backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZiGQmM0X7aIqB8GlnLmlCBSxqrJLDo7cnaOV_gBXowBulSoC";
    var num1 = document.getElementById("n1").value;
    var sum1 = parseFloat(num1) * parseFloat(num1); 
    
    document.querySelector("h2").innerHTML = `<h3>The Square is <em>${parseFloat(sum1)}</em></h3>`;

})
var b7 = document.getElementById("but7");
b7.addEventListener("click", function () {
    document.querySelector("body").style.backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZiGQmM0X7aIqB8GlnLmlCBSxqrJLDo7cnaOV_gBXowBulSoC";
    var num1 = document.getElementById("n1").value;
    var sum1 = parseFloat(num1) * parseFloat(num1) * parseFloat(num1);
    document.querySelector("h2").innerHTML = `<h3>The Cube is <em>${parseFloat(sum1)}</em></h3>`;

})
var b8 = document.getElementById("but8");
b8.addEventListener("click", function () {
    document.querySelector("body").style.backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZiGQmM0X7aIqB8GlnLmlCBSxqrJLDo7cnaOV_gBXowBulSoC";
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var sum1 = parseFloat(num1) / parseFloat(num2);
    var sum2 = parseFloat(num1) % parseFloat(num2);
    var s = "" + sum1 + "." + sum2 + "";
    document.querySelector("h2").innerHTML = `<h3>The  is <em>${parseFloat(s)}</em></h3>`;

})
addEventListener("reset",function(){
    document.querySelector("h2").innerHTML = "";
})
