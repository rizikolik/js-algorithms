
//Some Algorithms solving
let list=[1,2,3,4,5,6]; // EXAMPLE ARRAY.

// 1)MAKE AN ARRAY  REVERSE
// array
let reverseli=[];
function reversemaker(a,index,arr){
    index=arr.length-1-index;
     reverseli[index]=a;
}
list.forEach(reversemaker);
prompt(reverseli);
 // 2)FİND İF AN ARRAY UNİFORM OR NOT
  
  let truecounter=0;   
function compare(a,index,arr){
    if(a===arr[index+1]){
      truecounter++;
      }}
list.forEach(compare);
function scor(){
    if(truecounter===(list.length-1)){
        prompt("this  an UNİFORM")
    }else prompt("not an uniform")
}
scor();
// 3) SUM OF AN ARRAY (WİTHOUT REDUCE) 
let sum=0;
function toplam(a,index,arr){
    if(typeof(a)=="number"){
        sum+=a;
    }
}
list.forEach(toplam);
prompt(sum);
// 4) MAX NUMBER İN AN ARRAY
function max(arr){
    arr.sort(function(a,b){
        a-b;})
        return prompt(arr[arr.length-1]);



}
max(list);

 