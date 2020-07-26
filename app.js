//  console.log('this is js ')

//Assignment # 1

// Q-1
// alert('Welcome to my Website')

// // Q-2
// alert('Error! please enter a valid password')

// // Q-3

//alert(`welcome to js land...\nhappy coding`)

//Assignment # 2


// var username;

// var myName = "Huzaifa Aslam"

// var message = "hello world"

// alert(message)

// var age = "15 years old"

// var job = "mobile application developer"

// alert(myName)

// alert(age)

// alert(job)

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(pizza);

// var email = "huzaifaslam45@gmail.com"

// alert("my email address is " + email)

// var book = "A smarter way to learn JavaScript"

// alert("im trying to learn from a book " + book)

// document.write("Yah! i can write HTML content through js")

// var str = "--------------*****---------------"

// alert(str)

// document.write(str)




//Assignment # 3

// var age = "im 15 years old"

// alert(age);

// var visitor = 14;

// alert("you have visited the site " + visitor + " times")

// var birthYear = 1997;

// alert("my birth year is " + birthYear + " data type of declared variable is number")

// var visitorName = "huzaifa";

// var productTitle = "T-shirts";

// var quantity = 5;

// document.write(visitorName + " ordered " + quantity + " " + productTitle + " on xyx clothing store")



//Assignment # 4

// 1

// var a, b, x;

// 2

//var _var1, $var2, var3, var4, var5;

// var 1var,-var2,#var,!var,&var

// 3-a

//document.write('A heading stating “Rules for naming JS variables”')

// 3-b

// document.write("Variable names can only contain <u>$my_1stVariable</u> , <u>_Variable</u> , <u>$my_1stVariable</u> and <u>$my_1stVariable</u>.");

// 3-c

// document.write("Variable names must begin with <u>$my_1stVariable</u> , <u>_Variable</u> , and <u>Variable</u>.")

// 3-d

// document.write("variable names are case  <u>sensitive</u>")

// 3-e

// document.write("variable names should not be JS  <u>keywords</u>")

//Assignment # 5

// 1-

// +

// var a = 3
// var b = 5
// var c = a + b;
// document.write(`sum of ${a} and ${b} is ${c}`)

// -

// var a = 3
// var b = 5
// var c = a - b;
// document.write(`answer is ${c}`)

// *

// var a = 3
// var b = 5
// var c = a * b;
// document.write(`answer is ${c}`)

// /

// var a = 3
// var b = 5
// var c = a / b;
// document.write(`answer is ${c}`)

// %

// var a = 3
// var b = 5
// var c = a % b;
// document.write(`answer is ${c}`)

// Q-3

//Assignment # 13-15

//  Q# 1-7

// var arr1 = [];
// var arr2 = [{}];
// var arr3 = ['a', 'b', 'c'];
// var arr4 = [1, 2, 3];
// var arr5 = [true, false]
// var arr5 = [1, 'a', true, false]

// var qualifications = ['SSC', 'BSCS', 'BCOM', 'PHD', 'MSC', 'HSC']
// document.write('Qualifications:<br>')
// document.write(`1) ${qualifications[0]}<br>`);
// document.write(`2) ${qualifications[1]}<br> `);
// document.write(`3) ${qualifications[2]}<br>`);
// document.write(`4) ${qualifications[3]}<br>`);
// document.write(`5) ${qualifications[4]}<br>`);
// document.write(`6) ${qualifications[5]}<br>`);

// OR

// qualifications.forEach((item, index) => {
//     document.write(`${index+1}) ${item} <br>`)
// })

// Q# 8

// var studentsName = ['Ali', 'Hamza', "Osama"]
// var StudentsScore = [320, 400, 300]


// document.write(`Score of ${studentsName[0]} is ${StudentsScore[0]}. Percentage: ${(StudentsScore[0]*100)/500}%<br>`)
// document.write(`Score of ${studentsName[1]} is ${StudentsScore[1]}. Percentage: ${(StudentsScore[1]*100)/500}%<br>`)
// document.write(`Score of ${studentsName[2]} is ${StudentsScore[2]}. Percentage: ${(StudentsScore[2]*100)/500}%<br>`)


// Q# 9

// var colors = ['blue', 'oragne', 'green', 'purple']

// Q# 9-a

// var userInput = prompt("enter your fav color")
// colors.unshift(userInput);
// document.write(`${colors}`);

// Q# 9-b

// var userInput = prompt("enter your fav color")
// colors.push(userInput);
// document.write(`${colors}`);

// Q# 9-c

// var userInput1 = prompt("enter your fav color")
// var userInput2 = prompt("enter your fav color")
// colors.push(userInput1, userInput2);
// document.write(`${colors}`);

// Q# 9-d


// colors.shift();
// document.write(`${colors}`);

// Q# 9-e


// colors.pop();
// document.write(`${colors}`);


// Q# 9-f

// var userInput1 = prompt("enter your fav color")
// var userInput2 = prompt("enter index number")
// colors.splice(userInput2, 0, userInput1);
// document.write(`${colors}`);

// Q# 9-g

// var userInput1 = prompt("enter index number")
// var userInput2 = prompt("enter the number that your want to delete")
// colors.splice(userInput1, userInput2);
// document.write(`${colors}`);

// Q# 10

// var stuScores = [230, 650, 340, 120]
// document.write(stuScores.sort())

// Q# 11

// var cities = ['karachi', 'lahore', 'islamabad', 'quetta', 'peshawer']
// var selectedCities = cities.slice(1, 4)
// document.write(selectedCities);

// Q# 12




// var arr = ['This', 'is', 'my', 'cat'];
// document.write(arr.join(' '))


// Q# 13

// var arr = ['This', 'is', 'my', 'cat'];
// document.write(<select name="cars" id="cars">
// <option value="volvo">Volvo</option>
// <option value="saab">Saab</option>
// <option value="mercedes">Mercedes</option>
// <option value="audi">Audi</option>
// </select>)


//    assignment 17 to 20


// Q# 1

// var arr=[[]]


// Q# 2

// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// for(var i=0;i<=arr.length-1;i++){
//     document.write(arr[i].join(' ')+"<br>")
// }


// Q# 4

// var num1=+prompt("enter a number of table")
// var ope=+prompt("enter operator ")
// var len=+prompt("enter length of table ")
// for(var i=1;i<=len;i++){
// }


// Q# 6-b

// for(var i=10;i>=1;i--){
//     document.write(`${i} <br>`)
// }

// Q# 6-c

// for (let i=0; i<=20; i++) {
//     if(i % 2 === 0) {
//       console.log(i);
//     }
//   }

  // Q# 6-d

// for (let i=0; i<=20; i++) {
//     if(i % 2 !== 0) {
//       console.log(i);
//     }

//   }

    // Q# 6-e
// var k="k"
// for (let i=0; i<=20; i++) {
//     if(i % 2 === 0) {
//       console.log(i+k);
//     }
//   }


// Q# 7


// var arr=["cake",'apple','cookie','chips','patties']
// var input=prompt("enter your order");
// for(var i=0;i<arr.length-1;i++){
//     if(input===arr[i]){
//         document.write(`${input} is available at index ${i}`)
//     }

//     else
//         document.write(`sorry ${input} is not available in out bakery`)

// }

// Q# 8

// var arr=[234,234,23456,456,234];
// var res=arr[0]
// for(var i=0;i<arr.length-1;i++){
//    // res=arr[0]
//     if(arr[i]>res){
//         res=arr[i]

//     }



// }
// console.log(res)

// Q# 9

// var arr=[234,234,23456,456,234];
// var res=arr[0]
// for(var i=0;i<arr.length-1;i++){
//    // res=arr[0]
//     if(arr[i]<res){
//         res=arr[i]

//     }



// }
// console.log(res)

// Q# 10

// for(var i=1;i<=20;i++){
//     document.write(i*5+" <br>")
// }


// Assignment # 21-25

// q# 3

// var str="Pakistan"

//     document.write(str.indexOf("n"))

// q# 4

// str="Hello World"
// document.write(str.lastIndexOf("l"))


// Q# 5

// str="Pakistani"
// document.write(str.charAt(3))

// Q# 7

// str="Hyderabad"
// document.write(str.replace("Hyder","Islam"))



// Q# 8

// str='Ali and Sami are best friends. They play cricket and football together.'

// document.write(str.split("and").join("&"))


// Q# 9

// var str="472"
// var con=Number(str)
// console.log(con)
// console.log(typeof(con))


// Q# 11
// var con;
// var input=prompt("enter stirng in lowercase")
// con=input[0].toUpperCase()


// var sl=input.slice(1)
// document.write(con.concat(sl))



// Q# 12

// var n1=35.36
// var str=String(n1)
// var rep=str.replace(".","")
// console.log(rep)


// Q# 13

// var input=prompt("enter your name");
// var name=input;
// for (var i=0;i<=name.length-1;i++){
//     if(name[i] ===(String.fromCharCode(44) ) ||name[i] ===(String.fromCharCode(46) )  ||name[i] ===(String.fromCharCode(33) ) || name[i] ===(String.fromCharCode(64) )){
//         alert("please enter valid name")
//     }

// }






// Q# 14


// var arr=['cake','apple','cookie','chips','patties'];
// var input=prompt("enter your order").toLowerCase()
// var com=input.slice()
// for(var i=0;i<=arr.length-1;i++){
//     if(arr[i]===input){
//         alert(`${input} is available at index ${i}`)
//         break;
//     }
// }


// Q# 17

// var input=prompt("enter any name")
// var copy=input.slice(-1)
// console.log(copy)

// Q# 18

// var str="The quick brown fox jumps over the lazy dog";
// var lower=str.toLowerCase()
// var con=lower.split(" ")

// var count=0
// for(var i=0;i<=con.length-1;i++){
// if(con[i]==="the")
// {
//     count++
// }
// }
// document.write(count)


// Assignment # 26-30

// Q# 1




// Assignment # 35-38

// 1-

// function dateAndTime(){
//     var date=new Date()
//     document.write(date)
// }
// dateAndTime()

// 2-

// function greeting(fname,lname){
//     document.write(`Welcome ${fname} ${lname}`)
// }
// greeting('Huzaifa','Aslam')

// 3-

// function sum(){
//     var c=+prompt('Enter first number')
//     var d=+prompt("Enter second number")
//     return c+d
// }
// document.write(sum())

// 4-

// function calculator(c,d,f) {
//   var c = +prompt("Enter first number");
//   var d = +prompt("Enter second number");
//   var f = prompt("Enter operator");
//   switch (f) {
//     case "+":
//       return c + d;
//       break;
//     case "-":
//       return c - d;
//       break;
//     case "*":
//       return c * d;
//       break;
//     case "/":
//       return c / d;
//       break;
//       default:
//           return "Try Again"

//   }
//   return c + d;
// }
// document.write(calculator(2,4,"-"));

// 5-

// function square(a,b){
// return Math.pow(a,b)
// }
// document.write(square(2,3))

// 6-
// function factorial(){
//     var inputNumber = prompt('Please enter an integer');
//     var total = 1;

//     for (i = 0; i < inputNumber; i++){
//         total = total * (inputNumber - i);
//     }

//     console.log(inputNumber + '! = ' + total);
// }
// factorial()

// 7-

// function counting(){
//     var a=prompt('enter start number')
//     var b=prompt(`enter end number`)
//     for(var i=a;i<=b;i++){
//         document.write(`${i} <br>`)
//     }
// }
// counting()

// 8-

// function outerFunc(){
//     var a=+prompt('enter the value of base ')
//     var b=+prompt(`enter the value of perb`)
//     var hyp=a*a+b*b;

//  function result(){
//     document.write(Math.sqrt(hyp))
//  }
//  result()
// }
// outerFunc()

// 9-
// function area (widht,height){
//     var cal=widht*height
//     document.write(cal)
// }
// area(2,4)

// 10-

// function palindrom(string) {
//   var str = string;
//   var palindrom="";

//     for(var i=str.length-1;i>=0;i--){
//         palindrom+=str[i]

//     }
//     if(str===palindrom){
//         console.log(`${str} is Palindrome word`)
//     }

// }
// palindrom("civic");

// 11-

// function changeCase(str){
// var conStr=str
// var count=0;
// var ind=conStr.indexOf(" ")
// for(var i=0;i<=conStr.length;i++){
// if(conStr[i]==" "){
//     conStr[i+1].toUpperCase();


// }
// }
// console.log(ind)


// }
// changeCase('the quick brown fox');
