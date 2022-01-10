/*Задание 3.
Напишите функцию, которая создает пустой объект, но без прототипа.*/

function func() {
  const obj = Object.create(null);         // Объект без прототипа
  console.log(Object.getPrototypeOf(obj)); // Проверка на прототип, получаем null
}

func();