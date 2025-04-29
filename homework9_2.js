// Регулярка
var re = /\b[^Aa\s]{6,}\b/g;

// Текст
var str = "Wonderful Joyful Happiness Time Task Apple";

// Пошук 
var matches = str.match(re);

// консоль
console.log(matches);