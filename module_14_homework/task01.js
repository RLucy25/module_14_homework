/*??????? 1.

???????? ???????, ??????? ????????? ? ???????? ????????? ?????? ? ???????
 ? ??????? ??? ????? ? ???????? ?????? ??????????? ???????. ?????? ??????? ?? ?????? ?????????? ????????.*/
 
 const obj = {name: 'Ivan', age: 18, city: 'Moscow'}; // ??????
 func(obj);

 function func(obj) {                      
  for (let key in obj) {                
    if(obj.hasOwnProperty(key)){        // ??????????? ????????? ???????  
      console.log(`${key} : ${obj[key]}`)  // ??????? ? ??????? ????? ? ???????? ??????????? ???????
    }
  }
}
