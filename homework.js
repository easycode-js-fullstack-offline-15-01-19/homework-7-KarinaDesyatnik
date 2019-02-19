// -------------------------- Home work --------------------------
// -------------------------- Десятник Карина --------------------------
//  1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество 
//аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
// func(‘a’, ‘b’, ‘c’, ‘d’) → 
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

  function getArguments() {
	const [first, ...other] = arguments;
	return {first: first, other: other};
}

// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

// const organisation = {  
//   name: 'Google',   
//   info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
// };
// getInfo(organisation); → 
// Name: Google 
// Partners: Microsoft Facebook

const organisation = {
   name: 'Google',
   info: { 
      employees: ['Vlad', 'Olga'],
      partners: ['Microsoft', 'Facebook', 'Xing']
    }
};
function getInfo({name = 'Unknown', info: { employees: [], partners: [first, second]}}) {
  return console.log(`Name: ${name}, Partners: ${first},${second}`)
}
getInfo(organisation);

// 3. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
// function sum() {
//   const params = Array.prototype.slice.call(arguments);
//   if (!params.length) return 0;
//   return params.reduce(function (prev, next) { return prev + next; });
// }
// // sum(1, 2, 3, 4); // 10
// // sum(); // 0

  const sum = (...params) => {
    if (!params.length) return 0;
      return params.reduce((prev, next) => prev + next);
  }

