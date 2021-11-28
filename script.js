let pb = [
  "Здравствуйте!",
  "Я бот Вася",
  "До свидания, рад был пообщаться!",
  "Я хочу беседовать о",
];
let js = [
  "Язык был разработан Брендоном Айком за 10 дней.",
  "В JavaScript есть много методов для работы со строкой",
  "Массивы в JavaScript похожи на объекты",
];
let php = [
  "PHP — скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений",
  "Маскотом PHP является большой синий слон.",
  "Изначально этот язык был разработан, чтобы заменить набор Perl-скриптов для поддержки собственных персональных домашних страниц (также известной как PHP).",
];

let html = [
  "HTML — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.",
  "Тим Бернерс-Ли - британский учёный. Он изобрёл язык HTML, протокол HTTP и первый веб-браузер.",
  "И HTML, и CSS являются абсолютно необходимыми языками для того, чтобы быть разработчиком внешнего интерфейса. ",
];
let co = [js, php, html];
alert(pb[0]);
alert(pb[1]);

let str = prompt("Введите вопрос или !");

let n1 = str.toLowerCase();
console.log(n1);
if (n1.search("javascript") !== -1) {
  random(js);
} else if (n1.search("php") !== -1) {
  random(php);
} else if (n1.search("html") !== -1) {
  random(html);
} else if (n1 == "!") {
  alert(pb[2]);
} else {
  alert(pb[3] + ":");
  document.write("<button onclick='speak(co[0])''>JS</button>");
  document.write("<button onclick='speak(co[1])''>PHP</button>");
  document.write("<button onclick='speak(co[2])''>HTML</button>");
}
function speak(s) {
  random(s);
}
function random(arr) {
  let rand1 = Math.floor(Math.random() * arr.length);
  alert(arr[rand1]);
}

// function searche(n1) {
//   for (let i = 0; i < co.length; i++) {
//     if (n1.search("'" + co[i] + "'") !== -1) {
//       random(co[i]);
//     }
//   }
// }
