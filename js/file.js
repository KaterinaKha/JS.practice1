"use strict";

// Замовлення турів:
// Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при реєстрації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.

const countries = ["Ukraine", "Poland", "Croatia", "Montenegro", "France", "USA"];
const countriesPrice = [100, 200, 300, 400, 500, 600];

let loginName = "";
let password = "";

//реєстрація
loginName = prompt("Введіть новий логін: ");
password = prompt("Введіть пароль");
console.log(`Ваш логін ${loginName}`);
console.log(`Ваш пароль ${password}`);

let username = "";
let userpassword = "";
do {
	username = prompt("Введіть ваш логін: ");
	userpassword = prompt("Введіть ваш пароль");
} while (username !== loginName || userpassword !== password);
console.log("Ласкаво просимо!");

let maxPrice = prompt("Введіть суму, яку ви готові витратити на тур");

const availableCountries = [];

for (let i = 0; i < countries.length; i++) {
	if (countriesPrice[i] <= maxPrice) {
		availableCountries.push(countries[i]);
	}
}

alert("Доступні країни: " + availableCountries.join(", "));

const selectedCountry = prompt("Введіть країну, яку бажаєте відвідати:");
const selectedCountryIndex = countries.indexOf(selectedCountry);

if (selectedCountryIndex === -1) {
	alert("Невірно введена країна.");
} else if (countriesPrice[selectedCountryIndex] > maxPrice) {
	alert("Ця країна поки недоступна для вашого гаманця.");
} else {
	const remainingBalance = maxPrice - countriesPrice[selectedCountryIndex];
	alert("Ваш тур до " + selectedCountry + " оплачено. Залишок на рахунку: " + remainingBalance);
}
