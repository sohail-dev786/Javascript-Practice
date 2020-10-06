// console.log("console is Working"); 
// console.error("This is a Error");
// console.warn("This is a Warn");


//alert

//alert('Hello Wolrd');   -- pop Up Message


//confirm("Please Select Your Choice yes /no"); -- its Used Actually For Confirmation  Message

// prompt ("Enter Your name");  ---(used to take User Input)



//Declaring a Variable (let,const)

//DATA TYPES --> String,Number,Boolean,Null,Undefined,etc.


// const name="Sohail";
// const age=23;
// const rating=4.5;
// const isMale=true;
// const x=null;
// const y= undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);



//String Methods

//1)Concatination

const name='sohail';
const age=23;
console.log("My Name is "+ name+" and i am "+age+" year old");


//Template String --> ((`) (tilde sign will be used) INSTEAD OF (SINGLR OR DOUBLE QUOTATION))
console.log(`My Name is ${name} and i am ${age} Year Old`);



//property & Function -->(length,toUpperCase,toLowerCase,substring)

const myString='Hello World!';

console.log(myString.length);  //Property
console.log(myString.toLowerCase()); //Function
console.log(myString.toUpperCase()); //Function
console.log(myString.toLocaleLowerCase());//This Method is same as (toLowerCase)
console.log(myString.toLocaleUpperCase());// This Method is same as (toUpperCase)
console.log(myString.substring(0,5));
console.log(myString.substring(0,5).toUpperCase());

//Split

const myString1="Techonology";
console.log(myString1.split(''));         //This Will Return a Array

const myString2="Mumbai,Chennai,Kolkata,Rajasthan,Gujrat";
console.log(myString2.split(','));        //Split by Commas





//Arrays  -->Varaiable That Hold Multiple Values
 
// First Way To Create An Array  (Using New Array())

const names=new Array('Sohail','Kedar Sir','Viral','Shubham','Sayali','Suyeta','PriyamWada');
console.log(names);

//Second Way To Create An Array( Direct assign The Values inside [] sqaure Brakets)

const fruits=['Mango','Apple','WaterMelon','Orange','Banana'];
console.log(fruits);

//(WE Can  Also Assign Diffrent Data Types on Same Variable)

const myArray=['Bike','Car','Bus',10000,true,9.00];
console.log(myArray);

//Now If I want to Access a Particular Values From My Array i Can Use Index to Access That values.
console.log(fruits[0]);
console.log(fruits[1]);


//Add Some More Fruits Into My Array :)

fruits[5]="Chikku";
console.log(fruits);

//Now Suppose If I have a Lots of Values in My Array (So Each Time I Have To Go and Find The LAst Positon of My Array)
//so Instead of  Adding  Values Using index 
//we can add Values Using Push Method

fruits.push('pears');
console.log(fruits);

//If I want To Add Fruits At Starting Position of My Index 
//I Will Use unshift method

fruits.unshift('strawberries');
console.log(fruits);


//Deleting a Values From mY Fruits Array
//using pop Function (It Will Remove Values from  the end)
fruits.pop();
console.log(fruits);

//Now If we Want to Check  a Index Position of Any Element
//using indexOf Function

console.log(fruits.indexOf('Mango')); //If Your String Doesn't Match It Will Return -1 (ex:mango,Mango-->are not same)







//----Object in JavaScript------//

// 1) Object Has Key Values Pairs  --> (key:Value)


const mySelf={

    firstName:'Sohail',
    lastName:'Shaikh',
    age:23
}

console.log(mySelf);

//2) we can Also Pass An Array inside My Object

const myself1={

    fname:'Sohail',
    lname:'Shaikh',
    age:23,
    Hobbies:['Cricket','Online Games','Carrom','Coding'] //Array inside Object
}
console.log(myself1);

//now i want to access A Value Which Present in My Hobbies
console.log(myself1.Hobbies[0]); //It Will return -->Cricket



// 3)Now We Can Declare Object Inside Object

const myself2={

  name:'Sohail Shiakh',
  age:23,
  Hobbies:['Cricket','Online Games','Carrom','Coding'],
  Address:       //object Inside Object
    {
        street:'Jogeshwari West',
        city:'Mumbai',
        state:'Maharashtra',
        pincode:'400102'
    }

}

//Now I want To Access my Address (inside Address I want to access My City)

console.log(myself2.Address.pincode)
console.log(myself2.Address.city,myself2.Address.state); //Passess 2 Parameter

// 4)we can also Add Directly (key: Value) in my Object

myself2.email="Sohailss4444@gmail.com";
console.log(myself2);




//Object Inside  Array(we can declare a object Inside my Array)

const person =[
    {
        id:1,
        name:'Sohail',
        isMale:true
    },

    {
        id:2,
        name:'Kedar Sir',
        isMale:true
    },
    {
        id:3,
        name:'Viral',
        isMale:true
    },

    {
        id:4,
        name:'Shubham',
        isMale:true
    }

];


console.log(person[1].name);




//        JSON  ->(JAVASCRIPT OBJECT NOTATIONS)

//ITS VERY HELPFUL TO SEND DATA TO THE SERVER AND RECIEVE DATA  BACK FROM THE SERVER


//Now Lets Convert our Array(object) in to JSON Format

const convertToJson=JSON.stringify(person);
console.log(convertToJson);







//LOOP

// 1)FOR LOOP
console.log('FOR LOOP');
for(let i=1;i<=10;i++)
{
    
    console.log(`For Loop Start :${i}`);
}


//Addition of Number 

var sum=0;
for(let i=1;i<=10;i++)
{
    sum=sum+i;
    console.log(sum);
}

//Logic

// sum=0 i=1 sum=sum+i=1
// sum=1 i=2 sum=sum+i=3
// sum=3 i=3 sum=sum+i=6
// sum=6 i=4 sum=sum+i=10
// sum=10 i=5 sum=sum+i=15
// sum=15 i=6 sum=sum+i=21
// sum=21 i=7 sum=sum+i=28
// sum=28 i=8 sum=sum+i=36
// sum=36 i=9 sum=sum+i=45
// sum=45 i=10 sum=sum+i=55



// 2) WHILE LOOP
console.log('WHILE LOOP');
let i=0;
while(i<10)
    {
   
        console.log(`While Loop : ${i}`);
        i++;

    }   



//we will print all  Name values from my peron Object

for(let i=0;i<person.length;i++)
{
    console.log();
    console.log(person[i]);
    console.log(person[i].name);

}


//Another Way To Iterate Values
console.log("ITERATE");
for(let MyValues of person)
{
   
    console.log(MyValues);

}



//ForEach,Map,Filter


//1)ForEach
console.log('FOR EACH LOOP');
person.forEach(function(persons)
{
console.log(persons.name);
});


//map ->it will Return a array
console.log("Map");

const personName=person.map(function(persons)
{
    return persons.name;
});
console.log(personName);


//Filter -> It Will Filter Out The Values Based on Condition.
console.log("Filter");

const personGender=person.filter(function(perGender)
{
return perGender.isMale == true;
});
console.log(personGender);






//Condition Statement (if,if-else,else-if,switch)

// 1) If Statement

var num=10;

if(num==10)
{
console.log("num is Equal to 10");
}


//2) if-else (if its True it will return (if part) otherwise it will return (else part))

var num1=20;

if(num1 >20)
{
    console.log("Num1 is Greater Than "+num1);
}
else
{
    console.log("Num1 is Less Than "+ num1);
}


//3) else-if  (its Check Multiple Condition)

const myAge=23;

if(myAge ===23)   //(=== (triple equals is used to  check both (equality as well as data type)))
{

    console.log("Age Is Same");
}
else if(myAge>30){


    console.log("Age Is greater than "+myAge);
}
else
{
    console.log("Age Is Less Than "+myAge);
}




//  OPERATORS {  AND(&&)--OR(||) }


//Or Operators
let x=20;
let y=30;


if(x >10 || y<30)  //(if Any of The Condition Is True It Will Execute A Statement)
{
    console.log("X is Greater Than 10 or Y is Less Than 30");
}


// And Operators
let x1=20;
let y1=30;


if(x1>10 && y1<20)  //(When Both Condition Is True It Will Execute A Statement)
{
    console.log("X1 is Greater Than 10 or Y1 is Less Than 40");
}


//Ternary Operators

// syntax
//--> (condition)? true :false


const  price=200;

const  myBuckets=price>200 ? 'Price Is Too High' :'Let Purchase Some Fruits and Vegetables';

console.log(myBuckets);




//Switch Statement  (Checks For Multiple Condition)


const favFruits='Mango';  

//instead of Assiging the values Manually,lets take a input from user.

// const favFruits = prompt("Enter You fav Fruits");

switch(favFruits){
    case 'Banana':
        console.log("My Favourite Fruits is " +favFruits);
        break;

    case 'Mango':     
        console.log("My Favourite Fruits is " +favFruits);
        break;

    case 'WaterMelon':
        console.log("My Favourite Fruits is " +favFruits);
        break;

    default:
        console.log("Your Choice Not Found");
        break;
}






//Function

function addTwoNumbers(number1,number2)  //Creating a Function
{
return number1+ number2;
}
console.log(addTwoNumbers(2,3));  //Calling a Function


//Declaring Function Using (Arrow  Function)

const addTwoNumbers1=(n,n1) =>
{
    return n+n1;
}
console.log(addTwoNumbers1(5,5));



//Object Oriented Programming in JavaScript

//Constructor

//Creating a Contructor
function PersonDetail(fname,lname,dob)
{
this.fname=fname;
this.lname=lname;
this.dob=dob;

}

//Instantiating a Constructor
const printMyDetails=new PersonDetail('Sohail','Shaikh','15-5-2020')

console.log(printMyDetails);

















