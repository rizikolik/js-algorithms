
function convertToRoman(num) {
    let roman=["I","V","X","L","C","D","M"];
    let numbers=[1,5,10,50,100,500,1000]
    let parse=parseInt(num%5)
    let parse1=parseInt(num%10);
    let newnum=[];
    if(numbers.indexOf(num)!==-1){///////member
       newnum.push(roman[numbers.indexOf(num)])
    }else /////possibilities
    for(let i=0;i<numbers.length;i++){
    if(num>numbers[i]&&num<numbers[i+1]){
     if(parseInt(num/numbers[i])<4){

        /////////FİRST  //////////////////////////////////
         for(let a=0;a<parseInt(num/numbers[i]);a++){
            newnum.push(roman[i])
        }if(parse==parse1&&parse<4){
            if(parse==0){
                newnum.push()
            }
            for(let b=0;b<parse;b++){
                newnum.push(roman[i-2])
                }
        }else if(parse==parse1&&parse==4){
            newnum.push("IV")
        }else if(parse<parse1&&parse<4){
            for(let c=0;c<parse;c++){
                newnum.push(roman[i-1])
                }

                }else if(parse<parse1&&parse==4){
        newnum.pop()
        newnum.push(roman[i-1],roman[i+1])
        }






//////////SECOND/////////////////////
      }else if(parseInt(num/numbers[i])==4){
          newnum.push(roman[i],roman[i+1])

///////////////THİRD////////////////
      }else if(parseInt(num/numbers[i])>4){
          newnum.push(roman[i+1],roman[i])
      }
}
}


    



console.log(newnum.join(""))
return newnum.join("");
}


convertToRoman(101);