// "use strict";

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

// //----------------------------------------------------------------
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

// 	return commonElements;
// 	// Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості likes
// // до акумулятора, початкове значення якого вкажемо 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// // для підрахунку лайків з колекції
// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

const tweets = [
	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
	{ id: "001", likes: 2, tags: ["html", "css"] },
	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
	{ id: "003", likes: 8, tags: ["css", "react"] },
	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
	tweets.reduce((allTags, tweet) => {
		allTags.push(...tweet.tags);

		return allTags;
	}, []);

const tags = getTags(tweets);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
	if (!acc.hasOwnProperty(tag)) {
		acc[tag] = 0;
	}

	acc[tag] += 1;

	return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);
