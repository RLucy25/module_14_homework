/*Задание 5.

Перепишите консольное приложение из предыдущего юнита на классы.*/

function Electronics(color, elecName, requiredPower) { //Функция - конструктор
  this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
  this.turnPowerOn = function(){                         //Метод для включения
  console.log(`Power ${elecName} is on.`)
  }
}

Electronics.prototype.turnPowerOff = function(){       //Метод для выключения из прототипа 
  console.log(`Power ${elecName} is off.`)
} 

class Notebook extends Electronics {   //Создаем класс 
    constructor(color, elecName, requiredPower) {
    super(color, elecName, requiredPower),   
    this.turnWifiOn = function(){		//Метод - возможность включить Wi-fi
     console.log(`Wi-fi ${elecName} is on now.`)
      }
   }
  }

const tableLamp = new Electronics('black', 'tableLamp', 60); //Объект настольная лампа

tableLamp.turnPowerOn(tableLamp); //Включена лампа

const notebook = new Notebook('grey', 'notebook', 100, true); //Объект ноутбук с возможностью подключения к wi-fi
notebook.turnWifiOn(notebook); // Подключен wi-fi 

console.log(`Overall required power is: ${tableLamp['requiredPower'] + notebook['requiredPower']}`); //выводим в консоль потребляемую мощность

//console.log(notebook);
//console.log(tableLamp);