/*??????? 2.
???????? ???????, ??????? ????????? ? ???????? ?????????? ?????? ? ??????, 
? ????? ????????? ???? ?? ? ??????????? ??????? ???????? ? ?????? ??????. 
??????? ?????? ?????????? true ??? false.*/

const obj = {name: 'Ivan', age: 18, city: 'Moscow'}; // ?????? ???????

function func(string,obj) {                
  return obj.hasOwnProperty(string);  // ????????? ??????? ? ??????? ????????
}

alert(func('city',obj));              // ????? ?? ?????
