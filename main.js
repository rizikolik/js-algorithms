window.setTimeout( todo=()=> {
    // put all of your JS code from the lecture here
        let info=document.getElementById("#info");


        info.innerHTML="what do you wanna do?";
        let newtodo=("");
        let list=[];


        /*while(pro!=="quit"){
            if(pro==="new"){
                newtodo= prompt("enter a todo");
                 list.push(newtodo);
                 alert( newtodo + " added to the list");


             }else if(pro==="list"){
               list.forEach(function (color){
                 prompt(list.indexOf(color)+"."+color)
               })



             }else if(pro==="delete"){
               index=prompt("enter the index of item");
               let deletedItem=list.splice(index,1)
               alert(deletedItem + " deleted from the list");
             }



              pro=prompt("what do you wanna do?");


        } alert("done!")*/


        }

  , 500);

/*We have defined a function, filteredArray, which takes arr, a nested array,
and elem as arguments, and returns a new array.
elem represents an element that may or may not be present on one or more of the arrays 
nested within arr. Modify the function, using a for loop, to return a filtered version of
the passed array such that any array nested within arr containing elem has been removed.*/

     function filteredArray(arr, elem) {
      let newArr = [];
      // change code below this line
      for(let i=0;i<arr.length;i++){
        if(arr[i].indexOf(elem)==-1){
          newArr.push(arr[i]);
        }
      }
    
      // change code above this line
      return newArr;
    }
    
    // change code here to test different cases:
    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));//just example

    //find the longest word;
    function findLongestWordLength(str) {
      let long=0;
    str=str.split(" ");
  
    for(let i = 0;i< str.length ; i++){
      if(str[i].length>long){
        long=str[i].length;
       
      }
    }
    return long;
  }
  /*Return an array consisting of the largest number from each provided sub-array.
   For simplicity, the provided array will contain exactly 4 sub-arrays.
*/
function largestOfFour(arr) {
  // You can do this!
let big=[];
let long=0;
for(let i=0;i<arr.length;i++){
   arr[i].sort(function(a, b){return b-a})
   big.push(arr[i][0])
  }
return big;
}

/*Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.*/

function repeatStringNumTimes(str, num) {
  let newa=str.split(" ");
  // repeat after me
   if(num>0){
for(let i=1;i<=num-1;i++){
  newa.push(str)
    
    
  }
}
if(num<=0){
  newa=[];
  
}
  return newa.join("")
}

repeatStringNumTimes("abc", 3)


/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 Return the truncated string with a ... ending.*/


function truncateString(str, num) {
  let newa=str.split("")
  let newar=[];
 if(str.length>num){
  for(let i=(num-1);i>=0;i--){
    newar.unshift(newa[i])
    }
   newar.push("...");
    return newar.join("")
    
 }else if(str.length<num||str.length===num) {
   return str;
 }  
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);


/*Create a function that looks through an array (first argument) and returns the first element in the array
 that passes a truth test (second argument). If no element passes the test, return undefined.*/


 function findElement(arr, func)  {
  
  let sum=[]
for(let i=0;i<arr.length;i++){
  if(func(arr[i]))    {
    sum.push(arr[i]);
  return sum[0]
    }
  
  }
 
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

/*You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.*/
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let newa=arr2.slice(0);
  for(let i=(arr1.length-1);i>=0;i--){
    newa.splice(n,0,arr1[i])
  }
  return newa;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*Write a function that splits an array (first argument)
 into groups the length of size (second argument) and returns them as a two-dimensional array.*/


 function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newarr=[];
  for(let i=0;i<=size;i++){
    if(arr.length>=size){
newarr.push(arr.splice(0,size));

    }if(arr.length>0) {
      newarr.push(arr.splice(0,size))
    }
  }
return newarr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

/////////FREE CODE CAMP.COM'S İNTERMEDİATE ALGORİTHMS PROBLEMS/////////////(just before  javascript certificate)

/* 1) Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 In other words, return the symmetric difference of the two arrays.*/

 function diffArray(arr1, arr2) {
  var newArr = [];
let nar=arr1.filter(a=>arr2.indexOf(a)==-1)
let zar=arr2.filter(x=>arr1.indexOf(x)==-1)
newArr=nar.concat(zar)
return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* 2) You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.*/

function destroyer(arr){
  let arg=Array.from(arguments);
  let newarr;
  newarr=arr.filter(a=>arg.indexOf(a)==-1)
  return newarr;
  }
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  // 3) Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let str1=str.replace(/([A-Z])|\_|\-/g, ' $1').trim()
let newa=str1.toLowerCase().trim().split(/\s*\s/)

console.log(str1)
console.log(newa.join("-"))
return newa.join("-")

  return str;
}
spinalCase("thisIsSpinalTap")
// JAVASCRİPT ALGORİTHMS CERTİFİCATE=> MY SOLUTİONS


// 1) Return true if the given string is a palindrome. Otherwise, return false
function palindrome(str) {
  
let newa=str.toUpperCase().trim().split(/\_|\^s|\W/).join("").split("")

let ar=[...newa]
let reversed=newa.reverse()

console.log(ar)
console.log(reversed)
console.log(ar.join(""))
console.log(reversed.join(""))
if(ar.join("")===reversed.join("")){
 return true;
} return false; 

}
palindrome("not a palindrome")
 

//3) Write a function which takes a ROT13 encoded string as input and returns a decoded string.
function rot13(str) { 
  let alp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newa=[];
  
   for(let i=0;i<str.length;i++){
   if(str.charCodeAt(i)>90||str.charCodeAt(i)<65){
     newa.push(str.charAt(i))
     }
else if(str.charCodeAt(i)-13>=65){
    newa.push(String.fromCharCode((alp.charCodeAt(alp.indexOf(str.charAt(i)))-13)))
}else if(str.charCodeAt(i)-13<65){
  newa.push(String.fromCharCode((alp.charCodeAt(alp.indexOf(str.charAt(i)))+13)))
}
}
console.log(newa.join(""))
return newa.join("");
}


rot13("SERR CVMMN!");

//4) Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
  let regex=/^1\s[(]\d{3}[)]\s\d{3}-\d{4}|^\d{3}-\d{3}-\d{4}|^1\s\d{3}-\d{3}-\d{4}|^[(]\d{3}[)]\d{3}-\d{4}|^1[(]\d{3}[)]\d{3}-\d{4}|^1\s\d{3}\s\d{3}\s\d{4}|^5\d{9}/
 
 
 
 return regex.test(str)
 console.log(regex.test(str))
 
 }
 
 telephoneCheck("1 555-555-5555")

//5) CASH REGİSTER
/*Design a cash register drawer function checkCashRegister() that accepts purchase price 
as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []}
 if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} 
with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]},
 with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.*/

 function checkCashRegister(price, cash, cid) {
  let moneyback=cash-price;
  let moneyback1=moneyback+0
  let vara=cid[8][1]/100;
   let varb=Math.floor(cid[7][1]/20);
  let varc=cid[6][1]/10;
  let vard=cid[5][1]/5;
  let vare=cid[4][1];
  let varf=cid[3][1]/0.25;
  let varg=cid[2][1]/0.1;
  let varh=cid[1][1]/0.05;
  let vari=cid[0][1]/0.01;
  let newa=[];
  let cashinhand=cid[0][1]+cid[1][1]+cid[2][1]*+cid[3][1]+cid[4][1]+cid[5][1]+cid[6][1]+cid[7][1]+cid[8][1];
  if(moneyback>cashinhand){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  if(cashinhand==moneyback){
    return {status: "CLOSED", change:cid}
  }if(moneyback<cashinhand){
    let a=Math.floor(moneyback/100.00);
  if(a>0){
      if(vara>0){
        if(vara<a){
          newa.push(cid[8]);
          moneyback-=vara*100.000;
        }else if(vara>a){
          moneyback-=a*100.000;
          newa.push(["ONE HUNDRED",a*100])
        }
      }
    }let b=Math.trunc(moneyback/20);  
  if(b>0){
      if(varb>0){
        if(varb<b){
          newa.push(cid[7]);
          moneyback=moneyback-(varb*20.0);
         }else if(varb>b){
          moneyback-=b*20.00;
          newa.push(["TWENTY",b*20])
        }
      }
    }let c=parseInt(moneyback/10);
  if(c>0){
      if(varc>0){
        if(varc<c){
          newa.push(cid[6]);
          moneyback-=varc*10;
        }else if(varc>c){
          moneyback-=c*10;
          newa.push(["TEN",c*10])
        }
      }
     }
    let d=parseInt(moneyback/5);
    if(d>0){
      if(vard>0){
        if(vard<d){
          newa.push(cid[5]);
          moneyback-=vard*5;
        }else if(vard>d){
          moneyback-=d*5;
          newa.push(["FIVE",d*5])
          } 
      }
    }let e=parseInt(moneyback);
  if(e>0){
      if(vare>0){
        if(vare<e){
          newa.push(cid[4]);
          moneyback-=vare*1;
        }else if(vare>e){
          moneyback-=e*1;
          newa.push(["ONE",e*1])
        }
      }
    }let f=parseInt(moneyback/0.25);
  if(f>0){
      if(varf>0){
        if(varf<f){
          newa.push(cid[3]);
          moneyback-=varf*0.25;
        }else if(varf>f){
          moneyback-=f*0.25;
          newa.push(["QUARTER",f*0.25])
        }
      }
    }let g=parseInt(moneyback/0.1);
  if(g>0){
      if(varg>0){
        if(varg<g){
          newa.push(cid[2]);
          moneyback-=varg*0.1;
        }else if(varg>g){
          moneyback-=g*0.1;
          newa.push(["DIME",g*0.1])
        }
      }
    }
    let h=parseInt(moneyback/0.05);
  if(h>0){
      if(varh>0){
        if(varh<h){
          newa.push(cid[1]);
          moneyback-=varh*0.05;
        }else if(varh>h){
          moneyback-=h*0.05;
          newa.push(["NICKEL",h*0.05])
        }
      }
    }
    moneyback=moneyback.toFixed(2)  
   let i=parseInt(moneyback/0.01);
  if(i>0){
      if(vari>0){
        if(vari<i){
          newa.push(cid[0]);
          moneyback-=vari*0.01;
        }else if(vari>i){
          moneyback-=i*0.01;
          newa.push(["PENNY",i*0.01])
        } 
      }
     if(moneyback!==0){
     return  {status: "INSUFFICIENT_FUNDS", change: []}
    }if(cashinhand==0){
      return {status: "CLOSED", change:newa.sort((a,b)=>b[1]-a[1])}
      }
    }
return {status: "OPEN", change:newa.sort((a,b)=>b[1]-a[1])}  
}
}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
 ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

