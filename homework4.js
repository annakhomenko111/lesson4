// 'number' + 3 + 3
let question1 = 'number' + 3 + 3;
console.log("answer1:", question1);
console.log(typeof question1);
// якщо ви об'єднаєте рядок 'number' з числами 3 і 3, результат буде рядком. JavaScript спочатку об'єднує 'number' з 3, що дає 'number3', а потім додає ще один 3, що дає 'number33'.

// null + 3
let question2 = null + 3;
console.log("answer2:", question2);
console.log(typeof question2);
// якщо ви додасте null до числа 3, результат буде числом 3. Це відбувається тому, що null перетворюється на 0 під час арифметичних операцій.

// 5 && "qwerty"
let question3 = 5 && "qwerty";
console.log("answer3:", question3);
console.log(typeof question3);
// оператор && (логічне "і") повертає перше хибне значення або останнє істинне значення. Оскільки 5 є істинним значенням, оператор && перевіряє наступне значення і повертає "qwerty", яке також є істинним.

// +'40' + +'2' + "hillel";
let question4 = +'40' + +'2' + "hillel";
console.log("answer4:", question4);
console.log(typeof question4);
// якщо ви використовуєте оператор + перед рядком, він перетворює рядок на число. 40+2=42+'hellel'=42hillel

// '10' - 5 === 6;
let question5 = '10' - 5 === 6;
console.log("answer5:", question5);
console.log(typeof question5);
// якщо ви віднімаєте число від рядка, JavaScript спочатку намагається перетворити рядок на число. 10-5=5, 5!=6 - false

// true + false;
let question6 = true + false;
console.log("answer6:", question6);
console.log(typeof question6);
// якщо ви додаєте true і false, вони спочатку перетворюються на числа: true стає 1, а false стає 0. 1+0=1

// '4px' - 3;
let question7 = '4px' - 3;
console.log("answer7:", question7);
console.log(typeof question7);
// '4px' - це рядок, який перетворюється в NaN, NaN - 3 = Nan

// '4' - 3;
let question8 = '4' - 3;
console.log("answer8:", question8);
console.log(typeof question8);
// '4' перетворюється на число ( бо містить коректне число) -> 4-3=1

//'6' + 3 ** 0;
let question9 = '6' + 3 ** 0;
console.log("answer9:", question9);
console.log(typeof question9);
// '6'+'1'='61'

//12 / '6';
let question10 = 12 / '6';
console.log("answer10:", question10);
console.log(typeof question10);
// -,*,/ - перетворюється рядок у число, тобто 12/6=2

//'10' + (5 === 6)
let question11 = '10' + (5 === 6);
console.log("answer11:", question11);
console.log(typeof question11);
// '10' + 'false' = '10false' , бо falsе перетворився на рядок

// null == ''
let question12 = null == '';
console.log("answer12:", question12);
console.log(typeof question12);
//  null при нестрогому порівнянні -> undefined , а пустий рядок '' не  ні null, ні undefined. тобто результат false

// 3 ** (9 / 3)
let question13 = 3 ** (9 / 3);
console.log("answer13:", question13);
console.log(typeof question13);
//  три в степені 3 =27

// !!'false' == !!'true';
let question14 = !!'false' == !!'true';
console.log("answer14:", question14);
console.log(typeof question14);
// !!'false' -> !false -> true і аналогічно для true , потім порівнюємо true==true -> true

// 0 || '0' && 1;
let question15 = 0 || '0' && 1;
console.log("answer15:", question15);
console.log(typeof question15);
// && має виший пріорітет , '0' -не пуститй рядок(true) 1-число, не 0 (true)=1, тобто обидва true, повертається останній. далі обчислюємо по факту  0 || .логічне || повертає перше true або останнє false, якщо всі false. у нас 0-false 1-true. Результат 1 (перший true)

// (+null == false) < 1;
let question16 = (+null == false) < 1;
console.log("answer16:", question16);
console.log(typeof question16);
// унарний + перетворює null на число. при  не строгому порівнянні == false приводиться до 0-> 0==false і далі булеве true конвертуєтья на число , де true стає 1. 1<1 . Результат - false

// false && true || true;
let question17 = false && true || true;
console.log("answer17:", question17);
console.log(typeof question17);
// ? && має виший пріорітет, перше false=false. false|| true - оператор || повертає перше true, о оскільки false=false, обирається true. Результат True

// false && (false || true)
let question18 = false && (false || true);
console.log("answer18:", question18);
console.log(typeof question18);
// спочатку обчислення  (false || true)- || повертає перший true, false=false, true=true , отже вираз  (false || true) повертає true. обчислюємо false && true.   && повертає перший false якщо він обо останній або якщо всі true. Тому якщо перший false , повретає false. Результат - false 

// (+null == false) < 1 ** 5;
var question19 = (+null == false) < 1 ** 5;
console.log("answer19:", question19);
console.log(typeof question19);
// унарний + перетворює null на число . ==false  при == приводиться до числа 0 , тому (+null == false)=true. 1 ** 5=1 . Під час порівняння булеве  true приводиться до числа , де true=1. 1<1 .Результат- false
