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


let n = 100
let num = 0
while (n>50) {
    n/=2;
    num++;
}
console.log(num)



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
/*
for (let i = 45; i++;) {
    if (i<=65) {
        console.log (i)
    }
    if (i<=670, i%10==0) {
        console.log (i)
    }
}
*/


function hello1(b) {
    console.log('Привет, JavaScript!')
}

hello1(a)