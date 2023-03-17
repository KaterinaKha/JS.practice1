// // Логінізація користувача

// let userName = prompt("Введіть Ваш логін: ");

// if (userName === loginName) {
// 	alert(`Вітаємо ${userName}`);
// } else {
// 	alert("Ви ще не зареєстровані");
// }

// let userPass = prompt("Введіть Ваш пароль");

// if (userPass === password) {
// 	alert("Ура! Ви памятаєте свій пароль");
// } else {
// 	alert("Невірний пароль");
// }

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

function registration() {
	//реєстрація
	loginName = prompt("Введіть новий логін: ");
	password = prompt("Введіть пароль");
	console.log = `Ваш логін ${loginName}`;
	console.log = `Ваш пароль ${password}`;
}

registration();

let username = "";
let userpassword = "";
let msg = "";

function login() {
	//Логінізація
	username = prompt("Введіть ваш логін: ");
	userpassword = prompt("Введіть ваш пароль");
	if (username === loginName && userpassword === password) {
		msg = "Вітаємо!";
	} else {
		msg = "Спробуйте ще раз";
	}
}

login();

let maxPrice = prompt("Введіть суму, яку ви готові витратити на тур");
const availableCountries = [];

for (let i = 0; i < countries.length; i += i) {
	const element = array[index];

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
	alert("Ця країна недоступна за введеним бюджетом.");
} else {
	const remainingBalance = maxPrice - countriesPrice[selectedCountryIndex];
	alert("Ваш тур до " + selectedCountry + " оплачено. Залишок на рахунку: " + remainingBalance);
}
