"use strict";

// // Замовлення турів:
// // Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// // Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при реєстрації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// // Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// // Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// // Вказуємо країну через prompt  і купляємо тур.
// // Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.

// const countries = ["Ukraine", "Poland", "Croatia", "Montenegro", "France", "USA"];
// const countriesPrice = [100, 200, 300, 400, 500, 600];

// let loginName = "";
// let password = "";

// //реєстрація
// loginName = prompt("Введіть новий логін: ");
// console.log(`Ваш логін ${loginName}`);
// password = prompt("Введіть пароль");
// console.log(`Ваш пароль ${password}`);

// let username = "";
// let userpassword = "";
// do {
// 	username = prompt("Введіть ваш логін: ");
// 	userpassword = prompt("Введіть ваш пароль");
// } while (username !== loginName || userpassword !== password);
// console.log("Ласкаво просимо!");

// let maxPrice = prompt("Введіть суму, яку ви готові витратити на тур");

// // ----Практичне заняття 2 --------------------------------------------------
// // Реалізуйте result
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// const result = a.concat(c, ...b);
// console.log(result); // ['a', 'b', 'c', 0, 1, 2, 3]

// // Реалізуйте result
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const b = a.slice(0, 3);
// const c = a.slice(6);
// const result = b.concat(b, c);

// console.log(result); // ["a", "b", "c", "a", "b", "c", "g", "h"]

// const arr = [1, 2, [3, 4], [5, 6], 7];
// console.log(foo(arr)); // [1, 2, 3, 4, 5, 6, 7]

// function foo(arr1) {
// 	let res = [];
// 	for (const elem of arr1) {
// 		if (Array.isArray(elem)) {
// 			res.push(...elem);
// 		} else {
// 			res.push(elem);
// 		}
// 	}
// 	return res;
// }
//-----------------
// const arr = [1, 2, [3, 4], [5, 6], 7];
// console.log(foo(arr)); // [1, 2, 3, 4, 5, 6, 7]

// function foo(arr1) {
// 	let res = [];
// 	for (const elem of arr1) {
// 		Array.isArray(elem) ? res.push(...elem) : res.push(elem);
// 		// res.push( Array.isArray(elem) ? (...elem) : elem)
// 	}
// 	return res;
// }
// function getCommonElements(firstArray, secondArray) {
// 	const commonElements = [];
// 	// Change code below this line

// 	firstArray.forEach(function (firstArray, index) {
// 		secondArray.forEach(function (secondArray, index) {
// 			if (firstArray === secondArray) commonElements.push(firstArray);
// 		});
// 	});
// ---------------------------------------------------

// const services = {
//   showMenu() {},
//   getMenu() {},
//   addOrder() {},
//   confirmOrder() {},
// };

// const torpedaDelivery = {
//   order: [],
//   chosenRestaurant: "",
//   getAvailableRestaurants() {},
//   chooseRestaurant() {},
//   chooseDishes() {},
// };

// torpedaDelivery.chooseRestaurant();
