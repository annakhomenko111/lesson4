// Масив 
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];

// Регулярка 
var re = /^[\w-\.]+@(gmail|yahoo)\.[\w-]{2,4}$/;

// Фільтр
var goodEmails = [];
for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i].email)) {
        goodEmails.push(arr[i].email);
    }
}


// Консоль
console.log(goodEmails);