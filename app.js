//*** chp 1 task 1 */
//var a = 'Hello World!'
//alert(a)


//****chp 1 question 2 */
//alert("Error! Please enter a valid password.");

//***question 3 */
//alert("Welcome to JS LAND \n Happy Coding!")


// question 4 /
// var m = 'Welcome To Js Land'
// alert(m)

//***question 5 */
//console.log("Hello... I can run JS through my web browser's console")


//***chp 2 question 1*/
//var username = "Jhone Doe";
//alert(username)

//***question 2 */
//var  myName = "John";
//var myNme2 = "Doe";
//var a = myName.concat (myNme2);
//var  myName = "John";
//alert(a)

//var myName = "John";
//var myNme2 = "Doe";
//var a = myName + " " + myNme2;
//alert(a)

//***question 3 */
 //var message = "Hello World"
 //alert(message)

//*8* question 3 */
//let message;
//message = "Hello World"
//alert(message)

 //***question 4 */
 //alert("John Doe");
 //alert("15 Year old");
 //alert("Certified Application Development");

 //var name = "John Doe";
 //var age = "15 Year old";
 //var a = "certified mobile app development";
 //alert(name)
 //alert(age)
 //alert(a)

 //***question 5 */
 //alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

 //***question 6  *
 //var email = "example@example.com"
 //alert("My Email Address is ".concat(email))

 //***question 7 */
// var book = "A Smarter way to learn JavaScript";
 //alert("I am trying to learn from the book ".concat(book) )

 //***question 8 *
 //document.write("Yah! I can write HTML content through JavaScript");

 //***question 9 */
 // 
 //var a = (“ ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ” )
 //alert(a)

 //chapter 3 question 1 *
 //var age = prompt("How Old Are You");
 //alert("i am "+ age + " year old")

 //***question 3*/
 //var birthYear = prompt("What year were you born");
 //document.write("My Birth year is ".concat (birthYear));

 //***question 4 */
//var a = prompt("What is your name");
//var b = prompt("PRODUCT IS \n t-shirts, \n caps, \n paints \n How many products you want to order");
//document.write (a +' ordered ' + b + " on XYZ Clothing store" )

//***chp 4 question 1 */
//var one = 1, two = 2, three = 3;
//alert(one + two + three)

//***chp 4 question 2 */
//var a = 6;
//var $my_1stVariable = 'hello';
//var $name = 5;
//var abc = 2;
//var upperCase = hi;

//var 123 = hh;
//var ABC = 1;
//var #! = 3;
//var 3nkk = 3;
//var &23= 6;


//***chp 4 question 3 */
//document.write("<h1> Rules for naming JS variables</h1>");
//var a = "Variable names can only contain";
//var a1 = "For Example: $my_1stVariable";
//var b = "<br>";
//var c = "Variables must begin with a ";
//var c1 = "For Example  $name, _name or name  ";
//var d = "Variables names are case";
//var e = "Variables names should not be JS";
//document.write(a + ". number , $ and alphets,  _. " + a1);
//document.write(b + c + ". small alphets, $ or __. " + c1);
//document.write(b + d + " sensitive")
//document.write(b + e + " keywords")

//***chp 5 question 1 */
//var a = 5;
//var b = 3;
//var c = a+b;
//document.write("sum of " + a + " and " + b + " is " + c)

//*** chp 5 question 2*/
//var a = prompt("Enter your number")
//var b = prompt("Enter operator + - * /")
//var c = prompt("Enter your second number")

//function add(x, y){
//var result = parseInt(x) + parseInt(y);
    //document.write("Addition result is " + result);
//}
//function sub(x, y){
    //var result = x - y;
    //document.write("sub result is " + result);
//}
//function multiply(x, y){
    //var result = x * y ;
    //document.write("multiply result is " + result);
//}
//function divide(x, y){
    //var result = x / y ;
    //document.write("divide result is " + result);

//}
//function modulus(x, y){
    //var result = x % y ;
    //document.write("modulus result is " + result);

//}

//if (b === "+"){
    //add(a,c);
//}
//else if (b === "-"){
    //sub(a,c);
//}
//else if (b === "*"){
    //multiply(a,c);
//}
//else if (b === "/"){
    //divide(a,c);
//}
//else if (b === "%"){
    //modulus(a,c);
//}
//else{
    //alert("Invalid operator")
//}
//***question 3 */
//var s = "<br><br> Value after variable decleration is 5"
//var x = 5;
//var t = "<br><br> Intial value:" + " " + x;
//var i = ++x;
//var h ="<br> Value after increment is :" + " " + i
//var o = 7 + i
//var x = "<br> Value after addition is :" + " " + o
//var k = --o;
//var d = "<br> Value after decrement is :" + " " + k
//var f = k % 3;
//var i = "<br> the remainder is :" + " " + f
//document.write("<br>"+s);
//document.write("<br>"+t);
//document.write("<br>"+h);
//document.write("<br>"+x);
//document.write("<br>"+d);
//document.write("<br>"+i);


//***question 4 */
//var movieTicket = "600";
//var add = movieTicket * 5;
//alert("Total cost to buy 5 tickets to a movie is" + add)

//***question 4 */
//var movieTicket = 600;
//var a = prompt("How much you want movie tickets\n One ticket price 600rs")
//if(a === '2'){
    //var combine = movieTicket * 2;
    //document.write(combine)
//}
//else if (a === '3'){
    //var combine2 = movieTicket * 3;
    //document.write(combine2)
//}
//else if (a === '4'){
    //var combine2 = movieTicket * 4;
    //document.write(combine2)
//}
//else if (a === '5'){
    //var combine2 = movieTicket * 5;
    //document.write("Total cost to buy 5 ticket to a movie is " + combine2)
//}
//else{
    //alert("Only 5 tickets allow")
//}

//***question 5 */
//var a = 5;
//var b;
//for( var i = 1 ; i <= 10 ; i++){
    //b = a * i;
    //document.write(" " +a+ 'x' +i+ '=', + b + '<br>' );
//}

//***question 7 *
//var h = ("<h1> Shopping Cart </h1>" + '<br>')
//var x = 650
//var a = (" Price of item 1 is " + " " + x)
//var y = x * 3  
//var b = ("  Ordered quantity of item 1 is " + 3)
//var z = 100
//var c = (" Price of item 2 is " + z)
//var i = z * 7
//var f = ("Ordered quantity of item 2 is " + 7)
//var m = 100
//var d = ("Shipping Charges " + m)
//var result = (y + i + m)
//document.write(h + '<br>')
//document.write(a +'<br>')
//document.write(b + '<br>')
//document.write(c + '<br>')
//document.write(f + '<br>')
//document.write(d + '<br>')
//document.write("Total Cost of Your Order is " + result)

//***question 8 */
//804/980*100
//var h = ("<h1><b> Mark Sheet </b></h1>" + '<br>')
//var x = 980;
//var a = ("Total Marks : " + x);
//var y = 804;
//var b = ("Marks Obtained : " + y );
//document.write(h + '<br>')
//document.write(a + '<br> ')
//document.write(b + '<br>')
//document.write("Precentage : " + y / x * 100)

//*** question 9 */
//1048+700
//var usDollar = 104.80;
//var a = usDollar * 10;
//var saudiRiyal = 28;
//var b = saudiRiyal * 25;
//var result = a + b;
//document.write("<h1><b>Currency in PKG</b></h1>" + '<br>')
//document.write("Total Currency in PKG " + result)

//*** question 10 */
//var a = 5 + 5 * 10 / 2
//document.write(a)

//*** question 11 */
//var x = 2016;
//var a = ("Current Year " + x );
//var y = 1992;
//var b = ("Birth Year " + y);
//var c = x - y;
//document.write("<h1><br>Age Calculator</br></h1>" +'<br>')
//document.write(a + '<br>')
//document.write(b + '<br>')
//document.write("Your Age is " + c )

 //*** 11 */
  //var currentYear = 2020;
 //var a = prompt("Enter your Birth year");
 //var result = currentYear - a;
 //document.write(result)


 //*** question 12 */
//  var a = prompt("Enter the radius in m");
//  var b = 3.142;
//  var x = 2* b * a;
//  var y = Math.PI*2*a;
//  var p = '<br>'+'<br>'+'Radius of a circle :'+" "+ a;
//  var t ='<br>'+'The circumference is :'+" "+x;
//  var y ='<br>'+' The area is :'+" "+y;
//  document.write(p + "<br>");
//  document.write(t + "<br>");
//  document.write(y + "<br>");
 //*** question 13 */
 //var a =  prompt("Enter your  favorite snack ");
 //var b = prompt("Enter your Current age");
 //var c = prompt("Enter your  maximum age ");
 //var d = prompt("Enter estimated amount per day");
 //var cal = c - b;
 //var result = cal * d;
 //document.write("<h1><b>The Life Time Supply Game</b></h1>" + '<br>')
 //document.write("Your Favourite Snack is " + a + '<br>')
 //document.write("Your Current Age is " + b + '<br>')
 //document.write("Your Maximum Age  is " + c + '<br>')
 //document.write("Your Estimated Amount per Day is " + d + '<br>')

 //document.write( "You will need " + result + " to last you until the ripe old age of " + c )

 //***chapter 6-9 task 1 */
 //var a = 10;
 //document.write("Result : " + '<br>')
 //document.write("The Value of a is " + a + '<br>')
 //document.write("------------------" + '<br>')
 //var b = ++a;
 //document.write("The Value of ++a is : " + b + '<br>' )
 //document.write("Now the Value is : "+ a + '<br>')
 //var c = a++ ;
 //document.write("The Value of a++ is : " + c + '<br>' )
 //document.write("Now the Value is : "+ a + '<br>')
 //var d = --a ;
 //document.write("The Value of --a is : " + d + '<br>' )
 //document.write("Now the Value is : "+ a + '<br>')
 //var f = a-- ;
 //document.write("The Value of a-- is : " + f + '<br>' )
 //document.write("Now the Value is : "+ a + '<br>')

 //*** tasks 2 */
 //var a = 2;
 //var b = 1; 
 //var result = --a - --b + ++b + b--; 
             //   1  -  0  + 1  +  1 = 3
//document.write(result)
//var a = 2;
//var b = 1;
//var c = --a;
//document.write("--a = 1 " + " Answer " + c + '<br>')
//var d = --b;
//var e = a - b;
//document.write("--b = 0  than a - b " + " Answer " + e + '<br>')
//var f = ++b; 
//var g = --b + ++b;
//document.write("--b = 0 + ++b = 1" + " Answer " + g +'<br>')
//var h = b--;
//var m = ++b + b--;
//document.write("++b + b-- = 2" + " Answer " + m + '<br>')
//var result = c + m
//document.write( "Final Answer is " + result)

//***question 3 */
//var a = prompt("Enter Your Name")
//var b = ("Welcome " + a )
//document.write(b)

//***question 5 */
//var a = +prompt("Enter your number for Table");
//for (i=1;i<=10 ;i++){
    //if (a ==" "){
        //document.write("<br>" + 5 + ' x ' + i + ' = ' + 5*i + '<br>')
//}
//else{
    //document.write("<br>" + a + ' x ' + i + ' = ' + a*i + '<br>')
//}
//}

//*** question 6 */

// document.write('<h1><b> MARKS SHEET</b></h1>' + '<br>')
// var x = +prompt('Enter Your first subject Marks Obtained ')
// var y = +prompt("Enter Your second subject Marks Obtained")
// var z = +prompt("Enter Your third subject Marks Obtained")
// var  total = +prompt("Enter Total Marks")
// var f = x+y+z;
// var d = f/total*100;
// document.write("Total Marks is :" + total + '<br>')
// document.write("Marks Obtained : " + f  +'<br>')
// document.write('Precentage ' + d + '%' + '<br>')

// if (d >= '80'){
//     document.write("Grade : A-One" + '<br>')
//     document.write("Remarks : Excellent" + '<br>')
// }
// else if (d >= '70'){
//     document.write("Grade : A" + '<br>')
//     document.write("Remarks : Good" + '<br>')
// }
// else if (d >= '60'){
//     document.write("Grade : B" + '<br>')
//     document.write("Remarks : You need to improve" + '<br>')
// }
// else {
//     document.write("Grade : Fail" + '<br>')
//     document.write("Remarks : Sorry")
// }


//***9-11 question 1 */
//var a = prompt("Enter your city name")
//if (a === "karachi"){
    //var x = "Welcome to city of Karachi"
    //document.write(x +  '<br>')
//}
//else{
    //var y = (" Welcome to " + a );
    //document.write(y + '<br>')
//}

//***task 2 */
//var a = prompt("Enter your Gender")
//if (a === "male"){
    //var m = "Good Morning Sir,"
    //document.write(m)
//}
//else if (a === "female"){
    //var f = " Good Morning Madam,"
    //document.write(f)
//}

//*** task 3 */
//var a = prompt("Enter Road Traffic Light Colour")
//if(a === "red"){
    //var r = "Must Stop";
    //document.write(r)
//}
 //else if(a === "yellow"){
    //var y = "Ready to Move";
    //document.write(y)
//}
//else if(a === "green"){
    //var g = "Move Now";
    //document.write(g)
//} 
//else{
    //alert('Wrong Answer')
//}

//***question 4 */
//var a = prompt("Enter your Amount of Petrol in liters ")
//if (a === "0.25Liters"){
    //var p = "Please refill the fuel in your car"
    //document.write(p)
//}
//else{
    //document.write("Error")
//}

//***question 5 */
//var a = 4;
 //if (++a === 5){ 
     //alert("given condition for variable a is true"); 
 //}
 //var b = 82;
  //if (b++ === 83){ 
      //alert("given condition for variable b is true");
 //} 
 //var c = 12; 
 //if (c++ === 13){ 
     //alert("condition 1 is true"); 
//}
//if (c === 13){ 
    //alert("condition 2 is true");
 //}
 //if (++c < 14){ 
     //alert("condition 3 is true"); 
//}
//if(c === 14){ 
    //alert("condition 4 is true"); 
//} 
//var materialCost = 20000; 
//var laborCost = 2000; 
//var totalCost = materialCost + laborCost; 
//if (totalCost === laborCost + materialCost){ 
    //alert("The cost equals"); 
//} 
//if (true){ 
    //alert("True");
 //} 
//if (false){ 
        //alert("False"); 
//} 
//if("car" < "cat"){ 
    //alert("car is smaller than cat"); 
//} 

//***question 6 */
//document.write('<h1><b> MARKS SHEET</b></h1>' + '<br>')
//var x = +prompt('Enter Your first subject Marks Obtained ')
//var y = +prompt("Enter Your second subject Marks Obtained")
//var z = +prompt("Enter Your third subject Marks Obtained")
//var  total = +prompt("Enter Total Marks")
//var f = x+y+z;
//var d = f/total*100;
//document.write("Total Marks is :" + total + '<br>')
//document.write("Marks Obtained : " + f  +'<br>')
//document.write('Precentage ' + d + '%' + '<br>')

//if (d >= '80'){
    //document.write("Grade : A-One" + '<br>')
    //document.write("Remarks : Excellent" + '<br>')
//}
//else if (d >= '70'){
    //document.write("Grade : A" + '<br>')
    //document.write("Remarks : Good" + '<br>')
//}
//else if (d >= '60'){
    //document.write("Grade : B" + '<br>')
    //document.write("Remarks : You need to improve" + '<br>')
//}
//else {
    //document.write("Grade : Fail" + '<br>')
    //document.write("Remarks : Sorry")
//}

//***question 7 */
//const num = Math.ceil(Math.random() * 10);
//document.write(num);
 //const gnum = prompt('Guess the number between 1 and 10 inclusive');
 //if (gnum == num)
   //document.write('Matched');
  //else
   //document.write('Not matched, the number was '+ gnum); 
//***q7 */
//var a = prompt("Enter your secret number")
//if (a === '1'){
    //var g = "Bingo! Correct Answer"
    //document.write(g)
//}
//else{
   // document.write("Close enough to the correct answer")
//}

//*** question 8 */
//var a = prompt("Enter Your Number for Divisible By 3")
//if( a % 3 === 0){
    //document.write(a + " Divisible By 3")
//}
//else{
    //document.write(a + " not working")
//}
//*** question 9 */
//var a = prompt("Enter your Even number")
//if (a % 2 === 0){
    //document.write(a + " Even Number,")
//}
//else{
    //document.write(a + ' Not Even Number,')
//}

//*** question 10 */
//var a = prompt("Enter Your City Temperature")
//if (a === '40'){
    //var t = "It is too hot outside."
    //document.write(t)
//}
//else if (a === '30'){
    //var t = "The Weather today is Normal."
    //document.write(t)
//}
//else if (a === '20'){
    //var t = "Today’s Weather is cool."
    //document.write(t)
//}
//else if (a === '10'){
    //var t = "OMG! Today’s weather is so Cool."
    //document.write(t)
//} 

//*** question 11 */
//var a = prompt("Enter your number")
//var b = prompt("Enter operator + - * /")
//var c = prompt("Enter your second number")

//function add(x, y){
//var result = parseInt(x) + parseInt(y);
    //document.write("Addition result is " + result);
//}
//function sub(x, y){
    //var result = x - y;
    //document.write("sub result is " + result);
//}
//function multiply(x, y){
    //var result = x * y ;
    //document.write("multiply result is " + result);
//}
//function divide(x, y){
    //var result = x / y ;
    //document.write("divide result is " + result);

//}
//function modulus(x, y){
    //var result = x % y ;
    //document.write("modulus result is " + result);

//}

//if (b === "+"){
    //add(a,c);
//}
//else if (b === "-"){
    //sub(a,c);
//}
//else if (b === "*"){
    //multiply(a,c);
//}
//else if (b === "/"){
    //divide(a,c);
//}
//else if (b === "%"){
    //modulus(a,c);
//}
//else{
    //alert("Invalid operator")
//}

///*** chpter 12- 13 */
//question1//
// var a = prompt('Enter Alphabet')
// var v = a.charCodeAt();
// if(v <= 90){
//     alert('Uppercase')
// }
// else{
//     alert('lowercase')
// }

//***question 2 */
//var a = prompt('Enter 1st Number')
//var b = prompt("Enter Second Number")
//if (a > b){
    //document.write("Num 1 is larger then Num 2")
//}
//else if (a < b){
    //document.write("num 2 is grater then num 1")
//}
//else{
    //document.write("Equal")
//}
//*** question 3 */
//var a = prompt("Enter Your Number") 
//if (a % 2===0){
    //document.write("Positive")
//}
//else if ( a % 3==0){
    //document.write("Negative")
//}
//else if (a === 0 ){
    //document.write('ZERO')
//}
//***question 3 */
//var a = prompt("Enter Your Number") 
//if (a > 0){
    //document.write("Positive")
//}
//else if ( a < 0){
    //document.write("Negative")
//}
//else if (a === '0'){
    //document.write('ZERO')
//}
//** question 4 */ */
//var a = prompt('Enter String Value')
//var b = a.length;
//document.write(b)


 //var a = prompt("ENTER NUM")
 //if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u" ){
    //alert("Vowels")
//}
//else{
    //alert("False")
//}
//***question 5 */
//var password = "a1b2c344"
//var a = prompt("Enter a password")
//var b = prompt("Enter confirm password")
//if (password == a , b){
    //alert("The password you entered matches the original password")
//}
//else if (password === "' '" + alert("Please enter your password")){
    
//}
//else{
    //alert('incorrect password')
//}

//***question 6 */
//var hour = 13; 
//if (hour < 18) { 
    //alert ("Good day")
//} 
//else {
    //alert("Good evening")
//} 
////////////////////////////////
//var greeting = "Good Day"; 
//var hour = 13; 
//if (hour < 18) { 
    //alert(greeting)
//}
//else {
    //alert("Good evening")
//} 
//***questi0on 7 */
//var time = prompt("Enter current time")
//if(time >= 0000 && time < 1200){
    //alert("Good Morning")
//}
//else if(time >= 1200 && time < 1700){
    //alert("Good Afternoon")
//}
//else if(time >= 1700 && time < 2100){
    //alert("Good Evening")
//}
//else if (time >= 2100 && time < 2359){
    //alert("Good Night")
//}
 //***chapter 14-16 task 1 */
 //var arr=[]

 //***task 2 */
 //var n =  new Array()
  
 //***task 3 */
 //var arr =['hello','world','java','script']
 //alert(arr)

 //*** task 4 */
 //var arr =[2,4,7,8]
 //alert(arr)
  
//*** task 5 */
//var arr=['javascript','python','c++']
//var a = prompt("Enter Your Language")
//if ( a === 'javascript'){
    //alert('TRUE')
//}
//else {
    //alert("FALSE")
//}

//*** task 6 */
//var arr = [2,'python',8,'watch']
//alert(arr)

//*** task 7 */
//var a = ["1)SSC" ]
//var b = ["2)HSC" ]
//var c = ["3)BCS" ]
//var d = ["4)BS" ]
//var e = ["5)BCOM" ]
//var f = ["6)MS" ]
//var g = ["7)M.Phil" ]
//var h = ["8)phD" ]

//document.write([a ] + '<br>')
//document.write([b ] + '<br>')
//document.write([c ] + '<br>')
//document.write([d ] + '<br>')
//document.write([e ] + '<br>')
//document.write([f ] + '<br>')
//document.write([g ] + '<br>')
//document.write([h ] + '<br>')
//*** task 7 */
//var arr = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','phD']
//for(i = 0 ; i < arr.length ; i++){
    //document.write( i + " " + arr[i] + '<br>')
//}

//*** task 8 */
//var arr = ["Michael","John","Tony"]
//var score =[320,230,480];
//var total = 500;
//var a = score[0]/500*100;
//var b = score[1]/500*100;
//var c = score[2]/500*100;
//document.write('Score of ' + arr[0] + ' is ' + score[0] + ' percentage : ' + a + '%' +'<br>' )
//document.write('Score of ' + arr[1] + ' is ' + score[1] + ' percentage : ' + b + '%' +'<br>' )
//document.write('Score of ' + arr[2] + ' is ' + score[2] + ' percentage : ' + c + '%' + '<br>' )

//*** task 9 */
//var arr = ['red','green','yellow'];
 //arr.unshift("black")
 //arr.push("white")
 //arr.unshift("orange","pink")
 //delete arr[0]
 //arr.pop();
//alert(arr)
 //a = arr.unshift(prompt("Enter your fav color"))
 //alert([arr])
 //a = arr.push(prompt("Enter your fav color"))
 //alert([arr])
 //a = arr.unshift(prompt("Enter your fav two color in your browser"))
 //alert([arr]) 
 //a = arr.splice(prompt("Enter color"))
 
       ///SPLICE///
 //var color = ['red','blue','pink','orange','white']
 //color.splice(1,2, "purple");
 //alert(color)
 //a = color.splice(prompt('enter index num '),1,prompt("Enter your color"));
 //alert(color)
    ////SLICE///
//a = color.slice(prompt('enter index num '),prompt("How much color you want to delete"));
//alert(a)
//var arr = color.slice(0, 5);
//delete arr[2]
 //alert(arr)

//***task 10 */
 //var fruits = ["Banana", "Orange", "Apple", "Mango"];
 //fruits.sort();
 //alert(fruits)
    ////part 2 task 10 ////
//var num = [320,230,480,120]
//num.sort();
//alert(num)

 //**task 11 */
 //var cities = ['karachi','lahore','islamabad','quetta','peshawar']
 //var selectCity = [cities[2], cities[3]]
 //document.write("Cities list " + '<br>' + cities)
 //document.write('<br>' + "Selected cities list" + '<br>' + selectCity)

 //*** task 12 */
 //var arr = ['this', 'is', 'my','cat'];
 //var arr2 = ['this', 'is', 'my','cat'];
 //var a = arr2.join ( " ");
 //document.write("<br> ARRAY <br>")
 //document.write(arr + '<br>')
 //document.write("<br> STRING <br>") 
 //document.write(a)

 //*** task 13, 14
 //var devices = ['keyboard','mouse','printer','monitor']
 //var a = ['Out']
 //document.write('Devices :' + devices + '<br>')
 //for(i = 0; i<devices.length ; i++){
     //for(k = 0 ; k < a.length ; k ++){
         //console.log(devices[i] + ' ' + a[k])
         //alert(devices[i] + ' ' + a[k])
         //document.write('<br>' + devices[i] + '<br>' + a[k] )
    // }
// }
//*** tasks 15 */
//var arr = ['nokia', 'motorola','samsung','apple','sony','haier']

//document.write("<select> ")
//for (var i = 0; i < arr.length; i++){
    //document.write("<option>" + arr[i] + "</option> ")
//}
//document.write("<select>")

//*** chp 17-20 task 1 */
// var arr = [
 //   [
  //      [
   //         [
//
   //         ]
 //       ]
 //   ]
// ]

//*** task 2 */
//var a = [
    //[0,1,2,3],
    //[1,0,1,2],
    //[2,1,0,1]
//];
//for (i=0; i < a.length; i++){
    //document.write('<br>' + a[i] + '<br>')
//}

//*** task 3 */
//for (i = 0 ; i <= 10 ; i++){
    //document.write(i + '<br>')
//}

//**** task 4 */
//var a = prompt("Enter a Number to show its miltiplication number")
//var b = prompt("Enter Length multiplication table")
//for (i = 1 ; i <= b ; i++){
    //document.write(a + 'x' + i + '=' + a*i + '<br>')
//}

//***task 5 */
// var a = ['apple','mango','banana','orange','strawberry']
// for (i=0 ; i < a.length ; i++){
//     document.write("Element at index " + i + " is " + a[i] + '<br>')

// }

//*** task 6 */
///////Counting
//for(i=0 ; i <= 15 ;  i++){
   // document.write(i + " ")
//}
//////Reverse
 //var a = [10,9,8,7,6,5,4,3,2,1]
 //a.reverse();
 //document.write(a)
/////// Even
 //for (i=0; i<= 20 ; i++){
     //if (i %  2=== 0){
        // document.write(i + ' ')
     //}
// }
//////Old
//for (i=0; i<= 21 ; i++){
     //if (i %  2 !== 0){
        // document.write(i + ' ')
     //}
//}
/////Series
//for (i=1; i<=21 ; i++){
    //if (i % 2 === 0){
       // document.write(i + 'k' + ' ')
    //}
//}
//task 7 //
// var items = ["cake", "apple pie", "cookie", "chips", "patties"] 
// var a = prompt("Enter your item");
// if (a === 'cake'){
//     alert(a + ' is available at index 0 in our bakery')
// }
// else if (a === 'apple pie'){
//     alert(a + ' is available at index 1 in our bakery')
// }
// else if (a === 'cookie'){
//     alert(a + ' is available at index 2 in our bakery')
// }
// else if (a === 'chips'){
//     alert(a + ' is available at index 3 in our bakery')
// }
// else if (a === 'patties'){
//     alert(a + ' is available at index 4 in our bakery')
// }
// else
// {
//     alert('we are Sorry'  + a + ' is not available ')
// }
//***tasks 8 - task - 9 */
// var num =  [24, 53, 78, 91, 12];
// document.write('Array items ' + num + '<br>')
// document.write('The largest number is ' + ' ' + Math.max(...num) + '<br>');
// document.write('The Lowest number is ' + ' ' + Math.min(...num))

//***task 10 */
// for (i=0 ; i<= 20 ; i++){
//     document.write(i*5 + ' ')
// }





//***chp 21-25 tasks 1 */
// var a = prompt("Enter Your First Name");
// var b = prompt("Enter Your Last Name");
// var c = a + b;
// document.write(c + ' ')
//////////// TASKS 1 ///////////////////
// var arr1 = prompt("Enter Your First Name");
// var arr2 = prompt("Enter Your Last Name");
// var c = arr1.concat('  ' + arr2);
// document.write(c)

//*** tasks 2 */
// var arr1 = prompt("Enter Your favorite mobile phone ")
// var arr2 = arr1.length;
// document.write('My Favourite Phone is ' + arr1 + "<br>")
// document.write('Length of String is ' + arr2)

//*** tasks 3 */
// var str = "Pakistani.";
// document.write('string : ' + str + '<br>')
//document.write('Index of n is : ' + str.indexOf('n'))


//*** tasks 4 */
// var a = 'Hello World';
// var b = a.lastIndexOf('l');
// document.write('string : ' + a + '<br>')
// document.write('Last index of l is: ' + b)
 
// //*** tasks 5 */
// var a = 'pakistani';
// document.write('string ; ' + a + '<br>')
// document.write('Character at index 3 : ' + a[3])

//*** tasks 6 */
// var str1 = 'Hello'
// var str2 = 'World!'
// var result = str1.concat(" " + str2)
// alert(result)

//*** tasks 7 */
// var str = 'Hyderabad';
// var b = str.replace(/Hyderabad/, 'Islamabad')
// document.write('string : ' + str + '<br>')
// document.write('After Replacement : ' + b)
 
//*** tasks 8 */
// var message ="Ali and Sami are best friends They play cricket and football together.";
// var str = message.replace(/and/g, '&');
// document.write(str)

//*** tasks 9 */
// var a = '472';
// document.write(a + '<br>')
// document.write(typeof a + '<br>' )
// var b = 472;
// document.write(b + '<br>')
// document.write(typeof b)

//*** tasks 10 */
// var a = 'peanut';
// var b = a.toUpperCase();
// document.write(b)
////////TASK 10///////
// var a = prompt("Enter Your Letter")
// var result = a.toUpperCase();
// document.write(result)

//*** Task 11 */
// var a = prompt("Enter Your Letter");
// var firstChar = a.slice(0, 1);
// var secondchar = a.slice(1);
// firstChar = firstChar.toUpperCase();
// secondchar = secondchar.toLowerCase();
// var b = firstChar + secondchar;
// document.write(b)


// ///TASKS 11////
// var a = 'javascript'
// var b = a.slice(0, 1);
// var c = a.slice(1);
// b = b.toUpperCase();
// c = c.toLowerCase();
// var r = b + c;
// document.write(r)

//*** task 12 */
// var a = '35.36';
// var b = a.replace('.', '');
// document.write(b)
/////TASKS 12 /////
// var d = 35.36;
// var s = d + '';
// s =s.replace('.', '');
// s = parseInt(s);
// document.write('Number : ' + d + '<br>')
// document.write('Result : ' + s);


//***task 13 */

// var username = prompt("Enter Your Password")
// var b = username.charCodeAt();
// var flag = false;
// for (var i = 0 ; i <=username.length ; i++){
//     if(username.slice(i, i+1) == String.fromCharCode(64)||
//        username.slice(i, i+1) == String.fromCharCode(46)||
//        username.slice(i, i+1) == String.fromCharCode(44)||
//        username.slice(i, i+1) == String.fromCharCode(33)){
//            flag = true;
//            break
//         }
// }
// if (flag){
//     alert('enter a valid username');
// }else{
//     alert('sucess')
// }




//*** task 14 */
// var a = ['cake', 'apple pie', 'cookies','chips','patties'];
//  var x = prompt("What do you want to order sir/ma'am?");
// x = x.toLowerCase();
// for (var i = 0 ; i < a.length ; i++){
//     if (a[i] === x){
//         console.log(x + ' is available at index ' + [i]  + ' in our bakery'  )
//         break

//     }
//   }  
//////////////tasks 14 ////////////////
// var array = ['cake', 'apple pie', 'cookies','chips','patties'];
// var items = prompt("What do you want to order sir/ma'am?");
// items = items.toLowerCase();
// var bakitems = array.indexOf(items)
// if (array.indexOf(items) != -1){
//     console.log(items + ' is available at index ' + bakitems + ' in our bakery')

// }
// else{
//     console.log(items + ' is not avaliable in our bakery ')
// }



//*** task 15 */
// var pass = prompt('Enter a Valid Password \n a. It should contain alphabets and numbers \n b. It should not start with a number \n  c. It must at least 6 character long');
// if (pass.length >= 6){
//    if (pass.slice(0, 1) <= String.fromCharCode(65)){
//         alert('Paaword can not begin with a number')
//     }
// else {
//     alert('Success')
//   }
// }
// else {
//     alert('Password must be a character Long')
// }
//*** tasks 16 */
// var university = 'University of Karachi';
// var arr = university.slice()
// for(var i = 0 ; i< arr.length ; i ++){
//     document.write(arr[i] + '<br>')
// }
//// TASKS 16////
// var uni = 'unversity of karachi'
// var a = uni.split("")
// for(i =0 ; i < uni.length; i++){
//     document.write(a[i] + '<br>')
// }
// //*** tasks 17 */
// var a = 'Pakistan'
// var b = a.charAt(7)
// document.write('User input ' + a + '<br>')
// document.write('Last Character of input : ' + b)

//***tasks 18 */
// var count = 0;
// var str = 'The quick brown fox jumps over the lazy dog';
// for(var i = 0 ; i<str.length ; i++){
//     if(str.toLowerCase().slice(i,i+3) === 'the'){
//         count++;
//     }
// }
// document.write('text : ' + str + '<br> There are ' + count + ' occurrence of the word the ')

//***chp 26-30 task 1 */
// var num = prompt("Enter positive integar")
// var num1 = Math.round(num);
// var num2 = Math.floor(num);
// var num3 = Math.ceil(num);
// document.write('Number : ' + num + '<br>')
// document.write('Round off Value : ' + num1 + '<br>')
// document.write('Floor value : ' + num2 + '<br>')
// document.write('Ceil value : ' + num3 + '<br>')

//*** tasks 2 */
// var num = prompt("Enter Negative floating integar")
// var num1 = Math.round(num);
// var num2 = Math.floor(num);
// var num3 = Math.ceil(num);
// document.write('Number : ' + num + '<br>')
// document.write('Round off Value : ' + num1 + '<br>')
// document.write('Floor value : ' + num2 + '<br>')
// document.write('Ceil value : ' + num3 + '<br>')

//*** tasks 3 */
// var a = prompt('Enter your Absolute Value')
// var b = Math.abs(a)
// alert(b)

//***task 4 */
// var ran = Math.random()*4;
// var ran1 = ran.toFixed()
// document.write('Random dice value : ' + ran1 + '<br>')
// var ranA = Math.random()*8;
// var ranB = ranA.toFixed();
// document.write('Random dice value : ' + ranA)

//*** task 5 */
// var a = Math.random()*4;
// var b = Math.floor(a)
// console.log(a)
// if(b === 1){
//     alert(b + ' Random coin value Head')
// }else if(b === 2){
//     alert(b  + ' Random coin value Tail ')
// }
// else{
//     alert(b + ' Try Again')
// }

//***task 6 */
// var a = Math.random()*101;
// var b = Math.floor(a)
// console.log('The Random numer between 1 to 100 is : ' + b)

//***task 7 */
// var weigth = prompt("Enter Your Weigth");
// var abc = parseFloat(weigth);
// document.write('The weigth of user is ' + abc +'Kilograms')

//*** task 8 */
// var a = prompt("Enter you Number 1 to 10");
// var x = (Math.random()*11);
// var y = x.toFixed();
// console.log(y)
// if (a === y){
//     document.write('CONGRATULATION!')

// }
// else
// {
//     document.write('TRY AGAIN')
// }



//***task 31-34 */
// var date = new Date();
// alert(date)

//***task 2 */
// var a = new Date();
// var b = a.toString();
// var c = b.slice(3, 7)
// document.write('Current month is : ' + c)

//***task 3 */
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0, 3)
//  document.write('ToDay is : ' + c)

//*** task 4 */
// var arr = ['Sunday','Monday','Tuesday','Wednesday','Thurseday','Firday','Saturday'];
// var a = new Date();
// var b = a.getDay();
// var c = arr[b];
// if (c === 'Saturday'|| c === 'Sunday'){
//     document.write("It's Fun Day")
// }
// else{
//     document.write('Busy Day')
// }

//***task 5 */
// var dATE = new Date();
// var x = dATE.getDate();
// if (x < 16){
//     document.write('First Fifteen Days of the Month')

// }else{
//     document.write('Last Days of Month')
// }

//****task 6 */
// var x = new Date();
// var a = x.getTime();
// var totalMin = (a)/(1000*60*60);
// document.write('current Date : ' + x + '<br>');
// document.write('Elapsed Millisecond since January 1, 1979 : ' + a + '<br>' )
// document.write('Elapsed mintues since January 1, 1970 : ' + totalMin)



//***task 7 */
// var a = new Date();
// var b = a.getTime();
// if (b >12){
//     alert("It's PM")

// }else if (b <12){
//     alert("It's AM")
// }

//*** task 8 */
// var Laterdate  = new Date('dec 31 2020');
// alert('Laterdate ; ' + Laterdate)

//***task 9 */
// var a = new Date('Apr 24 2020');
// var b = a.getTime();
// var x = new Date();
// var y = x.getTime();
// var k = x.getFullYear();
// var result = y - b;
// var z = result/(1000*60*60*24);
// var m = Math.round(z)

// document.write(m + ' days have passed since 1st Ramadan ' + k)

//*** task 10 */
// var a = new Date('jan 1, 2015');
// var x = a.getTime();
// var b = new Date('dec 5, 2015 00:00:00')
// var y = b.getTime();
// var r = x - y;
// var v = r/(1000*60)
// v = Math.floor(v) 
// document.write(' On the reference Date ' + b + v + ' second had passed since begining of 2015')

//*** task 11 */
// var date = new Date();
// var a = new Date();
// a.setHours(-0);
// document.write('current date : ' + date + '1 hour ago , it was ' + a)

//*** task 12 */
// var date = new Date();
// var b = new Date();
// b.setFullYear(1920)
// document.write('Current date : ' + date + '100 years back , it was ' + b)


//*** task 13 */
// var d = prompt('Enter your age')
// var a = new Date();
// var t = a.getFullYear()-d
// document.write('Your age : ' + d + '<br>')
// document.write('Your Birth Year is ' + t)

//***task 14 */



//*** chp 35-38 task 1 */
// function date(){
//     var a = new Date();
//     alert(a)
// }
// date();


//**task 2 */
// function greets(firstnam,secondnam){
//     var a = firstnam.concat(secondnam)
//     alert(a)
// }
// greets('Sunny ',' Yousuf');

//***task 3 */
// function suM(val1, val2){
//     var m = val1 + val2;
//     return m
// }
// var s = suM(+prompt('Enter first number'),+prompt('Enter second number'))
// document.write(s)

//*** task 4 */
// function calc(val1,opr,val2){
//     if (opr === '+'){
//         return val1 + val2
//     }
//     else if (opr === '-'){
//         return val1 - val2
//     }
//     else if (opr === '*'){
//         return val1 * val2
//     }else{
//         return 'invalid operater'
//     }
// }
// var result = calc(6,'+',8)
// var result1 = calc(7,'-',4)
// var result2 = calc(3,'*',9)
// console.log(result)
// console.log(result1)
// console.log(result2)

//*** task 5 */
// function myFunction() {
//     var a = Math.sqrt(3,5);
//     console.log(a)
//   }
// myFunction()
////////task 5//
// function myFunction(a,b){
//     return a**b

// }
// var x = myFunction(3,5)
// document.write(x)

//*** task 6 */
// function factorial(s){
//     if(s==0 && s<=1){
//     return 1

// }
// else{
//     return s* factorial(s-1)

//  }
// }
// document.write(factorial(4))

//***task 7 */
// function count(a,y){
//     for(a= 1 ; a<= 50; a++){
//         document.write(a + ' ')
//     }
// }
// count(50)

//*** task 8 */
//***task 9 */
// function abc(heigth,width){
//     var m = heigth*width
//     return  m
// }
// var s = abc(10,6)
// document.write(s)
////////////////task 9///////
// function abc(heigth,width){
//     return heigth*width
// }
// console.log(abc(10,6))

//*** task 10 */
// function p(){
//     var x = prompt('Enter your word');
//     var y = '';
//     for(var i = x.length -1; i>= 0; i--){
//         y += x[i]
//     }
//     if(x === y){
//         console.log(x + ' is palindrome word')
//     }else{
//         console.log(x + ' is not palindrome word')
//     }
// }
// p();

//*** task 11 */
// function a(word = 'the quick brown fox'){
// var x = word.toLowerCase().split(' ');
// for(var i = 0 ; i< x.length ; i++){
//     x[i]=x[i].charAt(0).toUpperCase() + x[i].substring(1);
//     var m = x.join(' ');

// }
// document.write(m)
// }
// a()

//*** task 12 */
// function abc(str)
// {
//   var m = str.match(/\w[a-z]{0,}/gi);
//   var res = m[0];

//   for(var x = 1 ; x < m.length ; x++)
//   {
//     if(res.length < m[x].length)
//     {
//     res = m[x];
//     } 
//   }
//   return res;
// }
// console.log(abc('Web Development Tutorial'));


//*** tasks 13 */
// function count(str, letter) 
// {
//  var a = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       a += 1;
//       }
//   }
//   return a;
// }

// console.log(count('w3resource.com', 'o'));

















// chp 38-44 task - 1
// function power(a, b) {
//     return Math.pow(a, b)
// }
// console.log(power(4,3));

//tasks - 2//
// index.html me solution ha

//tasks - 3//
// function triangle(a, b, c){
//     var x = (a + b + c) / 2;
//     return x;
//     function area(){
//         var area = x(x - a)(x - b)(x - c);
//         return area;
//     }

// }
// document.write("Triangle is : " + triangle (2,4, 7) )
//tasks - 4//
// function mainFunction(x, y, z){
// function average(){
//     avg = (x + y + z) / 3;
//     return avg.toFixed()
// }
// function percentage(){
//     percan = (x + y + z) /300 * 100;
//     return percan.toFixed()
// }
// document.write('Average is ' + average() + '<br>')
// document.write('Percentage is ' + percentage() + '%')
// }
// (mainFunction(55,66,77))
//tasks - 5//
// function abc(string, val) {
//     var i=0;
//     while(i < string.length){
//         if(string[i] == val){  
//             return i
//         }
//         i++                          
//     }
//     return -1;                    
// }
// document.write(abc("Hello World", "o"))
// console.log(abc("Hello Laptop", "M"))


//tasks - 6//
// function shortcut(string){
//     var vowels = /[aeiou]+/g;
//     return string.replace(vowels, "");


//   }


//   document.write(shortcut(prompt('Enter Sentences')))

//tasks - 7//
// function vowel(){ 
//     var a ="Pleases read this application and give me gratuity"; 
//   var x = a.match(/[aeiou]/g)
//    return x ? x.length : 0;}
//    var ans = vowel()
//    document.write(ans)
  
//tasks - 8//
// function distance(){
//     var input = +prompt("Enter Diatance in Km");
//     function meter() {
//         var meter = input * 1000;
//         return meter;
//     }
//     function feet(){
//         var feet = input * 3280.84;
//         return feet;
//     }
//     function inches(){
//         var inches = input * 39370.1;
//         return inches
//     }
//     function centimeters(){
//         var centimeters = input * 100000;
//         return centimeters;
//     }

// document.write('Distance in Meter : ' + meter() + '<br>')
// document.write('Distance in Feet : ' + feet() + '<br>')
// document.write('Distance in Inches : ' + inches() + '<br>')
// document.write('Distance in Centimeters : ' + centimeters())
// }
// distance();

//tasks - 9//
// function abc() {
//     var workHours = prompt('Enter Working Hours');
//     switch(true) {
//         case workHours > 40: {
//             var amontPaid = (workHours - 40) * 12;
//             alert('Your overtime is ' + amontPaid);
//             break
//         }
//         default: {
//             alert('sorry')
//         }
//     }
// }

// console.log(abc());

// tasks - 10
// var amount = prompt("Enter your amount")
// document.write("The amaount of money is"+ amount +"<br>")
// var x = (amount/100)
// var a = Math.floor(x);
// document.write(" The number of 100 rupees are "+ a +"<br>")
// var b = ((amount%100)/50)
// var y = Math.floor(b)
// document.write(" The number of 50  rupees are " + y +"<br>")
// var c =((amount%100%50)/10)
// var z =Math.floor(c)
// document.write("The number of 10 rupees are " + z)




//chp 58-67 Tasks 1///

// var mainContent = document.getElementById('main-content')
// console.log(mainContent.children)
// var render = document.getElementsByClassName('render')
// for (var i=0;i<render.length;i++){

//     console.log(render[i].innerHTML)
// }

// var firstName = document.getElementById('first-name')
// var lastName = document.getElementById('last-name')
// var email = document.getElementById('email')

// firstName.value= "Helen"
// lastName.value="keller"
// email.value="Helen.keller@gmail.com"


// console.log(document.getElementById("form-content").nodeType)
// console.log(document.getElementById("lastName").childNodes)
// console.log(document.getElementById("lastName").childNodes[0].value="LastName Update")

// console.log(mainContent.firstChild,mainContent.lastChild)
// console.log(document.getElementById('lastName').nextSibling,document.getElementById('lastName').previousSibling)
// console.log(document.getElementById('email').parentElement)


// chp 43-48
////// Tasks 3 /////
// function deleteRow(x) {
//     var a = x.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(a);
//   }

/////// Tasks 4 ///////
// function firstImg(){
//     var first = document.getElementById('img')
//     first.src = 'pic 3.jpg'
// }

// function secondImg(){
//     var second = document.getElementById('img')
//     second.src = 'pic1.jpg'
// }
 
////// Tasks 5 /////

// var x = 1
//     console.log(x)

// function button1() {
//     var button1 = document.getElementById('counter').innerHTML = (x++);
// }

// function button2() {
//     var button2 = document.getElementById('counter').innerHTML = (x--);
// }

/////////METHOD 2////
   
// var x = 0;
// function button1() {
    
//     var button1 = document.getElementById('counter');
//     button1.innerHTML = x++;
// }

// function button2() {
   
//     var button2 = document.getElementById('counter');
//     button2.innerHTML = x--;
// }
///////CHP 49-52///
// TASK 1//
//  var a = 'Thank You For Sign Up';
// function signUp(){
//     var signUp = document.getElementById('sign');
//     signUp.innerHTML = document.write(a)

// }
/////Tasks 2///
// function peragraph(){
//     var text = "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
//     var pera = document.getElementById('pera')
//     pera.innerHTML = text;
// }
// chp 52-57 Tasks ///
// function showPic(e){
//     var bigPic = document.getElementById("bigPic");
//     bigPic.src = e.src


// }