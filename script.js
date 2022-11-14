/*
let i=1;
while (i<=10) {
    console.log(i);
    i++;
}

for (let i=1; i<=10; i++) {
    console.log(i);
}


for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
    console.log(i);
    }
  }



let name = prompt('Введите ваше имя');
let town = prompt('Введите ваш город проживания');
let age = prompt('Введите ваш возраст');
console.log(`Добрый день ${name}, вы проживаете в городе ${town}, ваш вазраст - ${age}`);




let r = prompt('Сумма товаров в корзине');
if (r>10000) {
    w = r-(r*0.15);
    console.log(`В корзине товаров на сумму ${r}. С учетом скидки - ${w}`);
}  
 else if (r>5000) {
    w = r-(r*0.1);
    console.log(`В корзине товаров на сумму ${r}. С учетом скидки - ${w}`);
}  
else if (r>2000) {
    w = r-(r*0.05);
    console.log(`В корзине товаров на сумму ${r}. С учетом скидки - ${w}`);
} 
else (console.log(`Бесплатная доставка от 1000 рублей, до бесплатной доставки не 
хватает ${1000-r}`));




let sum = 10000;
let promo = prompt(`Стоимость товаров в корзине - ${sum} руб. Введите промокод`);
let p = 0.5;
if (promo=='DELFA') {
    sum=sum-(sum*p);
    console.log(`Скидка по промокоду составила ${p*100}%. Стоимость товаров - ${sum}`);
}
else {
    console.log('Промокод не подходит');
}

let count = 0;
let pass = 'qwerty';
ler errorCount;
while (count<5) {
    let passInput = prompt ('Введите пароль')
    if (passInput == pass) {
        console.log('Добрый день! Пароль введен верно!')
        break;
    } 
    else {
        console.log('Повторите ввод')
        errorCount++
    }
    if (errorCount==5) {
        console.log('Попытки ввода пароля закончились');
        break;
    }
    count++;
}



let n = 100
let num = 0
while (n>50) {
    n/=2;
    num++;
}
console.log(num)



let sum = 0;
for (let i=0; i<10; i++) {
    let result = +prompt('Введите число');
    if (result>0) {
        sum+=result;
    }
}
console.log(sum)


function msg(Username, year) {
    console.log(`Привет ${Username}, вам ${2022-year} лет`)
};
msg('Ярослава', 2006);


function ret(a) {
    if (a>=0) {
        console.log ('Число положительное')
    }
    else (console.log ('Число отрицательное'))
}
ret(9)
*/

/*
let i = 1
if (i=1) {
    console.log('Переменная i равна 1')
}



let r = 4
if (r<0) {
    console.log('Значение отрицательное')
}
else {
    console.log('Значение положительное')
}



let m = 4
let n
if (m>50) {
    n='большое'
}
else {
    n='маленькое'
}
console.log(n)



let a = 5
if (a=1) {
    console.log('Значение равно 1')
}
else if (a=2) {
    console.log('Значение равно 2')
}
else if (a=3) {
    console.log('Значение равно 3')
}
else {
    console.log('Неизвестное значение')
}



let s = 45
while (s>=45, s<=65) {
    console.log(s)
    s++
}



let w = 45
while (w>=45, w<=670) {
   if (w%10==0) { console.log(w) }
    w++
}

//Тут что-то страшное, потому что браузер зависает:(

for (let i = 45; i++;) {
    if (i<=65) {
        console.log (i)
    }
    if (i<=670, i%10==0) {
        console.log (i)
    }
}



function hello1(b) {
    console.log('Привет, JavaScript!')
}

hello1(a)


function season (a) {
    if (a.toLowerCase()=='весна') {
        console.log('март,апрель,май')
    }
    else if (a.toLowerCase()=='лето') {
        console.log('июнь,июль,август')
    }
    else if (a.toLowerCase()=='осень') {
        console.log('сентябрь,октябрь,ноябрь')
    }
    else if (a.toLowerCase()=='зима') {
        console.log('декабрь,январь,февраль')
    }
}
season(a='Весна')

function number(num) {
    if (num==1) {
        console.log('Вы ввели еденицу')
    }
    else {
        console.log('Введенное число не еденица')
    }
}
number(num=1)


let a = prompt('Введите количество баллов')
function mark(a) {
    if (a >= 90) {
        console.log('A')
    }
    else if (a >= 80) {
        console.log('B')
    }
    else if (a >= 70) {
        console.log('C')
    }
    else if (a >= 60) {
        console.log('D')
    }
    else {
        console.log('F')
    }
}
mark(a)


let text = prompt('Введите строку')
function low(text) {
    return text.toLowerCase()
}
console.log(low(text))


let c
let d
let e
function number(c,d,e) {
    c = Math.random() *100
    d = Math.random() *100
    e = Math.random() *100
    console.log(`${Math.round(c)}-${Math.round(d)}-${Math.round(e)}`)
}
number(c,d,e)
*/
/* 

let user = {
    name: 'John',
    age: 30,
    passport: {
        serial: 4412,
        number: 238650,
        date: '10.05.2000',
    },
    student: true,
}
console.log(user.passport.number);
delete user.student;
user.work = true;
if ('profession' in user === false) {
    user.profession = 'driver';
}
for (let key in user) {
    console.log(key)
}
for (let key in user) {
    console.log(user[key])
}
user.passport.number = 242187;
 


let car = {
    color: 'orange',
    engine: '2L',
    brand: 'toyota',
    drive: function() {
        console.log('driving')
    },
    park: function() {
        console.log('parking')
    },
    start: function() {
        console.log('starting')
    },
    stop: function() {
        console.log('stopping')
    },
    driver: {
        name: 'Ben',
        lastName: 'Folkner',
        old: 42,
        category: 'doctor',
    },
}
console.log(car);
car.driver.name = 'William'
for (let key in car.driver) {
    console.log(car.driver[key])
}
delete car.driver.lastName;

console.log(car.driver);

if ('model' in car === false) {
    console.log('Такое свойство отсутствует')
}
else {
    console.log(car.model)
}

for (let key in car) {
    if (typeof car[key] === 'string') {
    console.log(car[key])
    }
}

car.men = { 
    name: 'James',
    category: 'teacher'
}

console.log(car)

var men = 'men'
console.log(car[men]) 
*/


let num = [1,2,3,4,5,6];
console.log(num);

let str = ['Ёж','Белка','Кролик'];
console.log(str);

let arr = ['a', 'b', 'c', 'd'];
console.log(`${arr[0]}+${arr[1]}+${arr[2]}+${arr[3]}`)

let arr2 = [2,'Корова',4,'Баран']
console.log(arr2.length)

console.log(arr2[arr2.length-1])

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr)

for (let i=0; i<num.length; i++) {
console.log(num[i]+3)
}

let an = [];
 for (let i=0; i<=20; i++) {
        an.push(i);
    }
console.log(an) 

let se = []
for (let i=10; i<=40; i++) {
    if (i%2==0, i>=10) {
    se.push(i);
    }
}
console.log(se)

let rat = [1,5,0,-3,-1,6];
for (let i=0; i<rat.length; i++) {
    if (rat[i]== -1) {
        continue;
    }
    console.log(rat[i])
    }

for (let i=0; i<rat.length; i++) {
    let r = (rat.length-1) -i;
    console.log(rat[i])
}