/*Задание 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах. Определить иерархию электроприборов. Включить некоторые в розетку. 
Посчитать потребляемую мощность. Таких приборов должно быть, как минимум, два 
(например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает..*/

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

function wifiEnabled(color, elecName, requiredPower, wifiEnable) {       //Метод определяющий наличие wi-fi
	this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
	this.wifiEnable = wifiEnable,
  this.turnPowerOn = function(){                         //Метод для подключения
    console.log(`Wi-fi ${elecName} is on.`)
    }
  }

wifiEnabled.prototype = new Electronics();   //установка делегирующей связи

const tableLamp = new Electronics('black', 'tableLamp', 60); //Объект настольная лампа

tableLamp.turnPowerOn(tableLamp); //Включена лампа

const notebook = new wifiEnabled('grey', 'notebook', 100, true); //Объект ноутбук с возможностью подключения к wi-fi
notebook.turnPowerOn(notebook); // Подключен wi-fi 

console.log(`Overall required power is: ${tableLamp['requiredPower'] + notebook['requiredPower']}`); //выводим в консоль потребляемую мощность

//console.log(notebook);
//console.log(tableLamp);